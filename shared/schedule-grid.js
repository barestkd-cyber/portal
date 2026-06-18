/* BaresTKD — Shared Schedule Grid module
 * ---------------------------------------------------------------------------
 * Self-contained extraction of classplan's schedule grid (the buildGrid()
 * renderer, its constants/helpers, and the grid CSS + color tokens). The CSS
 * and tokens are scoped to a `.btkd-grid-root` wrapper class so they don't
 * leak into the host app's global styles.
 *
 * Load after the page's other scripts, then:
 *   BTKDGrid.inject();                 // once — adds the scoped <style>
 *   BTKDGrid.render({ container, schedule, getCell, onCellClick,
 *                     isInteractive, weekStart, mode, canAssign });
 *
 * Exposes one global: window.BTKDGrid = { inject, render }
 * ---------------------------------------------------------------------------
 */
(function () {
  'use strict';

  // ── Grid constants & helpers (moved from classplan) ──────────────────────
  var GRID_START  = 16 * 60;          // 4:00 PM flush at top
  var GRID_END    = 20 * 60 + 15;     // 8:15 PM
  var GRID_SPAN   = GRID_END - GRID_START; // 210 min
  var PX_PER_MIN  = 2.0;              // pixels per minute — 210 min * 2.0 = 420px tall
  var SAT_OFFSET  = (9 * 60 + 30);    // 9:30 AM = same visual top as 4:00 PM weekdays

  // Time labels to show on left — the actual class start times
  var TIME_LABELS = [
    { h:16, m:0,  label:'4:00' },
    { h:16, m:30, label:'4:30' },
    { h:17, m:15, label:'5:15' },
    { h:17, m:45, label:'5:45' },
    { h:18, m:15, label:'6:15' },
    { h:19, m:0,  label:'7:00' },
    { h:20, m:0,  label:'8:00' },
  ];

  var DAYS_SHORT  = ['MON','TUE','WED','THU','FRI','SAT'];
  var MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  function fmtTimeAMPM(h, m) {
    var ap = h >= 12 ? 'PM' : 'AM';
    var dh = h % 12 || 12;
    return dh + ':' + String(m).padStart(2,'0') + ' ' + ap;
  }

  function minsFromGridTop(h, m, isSat) {
    if (isSat) return (h * 60 + m) - SAT_OFFSET;
    return (h * 60 + m) - GRID_START;
  }

  function getWeekStart(offset) {
    var now = new Date();
    var day = now.getDay(); // 0=Sun
    var mondayOffset = (day === 0) ? -6 : 1 - day;
    var monday = new Date(now);
    monday.setDate(now.getDate() + mondayOffset + offset * 7);
    monday.setHours(0,0,0,0);
    return monday;
  }

  // ── Scoped styles (injected once) ────────────────────────────────────────
  var _injected = false;

  function inject() {
    if (_injected) return;
    _injected = true;
    var style = document.createElement('style');
    style.id = 'btkd-grid-styles';
    style.textContent = [
      // Color tokens — dark default, light when the wrapper has .is-light.
      '.btkd-grid-root{',
      '--grid-line:#3a3a42; --grid-muted:#9a9aa2; --grid-bg:#0d0d0d;',
      '--bg-none:#1e1e22; --bg-unassigned:#1a1a1e; --bg-draft:#232329; --bg-sub:#2a2410; --bg-rev:#13291b; --bg-resub:#241030;',
      '--bd-none:#3a3a42; --bd-draft:#3a3a42; --bd-unassigned:#33333a; --bd-sub:#d9b85a; --bd-rev:#2ed573; --bd-resub:#a060c0;',
      '--prog-red:#ff5a5a; --prog-cubs:#ff9f43; --prog-ampd:#2ed573; --prog-kick:#4aa3ff; --prog-leader:#efce6b;',
      '--red:#c0392b;',
      '--text:#e8e8e8; --muted:#666;',
      '}',
      '.btkd-grid-root.is-light{',
      '--grid-line:#000000; --grid-muted:#7a828d; --grid-bg:#ffffff;',
      '--bg-none:#f4f8fa; --bg-unassigned:#eef2f6; --bg-draft:#eef2f6; --bg-sub:#fbf3da; --bg-rev:#e6f6ec; --bg-resub:#f3e8fb;',
      '--bd-none:#c4d0da; --bd-draft:#c4d0da; --bd-unassigned:#c4d0da; --bd-sub:#c9a53a; --bd-rev:#27ae60; --bd-resub:#8e44ad;',
      '--prog-red:#d62828; --prog-cubs:#e0701a; --prog-ampd:#1e9e54; --prog-kick:#2d7fd6; --prog-leader:#d4a216;',
      '--red:#b03020;',
      '--text:#111111; --muted:#666666;',
      '}',
      // Grid rules — copied from classplan, each selector scoped to .btkd-grid-root.
      '.btkd-grid-root .sched-grid{display:grid;grid-template-columns:repeat(6,minmax(96px,1fr));min-width:576px;border-top:1px solid var(--grid-line);border-left:1px solid var(--grid-line);}',
      '.btkd-grid-root .sg-day-hdr{background:var(--bg-none);border-right:1px solid var(--grid-line);border-bottom:1px solid var(--grid-line);padding:6px 6px;text-align:center;font-family:\'Barlow Condensed\',sans-serif;font-weight:900;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--text);}',
      '.btkd-grid-root .sg-day-hdr.today{}',
      '.btkd-grid-root .sg-day-col{border-right:1px solid var(--grid-line);display:flex;flex-direction:column;}',
      '.btkd-grid-root .day-filler{flex:1;background:var(--grid-bg);min-height:20px;}',
      // cursor/hover gated to interactive cells only (see render()).
      '.btkd-grid-root .class-cell{border:1px solid var(--grid-line);padding:6px 7px;transition:filter .12s;position:relative;text-align:center;}',
      '.btkd-grid-root .class-cell.is-interactive{cursor:pointer;}',
      '.btkd-grid-root .class-cell.is-interactive:hover{filter:brightness(1.35);}',
      '.btkd-grid-root .status-none{background:var(--bg-none);border-left-color:var(--grid-line);}',
      '.btkd-grid-root .status-draft{background:var(--bg-draft);border-left-color:var(--bd-draft);}',
      '.btkd-grid-root .status-submitted{background:var(--bg-sub);border-left-color:var(--bd-sub);}',
      '.btkd-grid-root .status-resubmitted{background:var(--bg-resub);border-left-color:var(--bd-resub);}',
      '.btkd-grid-root .status-reviewed{background:var(--bg-rev);border-left-color:var(--bd-rev);}',
      '.btkd-grid-root .status-unassigned{background:var(--bg-unassigned);border-left-color:var(--grid-line);}',
      '.btkd-grid-root .cell-time{font-family:\'Barlow Condensed\',sans-serif;font-size:12px;font-weight:600;letter-spacing:.06em;color:var(--grid-muted);margin-bottom:2px;}',
      '.btkd-grid-root .cell-program{font-family:\'Barlow Condensed\',sans-serif;font-weight:900;font-size:17px;letter-spacing:.02em;line-height:1.1;}',
      '.btkd-grid-root .cell-belt{font-family:\'Barlow Condensed\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;opacity:.65;margin-top:1px;}',
      '.btkd-grid-root .cell-instructor{font-family:\'Barlow Condensed\',sans-serif;font-size:11px;font-weight:600;letter-spacing:.04em;color:var(--grid-muted);margin-top:2px;}',
      '.btkd-grid-root .cell-unassigned-lbl{font-family:\'Barlow Condensed\',sans-serif;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--grid-muted);margin-top:2px;}',
      '.btkd-grid-root .prog-juniors,.btkd-grid-root .prog-teen,.btkd-grid-root .prog-all,.btkd-grid-root .prog-forms,.btkd-grid-root .prog-sparring{color:var(--prog-red);}',
      '.btkd-grid-root .prog-cubs{color:var(--prog-cubs);}',
      '.btkd-grid-root .prog-ampd{color:var(--prog-ampd);}',
      '.btkd-grid-root .prog-kick{color:var(--prog-kick);}',
      '.btkd-grid-root .prog-leader{color:var(--prog-leader);}',
      '.btkd-grid-root .prog-private{color:var(--muted);}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // ── Render (classplan's buildGrid, parameterized) ────────────────────────
  function render(opts) {
    var schedule      = opts.schedule;
    var getCell       = opts.getCell;
    var onCellClick   = opts.onCellClick;
    var isInteractive = opts.isInteractive || function () { return true; };
    var weekStart     = opts.weekStart;
    var canAssign     = opts.canAssign;

    var grid = opts.container;
    grid.innerHTML = '';
    grid.classList.add('btkd-grid-root');
    grid.classList.toggle('is-light', opts.mode === 'light');

    var totalH = Math.round(GRID_SPAN * PX_PER_MIN);

    grid.style.display = 'flex';
    grid.style.alignItems = 'stretch';
    grid.style.minWidth = '640px';
    grid.style.borderTop = '1px solid var(--grid-line)';

    // Check if any non-Saturday morning classes exist
    var hasMorning = schedule.some(function (t) { return t.day !== 5 && t.timeH * 60 + t.timeM < GRID_START; });

    // Calculate morning strip height based on total duration of morning classes
    // Each class sized by its duration at PX_PER_MIN scale, stacked
    var maxMorningH = 0;
    for (var dm = 0; dm < 5; dm++) {
      var dayMorningClasses = schedule.filter(function (t) { return t.day === dm && t.timeH * 60 + t.timeM < GRID_START; });
      var h = dayMorningClasses.reduce(function (sum, t) { return sum + (t.duration || 45); }, 0);
      if (h > maxMorningH) maxMorningH = h;
    }
    var morningStripH = hasMorning ? Math.round(maxMorningH * PX_PER_MIN) : 0;

    // ── TIME COLUMN ──
    var timeCol = document.createElement('div');
    timeCol.style.cssText = 'flex-shrink:0;width:44px;background:var(--bg-none);border-right:1px solid var(--grid-line);display:flex;flex-direction:column;';

    var dayHdrSpacer = document.createElement('div');
    dayHdrSpacer.style.cssText = 'height:36px;background:var(--grid-bg);border-bottom:1px solid var(--grid-line);flex-shrink:0;';
    timeCol.appendChild(dayHdrSpacer);

    if (hasMorning) {
      var mHdr = document.createElement('div');
      mHdr.style.cssText = 'height:' + morningStripH + 'px;border-bottom:2px solid var(--red);display:flex;align-items:center;justify-content:flex-end;padding-right:4px;';
      mHdr.innerHTML = '<span style="font-family:\'Barlow Condensed\',sans-serif;font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--red);writing-mode:vertical-rl;transform:rotate(180deg);">AM</span>';
      timeCol.appendChild(mHdr);
    }

    var timeBody = document.createElement('div');
    timeBody.style.cssText = 'position:relative;height:' + totalH + 'px;margin-top:2px;flex-shrink:0;';
    TIME_LABELS.forEach(function (t) {
      var offsetMins = (t.h * 60 + t.m) - GRID_START;
      if (offsetMins < 0 || offsetMins > GRID_SPAN) return;
      var top = Math.round(offsetMins * PX_PER_MIN);
      var lbl = document.createElement('div');
      lbl.style.cssText = 'position:absolute;top:' + top + 'px;left:0;right:0;font-family:\'Barlow Condensed\',sans-serif;font-size:9px;font-weight:700;letter-spacing:.04em;color:var(--muted);text-align:right;padding-right:4px;transform:translateY(1px);';
      lbl.textContent = t.label;
      timeBody.appendChild(lbl);
    });
    timeCol.appendChild(timeBody);
    grid.appendChild(timeCol);

    // ── DAY COLUMNS ──
    for (var d = 0; d < 6; d++) {
      var isSat = d === 5;
      var date = new Date(weekStart);
      date.setDate(weekStart.getDate() + d);
      var isToday = date.toDateString() === new Date().toDateString();

      var dayWrap = document.createElement('div');
      dayWrap.style.cssText = 'flex:1;min-width:0;display:flex;flex-direction:column;border-right:1px solid var(--grid-line);';

      // Day header
      var hdr = document.createElement('div');
      hdr.className = 'sg-day-hdr' + (isToday ? ' today' : '');
      hdr.style.height = '36px';
      hdr.innerHTML = DAYS_SHORT[d] + '<br><span style="font-size:9px;font-weight:600;color:var(--muted)">' + date.getDate() + '</span>';
      dayWrap.appendChild(hdr);

      // Morning strip — non-sat only, compact rows
      if (hasMorning && !isSat) {
        var strip = document.createElement('div');
        strip.style.cssText = 'height:' + morningStripH + 'px;border-bottom:2px solid var(--red);background:var(--grid-bg);position:relative;';
        var dayMorning = schedule
          .filter(function (t) { return t.day === d && t.timeH * 60 + t.timeM < GRID_START; })
          .sort(function (a,b) { return (a.timeH*60+a.timeM)-(b.timeH*60+b.timeM); });
        var stackTop = 0;
        dayMorning.forEach((function (dd) { return function (tmpl) {
          var pd = getCell(dd, tmpl.time);
          var instructor = pd.instructor || tmpl.defaultInstructor;
          var status = pd.status;
          var isUnassigned = !instructor && status === 'none';
          var pillH = Math.max(28, Math.round((tmpl.duration || 45) * PX_PER_MIN) - 2);
          var pill = document.createElement('div');
          pill.className = 'class-cell status-' + status + (isUnassigned ? ' status-unassigned' : '');
          pill.style.cssText = 'position:absolute;top:' + stackTop + 'px;height:' + pillH + 'px;left:2px;right:2px;border-radius:3px;overflow:hidden;padding:4px 6px;display:flex;flex-direction:column;justify-content:flex-start;';
          var beltDiv = tmpl.belt ? '<div class="cell-belt ' + tmpl.progCss + '">' + tmpl.belt + '</div>' : '';
          var instrDiv = instructor
            ? '<div class="cell-instructor">' + instructor + '</div>'
            : '<div class="cell-unassigned-lbl" style="font-size:8px;">' + (canAssign ? 'Assign' : '—') + '</div>';
          pill.innerHTML = '<div class="cell-time">' + fmtTimeAMPM(tmpl.timeH,tmpl.timeM) + '</div>' +
            '<div class="cell-program ' + tmpl.progCss + '">' + tmpl.label + '</div>' +
            beltDiv + instrDiv;
          var entry = Object.assign({}, tmpl, pd, { instructor: instructor });
          if (isInteractive(pd)) {
            pill.classList.add('is-interactive');
            pill.addEventListener('click', function () { onCellClick(entry); });
          }
          strip.appendChild(pill);
          stackTop += pillH + 2;
        }; })(d));
        dayWrap.appendChild(strip);
      } else if (hasMorning && isSat) {
        var spacer = document.createElement('div');
        spacer.style.cssText = 'height:' + morningStripH + 'px;border-bottom:2px solid var(--red);background:var(--grid-bg);';
        dayWrap.appendChild(spacer);
      }

      // Evening body
      var body = document.createElement('div');
      body.style.cssText = 'position:relative;height:' + totalH + 'px;background:var(--grid-bg);margin-top:2px;flex-shrink:0;';

      // Evening class cells (and Sat all cells)
      var dayClasses = schedule.filter(function (t) {
        if (t.day !== d) return false;
        if (isSat) return true;
        return t.timeH * 60 + t.timeM >= GRID_START;
      }).sort(function (a,b) { return (a.timeH*60+a.timeM)-(b.timeH*60+b.timeM); });

      dayClasses.forEach((function (dd, isSatVal) { return function (tmpl, idx) {
        var pd = getCell(dd, tmpl.time);
        var instructor = pd.instructor || tmpl.defaultInstructor;
        var status = pd.status;
        var isUnassigned = !instructor && status === 'none';

        var offsetMins = minsFromGridTop(tmpl.timeH, tmpl.timeM, isSatVal);
        if (offsetMins < 0) return;
        var top = Math.round(offsetMins * PX_PER_MIN);

        var nextClass = dayClasses[idx + 1];
        var maxMins = tmpl.duration || 45;
        if (nextClass) {
          var nextOffset = minsFromGridTop(nextClass.timeH, nextClass.timeM, isSatVal);
          maxMins = Math.min(maxMins, nextOffset - offsetMins);
        }
        var height = Math.max(28, Math.round(maxMins * PX_PER_MIN) - 2);

        var cell = document.createElement('div');
        cell.className = 'class-cell status-' + status + (isUnassigned ? ' status-unassigned' : '');
        cell.style.cssText = 'position:absolute;top:' + top + 'px;height:' + height + 'px;left:2px;right:2px;border-radius:3px;overflow:hidden;padding:4px 6px;display:flex;flex-direction:column;justify-content:flex-start;';

        var beltDiv = tmpl.belt ? '<div class="cell-belt ' + tmpl.progCss + '">' + tmpl.belt + '</div>' : '';
        var instrDiv = instructor
          ? '<div class="cell-instructor">' + instructor + '</div>'
          : '<div class="cell-unassigned-lbl" style="font-size:8px;">' + (canAssign ? 'Assign' : '—') + '</div>';
        cell.innerHTML = '<div class="cell-time">' + fmtTimeAMPM(tmpl.timeH, tmpl.timeM) + '</div>' +
          '<div class="cell-program ' + tmpl.progCss + '">' + tmpl.label + '</div>' +
          beltDiv + instrDiv;

        var entry = Object.assign({}, tmpl, pd, { instructor: instructor });
        if (isInteractive(pd)) {
          cell.classList.add('is-interactive');
          cell.addEventListener('click', function () { onCellClick(entry); });
        }
        body.appendChild(cell);
      }; })(d, isSat));

      dayWrap.appendChild(body);
      grid.appendChild(dayWrap);
    }
  }

  window.BTKDGrid = { inject: inject, render: render };
  window.BTKDGrid.getWeekStart = getWeekStart;
})();
