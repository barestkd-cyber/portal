/* BaresTKD - Shared Authentication Module
 * ---------------------------------------------------------------------------
 * One canonical copy of the auth logic that was duplicated across the five
 * apps (portal, curriculum, classplan, testing, leadership-signup): the
 * Supabase client init (storageKey "barestkd-auth"), sign-in, allowed-email
 * gated sign-up, sign-out, the forgot-password flow, the password-recovery
 * token-in-URL handler, and session pickup from the ?token/&refresh params the
 * portal appends when it launches an app.
 *
 * Load this AFTER the Supabase UMD bundle and BEFORE your app's own script:
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 *   <script src="https://portal.barestkd.fit/shared/auth.js"></script>
 *
 * It exposes a single global: window.BTKD
 *
 * Recommended startup sequence inside each app:
 *   async function initAuth(){
 *     // 1. Recovery link clicked? Take over and show the new-password UI.
 *     if (await BTKD.initResetHandler({ onRecovery: showNewPasswordModal })) return;
 *     // 2. Launched from the portal with a session in the URL? Adopt it.
 *     await BTKD.pickupSessionFromURL();
 *     // 3. Decide what to render.
 *     const session = await BTKD.getSession();
 *     if (session) { showApp(); } else { showLogin(); }
 *   }
 *
 * Every method returns plain data - no DOM assumptions - so each app keeps
 * wiring its own screens, buttons, and error elements.
 * ---------------------------------------------------------------------------
 */
(function () {
  'use strict';

  if (typeof supabase === 'undefined' || !supabase.createClient) {
    console.error('[BTKD] Supabase library not found. Load @supabase/supabase-js before shared/auth.js.');
    return;
  }

  // ── Config ───────────────────────────────────────────────────────────────
  var SUPABASE_URL = 'https://akdncbzxiwvihfcyijvm.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_uSGIk4_Tt1_BOmPBoC_U5A_Kp2032f5';

  // storageKey is shared so a session set in one *.barestkd.fit app is seen by
  // the others on the same origin; detectSessionInUrl lets Supabase parse its
  // own auth redirects.
  var sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    auth: {
      storageKey: 'barestkd-auth',
      storage: window.localStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false
    }
  });

  var _role = null; // cached role for the current session

  // ── Session ──────────────────────────────────────────────────────────────

  // Returns the active session object, or null if signed out.
  async function getSession() {
    var res = await sb.auth.getSession();
    return (res && res.data && res.data.session) || null;
  }

  // Returns the signed-in user's role from the profiles table ('student' if no
  // row/role), or null if signed out. Cached per session; pass {refresh:true}
  // to force a re-read. profiles.role is what drives the floor-table apps.
  async function getMyRole(opts) {
    opts = opts || {};
    if (_role && !opts.refresh) return _role;
    var session = await getSession();
    if (!session || !session.user) { _role = null; return null; }
    var res = await sb.from('profiles').select('role').eq('id', session.user.id).single();
    _role = (res && res.data && res.data.role) || 'student';
    return _role;
  }

  // ── Sign in / up / out ───────────────────────────────────────────────────

  // signIn({ email, password }) -> { user, error, code }
  //   error is a display-ready string (null on success); code is programmatic.
  async function signIn(creds) {
    creds = creds || {};
    var email = (creds.email || '').trim();
    var password = creds.password || '';
    var res = await sb.auth.signInWithPassword({ email: email, password: password });
    if (res.error) return { user: null, error: 'Incorrect email or password.', code: 'invalid_credentials' };
    _role = null;
    return { user: res.data.user, error: null, code: null };
  }

  // signUp({ name, email, password, confirm? }) -> { user, error, code }
  //   Gated by the is_email_allowed RPC: only emails on file can register.
  //   `confirm` is validated only when provided.
  async function signUp(info) {
    info = info || {};
    var name = (info.name || '').trim();
    var email = (info.email || '').trim().toLowerCase();
    var password = info.password || '';
    var confirm = info.confirm;

    if (!name || !email || !password) return { user: null, error: 'All fields required.', code: 'missing_fields' };
    if (password.length < 6) return { user: null, error: 'Password must be at least 6 characters.', code: 'weak_password' };
    if (confirm !== undefined && password !== confirm) return { user: null, error: 'Passwords do not match.', code: 'password_mismatch' };

    // Only emails on file with BaresTKD may create an account.
    var allowedRes = await sb.rpc('is_email_allowed', { check_email: email });
    if (!allowedRes.data) return { user: null, error: 'Your email is not on file with BaresTKD. Contact your instructor.', code: 'not_allowed' };

    var res = await sb.auth.signUp({ email: email, password: password, options: { data: { full_name: name } } });
    if (res.error) return { user: null, error: res.error.message, code: 'signup_failed' };

    // The profiles row is created automatically by a DB trigger. This upsert is
    // a best-effort attempt to also persist the display name and is intentionally
    // non-fatal - under RLS Phase 1 profile writes are reserved to staff, so for
    // a brand-new student this is a silent no-op and the trigger is authoritative.
    try { await sb.from('profiles').upsert({ id: res.data.user.id, email: email, name: name, role: 'student' }); } catch (e) {}

    _role = null;
    return { user: res.data.user, error: null, code: null };
  }

  // Clears the current session everywhere on this origin.
  async function signOut() {
    await sb.auth.signOut();
    _role = null;
  }

  // ── Password recovery ────────────────────────────────────────────────────

  // initResetHandler({ onRecovery }) -> Promise<boolean>
  //   Detects a Supabase recovery token in the URL hash (the link emailed by
  //   sendPasswordReset). If found, it establishes the session, strips the
  //   token from the URL, invokes onRecovery() so the app can show its
  //   "set a new password" UI, and resolves true. Resolves false otherwise.
  //   When it returns true the caller should stop its normal init.
  async function initResetHandler(opts) {
    opts = opts || {};
    var hash = window.location.hash || '';
    if (hash.indexOf('type=recovery') === -1) return false;
    var params = new URLSearchParams(hash.replace('#', ''));
    var accessToken = params.get('access_token');
    var refreshToken = params.get('refresh_token');
    if (!accessToken || !refreshToken) return false;
    await sb.auth.setSession({ access_token: accessToken, refresh_token: refreshToken });
    window.history.replaceState({}, document.title, window.location.pathname);
    if (typeof opts.onRecovery === 'function') opts.onRecovery();
    return true;
  }

  // sendPasswordReset(email, redirectTo?) -> { error }
  //   Emails a reset link. redirectTo defaults to the current app's origin so
  //   the user lands back where they started; initResetHandler picks it up there.
  async function sendPasswordReset(email, redirectTo) {
    email = (email || '').trim();
    if (!email) return { error: 'Email required.' };
    var res = await sb.auth.resetPasswordForEmail(email, { redirectTo: redirectTo || window.location.origin });
    if (res.error) return { error: 'Error sending reset email. Please try again.' };
    return { error: null };
  }

  // completePasswordReset(newPassword) -> { user, error }
  //   Sets the new password after a recovery session is active (call from the
  //   new-password modal that initResetHandler's onRecovery opened).
  async function completePasswordReset(newPassword) {
    if (!newPassword || newPassword.length < 6) return { user: null, error: 'Password must be at least 6 characters.' };
    var res = await sb.auth.updateUser({ password: newPassword });
    if (res.error) {
      var msg = (res.error && res.error.message) || '';
      // Supabase rejects reusing the current password; make that explicit.
      if (/different from the old password/i.test(msg)) msg = 'Your new password must be different from your current password.';
      return { user: null, error: msg || 'Error updating password. Please try again.' };
    }
    var session = await getSession();
    _role = null;
    return { user: session ? session.user : null, error: null };
  }

  // ── Portal hand-off ──────────────────────────────────────────────────────

  // pickupSessionFromURL() -> Promise<boolean>
  //   When the portal launches an app it appends ?token=<access>&refresh=<refresh>.
  //   This adopts that session, strips the params from the URL, and resolves
  //   true. Resolves false when no such params are present.
  async function pickupSessionFromURL() {
    var params = new URLSearchParams(window.location.search);
    var token = params.get('token');
    var refresh = params.get('refresh');
    if (!token || !refresh) return false;
    await sb.auth.setSession({ access_token: token, refresh_token: refresh });
    window.history.replaceState({}, document.title, window.location.pathname);
    return true;
  }

  // ── Idle logout ──────────────────────────────────────────────────────────
  // autoRefreshToken + persistSession means a session renews forever, so a
  // device left signed in stays signed in. That is fine for a parent on their
  // own phone and wrong for a staff tablet at the front desk, which can see
  // every contact and (since 2026-08-16) charge a card. So this is OPT-IN:
  // an app asks for it, the portal does not get it by surprise.
  //
  // Last-activity lives in localStorage so all tabs and all barestkd.fit apps
  // share one clock: typing in the CRM keeps Class Plan alive in the next tab,
  // and walking away expires both.
  var IDLE_KEY = 'barestkd-last-activity';
  var _idleTimer = null;

  function markActivity() {
    try { localStorage.setItem(IDLE_KEY, String(Date.now())); } catch (e) {}
  }

  function idleLogout(opts) {
    opts = opts || {};
    var minutes = Number(opts.minutes) || 30;
    var warnSeconds = Number(opts.warnSeconds) || 60;
    var onWarn = typeof opts.onWarn === 'function' ? opts.onWarn : null;
    var onLogout = typeof opts.onLogout === 'function' ? opts.onLogout : null;
    var limitMs = minutes * 60000;
    var warned = false;

    if (_idleTimer) clearInterval(_idleTimer);
    markActivity();

    // Real interaction only. mousemove would keep a device alive just because
    // a cat walked past it, which defeats the point.
    var events = ['pointerdown', 'keydown', 'touchstart', 'focus'];
    var lastWrite = 0;
    function bump() {
      var now = Date.now();
      if (now - lastWrite < 5000) return;   // throttle: this writes to storage
      lastWrite = now;
      warned = false;
      markActivity();
    }
    events.forEach(function (e) { window.addEventListener(e, bump, true); });

    _idleTimer = setInterval(async function () {
      var session = null;
      try { session = await getSession(); } catch (e) {}
      if (!session) return;                  // already signed out; nothing to do

      var last = 0;
      try { last = Number(localStorage.getItem(IDLE_KEY)) || 0; } catch (e) {}
      if (!last) { markActivity(); return; }
      var idleMs = Date.now() - last;

      if (idleMs >= limitMs) {
        clearInterval(_idleTimer);
        try { localStorage.removeItem(IDLE_KEY); } catch (e) {}
        await signOut();
        if (onLogout) onLogout();
        else location.reload();
        return;
      }
      if (!warned && onWarn && idleMs >= limitMs - warnSeconds * 1000) {
        warned = true;
        onWarn(Math.max(1, Math.round((limitMs - idleMs) / 1000)));
      }
    }, 15000);
  }

  // ── Public surface ───────────────────────────────────────────────────────
  window.BTKD = {
    sb: sb,
    signIn: signIn,
    signUp: signUp,
    signOut: signOut,
    idleLogout: idleLogout,
    markActivity: markActivity,
    getSession: getSession,
    getMyRole: getMyRole,
    initResetHandler: initResetHandler,
    pickupSessionFromURL: pickupSessionFromURL,
    // forgot-password helpers that pair with initResetHandler:
    sendPasswordReset: sendPasswordReset,
    completePasswordReset: completePasswordReset
  };
})();
