// Loads sgmsg.csv and computes all recap statistics in the browser.
// Both group and personal time-based stats are computed in the unlocked member's own timezone.
(() => {
const C = window.KW;
const FALLBACK = {"members":{"855733262164295720":{"id":"855733262164295720","name":"fwog","msgs":7462,"rank":1,"share":24.7,"words":44319,"avgw":5.9,"longest":418,"hours":[1100,524,41,0,0,6,11,27,70,40,129,320,319,224,241,298,253,311,243,234,322,548,1097,1104],"topWords":[["i'm",226],["cuz",194],["idk",153],["guys",152],["gays",124],["more",110],["oat",110],["them",110],["tho",106]],"sig":["gays","cuz","tbh"],"emoji":[["😭",65],["🐏",29],["🔥",20],["🗣",9],["🥀",7],["🐎",7],["🥺",4],["🙏",3],["🫩",3]],"emoTotal":223,"buddy":["Soda",2448],"bestDay":["2026-07-28",388],"rx":936,"days":95,"daysPct":100,"streak":95,"att":464,"links":394,"men":73,"menIn":135,"laugh":192,"night":1665,"rt":10,"rtText":"10 sec","persona":{"key":"novel","stat":"5.9 words per message"}},"1353409114889257092":{"id":"1353409114889257092","name":"Soda","msgs":5837,"rank":2,"share":19.3,"words":27103,"avgw":4.6,"longest":72,"hours":[425,0,0,0,0,0,6,109,162,202,339,210,143,239,199,130,354,43,148,89,459,782,827,971],"topWords":[["i'm",192],["love",127],["guys",112],["bro",101],["epic",82],["gonna",81],["real",76],["idk",70],["anyway",66]],"sig":["epic","love","y'all"],"emoji":[["😭",127],["🥀",113],["🫩",66],["💔",62],["😔",34],["💕",30],["🥹",20],["😂",17],["😛",16]],"emoTotal":646,"buddy":["fwog",2448],"bestDay":["2026-07-30",456],"rx":352,"days":75,"daysPct":79,"streak":22,"att":73,"links":11,"men":134,"menIn":78,"laugh":270,"night":425,"rt":6,"rtText":"6 sec","persona":{"key":"flash","stat":"replies in ~6 sec"}},"962453763103293495":{"id":"962453763103293495","name":"AXOLOTY","msgs":4139,"rank":3,"share":13.7,"words":17251,"avgw":4.2,"longest":213,"hours":[456,157,82,2,3,0,0,27,20,51,124,162,116,130,181,104,96,103,138,201,314,349,645,678],"topWords":[["i'm",131],["lmao",85],["good",64],["play",61],["that's",59],["cuz",54],["idk",52],["bro",50],["fuck",48]],"sig":["lmao","bruh","lmaooo"],"emoji":[["😭",134],["💀",42],["💔",41],["❤",35],["🔥",13],["c:skull_cry:1266072068244635719",13],["💕",12],["🥀",11],["🤣",10]],"emoTotal":427,"buddy":["fwog",1551],"bestDay":["2026-07-26",246],"rx":222,"days":81,"daysPct":85,"streak":74,"att":166,"links":114,"men":207,"menIn":79,"laugh":375,"night":700,"rt":10,"rtText":"10 sec","persona":{"key":"ping","stat":"207 @mentions sent"}},"866615556748869645":{"id":"866615556748869645","name":"oat","msgs":3417,"rank":4,"share":11.3,"words":18915,"avgw":5.5,"longest":293,"hours":[257,66,0,0,0,2,25,102,138,101,67,249,202,171,107,167,154,161,241,155,141,305,267,339],"topWords":[["i'm",130],["cuz",83],["that's",76],["idk",67],["mean",61],["tho",51],["well",51],["whatever",51],["bigger",51]],"sig":["wiggle","bigger","whatever"],"emoji":[["😭",133],["🫩",28],["💔",28],["💀",24],["🥀",8],["💞",5],["😂",4],["🔥",4],["🙏",3]],"emoTotal":294,"buddy":["fwog",1382],"bestDay":["2026-07-27",281],"rx":218,"days":93,"daysPct":98,"streak":82,"att":115,"links":161,"men":21,"menIn":87,"laugh":241,"night":323,"rt":11,"rtText":"11 sec","persona":{"key":"spark","stat":"42 conversations started"}},"680059125719498807":{"id":"680059125719498807","name":"Walmart","msgs":2703,"rank":5,"share":8.9,"words":14895,"avgw":5.5,"longest":417,"hours":[79,0,0,0,0,0,12,4,20,64,187,198,96,107,129,13,79,83,105,118,347,288,527,247],"topWords":[["show",116],["studies",111],["axoloty",64],["goon",63],["idk",60],["night",44],["oat",40],["bro",30],["wait",30]],"sig":["studies","show","axoloty"],"emoji":[["😭",13],["🤩",7],["💀",5],["❌",4],["🔥",4],["✅",3],["❤",3],["🥹",3],["😏",3]],"emoTotal":105,"buddy":["fwog",852],"bestDay":["2026-07-26",294],"rx":174,"days":74,"daysPct":78,"streak":41,"att":167,"links":170,"men":90,"menIn":43,"laugh":26,"night":79,"rt":6,"rtText":"6 sec","persona":{"key":"magnet","stat":"174 reactions received"}},"1031963671829684264":{"id":"1031963671829684264","name":"La Brioche","msgs":2593,"rank":6,"share":8.6,"words":11110,"avgw":4.3,"longest":29,"hours":[387,86,44,2,0,0,4,13,7,5,37,68,98,42,122,128,121,68,106,69,109,226,406,445],"topWords":[["i'm",91],["that's",56],["can't",38],["cause",33],["wait",33],["good",32],["idk",32],["play",29],["bro",29]],"sig":["cause","that's","i'm"],"emoji":[["😭",175],["🫩",18],["💀",13],["😂",10],["🥀",8],["💔",6],["c:Uuh:1258801022621716652",6],["🔥",5],["🥹",4]],"emoTotal":307,"buddy":["fwog",1198],"bestDay":["2026-07-24",201],"rx":266,"days":83,"daysPct":87,"streak":35,"att":55,"links":69,"men":13,"menIn":53,"laugh":264,"night":519,"rt":9,"rtText":"9 sec","persona":{"key":"laugh","stat":"264 laughs logged"}},"944501395955011604":{"id":"944501395955011604","name":"Bupeti","msgs":2325,"rank":7,"share":7.7,"words":10284,"avgw":4.4,"longest":348,"hours":[249,160,30,3,0,0,1,25,88,95,115,202,72,39,114,125,72,40,89,76,80,127,209,314],"topWords":[["bro",84],["cuz",41],["yea",40],["well",35],["tho",33],["thats",32],["mean",30],["time",29],["btw",29]],"sig":["bro","yea","thats"],"emoji":[["💀",3],["😭",2],["🤓",1],["🗿",1],["🥀",1],["🧠",1],["💪",1],["📈",1],["❤",1]],"emoTotal":13,"buddy":["fwog",760],"bestDay":["2026-07-24",208],"rx":218,"days":73,"daysPct":77,"streak":35,"att":203,"links":128,"men":91,"menIn":81,"laugh":60,"night":442,"rt":10,"rtText":"10 sec","persona":{"key":"speed","stat":"just 4.4 words per message"}},"1065881791967285248":{"id":"1065881791967285248","name":"Zendra","msgs":927,"rank":8,"share":3.1,"words":6302,"avgw":6.8,"longest":120,"hours":[61,8,30,29,14,13,10,36,33,63,82,68,64,118,57,59,67,63,26,3,4,6,3,10],"topWords":[["messages",56],["times",38],["stats",36],["last",29],["msgs",29],["july",27],["yea",25],["days",23],["brawl",22]],"sig":["messages","stats","times"],"emoji":[["😭",30],["😂",19],["🫪",7],["🥇",5],["🥉",4],["🏅",4],["✅",4],["🤔",3],["🥳",3]],"emoTotal":122,"buddy":["AXOLOTY",325],"bestDay":["2026-08-03",87],"rx":53,"days":74,"daysPct":78,"streak":26,"att":90,"links":5,"men":30,"menIn":28,"laugh":98,"night":142,"rt":12,"rtText":"12 sec","persona":{"key":"closer","stat":"12 last words"}},"910516760518754315":{"id":"910516760518754315","name":"Weirin","msgs":698,"rank":9,"share":2.3,"words":2155,"avgw":3.1,"longest":24,"hours":[9,0,1,0,0,0,0,8,20,35,58,46,32,86,42,25,21,11,56,28,52,50,56,62],"topWords":[["lmao",11],["fuck",10],["axo",8],["bro",8],["look",7],["wip",7],["guys",6],["making",6],["idk",5]],"sig":["axo","lmao","fuck"],"emoji":[["👅",23],["💥",18],["☝",17],["😭",15],["🤑",12],["💔",10],["😋",10],["🔥",7],["🙏",7]],"emoTotal":146,"buddy":["Soda",268],"bestDay":["2026-07-30",74],"rx":115,"days":76,"daysPct":80,"streak":27,"att":174,"links":45,"men":8,"menIn":45,"laugh":31,"night":10,"rt":13,"rtText":"13 sec","persona":{"key":"dealer","stat":"219 links and attachments"}},"478869660851372062":{"id":"478869660851372062","name":"Prits","msgs":126,"rank":10,"share":0.4,"words":539,"avgw":4.3,"longest":55,"hours":[0,0,8,12,45,51,3,0,1,0,1,0,0,0,0,0,2,1,0,0,0,0,1,1],"topWords":[["shit",6],["that's",4],["good",4],["fuck",3],["fucking",3],["cant",3],["other",3],["time",3],["use",3]],"sig":[],"emoji":[["c:purplecta:1377588337824628777",15],["🔪",3],["🍿",2],["😭",2],["c:hand:1000961881994956850",2],["c:ctaballing:1347808114203688970",2],["c:snif:1350802122794336277",2],["c:cta:1273670902042857558",1],["c:1000yardstare:1172920231384059934",1]],"emoTotal":36,"buddy":["Soda",86],"bestDay":["2026-07-30",60],"rx":30,"days":10,"daysPct":10,"streak":2,"att":6,"links":1,"men":0,"menIn":38,"laugh":2,"night":65,"rt":4,"rtText":"4 sec","persona":{"key":"early","stat":"44% of messages before 10am"}}},"order":["855733262164295720","1353409114889257092","962453763103293495","866615556748869645","680059125719498807","1031963671829684264","944501395955011604","1065881791967285248","910516760518754315","478869660851372062"],"groupByTz":{"2":{"days":95,"span":95,"first":"2026-06-29","last":"2026-10-01","perDay":318,"best":["2026-07-26",1943],"hours":[2220,343,133,9,17,41,186,518,473,698,1545,1293,933,1076,1299,912,1246,964,1087,1112,2379,3333,4289,4121],"wd":[4056,4061,4048,5312,4351,2880,5519],"months":[["2026-06",615],["2026-07",13208],["2026-08",11566],["2026-09",4704],["2026-10",134]],"night":2722,"streak":95,"topDay":"2026-07-27"},"3":{"days":95,"span":95,"first":"2026-06-29","last":"2026-10-01","perDay":318,"best":["2026-07-27",1906],"hours":[4121,2220,343,133,9,17,41,186,518,473,698,1545,1293,933,1076,1299,912,1246,964,1087,1112,2379,3333,4289],"wd":[4933,4105,3262,5495,4952,2944,4536],"months":[["2026-06",539],["2026-07",13273],["2026-08",11574],["2026-09",4706],["2026-10",135]],"night":6826,"streak":95,"topDay":"2026-07-27"},"7":{"days":96,"span":96,"first":"2026-06-29","last":"2026-10-02","perDay":315,"best":["2026-07-27",2778],"hours":[1112,2379,3333,4289,4121,2220,343,133,9,17,41,186,518,473,698,1545,1293,933,1076,1299,912,1246,964,1087],"wd":[6487,3353,2919,6305,4833,3136,3194],"months":[["2026-06",389],["2026-07",13220],["2026-08",11759],["2026-09",4720],["2026-10",139]],"night":15234,"streak":96,"topDay":"2026-07-27"},"-5":{"days":95,"span":95,"first":"2026-06-29","last":"2026-10-01","perDay":318,"best":["2026-07-26",2156],"hours":[518,473,698,1545,1293,933,1076,1299,912,1246,964,1087,1112,2379,3333,4289,4121,2220,343,133,9,17,41,186],"wd":[3850,3778,4966,4743,4286,2886,5718],"months":[["2026-06",616],["2026-07",13225],["2026-08",11552],["2026-09",4705],["2026-10",129]],"night":4527,"streak":95,"topDay":"2026-07-27"}},"group":{"name":"𝓕𝓻𝓮𝓪𝓴𝔂 group :33","year":2026,"msgs":30227,"words":152873,"days":95,"span":95,"first":"2026-06-29","last":"2026-10-01","perDay":318,"best":["2026-07-26",2156],"hours":[518,473,698,1545,1293,933,1076,1299,912,1246,964,1087,1112,2379,3333,4289,4121,2220,343,133,9,17,41,186],"wd":[3850,3778,4966,4743,4286,2886,5718],"months":[["2026-06",616],["2026-07",13225],["2026-08",11552],["2026-09",4705],["2026-10",129]],"night":4527,"streak":95,"topDay":"2026-07-27","topWords":[["i'm",799],["idk",465],["cuz",451],["bro",422],["guys",372],["that's",331],["good",323],["more",299],["them",294],["mean",292],["gonna",292],["love",286]],"emoji":[["😭",696],["🥀",152],["💔",149],["🫩",119],["💀",94],["🔥",57],["❤",57],["😂",52],["💕",42]],"emoTotal":2319,"rxEmoji":[["🔥",771],["❤️",640],["😭",528],["💀",313]],"top":{"text":"Bro i wasnt even here what","by":"Bupeti","n":18,"d":"2026-07-27"},"links":1098,"att":1513,"rx":2584,"laugh":1559,"pinged":{"id":"855733262164295720","name":"fwog","msgs":7462,"rank":1,"share":24.7,"words":44319,"avgw":5.9,"longest":418,"hours":[1100,524,41,0,0,6,11,27,70,40,129,320,319,224,241,298,253,311,243,234,322,548,1097,1104],"topWords":[["i'm",226],["cuz",194],["idk",153],["guys",152],["gays",124],["more",110],["oat",110],["them",110],["tho",106]],"sig":["gays","cuz","tbh"],"emoji":[["😭",65],["🐏",29],["🔥",20],["🗣",9],["🥀",7],["🐎",7],["🥺",4],["🙏",3],["🫩",3]],"emoTotal":223,"buddy":["Soda",2448],"bestDay":["2026-07-28",388],"rx":936,"days":95,"daysPct":100,"streak":95,"att":464,"links":394,"men":73,"menIn":135,"laugh":192,"night":1665,"rt":10,"rtText":"10 sec","persona":{"key":"novel","stat":"5.9 words per message"}},"awards":[{"key":"novel","who":"fwog","id":"855733262164295720","stat":"5.9 words per message"},{"key":"flash","who":"Soda","id":"1353409114889257092","stat":"replies in ~6 sec"},{"key":"ping","who":"AXOLOTY","id":"962453763103293495","stat":"207 @mentions sent"},{"key":"spark","who":"oat","id":"866615556748869645","stat":"42 conversations started"},{"key":"magnet","who":"Walmart","id":"680059125719498807","stat":"174 reactions received"},{"key":"laugh","who":"La Brioche","id":"1031963671829684264","stat":"264 laughs logged"},{"key":"speed","who":"Bupeti","id":"944501395955011604","stat":"just 4.4 words per message"},{"key":"closer","who":"Zendra","id":"1065881791967285248","stat":"12 last words"},{"key":"dealer","who":"Weirin","id":"910516760518754315","stat":"219 links and attachments"},{"key":"early","who":"Prits","id":"478869660851372062","stat":"44% of messages before 10am"}]}};
const pc = x => Math.round(100 * x) + "%";
const STOP = new Set(`the and you that for are but not with this have was just like what they its it's dont don't can his her she him get got out all one who how why when your our there their then than from will would could should about been were had has did does too yeah yes nah okay lol also still even only really much some any into over here now see let say said going want need think know make
les des est pas que qui une pour dans sur mais plus avec tout aussi ces ses mes tes nos vos leur cette cet ont sont suis fait fais comme très bien même quand donc alors ils elle elles nous vous moi toi lui par aux mon ton son oui non ben jai j'ai c'est n'est qu'il l'a d'un d'une jsuis ça`.split(/\s+/));
const URL_ = /https?:\/\/\S+/g, MEN = /<@!?(\d+)>/g, CUS = /<a?:\w+:\d+>/g;
const EMO = /<a?:(\w+):(\d+)>|([\u{1F300}-\u{1FAFF}\u2600-\u27BF\u2B50\u2764])/gu;
const WORD = /\p{L}+(?:'\p{L}+)?/gu;
const LAUGH = /\b(?:lo+l+|mdr+|ptdr|(?:ha){2,}h?|(?:he){2,}h?|xd+|lma+o+)\b|[😂🤣💀😭]/giu;

function parseCSV(t) {
  const rows = []; let row = [], f = "", q = false;
  for (let i = 0, n = t.length; i < n; i++) {
    const c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(f); f = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && t[i + 1] === "\n") i++; row.push(f); f = ""; rows.push(row); row = []; }
    else f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  return rows;
}
const inc = (m, k, v = 1) => m.set(k, (m.get(k) || 0) + v);
const topn = (m, k) => [...m].sort((a, b) => b[1] - a[1]).slice(0, k);
const med = a => a.length ? [...a].sort((x, y) => x - y)[a.length >> 1] : null;
const sum = a => a.reduce((x, y) => x + y, 0);
const streak = days => {
  let best = 0, cur = 0, prev = null;
  for (const d of [...days].sort()) { cur = prev && Math.round((Date.parse(d) - Date.parse(prev)) / 864e5) === 1 ? cur + 1 : 1; best = Math.max(best, cur); prev = d; }
  return best;
};
const dur = s => s == null ? "-" : s < 90 ? Math.round(s) + " sec" : Math.round(s / 60) + " min";
function decodeTz(vk, idStr, salt) {
  const val = parseInt(vk.slice(0, 2), 16);
  const mask = (parseInt(idStr.slice(-6), 10) ^ (salt * 0x45d9f3b)) & 0xff;
  return (val ^ mask) - 24;
}
function localAtOffset(ms, offsetHours) {
  const d = new Date(ms + offsetHours * 3600000);
  const y = d.getUTCFullYear();
  const mo = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dy = String(d.getUTCDate()).padStart(2, "0");
  const h = d.getUTCHours();
  return { y, day: `${y}-${mo}-${dy}`, h };
}

const PD = [
  ["night", m => m.night, 1, m => `${pc(m.night / m.n)} of messages after midnight`],
  ["early", m => m.early, 1, m => `${pc(m.early / m.n)} of messages before 10am`],
  ["novel", m => m.words, 1, m => `${(m.words / m.n).toFixed(1)} words per message`],
  ["speed", m => m.words, -1, m => `just ${(m.words / m.n).toFixed(1)} words per message`],
  ["emoji", m => sum([...m.em.values()]), 1, m => `${sum([...m.em.values()]).toLocaleString("en")} emoji used`],
  ["laugh", m => m.laugh, 1, m => `${m.laugh.toLocaleString("en")} laughs logged`],
  ["spark", m => m.starts, 1, m => `${m.starts.toLocaleString("en")} conversations started`],
  ["magnet", m => m.rx, 1, m => `${m.rx.toLocaleString("en")} reactions received`],
  ["ping", m => m.men, 1, m => `${m.men.toLocaleString("en")} @mentions sent`],
  ["dealer", m => m.links + m.att, 1, m => `${(m.links + m.att).toLocaleString("en")} links and attachments`],
  ["closer", m => m.ends, 1, m => `${m.ends.toLocaleString("en")} last words`]
];

function computeFromCSV(csvText) {
  const rows = parseCSV(csvText.replace(/^\uFEFF/, ""));
  const H = Object.fromEntries(rows.shift().map((h, i) => [h.trim(), i]));
  const name = Object.fromEntries(C.members.map(m => [m.id, m.name]));
  const memberTz = Object.fromEntries(C.members.map(m => [m.id, decodeTz(m.vk, m.id, m.s)]));
  const groupTz = decodeTz(C.gvk, "202600", C.gs);
  const allOffsets = [...new Set([groupTz, ...Object.values(memberTz)])];

  const msgs = [];
  for (const r of rows) {
    const a = r[H["Author ID"]]; if (!(a in name)) continue;
    const ms = Date.parse(r[H.Timestamp]); if (isNaN(ms)) continue;
    const gL = localAtOffset(ms, groupTz);
    const mL = localAtOffset(ms, memberTz[a]);
    if (gL.y !== C.year && mL.y !== C.year) continue;
    msgs.push({ a, ms, gL, mL, txt: r[H.Content] || "", att: !!("Attachments" in H && r[H.Attachments]), rx: r[H.Reactions] || "" });
  }
  msgs.sort((x, y) => x.ms - y.ms);

  const blank = () => ({ n: 0, words: 0, hours: Array(24).fill(0), wc: new Map(), em: new Map(), rx: 0, men: 0, menIn: 0, links: 0, att: 0, laugh: 0, night: 0, early: 0, starts: 0, ends: 0, days: new Set(), dayN: new Map(), longest: 0, rt: [] });
  const M = Object.fromEntries(C.members.map(m => [m.id, blank()]));
  const G = { words: new Map(), em: new Map(), rxem: new Map(), links: 0, att: 0, rx: 0, laugh: 0, top: null, topn: 0, topMs: 0 };

  // Track group time-dependent buckets for every unique member timezone offset!
  const GTZ = Object.fromEntries(allOffsets.map(tz => [tz, {
    hours: Array(24).fill(0),
    wd: Array(7).fill(0),
    days: new Set(),
    dayN: new Map(),
    months: new Map()
  }]));

  const pairs = new Map(), pk = (a, b) => a < b ? a + "|" + b : b + "|" + a;
  const pretty = t => t.replace(MEN, (_, i) => "@" + (name[i] || "someone")).replace(URL_, "🔗").replace(CUS, "").replace(/\s+/g, " ").trim();
  let prev = null;

  for (const r of msgs) {
    const m = M[r.a], mDay = r.mL.day, mH = r.mL.h, txt = r.txt;
    m.n++;
    m.hours[mH]++; m.days.add(mDay); inc(m.dayN, mDay);
    if (mH < 5) m.night++; else if (mH < 10) m.early++;

    for (const tz of allOffsets) {
      const L = tz === memberTz[r.a] ? r.mL : tz === groupTz ? r.gL : localAtOffset(r.ms, tz);
      const gtz = GTZ[tz];
      gtz.hours[L.h]++;
      gtz.days.add(L.day);
      inc(gtz.dayN, L.day);
      inc(gtz.months, L.day.slice(0, 7));
      gtz.wd[(new Date(L.day + "T12:00Z").getUTCDay() + 6) % 7]++;
    }

    if (!prev || (r.ms - prev.ms) / 1000 > C.convGap) { m.starts++; if (prev) M[prev.a].ends++; }
    else if (prev.a !== r.a) {
      inc(pairs, pk(r.a, prev.a));
      const gap = (r.ms - prev.ms) / 1000; if (gap < 600) m.rt.push(gap);
    }
    prev = r;
    const nl = (txt.match(URL_) || []).length; m.links += nl; G.links += nl;
    if (r.att) { m.att++; G.att++; }
    for (const x of txt.matchAll(MEN)) if (x[1] in M) { m.men++; M[x[1]].menIn++; }
    const clean = txt.replace(URL_, " ").replace(MEN, " ").replace(CUS, " ");
    const wl = clean.split(/\s+/).filter(Boolean).length; m.words += wl; m.longest = Math.max(m.longest, wl);
    for (const w of clean.toLowerCase().match(WORD) || []) if (w.length > 2 && !STOP.has(w)) { inc(m.wc, w); inc(G.words, w); }
    for (const e of txt.matchAll(EMO)) {
      if (e[3] && e[3].codePointAt(0) >= 0x1F3FB && e[3].codePointAt(0) <= 0x1F3FF) continue;
      const k = e[1] ? `c:${e[1]}:${e[2]}` : e[3]; inc(m.em, k); inc(G.em, k);
    }
    const lc = (txt.match(LAUGH) || []).length; m.laugh += lc; G.laugh += lc;
    let got = 0;
    if (r.rx.length > 2) try { for (const e of JSON.parse(r.rx)) { const em = e.emoji, k = em.id ? `c:${em.name}:${em.id}` : em.name; got += e.count; inc(G.rxem, k, e.count); } } catch (_) {}
    m.rx += got; G.rx += got;
    if (got > G.topn && clean.trim()) { G.topn = got; G.topMs = r.ms; G.top = { text: pretty(txt).slice(0, 260), by: name[r.a], n: got, d: r.gL.day }; }
  }
  M[prev.a].ends++;

  const ids = C.members.map(m => m.id).filter(i => M[i].n > 0), tot = msgs.length;
  const Z = [], meds = ids.map(i => M[i].rt.length >= 30 ? med(M[i].rt) : null).filter(x => x != null), gmed = med(meds);
  for (const [k, f, sg] of PD) {
    const g = sum(ids.map(i => f(M[i]))) / tot, v = ids.map(i => sg * (f(M[i]) + 40 * g) / (M[i].n + 40));
    const mu = sum(v) / v.length, sd = Math.sqrt(sum(v.map(x => (x - mu) ** 2)) / v.length) || 1;
    ids.forEach((i, j) => Z.push([i, k, (v[j] - mu) / sd]));
  }
  { const v = ids.map(i => -(M[i].rt.length >= 30 ? med(M[i].rt) : gmed ?? 0)), mu = sum(v) / v.length, sd = Math.sqrt(sum(v.map(x => (x - mu) ** 2)) / v.length) || 1;
    ids.forEach((i, j) => Z.push([i, "flash", (v[j] - mu) / sd])); }
  const assign = {}, used = new Set();
  for (const [i, k] of Z.sort((a, b) => b[2] - a[2])) if (!(i in assign) && !used.has(k)) { assign[i] = k; used.add(k); }
  const statOf = (i, k) => k === "flash" ? `replies in ~${dur(med(M[i].rt))}` : PD.find(p => p[0] === k)[3](M[i]);

  const sig = m => {
    const tw = sum([...m.wc.values()]) || 1, gw = sum([...G.words.values()]);
    return [...m.wc].filter(([, c]) => c >= 8).map(([w, c]) => [w, c * Math.log((c / tw) / (G.words.get(w) / gw))]).filter(x => x[1] > 0).sort((a, b) => b[1] - a[1]).slice(0, 3).map(x => x[0]);
  };

  // Build per-timezone group snapshots
  const groupByTz = {};
  for (const tz of allOffsets) {
    const gtz = GTZ[tz];
    const tDays = [...gtz.days].sort();
    const tSpan = Math.round((Date.parse(tDays.at(-1)) - Date.parse(tDays[0])) / 864e5) + 1;
    groupByTz[tz] = {
      days: gtz.days.size,
      span: tSpan,
      first: tDays[0],
      last: tDays.at(-1),
      perDay: Math.round(tot / gtz.days.size),
      best: topn(gtz.dayN, 1)[0],
      hours: gtz.hours,
      wd: gtz.wd,
      months: [...gtz.months].sort((a, b) => a[0] < b[0] ? -1 : 1),
      night: sum(gtz.hours.slice(0, 5)),
      streak: streak(gtz.days),
      topDay: G.topMs ? localAtOffset(G.topMs, tz).day : null
    };
  }

  const order = [...ids].sort((a, b) => M[b].n - M[a].n), members = {};
  order.forEach((i, rk) => {
    const m = M[i], bud = ids.filter(j => j !== i).sort((a, b) => (pairs.get(pk(i, b)) || 0) - (pairs.get(pk(i, a)) || 0))[0];
    const mSpan = groupByTz[memberTz[i]].span;
    members[i] = {
      id: i, name: name[i], msgs: m.n, rank: rk + 1, share: +(100 * m.n / tot).toFixed(1), words: m.words, avgw: +(m.words / m.n).toFixed(1),
      longest: m.longest, hours: m.hours, topWords: topn(m.wc, 9), sig: sig(m), emoji: topn(m.em, 9), emoTotal: sum([...m.em.values()]),
      buddy: bud ? [name[bud], pairs.get(pk(i, bud)) || 0] : ["", 0], bestDay: topn(m.dayN, 1)[0], rx: m.rx, days: m.days.size,
      daysPct: Math.min(100, Math.round(100 * m.days.size / mSpan)), streak: streak(m.days), att: m.att, links: m.links, men: m.men, menIn: m.menIn,
      laugh: m.laugh, night: m.night, rt: med(m.rt), rtText: dur(med(m.rt)), persona: { key: assign[i], stat: statOf(i, assign[i]) }
    };
  });
  const byMen = [...order].sort((a, b) => M[b].menIn - M[a].menIn);
  const defG = groupByTz[groupTz];
  return {
    members, order, groupByTz, group: {
      name: String((rows.find(r => r[H.Channel]) || [])[H.Channel] || "The group"), year: C.year, msgs: tot,
      words: sum(ids.map(i => M[i].words)),
      ...defG,
      topWords: topn(G.words, 12),
      emoji: topn(G.em, 9), emoTotal: sum([...G.em.values()]), rxEmoji: topn(G.rxem, 4), top: G.top, links: G.links, att: G.att, rx: G.rx, laugh: G.laugh,
      pinged: members[byMen[0]],
      awards: order.map(i => ({ key: assign[i], who: name[i], id: i, stat: statOf(i, assign[i]) }))
    }
  };
}


function applyConfiguredNames(data) {
  const copy = JSON.parse(JSON.stringify(data));
  const nameMap = Object.fromEntries(C.members.map(m => [m.id, m.name]));
  for (const id of Object.keys(copy.members)) {
    if (nameMap[id]) copy.members[id].name = nameMap[id];
  }
  if (copy.group && copy.group.awards) {
    copy.group.awards.forEach(a => { if (nameMap[a.id]) a.who = nameMap[a.id]; });
  }
  if (copy.group && copy.group.pinged && nameMap[copy.group.pinged.id]) {
    copy.group.pinged.name = nameMap[copy.group.pinged.id];
  }
  return copy;
}

window.decodeMemberTz = function (who) {
  if (!who || who.groupOnly) {
    return decodeTz(C.gvk, "202600", C.gs);
  }
  return decodeTz(who.vk, who.id, who.s);
};

window.loadStats = async function () {
  let csvText = null;
  try {
    const res = await fetch(C.csv + "?v=" + Date.now(), { cache: "no-store" });
    if (res.ok) csvText = await res.text();
  } catch (_) {}
  if (!csvText) return applyConfiguredNames(FALLBACK);
  try {
    return computeFromCSV(csvText);
  } catch (_) {
    return applyConfiguredNames(FALLBACK);
  }
};
})();
