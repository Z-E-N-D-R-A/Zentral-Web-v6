(() => {
const C = window.KW, $ = s => document.querySelector(s), gin = $('#gin');
const wait = ms => new Promise(r => setTimeout(r, ms));
let dead = false, clockTimer = null, stopToy = null;

document.title = '2026  Silly Group';

const GATE_ICONS = {
  sparkle: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/></svg>`,
  shield: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  lock: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  clock: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  bell: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  bolt: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
};

window.KW_SOUND = { muted: false };
function playNote(freq, type = 'sine', dur = 0.25, vol = 0.075, delay = 0) {
  if (window.KW_SOUND.muted) return;
  try {
    const ctx = playNote.ctx || (playNote.ctx = new (window.AudioContext || window.webkitAudioContext)());
    if (ctx.state === 'suspended') ctx.resume();
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.linearRampToValueAtTime(vol, t0 + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  } catch (_) {}
}

window.KW_SFX = {
  key(digit) {
    const scale = [523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77, 1046.5, 1174.66, 1318.5];
    const f = scale[Number(digit) % 10] || 659.25;
    playNote(f, 'sine', 0.14, 0.06);
  },
  back() {
    playNote(392, 'sine', 0.12, 0.045);
  },
  error() {
    playNote(185, 'triangle', 0.16, 0.08, 0);
    playNote(155, 'triangle', 0.22, 0.08, 0.1);
  },
  unlock() {
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => {
      playNote(f, 'sine', 0.55, 0.06, i * 0.06);
    });
  },
  whoosh() {
    playNote(349.23, 'sine', 0.16, 0.025, 0);
  }
};

function deriveKeyHash(code, salt) {
  let h1 = 0x811c9dc5 ^ salt;
  let h2 = 0xcbf29ce4 ^ (salt * 0x9e3779b1);
  const str = salt + ':' + code + ':KW2026';
  for (let round = 0; round < 4096; round++) {
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i) ^ (round & 0xff);
      h1 = Math.imul(h1 ^ ch, 0x01000193) >>> 0;
      h2 = Math.imul(h2 ^ (ch + round), 0x85ebca6b) >>> 0;
      h1 = ((h1 << 13) | (h1 >>> 19)) ^ h2;
      h2 = ((h2 << 17) | (h2 >>> 15)) ^ h1;
    }
  }
  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}

function matchPasscode(code) {
  if (!code || code.length !== 4) return null;
  for (const m of C.members) {
    const digest = deriveKeyHash(code, m.s);
    if (m.k && m.k.includes(digest)) {
      return { ...m, groupOnly: false };
    }
  }
  if (C.gk && C.gs) {
    const gDigest = deriveKeyHash(code, C.gs);
    if (C.gk.includes(gDigest)) {
      return {
        id: '__group__',
        name: 'Everyone',
        color: '#38BDF8',
        groupOnly: true
      };
    }
  }
  return null;
}

function playIntroClip() {
  return new Promise(resolve => {
    const overlay = $('#intro-overlay');
    const vid = $('#intro-vid');
    const skipBtn = $('#skip-intro');
    if (!overlay || !vid || !C.introVideo) return resolve();

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      vid.pause();
      overlay.classList.add('out');
      setTimeout(() => {
        overlay.hidden = true;
        overlay.classList.remove('out');
        resolve();
      }, 420);
    };

    vid.src = C.introVideo;
    overlay.hidden = false;

    const failTimer = setTimeout(() => {
      if (vid.readyState === 0) finish();
    }, 1800);

    vid.onended = () => { clearTimeout(failTimer); finish(); };
    vid.onerror = () => { clearTimeout(failTimer); finish(); };
    if (skipBtn) skipBtn.onclick = () => { clearTimeout(failTimer); finish(); };

    const playPromise = vid.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => {
        clearTimeout(failTimer);
      }).catch(() => {
        vid.muted = true;
        vid.play().then(() => clearTimeout(failTimer)).catch(() => {
          clearTimeout(failTimer);
          finish();
        });
      });
    }
  });
}

function initLockScreenToy(canvas, boostBtn) {
  if (!canvas) return () => {};
  const ctx = canvas.getContext('2d');
  let running = true;
  let W = 280, H = 108;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    W = Math.max(200, Math.round(rect.width || 280));
    H = Math.max(88, Math.round(rect.height || 108));
    canvas.width = W;
    canvas.height = H;
  };
  resize();
  addEventListener('resize', resize);

  const colors = ['#6366F1', '#38BDF8', '#EC4899', '#34D399', '#F59E0B', '#A855F7', '#F43F5E', '#22D3EE', '#EAB308', '#60A5FA'];
  const balls = colors.map((col, i) => ({
    x: 24 + (i * 26) % (W - 48),
    y: 22 + (i % 3) * 24,
    vx: (Math.random() - 0.5) * 3.2,
    vy: (Math.random() - 0.5) * 2.5,
    r: 10 + (i % 3) * 2,
    col
  }));

  let pointer = { x: -999, y: -999 };
  canvas.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    pointer.x = e.clientX - r.left;
    pointer.y = e.clientY - r.top;
  });
  canvas.addEventListener('pointerleave', () => {
    pointer.x = -999;
    pointer.y = -999;
  });

  const impulse = () => {
    playNote(587.33, 'sine', 0.12, 0.04);
    for (const b of balls) {
      b.vx += (Math.random() - 0.5) * 9;
      b.vy -= 3 + Math.random() * 5;
    }
  };
  canvas.addEventListener('click', impulse);
  if (boostBtn) boostBtn.addEventListener('click', e => { e.stopPropagation(); impulse(); });

  function step() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < balls.length; i++) {
      const b = balls[i];
      b.vy += 0.08;
      b.vx *= 0.994;
      b.vy *= 0.994;

      const dx = b.x - pointer.x, dy = b.y - pointer.y;
      const dist = Math.hypot(dx, dy);
      if (dist < b.r + 26 && dist > 0.1) {
        const force = (b.r + 26 - dist) * 0.18;
        b.vx += (dx / dist) * force;
        b.vy += (dy / dist) * force;
      }

      b.x += b.vx;
      b.y += b.vy;

      if (b.x < b.r) { b.x = b.r; b.vx = Math.abs(b.vx) * 0.88; }
      if (b.x > W - b.r) { b.x = W - b.r; b.vx = -Math.abs(b.vx) * 0.88; }
      if (b.y < b.r) { b.y = b.r; b.vy = Math.abs(b.vy) * 0.88; }
      if (b.y > H - b.r) {
        b.y = H - b.r;
        b.vy = -Math.abs(b.vy) * 0.84;
        if (Math.abs(b.vy) < 0.45) b.vy = -(1.2 + Math.random() * 1.2);
      }

      for (let j = i + 1; j < balls.length; j++) {
        const o = balls[j];
        const cx = o.x - b.x, cy = o.y - b.y;
        const d = Math.hypot(cx, cy);
        const minD = b.r + o.r;
        if (d < minD && d > 0.01) {
          const nx = cx / d, ny = cy / d;
          const overlap = (minD - d) * 0.5;
          b.x -= nx * overlap; b.y -= ny * overlap;
          o.x += nx * overlap; o.y += ny * overlap;
          const kx = b.vx - o.vx, ky = b.vy - o.vy;
          const p = nx * kx + ny * ky;
          if (p > 0) {
            b.vx -= p * nx * 0.9; b.vy -= p * ny * 0.9;
            o.vx += p * nx * 0.9; o.vy += p * ny * 0.9;
          }
        }
      }

      ctx.save();
      const grad = ctx.createRadialGradient(b.x - b.r * 0.35, b.y - b.r * 0.35, 1, b.x, b.y, b.r);
      grad.addColorStop(0, '#FFFFFF');
      grad.addColorStop(0.3, b.col);
      grad.addColorStop(1, 'rgba(10, 12, 28, 0.85)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.45)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }
    requestAnimationFrame(step);
  }
  step();
  return () => { running = false; removeEventListener('resize', resize); };
}

async function runPasscodeGate() {
  if (dead) return new Promise(() => {});

  gin.innerHTML = `
    <div class="home-layout">
      <section class="secret-portal liquid-glass" aria-label="2026 Silly Group Lock Screen">
        <div class="portal-top">
          <span class="chip liquid-pill">${GATE_ICONS.lock}<span>2026 SILLY GROUP · LOCKED</span></span>
        </div>

        <div class="ios-clock-block">
          <div class="ios-date" id="ios-date">Friday, November 6</div>
          <div class="ios-time" id="ios-time">15:15</div>
        </div>

        <div class="countdown-widget">
          <div class="cd-head">
            <span class="cd-title">${GATE_ICONS.clock}<span>2026 FINAL COUNTDOWN</span></span>
            <span class="cd-pct" id="cd-pct">85.0% elapsed</span>
          </div>
          <div class="cd-grid" id="cd-grid">
            <div class="cd-cell"><b id="cd-d">55</b><small>DAYS</small></div>
            <div class="cd-cell"><b id="cd-h">08</b><small>HRS</small></div>
            <div class="cd-cell"><b id="cd-m">44</b><small>MIN</small></div>
            <div class="cd-cell"><b id="cd-s">35</b><small>SEC</small></div>
          </div>
          <div class="vc-bar"><div class="vc-fill" id="cd-bar" style="--w:85%"></div></div>
        </div>

        <div class="toy-widget">
          <div class="toy-head">
            <span>Silly Jar</span>
            <button type="button" class="toy-btn" id="toy-boost">${GATE_ICONS.bolt}<span>Shake</span></button>
          </div>
          <canvas id="toy-canvas" height="108"></canvas>
        </div>

        <button type="button" class="ios-notif" id="ios-notif" aria-label="Cycle lock screen notification">
          <div class="notif-icon">${GATE_ICONS.bell}</div>
          <div class="notif-body">
            <div class="notif-top">
              <b>Silly Group Vault</b>
              <span id="notif-time">now</span>
            </div>
            <p id="notif-text">Someone told you your 4-digit code… right?</p>
          </div>
        </button>
      </section>

      <section class="gcard liquid-glass" id="pass-card" aria-label="Passcode Vault">
        <div class="gcard-glow"></div>

        <div class="lock-stage" id="lock-stage">
          <div class="lock-halo"></div>
          <div class="lock-ring-svg">
            <svg viewBox="0 0 120 120" class="ring-progress" aria-hidden="true">
              <circle cx="60" cy="60" r="52" class="ring-track"></circle>
              <circle cx="60" cy="60" r="52" class="ring-fill" id="ring-fill"></circle>
            </svg>
            <svg class="lock-icon" id="lock-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path class="lock-shackle" id="lock-shackle" d="M21 28V20C21 13.9249 25.9249 9 32 9C38.0751 9 43 13.9249 43 20V28" stroke="currentColor" stroke-width="4.2" stroke-linecap="round"/>
              <rect class="lock-body" x="14" y="28" width="36" height="27" rx="9" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="3.5"/>
              <circle cx="32" cy="40" r="3.2" fill="currentColor"/>
              <path d="M32 43V47.5" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>

        <div class="pass-entry-view" id="pass-entry-view">
          <div class="gate-header" id="gate-header">
            <h2 class="gate-title">Enter Passcode</h2>
            <p class="gd" id="gate-sub">4-digit member key required</p>
          </div>

          <div class="code-slots" id="code-slots" role="group" aria-label="4-digit passcode">
            <div class="slot" data-idx="0"><span class="slot-dot"></span><span class="slot-num"></span></div>
            <div class="slot" data-idx="1"><span class="slot-dot"></span><span class="slot-num"></span></div>
            <div class="slot" data-idx="2"><span class="slot-dot"></span><span class="slot-num"></span></div>
            <div class="slot" data-idx="3"><span class="slot-dot"></span><span class="slot-num"></span></div>
          </div>

          <p class="st" id="gate-status" aria-live="polite"></p>

          <div class="keypad" id="keypad" role="group" aria-label="Passcode keypad">
            ${[
              ['1', ''], ['2', 'ABC'], ['3', 'DEF'],
              ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'],
              ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ']
            ].map(([d, sub]) => `
              <button type="button" class="kbtn" data-key="${d}" aria-label="Digit ${d}">
                <span class="knum">${d}</span>
                ${sub ? `<small class="ksub">${sub}</small>` : '<small class="ksub">&nbsp;</small>'}
              </button>
            `).join('')}
            <button type="button" class="kbtn kfn" data-key="clear" aria-label="Clear digits">
              <span class="kfn-label">Clear</span>
            </button>
            <button type="button" class="kbtn" data-key="0" aria-label="Digit 0">
              <span class="knum">0</span>
              <small class="ksub">+</small>
            </button>
            <button type="button" class="kbtn kfn" data-key="back" aria-label="Delete last digit">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                <line x1="18" y1="9" x2="12" y2="15"></line>
                <line x1="12" y1="9" x2="18" y2="15"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="unlock-welcome" id="unlock-welcome" hidden>
          <div class="welcome-avatar" id="welcome-avatar"></div>
          <div class="welcome-badge" id="welcome-badge">${GATE_ICONS.shield}<span>ACCESS GRANTED</span></div>
          <h2 class="welcome-name" id="welcome-name"></h2>
          <p class="welcome-sub" id="welcome-sub"></p>
          <div class="unlock-loader"><i></i></div>
        </div>
      </section>
    </div>
  `;

  stopToy = initLockScreenToy($('#toy-canvas'), $('#toy-boost'));

  const notifs = [
    ['now', 'Someone told you your 4-digit code…right?'],
    ['6m ago', 'Hint: I come once a year, but I’m not a season. I bring joy and cheer, for a very good reason. Kids await my arrival with cake and a song. What am I?'],
    ['15m ago', 'Contents strictly classified until a valid member key is entered.']
  ];
  let nIdx = 0;
  const notifBtn = $('#ios-notif');
  if (notifBtn) {
    notifBtn.onclick = () => {
      playNote(659.25, 'sine', 0.1, 0.035);
      nIdx = (nIdx + 1) % notifs.length;
      $('#notif-time').textContent = notifs[nIdx][0];
      $('#notif-text').textContent = notifs[nIdx][1];
    };
  }

  // Live Clock & 2026 Year-End Countdown updater (ticks every second)
  const updateClockAndCountdown = () => {
    const now = new Date();
    const tEl = $('#ios-time'), dEl = $('#ios-date');
    if (tEl) {
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      tEl.textContent = `${hh}:${mm}`;
    }
    if (dEl) {
      dEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    }
    const start2026 = new Date('2026-01-01T00:00:00').getTime();
    const end2026 = new Date('2027-01-01T00:00:00').getTime();
    const cur = now.getTime();
    const rem = Math.max(0, end2026 - cur);
    const pct = Math.min(100, Math.max(0, ((cur - start2026) / (end2026 - start2026)) * 100));

    const days = Math.floor(rem / 86400000);
    const hrs = Math.floor((rem % 86400000) / 3600000);
    const mins = Math.floor((rem % 3600000) / 60000);
    const secs = Math.floor((rem % 60000) / 1000);

    const cdD = $('#cd-d'), cdH = $('#cd-h'), cdM = $('#cd-m'), cdS = $('#cd-s');
    const cdPct = $('#cd-pct'), cdBar = $('#cd-bar');
    if (cdD) cdD.textContent = String(days).padStart(2, '0');
    if (cdH) cdH.textContent = String(hrs).padStart(2, '0');
    if (cdM) cdM.textContent = String(mins).padStart(2, '0');
    if (cdS) cdS.textContent = String(secs).padStart(2, '0');
    if (cdPct) cdPct.textContent = `${pct.toFixed(1)}% of 2026 complete`;
    if (cdBar) cdBar.style.setProperty('--w', `${pct.toFixed(1)}%`);
  };
  updateClockAndCountdown();
  clockTimer = setInterval(updateClockAndCountdown, 1000);

  const card = $('#pass-card');
  const entryView = $('#pass-entry-view');
  const slots = [...card.querySelectorAll('.slot')];
  const ringFill = $('#ring-fill');
  const statusEl = $('#gate-status');
  const lockStage = $('#lock-stage');
  const keypad = $('#keypad');
  const slotsWrap = $('#code-slots');
  const welcomeEl = $('#unlock-welcome');

  let buf = '';
  let busy = false;
  let attempts = 0;
  const wrongMsgs = [
    'Passcode not recognized. Try again.',
    'Access denied. Invalid 4-digit key.',
    'Key rejected. Both date formats work.',
    'Still locked. Tap the notification for a hint.'
  ];

  function updateUI() {
    slots.forEach((s, i) => {
      const ch = buf[i] || '';
      const numEl = s.querySelector('.slot-num');
      if (ch) numEl.textContent = ch;
      s.classList.toggle('filled', i < buf.length);
      s.classList.toggle('active', i === buf.length && !busy);
    });
    const pct = (buf.length / 4) * 326.7;
    ringFill.style.strokeDashoffset = String(326.7 - pct);
    lockStage.classList.toggle('tense', buf.length > 0 && !busy);
  }

  updateUI();

  return new Promise(resolve => {
    async function verifyCode() {
      busy = true;
      updateUI();
      const matched = matchPasscode(buf);

      if (!matched) {
        window.KW_SFX.error();
        card.classList.remove('shake');
        void card.offsetWidth;
        card.classList.add('shake');
        slotsWrap.classList.add('error');
        lockStage.classList.add('error');
        statusEl.textContent = wrongMsgs[Math.min(attempts++, wrongMsgs.length - 1)];
        statusEl.className = 'st bad';

        await wait(480);
        buf = '';
        slotsWrap.classList.remove('error');
        lockStage.classList.remove('error');
        busy = false;
        updateUI();
        return;
      }

      // Valid passcode! Update browser tab title to "2026 Silly Recap"
      document.title = '2026 Silly Recap';
      if (clockTimer) clearInterval(clockTimer);
      if (stopToy) stopToy();

      window.KW_SFX.unlock();
      statusEl.textContent = '';
      slotsWrap.classList.add('success');
      lockStage.classList.remove('tense');
      lockStage.classList.add('unlocked');
      card.style.setProperty('--member-color', matched.color || '#38BDF8');
      card.classList.add('unlocking');

      await wait(360);

      entryView.hidden = true;

      const avatar = $('#welcome-avatar');
      const badgeSpan = welcomeEl.querySelector('#welcome-badge span');
      const wName = $('#welcome-name');
      const wSub = $('#welcome-sub');

      if (matched.groupOnly) {
        avatar.innerHTML = GATE_ICONS.sparkle;
        badgeSpan.textContent = 'GROUP PASS VERIFIED';
        wName.textContent = '2026 Silly Recap';
        wSub.textContent = 'Decrypting group archive…';
      } else {
        avatar.textContent = matched.name.slice(0, 2).toUpperCase();
        badgeSpan.textContent = 'IDENTITY VERIFIED';
        wName.textContent = `Welcome, ${matched.name}`;
        wSub.textContent = `Decrypting your ${C.year} Silly Recap…`;
      }

      welcomeEl.hidden = false;
      requestAnimationFrame(() => welcomeEl.classList.add('show'));
      if (window.confetti) window.confetti();

      await wait(1250);
      window.removeEventListener('keydown', onKey);
      resolve(matched);
    }

    function handleInput(key) {
      if (busy || dead) return;
      if (key === 'clear') {
        if (!buf.length) return;
        window.KW_SFX.back();
        buf = '';
        statusEl.textContent = '';
        updateUI();
        return;
      }
      if (key === 'back') {
        if (!buf.length) return;
        window.KW_SFX.back();
        buf = buf.slice(0, -1);
        statusEl.textContent = '';
        updateUI();
        return;
      }
      if (/^\d$/.test(key) && buf.length < 4) {
        window.KW_SFX.key(key);
        buf += key;
        statusEl.textContent = '';
        const btn = keypad.querySelector(`[data-key="${key}"]`);
        if (btn) {
          btn.classList.add('pressed');
          setTimeout(() => btn.classList.remove('pressed'), 140);
        }
        updateUI();
        if (buf.length === 4) {
          setTimeout(verifyCode, 90);
        }
      }
    }

    keypad.addEventListener('click', e => {
      const btn = e.target.closest('.kbtn');
      if (!btn) return;
      handleInput(btn.dataset.key);
    });

    function onKey(e) {
      if (dead || busy) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (/^\d$/.test(e.key)) {
        e.preventDefault();
        handleInput(e.key);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleInput('back');
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleInput('clear');
      }
    }

    window.addEventListener('keydown', onKey);
  });
}

window.Gate = {
  run: () => runPasscodeGate(),
  playIntro: () => playIntroClip(),
  error: msg => {
    dead = true;
    gin.innerHTML = `
      <div class="gcard liquid-glass error-card">
        <span class="chip liquid-pill">${GATE_ICONS.sparkle}<span>${C.studio} · ${C.year}</span></span>
        <h1 class="gate-title">Vault Unavailable</h1>
        <p class="gd">${msg}</p>
      </div>`;
  }
};

window.confetti = function () {
  const c = $('#fx');
  if (!c) return;
  const x = c.getContext('2d');
  const W = innerWidth, H = innerHeight;
  c.width = W;
  c.height = H;
  const palette = ['#6366F1', '#EC4899', '#38BDF8', '#34D399', '#F59E0B', '#A855F7', '#FFFFFF'];
  const ps = Array.from({ length: 85 }, () => {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.4;
    const speed = 5 + Math.random() * 10;
    return {
      x: W * 0.5 + (Math.random() - 0.5) * 180,
      y: H * 0.5,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      w: 5 + Math.random() * 6,
      h: 7 + Math.random() * 8,
      rot: Math.random() * 6.28,
      vrot: (Math.random() - 0.5) * 0.2,
      col: palette[(Math.random() * palette.length) | 0],
      alpha: 1
    };
  });
  (function frame() {
    x.clearRect(0, 0, W, H);
    let live = 0;
    for (const p of ps) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.28;
      p.rot += p.vrot;
      if (p.y > H * 0.72) p.alpha -= 0.03;
      if (p.y < H + 20 && p.alpha > 0.02) {
        live++;
        x.save();
        x.globalAlpha = p.alpha;
        x.translate(p.x, p.y);
        x.rotate(p.rot);
        x.fillStyle = p.col;
        x.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        x.restore();
      }
    }
    if (live > 0) requestAnimationFrame(frame);
    else x.clearRect(0, 0, W, H);
  })();
};
})();
