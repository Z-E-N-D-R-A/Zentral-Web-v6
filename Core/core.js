const PROFILE_ICONS = [
  "zendra_blue", "zendra_gray", "zendra_green", "zendra_orange", "zendra_pink", "zendra_purple", "zendra_red", "zendra_turquoise",
  "city_home", "city_hongkong", "city_toronto", "city_london", "city_shanghai", "city_paris", "city_seoul", "city_washington",
  "ai_cyberpunk", "ai_urban", "ai_rain", "ai_town", "ai_droid", "ai_robot", "ai_fox", "ai_firework",
  "others_zendra1", "others_zendra2", "others_zen", "others_cat", "others_lasers", "others_snow", "others_spark", "others_spiral"
];

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
firebase.initializeApp(firebaseConfig);

const usersRef = firebase.database().ref("users");
const googleProvider = new firebase.auth.GoogleAuthProvider();

let user = null;
let accountId = null;
let sessionListenerRef = null;

let isBanned = false;
let isTimeout = false;
let banReady = false;
let authReady = false;
let isLoggingOut = false;

let allUsers = {};
let pendingJoin = {};

const promptEl = document.getElementById("prompt") || null;
const promptName = document.getElementById("prompt-name") || null;
const joinBtn = document.getElementById("prompt-join") || null;
const promptErrorEl = document.getElementById("prompt-error");

const googleBtn = document.getElementById("prompt-google");
const googlePrompt = document.getElementById("google-username-prompt");
const googleInput = document.getElementById("google-username-input");
const googleError = document.getElementById("google-username-error");
const googleConfirm = document.getElementById("google-username-confirm");

const settingsModal = document.getElementById("settingsModal");
const accountUsername = document.getElementById("accountUsername");
const badgeDropdown = document.getElementById("badgeDropdown");
const equippedBadgeEl = document.getElementById("equippedBadge");
const badgeButton = document.getElementById("badgeButton");
const iconGrid = document.getElementById("iconGrid");
const iconPrev = document.getElementById("iconPrev");
const iconNext = document.getElementById("iconNext");

const googleStatusEl = document.getElementById("googleStatus");
const googleActionBtn = document.getElementById("googleActionBtn");
const googleBtnText = document.getElementById("googleBtnText");

const ICONS_PER_PAGE = 8;
const statusInput = document.getElementById("statusInput");
const selectedTrack = document.getElementById('selectedTrack');

let iconIndex = 0;
let equippedIcon = null;
let settingsUpdate = false;
let settingsOpened = false
let selectedTrackData = null;

usersRef.on("value", (snap) => { allUsers = snap.val() || {}; });
window.addEventListener('load', () => {
    const lastTab = localStorage.getItem('zentral_feed') || 'members';
    switchFeed(null, lastTab);
    loadDraft();
});

firebase.database().ref('status').on('value', (snapshot) => {
    const data = snapshot.val() || {};
    const membersFeed = document.getElementById('membersFeed');
    const guestsFeed = document.getElementById('guestsFeed');

    membersFeed.innerHTML = "";
    guestsFeed.innerHTML = "";

    const statusArray = Object.values(data).sort((a, b) => {
        const isAMine = (user && a.userId === user.uid);
        const isBMine = (user && b.userId === user.uid);

        if (isAMine) return -1;
        if (isBMine) return 1;
        return b.timestamp - a.timestamp;
    });

    statusArray.forEach(item => {
        const card = createStatusCard(item);
        if (item.isMember) membersFeed.appendChild(card);
        else guestsFeed.appendChild(card);
    });
});

function getEquippedBadge(badges) {
  if (!badges) return null;

  for (const [name, value] of Object.entries(badges)) {
    if (value === true) return name;
  }
  return null;
}

function showMessage(title, text) {
  const msg = document.getElementById("coreMessage");
  msg.querySelector("h3").textContent = title;
  msg.querySelector("p").textContent = text;
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 3000);
}

function saveDraft() {
    const draft = {
        text: statusInput.value,
        music: selectedTrackData
    };
    localStorage.setItem('zentral_draft', JSON.stringify(draft));
}

function loadDraft() {
    const saved = localStorage.getItem('zentral_draft');
    if (!saved) return;

    const draft = JSON.parse(saved);
    if (draft.text) {
        statusInput.value = draft.text;
        updateCharCount();
    }
    if (draft.music) selectTrack(draft.music, true); 
}

function updateCharCount() {
    const display = document.getElementById('charCount');
    const remaining = 100 - statusInput.value.length;
    display.innerText = remaining;
    if (remaining <= 10) display.classList.add('limit-near');
    else display.classList.remove('limit-near');
}

function toggleMusicSearch() {
    const modal = document.getElementById('musicModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function handleSearch() {
    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = "Searching...";

    const script = document.createElement('script');
    script.src = `https://api.deezer.com/search?q=${encodeURIComponent(query)}&output=jsonp&callback=handleDeezerResponse`;
    document.body.appendChild(script);
}

function handleDeezerResponse(data) {
    displayResults(data.data || []);
    const scripts = document.querySelectorAll('script[src*="api.deezer.com"]');
    scripts.forEach(s => s.remove());
}

function displayResults(tracks) {
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = "";

    if (tracks.length === 0) {
        resultsDiv.innerHTML = '<div class="empty-state">No results found.</div>';
        return;
    }

    tracks.forEach(track => {
        const div = document.createElement('div');
        div.className = 'track-item';
        div.innerHTML = `
            <img src="${track.album.cover_small}" alt="art">
            <div class="track-info">
                <span class="track-name">${track.title}</span>
                <span class="track-artist">${track.artist.name}</span>
            </div>
        `;
        div.onclick = () => selectTrack(track);
        resultsDiv.appendChild(div);
    });
}

function selectTrack(track, isLoading = false) {
    selectedTrackData = track;
    const addMusicBtn = document.querySelector('.music-btn');
    
    selectedTrack.innerHTML = `
        <div class="pill-content">
            <img src="${track.album.cover_small}" alt="art">
            <div class="pill-text">
                <span class="pill-title">${track.title}</span>
                <span class="pill-artist">${track.artist.name}</span>
            </div>
            <button class="remove-track" onclick="removeSelectedTrack(event)">&times;</button>
        </div>`;

    selectedTrack.style.display = 'inline-flex';
    addMusicBtn.style.display = 'none';
    if (!isLoading) toggleMusicSearch();
    saveDraft();
}

function removeSelectedTrack(event) {
    if (event) event.stopPropagation();
    selectedTrackData = null;
    const addMusicBtn = document.querySelector('.music-btn');
    
    selectedTrack.style.display = 'none';
    selectedTrack.innerHTML = '';
    addMusicBtn.style.display = 'flex';
}

async function postStatus() {
    const text = statusInput.value;

    if (!user || !user.uid) {
        showMessage("Please create an account to post your status.", "Click the '+' button at bottom right corner to create.");
        return;
    }

    if (!await userHasAccount(user.uid)) {
        showMessage("Please create an account to post your status.", "Click the '+' button at bottom right corner to create.");
        return;
    }

    if (!text && !selectedTrackData) {
        showMessage("Your status can't be empty!", "Please enter something before posting.");
        return;
    }

    if (text.length > 100) {
        showMessage("Status is too long!", "Please do not exceed 100 characters.");
        return;
    }

    if (isTimeout || isBanned) {
        showMessage("Unable to Post Status", "Please try again later.");
        return;
    }

    try {
        const userSnap = await usersRef.child(user.uid).once('value');
        const userData = userSnap.val();
        const isMember = userData.isMember ? true : false;
        const statusData = {
            userId: user.uid,
            message: text,
            isMember: isMember,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            music: selectedTrackData ? {
                title: selectedTrackData.title,
                artist: selectedTrackData.artist.name,
                cover: selectedTrackData.album.cover_small,
                id: selectedTrackData.id
            } : null
        };

        await firebase.database().ref('status/' + user.uid).set(statusData);
        console.log("[STATUS] Posted successfully!");

        updateCharCount();
        removeSelectedTrack();
        statusInput.value = '';
        localStorage.removeItem('zentral_draft');

        if (isMember) switchFeed(null, "members");
        else switchFeed(null, "guests");
    } catch (err) {
        console.error("[STATUS] Post failed:", err);
        alert("Failed to post status. Try again.");
    }
}

function switchFeed(e, type) {
    localStorage.setItem('zentral_feed', type);

    if (e && e.currentTarget) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.innerText.toLowerCase() === type) btn.classList.add('active');
        });
    }

    const membersFeed = document.getElementById('membersFeed');
    const guestsFeed = document.getElementById('guestsFeed');

    if (type === 'members') {
        membersFeed.style.display = 'block';
        guestsFeed.style.display = 'none';
    } else {
        membersFeed.style.display = 'none';
        guestsFeed.style.display = 'block';
    }
}

function createStatusCard(item) {
    const card = document.createElement('div');
    card.className = `status-card ${item.isMember ? 'member-card' : ''}`;
    
    const userData = allUsers[item.userId] || {};
    const displayName = userData.username || userData.name || "Unknown User";
    
    const icon = userData.profileIcon || "zendra_blue";
    const googlePhoto = userData.google?.IconURL || null;

    let iconUrl = "../Assets/Icons/zendra_blue.png";
    if (icon === "google" && googlePhoto) iconUrl =  googlePhoto;
    else iconUrl = `../Assets/Icons/${icon}.png`;

    const equippedBadge = getEquippedBadge(userData.badges);
    const badgeHTML = equippedBadge ? `<img src="../Assets/Badges/${equippedBadge}.png" class="user-badge" title="${equippedBadge}">` : '';
    
    const isMine = (user && item.userId === user.uid);
    const deleteBtn = isMine ? `<button class="delete-status-btn" onclick="deleteStatus('${item.userId}')"><i class="fas fa-trash"></i></button>` : '';

    let musicHTML = '';
    if (item.music) {
        musicHTML = `
            <div class="status-music-bite" onclick="playTrackById('${item.music.id}', this)">
                <img src="${item.music.cover}" alt="Album Art">
                <div class="music-info">
                    <span class="track-title">${item.music.title}</span>
                    <span class="track-artist">${item.music.artist}</span>
                </div>
                <div class="play-indicator"><i class="fas fa-play"></i></div>
            </div>
        `;
    }

    card.innerHTML = `
        <div class="status-header">
            <div class="user-meta">
                <img src="${iconUrl}" class="profile-icon" alt="profile">
                <div class="user-info-stack">
                    <div class="name-row">
                        <span class="user-id">@${displayName}</span>
                        ${badgeHTML}
                    </div>
                    <span class="status-time">${timeAgo(item.timestamp)}</span>
                </div>
            </div>
            ${deleteBtn}
        </div>
        <p class="status-text">${item.message}</p>
        ${musicHTML}
    `;

    card.style.zIndex = "1"; 
    return card;
}

async function deleteStatus(uid) {
    try {
        await firebase.database().ref('status/' + uid).remove();
    } catch (err) {
        console.error("Delete failed:", err);
    }
}

async function playTrackById(trackId, element) {
    const player = document.getElementById('audioPlayer');
    const icon = element.querySelector('.play-indicator i');

    if (player.getAttribute('data-current-id') === trackId) {
        playPreview(player.src, element, trackId);
        return;
    }

    icon.className = 'fas fa-spinner fa-spin';
    try {
        const response = await new Promise((resolve) => {
            const callbackName = 'freshDeezer_' + trackId;
            window[callbackName] = (data) => {
                delete window[callbackName];
                resolve(data);
            };
            const script = document.createElement('script');
            script.src = `https://api.deezer.com/track/${trackId}?output=jsonp&callback=${callbackName}`;
            document.body.appendChild(script);
        });

        if (response.preview) {
            playPreview(response.preview, element, trackId);
        }
    } catch (err) {
        icon.className = 'fas fa-exclamation-triangle';
    }
}

async function playPreview(url, element, trackId) {
    const player = document.getElementById('audioPlayer');
    const icon = element.querySelector('.play-indicator i');

    if (player.src === url && !player.paused) {
        player.pause();
        icon.className = 'fas fa-play';
        return;
    }

    document.querySelectorAll('.play-indicator i').forEach(i => i.className = 'fas fa-play');

    try {
        player.src = url;
        player.setAttribute('data-current-id', trackId); 
        await player.play(); 
        icon.className = 'fas fa-pause';
    } catch (err) {
        console.error("Playback failed:", err);
        icon.className = 'fas fa-exclamation-triangle';
    }
}

function timeAgo(timestamp) {
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);

    const years = Math.floor(seconds / (3600 * 24 * 365));
    if (years >= 1) return `${years}y ago`;

    const days = Math.floor(seconds / (3600 * 24));
    if (days >= 1) return `${days}d ago`;

    const hours = Math.floor(seconds / 3600);
    if (hours >= 1) return `${hours}h ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes >= 1) return `${minutes}m ago`;

    return 'just now';
}

/* USER JOIN */
firebase.auth().onAuthStateChanged(async (u) => {
  if (!u) {
    try {
      await firebase.auth().signInAnonymously();
      return;
    } catch (err) {
      console.error("[AUTH] Anonymous sign-in failed:", err);
      return;
    }
  }

  user = u;
  accountId = u.uid;
  authReady = true;
  console.log("[AUTH] Logged in:", accountId, "Anonymous:", u.isAnonymous);

  usersRef.child(accountId).on("value", snap => {
      const data = snap.val();
      if (!data) return;

      const setBtn = document.getElementById('toggleSettingsBtn');
      setBtn.style.display = "flex";

      const addBtn = document.getElementById('addAccountBtn');
      addBtn.style.display = "none";

      if (data && data.isMember === true) {
        document.getElementById('textarea-wrapper').style.display = "flex";
        document.getElementById('creator-text').style.display = "none";
      } else {
        document.getElementById('textarea-wrapper').style.display = "none";
        document.getElementById('creator-text').style.display = "block";
      }

      const state = getCurrentState(data);
      banReady = true;
      if (state.type === "banned") {
        isBanned = true;
        enableBannedUI();
      } else {
        isBanned = false;
        disableBannedUI();
        if (state.type === "timeout") isTimeout = true;
        else isTimeout = false;
      }

      tryProcessQueue();
  });

  if (user) updateGoogleUI(user);
});

function openPrompt() {
    document.getElementById('prompt').style.display = 'flex';
}

function closePrompt() {
    document.getElementById('prompt').style.display = 'none';
}

async function join(name, username) {
  if (!authReady || !user) {
    pendingJoin = { name };
    return;
  }

  if (!firebase.auth().currentUser) {
    console.log("[JOIN] No authenticated user — aborting");
    return;
  }

  accountId = user.uid;
  displayName = (name || "").trim() || "Guest";

  if (promptEl) promptEl.style.display = "none";
  const userRef = usersRef.child(accountId);

  try {
    const snap = await userRef.once("value");

    if (!snap.exists()) {
      if (user.email) {
        const emailQuery = await usersRef.orderByChild("email").equalTo(user.email).once("value");

        if (emailQuery.exists()) {
          alert("An account with this Google email already exists.");
          await firebase.auth().signOut();
          return;
        }
      }

      console.log("[JOIN] Creating new account:", accountId);

      const payload = {
        username,
        displayName,
        sessionVersion: 1,
        chatTheme: "dark",
        profileIcon: "zendra_blue",
        experience: {
          level: 1,
          zxp: 0,
          messageCount: 0
        },
        badges: { Starter: true },
        typing: { typing: false, ts: 0 },
        created: Date.now(),
        lastActive: Date.now(),
        lastRead: Date.now(),
        tutorial: 10,
        timeout: 0,
        arenaWins: 0
      };

      await userRef.set(payload);
      localStorage.setItem("z_tutorialStep", 0);
      location.reload();
    } else {
      console.log("[JOIN] Existing account:", accountId);
      await userRef.update({ lastActive: Date.now() });
      const userData = snap.val();
      localStorage.setItem("z_sessionVersion", userData.sessionVersion);
    }

    if (await userHasAccount(accountId)) sessionListener(accountId);
    console.log("[JOIN] Complete — active UID:", accountId);
  } catch (err) {
    console.error("[JOIN]", err);
  }
}

function getCurrentState(user) {
  const t = user.timeout || 0;
  if (t === 1) return { type: "banned" };
  if (t > Date.now()) return { type: "timeout", until: t };
  return { type: "ok" };
}

function tryProcessQueue() {
  if (!authReady || !user || !banReady) return;

  if (isBanned) {
    console.warn("[AUTH] User is banned — blocking app startup");
    return;
  }

  if (pendingJoin) {
    pendingJoin = null;
    join().catch(console.error);
  }
}

function showGoogleUsernamePrompt(user) {
  promptEl.style.display = "none";
  googlePrompt.style.display = "flex";
  googleInput.value = user.displayName || "";
  googleInput.focus();
}

async function userHasAccount(uid) {
  if (!uid) return false;
  
  try {
    const snap = await usersRef.child(uid).once("value");
    return snap.exists();
  } catch (error) {
    console.error("Database check failed:", error);
    return false;
  }
}

async function validateUsername(displayName) {
  const validRegex = /^[A-Za-z0-9\s!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/;

  if (!displayName || displayName.trim().length < 3) {
    return { error: "Username must be at least 3 characters." };
  }

  if (displayName.length > 15) {
    return { error: "Username must be at most 15 characters." };
  }

  if (!validRegex.test(displayName)) {
    return { error: "Username can only contain letters, numbers, and symbols." };
  }

  const username = displayName.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "");

  try {
    const snap = await usersRef.orderByChild("username").equalTo(username).once("value");

    if (snap.exists()) {
      return { error: "That username is already taken." };
    }
  } catch (err) {
    return { error: "Error checking username." };
  }

  return { displayName, username };
}

function sessionListener(accountId) {
  if (!accountId) return;
  const sessionRef = usersRef.child(accountId).child("sessionVersion");
  sessionListenerRef = sessionRef;

  sessionRef.on("value", snap => {
    if (isLoggingOut) return;
    if (!snap.exists()) return;

    const remoteVersion = snap.val();
    const localVersion = Number(localStorage.getItem("z_sessionVersion"));

    if (!localVersion) {
      localStorage.setItem("z_sessionVersion", remoteVersion);
      return;
    }

    if (remoteVersion !== localVersion) {
      forceLogout("You have been logged out by an administrator.");
    }
  });
}

function forceLogout(reason) {
  if (isLoggingOut) return;
  isLoggingOut = true;

  if (accountId) {
    firebase.database().ref("presence").child(accountId).remove();
  }

  if (sessionListenerRef) {
    sessionListenerRef.off();
    sessionListenerRef = null;
  }

  localStorage.removeItem("z_sessionVersion");
  alert(reason);
  console.warn("[AUTH] Forced logout:", accountId);

  firebase.auth().signOut().then(() => {
    location.reload();
  });
}

function enableBannedUI() {
  const main = document.getElementById("core-area");
  const banned = document.getElementById("banned-screen");

  if (main) main.style.display = "none";
  banned.style.display = "flex";
}

function disableBannedUI() {
  const main = document.getElementById("core-area");
  const banned = document.getElementById("banned-screen");

  banned.style.display = "none"
  if (main) main.style.display = "";
}

promptEl.addEventListener('click', (event) => {
    if (event.target === promptEl) closePrompt();
});

joinBtn.onclick = async () => {
  const name = promptName.value.trim();
  promptErrorEl.textContent = "";

  const result = await validateUsername(name);

  if (result.error) {
    promptErrorEl.textContent = result.error;
    return;
  }

  join(result.displayName, result.username);
};

googleBtn.onclick = async () => {
  promptErrorEl.textContent = "";

  try {
    const result = await firebase.auth().signInWithPopup(googleProvider);
    const user = result.user;
    const userRef = usersRef.child(user.uid);
    const snap = await userRef.once("value");

    if (snap.exists()) {
      promptEl.style.display = "none";
      join();
      return;
    }

    showGoogleUsernamePrompt(user);
  } catch (err) {
    if (err.code === "auth/popup-closed-by-user") return;
    console.error(err);
    promptErrorEl.textContent = "Google login failed. Please try again.";
  }
};

googleConfirm.onclick = async () => {
  const name = googleInput.value.trim();
  googleError.textContent = "";

  const result = await validateUsername(name);

  if (result.error) {
    googleError.textContent = result.error;
    return;
  }

  const { displayName, username } = result;

  try {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const googleProviderData = user.providerData.find( p => p.providerId === "google.com" );

    await usersRef.child(uid).set({
      username,
      displayName,

      sessionVersion: 1,
      chatTheme: "dark",
      profileIcon: "zendra_blue",

      google: googleProviderData ? {
        IconURL: googleProviderData.photoURL || null,
        email: googleProviderData.email || null,
        emailVerified: googleProviderData.emailVerified || false
      } : null,

      authProvider: "google",

      experience: {
        level: 1,
        zxp: 0,
        messageCount: 0
      },

      badges: { Starter: true },
      typing: { typing: false, ts: 0 },

      created: Date.now(),
      lastActive: Date.now(),
      lastRead: Date.now(),

      tutorial: 10,
      timeout: 0,
      arenaWins: 0
    });

    googlePrompt.style.display = "none";
    location.reload();
    join(displayName, username);
  } catch (err) {
    console.error(err);
    googleError.textContent = "Error creating account. Try again.";
  }
};

googleActionBtn.addEventListener("click", async () => {
  const user = firebase.auth().currentUser;
  if (!user) return;

  const isConnected = googleActionBtn.dataset.connected === "true";
  if (isConnected) return;

  try {
    await user.linkWithPopup(googleProvider);
    const googleData = user.providerData.find(p => p.providerId === "google.com");

    await usersRef.child(user.uid).update({
      google: {
        IconURL: googleData.photoURL || null,
        email: googleData.email,
        emailVerified: googleData.emailVerified || true
      },
      authProvider: "google"
    });
    alert("Successfully connected Google to your Zentral account.");
    console.log("[LINK] Google connection success.");
    location.reload();
    updateGoogleUI(firebase.auth().currentUser);
  } catch (error) {
    console.error("[LINK] Google connection error:", error);
  }
});

/* SETTINGS */
function formatBadgeName(name) {
  return name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Badge";
}

function openSettingsModal() {
    const user = allUsers?.[accountId];
    if (!user) return;

    settingsModal.classList.remove("hidden");
    accountUsername.textContent = user.username || "Unknown User";

    settingsOpened = true;
    renderBadgeDropdown(user.badges || {});
    renderEquippedBadge(allUsers[accountId].badges);
    renderIconPage();
    updateGoogleUI(firebase.auth().currentUser);
}

function closeSettingsModal() {
    settingsOpened = false;
    settingsModal.classList.add("hidden");
    googleActionBtn.style.pointerEvents = "none";
    if (settingsUpdate) location.reload();
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
      <img src="../Assets/Badges/Unequip.png" />
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
  renderEquippedBadge(allUsers[accountId].badges);
}

function renderIconPage() {
  iconGrid.innerHTML = "";
  googleIconWrapper.innerHTML = "";

  const userData = allUsers[accountId];
  const equipped = userData?.profileIcon || "zendra_blue";

  if (userData?.google?.IconURL) {
    const label = document.createElement("span");
    label.textContent = "Google Icon: ";
    label.style.marginRight = "12px";
    label.style.opacity = "0.7";

    const googleImg = document.createElement("img");
    googleImg.src = userData.google.IconURL;
    googleImg.className = "profile-icon-option google-avatar standalone";
    googleImg.dataset.icon = "google";

    if (equipped === "google") {
      googleImg.classList.add("selected");
    }

    googleImg.onclick = () => equipIcon("google");

    googleIconWrapper.innerHTML = "";
    googleIconWrapper.appendChild(label);
    googleIconWrapper.appendChild(googleImg);
  }

  const start = iconIndex * ICONS_PER_PAGE;
  const pageIcons = PROFILE_ICONS.slice(start, start + ICONS_PER_PAGE);

  pageIcons.forEach(iconName => {
    const img = document.createElement("img");
    img.src = `../Assets/Icons/${iconName}.png`;
    img.className = "profile-icon-option";
    img.dataset.icon = iconName;

    if (iconName === equipped) {
      img.classList.add("selected");
    }

    img.onclick = () => equipIcon(iconName);
    iconGrid.appendChild(img);
  });
}

function equipIcon(iconName) {
  equippedIcon = iconName;
  settingsUpdate = true;
  firebase.database().ref(`users/${accountId}/profileIcon`).set(iconName);
  renderIconPage();
}

function updateGoogleUI(user) {
  const googleProviderData = user.providerData.find(p => p.providerId === "google.com");

  if (googleProviderData) {
    if (settingsOpened) {
      googleActionBtn.dataset.connected = "true";
      googleActionBtn.classList.add("connected");
      googleActionBtn.style.pointerEvents = "none";
    }

    document.getElementById("googleBtnText").textContent = "Google Connected";
    document.getElementById("googleStatus").textContent = "Connected Email: " + googleProviderData.email;
  } else {
    if (settingsOpened) {
      googleActionBtn.dataset.connected = "false";
      googleActionBtn.classList.remove("connected");
      googleActionBtn.style.pointerEvents = "auto";
    }

    document.getElementById("googleBtnText").textContent = "Connect to Google";
    document.getElementById("googleStatus").textContent = "Not connected. Connect your Google account to enable secure login and account recovery.";
  }
}

badgeButton.onclick = () => {
  badgeDropdown.classList.toggle("hidden");
};

iconPrev.onclick = () => {
  if (iconIndex > 0) {
    iconIndex--;
    renderIconPage();
  }
};

iconNext.onclick = () => {
  const maxPage = Math.ceil(PROFILE_ICONS.length / ICONS_PER_PAGE) - 1;
  if (iconIndex < maxPage) {
    iconIndex++;
    renderIconPage();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.add("hidden");
      if (settingsUpdate) location.reload();
    }
  });
});