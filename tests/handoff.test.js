/* ============================================================================
 * The portal-to-app session handoff (audit A19)
 * ----------------------------------------------------------------------------
 * Plain Node. Run from the portal repo root:   node tests/handoff.test.js
 *
 * shared/auth.js is loaded by five apps. The portal used to hand them the
 * session as ?token=<access>&refresh=<refresh> - the query string, which every
 * request carried to the host and its logs, and which the Referer repeats. The
 * refresh token is long-lived. It now travels in the #fragment, which never
 * leaves the browser, and the URL is cleaned before anything is awaited.
 * ========================================================================== */
'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const AUTH = fs.readFileSync(path.join(__dirname, '..', 'shared', 'auth.js'), 'utf8');
const PORTAL = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
let passed = 0, failed = 0;
async function test(name, fn) {
  try { await fn(); console.log('  ok   ' + name); passed++; }
  catch (e) { console.error('  FAIL ' + name + '\n       ' + (e && e.message)); failed++; process.exitCode = 1; }
}
function grab(src, name) {
  const i = src.indexOf('function ' + name + '(');
  let d = 0;
  for (let k = src.indexOf('{', i); k < src.length; k++) {
    if (src[k] === '{') d++; else if (src[k] === '}' && --d === 0) return src.slice(src.lastIndexOf('async', i) >= i - 6 ? src.lastIndexOf('async', i) : i, k + 1);
  }
}

function run(href, { setSessionFails = false } = {}) {
  const u = new URL(href);
  const log = { urlWhenSetSessionRan: null, finalUrl: null, session: null };
  const loc = { search: u.search, hash: u.hash, pathname: u.pathname };
  const ctx = vm.createContext({
    URLSearchParams,
    window: {
      location: loc,
      history: { replaceState(_s, _t, url) { log.finalUrl = url; const n = new URL(url, 'https://x.fit');
        loc.search = n.search; loc.hash = ''; } },
    },
    document: { title: 't' },
    sb: { auth: { setSession: async (s) => {
      log.urlWhenSetSessionRan = loc.pathname + loc.search + loc.hash;
      log.session = s;
      if (setSessionFails) throw new Error('invalid refresh token');
      return { data: {}, error: null };
    } } },
  });
  vm.runInContext(grab(AUTH, 'pickupSessionFromURL'), ctx);
  return ctx.pickupSessionFromURL().then(ok => Object.assign(log, { ok, urlAfter: loc.pathname + loc.search + loc.hash }));
}

(async () => {
  await test('the portal writes the tokens into the fragment, never the query', () => {
    assert.ok(/url \+ '#token=' \+ encodeURIComponent\(session\.access_token\)/.test(PORTAL));
    assert.ok(!/url \+ '\?token='/.test(PORTAL), 'the query-string handoff must be gone');
  });

  await test('the portal hands a session only to our own apps', () => {
    const m = PORTAL.match(/const ours = (\/.*\/i)\.test\(url\);/);
    assert.ok(m, 'origin check missing');
    const re = vm.runInNewContext(m[1]);
    for (const good of ['https://curriculum.barestkd.fit', 'https://testing.barestkd.fit/', 'https://classplan.barestkd.fit'])
      assert.ok(re.test(good), good);
    for (const bad of ['https://barestkd-cyber.github.io/cert-tool/', 'https://evil.com/?x=barestkd.fit',
                       'https://barestkd.fit.evil.com', 'http://curriculum.barestkd.fit'])
      assert.ok(!re.test(bad), 'must NOT hand a session to ' + bad);
  });

  await test('an app adopts a session from the fragment', async () => {
    const r = await run('https://testing.barestkd.fit/#token=AAA&refresh=RRR');
    assert.strictEqual(r.ok, true);
    // Compared by value: the object was made inside the vm, so it has a
    // different prototype and deepStrictEqual rejects it on realm alone.
    assert.strictEqual(JSON.stringify(r.session), JSON.stringify({ access_token: 'AAA', refresh_token: 'RRR' }));
  });

  await test('the URL is cleaned BEFORE the session is set, not after', async () => {
    // Both forms, and setSession must actually run - a test that passes
    // because nothing was adopted proves nothing about the ordering.
    for (const href of ['https://testing.barestkd.fit/#token=AAA&refresh=RRR',
                        'https://testing.barestkd.fit/?token=AAA&refresh=RRR']) {
      const r = await run(href);
      assert.ok(r.urlWhenSetSessionRan !== null, 'setSession never ran for ' + href);
      assert.ok(!/AAA|RRR/.test(r.urlWhenSetSessionRan),
        'the tokens were still in the URL while awaiting: ' + r.urlWhenSetSessionRan);
    }
  });

  await test('a failed session leaves no token behind in the URL', async () => {
    for (const href of ['https://testing.barestkd.fit/#token=AAA&refresh=RRR',
                        'https://testing.barestkd.fit/?token=AAA&refresh=RRR']) {
      const r = await run(href, { setSessionFails: true });
      assert.strictEqual(r.ok, false, 'a failure must report false, not throw');
      assert.ok(!/AAA|RRR/.test(r.urlAfter), 'still in the address bar after a failure: ' + r.urlAfter);
    }
  });

  await test('a portal page cached from before still works (query read, never written)', async () => {
    const r = await run('https://testing.barestkd.fit/?token=AAA&refresh=RRR');
    assert.strictEqual(r.ok, true);
    assert.ok(!/AAA|RRR/.test(r.finalUrl));
  });

  await test('unrelated query parameters survive the cleanup', async () => {
    const r = await run('https://testing.barestkd.fit/?week=3#token=AAA&refresh=RRR');
    assert.ok(/week=3/.test(r.finalUrl), r.finalUrl);
    assert.ok(!/AAA|RRR/.test(r.finalUrl));
  });

  await test('no handoff in the URL means nothing happens', async () => {
    const r = await run('https://testing.barestkd.fit/');
    assert.strictEqual(r.ok, false);
    assert.strictEqual(r.session, null);
  });

  console.log('handoff: ' + passed + ' passed, ' + failed + ' failed');
})();
