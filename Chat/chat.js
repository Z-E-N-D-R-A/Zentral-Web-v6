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

const LEVEL_BADGES = {
  5:  "Rookie",
  10: "Expert",
  25: "Veteran",
  50: "Elite",
  100: "Champion"
};

const THEME_LIST = [
  { id: "light", label: "Light", img: "Light.png" },
  { id: "dark", label: "Dark", img: "Dark.png" },
  { id: "ocean", label: "Ocean", img: "Ocean.png" },
  { id: "futuristic", label: "Futuristic", img: "Futuristic.png" },
  { id: "space", label: "Space", img: "Space.png" },
  { id: "cyberpunk", label: "Cyberpunk", img: "Cyberpunk.png" },
  { id: "vintage", label: "Vintage", img: "Vintage.png" },
  { id: "forest", label: "Forest", img: "Forest.png" },
  { id: "earth", label: "Earth", img: "Earth.png" }
];

const THEMES = {
  light: {
    bg: "linear-gradient(135deg, #ececec, #d5d5d5)",
    text1: "#202020",
    text2: "#2d2d2d",
    text3: "#9d9d9d",
    sidebar: "#c9c9c9",
    input: "#bababa",
    inputArea: "#cecece",
    sendButton: "#e9e9e9",
    sendButtonHover: "#ffffff",
    sendButtonShadow: "rgba(203, 203, 203, 0.45)",
    actionMenu: "#ffffff",
    bubbleMe: "linear-gradient(135deg, #ffffff, #adadad)",
    bubbleOther: "rgba(255,255,255,0.06)"
  },

  dark: {
    bg: "linear-gradient(135deg, #0d0d0e, #0a0a0a)",
    text1: "#e6e6e6",
    text2: "#aaa",
    text3: "#333",
    sidebar: "#1e1e1e",
    input: "#1c1c1c",
    inputArea: "#333",
    sendButton: "#585757",
    sendButtonHover: "#666666",
    sendButtonShadow: "rgba(112, 116, 123, 0.45)",
    actionMenu: "#1c1c1c",
    bubbleMe: "linear-gradient(135deg, #494949, #1a1a1a)",
    bubbleOther: "rgba(255,255,255,0.06)"
  },

  ocean: {
    bg: "linear-gradient(135deg, #000428, #004e92)",
    text1: "#abe0ff",
    text2: "#3f8de0",
    text3: "#3a6a9e",
    sidebar: "#0e1555",
    input: "#0d1860",
    inputArea: "#2f2e73",
    sendButton: "#155ecc",
    sendButtonHover: "#1f70ee",
    sendButtonShadow: "rgba(21, 94, 204, 0.45)",
    actionMenu: "#112264",
    bubbleMe: "linear-gradient(135deg, #1cb5e0, #0c6cf2)",
    bubbleOther: "rgba(43, 43, 214, 0.38)"
  },

  futuristic: {
    bg: "linear-gradient(135deg, #1f2833, #0b0c10)",
    text1: "#66fcf1",
    text2: "#aaa",
    text3: "#333",
    sidebar: "#1e1e1e",
    input: "#243836",
    inputArea: "#081918",
    sendButton: "#007d75",
    sendButtonHover: "#3ab6ae",
    sendButtonShadow: "rgba(25, 181, 192, 0.45)",
    actionMenu: "#001e26",
    bubbleMe: "linear-gradient(135deg, #3bbfbb, #004844)",
    bubbleOther: "rgba(255,255,255,0.06)"
  },

  space: {
    bg: "linear-gradient(135deg, #431f73, #1e2e71)",
    text1: "#e6e6e6",
    text2: "#e89dff",
    text3: "#a784ae",
    sidebar: "#2f3777",
    input: "#311e4b",
    inputArea: "#3e2855",
    sendButton: "#8900f2",
    sendButtonHover: "#b100e8",
    sendButtonShadow: "rgba(215, 84, 255, 0.45)",
    actionMenu: "#371441",
    bubbleMe: "linear-gradient(135deg, #031334, #1d40aa)",
    bubbleOther: "rgba(255,255,255,0.06)"
  },

  cyberpunk: {
    bg: "linear-gradient(135deg, #880e5d, #6e7e06)",
    text1: "#00ffd0",
    text2: "#ffff00",
    text3: "#ff00c3",
    sidebar: "#1e1e1e",
    input: "#1c1c1c",
    inputArea: "#333",
    sendButton: "#e60ca4",
    sendButtonHover: "#ff00b3",
    sendButtonShadow: "rgba(204, 99, 165, 0.45)",
    actionMenu: "#851f57",
    bubbleMe: "linear-gradient(135deg, #079e28ff, #850d87)",
    bubbleOther: "rgba(255, 0, 195, 0.35)"
  },

  vintage: {
    bg: "linear-gradient(135deg, #90aead, #874f41)",
    text1: "#ffd392",
    text2: "#fbe9d0",
    text3: "#c3ac89",
    sidebar: "#244855",
    input: "#244855",
    inputArea: "#41515f",
    sendButton: "#e64833",
    sendButtonHover: "#ff2a0e",
    sendButtonShadow: "rgba(172, 78, 32, 0.45)",
    actionMenu: "#17374f",
    bubbleMe: "linear-gradient(135deg, #874f41, #db983b)",
    bubbleOther: "rgba(190, 156, 77, 0.5)"
  },

  forest: {
    bg: "linear-gradient(135deg, #022708, #0a381f)",
    text1: "#ffe6d4",
    text2: "#fdbd8e",
    text3: "#b96c35",
    sidebar: "#071d0b",
    input: "#103f15",
    inputArea: "#28553a",
    sendButton: "#25b561",
    sendButtonHover: "#15ea6e",
    sendButtonShadow: "#2ecc71",
    actionMenu: "#3a180a",
    bubbleMe: "linear-gradient(135deg, #2ecc71, #27ae60)",
    bubbleOther: "rgba(128, 170, 88, 0.5)"
  },

  earth: {
    bg: "linear-gradient(135deg, #5f9053, #217da7)",
    text1: "#9ad6ff",
    text2: "#e6e6e6",
    text3: "#f7f9fb",
    sidebar: "#2c5a76",
    input: "#013c19",
    inputArea: "#285532",
    sendButton: "#1e73a1",
    sendButtonHover: "#0099ff",
    sendButtonShadow: "rgba(45, 197, 239, 0.45)",
    actionMenu: "#2d5168",
    bubbleMe: "linear-gradient(135deg, #206341, #00823a)",
    bubbleOther: "rgba(20, 136, 61, 0.2)"
  }
};

firebase.initializeApp(firebaseConfig);
const domCache = {};
const messages = {};
const pendingReplies = {};
const db = firebase.database();
const messagesRef = db.ref("messages");
const presenceRef = db.ref("presence");
const usersRef = db.ref("users");
const levelEventsRef = db.ref("levelEvents");

let user = null;
let authReady = false;
let pendingJoin = null;
let pendingSend = false;
let pendingRestore = null;
let accountId = localStorage.getItem("z_accountId") || null;

function tryProcessQueue() {
  if (!authReady || !user) return;

  if (pendingRestore) {
    const code = pendingRestore;
    pendingRestore = null;
    restoreWithCode(code).catch(err => console.error("[QUEUE] restoreWithCode failed:", err));
  }

  if (pendingJoin && !pendingJoin.restoredInfo) {
    const { name, restoredInfo } = pendingJoin;
    pendingJoin = null;
    join(name, restoredInfo).catch(err => console.error("[QUEUE] join failed:", err));
  }

  if (pendingSend) {
    pendingSend = false;
    sendMessage();
  }
}

/* ================= START ANONYMOUS AUTH ================= */
firebase.auth().signInAnonymously().catch(err => {
  console.error("[AUTH] signInAnonymously error:", err);
});

firebase.auth().onAuthStateChanged(u => {
  console.log("[AUTH] onAuthStateChanged triggered (user param:", u && u.uid + ")");
  if (!u) {
    console.warn("[AUTH] onAuthStateChanged: no user");
    return;
  }

  user = u;
  authReady = true;

  const saved = localStorage.getItem("z_accountId");

  if (saved) {
    accountId = saved;
    console.log("[AUTH] accessed localStorage (accountId: " + accountId + ")");
  } else {
    accountId = user.uid;
    localStorage.setItem("z_accountId", accountId);
    console.log("[AUTH] no saved accountId (anonymous uid: " + accountId + ")");
  }

  if (displayName) {
    pendingJoin = { name: displayName, restoredInfo: null };
  }

  initThemeSelector();
  tryProcessQueue();
});

/* =============== LOCAL CLIENT DATA =============== */
let displayName = localStorage.getItem("z_name") || "";
let clientId = localStorage.getItem("z_clientId");
if (!clientId) {
  clientId = Math.random().toString(36).slice(2);
  localStorage.setItem("z_clientId", clientId);
}

/* =============== DOM HOOKS =============== */
const promptEl = document.getElementById("prompt") || null;
const promptName = document.getElementById("prompt-name") || null;
const joinBtn = document.getElementById("prompt-join") || null;
const promptErrorEl = document.getElementById("prompt-error");

let messageInput = document.getElementById("message") || document.getElementById("messageInput") || document.querySelector(".input-bar input") || null;

const messagesEl = document.getElementById("messages");
const messagesViewport = messagesEl.parentElement;
const sendBtn = document.getElementById("sendBtn") || null;

const recoveryInput = document.getElementById("recovery-code") || null;
const restoreBtn = document.getElementById("recovery-button") || null;
const recoveryErrorEl = document.getElementById("recovery-error");

const loadOlderBtn = document.getElementById("loadOlderBtn");
const spinner = document.getElementById("spinner") || document.getElementById("loadingOlder") || null;
const newMsgIndicator = document.getElementById("newMsgIndicator") || null;

const presenceEl = document.getElementById("presence") || null;
const onlineCountEl = document.getElementById("onlineCount") || null;

const sheet = document.getElementById("mobile-action-sheet");
const actionBackdrop = document.getElementById("sheet-backdrop");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");

const picker = document.getElementById("reaction-picker");
const tooltip = document.getElementById("reaction-tooltip");
const badgeTooltip = document.getElementById("badge-tooltip");

const themeSelect = document.getElementById("theme-carousel");
const themeTrack = document.getElementById("themeTrack");
const themePrev = document.getElementById("themePrev");
const themeNext = document.getElementById("themeNext");

const settingsModal = document.getElementById("settingsModal");
const settingsBtn = document.getElementById("sidebarSettingsBtn");
const closeSettings = document.getElementById("closeSettings");
const equippedBadgeEl = document.getElementById("equippedBadge");
const pendingReplyHydration = [];

let replyToId = null;
let pickerTarget = null;
let currentMobileMsg = null;

let pressTimer = null;
let resizeTimer = null;
let regroupTimer = null;
let tooltipTimer = null;
let badgeTooltipTimer = null;
let tooltipPressTimer = null;

let userIsAtBottom = true;
let hasScrolledSinceTouch = false;
let suppressNextActionMenu = false;
let pressStartBadge = null;
let settingsUpdate = false;
let isInitialLoading = true;

let badgePress = { timer: null, startedAt: 0, badge: null, long: false };

let allUsers = {};
firebase.database().ref("users").on("value", snap => {
  allUsers = snap.val() || {};
});

const typingRef = firebase.database().ref("users");
typingRef.on("value", snap => {
  const typingStates = snap.val() || {};
  updateTypingIndicator(typingStates);
});

function isMobile() {
  return window.matchMedia("(max-width: 900px)").matches;
}

/* ================= UTILITIES ================= */
function formatMessageText(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

function formatBadgeName(name) {
  return name
    .split("_")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ") + " Badge";
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function timeAgo(timestamp) {
  if (!timestamp) return "";
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "Now";
  if (seconds < 3600) return Math.floor(seconds / 60) + "m ago";
  if (seconds < 86400) return Math.floor(seconds / 3600) + "h ago";
  return Math.floor(seconds / 86400) + "d ago";
}

function formatDateLabel(ts) {
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

  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function createLevelSeparator({ uid, level, time }) {
  const el = document.createElement("div");
  el.className = "level-separator";
  el.dataset.timestamp = time;

  const username = allUsers[uid]?.username || "Unknown User";
  const badgeName = LEVEL_BADGES[level] || null;

  const main = document.createElement("div");
  main.className = "level-text";
  main.textContent = `Congratulations! ${username} reached Level ${level} 🎉`;
  el.appendChild(main);

  if (badgeName) {
    const badge = document.createElement("div");
    badge.className = "level-badge-text";
    badge.textContent = `🏅 New Badge Unlocked: ${badgeName} Badge`;
    el.appendChild(badge);
  }

  return el;
}

function insertLevelSeparator(event) {
  const el = createLevelSeparator(event);
  insertMessage(el, event.time);
}

function createDateSeparator(label) {
  const sep = document.createElement("div");
  sep.className = "date-separator";
  sep.dataset.label = label;
  sep.innerHTML = `<span class="date-line">${label}</span>`;
  return sep;
}

function ensureDateSeparatorBefore(msgEl, timestamp) {
  if (!messagesEl || !msgEl) return;
  const label = formatDateLabel(timestamp);
  const existing = messagesEl.querySelector(`.date-separator[data-label="${label}"]`);

  const children = [...messagesEl.children];
  let firstOfLabel = null;
  for (let child of children) {
    if (child.classList.contains("date-separator")) continue;
    const cid = child.dataset.id;
    if (!cid) continue;
    const m = messages[cid];
    if (!m) continue;
    if (formatDateLabel(m.time) === label) { firstOfLabel = child; break; }
  }

  if (firstOfLabel) {
    if (existing) {
      if (existing.nextElementSibling !== firstOfLabel) {
        messagesEl.insertBefore(existing, firstOfLabel);
      }
      return;
    } else {
      const sep = createDateSeparator(label);
      messagesEl.insertBefore(sep, firstOfLabel);
      return;
    }
  } else {
    if (existing) {
      messagesEl.insertBefore(existing, msgEl);
      return;
    } else {
      const sep = createDateSeparator(label);
      messagesEl.insertBefore(sep, msgEl);
      return;
    }
  }
}

function messageLevel(level) {
  if (level <= 0) return Infinity;
  const y = 0.5 * level * level + 8.5 * level - 4;
  return Math.max(1, Math.ceil(y));
}

function zxpLevel(level) {
  return messageLevel(level) * 5;
}

/* ================= RENDER HELPERS ================= */
function createMessageElement(data) {
  const { id, name, text, time, senderId, edited } = data;
  const isMe = senderId === accountId;

  const el = document.createElement("div");
  el.className = `msg ${isMe ? "me" : "other"}`;
  el.dataset.id = id;
  el.id = "msg-" + id;

  el.innerHTML = `
    <div class="meta">
      <strong>${escapeHtml(name || "Guest")}</strong>
      <div class="badges"></div>
    </div>
    
    <img src="../Assets/Icons/${data.icon}.png" class="profile-icon" />

    <div class="bubble">
      <div class="bubble-content">
        ${data.replyToId ? `<div class="reply-bubble loading"></div>` : ""}
        ${formatMessageText(text)}
        </div>
      </div>
    </div>

    <div class="reaction-badges"></div>
    <div class="info-row">
      <div class="time" data-timestamp="${time}">${timeAgo(time)}</div>
      <div class="edit">${edited ? "(edited)" : ""}</div>
    </div>

    <div class="actions">
      <div class="action-btn reply-btn" title="Reply">
        <div class="fa-solid fas fa-reply"></div>
      </div>
      <div class="action-btn menu-btn" title="More">
        <div class="fa-solid fa fa-ellipsis-h"></div>
      </div>
    </div>
    
    <div class="action-menu">
      <button class="edit-option">
        <span class="fa-solid fas fa-edit"></span> Edit
      </button>
      
      <button class="react-option">
        <span class="fa-solid far fa-grin-squint"></span> React
      </button>

      <button class="delete-option danger">
        <span class="fa-solid far fa-trash-alt"></span> Delete
      </button>

      <button class="report-option danger">
        <span class="fa-solid fas fa-exclamation-triangle"></span> Report
      </button>
    </div>`;

  if (data.badges && typeof data.badges === "object") {
    const badgeContainer = el.querySelector(".badges");

    Object.entries(data.badges).forEach(([badgeName, state]) => {
      if (state === true) {
        const img = document.createElement("img");
        img.className = "badge-icon";
        img.src = `../Assets/Badges/${badgeName}.png`;
        img.dataset.badge = badgeName;
        badgeContainer.appendChild(img);
      }
    });
  }

  const meta = el.querySelector(".meta");
  if (isMe) {
    meta.insertBefore(meta.querySelector(".badges"), meta.querySelector("strong"));
  } else {
    meta.appendChild(meta.querySelector(".badges"));
  }

  attachActionHandlers(el, id, data);

  if (!isInitialLoading) {
    renderReactions(el, data);
    attachLongPress(el);
    enableSwipeToReply(el);
  }

  return el;
}

function updateMessageElement(data) {
  const id = data.id;
  messages[id] = data;

  const el = domCache[id];
  if (!el) return;

  const content = el.querySelector(".bubble-content");
  if (!content) return;

  const replyBubble = content.querySelector(".reply-bubble");
  content.innerHTML = "";

  if (replyBubble) {
    content.appendChild(replyBubble);
  }

  content.insertAdjacentHTML("beforeend", formatMessageText(data.text));

  hydrateReplyBubble(data);
  renderReactions(el, data);

  const timeEl = el.querySelector(".time");
  if (timeEl && !timeEl.classList.contains("hidden")) {
    timeEl.dataset.timestamp = data.time;
    timeEl.textContent = timeAgo(data.time);
  }

  const editEl = el.querySelector(".edit");
  if (editEl) {
    if (data.edited) {
      editEl.textContent = "(edited)";
      editEl.classList.remove("hidden");
    } else {
      editEl.textContent = "";
      editEl.classList.add("hidden");
    }
  }

  requestAnimationFrame(() => {
    positionActions(el);
    positionIcons(el);
  });
}

function appendMessage(data) {
  if (!messagesEl) return null;
  const id = data.id;
  messages[id] = data;

  if (domCache[id]) {
    updateMessageElement(data);
    return domCache[id];
  }

  const el = createMessageElement(data);
  domCache[id] = el;

  insertMessage(el, data.time);
  ensureDateSeparatorBefore(el, data.time);

  hydrateReplyBubble(data);
  renderReactions(el, data);

  if (!isInitialLoading) {
    regroupAround(el);
  }
  
  attachActionHandlers(el, id, data);
}

function prependMessage(data) {
  if (!messagesEl) return null;
  const id = data.id;
  messages[id] = data;
  if (domCache[id]) return domCache[id];

  const el = createMessageElement(data);
  activateReplyJump(el);
  renderReactions(el, data);

  messagesEl.insertBefore(el, messagesEl.firstChild);
  ensureDateSeparatorBefore(el, data.time);
  regroupMessages();

  domCache[id] = el;
  attachActionHandlers(el, id, data);

  let next = el.nextElementSibling;
  while (next && next.classList.contains("date-separator")) next = next.nextElementSibling;

  return el;
}

function insertMessage(msgEl, timestamp) {
  const children = [...messagesEl.children];
  for (let child of children) {
    if (child.classList.contains("date-separator")) continue;

    const childId = child.dataset.id;
    if (!childId) continue;

    const childData = messages[childId];
    if (!childData) continue;

    if (childData.time > timestamp) {
      messagesEl.insertBefore(msgEl, child);
      return;
    }
  }
  messagesEl.appendChild(msgEl);
}

/* ================= SEND / EDIT MESSAGE ================= */
let editingId = null;
let originalText = "";
let typingTimeout = null;

if (sendBtn) sendBtn.onclick = () => sendMessage();
function sendMessage() {
  if (!authReady || !user) {
    pendingSend = true;
    return;
  }

  if (!messageInput) {
    messageInput =
      document.getElementById("message") ||
      document.getElementById("messageInput") ||
      document.querySelector(".input-bar input") ||
      null;

    if (!messageInput) {
      console.error("[ERROR] Message Input:", err);
      return;
    }
  }

  const text = messageInput.value.trim();
  if (!text) return;
  if (editingId) {
    finishEditMessage();
    return;
  }

  const newMsg = {
    senderId: accountId,
    text,
    time: Date.now(),
    edited: false,
    replyToId: replyToId || null
  };

  const newRef = messagesRef.push();
  newMsg.id = newRef.key;

  replyToId = null;
  document.getElementById("reply-bar").classList.add("hidden");
  sendTypingStatus(false);

  newRef.set(newMsg).catch(err => console.error("[ERROR] Sending Message:", err));
  messageInput.value = "";

  const u = usersRef.child(accountId);
  u.transaction(data => {
    if (!data) return data;

    if (!data.experience) {
      data.experience = { level: 1, zxp: 0, messageCount: 0 };
    }

    data.experience.messageCount++;
    data.experience.zxp += 5;

    const currentLevel = data.experience.level || 1;
    const requiredZxp = zxpLevel(currentLevel);

    if (data.experience.zxp >= requiredZxp) {
      const newLevel = currentLevel + 1;
      data.experience.zxp -= requiredZxp;
      data.experience.level = newLevel;

      levelEventsRef.push({
        uid: accountId,
        level: newLevel,
        time: Date.now()
      });

      const badgeToUnlock = LEVEL_BADGES[newLevel];
      if (badgeToUnlock && data.badges[badgeToUnlock] !== true) {
        data.badges[badgeToUnlock] = false;
      }
    }

    return data;
  });
}

function beginEditMessage(id) {
  editingId = id;
  originalText = messages[id]?.text || "";

  if (!messageInput) {
    messageInput =
      document.getElementById("message") ||
      document.getElementById("messageInput") ||
      document.querySelector(".input-bar input");
  }

  messageInput.value = originalText;
  messageInput.focus();
  sendBtn.textContent = "Save Edit";

  if (!document.getElementById("cancelEditBtn")) {
    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancelEditBtn";
    cancelBtn.textContent = "Cancel";
    cancelBtn.className = "cancel-edit-btn";
    cancelBtn.style.marginLeft = "8px";
    cancelBtn.onclick = cancelEdit;
    sendBtn.insertAdjacentElement("afterend", cancelBtn);
  }
}

function finishEditMessage() {
  if (!messageInput) return cancelEdit();

  const newText = messageInput.value.trim();
  if (!newText || !editingId) return cancelEdit();
  if (newText === originalText) {
    cancelEdit();
    return;
  }

  messagesRef.child(editingId).update({
    text: newText,
    edited: true
  }).catch(console.error);

  cancelEdit();
}

function cancelEdit() {
  editingId = null;
  originalText = "";

  if (messageInput) messageInput.value = "";
  if (sendBtn) sendBtn.textContent = "Send";
  const cancelBtn = document.getElementById("cancelEditBtn");
  if (cancelBtn) cancelBtn.remove();
}

function startReply(msgEl) {
  const id = msgEl.dataset.id;
  const msg = messages[id];
  if (!msg) return;
  replyToId = id;

  document.getElementById("reply-name").textContent = msg.name;
  document.getElementById("reply-text").textContent = msg.text;
  document.getElementById("reply-bar").classList.remove("hidden");

  messageInput.focus();
}

function triggerReplySwipe(msgEl, deltaX) {
  msgEl.style.transition = "transform 0.25s ease";
  msgEl.style.transform = `translateX(${deltaX > 0 ? 35 : -35}px)`;

  setTimeout(() => {
    msgEl.style.transform = "";
    msgEl.style.transition = "";
  }, 250);

  startReply(msgEl);
}

/* function renderReplyPreview(msg) {
  if (!msg.replyToId) return "";
  const original = messages[msg.replyToId];
  if (!original || !original.text || !original.name) {
    return `<div class="reply-bubble loading"></div>`;
  }

  return `
  <div class="reply-bubble" data-reply-jump="${msg.replyToId}">
    <strong>${escapeHtml(original.name)}</strong>
    <div class="reply-snippet">
      ${escapeHtml(original.text.slice(0, 80))}${original.edited ? " (edited)" : ""}
    </div>
  </div>`;
}

function refreshAllReplyPreviews() {
  document.querySelectorAll(".msg").forEach(msgEl => {
    const id = msgEl.dataset.id;
    const msg = messages[id];
    if (!msg || !msg.replyToId) return;

    const original = messages[msg.replyToId];
    const bubble = msgEl.querySelector(".reply-bubble");
    if (bubble && original) {
      bubble.innerHTML = `
        <strong>${escapeHtml(original.name)}</strong>
        <div class="reply-snippet">
          ${escapeHtml(original.text.slice(0, 80))}${original.edited ? " (edited)" : ""}
        </div>
      `;
    }
  });
}*/

function hydrateReplyBubble(msg) {
  const el = domCache[msg.id];
  if (!el) return;

  const container = el.querySelector(".bubble-content");
  if (!container) return;

  if (!msg.replyToId) {
    const existing = container.querySelector(".reply-bubble");
    if (existing) existing.remove();
    return;
  }

  let bubble = container.querySelector(".reply-bubble");
  if (!bubble) {
    bubble = document.createElement("div");
    bubble.className = "reply-bubble loading";
    container.prepend(bubble);
  }

  const original = messages[msg.replyToId];
  if (!original) {
    bubble.classList.add("loading");
    return;
  }

  bubble.classList.remove("loading");
  bubble.dataset.replyJump = msg.replyToId;

  bubble.innerHTML = `
    <strong>${escapeHtml(original.name)}</strong>
    <div class="reply-snippet">
      ${escapeHtml(original.text.slice(0, 80))}
      ${original.edited ? " (edited)" : ""}
    </div>`;
}

function updateRepliesPointingTo(editedMsgId) {
  for (const id in messages) {
    const msg = messages[id];
    if (msg.replyToId === editedMsgId) {
      hydrateReplyBubble(msg);
    }
  }
}

messagesEl.addEventListener("click", e => {
  const bubble = e.target.closest(".reply-bubble");
  if (!bubble) return;

  const targetId = bubble.dataset.replyJump;
  if (!targetId) return;

  const targetEl = document.getElementById("msg-" + targetId);
  if (!targetEl) return;

  targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
});

function sendTypingStatus(isTyping) {
  const ref = firebase.database().ref("users/" + accountId + "/typing");
  ref.set({
    typing: isTyping,
    ts: Date.now()
  });
}

function updateTypingIndicator(typingStates) {
  const el = document.getElementById("typingIndicator");

  const typingUsers = Object.values(typingStates)
    .filter(u => u.typing && u.typing.typing)
    .filter(u => u.typing.ts > Date.now() - 4000)
    .filter(u => u.username !== displayName);
  
  if (typingUsers.length === 0) {
    el.classList.remove("show");
    return;
  }

  let text = "";
  if (typingUsers.length === 1)
    text = `${typingUsers[0].username} is typing`;
  else
    text = `${typingUsers.length} people are typing`;

  el.innerHTML = `
    <span>${text}</span>
    <div class="typing-dots"><span></span><span></span><span></span></div>
  `;
  el.classList.add("show");
}

messageInput.addEventListener("input", () => {
  sendTypingStatus(true);
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    sendTypingStatus(false);
  }, 1500);
});

messageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

if (newMsgIndicator) {
  newMsgIndicator.onclick = () => {
    hideNewMsgIndicator();
    if (messagesViewport) messagesViewport.scrollTop = messagesViewport.scrollHeight;
  };
}

document.getElementById("cancel-reply").onclick = () => {
  replyToId = null;
  document.getElementById("reply-bar").classList.add("hidden");
};

/* ================= FIREBASE LISTENERS: initial load + live updates ================= */
const levelEventCache = {};
(async function initMessageLoading() {
  const loadStart = performance.now();
  const timeline = [];

  const [messagesSnap, levelsSnap] = await Promise.all([ messagesRef.orderByChild("time").once("value"), levelEventsRef.once("value") ]);
  messagesSnap.forEach(child => { timeline.push({ type: "msg", id: child.key, ...child.val() }); });
  levelsSnap.forEach(child => { timeline.push({ type: "level", id: child.key, ...child.val() }); });
  timeline.sort((a, b) => a.time - b.time);

  const fragment = document.createDocumentFragment();
  let lastDateLabel = null;

  for (const item of timeline) {
    const label = formatDateLabel(item.time);
    if (label !== lastDateLabel) {
      fragment.appendChild(createDateSeparator(label));
      lastDateLabel = label;
    }

    if (item.type === "msg") {
      const info = allUsers[item.senderId] || {};
      const msg = { ...item, name: info.username || "Unknown User" };
      messages[item.id] = msg;

      const el = createMessageElement({
        ...msg,
        icon: info.profileIcon || "default",
        badges: info.badges || {}
      });

      domCache[item.id] = el;
      fragment.appendChild(el);

      hydrateReplyBubble(msg);

      if (pendingReplies[item.id]) {
        for (const replyMsgId of pendingReplies[item.id]) {
          hydrateReplyBubble(messages[replyMsgId]);
        }
        delete pendingReplies[item.id];
      }

      if (msg.replyToId && !messages[msg.replyToId]) {
        (pendingReplies[msg.replyToId] ??= []).push(msg.id);
      }
    } else {
      levelEventCache[item.id] = true;
      fragment.appendChild(createLevelSeparator(item));
    }
  }
  
  messagesEl.appendChild(fragment);
  const msgEls = [...messagesEl.querySelectorAll(".msg")];

  requestAnimationFrame(() => {
    for (const el of msgEls) {
      const id = el.dataset.id;
      const msg = messages[id];
      if (!msg) continue;

      attachActionHandlers(el, id, msg);
      attachLongPress(el);
      enableSwipeToReply(el);
    }
  });

  requestAnimationFrame(() => {
    regroupMessages();

    for (const el of msgEls) {
      const msg = messages[el.dataset.id];
      if (msg?.reactions) {
        renderReactions(el, msg);
      }
      positionActions(el);
      positionIcons(el);
    }

    messagesViewport.scrollTop = messagesViewport.scrollHeight;
  });
  
  isInitialLoading = false;
  const loadEnd = performance.now();
  console.log(`[LOAD] Loaded ${timeline.length} items in ${(loadEnd - loadStart).toFixed(2)}ms`);

  messagesRef.limitToLast(1).on("child_added", snap => {
    const id = snap.key;
    if (domCache[id]) return

    const msg = snap.val();
    messages[id] = { id, ...msg };
    const info = allUsers[msg.senderId] || {};

    appendMessage({
      ...msg,
      id,
      name: info.username || "Unknown User",
      icon: info.profileIcon || "default",
      badges: info.badges || {}
    });

    const isMe = msg.senderId === accountId;
    if (isMe && messagesViewport) {
      hideNewMsgIndicator();
      messagesViewport.scrollTop = messagesViewport.scrollHeight;
    } else if (messagesViewport) {
      if (userIsAtBottom) {
        messagesViewport.scrollTop = messagesViewport.scrollHeight;
      } else {
        showNewMsgIndicator();
      }
    }
  });

  levelEventsRef.limitToLast(1).on("child_added", snap => {
    const id = snap.key;
    if (levelEventCache[id]) return;

    const data = snap.val();
    levelEventCache[id] = true;

    insertLevelSeparator({ id, ...data });
  });
})();

messagesRef.on("child_changed", snap => {
  const id = snap.key;
  const incoming = snap.val();
  const prev = messages[id] || {};
  const msg = { ...prev, ...incoming, id };

  messages[id] = msg;
  const el = domCache[id];
  if (!el) return;

  updateMessageElement(msg);
  updateRepliesPointingTo(id);
});

messagesRef.on("child_removed", snap => {
  const id = snap.key;
  const el = domCache[id];
  if (!el) return;

  el.remove();
  delete domCache[id];
  delete messages[id];

  scheduleRegroup();
});

/* ================= LOAD MESSAGES / INFINITE SCROLL ================= */
/* let oldestLoadedKey = null;
let isLoadingMore = false;

if (messagesViewport) {
  messagesViewport.addEventListener("scroll", async () => {
    const box = messagesViewport;
    if (box.scrollTop > 100) return;
    if (isLoadingMore) return;
    if (!oldestLoadedKey) return;

    isLoadingMore = true;
    if (spinner) spinner.style.display = "block";

    try {
      const snap = await messagesRef.orderByKey().endBefore(oldestLoadedKey).limitToLast(50).once("value");
      if (!snap.exists()) {
        if (loadOlderBtn) loadOlderBtn.style.display = "none";
        if (spinner) spinner.style.display = "none";
        isLoadingMore = false;
        return;
      }

      const arr = [];
      snap.forEach(s => arr.push({ ...s.val(), id: s.key }));
      const oldHeight = messagesViewport.scrollHeight;
      for (let i = 0; i < arr.length; i++) {
        const m = arr[i];
        prependMessage(m);
      }

      oldestLoadedKey = arr[0].id;
      const newHeight = messagesViewport.scrollHeight;
      messagesViewport.scrollTop = newHeight - oldHeight;
    } catch (err) {
      console.error("[ERROR] Loading older messages:", err);
    } finally {
      if (spinner) spinner.style.display = "none";
      updateLoadOlderVisibility();
      isLoadingMore = false;
    }
  });
}

async function loadOlderMessages() {
  if (isLoadingMore || !oldestLoadedKey) return;
  if (messagesViewport) messagesViewport.scrollTop = 0;
  isLoadingMore = true;

  if (loadOlderBtn) loadOlderBtn.style.display = "none";
  if (spinner) spinner.style.display = "block";

  try {
    const snap = await messagesRef.orderByKey().endBefore(oldestLoadedKey).limitToLast(50).once("value");
    if (!snap.exists()) {
      if (loadOlderBtn) loadOlderBtn.style.display = "none";
      if (spinner) spinner.style.display = "none";
      isLoadingMore = false;
      return;
    }

    const arr = [];
    snap.forEach(s => arr.push({ ...s.val(), id: s.key }));
    const filtered = arr.filter(x => x.id !== oldestLoadedKey);
    if (filtered.length === 0) {
      if (loadOlderBtn) loadOlderBtn.style.display = "none";
      if (spinner) spinner.style.display = "none";
      isLoadingMore = false;
      return;
    }

    filtered.forEach(m => prependMessage(m));
    oldestLoadedKey = filtered[0].id;
  } catch (err) {
    console.error("[ERROR] Loading older messages:", err);
  } finally {
    if (spinner) spinner.style.display = "none";
    updateLoadOlderVisibility();
    isLoadingMore = false;
  }
}

function updateLoadOlderVisibility() {
  if (!oldestLoadedKey) return;
  messagesRef.limitToFirst(1).once("value", snap => {
    if (!snap.exists()) return;
    const veryFirstKey = Object.keys(snap.val())[0];

    if (oldestLoadedKey <= veryFirstKey) {
      loadOlderBtn.style.display = "none";
    } 
    else {
      loadOlderBtn.style.display = "block";
    }
  });
} */

/* ================= GROUPING & ALIGNMENTS ================= */
function positionIcons(msgEl) {
  const bubble = msgEl.querySelector(".bubble");
  const profileIcon = msgEl.querySelector(".profile-icon");
  if (!bubble || !profileIcon) return;

  const bubbleRect = bubble.getBoundingClientRect();
  const msgRect = msgEl.getBoundingClientRect();
  const centerY = bubbleRect.top + bubbleRect.height / 2 - msgRect.top;

  profileIcon.style.top = centerY + "px";
  profileIcon.style.transform = "translateY(-50%)";

  if (msgEl.classList.contains("me")) {
    profileIcon.style.right = -25 + "px";
    profileIcon.style.left = "auto";
  } else {
    profileIcon.style.left = -25 + "px";
    profileIcon.style.right = "auto";
  }
}

function positionActions(msgEl) {
  const bubble = msgEl.querySelector(".bubble");
  const actions = msgEl.querySelector(".actions");
  if (!bubble || !actions) return;

  const bubbleRect = bubble.getBoundingClientRect();
  const msgRect = msgEl.getBoundingClientRect();
  const centerY = bubbleRect.top + bubbleRect.height / 2 - msgRect.top;

  actions.style.top = centerY + "px";
  actions.style.transform = "translateY(-50%)";

  const bubbleWidth = bubble.offsetWidth;
  if (msgEl.classList.contains("me")) {
    actions.style.right = (bubbleWidth + 15) + "px";
    actions.style.left = "auto";
  } else {
    actions.style.left = (bubbleWidth + 15) + "px";
    actions.style.right = "auto";
  }
}

function isSameGroup(a, b) {
  if (!a || !b) return false;
  return a.senderId === b.senderId && Math.abs(a.time - b.time) <= 120000;
}

function hideMeta(el) {
  const meta = el.querySelector(".meta");
  if (meta) meta.classList.add("hidden");
}
function showMeta(el) {
  const meta = el.querySelector(".meta");
  if (meta) meta.classList.remove("hidden");
}
function hideTime(el) {
  if (!el) return;
  const t = el.querySelector(".time");
  if (t) t.classList.add("hidden");
}
function showTime(el) {
  const t = el.querySelector(".time");
  if (t) t.classList.remove("hidden");
}
function hideIcon(el) {
  const d = el.querySelector(".profile-icon");
  if (d) d.classList.add("hidden");
}
function showIcon(el) {
  const d = el.querySelector(".profile-icon");
  if (d) d.classList.remove("hidden");
}

function scheduleRegroup() {
  if (regroupTimer) clearTimeout(regroupTimer);
  regroupTimer = setTimeout(() => {
    regroupMessages();
    regroupTimer = null;
  }, 50);
}

function regroupAround(el) {
  const prev = previousMessage(el);
  const next = nextMessage(el);

  if (prev) regroupSingle(prev);
  regroupSingle(el);
  if (next) regroupSingle(next);
}

function regroupSingle(cur) {
  if (!cur || !cur.classList.contains("msg")) return;

  const prev = previousMessage(cur);
  const next = nextMessage(cur);

  const curMsg = messages[cur.dataset.id];
  const prevMsg = prev ? messages[prev.dataset.id] : null;
  const nextMsg = next ? messages[next.dataset.id] : null;

  const sameAsPrev = prevMsg && isSameGroup(prevMsg, curMsg);
  const sameAsNext = nextMsg && isSameGroup(curMsg, nextMsg);

  cur.classList.remove("single", "first-in-group", "grouped", "last-in-group");

  if (!sameAsPrev && !sameAsNext) {
    cur.classList.add("single");
    showMeta(cur); showIcon(cur); showTime(cur);
  } else if (!sameAsPrev && sameAsNext) {
    cur.classList.add("first-in-group");
    showMeta(cur); hideIcon(cur); hideTime(cur);
  } else if (sameAsPrev && sameAsNext) {
    cur.classList.add("grouped");
    hideMeta(cur); hideIcon(cur); hideTime(cur);
  } else {
    cur.classList.add("last-in-group");
    hideMeta(cur); showIcon(cur); showTime(cur);
  }

  positionActions(cur);
  positionIcons(cur);
}

function isSeparator(el) {
  return el?.classList?.contains("level-separator") || el?.classList?.contains("date-separator");
}

function previousMessage(el) {
  let p = el.previousElementSibling;
  while (p) {
    if (p.classList.contains("msg")) return p;
    if (isSeparator(p)) return null;
    p = p.previousElementSibling;
  }
  return null;
}

function nextMessage(el) {
  let n = el.nextElementSibling;
  while (n) {
    if (n.classList.contains("msg")) return n;
    if (isSeparator(n)) return null;
    n = n.nextElementSibling;
  }
  return null;
}

function regroupMessages() {
  const msgs = [...messagesViewport.querySelectorAll(".msg")];

  for (const cur of msgs) {
    const prev = previousMessage(cur);
    const next = nextMessage(cur);

    const curMsg = messages[cur.dataset.id];
    const prevMsg = prev ? messages[prev.dataset.id] : null;
    const nextMsg = next ? messages[next.dataset.id] : null;

    const sameAsPrev = prevMsg && isSameGroup(prevMsg, curMsg);
    const sameAsNext = nextMsg && isSameGroup(curMsg, nextMsg);

    cur.classList.remove("single", "first-in-group", "grouped", "last-in-group" );

    // CASE 1 - Single
    if (!sameAsPrev && !sameAsNext) {
      cur.classList.add("single");
      showMeta(cur);
      showIcon(cur);
      showTime(cur);
      continue;
    }

    // CASE 2 - First in group
    if (!sameAsPrev && sameAsNext) {
      cur.classList.add("first-in-group");
      showMeta(cur);
      hideIcon(cur);
      hideTime(cur);
      continue;
    }

    // CASE 3 - Middle in group
    if (sameAsPrev && sameAsNext) {
      cur.classList.add("grouped");
      hideMeta(cur);
      hideIcon(cur);
      hideTime(cur);
      continue;
    }

    // CASE 4 - Last in group
    if (sameAsPrev && !sameAsNext) {
      cur.classList.add("last-in-group");
      hideMeta(cur);
      showIcon(cur);
      showTime(cur);
      continue;
    }
  }

  requestAnimationFrame(() => {
    for (let el of msgs) {
      positionActions(el);
      positionIcons(el);
    }
  });
}

/* ================= SETTINGS HANDLER ================= */
let themeIndex = 0;
const THEMES_PER_VIEW = 2;
const TOTAL_PAGES = Math.ceil(THEME_LIST.length / THEMES_PER_VIEW);

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--text1", theme.text1);
  root.style.setProperty("--text2", theme.text2);
  root.style.setProperty("--text3", theme.text3);
  root.style.setProperty("--sidebar", theme.sidebar);
  root.style.setProperty("--input", theme.input);
  root.style.setProperty("--inputArea", theme.inputArea);
  root.style.setProperty("--sendButton", theme.sendButton);
  root.style.setProperty("--sendButtonHover", theme.sendButtonHover);
  root.style.setProperty("--sendButtonShadow", theme.sendButtonShadow);
  root.style.setProperty("--actionMenu", theme.actionMenu);
  root.style.setProperty("--bubble-me", theme.bubbleMe);
  root.style.setProperty("--bubble-other", theme.bubbleOther);
}

function initAccountSettings() {
  const user = allUsers?.[accountId];
  if (!user) return;

  accountUsername.textContent = user.username || "Unknown User";

  const level = user.experience?.level || 0;
  const zxp = user.experience?.zxp || 0;
  const max = zxpLevel(level);

  levelText.textContent = level;
  xpText.textContent = `${zxp} / ${max} ZXP`;

  const progress = Math.min((zxp / max), 1);
  xpFill.style.width = `${progress * 100}%`;

  renderBadgeDropdown(user.badges || {});
  renderEquippedBadge(allUsers[accountId].badges);
}

function renderBadgeDropdown(badges) {
  badgeDropdown.innerHTML = "";

  let equippedBadge = null;
  const badgeEntries = Object.entries(badges);

  badgeEntries.forEach(([name, equipped]) => {
    if (equipped) equippedBadge = name;

    const item = document.createElement("div");
    item.className = "badge-item" + (equipped ? " equipped" : "");

    item.innerHTML = `
      <img src="../Assets/Badges/${name}.png" />
      <span>${formatBadgeName(name)}</span>`;

    item.onclick = () => equipBadge(name);
    badgeDropdown.appendChild(item);
  });

  if (equippedBadge) {
    const unequip = document.createElement("div");
    unequip.className = "badge-item unequip";
    unequip.innerHTML = `
      <span class="fas fa-minus-circle"></span>
      <span>Unequip Badge</span>`;
    unequip.onclick = () => equipBadge(null);
    badgeDropdown.appendChild(unequip);
  }
}

function renderEquippedBadge(badges) {
  let equipped = null;

  Object.entries(badges).forEach(([name, state]) => {
    if (state === true) equipped = name;
  });

  if (!equipped) {
    equippedBadgeEl.innerHTML = "None ▾";
    return;
  }

  equippedBadgeEl.innerHTML = `
    <img src="../Assets/Badges/${equipped}.png" class="badge-icon" style="vertical-align: middle;"/>
    <span>${formatBadgeName(equipped)} ▾</span>`;
}

async function equipBadge(badgeName) {
  const updates = {};
  const userBadges = allUsers?.[accountId]?.badges;
  if (!userBadges) return;

  Object.keys(userBadges).forEach(b => {
    updates[`badges/${b}`] = (b === badgeName);
  });

  await usersRef.child(accountId).update(updates);

  Object.keys(userBadges).forEach(b => {
    allUsers[accountId].badges[b] = (b === badgeName);
  });

  settingsUpdate = true;
  badgeDropdown.classList.add("hidden");

  initAccountSettings();
}

function initThemeSelector() {
  const myTheme = allUsers?.[accountId]?.chatTheme || "dark";

  if (THEMES[myTheme])
    applyTheme(THEMES[myTheme]);

  renderThemeCarousel();
}

async function renderThemeCarousel() {
  themeTrack.innerHTML = "";
  const snap = await usersRef.child(accountId).child("chatTheme").once("value");
  const currentTheme = snap.val() || "dark";

  THEME_LIST.forEach(theme => {
    const card = document.createElement("div");
    card.className = "theme-card";
    card.dataset.theme = theme.id;

    if (theme.id === currentTheme) {
      card.classList.add("selected");
    }

    card.innerHTML = `
      <img src="../Assets/Themes/${theme.img}" />
      <div class="theme-name">${theme.label}</div>
    `;

    card.onclick = async () => {
      if (!THEMES[theme.id]) return;

      applyTheme(THEMES[theme.id]);

      await usersRef.child(accountId).update({
        chatTheme: theme.id
      });

      document
        .querySelectorAll(".theme-card")
        .forEach(c => c.classList.remove("selected"));

      card.classList.add("selected");
    };

    themeTrack.appendChild(card);
  });

  updateThemePosition();
}

function updateThemePosition() {
  const card = themeTrack.querySelector(".theme-card");
  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = 22;
  const pageWidth = (cardWidth + gap) * THEMES_PER_VIEW;

  themeTrack.style.transform = `translateX(-${themeIndex * pageWidth}px)`;
}

badgeButton.onclick = () => {
  badgeDropdown.classList.toggle("hidden");
};

themePrev.onclick = () => {
  themeIndex = Math.max(0, themeIndex - 1);
  updateThemePosition();
};

themeNext.onclick = () => {
  themeIndex = Math.min(TOTAL_PAGES - 1, themeIndex + 1);
  updateThemePosition();
};

themeSelect.addEventListener("change", async () => {
  const themeName = themeSelect.value;
  if (!THEMES[themeName]) return;

  applyTheme(THEMES[themeName]);

  await usersRef.child(accountId).update({ chatTheme: themeName });
});

document.addEventListener("click", e => {
  if (!e.target.closest(".badge-selector")) {
    badgeDropdown.classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  settingsBtn.addEventListener("click", () => {
    initAccountSettings();
    settingsModal.classList.remove("hidden");
  });

  closeSettings.addEventListener("click", () => {
    settingsModal.classList.add("hidden");
    
    if (settingsUpdate) location.reload();
  });

  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.add("hidden");
      if (settingsUpdate) location.reload();
    }
  });
});

/* ================= ACTION MENU HANDLER ================= */
function attachActionHandlers(el, id, data) {
  const menuBtn = el.querySelector(".menu-btn");
  const menu = el.querySelector(".action-menu");
  const replyBtn = el.querySelector(".reply-btn");

  const editBtn = menu.querySelector(".edit-option");
  const reactBtn = menu.querySelector(".react-option");
  const deleteBtn = menu.querySelector(".delete-option");
  const reportBtn = menu.querySelector(".report-option");

  const isMe = data.senderId === accountId;

  function positionMenu() {
    menu.style.top = "";
    menu.style.bottom = "";
    menu.style.left = "";
    menu.style.right = "";

    const btnRect = menuBtn.getBoundingClientRect();
    const msgRect = el.getBoundingClientRect();

    const chatArea = document.querySelector(".chat-area");
    const chatRect = chatArea.getBoundingClientRect();

    const visibleMidY = chatRect.top + chatRect.height / 2;
    const visibleMidX = chatRect.left + chatRect.width / 2;

    const openAbove = btnRect.top > visibleMidY;
    const openOnLeft = btnRect.left > visibleMidX;

    const offsetTop = btnRect.top - msgRect.top;
    const offsetBottom = msgRect.bottom - btnRect.bottom;
    const offsetRight = msgRect.right - btnRect.right;
    const offsetLeft = btnRect.left - msgRect.left;

    if (openAbove) {
      menu.style.bottom = (offsetBottom + btnRect.height + 6) + "px";
    } else {
      menu.style.top = (offsetTop + btnRect.height + 6) + "px";
    }

    if (openOnLeft) {
      menu.style.right = offsetRight + "px";
    } else {
      menu.style.left = offsetLeft + "px";
    }
  }

  menuBtn.onclick = (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.contains("open");
    closeAllMenus({ except: isOpen ? null : menu });
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) positionMenu();
  };

  replyBtn.onclick = () => {
    startReply(el);
    closeMenu(menu);
  };

  if (isMe) {
    editBtn.onclick = () => {
      beginEditMessage(id);
      closeMenu(menu);
    };
  } else {
    editBtn.style.display = "none";
  }

  reactBtn.onclick = () => {
    openReactionPicker(el)
    closeMenu(menu);
  };

  if (isMe) {
    deleteBtn.onclick = () => {
      messagesRef.child(id).remove().catch(console.error);
      closeMenu(menu);
    };
  } else {
    deleteBtn.style.display = "none";
  }

  reportBtn.onclick = () => {
    console.log("Reported:", id);
    closeMenu(menu);
  };
}

function closeMenu(menu) {
  if (menu) menu.classList.remove("open");
}

function closeAllMenus({ except = null } = {}) {
  document.querySelectorAll(".action-menu.open").forEach(m => {
    if (m === except) return;
    m.classList.remove("open");
  });
}

function handleMobileAction(action, msgEl) {
  const id = msgEl.dataset.id;
  const msgData = messages[id];
  if (!msgData) return;
  const isMe = msgData.senderId === accountId;

  switch (action) {
    case "reply":
      startReply(msgEl);
      break;
    case "edit":
      if (isMe) beginEditMessage(id);
      break;
    case "react":
      openReactionPicker(msgEl)
      break;
    case "delete":
      if (isMe) messagesRef.child(id).remove().catch(console.error);
      break;
    case "report":
      console.log("Reported:", id);
      break;
  }
  closeMobileSheet();
}

function openMobileSheet(msgEl) {
  if (suppressNextActionMenu) {
    suppressNextActionMenu = false;
    return;
  }
  currentMobileMsg = msgEl;
  const id = msgEl.dataset.id;
  const msgData = messages[id];
  if (!msgData) return;
  const isMe = msgData.senderId === accountId;

  document.querySelector('[data-action="edit"]').style.display = isMe ? "block" : "none";
  document.querySelector('[data-action="delete"]').style.display = isMe ? "block" : "none";

  sheet.classList.add("open");
  sheet.style.transform = "translateY(0)";
  actionBackdrop.classList.add("show");
}

function closeMobileSheet() {
  sheet.classList.remove("open");
  sheet.style.transform = "";
  actionBackdrop.classList.remove("show");
  actionBackdrop.style.pointerEvents = "none";

  currentMobileMsg = null;
  
  setTimeout(() => {
    actionBackdrop.style.pointerEvents = "";
  }, 300);
}

document.querySelectorAll(".sheet-option").forEach(opt => {
  opt.addEventListener("click", () => {
    if (currentMobileMsg) {
      handleMobileAction(opt.dataset.action, currentMobileMsg);
    }
  });
});

document.querySelector(".sheet-cancel").addEventListener("click", closeMobileSheet);
document.getElementById("sheet-backdrop").addEventListener("click",  closeMobileSheet);

/* ================= REACTION MENU HANDLER ================= */
if (picker && picker.parentNode !== document.body) {
  document.body.appendChild(picker);
  picker.classList.remove("hidden");
  picker.style.display = "none";
}

function hideReactionPicker() {
  if (!picker) return;
  picker.classList.remove("show");
  picker.style.pointerEvents = "none";
  setTimeout(() => {
    if (!picker.classList.contains("show")) picker.style.display = "none";
  }, 150);
  pickerTarget = null;
}

function openReactionPicker(msgEl) {
  if (!picker || !msgEl) return;
  pickerTarget = msgEl;

  const bubble = msgEl.querySelector(".bubble");
  if (!bubble) return;

  const rect = bubble.getBoundingClientRect();

  picker.style.display = "flex";
  picker.style.visibility = "hidden";
  picker.style.pointerEvents = "none";

  const pickerRect = picker.getBoundingClientRect();
  const margin = 8;
  let top = rect.top - pickerRect.height - 10;
  let left;

  if (top < margin) {
    top = rect.bottom + 10;
  }
  if (msgEl.classList.contains("me")) {
    left = rect.right - pickerRect.width;
  } else {
    left = rect.left;
  }

  left = Math.max(margin, Math.min(left, window.innerWidth - pickerRect.width - margin));
  top = Math.max(margin, Math.min(top, window.innerHeight - pickerRect.height - margin));

  picker.style.left = `${Math.round(left)}px`;
  picker.style.top = `${Math.round(top)}px`;

  requestAnimationFrame(() => {
    picker.style.visibility = "visible";
    picker.style.pointerEvents = "auto";
    picker.classList.add("show");
  });
}

function renderReactions(msgEl, data) {
  const container = msgEl.querySelector(".reaction-badges");
  if (!container) return;
  
  container.innerHTML = "";
  if (!data?.reactions) return;

  Object.keys(data.reactions).forEach(emoji => {
    const users = Object.keys(data.reactions[emoji]);
    const isMine = data.reactions[emoji][accountId];

    const badge = document.createElement("div");
    badge.className = "reaction-badge" + (isMine ? " mine" : "");
    badge.dataset.emoji = emoji;
    badge.innerHTML = `${emoji} <span>${users.length}</span>`;

    container.appendChild(badge);
  });
}

function toggleReaction(msgEl, emoji) {
  const msgId = msgEl.dataset.id;
  const ref = messagesRef.child(msgId).child("reactions").child(emoji).child(accountId);

  ref.once("value").then(snap => {
    if (snap.exists()) ref.remove();
    else ref.set(true);
  });
}

function showReactionTooltip(badge, msgData, emoji) {
  const usersObj = msgData.reactions?.[emoji];
  if (!usersObj) return;

  const usernames = Object.keys(usersObj)
    .map(uid => {
      const name = allUsers?.[uid]?.username || "Unknown User";
      return `<b>${name}</b>`;
    })
    .sort((a, b) => {
      const aa = a.replace(/<\/?b>/g, "");
      const bb = b.replace(/<\/?b>/g, "");
      return aa.localeCompare(bb);
    });

  tooltip.innerHTML = "Reacted by " + usernames.join(", ");

  tooltip.style.visibility = "hidden";
  tooltip.style.opacity = "0";
  tooltip.style.display = "block";

  // tooltip.style.left = "-9999px";
  // tooltip.style.top = "-9999px";

  const tipRect = tooltip.getBoundingClientRect();
  const badgeRect = badge.getBoundingClientRect();

  const msgEl = findMsgElForBadge(badge);
  const isMe = msgEl && msgEl.classList.contains("me");

  let top = badgeRect.top - tipRect.height;
  let left = isMe ? badgeRect.right - tipRect.width : badgeRect.left;

  left = Math.max(6, Math.min(left, window.innerWidth - tipRect.width - 6));
  top = Math.max(6, Math.min(top, window.innerHeight - tipRect.height - 6));

  tooltip.style.left = Math.round(left) + "px";
  tooltip.style.top = Math.round(top) + "px";

  requestAnimationFrame(() => {
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "";
    tooltip.classList.add("show");
  });
}

function hideReactionTooltip() {
  if (!tooltip) return;
  tooltip.classList.remove("show");
  setTimeout(() => {
    if (!tooltip.classList.contains("show")) {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = "0";
    }
  }, 150);
}

function findMsgElForBadge(badge) {
  return ( badge.closest(".msg") || badge.parentNode?.closest?.(".msg") || badge.parentElement?.closest?.(".msg") || null );
}

document.addEventListener("click", (e) => {
  const badge = e.target.closest(".reaction-badge");
  if (!badge) return;
  e.stopPropagation();
  suppressNextActionMenu = true;

  const msgEl = findMsgElForBadge(badge);
  if (!msgEl) return;
  toggleReaction(msgEl, badge.dataset.emoji);
});

document.addEventListener("mouseover", (e) => {
  if (window.innerWidth <= 900) return;

  const badge = e.target.closest(".reaction-badge");
  if (!badge) {
    hideReactionTooltip();
    return;
  }

  const emoji = badge.dataset.emoji;
  const msgEl = findMsgElForBadge(badge);
  if (!msgEl) return;

  const msgData = messages[msgEl.dataset.id];
  if (!msgData) return;

  clearTimeout(tooltipTimer);
  tooltipTimer = setTimeout(() => { showReactionTooltip(badge, msgData, emoji); }, 250);
});

document.addEventListener("mouseout", (e) => {
  if (!e.relatedTarget || !tooltip.contains(e.relatedTarget)) {
    hideReactionTooltip();
  }
});

document.addEventListener('pointerdown', (ev) => {
  const badge = ev.target.closest('.reaction-badge');
  if (!badge || window.innerWidth > 900) return;
  badgePress.badge = badge;
  badgePress.long = false;
  badgePress.startedAt = Date.now();
  badgePress.timer = setTimeout(() => {
    badgePress.long = true;
    showReactionTooltip(badge, messages[findMsgElForBadge(badge).dataset.id], badge.dataset.emoji);
  }, 450);
}, {passive:true});

document.addEventListener('pointerup', (ev) => {
  const badge = ev.target.closest('.reaction-badge');
  clearTimeout(badgePress.timer);
  if (!badge || badge !== badgePress.badge) return;
  if (!badgePress.long) {
    const msgEl = findMsgElForBadge(badge);
    if (msgEl) toggleReaction(msgEl, badge.dataset.emoji);
  }
  badgePress.badge = null;
});

window.addEventListener('scroll', () => { hideReactionTooltip() }, { passive: true });

if (picker) {
  picker.querySelectorAll(".react").forEach(el => {
    el.onclick = (ev) => {
      ev.stopPropagation();
      if (!pickerTarget) return hideReactionPicker();
      toggleReaction(pickerTarget, el.textContent);
      hideReactionPicker();
    };
  });
}

/* ================= BADGE TOOLTIP HANDLERS ================= */
function showBadgeTooltip(badge, badgeName) {
  badgeTooltip.innerHTML = formatBadgeName(badgeName);

  badgeTooltip.style.visibility = "hidden";
  badgeTooltip.style.opacity = "0";
  badgeTooltip.style.display = "block";

  const tipRect = badgeTooltip.getBoundingClientRect();
  const badgeRect = badge.getBoundingClientRect();

  let top = badgeRect.top - tipRect.height;
  let left = badgeRect.left;

  left = Math.max(6, Math.min(left, window.innerWidth - tipRect.width - 6));
  top = Math.max(6, Math.min(top, window.innerHeight - tipRect.height - 6));

  badgeTooltip.style.left = Math.round(left) + "px";
  badgeTooltip.style.top = Math.round(top) + "px";

  requestAnimationFrame(() => {
    badgeTooltip.style.visibility = "visible";
    badgeTooltip.style.opacity = "";
    badgeTooltip.classList.add("show");
  });
}

function hideBadgeTooltip() {
  if (!badgeTooltip) return;
  badgeTooltip.classList.remove("show");
  setTimeout(() => {
    if (!badgeTooltip.classList.contains("show")) {
      badgeTooltip.style.visibility = "hidden";
      badgeTooltip.style.opacity = "0";
    }
  }, 150);
}

document.addEventListener("mouseover", (e) => {
  if (window.innerWidth <= 900) return;

  const badge = e.target.closest(".badge-icon");
  if (!badge) {
    hideBadgeTooltip();
    return;
  }

  const badgeName = badge.dataset.badge;
  if (!badgeName) return;

  clearTimeout(badgeTooltipTimer);
  badgeTooltipTimer = setTimeout(() => {
    showBadgeTooltip(badge, badgeName);
  }, 250);
});

document.addEventListener("mouseout", (e) => {
  if (!e.relatedTarget || !badgeTooltip.contains(e.relatedTarget)) {
    hideBadgeTooltip();
  }
});

document.addEventListener("pointerdown", (ev) => {
  const badge = ev.target.closest('.badge-icon');
  if (!badge || window.innerWidth > 900) return;

  badgePress.badge = badge;
  badgePress.long = false;
  badgePress.startedAt = Date.now();

  const badgeName = badge.dataset.badge;

  badgePress.timer = setTimeout(() => {
    badgePress.long = true;
    showBadgeTooltip(badge, badgeName);
  }, 450);
}, { passive: true });

document.addEventListener("pointerup", () => {
  clearTimeout(badgePress.timer);
  badgePress.badge = null;
});

window.addEventListener("scroll", hideBadgeTooltip, { passive: true });

/* ================= EVENT HANDLERS ================= */
let GLOBAL_LAST_POINTER_TARGET = null;

if (messagesViewport) {
  messagesViewport.addEventListener("scroll", () => {
    const nearBottom = messagesViewport.scrollTop + messagesViewport.clientHeight >= messagesViewport.scrollHeight - 30;
    userIsAtBottom = nearBottom;
    if (nearBottom) hideNewMsgIndicator();
    hasScrolledSinceTouch = true;

    if (typeof pressTimer !== "undefined" && pressTimer) {
      clearTimeout(pressTimer);
      pressTimer = null;
    }
    if (typeof tooltipPressTimer !== "undefined" && tooltipPressTimer) {
      clearTimeout(tooltipPressTimer);
      tooltipPressTimer = null;
    }

    pressStartBadge = null;

    try { hideReactionTooltip(); } catch (e) {}
    try { hideReactionPicker(); } catch (e) {}
  }, { passive: true });
}

function showNewMsgIndicator() {
  if (newMsgIndicator) {
    newMsgIndicator.style.display = "block";
    newMsgIndicator.classList.remove("hidden");
  }
}

function hideNewMsgIndicator() {
  if (newMsgIndicator) {
    newMsgIndicator.classList.add("hidden");
    setTimeout(() => {
      if (newMsgIndicator.classList.contains("hidden"))
        newMsgIndicator.style.display = "none";
    }, 200);
  }
}

function updateAllActionPositions() {
  document.querySelectorAll(".msg").forEach(positionActions);
  document.querySelectorAll(".msg").forEach(positionIcons);
}

function chatSideBar() {
  const sidebar = document.getElementById("sidebar") || document.querySelector(".sidebar");
  const toggleBtn = document.getElementById("toggleSidebar") || document.querySelector(".sidebar-toggle");
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");

  if (!sidebar || !toggleBtn) {
    return;
  }

  toggleBtn.addEventListener("click", () => {
    if (isMobile()) {
      const isOpen = sidebar.classList.toggle("open");
      if (sidebarBackdrop) sidebarBackdrop.classList.toggle("show", isOpen);
    } else {
      sidebar.classList.toggle("collapsed");
      sidebar.classList.remove("open");
      if (sidebarBackdrop) sidebarBackdrop.classList.remove("show");
    }
  });

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", () => {
      sidebar.classList.remove("open");
      sidebarBackdrop.classList.remove("show");
    });
  }

  window.addEventListener("resize", () => {
    if (!isMobile()) {
      sidebar.classList.remove("open");
      if (sidebarBackdrop) sidebarBackdrop.classList.remove("show");
    }

    if (isMobile()) {
      sidebar.classList.remove("collapsed");
    }
  });
}

function attachLongPress(msgEl) {
  if (!msgEl) return;
  let pressTimer;

  const start = (e) => {
    hasScrolledSinceTouch = false;

    if (e.target.closest(".reaction-badge")) return;
    if (!(window.innerWidth <= 900)) return;
    if (hasScrolledSinceTouch) return;

    try { e.preventDefault(); } catch (err) { }

    if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
    pressTimer = setTimeout(() => { openMobileSheet(msgEl); }, 420);
  };

  const cancel = () => clearTimeout(pressTimer);

  msgEl.addEventListener("touchstart", start, { passive: false });
  msgEl.addEventListener("touchend", cancel);
  msgEl.addEventListener("touchmove", cancel);
  msgEl.addEventListener("touchcancel", cancel);

  msgEl.addEventListener("mousedown", start);
  msgEl.addEventListener("mouseup", cancel);
  msgEl.addEventListener("mouseleave", cancel);
}

function enableSwipeToReply(msgEl) {
  let startX = 0;
  let swiping = false;
  const isMine = msgEl.classList.contains("me");

  const TRIGGER_DISTANCE = 120;
  const MAX_DRAG = 60; // 80

  msgEl.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    swiping = true;
  });

  msgEl.addEventListener("touchmove", e => {
    if (!swiping) return;
    const deltaX = e.touches[0].clientX - startX;

    if (isMine && deltaX > 0) return;
    if (!isMine && deltaX < 0) return;

    if (Math.abs(deltaX) < MAX_DRAG) {
      msgEl.style.transform = `translateX(${deltaX}px)`;
    }

    if (!isMine && deltaX > TRIGGER_DISTANCE) {
      swiping = false;
      triggerReplySwipe(msgEl, deltaX);
      return;
    }

    if (isMine && deltaX < -TRIGGER_DISTANCE) {
      swiping = false;
      triggerReplySwipe(msgEl, deltaX);
      return;
    }
  });

  msgEl.addEventListener("touchend", () => {
    msgEl.style.transform = "";
    msgEl.style.transition = "transform 0.15s ease";
    setTimeout(() => (msgEl.style.transition = ""), 150);
    swiping = false;
  });
}

document.addEventListener("DOMContentLoaded", chatSideBar);
document.addEventListener("pointerdown", (ev) => { GLOBAL_LAST_POINTER_TARGET = ev.target; }, true);
document.addEventListener("click", (ev) => {
    const target = ev.target;

    if (target.closest("#reaction-picker")) return;
    if (target.closest(".action-menu")) return;

    if (typeof hideReactionPicker === "function") hideReactionPicker();
    if (typeof closeAllMenus === "function") closeAllMenus();
}, true);

window.addEventListener('resize', () => {
  if (resizeTimer) cancelAnimationFrame(resizeTimer);
  resizeTimer = requestAnimationFrame(() => updateAllActionPositions());
});

/* ================= PRESENCE / RECOVERY ================= */
let myPresenceRef = null;

async function join(name, restoredInfo = null) {
  if (!authReady || !user) {
    pendingJoin = { name, restoredInfo };
    return;
  }

  if (restoredInfo && !accountId) {
    console.error("[JOIN] ERROR: restoredInfo provided but accountId missing");
    return;
  }

  if (!accountId) {
    accountId = "u_" + Math.random().toString(36).slice(2);
    localStorage.setItem("z_accountId", accountId);
  }

  displayName = (name || "").trim() || "Guest";
  localStorage.setItem("z_name", displayName);
  if (promptEl) promptEl.style.display = "none";

  try {
    await initPresence();
  } catch (err) {
    console.error("[JOIN] initPresence failed:", err);
  }

  let lastPresenceUpdate = 0;
  presenceRef.on("value", async snap => {
    const now = Date.now();
    if (now - lastPresenceUpdate < 800) return;
    lastPresenceUpdate = now;

    const list = snap.val() || {};
    const entries = Object.values(list);
    const count = entries.length;

    if (presenceEl) presenceEl.innerHTML = "";
    if (onlineCountEl) onlineCountEl.textContent = count + " online";

    for (const p of entries) {
      if (!p.accountId) continue;

      const user = allUsers[p.accountId] || {};

      const name = user.username || "Unknown User";
      const icon = user.profileIcon || "default";

      const el = document.createElement("div");
      el.className = "presence-item";

      el.innerHTML = `
      <div class="presence-left">
        <img class="presence-icon" src="../Assets/Icons/${icon}.png" />
        <div class="presence-name">${escapeHtml(name)}</div>
      </div>`;

      presenceEl.appendChild(el);
    }
  });

  const userRef = usersRef.child(accountId);
  const snap = await userRef.once("value");
  const userData = snap.val();

  if (!snap.exists()) {
    if (!restoredInfo) {
      const code = generateRecoveryCode(8);
      const payload = {
        accountId,
        username: displayName,
        chatTheme: "dark",
        profileIcon: "default",

        experience: {
          level: 1,
          zxp: 0,
          messageCount: 0
        },

        badges: {
          starter: true
        },

        typing: {
          typing: false,
          ts: 0
        },

        created: Date.now(),
        lastActive: Date.now(),
        timeout: 0
      };
      console.log("[JOIN] creating new user package:", payload);
      await userRef.set(payload);
      await firebase.database().ref("recoveryIndex").child(code).set(accountId);
      localStorage.setItem("z_recovery", JSON.stringify({ code, payload }));
      location.reload();
    } else {
      console.warn("[JOIN] expected restoredInfo but user package is missing; restoredInfo:", restoredInfo);
    }
  } else {
    console.log("[JOIN] user:", snap.val());
  }

  if (userData?.chatTheme && THEMES[userData.chatTheme]) {
    applyTheme(THEMES[userData.chatTheme]);
  } else {
    applyTheme(THEMES.dark);
  }

  await usersRef.child(accountId).update({ lastActive: Date.now() });
  console.log("[JOIN] complete — accountId active:", accountId);
}

async function restoreWithCode(code) {
  recoveryErrorEl.textContent = "";

  if (!code || typeof code !== "string") {
    recoveryErrorEl.textContent = "Please enter a recovery code to proceed.";
    return;
  }

  code = code.trim().toUpperCase();

  try {
    const idxRef = firebase.database().ref("recoveryIndex").child(code);
    const snap = await idxRef.once("value");

    if (!snap.exists()) {
      recoveryErrorEl.textContent = "Invalid recovery code.";
      return;
    }

    const restoredId = snap.val();
    console.log("[RESTORE] found accountId:", restoredId);

    const userSnap = await usersRef.child(restoredId).once("value");
    console.log("[RESTORE] usersRef lookup exists:", userSnap.exists());

    if (!userSnap.exists()) {
      recoveryErrorEl.textContent = "This account no longer exists. Create a new one to continue.";
      return;
    }

    const data = userSnap.val();
    accountId = restoredId;
    localStorage.setItem("z_accountId", restoredId);
    console.log("[RESTORE] accountId set locally to:", accountId);

    displayName = data.username || "Guest";
    localStorage.setItem("z_name", displayName);

    const restoredInfo = {
      username: data.username
    };

    if (promptEl) promptEl.style.display = "none";
    await join(displayName, restoredInfo);

    alert("Account Successfully Restored");
    location.reload();
  } catch (err) {
    console.error("[RESTORE] restoreWithCode ERROR:", err);
  }
}

async function initPresence() {
  try {
    const presenceSnap = await presenceRef.once("value");
    const list = presenceSnap.val() || {};
    let existingKey = null;

    for (const key in list) {
      if (list[key].accountId === accountId) {
        existingKey = key;
        break;
      }
    }

    if (existingKey) {
      console.log("[PRESENCE] Reusing existing presence:", existingKey);
      myPresenceRef = presenceRef.child(existingKey);
    } else {
      console.log("[PRESENCE] Creating new presence");
      myPresenceRef = presenceRef.push();
    }

    myPresenceRef.onDisconnect().remove();
    return myPresenceRef.set({ accountId, ts: Date.now() }).catch(err => { console.error("[PRESENCE] set error:", err); throw err; });
  } catch (err) {
    console.error("[PRESENCE] initPresence exception:", err);
    throw err;
  }
}

function recheckPresenceConnection() {
  firebase.database().ref(".info/connected").once("value").then(snap => {
    if (snap.val() === true) {
      initPresence();
    } else {
      console.log("[PRESENCE] Not connected - waiting for Firebase reconnect");
    }
  });
}

function generateRecoveryCode(len = 8) {
  const CH = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < len; i++) out += CH[Math.floor(Math.random() * CH.length)];
  return out;
}

joinBtn && (joinBtn.onclick = async () => {
  let n = promptName.value.trim();
  promptErrorEl.textContent = "";

  if (n.length < 3) {
    promptErrorEl.textContent = "Username must be at least 3 characters.";
    return;
  }
  if (n.length > 15) {
    promptErrorEl.textContent = "Username must be at most 15 characters.";
    return;
  }

  try {
    const snap = await usersRef.orderByChild("username").equalTo(n).once("value");
    if (snap.exists()) {
      promptErrorEl.textContent = "That username is already taken.";
      return;
    }
  } catch (err) {
    console.error("[JOIN] Username check failed:", err);
    promptErrorEl.textContent = "Error checking username. Try again.";
    return;
  }

  join(n);
});

if (restoreBtn) {
  restoreBtn.onclick = () => {
    const c = recoveryInput ? recoveryInput.value : "";
    restoreWithCode(c);
  };
}

if (recoveryInput) {
  recoveryInput.onkeydown = e => {
    if (e.key === "Enter") restoreWithCode(recoveryInput.value);
  };
}

window.addEventListener("focus", () => {
  recheckPresenceConnection();
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    recheckPresenceConnection();
  }
});

setInterval(() => {
  const timeEls = Array.from(document.querySelectorAll(".time"));
  const last = timeEls.slice(-120);
  for (const el of last) {
    const ts = Number(el.dataset.timestamp);
    if (!ts) continue;
    if (!el.classList.contains("hidden")) el.textContent = timeAgo(ts);
  }
}, 30000);
