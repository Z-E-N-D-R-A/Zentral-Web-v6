/* ----------------------------------------------------------
   chat.js — Firebase Global Chat (Realtime DB + Anonymous Auth)
   Race-condition-free, presence-safe, with recovery codes
---------------------------------------------------------- */

/* ===== FIREBASE CONFIG ===== */
const firebaseConfig = {
  apiKey: "AIzaSyAmI86EcG9Zvln4n4s39tcPNlCYfPjO16s",
  authDomain: "zentral-chat-b7ca0.firebaseapp.com",
  projectId: "zentral-chat-b7ca0",
  storageBucket: "zentral-chat-b7ca0.firebasestorage.app",
  messagingSenderId: "808973774382",
  appId: "1:808973774382:web:0320afd63bb326ebd839bf",
  measurementId: "G-F663TF4T6K",
  databaseURL: "https://zentral-chat-b7ca0-default-rtdb.firebaseio.com"
};
/* =============================================================== */

firebase.initializeApp(firebaseConfig);
const domCache = {}; // messageId → DOM element
const messages = {}; // id → data
const db = firebase.database();
const messagesRef = db.ref("messages");
const presenceRef = db.ref("presence");
const recoveryRef = db.ref("recovery");

let user = null;
let authReady = false;

/* ===================================================================
   QUEUE — prevent join/send from running BEFORE firebase auth is ready
==================================================================== */
let pendingJoin = null;      // { name, restoredInfo }
let pendingSend = false;     // boolean
let pendingRestore = null;   // code string

function tryProcessQueue() {
  if (!authReady || !user) return;

  // process pending restore
  if (pendingRestore) {
    const code = pendingRestore;
    pendingRestore = null;
    restoreWithCode(code);
  }

  // process pending join
  if (pendingJoin) {
    const { name, restoredInfo } = pendingJoin;
    pendingJoin = null;
    join(name, restoredInfo);
  }

  // process pending send
  if (pendingSend) {
    pendingSend = false;
    sendMessage();
  }
}

/* ================= START ANONYMOUS AUTH ================= */
firebase.auth().signInAnonymously().catch(console.error);

firebase.auth().onAuthStateChanged(u => {
  if (!u) return;
  user = u;
  authReady = true;
  console.log("Auth READY:", user.uid);

  // auto-join if a display name is saved
  if (displayName) {
    pendingJoin = { name: displayName, restoredInfo: null };
  }

  tryProcessQueue();
});

/* =============== LOCAL CLIENT DATA =============== */
let clientId = localStorage.getItem("z_clientId");
if (!clientId) {
  clientId = Math.random().toString(36).slice(2);
  localStorage.setItem("z_clientId", clientId);
}

let displayName = localStorage.getItem("z_name") || "";

/* =============== DOM HOOKS =============== */
const promptEl = document.getElementById("prompt");
const promptName = document.getElementById("promptName");

const joinBtn = document.getElementById("joinBtn");
const nameInput = document.getElementById("name");

const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

const messagesEl = document.getElementById("messages");
const whoEl = document.getElementById("who");
const onlineCountEl = document.getElementById("onlineCount");

const recoveryInput = document.getElementById("recoveryInput");
const restoreBtn = document.getElementById("restoreBtn");

const recoveryDisplay = document.getElementById("recoveryDisplay");
const recoveryCodeText = document.getElementById("recoveryCodeText");
const copyRecoveryBtn = document.getElementById("copyRecoveryBtn");

const loadMoreBtn = document.getElementById("loadMoreBtn");
const spinner = document.getElementById("spinner");

const newMsgIndicator = document.getElementById("newMsgIndicator");
let userIsAtBottom = true;

loadMoreBtn.onclick = loadOlderMessages;

const colors = ["#ffae00", "#f700ff", "#00b7ff", "#00ffb3", "#fbff00"];

messagesEl.parentElement.addEventListener("scroll", () => {
  const box = messagesEl.parentElement;
  const nearBottom = box.scrollTop + box.clientHeight >= box.scrollHeight - 30;

  userIsAtBottom = nearBottom;

  if (nearBottom) {
    newMsgIndicator.classList.add("hidden");
  }
});

function shouldGroupWithPrevious(newMsg) {
  const last = messagesEl.lastElementChild;
  if (!last) return false;

  const lastId = last.dataset.id;
  const lastMsg = lastId ? domCache[lastId] : null;
  if (!lastMsg) return false;

  const lastData = messages[lastId]; // store data map (we add this below)
  if (!lastData) return false;

  // Same user?
  if (lastData.clientId !== newMsg.clientId) return false;

  // Within 2 minutes?
  if (Math.abs(newMsg.time - lastData.time) > 120000) return false;

  return true;
}

function formatDateSeparator(ts) {
  const d = new Date(ts);
  const now = new Date();

  const isToday =
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate();

  const y = new Date();
  y.setDate(now.getDate() - 1);

  const isYesterday =
    d.getFullYear() === y.getFullYear() &&
    d.getMonth() === y.getMonth() &&
    d.getDate() === y.getDate();

  if (isToday) return "Today";
  if (isYesterday) return "Yesterday";

  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

// Keep track of the last rendered separator
let lastSeparator = "";

function maybeInsertDateSeparator(ts) {
  const label = formatDateSeparator(ts);

  if (label !== lastSeparator) {
    lastSeparator = label;

    const sep = document.createElement("div");
    sep.className = "date-separator";
    sep.textContent = label;

    messagesEl.appendChild(sep);
  }
}

/* ================= INFINITE SCROLL ================= */
let oldestLoadedKey = null;   // first message currently shown
let isLoadingMore = false;

messagesEl.parentElement.addEventListener("scroll", async () => {
  const box = messagesEl.parentElement;

  if (box.scrollTop > 100) return; // only trigger at top
  if (isLoadingMore) return;       // prevent spam loading
  if (!oldestLoadedKey) return;   // no messages yet

  isLoadingMore = true;

  console.log("Loading older messages...");

  const snap = await messagesRef
    .orderByKey()
    .endBefore(oldestLoadedKey)
    .limitToLast(50)
    .once("value");

  if (!snap.exists()) {
    console.log("No older messages.");
    isLoadingMore = false;
    return;
  }

  // Remember current height BEFORE inserting older messages
  const oldHeight = box.scrollHeight;

  let first = true;

  snap.forEach(child => {
    const id = child.key;
    const data = child.val();

    if (first) {
      oldestLoadedKey = id; // update reference
      first = false;
    }

    renderOldMessageAtTop({ ...data, id });
  });

  // Maintain scroll position so page does NOT jump
  const newHeight = box.scrollHeight;
  box.scrollTop = newHeight - oldHeight;

  isLoadingMore = false;
});

async function loadOlderMessages() {
  if (isLoadingMore || !oldestLoadedKey) return;
  isLoadingMore = true;

  loadMoreBtn.style.display = "none";
  spinner.style.display = "block";

  const snap = await messagesRef
    .orderByKey()
    .endBefore(oldestLoadedKey)
    .limitToLast(50)
    .once("value");

  const arr = [];
  snap.forEach(s => arr.push({ ...s.val(), id: s.key }));

  // Remove the duplicate "oldestLoadedKey" at the end
  arr.pop();

  if (arr.length === 0) {
    loadMoreBtn.style.display = "none";
    spinner.style.display = "none";
    return;
  }

  // Track the new oldest
  oldestLoadedKey = arr[0].id;

  // Insert at the top
  const scrollPos = messagesEl.parentElement.scrollHeight;

  arr.forEach(m => {
    const element = renderMessagePrepend(m);
    messagesEl.insertBefore(element, messagesEl.firstChild);
  });

  requestAnimationFrame(() => {
    const newHeight = messagesEl.parentElement.scrollHeight;
    messagesEl.parentElement.scrollTop += newHeight - scrollPos;
  });

  spinner.style.display = "none";
  loadMoreBtn.style.display = "block";
  isLoadingMore = false;
}

function renderMessagePrepend(data) {
  const { id } = data;

  if (domCache[id]) return domCache[id];

  const wrapper = document.createElement("div");
  wrapper.className = "msg " + (data.clientId === clientId ? "me" : "other");
  wrapper.dataset.id = id;

  // same structure as renderMessage
  const meta = document.createElement("div");
  meta.className = "meta";

  const dot = document.createElement("span");
  dot.className = "name-dot";
  dot.style.background = data.color || "#888";

  const nameSpan = document.createElement("strong");
  nameSpan.textContent = data.name || "Guest";
  nameSpan.style.marginLeft = "8px";

  meta.appendChild(dot);
  meta.appendChild(nameSpan);

  if (data.clientId === clientId) {
    const del = document.createElement("button");
    del.className = "delete-btn";
    del.textContent = "Delete";
    del.onclick = () => messagesRef.child(id).remove();
    meta.appendChild(del);

    const edit = document.createElement("button");
    edit.className = "edit-btn";
    edit.textContent = "Edit";
    edit.onclick = () => beginEditMessage(id, data.text);
    meta.appendChild(edit);
  }

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = escapeHtml(data.text);

  const timeEl = document.createElement("div");
  timeEl.className = "time";
  timeEl.dataset.timestamp = data.time;
  timeEl.textContent = timeAgo(data.time);

  wrapper.appendChild(meta);
  wrapper.appendChild(bubble);
  wrapper.appendChild(timeEl);

  domCache[id] = wrapper;
  return wrapper;
}

/* =============== UTILITIES =============== */
function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);

  if (seconds < 60) return "Now";
  if (seconds < 3600) return Math.floor(seconds / 60) + "m ago";
  if (seconds < 86400) return Math.floor(seconds / 3600) + "h ago";

  return Math.floor(seconds / 86400) + "d ago";
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/* =============== RENDER MESSAGE =============== */
function renderMessage(data) {
  const { name, text, time, clientId: cid, color, id } = data;
  const isMe = cid === clientId;
  messages[id] = data; // store for grouping logic

  // If message DOM already exists → update instead
  if (domCache[id]) {
    const el = domCache[id];
    const bubble = el.querySelector(".bubble");
    const timeEl = el.querySelector(".time");

    bubble.innerHTML = escapeHtml(text) + (data.edited ? " <span class='edited'>(edited)</span>" : "");
    timeEl.dataset.timestamp = time;
    timeEl.textContent = timeAgo(time);
    return;
  }

  maybeInsertDateSeparator(data.time);

  const grouping = shouldGroupWithPrevious(data);
  // Otherwise create new
  const wrapper = document.createElement("div");
  wrapper.className =
    "msg " +
    (isMe ? "me" : "other") +
    (grouping ? " grouped" : " first-in-group");
  wrapper.dataset.id = id;

  const meta = document.createElement("div");
  meta.className = grouping ? "meta hidden" : "meta";

  const dot = document.createElement("span");
  dot.className = "name-dot";
  dot.style.background = color || "#888";

  const nameSpan = document.createElement("strong");
  nameSpan.textContent = name || "Guest";
  nameSpan.style.marginLeft = "8px";

  meta.appendChild(dot);
  meta.appendChild(nameSpan);

  if (isMe && id) {
    const del = document.createElement("button");
    del.className = "delete-btn";
    del.textContent = "Delete";
    del.onclick = () => messagesRef.child(id).remove();
    meta.appendChild(del);

    const edit = document.createElement("button");
    edit.className = "edit-btn";
    edit.textContent = "Edit";
    edit.onclick = () => beginEditMessage(id, text);
    meta.appendChild(edit);
  }

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = escapeHtml(text) + (data.edited ? " <span class='edited'>(edited)</span>" : "");

  const timeEl = document.createElement("div");
  timeEl.className = "time";
  timeEl.dataset.timestamp = time;
  timeEl.textContent = timeAgo(time);

  wrapper.appendChild(meta);
  wrapper.appendChild(bubble);
  wrapper.appendChild(timeEl);

  if (isMe) {
    // Always snap to bottom for your own messages
    newMsgIndicator.classList.add("hidden");
    messagesEl.parentElement.scrollTop = messagesEl.parentElement.scrollHeight;
  } else {
    // If user not at bottom → show indicator
    if (!userIsAtBottom) {
      newMsgIndicator.classList.remove("hidden");
    }
  }

  messagesEl.appendChild(wrapper);
  messagesEl.parentElement.scrollTop = messagesEl.parentElement.scrollHeight;

  domCache[id] = wrapper;
}

newMsgIndicator.onclick = () => {
  newMsgIndicator.classList.add("hidden");
  messagesEl.parentElement.scrollTop = messagesEl.parentElement.scrollHeight;
};

/* Render older message at TOP */
function renderOldMessageAtTop(data) {
  const { name, text, time, clientId: cid, color, id } = data;
  if (domCache[id]) return; // already exists

  const isMe = cid === clientId;

  const wrapper = document.createElement("div");
  wrapper.className = "msg " + (isMe ? "me" : "other");
  wrapper.dataset.id = id;

  const meta = document.createElement("div");
  meta.className = "meta";

  const dot = document.createElement("span");
  dot.className = "name-dot";
  dot.style.background = color || "#888";

  const nameSpan = document.createElement("strong");
  nameSpan.textContent = name || "Guest";
  nameSpan.style.marginLeft = "8px";

  meta.appendChild(dot);
  meta.appendChild(nameSpan);

  if (isMe) {
    const del = document.createElement("button");
    del.className = "delete-btn";
    del.textContent = "Delete";
    del.onclick = () => messagesRef.child(id).remove();
    meta.appendChild(del);

    const edit = document.createElement("button");
    edit.className = "edit-btn";
    edit.textContent = "Edit";
    edit.onclick = () => beginEditMessage(id, text);
    meta.appendChild(edit);
  }

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = escapeHtml(text) + (data.edited ? " <span class='edited'>(edited)</span>" : "");

  const timeEl = document.createElement("div");
  timeEl.className = "time";
  timeEl.dataset.timestamp = time;
  timeEl.textContent = timeAgo(time);

  wrapper.appendChild(meta);
  wrapper.appendChild(bubble);
  wrapper.appendChild(timeEl);

  messagesEl.insertBefore(wrapper, messagesEl.firstChild);
  domCache[id] = wrapper;
}

/* =============== LOAD MESSAGES =============== */
messagesRef.orderByKey().limitToLast(150).on("child_added", snap => {
    const msg = snap.val();
    const id = snap.key;

    // Track the oldest
    if (!oldestLoadedKey) oldestLoadedKey = id;

    renderMessage({ ...msg, id });
  });


messagesRef.on("child_removed", snap => {
  const id = snap.key;
  const el = domCache[id];
  if (el) {
    el.remove();
    delete domCache[id];
  }
});

/* ================= PRESENCE ================= */
let myPresenceRef = null;
function initPresence(color, name) {
  myPresenceRef = presenceRef.push();
  myPresenceRef.onDisconnect().remove();

  return myPresenceRef
    .set({
      uid: user.uid,
      name: name || "Guest",
      clientId,
      color,
      ts: Date.now()
    })
    .catch(err => console.warn("Presence failed:", err));
}

/* ================= RECOVERY SYSTEM ================= */
function generateRecoveryCode(len = 8) {
  const CH = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < len; i++) out += CH[Math.floor(Math.random() * CH.length)];
  return out;
}

async function saveRecoveryRecord(code, payload) {
  try {
    await recoveryRef.child(code).set(payload);
    localStorage.setItem("z_recovery", JSON.stringify({ code, payload }));
  } catch (err) {
    console.error("Recovery save failed:", err);
  }
}

function showRecoveryCodeUI(code) {
  recoveryCodeText.textContent = code;
  recoveryDisplay.style.display = "flex";
}

/* ================= JOIN ================= */

function join(name, restoredInfo = null) {
  if (!authReady || !user) {
    pendingJoin = { name, restoredInfo };
    console.log("join() delayed (auth not ready)");
    return;
  }

  displayName = (name || "").trim() || "Guest";
  localStorage.setItem("z_name", displayName);
  nameInput.value = displayName;

  promptEl.style.display = "none";

  const myColor = restoredInfo?.color || colors[Math.floor(Math.random() * colors.length)];

  initPresence(myColor, displayName);
  
  let lastPresenceUpdate = 0;

  presenceRef.on("value", snap => {
    const now = Date.now();
    if (now - lastPresenceUpdate < 1000) return; // 1 update per sec max
    lastPresenceUpdate = now;

    const list = snap.val() || {};
    whoEl.innerHTML = "";
    onlineCountEl.textContent = Object.keys(list).length + " online";

    Object.values(list).forEach(p => {
      const el = document.createElement("div");
      el.className = "who-item";
      el.innerHTML = `
      <div class="who-color" style="background:${p.color}"></div>
      <div class="who-name">${escapeHtml(p.name)}</div>
    `;
      whoEl.appendChild(el);
    });
  });

  const existing = localStorage.getItem("z_recovery");
  if (existing) {
    const obj = JSON.parse(existing);
    if (obj.payload.clientId === clientId) {
      showRecoveryCodeUI(obj.code);
      return;
    }
  }

  const code = generateRecoveryCode(8);
  const payload = { clientId, name: displayName, color: myColor, ts: Date.now() };
  saveRecoveryRecord(code, payload);
  showRecoveryCodeUI(code);
}

firebase.auth().onAuthStateChanged(u => {
  console.log("Auth state changed:", u);
});

/* ================= RESTORE ================= */
async function restoreWithCode(code) {
  code = (code || "").trim().toUpperCase();
  if (!code) return alert("Enter recovery code.");

  if (!authReady) {
    pendingRestore = code;
    return;
  }

  const snap = await recoveryRef.child(code).once("value");
  if (!snap.exists()) return alert("Invalid recovery code.");

  const data = snap.val();
  clientId = data.clientId;
  displayName = data.name;

  localStorage.setItem("z_clientId", clientId);
  localStorage.setItem("z_name", displayName);
  localStorage.setItem("z_recovery", JSON.stringify({ code, payload: data }));

  join(displayName, data);

  messagesEl.innerHTML = "";
  messagesRef.limitToLast(100).once("value", s => {
    s.forEach(p => renderMessage({ ...p.val(), id: p.key }));
  });
}

/* ================= SEND MESSAGE ================= */
function sendMessage() {
  if (!authReady || !user) {
    pendingSend = true;
    return;
  }

  const text = messageInput.value.trim();
  if (!text) return;

  // If editing
  if (editingId) {
    finishEditMessage();
    return;
  }

  // Normal send
  messagesRef.push({
    uid: user.uid,
    name: displayName,
    text,
    time: Date.now(),
    clientId,
    color: colors[Math.floor(Math.random() * colors.length)]
  });

  messageInput.value = "";
}

/* ================= EDIT MESSAGE ================= */
let editingId = null;

function beginEditMessage(id, oldText) {
  editingId = id;
  messageInput.value = oldText;
  messageInput.focus();

  sendBtn.textContent = "Save Edit";
}

function finishEditMessage() {
  const newText = messageInput.value.trim();
  if (!newText || !editingId) return cancelEdit();

  messagesRef.child(editingId).update({
    text: newText,
    edited: true
  });

  cancelEdit();
}

function cancelEdit() {
  editingId = null;
  messageInput.value = "";
  sendBtn.textContent = "Send";
}

messagesRef.on("child_changed", snap => {
  renderMessage({ ...snap.val(), id: snap.key });
});

/* ================= UI EVENTS ================= */
joinBtn.onclick = () => {
  const n = promptName.value || displayName || "Guest";
  join(n);
};

restoreBtn.onclick = () => {
  const c = recoveryInput.value;
  restoreWithCode(c);
};

recoveryInput.onkeydown = e => {
  if (e.key === "Enter") restoreWithCode(recoveryInput.value);
};

copyRecoveryBtn.onclick = () => {
  navigator.clipboard.writeText(recoveryCodeText.textContent);
};

sendBtn.onclick = sendMessage;

messageInput.onkeydown = e => {
  if (e.key === "Enter") sendMessage();
};

/* close prompt on background click */
promptEl.onclick = e => {
  if (e.target === promptEl) promptEl.style.display = "none";
};

setInterval(() => {
  document.querySelectorAll(".time").forEach(el => {
    const ts = Number(el.dataset.timestamp);
    if (!ts) return;
    el.textContent = timeAgo(ts);
  });
}, 30000);  // update every 30s