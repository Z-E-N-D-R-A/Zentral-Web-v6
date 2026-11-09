(() => {
const C = window.KW, $ = s => document.querySelector(s);
const stage = $('#stage'), prog = $('#prog'), gate = $('#gate'), hud = $('#hud'), navDock = $('#nav-dock'), bgStage = $('#bg-stage');
const fmt = n => Math.round(n).toLocaleString('en');
const dayF = iso => new Date(iso + 'T12:00').toLocaleDateString('en', { month: 'long', day: 'numeric' });
const hrF = h => ((h + 11) % 12 + 1) + (h < 12 ? 'am' : 'pm');
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const cnt = n => `<b class="cnt" data-to="${n}">0</b>`;
const peak = a => a.indexOf(Math.max(...a));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const UNICODE16_EMO_SVG = {
  '\u{1FAE9}': `<svg class="emo" viewBox="0 0 64 64" aria-label="Exhausted face"><defs><radialGradient id="eg1" cx="50%" cy="38%" r="55%"><stop offset="0%" stop-color="#FFE566"/><stop offset="70%" stop-color="#FFBD2E"/><stop offset="100%" stop-color="#F59E0B"/></radialGradient></defs><circle cx="32" cy="32" r="28" fill="url(#eg1)"/><ellipse cx="21" cy="27" rx="5.5" ry="4" fill="#3B2314"/><ellipse cx="43" cy="27" rx="5.5" ry="4" fill="#3B2314"/><path d="M14 23c4-2 9-2 14 0M36 23c5-2 10-2 14 0" stroke="#854D0E" stroke-width="2.5" stroke-linecap="round"/><path d="M15 33c3.5 3.5 9.5 3.5 13 0M36 33c3.5 3.5 9.5 3.5 13 0" stroke="#9A3412" stroke-width="2.4" fill="none" stroke-linecap="round" opacity="0.65"/><path d="M23 45c4.5-2.5 13.5-2.5 18 0" stroke="#3B2314" stroke-width="3.2" fill="none" stroke-linecap="round"/></svg>`,
  '\u{1FAEA}': `<svg class="emo" viewBox="0 0 64 64" aria-label="Distorted face"><defs><radialGradient id="eg2" cx="45%" cy="35%" r="58%"><stop offset="0%" stop-color="#FFE566"/><stop offset="65%" stop-color="#FFBD2E"/><stop offset="100%" stop-color="#EA580C"/></radialGradient></defs><path d="M32 4C50 4 60 17 58 34c-2 16-11 26-27 26C14 60 5 48 6 31 7 15 16 4 32 4z" fill="url(#eg2)"/><circle cx="21" cy="26" r="6.5" fill="#fff"/><circle cx="22" cy="26" r="3.2" fill="#1E1B18"/><circle cx="43" cy="30" r="8" fill="#fff"/><circle cx="42" cy="30" r="3.8" fill="#1E1B18"/><path d="M17 44c5 4 11-3 16 1s9 2 13-2" stroke="#3B2314" stroke-width="3.5" fill="none" stroke-linecap="round"/></svg>`
};

const emo = k => {
  if (k.startsWith('c:')) {
    return `<img class="emo" alt="" src="https://cdn.discordapp.com/emojis/${k.split(':')[2]}.webp?size=64">`;
  }
  if (UNICODE16_EMO_SVG[k]) return UNICODE16_EMO_SVG[k];
  return k;
};

const ICONS = {
  sparkle: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/></svg>`,
  chat: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
  flame: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  calendar: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  trophy: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  clock: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  mic: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>`,
  smile: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  quote: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>`,
  grid: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
  at: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>`,
  award: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  user: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  pen: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  heart: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  trend: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  play: `<svg class="ico" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>`,
  pause: `<svg class="ico" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`,
  volOn: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  volOff: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  download: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  share: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  copy: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
  check: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  replay: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
  arrowL: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowR: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`
};

const PAL = [
  ['#050711', '#0d132a', '#4F46E5', '#0EA5E9', '#7C3AED', '#EC4899'],
  ['#090514', '#1a0e2e', '#7C3AED', '#EC4899', '#3B82F6', '#6366F1'],
  ['#040d14', '#08202c', '#0EA5E9', '#10B981', '#6366F1', '#38BDF8'],
  ['#0a0612', '#1d1033', '#8B5CF6', '#38BDF8', '#EC4899', '#F59E0B'],
  ['#050a18', '#0f1e3d', '#3B82F6', '#06B6D4', '#8B5CF6', '#60A5FA'],
  ['#060d12', '#0d2329', '#14B8A6', '#0EA5E9', '#6366F1', '#34D399']
];

const P = {
  night:  ['The Night Owl',       '🦉', 'Your best ideas show up after midnight.'],
  early:  ['The Early Bird',      '🌅', 'Typing before the rest of us are even awake.'],
  novel:  ['The Novelist',        '📜', 'Why send one message when you can send an essay?'],
  speed:  ['The Rapid-Fire',      '⚡', 'Four words, five messages, zero pauses.'],
  emoji:  ['The Expressive',      '😭', 'Words are strictly optional.'],
  laugh:  ['The Comedian',        '🤣', 'Cackling on a continuous loop.'],
  spark:  ['The Spark',           '🔥', 'You wake the chat up whenever it goes quiet.'],
  magnet: ['The Magnet',          '🧲', 'Everything you say collects reactions.'],
  ping:   ['The Dispatcher',      '📣', 'The @ key is your love language.'],
  dealer: ['The Curator',         '🎁', 'Links, memes, screenshots: always delivering.'],
  closer: ['The Closer',          '🎤', 'You always get the final word.'],
  flash:  ['The First Responder', '💨', 'You reply before the notification even fades.']
};

function initAmbientCanvas() {
  const c = $('#ambient');
  if (!c) return { pulse() {} };
  const x = c.getContext('2d');
  let W = innerWidth, H = innerHeight;
  const resize = () => {
    W = innerWidth; H = innerHeight;
    c.width = W;
    c.height = H;
  };
  resize();
  addEventListener('resize', resize);

  let pointer = { x: W * 0.5, y: H * 0.5, active: false };
  addEventListener('pointermove', e => {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.active = true;
  });

  let boost = 0, t = 0;
  let palColors = ['#4F46E5', '#0EA5E9', '#7C3AED', '#EC4899'];

  const stars = Array.from({ length: 46 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    r: 1 + Math.random() * 1.8,
    phase: Math.random() * Math.PI * 2
  }));

  let meteor = null;
  function spawnMeteor() {
    meteor = {
      x: Math.random() * W * 0.8 + W * 0.1,
      y: Math.random() * H * 0.35,
      vx: 7 + Math.random() * 5,
      vy: 3.5 + Math.random() * 3,
      len: 75 + Math.random() * 45,
      life: 1
    };
  }

  function tick() {
    x.clearRect(0, 0, W, H);
    t += 0.012 + boost * 0.025;
    boost *= 0.92;

    for (let w = 0; w < 2; w++) {
      x.save();
      x.beginPath();
      const baseY = H * (w === 0 ? 0.36 : 0.68);
      x.moveTo(0, baseY);
      for (let px = 0; px <= W + 60; px += 60) {
        const py = baseY +
          Math.sin(px * 0.003 + t + w * 2) * 55 +
          Math.cos(px * 0.007 - t * 0.8 + w) * 32;
        x.lineTo(px, py);
      }
      x.lineTo(W, H);
      x.lineTo(0, H);
      x.closePath();
      const grad = x.createLinearGradient(0, baseY - 80, 0, baseY + 220);
      grad.addColorStop(0, palColors[w % palColors.length] + '24');
      grad.addColorStop(0.5, palColors[(w + 1) % palColors.length] + '0c');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = grad;
      x.fill();
      x.restore();
    }

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.x += s.vx * (1 + boost * 3);
      s.y += s.vy * (1 + boost * 3);
      if (s.x < 0) s.x = W;
      if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H;
      if (s.y > H) s.y = 0;

      const twinkle = 0.35 + 0.45 * Math.sin(t * 2 + s.phase);
      x.fillStyle = `rgba(255, 255, 255, ${twinkle.toFixed(2)})`;
      x.beginPath();
      x.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      x.fill();

      for (let j = i + 1; j < stars.length; j++) {
        const o = stars[j];
        const dx = s.x - o.x, dy = s.y - o.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 13500) {
          const alpha = (1 - d2 / 13500) * 0.12;
          x.strokeStyle = `rgba(148, 163, 184, ${alpha.toFixed(3)})`;
          x.lineWidth = 0.8;
          x.beginPath();
          x.moveTo(s.x, s.y);
          x.lineTo(o.x, o.y);
          x.stroke();
        }
      }

      if (pointer.active) {
        const pdx = s.x - pointer.x, pdy = s.y - pointer.y;
        const pd2 = pdx * pdx + pdy * pdy;
        if (pd2 < 24000) {
          const alpha = (1 - pd2 / 24000) * 0.24;
          x.strokeStyle = `rgba(125, 211, 252, ${alpha.toFixed(3)})`;
          x.lineWidth = 1;
          x.beginPath();
          x.moveTo(s.x, s.y);
          x.lineTo(pointer.x, pointer.y);
          x.stroke();
        }
      }
    }

    if (!meteor && Math.random() < 0.008) spawnMeteor();
    if (meteor) {
      meteor.x += meteor.vx;
      meteor.y += meteor.vy;
      meteor.life -= 0.022;
      if (meteor.life <= 0 || meteor.x > W + 100 || meteor.y > H + 100) {
        meteor = null;
      } else {
        x.save();
        const mg = x.createLinearGradient(
          meteor.x, meteor.y,
          meteor.x - meteor.vx * 8, meteor.y - meteor.vy * 8
        );
        mg.addColorStop(0, `rgba(255, 255, 255, ${meteor.life})`);
        mg.addColorStop(1, 'rgba(56, 189, 248, 0)');
        x.strokeStyle = mg;
        x.lineWidth = 2;
        x.lineCap = 'round';
        x.beginPath();
        x.moveTo(meteor.x, meteor.y);
        x.lineTo(meteor.x - meteor.vx * 8, meteor.y - meteor.vy * 8);
        x.stroke();
        x.restore();
      }
    }

    if (!reduce) requestAnimationFrame(tick);
  }
  tick();
  return {
    pulse(cols) {
      if (cols) palColors = cols;
      boost = 1.5;
      if (Math.random() < 0.6) spawnMeteor();
    }
  };
}

const ambient = initAmbientCanvas();

const chart = (a, lab, fullLabels = null) => {
  const mx = Math.max(...a) || 1, pk = a.indexOf(mx);
  const peakLabel = fullLabels ? fullLabels[pk] : (lab[pk] || `#${pk + 1}`);
  return `
    <div class="chart-box">
      <div class="chart-meta">
        <span>Peak: <b>${esc(peakLabel)}</b> (${fmt(mx)} msgs)</span>
        <span class="chart-readout">Tap or hover any bar</span>
      </div>
      <div class="hours">
        ${a.map((v, i) => {
          const itemLabel = fullLabels ? fullLabels[i] : (lab[i] || `${i}`);
          return `<i class="${i === pk ? 'pk' : ''}" data-label="${esc(itemLabel)}" data-val="${fmt(v)} msgs" style="--i:${i};--h:${Math.max(5, v / mx * 100)}%"></i>`;
        }).join('')}
      </div>
      <div class="axis">${lab.map(l => `<span>${l}</span>`).join('')}</div>
    </div>`;
};

const HL = ['12am', '6am', '12pm', '6pm', '11pm'];
const H_FULL = Array.from({ length: 24 }, (_, h) => hrF(h));

const vocabGrid = (l, cols = 4) => {
  const mx = (l[0] && l[0][1]) || 1;
  return `
    <div class="vocab-grid${cols === 3 ? ' cols-3' : ''}">
      ${l.slice(0, cols === 3 ? 9 : 12).map(([w, c], i) => `
        <div class="vocab-card" style="--i:${i}">
          <div class="vc-top">
            <span class="vc-rank">#${i + 1}</span>
            <span class="vc-count">${fmt(c)}×</span>
          </div>
          <div class="vc-word">${esc(w)}</div>
          <div class="vc-bar"><div class="vc-fill" style="--w:${Math.max(12, Math.round(c / mx * 100))}%"></div></div>
        </div>
      `).join('')}
    </div>`;
};

const emojiShowcase = (list, totalEmojis) => {
  if (!list || !list.length) return '';
  const tot = totalEmojis || list.reduce((s, x) => s + x[1], 0) || 1;
  const [topKey, topCnt] = list[0];
  const topPct = Math.max(1, Math.round(topCnt / tot * 100));
  const rest = list.slice(1, 9);

  return `
    <div class="emo-showcase">
      <div class="emo-hero-card">
        <div class="emo-hero-orb">${emo(topKey)}</div>
        <div class="emo-hero-info">
          <span class="emo-crown">#1 MOST USED EMOJI</span>
          <div class="emo-hero-stat">${fmt(topCnt)} times</div>
          <div class="emo-hero-sub">${topPct}% of all ${fmt(tot)} emojis sent</div>
          <div class="vc-bar"><div class="vc-fill" style="--w:${Math.min(100, topPct)}%"></div></div>
        </div>
      </div>
      ${rest.length ? `
        <div class="emo-grid">
          ${rest.map(([k, c], i) => {
            const pct = Math.max(1, Math.round(c / tot * 100));
            return `
              <div class="emo-card" style="--i:${i}">
                <div class="ec-top">
                  <span class="vc-rank">#${i + 2}</span>
                  <div class="ec-meta">
                    <b>${fmt(c)}×</b>
                    <small>${pct}%</small>
                  </div>
                </div>
                <div class="ec-glyph">${emo(k)}</div>
                <div class="vc-bar"><div class="vc-fill" style="--w:${Math.max(12, Math.round(c / topCnt * 100))}%"></div></div>
              </div>`;
          }).join('')}
        </div>
      ` : ''}
    </div>`;
};

const tiles = (a, cls = '') => `<div class="tiles ${cls}">${a.map(([v, l], i) => `<div class="tile" style="--i:${i}"><b>${v}</b><span>${l}</span></div>`).join('')}</div>`;

const bars = (rows, f = fmt) => {
  const mx = Math.max(...rows.map(r => r[1])) || 1;
  return `<div class="bars-wrap">${rows.map(([n, c, you], i) => `
    <div class="row${you ? ' you' : ''}" style="--i:${i}">
      <span class="row-name">
        <span class="rk-badge">${i + 1}</span>
        <span>${esc(n)}</span>
        ${you ? '<span class="you-tag">YOU</span>' : ''}
      </span>
      <div class="track"><div class="fill" style="--w:${Math.max(4, c / mx * 100)}%"></div></div>
      <span class="row-val">${f(c)}</span>
    </div>`).join('')}</div>`;
};

let S, me, slides = [], idx = 0, cleanTimer = null, topEmoPoster = '😭', topEmoRawKey = '😭';

// Pick a clean printable emoji for the exported PNG poster (falls back to first standard Unicode emoji if #1 is a custom Discord emoji)
function resolvePosterEmoji(emoList) {
  if (!emoList || !emoList.length) return { text: '✨', raw: '✨' };
  const raw = emoList[0][0];
  const std = emoList.find(([k]) => !k.startsWith('c:'));
  if (!raw.startsWith('c:')) return { text: raw, raw };
  const customName = ':' + (raw.split(':')[1] || 'emoji') + ':';
  return { text: std ? std[0] : customName, raw };
}

function build() {
  const G = S.group, L = S.order.map(i => S.members[i]), N = L.length, Y = G.year;
  const isGroupOnly = !!me.groupOnly;
  const you = m => !isGroupOnly && m.id === me.id;
  const monthName = k => new Date(k + '-15T12:00').toLocaleDateString('en', { month: 'short' });
  const monthFull = k => new Date(k + '-15T12:00').toLocaleDateString('en', { month: 'long', year: 'numeric' });
  const wdN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][peak(G.wd)];
  const by = (k, n = N) => [...L].sort((a, b) => b[k] - a[k]).slice(0, n).map(m => [m.name, m[k], you(m)]);

  const welcomeSub = isGroupOnly
    ? `We analyzed all ${fmt(G.msgs)} messages across ${N} friends. Welcome to the ${Y} Group Edition.`
    : `We analyzed all ${fmt(G.msgs)} messages so you don't have to. Welcome back, ${esc(me.name)}.`;

  const g = [
    {
      cat: 'Overview',
      d: 6000,
      h: `<span class="eyebrow">${ICONS.sparkle}<span>${Y} Silly Recap</span></span>
          <p class="lead">${esc(G.name)}</p>
          <h1 class="big accent-grad">${Y} Recap</h1>
          <p class="sub">${welcomeSub}</p>`
    },
    {
      cat: 'Total Volume',
      d: 6500,
      h: `<span class="eyebrow">${ICONS.chat}<span>Collective Volume</span></span>
          <p class="lead">Together, the group sent</p>
          <h1 class="big">${cnt(G.msgs)}</h1>
          <p class="lead">messages across ${G.days} active days.</p>
          <p class="sub">That's <b>${fmt(G.words)} words</b> — roughly ${(G.words / 70000).toFixed(1)} full-length novels, averaging <b>${fmt(G.perDay)} messages</b> every single day.</p>`
    },
    {
      cat: 'Peak Day',
      d: 6000,
      h: `<span class="eyebrow">${ICONS.flame}<span>Peak Chaos</span></span>
          <p class="lead">The wildest day of ${Y} was</p>
          <h1 class="big sm accent-grad">${dayF(G.best[0])}</h1>
          <p class="lead"><b>${fmt(G.best[1])} messages</b> in a single 24-hour window.</p>
          <p class="sub">The notifications didn't stand a chance.</p>`
    },
    G.months.length > 1 && {
      cat: 'Timeline',
      d: 9000,
      h: `<span class="eyebrow">${ICONS.calendar}<span>Monthly Momentum</span></span>
          <p class="lead">Month-by-month activity</p>
          ${chart(G.months.map(m => m[1]), G.months.map(m => monthName(m[0])), G.months.map(m => monthFull(m[0])))}
          <p class="sub">Busiest month: <b>${monthName(G.months.reduce((a, b) => b[1] > a[1] ? b : a)[0])}</b> · Most active weekday: <b>${wdN}s</b>.</p>`
    },
    {
      cat: 'Leaderboard',
      d: 11500,
      h: `<span class="eyebrow">${ICONS.trophy}<span>Top Contributors</span></span>
          <p class="lead">Who kept the chat alive</p>
          ${bars(L.map(m => [m.name, m.msgs, you(m)]))}`
    },
    {
      cat: 'Group Rhythm',
      d: 9000,
      h: `<span class="eyebrow">${ICONS.clock}<span>Group Rhythm</span></span>
          <p class="lead">In your timezone, the group peaks at <b>${hrF(peak(G.hours))}</b></p>
          ${chart(G.hours, HL, H_FULL)}
          <p class="sub"><b>${fmt(G.night)} messages</b> were sent between midnight and 5am.</p>`
    },
    {
      cat: 'Vocabulary',
      d: 10000,
      h: `<span class="eyebrow">${ICONS.mic}<span>Group Vocabulary</span></span>
          <p class="lead">What you all said the most</p>
          ${vocabGrid(G.topWords, 4)}`
    },
    {
      cat: 'Emojis & Reactions',
      d: 10000,
      h: `<span class="eyebrow">${ICONS.smile}<span>Group Emojis</span></span>
          <p class="lead">Top Emojis of ${Y}</p>
          ${emojiShowcase(G.emoji, G.emoTotal)}
          <p class="sub"><b>${fmt(G.laugh)} laughs</b> logged (lol, mdr, 😭, 💀) and <b>${fmt(G.rx)} reactions</b> handed out across the group.</p>`
    },
    G.top && {
      cat: 'Hall of Fame',
      d: 8500,
      h: `<span class="eyebrow">${ICONS.quote}<span>Hall of Fame</span></span>
          <p class="lead">Most reacted message of the year</p>
          <div class="quote-card">
            <p class="quote">“${esc(G.top.text)}”</p>
            <div class="quote-meta">
              <span>— <b>${esc(G.top.by)}</b> · ${dayF(G.top.d)}</span>
              <span><b>${G.top.n} reactions</b></span>
            </div>
          </div>`
    },
    {
      cat: 'Group Numbers',
      d: 10500,
      h: `<span class="eyebrow">${ICONS.grid}<span>Group Breakdown</span></span>
          <p class="lead">${esc(G.name)} by the numbers</p>
          ${tiles([
            [fmt(G.links), 'links shared'],
            [fmt(G.att), 'attachments dropped'],
            [fmt(G.rx), 'reactions given'],
            [fmt(G.laugh), 'laughs logged'],
            [`${G.days} / ${G.span}`, 'active chat days'],
            [`${G.streak} days`, 'non-stop chat streak']
          ])}`
    },
    {
      cat: 'Most Pinged',
      d: 9000,
      h: `<span class="eyebrow">${ICONS.at}<span>Most Wanted</span></span>
          <p class="lead">Who everyone @mentions</p>
          ${bars(by('menIn', 6))}
          <p class="sub">Most pinged member: <b>${esc(G.pinged.name)}</b> (${fmt(G.pinged.menIn)} mentions).</p>`
    },
    {
      cat: 'Attendance',
      d: 11000,
      h: `<span class="eyebrow">${ICONS.calendar}<span>Attendance Leaderboard</span></span>
          <p class="lead">Who showed up the most days</p>
          ${bars(by('days'), n => n + 'd')}`
    },
    {
      cat: '2026 Awards',
      d: 16000,
      h: `<span class="eyebrow">${ICONS.award}<span>2026 Persona Awards</span></span>
          <p class="lead">And the awards go to… <small class="sub" style="font-size:13px">(tap any card to flip)</small></p>
          <div class="awards">
            ${G.awards.map((a, i) => `
              <div class="flip${!isGroupOnly && a.id === me.id ? ' you' : ''}" style="--i:${i}">
                <div class="fi">
                  <div class="ff"><em>${P[a.key][1]}</em><b>${P[a.key][0]}</b></div>
                  <div class="fb">
                    <span class="aw-role">${P[a.key][1]} ${P[a.key][0]}</span>
                    <b>${esc(a.who)}</b>
                    <small>${esc(a.stat)}</small>
                  </div>
                </div>
              </div>`).join('')}
          </div>`
    }
  ];

  let personal = [];
  if (!isGroupOnly) {
    const [title, icon, blurb] = P[me.persona.key];
    const rankLine = me.rank === 1 ? 'Undisputed #1 chatter.' : me.rank === N ? 'Selective, iconic appearances.' : me.rank <= 3 ? 'A podium finish!' : 'A core pillar of the group.';
    personal = [
      {
        cat: `${me.name}'s Story`,
        d: 5500,
        h: `<span class="eyebrow">${ICONS.user}<span>Personal Replay</span></span>
            <p class="lead">That was the group.</p>
            <h1 class="big sm accent-grad">Now it's ${esc(me.name)}'s turn.</h1>
            <p class="sub">We calculated your statistics for ${Y}.</p>`
      },
      {
        cat: 'Your Volume',
        d: 6500,
        h: `<span class="eyebrow">${ICONS.chat}<span>Your Impact</span></span>
            <p class="lead">${esc(me.name)}, you sent</p>
            <h1 class="big">${cnt(me.msgs)}</h1>
            <p class="lead">messages — <b>${me.share}%</b> of the entire chat (#${me.rank} of ${N}).</p>
            <p class="sub">${rankLine}</p>`
      },
      {
        cat: 'Your Words',
        d: 6500,
        h: `<span class="eyebrow">${ICONS.pen}<span>Word Count</span></span>
            <p class="lead">You typed a total of</p>
            <h1 class="big">${cnt(me.words)}</h1>
            <p class="lead">words across ${Y}.</p>
            <p class="sub">Your average message is <b>${me.avgw} words</b>, and your longest single message hit <b>${fmt(me.longest)} words</b>.</p>`
      },
      {
        cat: 'Your Local Hours',
        d: 9000,
        h: `<span class="eyebrow">${ICONS.clock}<span>Your Local Rhythm</span></span>
            <p class="lead">In your timezone, you peak at <b>${hrF(peak(me.hours))}</b></p>
            ${chart(me.hours, HL, H_FULL)}
            <p class="sub"><b>${fmt(me.night)}</b> of your messages were sent between midnight and 5am local time.</p>`
      },
      me.topWords.length && {
        cat: 'Signature Word',
        d: 9500,
        h: `<span class="eyebrow">${ICONS.mic}<span>Your Lexicon</span></span>
            <p class="lead">${me.sig.length ? 'Your signature word' : 'Your top word'}: <b>“${esc(me.sig[0] || me.topWords[0][0])}”</b></p>
            ${vocabGrid(me.topWords, 3)}`
      },
      me.emoji.length && {
        cat: 'Your Emojis',
        d: 9500,
        h: `<span class="eyebrow">${ICONS.smile}<span>Your Top Emojis</span></span>
            <p class="lead">Your go-to reactions across ${Y}</p>
            ${emojiShowcase(me.emoji, me.emoTotal)}`
      },
      me.buddy[1] > 0 && {
        cat: 'Chat Duo',
        d: 6500,
        h: `<span class="eyebrow">${ICONS.heart}<span>Dynamic Duo</span></span>
            <p class="lead">You and</p>
            <h1 class="big sm accent-grad">${esc(me.buddy[0])}</h1>
            <p class="lead">traded <b>${fmt(me.buddy[1])}</b> direct back-and-forth replies.</p>
            <p class="sub">Certified chat soulmates of ${Y}.</p>`
      },
      {
        cat: 'Your Peak Day',
        d: 6500,
        h: `<span class="eyebrow">${ICONS.trend}<span>Personal Peak</span></span>
            <p class="lead">Your busiest day was</p>
            <h1 class="big sm">${dayF(me.bestDay[0])}</h1>
            <p class="lead">with <b>${fmt(me.bestDay[1])} messages</b> sent.</p>
            <p class="sub">You showed up on <b>${me.days} days</b> (${me.daysPct}% of the span) with a <b>${me.streak}-day streak</b>.</p>`
      },
      {
        cat: 'Your Stats Bento',
        d: 11500,
        h: `<span class="eyebrow">${ICONS.grid}<span>Personal Breakdown</span></span>
            <p class="lead">${esc(me.name)}'s ${Y} in numbers</p>
            ${tiles([
              [`${me.days} days`, `active (${me.daysPct}% of period)`],
              [`${me.streak} days`, 'longest daily streak'],
              [fmt(me.men), '@mentions sent'],
              [fmt(me.menIn), 'times @mentioned'],
              [fmt(me.att), 'attachments shared'],
              [fmt(me.rx), 'reactions earned'],
              [fmt(me.laugh), 'laughs logged'],
              [me.rtText, 'median reply speed']
            ])}`
      },
      {
        cat: 'Your Persona',
        d: 9000,
        h: `<span class="eyebrow">${ICONS.award}<span>Your ${Y} Persona</span></span>
            <div class="hero">${icon}</div>
            <h1 class="big sm accent-grad">${title}</h1>
            <p class="lead">${blurb}</p>
            <p class="sub">Key stat: <b>${esc(me.persona.stat)}</b>.</p>`
      }
    ];
  }

  let fin;
  if (isGroupOnly) {
    const topChatter = L[0];
    const resolved = resolvePosterEmoji(G.emoji);
    topEmoPoster = resolved.text;
    topEmoRawKey = resolved.raw;
    const groupTiles = [
      [fmt(G.msgs), 'total messages'],
      [fmt(G.words), 'total words'],
      [`${topChatter.name} (${fmt(topChatter.msgs)})`, '#1 top chatter'],
      [hrF(peak(G.hours)), 'peak group hour'],
      [emo(G.emoji[0][0]), 'top group emoji'],
      [`${G.streak} days`, 'longest streak']
    ];
    fin = {
      cat: 'Summary Card',
      fin: 1,
      d: 0,
      h: `<span class="eyebrow">${ICONS.sparkle}<span>${Y} Silly Group Recap</span></span>
          <div class="sumcard">
            <div class="sc-top">
              <span class="sc-e">${ICONS.trophy}</span>
              <div>
                <b>${esc(G.name)}</b>
                <small>${Y} Silly Recap · ${N} Members</small>
              </div>
            </div>
            ${tiles(groupTiles, 'mini')}
            <div class="sc-foot">
              <span>Presented by ${esc(C.studio)}</span>
              <span>${G.days} Active Days · ${Y}</span>
            </div>
          </div>
          <div class="acts">
            <button class="btn" id="dl">${ICONS.download}<span>Save Poster</span></button>
            ${navigator.share ? `<button class="btn" id="sh">${ICONS.share}<span>Share</span></button>` : ''}
            <button class="btn alt" id="cp">${ICONS.copy}<span>Copy Summary</span></button>
            <button class="btn alt" id="again">${ICONS.replay}<span>Replay</span></button>
          </div>`
    };
  } else {
    const [title, icon] = P[me.persona.key];
    const resolved = resolvePosterEmoji(me.emoji);
    topEmoPoster = resolved.text;
    topEmoRawKey = resolved.raw;
    const sumTiles = [
      [fmt(me.msgs), `messages (#${me.rank} of ${N})`],
      [hrF(peak(me.hours)), 'peak local hour'],
      [esc(me.sig[0] || (me.topWords[0] || ['-'])[0]), 'signature word'],
      [me.emoji.length ? emo(me.emoji[0][0]) : '-', 'top emoji'],
      [`${me.days} days`, 'days active'],
      [`${me.streak} days`, 'longest streak']
    ];
    fin = {
      cat: 'Summary Card',
      fin: 1,
      d: 0,
      h: `<span class="eyebrow">${ICONS.sparkle}<span>${Y} Silly Personal Recap</span></span>
          <div class="sumcard">
            <div class="sc-top">
              <span class="sc-e">${icon}</span>
              <div>
                <b>${esc(me.name)}</b>
                <small>${title} · ${esc(G.name)}</small>
              </div>
            </div>
            ${tiles(sumTiles, 'mini')}
            <div class="sc-foot">
              <span>Presented by ${esc(C.studio)}</span>
              <span>${me.share}% of Group Chat</span>
            </div>
          </div>
          <div class="acts">
            <button class="btn" id="dl">${ICONS.download}<span>Save Poster</span></button>
            ${navigator.share ? `<button class="btn" id="sh">${ICONS.share}<span>Share</span></button>` : ''}
            <button class="btn alt" id="cp">${ICONS.copy}<span>Copy Summary</span></button>
            <button class="btn alt" id="again">${ICONS.replay}<span>Replay</span></button>
          </div>`
    };
  }

  slides = [...g, ...personal, fin].filter(Boolean);
  slides.topEmo = topEmoPoster;
}

function count(el) {
  const to = +el.dataset.to;
  if (reduce) return (el.textContent = fmt(to));
  const t0 = performance.now(), D = 1200;
  (function f(t) {
    const p = Math.min(1, (t - t0) / D);
    el.textContent = fmt(Math.round(to * (1 - (1 - p) ** 4)));
    if (p < 1) requestAnimationFrame(f);
  })(t0);
}

function updateHUD() {
  const counterEl = $('#hud-counter');
  const catEl = $('#dock-label');
  const prevBtn = $('#prev-btn');
  const nextBtn = $('#next-btn');
  const userPill = $('#hud-user');
  if (counterEl) counterEl.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  if (catEl && slides[idx]) catEl.textContent = slides[idx].cat || `Slide ${idx + 1}`;
  if (prevBtn) prevBtn.disabled = idx <= 0;
  if (nextBtn) nextBtn.disabled = idx >= slides.length - 1;
  if (userPill && me) userPill.textContent = me.groupOnly ? 'Group Edition' : me.name;
}

function go(i) {
  if (!slides.length || i < 0 || i >= slides.length) return;
  idx = i;
  if (window.KW_SFX) window.KW_SFX.whoosh();

  const s = slides[i], pal = PAL[i % PAL.length];
  ambient.pulse([pal[2], pal[3], pal[4], pal[5]]);

  if (bgStage) {
    bgStage.style.setProperty('--bg', pal[0]);
    bgStage.style.setProperty('--bg2', pal[1]);
    bgStage.style.setProperty('--ac', pal[2]);
    bgStage.style.setProperty('--c2', pal[3]);
    bgStage.style.setProperty('--c3', pal[4]);
    bgStage.style.setProperty('--c4', pal[5]);
  }

  if (cleanTimer) {
    clearTimeout(cleanTimer);
    cleanTimer = null;
  }
  stage.querySelectorAll('.slide.leaving').forEach(o => o.remove());
  const prevSlides = [...stage.querySelectorAll('.slide')];
  prevSlides.forEach(o => {
    o.classList.remove('enter', 'go');
    o.classList.add('leaving');
  });

  const el = document.createElement('section');
  el.className = 'slide enter';
  el.style.cssText = `--ac:${pal[2]};--c2:${pal[3]};--c3:${pal[4]}`;
  el.innerHTML = `<div class="in">${s.h}</div>`;
  el.querySelectorAll('.in > *').forEach((c, k) => c.style.setProperty('--i', k));
  stage.append(el);

  el.querySelectorAll('.chart-box').forEach(box => {
    const readout = box.querySelector('.chart-readout');
    const barsEls = box.querySelectorAll('.hours i');
    barsEls.forEach(b => {
      const show = () => {
        barsEls.forEach(o => o.classList.remove('active-bar'));
        b.classList.add('active-bar');
        if (readout) readout.textContent = `${b.dataset.label}: ${b.dataset.val}`;
      };
      b.addEventListener('pointerenter', show);
      b.addEventListener('click', e => { e.stopPropagation(); show(); });
    });
  });

  el.querySelectorAll('.flip').forEach(card => {
    card.addEventListener('click', e => {
      e.stopPropagation();
      card.classList.toggle('flipped-back');
    });
  });

  const dur = s.d !== undefined ? s.d : 7000;
  prog.style.setProperty('--dur', dur + 'ms');
  prog.innerHTML = slides.map((_, j) => `<i class="${j < i || (j === i && dur === 0) ? 'done' : j === i ? 'cur' : ''}"><b></b></i>`).join('');
  updateHUD();

  requestAnimationFrame(() => {
    el.classList.add('go');
    el.querySelectorAll('.cnt').forEach(count);
  });

  cleanTimer = setTimeout(() => {
    stage.querySelectorAll('.slide').forEach(o => o !== el && o.remove());
    cleanTimer = null;
  }, 270);

  if (s.fin && !reduce && window.confetti) setTimeout(window.confetti, 350);
}

prog.addEventListener('animationend', e => {
  if (e.animationName === 'fillbar' && !prog.classList.contains('pause')) {
    go(idx + 1);
  }
});

let down = 0, downY = 0;
stage.addEventListener('pointerdown', e => {
  if (e.target.closest('button, .flip, .hours i, #hud, #nav-dock')) return;
  down = Date.now();
  downY = e.clientY;
  prog.classList.add('pause');
  updatePauseBtn();
});

stage.addEventListener('pointerup', e => {
  if (!down) return;
  const elapsed = Date.now() - down;
  const dy = Math.abs(e.clientY - downY);
  down = 0;
  if (!manualPause) prog.classList.remove('pause');
  updatePauseBtn();
  if (elapsed < 260 && dy < 20) {
    go(idx + (e.clientX < innerWidth * 0.35 ? -1 : 1));
  }
});

stage.addEventListener('pointercancel', () => {
  down = 0;
  if (!manualPause) prog.classList.remove('pause');
  updatePauseBtn();
});

let manualPause = false;
function updatePauseBtn() {
  const btn = $('#pause-btn');
  if (!btn) return;
  const isPaused = prog.classList.contains('pause');
  btn.innerHTML = isPaused ? `${ICONS.play}<span>Play</span>` : `${ICONS.pause}<span>Pause</span>`;
}

function updateMuteBtn() {
  const btn = $('#mute-btn');
  if (!btn) return;
  btn.innerHTML = window.KW_SOUND.muted ? `${ICONS.volOff}<span>Muted</span>` : `${ICONS.volOn}<span>Sound</span>`;
}

addEventListener('keydown', e => {
  if (!slides.length || !gate.hidden) return;
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    go(idx + 1);
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    go(idx - 1);
  } else if (e.key.toLowerCase() === 'p') {
    manualPause = !manualPause;
    prog.classList.toggle('pause', manualPause);
    updatePauseBtn();
  }
});

async function cardImage() {
  const c = document.createElement('canvas');
  c.width = 1080;
  c.height = 1350;
  const x = c.getContext('2d');

  const g = x.createLinearGradient(0, 0, 1080, 1350);
  g.addColorStop(0, '#050711');
  g.addColorStop(0.5, '#0d132a');
  g.addColorStop(1, '#1a0e2e');
  x.fillStyle = g;
  x.fillRect(0, 0, 1080, 1350);

  [
    [920, 180, 520, 'rgba(79, 70, 229, 0.45)'],
    [160, 1180, 560, 'rgba(14, 165, 233, 0.38)'],
    [540, 620, 460, 'rgba(124, 58, 237, 0.25)']
  ].forEach(([cx, cy, r, col]) => {
    const rg = x.createRadialGradient(cx, cy, 0, cx, cy, r);
    rg.addColorStop(0, col);
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = rg;
    x.fillRect(0, 0, 1080, 1350);
  });

  x.fillStyle = 'rgba(255, 255, 255, 0.08)';
  x.strokeStyle = 'rgba(255, 255, 255, 0.24)';
  x.lineWidth = 2;
  x.beginPath();
  x.roundRect(54, 54, 972, 1242, 48);
  x.fill();
  x.stroke();

  x.fillStyle = '#fff';
  x.textBaseline = 'top';
  const fit = (t, weight, maxW, startPx) => {
    let px = startPx;
    do {
      x.font = `${weight} ${px}px -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif`;
      px -= 2;
    } while (x.measureText(t).width > maxW && px > 18);
  };

  const isGroupOnly = !!me.groupOnly;
  const G = S.group, N = Object.keys(S.members).length;

  x.fillStyle = '#7DD3FC';
  x.font = '700 28px -apple-system, BlinkMacSystemFont, sans-serif';
  x.fillText(`${G.year} SILLY RECAP`, 104, 110);

  x.fillStyle = '#ffffff';
  x.font = '800 52px -apple-system, BlinkMacSystemFont, sans-serif';
  x.fillText(G.name, 104, 155);

  const [title, icon] = isGroupOnly ? ['2026 Group Edition', '🏆'] : P[me.persona.key];
  x.font = '150px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
  x.fillText(icon, 104, 250);

  const heroTitle = isGroupOnly ? `${N} Friends · 1 Year` : me.name;
  fit(heroTitle, '900', 860, 82);
  x.fillStyle = '#ffffff';
  x.fillText(heroTitle, 104, 440);

  x.fillStyle = 'rgba(255, 255, 255, 0.88)';
  x.font = '600 40px -apple-system, BlinkMacSystemFont, sans-serif';
  x.fillText(title, 104, 540);

  const emojiValue = topEmoPoster || slides.topEmo || '😭';
  const T = isGroupOnly
    ? [
        [fmt(G.msgs), 'total messages'],
        [fmt(G.words), 'total words'],
        [S.members[S.order[0]].name, '#1 top chatter'],
        [hrF(peak(G.hours)), 'peak group hour'],
        [emojiValue, 'top emoji'],
        [`${G.streak} days`, 'longest streak']
      ]
    : [
        [fmt(me.msgs), `messages (#${me.rank} of ${N})`],
        [hrF(peak(me.hours)), 'peak local hour'],
        [me.sig[0] || (me.topWords[0] || ['-'])[0], 'signature word'],
        [emojiValue, 'top emoji'],
        [`${me.days} days`, 'days active'],
        [`${me.streak} days`, 'longest streak']
      ];

  for (let i = 0; i < T.length; i++) {
    const [v, l] = T[i];
    const tx = 104 + (i % 2) * 448;
    const ty = 640 + (i >> 1) * 182;
    x.fillStyle = 'rgba(255, 255, 255, 0.12)';
    x.strokeStyle = 'rgba(255, 255, 255, 0.24)';
    x.beginPath();
    x.roundRect(tx, ty, 424, 158, 28);
    x.fill();
    x.stroke();

    x.fillStyle = '#fff';
    if (i === 4 && UNICODE16_EMO_SVG[v]) {
      // Render SVG fallback onto canvas if top emoji is a Unicode 16 character
      try {
        const img = new Image();
        const svgBlob = new Blob([UNICODE16_EMO_SVG[v].replace('class="emo"', 'width="56" height="56" xmlns="http://www.w3.org/2000/svg"')], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(svgBlob);
        await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = url; });
        x.drawImage(img, tx + 28, ty + 24, 52, 52);
        URL.revokeObjectURL(url);
      } catch (_) {
        fit(String(v), '800', 372, 46);
        x.fillText(String(v), tx + 28, ty + 28);
      }
    } else {
      fit(String(v), '800', 372, 46);
      x.fillText(String(v), tx + 28, ty + 28);
    }

    x.fillStyle = 'rgba(255, 255, 255, 0.78)';
    x.font = '600 24px -apple-system, BlinkMacSystemFont, sans-serif';
    x.fillText(l, tx + 28, ty + 102);
  }

  x.fillStyle = 'rgba(255, 255, 255, 0.65)';
  x.font = '600 24px -apple-system, BlinkMacSystemFont, sans-serif';
  x.fillText(`Presented by ${C.studio}`, 104, 1225);

  const blob = await new Promise(r => c.toBlob(r, 'image/png'));
  const slug = (isGroupOnly ? 'group' : me.name).toLowerCase().replace(/\W+/g, '-');
  return new File([blob], `${G.year}-recap-${slug}.png`, { type: 'image/png' });
}

const shareText = () => {
  if (me.groupOnly) {
    return `${S.group.name} ${S.group.year} Silly Recap: ${fmt(S.group.msgs)} messages · ${fmt(S.group.words)} words · ${S.group.streak}-day streak! (Presented by ${C.studio})`;
  }
  return `My ${S.group.year} Silly Recap: ${P[me.persona.key][0]} · ${fmt(me.msgs)} messages (#${me.rank}) · peak hour ${hrF(peak(me.hours))}. (Presented by ${C.studio})`;
};

stage.addEventListener('click', async e => {
  const b = e.target.closest('button');
  if (!b) return;
  if (b.id === 'again') return go(0);
  if (b.id === 'cp') {
    try {
      await navigator.clipboard.writeText(shareText());
      b.innerHTML = `${ICONS.check}<span>Copied!</span>`;
    } catch (_) {
      b.innerHTML = `${ICONS.copy}<span>Copy unavailable</span>`;
    }
    setTimeout(() => (b.innerHTML = `${ICONS.copy}<span>Copy Summary</span>`), 1800);
    return;
  }
  if (b.id === 'dl' || b.id === 'sh') {
    const oldHTML = b.innerHTML;
    b.innerHTML = `${ICONS.sparkle}<span>Rendering…</span>`;
    const f = await cardImage();
    if (b.id === 'sh' && navigator.canShare && navigator.canShare({ files: [f] })) {
      try { await navigator.share({ files: [f], text: shareText() }); } catch (_) {}
    } else {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(f);
      a.download = f.name;
      a.click();
    }
    b.innerHTML = oldHTML;
  }
});

function wireChrome() {
  const prevBtn = $('#prev-btn');
  const nextBtn = $('#next-btn');
  const pauseBtn = $('#pause-btn');
  const muteBtn = $('#mute-btn');

  if (prevBtn) {
    prevBtn.innerHTML = ICONS.arrowL;
    prevBtn.onclick = () => go(idx - 1);
  }
  if (nextBtn) {
    nextBtn.innerHTML = ICONS.arrowR;
    nextBtn.onclick = () => go(idx + 1);
  }
  if (pauseBtn) {
    pauseBtn.onclick = () => {
      manualPause = !prog.classList.contains('pause');
      prog.classList.toggle('pause', manualPause);
      updatePauseBtn();
    };
  }
  if (muteBtn) {
    muteBtn.onclick = () => {
      window.KW_SOUND.muted = !window.KW_SOUND.muted;
      updateMuteBtn();
    };
  }
  updatePauseBtn();
  updateMuteBtn();
}

async function launchRecapFor(who) {
  if (who.groupOnly) {
    me = { id: '__group__', name: 'Group Edition', groupOnly: true };
  } else {
    me = S.members[who.id];
    if (!me) return Gate.error(`No ${C.year} messages found for ${who.name}.`);
  }

  // Apply the unlocked member's own timezone to all group time-based stats!
  const tz = window.decodeMemberTz ? window.decodeMemberTz(who) : -5;
  if (S.groupByTz && S.groupByTz[tz]) {
    Object.assign(S.group, S.groupByTz[tz]);
    if (S.group.top && S.groupByTz[tz].topDay) {
      S.group.top.d = S.groupByTz[tz].topDay;
    }
  }

  manualPause = false;
  prog.classList.remove('pause');
  build();

  gate.classList.add('out');
  await new Promise(r => setTimeout(r, 480));
  gate.hidden = true;

  await Gate.playIntro();

  prog.hidden = false;
  hud.hidden = false;
  navDock.hidden = false;
  updatePauseBtn();
  go(0);
}

// Boot
(async () => {
  wireChrome();
  const statsP = window.loadStats();
  statsP.catch(e => Gate.error(e.message));
  const who = await Gate.run();
  S = await statsP;
  await launchRecapFor(who);
})();
})();
