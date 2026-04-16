const THEME_LIST = [
  { id: "light", label: "Light", img: "Light.png" },
  { id: "dark", label: "Dark", img: "Dark.png" },
  { id: "ocean", label: "Ocean", img: "Ocean.png" },
  { id: "space", label: "Space", img: "Space.png" },
  { id: "vintage", label: "Vintage", img: "Vintage.png" },
  { id: "futuristic", label: "Futuristic", img: "Futuristic.png" },
  { id: "earth", label: "Earth", img: "Earth.png" },
  { id: "snow", label: "Snow", img: "Snow.png" },
  { id: "brawl", label: "Brawl", img: "Brawl.png" },
  { id: "stay", label: "STAY", img: "Stay.png" }
];

const THEMES = {
  light: {
    bg: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    backdrop: "rgba(0, 0, 0, 0.1)",

    text1: "#3b4345",
    text2: "#636e72",
    text3: "#b2bec3",
    text4: "#0984e3",

    input: "#ffffff",
    inputArea: "#f1f2f6",
    sidebar: "#ffffff",
    actionMenu: "#ffffff",

    reactionBadge: "#dfe6e9",
    mentionBg: "rgba(91, 184, 255, 0.15)",
    mentionBd: "#0984e3",

    button: "#eee",
    buttonHover: "#cae5ff",
    buttonShadow: "rgba(9, 132, 227, 0.3)",
    glassBorder: "rgba(48, 48, 48, 0.1)",

    bubbleMe: "linear-gradient(135deg, #b1ddff, #94fffd)",
    bubbleOther: "#ffffff"
  },

  dark: {
    bg: "linear-gradient(135deg, #0d0d0e, #0a0a0a)",
    backdrop: "#3b3b3b",

    text1: "#e6e6e6",
    text2: "#c2c2c2",
    text3: "#333",
    text4: "#0080ff",

    input: "#1c1c1c",
    inputArea: "#333",
    sidebar: "#1e1e1e",
    actionMenu: "#1c1c1c",

    reactionBadge: "#3d3d3d",
    mentionBg: "rgba(21, 94, 204, 0.2)",
    mentionBd: "#155ecc",

    button: "#595959",
    buttonHover: "#1f70ee",
    buttonShadow: "rgba(21, 94, 204, 0.4)",
    glassBorder: "rgba(255, 255, 255, 0.1)",

    bubbleMe: "linear-gradient(135deg, #155ecc, #1f70ee)",
    bubbleOther: "rgba(255, 255, 255, 0.08)"
  },

  ocean: {
    bg: "linear-gradient(135deg, #000428, #004e92)",
    backdrop: "rgba(8, 32, 62, 0.6)",

    text1: "#e0f7fa",
    text2: "#b2ebf2",
    text3: "#407088",
    text4: "#00d2ff",

    input: "rgba(0, 0, 0, 0.2)",
    inputArea: "rgba(255, 255, 255, 0.05)",
    sidebar: "#0e1555",
    actionMenu: "#0d2c44",

    reactionBadge: "#1a4d6e",
    mentionBg: "rgba(0, 210, 255, 0.2)",
    mentionBd: "#00d2ff",

    button: "#1b52a6",
    buttonHover: "#1b5cc3",
    buttonShadow: "rgba(21, 94, 204, 0.45)",
    glassBorder: "rgba(72, 97, 209, 0.1)",
    
    bubbleMe: "linear-gradient(135deg, #00d2ff, #3a7bd5)",
    bubbleOther: "rgba(255, 255, 255, 0.1)"
  },

  space: {
    bg: "linear-gradient(135deg, #200122, #6f0051)",
    backdrop: "rgba(32, 1, 34, 0.7)",

    text1: "#ffe0f0",
    text2: "#d4a5bc",
    text3: "#5a2d42",
    text4: "#ff0080",

    input: "rgba(0, 0, 0, 0.3)",
    inputArea: "rgba(255, 255, 255, 0.03)",
    sidebar: "#310027",
    actionMenu: "#2a012d",

    reactionBadge: "#4a0e4e",
    mentionBg: "rgba(255, 0, 128, 0.2)",
    mentionBd: "#ff0080",

    button: "#c70064",
    buttonHover: "#ff3399",
    buttonShadow: "rgba(255, 0, 128, 0.4)",
    glassBorder: "rgba(163, 18, 182, 0.1)",

    bubbleMe: "linear-gradient(135deg, #ff0080, #7928ca)",
    bubbleOther: "rgba(255, 255, 255, 0.08)"
  },

  vintage: {
    bg: "linear-gradient(135deg, #2c3e50, #4ca1af)",
    backdrop: "rgba(30, 40, 44, 0.3)",

    text1: "#f3e5ab",
    text2: "#d2b48c",
    text3: "#7f8c8d",
    text4: "#ff7700",

    input: "rgba(0, 0, 0, 0.2)",
    inputArea: "rgba(255, 255, 255, 0.05)",
    sidebar: "#144859",
    actionMenu: "#2c3e50",

    reactionBadge: "#34495e",
    mentionBg: "rgba(239, 178, 132, 0.85)",
    mentionBd: "#e67e22",

    button: "#ab8959",
    buttonHover: "#db835a",
    buttonShadow: "rgba(143, 94, 81, 0.4)",
    glassBorder: "rgba(243, 229, 171, 0.15)",

    bubbleMe: "linear-gradient(135deg, #c8a59b, #c0996f)",
    bubbleOther: "rgba(255, 255, 255, 0.07)"
  },

  futuristic: {
    bg: "linear-gradient(135deg, #26303e, #0b0c10)",
    backdrop: "rgba(62, 114, 121, 0.8)",

    text1: "#00ffea",
    text2: "#85e7cb",
    text3: "#5d8277",
    text4: "#00ffcc",

    input: "#214845",
    inputArea: "#07302e",
    sidebar: "#003744",
    actionMenu: "#002c39",

    reactionBadge: "#15464f",
    mentionBg: "rgba(0, 255, 238, 0.2)",
    mentionBd: "#00ffbf",

    button: "#16a299",
    buttonHover: "#3fc4bb",
    buttonShadow: "rgba(25, 181, 192, 0.45)",
    glassBorder: "rgba(18, 182, 157, 0.1)",

    bubbleMe: "linear-gradient(135deg, #1a5057, #061923)",
    bubbleOther: "rgba(0, 255, 225, 0.1)"
  },

  earth: {
    bg: "linear-gradient(135deg, #134e5e, #71b280)",
    backdrop: "rgba(62, 121, 106, 0.8)",

    text1: "#f0fff4",
    text2: "#c6f6d5",
    text3: "#88d4a3",
    text4: "#30ff6e",

    input: "#013c3b",
    inputArea: "#0f5444",
    sidebar: "#0d3e4d",
    actionMenu: "#1a3a3a",

    reactionBadge: "#00714f",
    mentionBg: "#4ca283",
    mentionBd: "#00ff80",

    button: "#2f855a",
    buttonHover: "#38a169",
    buttonShadow: "rgba(56, 161, 105, 0.4)",
    glassBorder: "rgba(255, 255, 255, 0.1)",

    bubbleMe: "linear-gradient(135deg, #2d6a4f, #1b4332)",
    bubbleOther: "rgba(30, 108, 192, 0.2)"
  },

  snow: {
    bg: "linear-gradient(135deg, #94d4e4, #007db6)",
    backdrop: "rgba(82, 184, 198, 0.8)",

    text1: "#cff5ff",
    text2: "#9af5ff",
    text3: "#7ccfd8",
    text4: "#0091ff",

    input: "#27abba",
    inputArea: "rgba(158, 222, 227, 0.5)",
    sidebar: "#0a9dad",
    actionMenu: "#4493b0",

    reactionBadge: "#3f8fc8",
    mentionBg: "#c9f9ff",
    mentionBd: "#0091ff",

    button: "#55c8d5",
    buttonHover: "#83dee8",
    buttonShadow: "rgba(0, 238, 255, 0.5)",
    glassBorder: "rgba(48, 255, 241, 0.25)",
    
    bubbleMe: "linear-gradient(135deg, #4facfe, #00f2fe)",
    bubbleOther: "rgba(73, 146, 164, 0.5)"
  },

  brawl: {
    bg: "radial-gradient(circle at center, #1e4eb8, #071a3d)",
    backdrop: "#0055a964",

    text1: "#FFCC00",
    text2: "#FFFFFF",
    text3: "#4a90e2",
    text4: "#00ff3c",

    input: "#133c82",
    inputArea: "#0a54a4",
    sidebar: "#133c82",
    actionMenu: "#204b96",

    reactionBadge: "#004271",
    mentionBg: "#33801e",
    mentionBd: "#63ff1b",

    button: "#c7832f",
    buttonHover: "#ff8c00",
    buttonShadow: "rgba(255, 140, 0, 0.5)",
    glassBorder: "rgba(255, 255, 255, 0.2)",
    
    bubbleMe: "linear-gradient(180deg, #3a7bd5, #004e92)",
    bubbleOther: "rgba(61, 111, 167, 0.45)"
  },

  stay: {
    bg: "radial-gradient(circle at top, #7f0e0e, #0a0a0a 60%)",
    backdrop: "#511d1d",

    text1: "#e6e6e6",
    text2: "#c2c2c2",
    text3: "#333",
    text4: "#ff0000",

    input: "#220808",
    inputArea: "#3b1010",
    sidebar: "#220808",
    actionMenu: "#400000",

    reactionBadge: "#430f0f",
    mentionBg: "#653434",
    mentionBd: "#ff2600",

    button: "#611313",
    buttonHover: "#791111",
    buttonShadow: "rgba(117, 29, 29, 0.45)",
    glassBorder: "rgba(150, 18, 18, 0.2)",

    bubbleMe: "linear-gradient(90deg, #291212, #481717)",
    bubbleOther: "rgba(255, 255, 255, 0.13)"
  },
};

const EMOJI_DATA = {
  "Smileys": [
    { "char": "😀", "name": "grinning face" },
    { "char": "😃", "name": "grinning face with big eyes" },
    { "char": "😄", "name": "grinning face with smiling eyes" },
    { "char": "😁", "name": "beaming face with smiling eyes" },
    { "char": "😆", "name": "grinning squinting face" },
    { "char": "😅", "name": "grinning face with sweat" },
    { "char": "🤣", "name": "rolling on the floor laughing" },
    { "char": "😂", "name": "face with tears of joy" },
    { "char": "🙂", "name": "slightly smiling face" },
    { "char": "🙃", "name": "upside-down face" },
    { "char": "🫠", "name": "melting face" },
    { "char": "😉", "name": "winking face" },
    { "char": "😊", "name": "smiling face with smiling eyes" },
    { "char": "😇", "name": "smiling face with halo" },
    { "char": "🥰", "name": "smiling face with hearts" },
    { "char": "😍", "name": "smiling face with heart-eyes" },
    { "char": "🤩", "name": "star-struck" },
    { "char": "😘", "name": "face blowing a kiss" },
    { "char": "😗", "name": "kissing face" },
    { "char": "😚", "name": "kissing face with closed eyes" },
    { "char": "😙", "name": "kissing face with smiling eyes" },
    { "char": "🥲", "name": "smiling face with tear" },
    { "char": "😋", "name": "face savoring food" },
    { "char": "😛", "name": "face with tongue" },
    { "char": "😜", "name": "winking face with tongue" },
    { "char": "🤪", "name": "zany face" },
    { "char": "😝", "name": "squinting face with tongue" },
    { "char": "🤑", "name": "money-mouth face" },
    { "char": "🤗", "name": "smiling face with open hands" },
    { "char": "🤭", "name": "face with hand over mouth" },
    { "char": "🫢", "name": "face with open eyes and hand over mouth" },
    { "char": "🫣", "name": "face with peeking eye" },
    { "char": "🤫", "name": "shushing face" },
    { "char": "🤔", "name": "thinking face" },
    { "char": "🫡", "name": "saluting face" },
    { "char": "🤐", "name": "zipper-mouth face" },
    { "char": "🤨", "name": "face with raised eyebrow" },
    { "char": "😐", "name": "neutral face" },
    { "char": "😑", "name": "expressionless face" },
    { "char": "😶", "name": "face without mouth" },
    { "char": "🫥", "name": "dotted line face" },
    { "char": "😶‍🌫️", "name": "face in clouds" },
    { "char": "😏", "name": "smirking face" },
    { "char": "😒", "name": "unamused face" },
    { "char": "🙄", "name": "face with rolling eyes" },
    { "char": "😬", "name": "grimacing face" },
    { "char": "😮‍💨", "name": "face exhaling" },
    { "char": "🤥", "name": "lying face" },
    { "char": "🫨", "name": "shaking face" },
    { "char": "😌", "name": "relieved face" },
    { "char": "😔", "name": "pensive face" },
    { "char": "😪", "name": "sleepy face" },
    { "char": "🤤", "name": "drooling face" },
    { "char": "😴", "name": "sleeping face" },
    { "char": "😷", "name": "face with medical mask" },
    { "char": "🤒", "name": "face with thermometer" },
    { "char": "🤕", "name": "face with head-bandage" },
    { "char": "🤢", "name": "nauseated face" },
    { "char": "🤮", "name": "face vomiting" },
    { "char": "🤧", "name": "sneezing face" },
    { "char": "🥵", "name": "hot face" },
    { "char": "🥶", "name": "cold face" },
    { "char": "🥴", "name": "woozy face" },
    { "char": "😵", "name": "face with crossed-out eyes" },
    { "char": "😵‍💫", "name": "face with spiral eyes" },
    { "char": "🤯", "name": "exploding head" },
    { "char": "🤠", "name": "cowboy hat face" },
    { "char": "🥳", "name": "partying face" },
    { "char": "🥸", "name": "disguised face" },
    { "char": "😎", "name": "smiling face with sunglasses" },
    { "char": "🤓", "name": "nerd face" },
    { "char": "🧐", "name": "face with monocle" },
    { "char": "😕", "name": "confused face" },
    { "char": "🫤", "name": "face with diagonal mouth" },
    { "char": "😟", "name": "worried face" },
    { "char": "🙁", "name": "slightly frowning face" },
    { "char": "😮", "name": "face with open mouth" },
    { "char": "😯", "name": "hushed face" },
    { "char": "😲", "name": "astonished face" },
    { "char": "😳", "name": "flushed face" },
    { "char": "🥺", "name": "pleading face" },
    { "char": "🥹", "name": "face holding back tears" },
    { "char": "😦", "name": "frowning face with open mouth" },
    { "char": "😧", "name": "anguished face" },
    { "char": "😨", "name": "fearful face" },
    { "char": "😰", "name": "anxious face with sweat" },
    { "char": "😥", "name": "sad but relieved face" },
    { "char": "😢", "name": "crying face" },
    { "char": "😭", "name": "loudly crying face" },
    { "char": "😱", "name": "face screaming in fear" },
    { "char": "😖", "name": "confounded face" },
    { "char": "😣", "name": "persevering face" },
    { "char": "😞", "name": "disappointed face" },
    { "char": "😓", "name": "downcast face with sweat" },
    { "char": "😩", "name": "weary face" },
    { "char": "😫", "name": "tired face" },
    { "char": "🥱", "name": "yawning face" },
    { "char": "😤", "name": "face with steam from nose" },
    { "char": "😡", "name": "pouting face" },
    { "char": "😠", "name": "angry face" },
    { "char": "🤬", "name": "face with symbols on mouth" }
  ],

  "People": [
    { "char": "👋", "name": "waving hand" },
    { "char": "🤚", "name": "raised back of hand" },
    { "char": "🖐", "name": "hand with fingers splayed" },
    { "char": "✋", "name": "raised hand" },
    { "char": "🖖", "name": "vulcan salute" },
    { "char": "🫱", "name": "rightwards hand" },
    { "char": "🫲", "name": "leftwards hand" },
    { "char": "🫷", "name": "leftwards pushing hand" },
    { "char": "🫸", "name": "rightwards pushing hand" },
    { "char": "👌", "name": "ok hand" },
    { "char": "🤌", "name": "pinched fingers" },
    { "char": "🤏", "name": "pinching hand" },
    { "char": "✌", "name": "victory hand" },
    { "char": "🤞", "name": "crossed fingers" },
    { "char": "🫶", "name": "heart hands" },
    { "char": "🤟", "name": "love-you gesture" },
    { "char": "🤘", "name": "sign of the horns" },
    { "char": "🤙", "name": "call me hand" },
    { "char": "👈", "name": "backhand index pointing left" },
    { "char": "👉", "name": "backhand index pointing right" },
    { "char": "👆", "name": "backhand index pointing up" },
    { "char": "👇", "name": "backhand index pointing down" },
    { "char": "👍", "name": "thumbs up" },
    { "char": "👎", "name": "thumbs down" },
    { "char": "✊", "name": "raised fist" },
    { "char": "👊", "name": "oncoming fist" },
    { "char": "🤛", "name": "left-facing fist" },
    { "char": "🤜", "name": "right-facing fist" },
    { "char": "👏", "name": "clapping hands" },
    { "char": "🙌", "name": "raising hands" },
    { "char": "👐", "name": "open hands" },
    { "char": "🤲", "name": "palms up together" },
    { "char": "🤝", "name": "handshake" },
    { "char": "🙏", "name": "folded hands" },
    { "char": "💪", "name": "flexed biceps" },
    { "char": "🦾", "name": "mechanical arm" },
    { "char": "🦿", "name": "mechanical leg" },
    { "char": "🦵", "name": "leg" },
    { "char": "🦶", "name": "foot" },
    { "char": "👂", "name": "ear" },
    { "char": "🦻", "name": "ear with hearing aid" },
    { "char": "👃", "name": "nose" },
    { "char": "🧠", "name": "brain" },
    { "char": "🫀", "name": "anatomical heart" },
    { "char": "🫁", "name": "lungs" },
    { "char": "🦷", "name": "tooth" },
    { "char": "🦴", "name": "bone" },
    { "char": "👀", "name": "eyes" },
    { "char": "👁", "name": "eye" },
    { "char": "👅", "name": "tongue" },
    { "char": "👄", "name": "mouth" },
    { "char": "👶", "name": "baby" },
    { "char": "🧒", "name": "child" },
    { "char": "👦", "name": "boy" },
    { "char": "👧", "name": "girl" },
    { "char": "🧑", "name": "person" },
    { "char": "👨", "name": "man" },
    { "char": "👩", "name": "woman" },
    { "char": "👱", "name": "person: blond hair" },
    { "char": "👴", "name": "old man" },
    { "char": "👵", "name": "old woman" },
    { "char": "👮", "name": "police officer" },
    { "char": "👷", "name": "construction worker" },
    { "char": "💂", "name": "guard" },
    { "char": "🕵", "name": "detective" },
    { "char": "🧑‍⚕️", "name": "health worker" },
    { "char": "🧑‍🎓", "name": "student" },
    { "char": "🧑‍🏫", "name": "teacher" },
    { "char": "🧑‍⚖️", "name": "judge" },
    { "char": "🧑‍🍳", "name": "cook" },
    { "char": "🧑‍🔧", "name": "mechanic" },
    { "char": "🧑‍🏭", "name": "factory worker" },
    { "char": "🧑‍💼", "name": "office worker" },
    { "char": "🧑‍🔬", "name": "scientist" },
    { "char": "🧑‍💻", "name": "technologist" },
    { "char": "🧑‍🎤", "name": "singer" },
    { "char": "🧑‍🎨", "name": "artist" },
    { "char": "🧑‍✈️", "name": "pilot" },
    { "char": "🧑‍🚀", "name": "astronaut" },
    { "char": "🧑‍🚒", "name": "firefighter" },
    { "char": "🤴", "name": "prince" },
    { "char": "👸", "name": "princess" },
    { "char": "👳", "name": "person wearing turban" },
    { "char": "👲", "name": "person with skullcap" },
    { "char": "🧕", "name": "woman with headscarf" },
    { "char": "👓", "name": "glasses" },
    { "char": "🕶", "name": "sunglasses" },
    { "char": "🥽", "name": "goggles" },
    { "char": "🥼", "name": "lab coat" },
    { "char": "🦺", "name": "safety vest" },
    { "char": "👔", "name": "necktie" },
    { "char": "👕", "name": "t-shirt" },
    { "char": "👖", "name": "jeans" },
    { "char": "🧣", "name": "scarf" },
    { "char": "🧤", "name": "gloves" },
    { "char": "🧥", "name": "coat" },
    { "char": "🧦", "name": "socks" },
    { "char": "👗", "name": "dress" },
    { "char": "👘", "name": "kimono" },
    { "char": "🥻", "name": "sari" },
    { "char": "🩱", "name": "one-piece swimsuit" },
    { "char": "🩲", "name": "briefs" },
    { "char": "🩳", "name": "shorts" },
    { "char": "👙", "name": "bikini" },
    { "char": "👚", "name": "woman’s clothes" },
    { "char": "👛", "name": "purse" },
    { "char": "👜", "name": "handbag" },
    { "char": "👝", "name": "clutch bag" },
    { "char": "🛍", "name": "shopping bags" },
    { "char": "🎒", "name": "backpack" },
    { "char": "👞", "name": "man’s shoe" },
    { "char": "👟", "name": "running shoe" },
    { "char": "🥾", "name": "hiking boot" },
    { "char": "🥿", "name": "flat shoe" },
    { "char": "👠", "name": "high-heeled shoe" },
    { "char": "👡", "name": "woman’s sandal" },
    { "char": "🩰", "name": "ballet shoes" },
    { "char": "👢", "name": "woman’s boot" },
    { "char": "👑", "name": "crown" },
    { "char": "👒", "name": "woman’s hat" },
    { "char": "🎩", "name": "top hat" },
    { "char": "🎓", "name": "graduation cap" },
    { "char": "🧢", "name": "billed cap" },
    { "char": "⛑", "name": "rescue worker’s helmet" },
    { "char": "💄", "name": "lipstick" },
    { "char": "💍", "name": "ring" },
    { "char": "💎", "name": "gem stone" }
  ],

  "Animals": [
    { "char": "🐶", "name": "dog face" },
    { "char": "🐱", "name": "cat face" },
    { "char": "🐭", "name": "mouse face" },
    { "char": "🐹", "name": "hamster face" },
    { "char": "🐰", "name": "rabbit face" },
    { "char": "🦊", "name": "fox" },
    { "char": "🐻", "name": "bear" },
    { "char": "🐼", "name": "panda" },
    { "char": "🐨", "name": "koala" },
    { "char": "🐯", "name": "tiger face" },
    { "char": "🦁", "name": "lion" },
    { "char": "🐮", "name": "cow face" },
    { "char": "🐷", "name": "pig face" },
    { "char": "🐽", "name": "pig nose" },
    { "char": "🐸", "name": "frog" },
    { "char": "🐵", "name": "monkey face" },
    { "char": "🐒", "name": "monkey" },
    { "char": "🦍", "name": "gorilla" },
    { "char": "🦧", "name": "orangutan" },
    { "char": "🦓", "name": "zebra" },
    { "char": "🦌", "name": "deer" },
    { "char": "🦬", "name": "bison" },
    { "char": "🐮", "name": "cow face" },
    { "char": "🐂", "name": "ox" },
    { "char": "🐃", "name": "water buffalo" },
    { "char": "🐄", "name": "cow" },
    { "char": "🐎", "name": "horse" },
    { "char": "🦄", "name": "unicorn" },
    { "char": "🐖", "name": "pig" },
    { "char": "🐏", "name": "ram" },
    { "char": "🐑", "name": "ewe" },
    { "char": "🐐", "name": "goat" },
    { "char": "🐪", "name": "camel" },
    { "char": "🦒", "name": "giraffe" },
    { "char": "🐘", "name": "elephant" },
    { "char": "🦏", "name": "rhinoceros" },
    { "char": "🦛", "name": "hippopotamus" },
    { "char": "🦘", "name": "kangaroo" },
    { "char": "🦥", "name": "sloth" },
    { "char": "🦦", "name": "otter" },
    { "char": "🦨", "name": "skunk" },
    { "char": "🦡", "name": "badger" },
    { "char": "🐾", "name": "paw prints" },
    { "char": "🐔", "name": "chicken" },
    { "char": "🐓", "name": "rooster" },
    { "char": "🐣", "name": "hatching chick" },
    { "char": "🐤", "name": "baby chick" },
    { "char": "🐥", "name": "front-facing baby chick" },
    { "char": "🐦", "name": "bird" },
    { "char": "🐧", "name": "penguin" },
    { "char": "🕊", "name": "dove" },
    { "char": "🦅", "name": "eagle" },
    { "char": "🦆", "name": "duck" },
    { "char": "🦢", "name": "swan" },
    { "char": "🦉", "name": "owl" },
    { "char": "🦤", "name": "dodo" },
    { "char": "🦩", "name": "flamingo" },
    { "char": "🦚", "name": "peacock" },
    { "char": "🦜", "name": "parrot" },
    { "char": "🐢", "name": "turtle" },
    { "char": "🐍", "name": "snake" },
    { "char": "🦎", "name": "lizard" },
    { "char": "🦖", "name": "t-rex" },
    { "char": "🐊", "name": "crocodile" },
    { "char": "🐳", "name": "spouting whale" },
    { "char": "🐋", "name": "whale" },
    { "char": "🐬", "name": "dolphin" },
    { "char": "🦭", "name": "seal" },
    { "char": "🐟", "name": "fish" },
    { "char": "🐠", "name": "tropical fish" },
    { "char": "🐡", "name": "blowfish" },
    { "char": "🦈", "name": "shark" },
    { "char": "🐙", "name": "octopus" },
    { "char": "🐚", "name": "conch shell" },
    { "char": "🪼", "name": "jellyfish" },
    { "char": "🐌", "name": "snail" },
    { "char": "🦋", "name": "butterfly" },
    { "char": "🐛", "name": "bug" },
    { "char": "🐜", "name": "ant" },
    { "char": "🐝", "name": "honeybee" },
    { "char": "🪲", "name": "beetle" },
    { "char": "🐞", "name": "lady beetle" },
    { "char": "🦗", "name": "cricket" },
    { "char": "🪳", "name": "cockroach" },
    { "char": "🕷", "name": "spider" },
    { "char": "🕸", "name": "spider web" },
    { "char": "🦂", "name": "scorpion" },
    { "char": "🦟", "name": "mosquito" },
    { "char": "🪰", "name": "fly" },
    { "char": "🪱", "name": "worm" }
  ],

  "Food": [
    { "char": "🍇", "name": "grapes" },
    { "char": "🍈", "name": "melon" },
    { "char": "🍉", "name": "watermelon" },
    { "char": "🍊", "name": "tangerine" },
    { "char": "🍋", "name": "lemon" },
    { "char": "🍌", "name": "banana" },
    { "char": "🍍", "name": "pineapple" },
    { "char": "🥭", "name": "mango" },
    { "char": "🍎", "name": "red apple" },
    { "char": "🍏", "name": "green apple" },
    { "char": "🍐", "name": "pear" },
    { "char": "🍑", "name": "peach" },
    { "char": "🍒", "name": "cherries" },
    { "char": "🍓", "name": "strawberry" },
    { "char": "🫐", "name": "blueberries" },
    { "char": "🥝", "name": "kiwi fruit" },
    { "char": "🍅", "name": "tomato" },
    { "char": "🫒", "name": "olive" },
    { "char": "🥥", "name": "coconut" },
    { "char": "🥑", "name": "avocado" },
    { "char": "🍆", "name": "eggplant" },
    { "char": "🥔", "name": "potato" },
    { "char": "🥕", "name": "carrot" },
    { "char": "🌽", "name": "ear of corn" },
    { "char": "🌶", "name": "hot pepper" },
    { "char": "🫑", "name": "bell pepper" },
    { "char": "🥒", "name": "cucumber" },
    { "char": "🥬", "name": "leafy green" },
    { "char": "🥦", "name": "broccoli" },
    { "char": "🧄", "name": "garlic" },
    { "char": "🧅", "name": "onion" },
    { "char": "🍄", "name": "mushroom" },
    { "char": "🥜", "name": "peanuts" },
    { "char": "🫘", "name": "beans" },
    { "char": "🌰", "name": "chestnut" },
    { "char": "🍞", "name": "bread" },
    { "char": "🥐", "name": "croissant" },
    { "char": "🥖", "name": "baguette bread" },
    { "char": "🫓", "name": "flatbread" },
    { "char": "🥨", "name": "pretzel" },
    { "char": "🥯", "name": "bagel" },
    { "char": "🥞", "name": "pancakes" },
    { "char": "🧇", "name": "waffle" },
    { "char": "🧀", "name": "cheese wedge" },
    { "char": "🍖", "name": "meat on bone" },
    { "char": "🍗", "name": "poultry leg" },
    { "char": "🥩", "name": "cut of meat" },
    { "char": "🥓", "name": "规 bacon" },
    { "char": "🍔", "name": "hamburger" },
    { "char": "🍟", "name": "french fries" },
    { "char": "🍕", "name": "pizza" },
    { "char": "🌭", "name": "hot dog" },
    { "char": "🥪", "name": "sandwich" },
    { "char": "🌮", "name": "taco" },
    { "char": "🌯", "name": "burrito" },
    { "char": "🫔", "name": "tamale" },
    { "char": "🥗", "name": "green salad" },
    { "char": "🍿", "name": "popcorn" },
    { "char": "🧈", "name": "butter" },
    { "char": "🍳", "name": "cooking" },
    { "char": "🍲", "name": "pot of food" },
    { "char": "🥣", "name": "bowl with spoon" },
    { "char": "🥘", "name": "shallow pan of food" },
    { "char": "🍱", "name": "bento box" },
    { "char": "🍘", "name": "rice cracker" },
    { "char": "🍙", "name": "rice ball" },
    { "char": "🍚", "name": "cooked rice" },
    { "char": "🍛", "name": "curry rice" },
    { "char": "🍜", "name": "steaming bowl" },
    { "char": "🍝", "name": "spaghetti" },
    { "char": "🍠", "name": "roasted sweet potato" },
    { "char": "🍢", "name": "oden" },
    { "char": "🍣", "name": "sushi" },
    { "char": "🍤", "name": "fried shrimp" },
    { "char": "🍥", "name": "fish cake with swirl" },
    { "char": "🥮", "name": "moon cake" },
    { "char": "🍡", "name": "dango" },
    { "char": "🥟", "name": "dumpling" },
    { "char": "🥠", "name": "fortune cookie" },
    { "char": "🥡", "name": "takeout box" },
    { "char": "🍦", "name": "soft serve" },
    { "char": "🍧", "name": "shaved ice" },
    { "char": "🍨", "name": "ice cream" },
    { "char": "🍩", "name": "donut" },
    { "char": "🍪", "name": "cookie" },
    { "char": "🎂", "name": "birthday cake" },
    { "char": "🍰", "name": "shortcake" },
    { "char": "🧁", "name": "cupcake" },
    { "char": "🥧", "name": "pie" },
    { "char": "🍫", "name": "chocolate bar" },
    { "char": "🍬", "name": "candy" },
    { "char": "🍭", "name": "lollipop" },
    { "char": "🍮", "name": "custard" },
    { "char": "🍯", "name": "honey pot" },
    { "char": "🍼", "name": "baby bottle" },
    { "char": "🥛", "name": "glass of milk" },
    { "char": "☕️", "name": "hot beverage" },
    { "char": "🫖", "name": "teapot" },
    { "char": "🍵", "name": "teacup without handle" },
    { "char": "🍶", "name": "sake" },
    { "char": "🍾", "name": "bottle with popping cork" },
    { "char": "🍷", "name": "wine glass" },
    { "char": "🍸", "name": "cocktail glass" },
    { "char": "🍹", "name": "tropical drink" },
    { "char": "🍺", "name": "beer mug" },
    { "char": "🍻", "name": "clinking beer mugs" },
    { "char": "🥂", "name": "clinking glasses" },
    { "char": "🥃", "name": "tumbler glass" },
    { "char": "🥤", "name": "cup with straw" },
    { "char": "🧋", "name": "bubble tea" },
    { "char": "🧃", "name": "beverage box" },
    { "char": "🧉", "name": "mate" },
    { "char": "🧊", "name": "ice" }
  ],

  "Travel": [
    { "char": "🚗", "name": "automobile" },
    { "char": "🚕", "name": "taxi" },
    { "char": "🚙", "name": "sport utility vehicle" },
    { "char": "🚌", "name": "bus" },
    { "char": "🚎", "name": "trolleybus" },
    { "char": "🏎", "name": "racing car" },
    { "char": "🚓", "name": "police car" },
    { "char": "🚑", "name": "ambulance" },
    { "char": "🚒", "name": "fire engine" },
    { "char": "🚐", "name": "minibus" },
    { "char": "🚚", "name": "delivery truck" },
    { "char": "🚛", "name": "articulated lorry" },
    { "char": "🚜", "name": "tractor" },
    { "char": "🦯", "name": "white cane" },
    { "char": "🚲", "name": "bicycle" },
    { "char": "🛴", "name": "kick scooter" },
    { "char": "🏍", "name": "motorcycle" },
    { "char": "🛵", "name": "motor scooter" },
    { "char": "🛺", "name": "auto rickshaw" },
    { "char": "🚂", "name": "locomotive" },
    { "char": "🚃", "name": "railway car" },
    { "char": "🚄", "name": "high-speed train" },
    { "char": "🚅", "name": "bullet train" },
    { "char": "🚆", "name": "train" },
    { "char": "🚇", "name": "metro" },
    { "char": "🚈", "name": "light rail" },
    { "char": "🚉", "name": "station" },
    { "char": "🚊", "name": "tram" },
    { "char": "🚝", "name": "monorail" },
    { "char": "🚞", "name": "mountain railway" },
    { "char": "🚋", "name": "tram car" },
    { "char": "🚢", "name": "ship" },
    { "char": "🛳", "name": "passenger ship" },
    { "char": "🚤", "name": "speedboat" },
    { "char": "⛴️", "name": "ferry" },
    { "char": "⛵", "name": "sailboat" },
    { "char": "🛶", "name": "canoe" },
    { "char": "✈️", "name": "airplane" },
    { "char": "🛫", "name": "airplane departure" },
    { "char": "🛬", "name": "airplane arrival" },
    { "char": "🛩", "name": "small airplane" },
    { "char": "🚁", "name": "helicopter" },
    { "char": "🚠", "name": "mountain cableway" },
    { "char": "🚟", "name": "suspension railway" },
    { "char": "🛰", "name": "satellite" },
    { "char": "🚀", "name": "rocket" },
    { "char": "🛸", "name": "flying saucer" },
    { "char": "🗺", "name": "world map" },
    { "char": "🧭", "name": "compass" },
    { "char": "🏔", "name": "snow-capped mountain" },
    { "char": "⛰️", "name": "mountain" },
    { "char": "🌋", "name": "volcano" },
    { "char": "🗻", "name": "mount fuji" },
    { "char": "🏕", "name": "camping" },
    { "char": "🏖", "name": "beach with umbrella" },
    { "char": "🏜", "name": "desert" },
    { "char": "🏝", "name": "desert island" },
    { "char": "🏞", "name": "national park" },
    { "char": "🏟", "name": "stadium" },
    { "char": "🏛", "name": "classical building" },
    { "char": "🏗", "name": "building construction" },
    { "char": "🏘", "name": "houses" },
    { "char": "🏚", "name": "derelict house" },
    { "char": "🏠", "name": "house" },
    { "char": "🏢", "name": "office building" },
    { "char": "🏣", "name": "japanese post office" },
    { "char": "🏥", "name": "hospital" },
    { "char": "🏦", "name": "bank" },
    { "char": "🏨", "name": "hotel" },
    { "char": "🏩", "name": "love hotel" },
    { "char": "🏪", "name": "convenience store" },
    { "char": "🏫", "name": "school" },
    { "char": "🏬", "name": "department store" },
    { "char": "🏭", "name": "factory" },
    { "char": "🏰", "name": "castle" },
    { "char": "🏯", "name": "japanese castle" },
    { "char": "👰", "name": "wedding" },
    { "char": "🗼", "name": "tokyo tower" },
    { "char": "🗽", "name": "statue of liberty" },
    { "char": "⛪", "name": "church" },
    { "char": "🕌", "name": "mosque" },
    { "char": "🛕", "name": "hindu temple" },
    { "char": "🕍", "name": "synagogue" },
    { "char": "⛩", "name": "shinto shrine" },
    { "char": "🕋", "name": "kaaba" },
    { "char": "⛲", "name": "fountain" },
    { "char": "⛺", "name": "tent" },
    { "char": "🌁", "name": "foggy" },
    { "char": "🌃", "name": "night with stars" },
    { "char": "🏙", "name": "cityscape" },
    { "char": "🌄", "name": "sunrise over mountains" },
    { "char": "🌅", "name": "sunrise" },
    { "char": "🌆", "name": "cityscape at dusk" },
    { "char": "🌇", "name": "sunset" },
    { "char": "🌉", "name": "bridge at night" },
    { "char": "🌌", "name": "milky way" },
    { "char": "🎠", "name": "carousel horse" },
    { "char": "🎡", "name": "ferris wheel" },
    { "char": "🎢", "name": "roller coaster" }
  ],

  "Activities": [
    { "char": "⚽", "name": "soccer ball" },
    { "char": "🏀", "name": "basketball" },
    { "char": "🏈", "name": "american football" },
    { "char": "⚾", "name": "baseball" },
    { "char": "🥎", "name": "softball" },
    { "char": "🎾", "name": "tennis" },
    { "char": "🏐", "name": "volleyball" },
    { "char": "🏉", "name": "rugby football" },
    { "char": "🥏", "name": "flying disc" },
    { "char": "🎱", "name": "pool 8 ball" },
    { "char": "🪀", "name": "yo-yo" },
    { "char": "🏓", "name": "ping pong" },
    { "char": "🏸", "name": "badminton" },
    { "char": "🏒", "name": "ice hockey" },
    { "char": "🏑", "name": "field hockey" },
    { "char": "🥍", "name": "lacrosse" },
    { "char": "🏏", "name": "cricket game" },
    { "char": "🪃", "name": "boomerang" },
    { "char": "🥅", "name": "goal net" },
    { "char": "⛳", "name": "flag in hole" },
    { "char": "🪁", "name": "kite" },
    { "char": "🏹", "name": "bow and arrow" },
    { "char": "🎣", "name": "fishing pole" },
    { "char": "🤿", "name": "diving mask" },
    { "char": "🥊", "name": "boxing glove" },
    { "char": "🥋", "name": "martial arts uniform" },
    { "char": "⛸️", "name": "ice skate" },
    { "char": "🎿", "name": "skis" },
    { "char": "🛷", "name": "sled" },
    { "char": "🥌", "name": "curling stone" },
    { "char": "🎯", "name": "bullseye" },
    { "char": "🪩", "name": "mirror ball" },
    { "char": "🎮", "name": "video game" },
    { "char": "🕹", "name": "joystick" },
    { "char": "🎰", "name": "slot machine" },
    { "char": "🎲", "name": "game die" },
    { "char": "🧩", "name": "puzzle piece" },
    { "char": "♟️", "name": "chess pawn" },
    { "char": "🎭", "name": "performing arts" },
    { "char": "🎨", "name": "artist palette" },
    { "char": "🧵", "name": "thread" },
    { "char": "🪡", "name": "sewing needle" },
    { "char": "🧶", "name": "yarn" },
    { "char": "🎹", "name": "musical keyboard" },
    { "char": "🎸", "name": "guitar" },
    { "char": "🎻", "name": "violin" },
    { "char": "🎺", "name": "trumpet" },
    { "char": "🎷", "name": "saxophone" },
    { "char": "🥁", "name": "drum" },
    { "char": "🎬", "name": "clapper board" },
    { "char": "🎤", "name": "microphone" },
    { "char": "🎧", "name": "headphones" },
    { "char": "🏆", "name": "trophy" },
    { "char": "🥇", "name": "1st place medal" },
    { "char": "🥈", "name": "2nd place medal" },
    { "char": "🥉", "name": "3rd place medal" },
    { "char": "🏅", "name": "sports medal" },
    { "char": "🎖", "name": "military medal" },
    { "char": "🎗", "name": "reminder ribbon" },
    { "char": "🎫", "name": "ticket" },
    { "char": "🎟", "name": "admission tickets" },
    { "char": "🎊", "name": "confetti ball" },
    { "char": "🎉", "name": "party popper" },
    { "char": "🎏", "name": "carp streamer" },
    { "char": "🎀", "name": "ribbon" },
    { "char": "🎁", "name": "wrapped gift" },
    { "char": "🧧", "name": "red envelope" },
    { "char": "🎈", "name": "balloon" }
  ],

  "Objects": [
    { "char": "⌚", "name": "watch" },
    { "char": "📱", "name": "mobile phone" },
    { "char": "📲", "name": "mobile phone with arrow" },
    { "char": "💻", "name": "laptop" },
    { "char": "⌨️", "name": "keyboard" },
    { "char": "🖥", "name": "desktop computer" },
    { "char": "🖨", "name": "printer" },
    { "char": "🖱", "name": "computer mouse" },
    { "char": "🕹", "name": "joystick" },
    { "char": "🗜", "name": "clamp" },
    { "char": "💽", "name": "computer disk" },
    { "char": "💾", "name": "floppy disk" },
    { "char": "💿", "name": "optical disk" },
    { "char": "📸", "name": "camera with flash" },
    { "char": "📷", "name": "camera" },
    { "char": "📹", "name": "video camera" },
    { "char": "📼", "name": "videocassette" },
    { "char": "🔍", "name": "magnifying glass tilted left" },
    { "char": "🔎", "name": "magnifying glass tilted right" },
    { "char": "🕯", "name": "candle" },
    { "char": "💡", "name": "light bulb" },
    { "char": "🔦", "name": "flashlight" },
    { "char": "🏮", "name": "red paper lantern" },
    { "char": "🪪", "name": "identification card" },
    { "char": "📔", "name": "notebook with decorative cover" },
    { "char": "📕", "name": "closed book" },
    { "char": "📖", "name": "open book" },
    { "char": "📗", "name": "green book" },
    { "char": "📘", "name": "blue book" },
    { "char": "📙", "name": "orange book" },
    { "char": "📚", "name": "books" },
    { "char": "📓", "name": "notebook" },
    { "char": "📒", "name": "ledger" },
    { "char": "📃", "name": "page with curl" },
    { "char": "📜", "name": "scroll" },
    { "char": "📄", "name": "page facing up" },
    { "char": "📰", "name": "newspaper" },
    { "char": "🗞", "name": "rolled-up newspaper" },
    { "char": "📑", "name": "bookmark tabs" },
    { "char": "🔖", "name": "bookmark" },
    { "char": "🏷", "name": "label" },
    { "char": "💰", "name": "money bag" },
    { "char": "🪙", "name": "coin" },
    { "char": "💴", "name": "yen banknote" },
    { "char": "💵", "name": "dollar banknote" },
    { "char": "💶", "name": "euro banknote" },
    { "char": "💷", "name": "pound banknote" },
    { "char": "💸", "name": "money with wings" },
    { "char": "💳", "name": "credit card" },
    { "char": "🧾", "name": "receipt" },
    { "char": "✉", "name": "envelope" },
    { "char": "📧", "name": "e-mail" },
    { "char": "📨", "name": "incoming envelope" },
    { "char": "📩", "name": "envelope with arrow" },
    { "char": "📤", "name": "outbox tray" },
    { "char": "📥", "name": "inbox tray" },
    { "char": "📦", "name": "package" },
    { "char": "📫", "name": "closed mailbox with raised flag" },
    { "char": "📪", "name": "closed mailbox with lowered flag" },
    { "char": "📬", "name": "open mailbox with raised flag" },
    { "char": "📭", "name": "open mailbox with lowered flag" },
    { "char": "📮", "name": "postbox" },
    { "char": "✏️", "name": "pencil" },
    { "char": "✒️", "name": "black nib" },
    { "char": "🖋", "name": "fountain pen" },
    { "char": "🖊", "name": "pen" },
    { "char": "🖌", "name": "paintbrush" },
    { "char": "🖍", "name": "crayon" },
    { "char": "📝", "name": "memo" },
    { "char": "💼", "name": "briefcase" },
    { "char": "📁", "name": "file folder" },
    { "char": "📂", "name": "open file folder" },
    { "char": "📅", "name": "calendar" },
    { "char": "📆", "name": "tear-off calendar" },
    { "char": "🗑", "name": "wastebasket" },
    { "char": "📋", "name": "clipboard" },
    { "char": "📌", "name": "pushpin" },
    { "char": "📍", "name": "round pushpin" },
    { "char": "📎", "name": "paperclip" },
    { "char": "📏", "name": "straight ruler" },
    { "char": "📐", "name": "triangular ruler" },
    { "char": "✂️", "name": "scissors" },
    { "char": "🔒", "name": "locked" },
    { "char": "🔓", "name": "unlocked" },
    { "char": "🔏", "name": "locked with pen" },
    { "char": "🔐", "name": "locked with key" },
    { "char": "🔑", "name": "key" },
    { "char": "🗝", "name": "old key" },
    { "char": "🔨", "name": "hammer" },
    { "char": "🪓", "name": "axe" },
    { "char": "⛏️", "name": "pick" },
    { "char": "⚒️", "name": "hammer and pick" },
    { "char": "🛠", "name": "hammer and wrench" },
    { "char": "🗡", "name": "dagger" },
    { "char": "⚔️", "name": "crossed swords" },
    { "char": "🔫", "name": "water pistol" },
    { "char": "🛡", "name": "shield" },
    { "char": "🔧", "name": "wrench" },
    { "char": "🪛", "name": "screwdriver" },
    { "char": "🔩", "name": "nut and bolt" },
    { "char": "⚙️", "name": "gear" },
    { "char": "📻", "name": "radio" },
    { "char": "🎙", "name": "studio microphone" },
    { "char": "🎚", "name": "level slider" },
    { "char": "🎛", "name": "control knobs" },
    { "char": "🎤", "name": "microphone" },
    { "char": "🎧", "name": "headphones" },
    { "char": "🎷", "name": "saxophone" },
    { "char": "🎸", "name": "guitar" },
    { "char": "🎹", "name": "musical keyboard" },
    { "char": "🎺", "name": "trumpet" },
    { "char": "🎻", "name": "violin" },
    { "char": "🪕", "name": "banjo" },
    { "char": "🥁", "name": "drum" },
    { "char": "🪗", "name": "accordion" },
    { "char": "🪘", "name": "long drum" },
    { "char": "🎮", "name": "video game" },
    { "char": "🪞", "name": "mirror" },
    { "char": "🪜", "name": "ladder" },
    { "char": "🪟", "name": "window" },
    { "char": "🪠", "name": "plunger" },
    { "char": "🪤", "name": "mouse trap" },
    { "char": "🪣", "name": "bucket" },
    { "char": "🪥", "name": "toothbrush" },
    { "char": "🫧", "name": "bubbles" }
  ],

  "Symbols": [
    { "char": "❤️", "name": "red heart" },
    { "char": "🩷", "name": "pink heart" },
    { "char": "🧡", "name": "orange heart" },
    { "char": "💛", "name": "yellow heart" },
    { "char": "💚", "name": "green heart" },
    { "char": "💙", "name": "blue heart" },
    { "char": "🩵", "name": "light blue heart" },
    { "char": "💜", "name": "purple heart" },
    { "char": "🖤", "name": "black heart" },
    { "char": "🩶", "name": "grey heart" },
    { "char": "🤍", "name": "white heart" },
    { "char": "🤎", "name": "brown heart" },
    { "char": "💔", "name": "broken heart" },
    { "char": "❣️", "name": "heart exclamation" },
    { "char": "💕", "name": "two hearts" },
    { "char": "💞", "name": "revolving hearts" },
    { "char": "💓", "name": "beating heart" },
    { "char": "💗", "name": "growing heart" },
    { "char": "💖", "name": "sparkling heart" },
    { "char": "💘", "name": "heart with arrow" },
    { "char": "💝", "name": "heart with ribbon" },
    { "char": "💟", "name": "heart decoration" },
    { "char": "💢", "name": "anger symbol" },
    { "char": "💥", "name": "collision" },
    { "char": "💫", "name": "dizzy" },
    { "char": "💦", "name": "sweat droplets" },
    { "char": "💨", "name": "dash" },
    { "char": "💬", "name": "speech balloon" },
    { "char": "💭", "name": "thought balloon" },
    { "char": "💤", "name": "zzz" },
    { "char": "⚠️", "name": "warning" },
    { "char": "🚸", "name": "children crossing" },
    { "char": "⛔", "name": "no entry" },
    { "char": "🚫", "name": "prohibited" },
    { "char": "🚳", "name": "no bicycles" },
    { "char": "🚭", "name": "no smoking" },
    { "char": "🚯", "name": "no littering" },
    { "char": "🚱", "name": "non-potable water" },
    { "char": "🚷", "name": "no pedestrians" },
    { "char": "🔞", "name": "no one under eighteen" },
    { "char": "☢️", "name": "radioactive" },
    { "char": "☣️", "name": "biohazard" },
    { "char": "☮️", "name": "peace symbol" },
    { "char": "✝️", "name": "latin cross" },
    { "char": "☪️", "name": "star and crescent" },
    { "char": "🕉️", "name": "om" },
    { "char": "☸️", "name": "wheel of dharma" },
    { "char": "✡️", "name": "star of david" },
    { "char": "🔯", "name": "dotted six-pointed star" },
    { "char": "🕎", "name": "menorah" },
    { "char": "☯️", "name": "yin yang" },
    { "char": "☦️", "name": "orthodox cross" },
    { "char": "🛐", "name": "place of worship" },
    { "char": "⛎", "name": "ophiuchus" },
    { "char": "♈️", "name": "aries" },
    { "char": "♉️", "name": "taurus" },
    { "char": "♊️", "name": "gemini" },
    { "char": "♋️", "name": "cancer" },
    { "char": "♌️", "name": "leo" },
    { "char": "♍️", "name": "virgo" },
    { "char": "♎️", "name": "libra" },
    { "char": "♏️", "name": "scorpio" },
    { "char": "♐️", "name": "sagittarius" },
    { "char": "♑️", "name": "capricorn" },
    { "char": "♒️", "name": "aquarius" },
    { "char": "♓️", "name": "pisces" },
    { "char": "➕", "name": "plus" },
    { "char": "➖", "name": "minus" },
    { "char": "➗", "name": "divide" },
    { "char": "✖️", "name": "multiply" },
    { "char": "♾️", "name": "infinity" },
    { "char": "💲", "name": "heavy dollar sign" },
    { "char": "💱", "name": "currency exchange" },
    { "char": "™️", "name": "trade mark" },
    { "char": "©️", "name": "copyright" },
    { "char": "®️", "name": "registered" },
    { "char": "▶️", "name": "play button" },
    { "char": "⏸️", "name": "pause button" },
    { "char": "⏹️", "name": "stop button" },
    { "char": "⏺️", "name": "record button" },
    { "char": "⏭️", "name": "next track button" },
    { "char": "⏮️", "name": "last track button" },
    { "char": "⏩", "name": "fast-forward button" },
    { "char": "⏪", "name": "fast reverse button" },
    { "char": "🔼", "name": "upwards button" },
    { "char": "🔽", "name": "downwards button" },
    { "char": "🔀", "name": "shuffle tracks button" },
    { "char": "🔁", "name": "repeat button" },
    { "char": "🔂", "name": "repeat single button" },
    { "char": "⬅️", "name": "left arrow" },
    { "char": "➡️", "name": "right arrow" },
    { "char": "⬆️", "name": "up arrow" },
    { "char": "⬇️", "name": "down arrow" },
    { "char": "↗️", "name": "up-right arrow" },
    { "char": "↘️", "name": "down-right arrow" },
    { "char": "↙️", "name": "down-left arrow" },
    { "char": "↖️", "name": "up-left arrow" },
    { "char": "↩️", "name": "right arrow curving left" },
    { "char": "↪️", "name": "left arrow curving right" },
    { "char": "🔄", "name": "counter-clockwise arrows" },
    { "char": "🔃", "name": "clockwise vertical arrows" },
    { "char": "🔴", "name": "red circle" },
    { "char": "🟠", "name": "orange circle" },
    { "char": "🟡", "name": "yellow circle" },
    { "char": "🟢", "name": "green circle" },
    { "char": "🔵", "name": "blue circle" },
    { "char": "🟣", "name": "purple circle" },
    { "char": "🟤", "name": "brown circle" },
    { "char": "⚫", "name": "black circle" },
    { "char": "⚪", "name": "white circle" },
    { "char": "🟥", "name": "red square" },
    { "char": "🟧", "name": "orange square" },
    { "char": "🟨", "name": "yellow square" },
    { "char": "🟩", "name": "green square" },
    { "char": "🟦", "name": "blue square" },
    { "char": "🟪", "name": "purple square" },
    { "char": "🟫", "name": "brown square" },
    { "char": "⬛", "name": "black large square" },
    { "char": "⬜", "name": "white large square" }
  ],

  "Text Faces": [
    { "char": "( ͡° ͜ʖ ͡°)", "name": "lenny face" },
    { "char": "¯\\_(ツ)_/¯", "name": "shrug" },
    { "char": "ಠ_ಠ", "name": "look of disapproval" },
    { "char": "ヽ༼ຈل͜ຈ༽ﾉ", "name": "raise your dongers" },
    { "char": "(^◡^)", "name": "happy" },
    { "char": "(◕‿◕✿)", "name": "flower girl" },
    { "char": "(≧∇≦)/", "name": "excited" },
    { "char": "٩(◕‿◕)۶", "name": "victory" },
    { "char": "(T_T)", "name": "crying" },
    { "char": "(︶︹︶)", "name": "sad" },
    { "char": "( ༎ຶ ۝ ༎ຶ )", "name": "loudly crying" },
    { "char": "(´・_・｀)", "name": "worried" },
    { "char": "(＃｀д´)ﾉ", "name": "angry" },
    { "char": "(凸ಠ益ಠ)凸", "name": "middle finger" },
    { "char": "ლ(ಠ_ಠ ლ)", "name": "y u no" },
    { "char": "((╬◣﹏◢))", "name": "furious" },
    { "char": "ʕ •ᴥ•ʔ", "name": "bear" },
    { "char": "ฅ(^•ﻌ•^ฅ)", "name": "cat" },
    { "char": "(=ʘᆽʘ=)∫", "name": "sitting cat" },
    { "char": "⎛⎝(•ⱅ•)⎠⎞", "name": "bat" },
    { "char": "(づ｡◕‿‿◕｡)づ", "name": "hug" }
  ]
};

const LEVEL_BADGES = { 5:  "Rookie", 10: "Expert", 25: "Veteran", 50: "Elite", 100: "Champion" };
const PROFILE_ICONS = [
  "zendra_blue", "zendra_gray", "zendra_green", "zendra_orange", "zendra_pink", "zendra_purple", "zendra_red", "zendra_turquoise",
  "city_home", "city_hongkong", "city_toronto", "city_london", "city_shanghai", "city_paris", "city_seoul", "city_washington",
  "ai_cyberpunk", "ai_urban", "ai_rain", "ai_town", "ai_droid", "ai_robot", "ai_fox", "ai_firework",
  "others_zendra1", "others_zendra2", "others_zen", "others_cat", "others_lasers", "others_snow", "others_spark", "others_spiral"
];

const PROFANITY_WORDS = [
  "motherfucker", "fucking", "fucker", "fuck", "shitty", "bullshit", "shit", "bitches", "bitch", "assholes", "asshole", "bastard", "cunt", "douche", "douchebag", "slut", // whore
  "sexy", "sex", "porno", "pornhub", "porn", "nudes", "nude", "nudity", "boobs", "pussy", "dick", "cock", "penis", "vagina", "blowjob", "handjob", "cumming", "orgasm", "masturbate", "masturbation", "rape", "rapist", // tits, tit, anal, cum
  "nigger", "nigga", "faggot", "fag", "retarded", "retard", "chink", "kike", "wetback", "tranny", "cripple", // spic
  "kill yourself", "kys", "kill myself", "kms", "go die", "hang yourself", "shoot yourself"
];

const desktopTutorial = [
  "👋 Welcome to Zentral-Chat! Click this alert to continue. (1/10)",
  "💬 Type your message below and press Enter to send. (2/10)",
  "👍 Good job! Your message is now visible to the public. (3/10)",
  "😊 Hover over a message, click (⋯) to open action menu. Select React and choose an emoji to react. (4/10)",
  "📋 You can also edit, delete, copy, or report messages in action menu. (5/10)",
  "⭐️ Reply to a message by hovering and clicking (➦). (6/10)",
  "🎨 Customize your badge, theme, and icon in settings. (7/10)",
  "🔔 Use @username to mention someone. (8/10)",
  "🔥 Press Ctrl/Cmd + U and E to open Emoji and Command menus respectively. (9/10)",
  "🚀 You’re ready! Enjoy chatting. (10/10)"
];

const mobileTutorial = [
  "👋 Welcome to Zentral-Chat! Click this alert to continue. (1/10)",
  "💬 Type your message below and press send. (2/10)",
  "👍 Good job! Your message is now visible to the public. (3/10)",
  "😊 Press and hold a message, then select React and choose an emoji to react. (4/10)",
  "📋 You can also edit, delete, copy, or report messages in action menu. (5/10)",
  "⭐️ Reply to a message by swiping it sideways. (6/10)",
  "🎨 Click (☰) to access sidebar and customize your chat in settings. (7/10)",
  "🔔 Use @username to mention someone. (8/10)",
  "🔥 Press (+) and (☺︎) below to open Emoji and Command menus respectively. (9/10)",
  "🚀 You’re ready! Enjoy chatting. (10/10)"
];

const commandDefinitions = [
  {
    name: "+levels",
    description: "Show your current level",
    category: "General",
    args: 0,
    execute: async (args, senderId, text) => {
      let targetUser = null;
      const mentions = extractMentions(text)

      if (mentions) {
        targetUser = allUsers[mentions];
      }

      if (!targetUser && args.length > 0) {
        const search = args.join(" ").toLowerCase();
        targetUser = Object.values(allUsers).find(u =>
          u.displayName?.toLowerCase() === search ||
          u.username?.toLowerCase() === search
        );
      }

      if (!targetUser) {
        targetUser = allUsers[senderId];
      }

      if (!targetUser?.experience) {
        return `📊 **Level**\nNo level data found.`;
      }

      const level = targetUser.experience.level;
      const xp = targetUser.experience.zxp;
      const xpForNext = zxpLevel(level)

      return `📊 **@${targetUser.displayName} Level**
      Level: \`${level}\`
      ZXP: \`${xp}/${xpForNext}\``;
    }
  },
  {
    name: "+leaderboard",
    description: "Top 10 highest level users",
    category: "General",
    args: 0,
    execute: async () => {
      const usersArray = Object.values(allUsers)
        .filter(u => u.experience)
        .sort((a, b) => b.experience.level - a.experience.level)
        .slice(0, 10);

      let leaderboardText = "";

      usersArray.forEach((u, i) => {
        leaderboardText += `${i + 1}. ${u.displayName} - Lvl ${u.experience.level}\n`;
      });

      return `🏆 **Level Leaderboard**
      \`\`\`${leaderboardText}\`\`\``.trim();
    }
  },
  {
    name: "+gif",
    description: "Send a GIF in the chat",
    category: "General",
    execute: async (args) => {
      const query = args.join(" ") || "trending";
      const res = await fetch(`https://zentral-web-backend.onrender.com/gif?q=${encodeURIComponent(query)}`);

      if (!res.ok) return "No GIFs found...";
      const data = await res.json();

      return {
        type: "gif_picker",
        gifs: data.gifs,
        query
      };
    }
  },
  {
    name: "+brawl_tag",
    description: "Save your Brawl Stars player tag",
    category: "Brawl",
    execute: async (args, senderId) => {
      if (!args[0]) return `❌ Please provide a player tag.\n\`+brawl_player <player-tag>\``;

      try {
        const tag = args[0].replace("#", "").trim();
        const res = await fetch(`https://zentral-web-backend.onrender.com/player/%23${tag}`);

        if (!res.ok) return "❌ Player not found.";
        usersRef.child(senderId).update({ brawlTag: tag })

        return `✅ Successfully saved your tag!`;
      } catch (err) {
        console.log(err);
        return "❌ Failed to fetch player.";
      }
    }
  },
  {
    name: "+brawl_player",
    description: "Get Brawl Stars player info",
    category: "Brawl",
    execute: async (args, senderId) => {
      let tag = null;

      if (!args[0]) {
        const snapshot = await usersRef.child(senderId).child("brawlTag").get();
        if (!snapshot.exists()) return `❌ Please provide a player tag.\n\`+brawl_player <player-tag>\``;
        tag = snapshot.val();
      } else {
        tag = args[0];
      }

      tag = tag.replace("#", "").trim();

      try {
        const resPlayer = await fetch(`https://zentral-web-backend.onrender.com/player/${tag}`);
        const resBrawler = await fetch(`https://zentral-web-backend.onrender.com/brawlers`);
        
        if (!resPlayer.ok) return "❌ Player not found.";
        if (!resBrawler.ok) return "❌ Failed to fetch player.";
        
        const data = await resPlayer.json();
        const brawler = await resBrawler.json();

        return {
          type: "brawl_profile",
          name: data.name,
          tag: tag,
          iconId: data.icon?.id,
          trophies: data.trophies,
          club: data.club,
          soloVictories: data.soloVictories,
          duoVictories: data.duoVictories,
          victories: data["3vs3Victories"],
          brawlers: data.brawlers.length || 0,
          total: brawler.items?.length || 0,
          totalPrestigeLevel: data.totalPrestigeLevel || 0
        };
      } catch (err) {
        console.log(err);
        return "❌ Failed to fetch player.";
      }
    }
  },
  {
    name: "+brawl_log",
    description: "Get the most recent game log",
    category: "Brawl",
    execute: async (args, senderId) => {
      let tag = null;

      if (!args[0]) {
        const snapshot = await usersRef.child(senderId).child("brawlTag").get();
        if (!snapshot.exists()) return `❌ Please provide a player tag.\n\`+brawl_log <player-tag>\``;
        tag = snapshot.val();
      } else {
        tag = args[0];
      }

      tag = tag.replace("#", "").trim();

      try {
        const res = await fetch(`https://zentral-web-backend.onrender.com/battlelog/${tag}`);

        if (!res.ok) return "❌ Failed to fetch log.";
        const data = await res.json();

        const validBattles = data.items
         .filter(b => b.battle && b.battle.mode && gameModes[b.battle.mode])
         .slice(0, 1);

        return {
          type: "brawl_log",
          tag,
          battles: validBattles
        };
      } catch (err) {
        console.log(err);
        return "❌ Failed to fetch log.";
      }
    }
  },
  {
    name: "+brawl_club",
    description: "Get Brawl Stars club info",
    category: "Brawl",
    execute: async (args, senderId) => {
      let tag = null;

      if (!args[0]) {
        const snapshot = await usersRef.child(senderId).child("brawlTag").get();
        if (!snapshot.exists()) return `❌ Please provide a club tag.\n\`+brawl_club <club-tag>\``;

        const playerTag = snapshot.val();
        const resPlayer = await fetch(`https://zentral-web-backend.onrender.com/player/${playerTag}`);
        if (!resPlayer.ok) return "❌ Player not found.";
        const playerData = await resPlayer.json();

        tag = playerData.club?.tag;
      } else {
        tag = args[0];
      }

      tag = tag.replace("#", "").trim();

      try {
        const res = await fetch(`https://zentral-web-backend.onrender.com/club/${tag}`);
        if (!res.ok) return "❌ Club not found.";

        const data = await res.json();
        return {
          type: "brawl_club",
          name: data.name,
          tag,
          iconId: data.badgeId,
          members: data.members.length,
          trophies: data.trophies,
          description: data.description
        };
      } catch (err) {
        console.log(err);
        return "❌ Failed to fetch club.";
      }
    }
  },
  {
    name: "+brawl_events",
    description: "Get current events in Brawl Stars",
    category: "Brawl",
    execute: async () => {
      try {
        const res = await fetch("https://zentral-web-backend.onrender.com/events");
        if (!res.ok) return "❌ Failed to fetch events.";

        const data = await res.json();
        const validModes = data.filter(e => e.event && e.event.mode && gameModes[e.event.mode]);

        return {
          type: "brawl_events",
          modes: validModes
        };
      } catch (err) {
        console.log(err);
        return "❌ Failed to fetch events.";
      }
    }
  },
  {
    name: "+brawl_leaderboard",
    description: "View the top global leaderboard",
    category: "Brawl",
    execute: async () => {
      try {
        const res = await fetch("https://zentral-web-backend.onrender.com/rankings/players");
        if (!res.ok) return "❌ Failed to fetch leaderboard.";

        const data = await res.json();

        return {
          type: "brawl_players_lb",
          players: data.items.slice(0, 10)
        };
      } catch (err) {
        console.log(err);
        return "❌ Failed to fetch leaderboard.";
      }
    }
  },
  {
    name: "+brawl_brawlers",
    description: "View the leaderboard for a brawler",
    category: "Brawl",
    execute: async (args) => {
      if (!args.length) return `❌ Please provide a brawler name.\n\`+brawl_brawlers <brawler-name>\``;
      let userInput = args.join(" ").toUpperCase().trim();

      try {
        const resBrawler = await fetch("https://zentral-web-backend.onrender.com/brawlers");
        if (!resBrawler.ok) return "❌ Failed to fetch leaderboard.";
        const brawlerData = await resBrawler.json();

        if (userInput === "RT") userInput = "R-T";
        else if (userInput === "8BIT") userInput = "8-BIT";
        else if (userInput === "ELPRIMO") userInput = "EL PRIMO";
        else if (userInput === "MRP" || userInput === "MR.P") userInput = "MR. P";
        else if (userInput === "L&L" || userInput === "LARRY & LAWRIE") userInput = "LARRY & LAWRIE";
        else if (userInput === "JAEYONG") userInput = "JAE-YONG";

        const found = brawlerData.items.find(b => b.name.toUpperCase() === userInput);
        if (!found) return `❌ Brawler "${userInput}" not found.`;

        const brawlerId = found.id;
        const resLB = await fetch(`https://zentral-web-backend.onrender.com/rankings/brawlers/${brawlerId}`);
        if (!resLB.ok) return "❌ Failed to fetch leaderboard.";

        const leaderboardData = await resLB.json();

        return {
          type: "brawl_brawler_lb",
          brawlerName: found.name,
          players: leaderboardData.items.slice(0, 10)
        };
      } catch (err) {
        console.log(err);
        return "❌ Failed to fetch leaderboard.";
      }
    }
  },
  {
    name: "+nasa_apod",
    description: "Astronomy Picture of the Day",
    category: "NASA",
    execute: async () => {
      try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=Lwo9MHoILiskTjcRN82DhbFWxwOuQI8MSltMvSNP");
        const data = await response.json();

        return {
          type: "nasa_apod",
          title: data.title,
          explanation: data.explanation,
          image: data.media_type === "image" ? data.url : null,
          video: data.media_type === "video" ? data.url : null,
          date: data.date
        };
      } catch (err) {
        return "🚀 Failed to contact NASA.";
      }
    }
  },
  {
    name: "+nasa_moon",
    description: "Random Moon Image",
    category: "NASA",
    execute: async () => {
      try {
        const res = await fetch("https://images-api.nasa.gov/search?q=moon&media_type=image");
        const data = await res.json();

        const items = data.collection.items;
        const random = items[Math.floor(Math.random() * items.length)];

        const image = random.links?.[0]?.href;
        const title = random.data?.[0]?.title;

        return {
          type: "nasa_moon",
          image,
          title
        };
      } catch {
        return "🌕 Failed to fetch Moon image.";
      }
    }
  },
  {
    name: "+nasa_iss",
    description: "ISS Current Location",
    category: "NASA",
    execute: async () => {
      try {
        const res = await fetch("http://api.open-notify.org/iss-now.json");
        const data = await res.json();

        return {
          type: "nasa_iss",
          lat: data.iss_position.latitude,
          lon: data.iss_position.longitude,
          timestamp: data.timestamp
        };
      } catch {
        return "🌍 Failed to fetch ISS location.";
      }
    }
  }
];

const gameModes = {
  soloShowdown: 'Solo Showdown',
  duoShowdown: 'Duo Showdown',
  trioShowdown: 'Trio Showdown',
  heist: 'Heist',
  bounty: 'Bounty',
  siege: 'Siege',
  gemGrab: 'Gem Grab',
  brawlBall: 'Brawl Ball',
  bigGame: 'Big Game',
  bossFight: 'Boss Fight',
  roboRumble: 'Robo Rumble',
  hotZone: 'Hot Zone',
  knockout: 'Knockout',
  volleyBrawl: 'Volley Brawl',
  basketBrawl: 'Basket Brawl',
  dodgeBrawl: 'Dodge Brawl',
  trophyThieves: 'Trophy Thieves',
  duels: 'Duels',
  wipeout: 'Wipeout',
  payload: 'Payload',
  tokenRun: 'Token Run',
  brawlArena: 'Brawl Arena',
  brawlHockey: 'Brawl Hockey',
  brawlBall5V5: 'Brawl Ball 5v5',
  gemGrab5V5: 'Gem Grab 5v5',
  knockout5V5: 'Knockout 5v5',
  wipeout5V5: 'Wipeout 5v5',
  brawlHockey5V5: 'Brawl Hockey 5v5'
};

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

/* =============== DOM HOOKS =============== */
const BOT_UID = "37R1tEFYZzbuX1k8f4xDkfpHDaD3";
const domCache = {};
const messages = {};
const pendingReplies = {};
const levelEventCache = {};
const reactionListeners = new Set();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const usersRef = firebase.database().ref("users");
const messagesRef = firebase.database().ref("messages");
const levelLogsRef = firebase.database().ref("levelLogs");
const presenceRef = firebase.database().ref("presence");
const moderationLogsRef = firebase.database().ref("moderationLogs");

let authReady = false;
let isBanned = false;
let banReady = false;

let user = null;
let accountId = null;
let allUsers = {};
let pendingJoin = {};
let pendingSend = false;
let displayName = "";

const promptEl = document.getElementById("prompt") || null;
const promptName = document.getElementById("prompt-name") || null;
const joinBtn = document.getElementById("prompt-join") || null;
const promptErrorEl = document.getElementById("prompt-error");

const googleBtn = document.getElementById("prompt-google");
const googlePrompt = document.getElementById("google-username-prompt");
const googleInput = document.getElementById("google-username-input");
const googleError = document.getElementById("google-username-error");
const googleConfirm = document.getElementById("google-username-confirm");

let messageInput = document.getElementById("message") || document.getElementById("messageInput") || document.querySelector(".input-bar input") || null;
const messagesEl = document.getElementById("messages");
const messagesScroll = document.querySelector(".messages-scroll");
const messagesViewport = messagesEl.parentElement;
const chatArea = document.getElementById('chat-area');
const chatWrapper = document.getElementById('chat-wrapper');
const chatInput = document.getElementById('messageInput');

const newMsgIndicator = document.getElementById("newMsgIndicator") || null;
const jumpBtn = document.getElementById("jumpToLatestBtn");
const charLimitEl = document.getElementById("charLimitIndicator");
const mentionDropdown = document.getElementById("mentionDropdown");
const inputBar = document.getElementById("input-bar");
const sendBtn = document.getElementById("sendBtn") || null;

const sidebar = document.getElementById("sidebar") || document.querySelector(".sidebar");
const toggleBtn = document.getElementById("toggleSidebar") || document.querySelector(".sidebar-toggle");
const presenceEl = document.getElementById("presence") || null;
const onlineCountEl = document.getElementById("onlineCount") || null;
const upgradeGoogleBtn = document.getElementById("upgradeGoogleBtn");

const picker = document.getElementById("reaction-picker");
const tooltip = document.getElementById("reaction-tooltip");
const badgeTooltip = document.getElementById("badge-tooltip");

const settingsModal = document.getElementById("settingsModal");
const settingsBtn = document.getElementById("sidebarSettingsBtn");
const equippedBadgeEl = document.getElementById("equippedBadge");
const iconGrid = document.getElementById("iconGrid");
const closeSettings = document.getElementById("closeSettings");

const themeSelect = document.getElementById("theme-carousel");
const themeTrack = document.getElementById("themeTrack");
const themePrev = document.getElementById("themePrev");
const themeNext = document.getElementById("themeNext");
const themeStatus = document.getElementById("themeStatus");

const googleStatusEl = document.getElementById("googleStatus");
const googleActionBtn = document.getElementById("googleActionBtn");
const googleBtnText = document.getElementById("googleBtnText");

const reportModal = document.getElementById("report-modal");
const reportSubmit = document.getElementById("report-submit");
const reportCancel = document.getElementById("report-cancel");
const customReasonInput = document.getElementById("report-custom-reason");
const reportStatusEl = document.getElementById("report-status");

const emojiBtn = document.getElementById("emojiBtn");
const emojiMenu = document.getElementById("emojiMenu");
const emojiBody = document.getElementById("emojiBody");
const emojiSearch = document.getElementById("emojiSearch");
const footerButtons = document.querySelectorAll(".emoji-footer button");

const commandBtn = document.getElementById("commandBtn");
const commandMenu = document.getElementById("commandMenu");
const commandMenuList = document.getElementById("commandMenuList");

const topAlertBar = document.getElementById("topAlertBar");
const timeoutBar = document.getElementById("timeoutBar");
const timeoutEndEl = document.getElementById("timeoutEnd");

const sheet = document.getElementById("mobile-action-sheet");
const previewName = sheet.querySelector(".preview-name");
const previewText = sheet.querySelector(".preview-text");

const backdrop = document.getElementById("backdrop");
const notificationSound = new Audio("../Assets/notify.mp3");
const DRAFT_KEY = `chat_draft_${accountId}`;
const isDesktop = () => window.innerWidth > 900;
const isMobile = () => window.innerWidth <= 900;

const EDIT_DELETE_LIMIT = 48 * 60 * 60 * 1000; // 48 hours
const MESSAGE_RATE_LIMIT = 1000;
const MESSAGE_CHAR_LIMIT = 300;
const CHAR_WARNING_AT = 50;
const REPORT_LIMIT = 3;
const REPORT_WINDOW = 24 * 60 * 60 * 1000;

const ZXP_PER_MESSAGE = 5;
const HEAT_MAX = 100;
const HEAT_PER_MESSAGE = 25;
const HEAT_DECAY_PER_SECOND = 15;

const PAGE_SIZE = 50;
const LOAD_THRESHOLD = 300;
const ICONS_PER_PAGE = 8;
const THEMES_PER_PAGE = 2;
const originalTitle = document.title;

let unreadCount = 0;
let originalText = "";
let editingId = null;
let replyToId = null;
let connectedRef = null;
let myPresenceRef = null;

let equippedIcon = null;
let pickerTarget = null;
let currentMobileMsg = null;
let sessionListenerRef = null;

let activeAlert = null;
let timeoutTimer = null;
let typingTimeout = null;
let pressTimer = null;
let resizeTimer = null;
let originalVH = window.visualViewport.height;

let tooltipTimer = null;
let emojiReactionTarget = null;
let badgeTooltipTimer = null;
let tooltipPressTimer = null;

let lastTarget = null;
let activeReport = null;
let selectedReason = null;
let mentionQuery = null;

let oldestLoadedMessageTime = null;
let newestLoadedMessageTime = null;

let iconIndex = 0;
let themeIndex = 0;
let lastTyping = 0;
let lastSendAt = 0;
let messageHeat = 0;
let localTimeoutUntil = 0;

let isLoadingOlder = false;
let isInitialLoading = true;
let messagesInitialized = false;
let settingsUpdate = false;
let timeoutActive = false;

let isLoggingOut = false;
let isTimedOut = false;
let reactionEmoji = false;
let presenceListenerAttached = false;
let newMessageSeparator = false;

let audioUnlocked = false;
let userIsAtBottom = true;
let settingsOpened = false;
let hasScrolledSinceTouch = false;
let suppressNextActionMenu = false;

let badgePress = { timer: null, startedAt: 0, badge: null, long: false };
const heatSystem = { heat: 0, lastAction: 0, decayRate: 1.2, maxHeat: 300, lockedUntil: 0 };

usersRef.on("value", snap => { updateTypingIndicator(snap.val() || {}); });
usersRef.child(`${accountId}/profileIcon`).on("value", snap => { equippedIcon = snap.val() || PROFILE_ICONS[0]; renderIconPage(); });

/* ================= FIREBASE AUTH & JOIN ================= */
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

  if (!await userHasAccount(accountId)) {
    document.getElementById("prompt").style.display = "flex";
    return;
  }
  document.getElementById("prompt").style.display = "none";

  setupPresence(accountId);
  renderAllEmojis();
  restoreDraft();

  if (u.isAnonymous) upgradeGoogleBtn.style.display = "flex";
  else upgradeGoogleBtn.style.display = "none";

  usersRef.child(accountId).on("value", snap => {
      const data = snap.val();
      if (!data) return;
      const state = getCurrentState(data);
      banReady = true;

      if (state.type === "banned") {
        isBanned = true;
        enableBannedUI();
      } else {
        isBanned = false;
        disableBannedUI();
        if (state.type === "timeout") enableTimeoutUI(state.until);
        else disableTimeoutUI();
      }

      tryProcessQueue();
  });

  if (user) updateGoogleUI(user);
});

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

      if (userData?.chatTheme && THEMES[userData.chatTheme]) {
        applyTheme(THEMES[userData.chatTheme]);

        if (userData.chatTheme === "stay") themeStatus.style.display = "flex";
        else themeStatus.style.display = "none";
      } else {
        applyTheme(THEMES.dark);
      }
    }

    if (await userHasAccount(accountId)) {
      sessionListener(accountId);
      attachPresenceListener();
    }
    console.log("[JOIN] Complete — active UID:", accountId);
  } catch (err) {
    console.error("[JOIN]", err);
  }
}

async function userHasAccount(uid) {
  const snap = await usersRef.child(uid).once("value");
  return snap.exists();
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

  attachUsersListener();

  usersRef.once("value").then(snap => {
    allUsers = snap.val() || {};
    initMessageLoading();
    checkTutorial();
  });

  if (pendingJoin) {
    pendingJoin = null;
    join().catch(console.error);
  }

  if (pendingSend) {
    pendingSend = false;
    sendMessage();
  }
}

function attachUsersListener() {
  usersRef.on("child_added", snap => {
    const uid = snap.key;
    const data = snap.val();
    allUsers[uid] = data;
    refreshPresenceUI();
  });

  usersRef.on("child_changed", snap => {
    const uid = snap.key;
    const data = snap.val();
    allUsers[uid] = data;
    refreshPresenceUI();
    refreshReadStatuses();
    checkTutorial();
  });
}

function showGoogleUsernamePrompt(user) {
  promptEl.style.display = "none";
  googlePrompt.style.display = "flex";
  googleInput.value = user.displayName || "";
  googleInput.focus();
}

function checkTutorial() {
  if (timeoutActive) return;
  const remaining = allUsers[accountId]?.tutorial ?? 0;
  if (remaining <= 0) return;

  const steps = isMobile() ? mobileTutorial : desktopTutorial;
  const index = steps.length - remaining;
  if (!steps[index]) return;
  showTopAlert(steps[index], "tutorial");
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

upgradeGoogleBtn.addEventListener("click", async () => {
  if (!user || !user.isAnonymous) return;
  const oldUid = user.uid;

  try {
    console.log("[LINK] Attempting connection with Google");
    const result = await user.linkWithPopup(googleProvider);
    const googleData = user.providerData.find(p => p.providerId === "google.com");

    await usersRef.child(user.uid).update({
      google: {
        IconURL: googleData.photoURL || null,
        email: googleData.email,
        emailVerified: googleData.emailVerified || true
      },
      authProvider: "google"
    });

    console.log("[LINK] Google connection success. UID:", result.user.uid);
    alert("Account secured with Google!");
    location.reload();
  } catch (err) {
    if (err.code === "auth/credential-already-in-use") {
      console.warn("[LINK] Google already linked to another account.");
      const credential = err.credential;

      try {
        if (sessionListenerRef) {
          sessionListenerRef.off();
          sessionListenerRef = null;
        }
        
        await firebase.database().ref("presence").child(oldUid).remove();
        const result = await firebase.auth().signInWithCredential(credential);

        console.log("[LINK] Signed into existing Google account. UID:", result.user.uid);
        alert("Signed into your existing Google account.");
        location.reload();
      } catch (signInErr) {
        console.error("[LINK]", signInErr);
      }
    } else {
      console.error("[LINK]", err);
      alert("Unable to connect with Google.");
    }
  }
});

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

/* ================= PRESENCE & READ ================= */
function attachPresenceListener() {
  if (presenceListenerAttached) return;
  presenceListenerAttached = true;
  presenceRef.on("value", snap => {
    renderPresence(snap.val() || {});
  });
}

function setupPresence(uid) {
  if (!uid) return;
  if (connectedRef) connectedRef.off();
  if (myPresenceRef) myPresenceRef.onDisconnect().cancel();

  connectedRef = firebase.database().ref(".info/connected");
  myPresenceRef = firebase.database().ref("presence").child(uid);

  connectedRef.on("value", (snap) => {
    if (snap.val() === true) {
      myPresenceRef.onDisconnect().remove().then(() => { myPresenceRef.set(Date.now()); });
    }
  });
}

function renderPresence(list) {
  const entries = Object.entries(list);

  if (presenceEl) presenceEl.innerHTML = "";
  if (onlineCountEl) onlineCountEl.textContent = entries.length + " online";

  for (const [uid] of entries) {
    const userData = allUsers[uid] || {};
    const name = userData.displayName || userData.username || "Unknown User";
    const icon = userData.profileIcon || "zendra_blue";
    const googlePhoto = userData.google?.IconURL || null;
    const equippedBadge = getEquippedBadge(userData.badges);

    const el = document.createElement("div");
    el.className = "presence-item";

    el.innerHTML = `
      <div class="presence-left">
        ${icon === "google" && googlePhoto ? `<img class="presence-icon google-avatar" src="${googlePhoto}" />` : `<img class="presence-icon" src="../Assets/Icons/${icon}.png" />`}
        <div class="presence-name-wrapper">
          <div class="presence-name">${escapeHtml(name)}</div>
          ${equippedBadge ? `
            <div class="presence-badge">
              <img src="../Assets/Badges/${equippedBadge}.png" />
              <span>${formatBadgeName(equippedBadge).replace(" Badge", "")}</span>
            </div>` : ""}
        </div>
      </div>`;

    presenceEl.appendChild(el);
  }
}

function refreshPresenceUI() {
  firebase.database().ref("presence").once("value").then(snap => {
    renderPresence(snap.val() || {});
  });
}

function markMessagesAsRead() {
  unreadCount = 0;
  newMessageSeparator = false;

  removeNewMessageSeparator();
  hideNewMsgIndicator();
  updateTabTitle();

  const now = Date.now();
  allUsers[accountId].lastRead = now;

  firebase.database().ref("users").child(accountId).update({ lastRead: now });
}

function updateReadStatus(el, msg) {
  const statusEl = el.querySelector(".read-status");
  if (!statusEl) return;

  if (!isLatestMessageFromMe(msg)) {
    statusEl.textContent = "";
    return;
  }

  if (msg.senderId !== accountId) {
    statusEl.textContent = "";
    return;
  }

  const readers = Object.entries(allUsers)
  .filter(([uid, user]) => uid !== accountId && uid !== BOT_UID && user.lastRead && user.lastRead >= msg.time)
  .map(([uid, user]) => user.displayName || user.username);

  if (readers.length === 0) {
    statusEl.textContent = "";
    return;
  }

  const limitedReaders = readers.slice(0, 3);
  let text = "Seen by " + limitedReaders.join(", ");
  if (readers.length > 3) text += ` +${readers.length - 3}`;
  statusEl.textContent = text;
}

function refreshReadStatuses() {
  Object.values(domCache).forEach(el => {
    const id = el.dataset.id;
    const msg = messages[id];
    if (msg) updateReadStatus(el, msg);
  });
}

/* ================= UTILITIES & FORMATTING ================= */
function formatBadgeName(name) {
  return name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Badge";
}

function escapeHtml(s) {
  return String(s || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function formatMessageText(text, mentions = []) {
  let escaped = escapeHtml(text);
  escaped = escaped.replace(/\n/g, "<br>");

  const codeBlocks = [];
  escaped = escaped.replace(/```([\s\S]*?)```/g, (match, code) => {
    const token = `%%CODEBLOCK_${codeBlocks.length}%%`;
    codeBlocks.push(`<pre class="code-block">${code}</pre>`);
    return token;
  });

  const inlineCodes = [];
  escaped = escaped.replace(/`([^`]+?)`/g, (match, code) => {
    const token = `%%INLINECODE_${inlineCodes.length}%%`;
    inlineCodes.push(`<code class="inline-code">${code}</code>`);
    return token;
  });

  escaped = escaped.replace(/\*\*(?=\S)(.*?)\*\*/g, "<strong>$1</strong>");
  escaped = escaped.replace(/__(?=\S)(.*?)__/g, "<u>$1</u>");
  escaped = escaped.replace(/~~(?=\S)(.*?)~~/g, "<s>$1</s>");
  escaped = escaped.replace(/(^|\s)\*(?=\S)(.*?)\*(?=\s|$)/g, "$1<em>$2</em>");

  inlineCodes.forEach((html, i) => {
    escaped = escaped.replace(`%%INLINECODE_${i}%%`, html);
  });

  codeBlocks.forEach((html, i) => {
    escaped = escaped.replace(`%%CODEBLOCK_${i}%%`, html);
  });

  escaped = escaped.replace(/\b(https?:\/\/[^\s<]+|www\.[^\s<]+)/gi,
    (url) => {
      let href = url;
      if (!href.startsWith("http")) href = "https://" + href;
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="chat-link">${url}</a>`;
    }
  );

  escaped = escaped.replace(/@([a-zA-Z0-9_]+)/g, (match, username) => {
    const userEntry = Object.entries(allUsers).find(([uid, user]) => user.username?.toLowerCase() === username.toLowerCase());
    if (!userEntry) return match;
    return `<span class="mention">${match}</span>`;
  });

  return escaped;
}

function applyTextMarkup(text) {
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__(.*?)__/g, "<u>$1</u>");
  text = text.replace(/~~(.*?)~~/g, "<s>$1</s>");
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
  return text;
}

function formatProfanity(text) {
  const map = [];
  let collapsed = "";
  for (let i = 0; i < text.length; i++) {
    const c = text[i].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (/[a-z0-9]/.test(c)) {
      collapsed += c;
      map.push(i);
    }
  }
  return { collapsed, map };
}

function formatDateLabel(ts) {
  const d = new Date(ts);
  const now = new Date();

  const isToday = d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
  const y = new Date();
  y.setDate(now.getDate() - 1);
  const isYesterday = d.getFullYear() === y.getFullYear() && d.getMonth() === y.getMonth() && d.getDate() === y.getDate();

  if (isToday) return "Today";
  if (isYesterday) return "Yesterday";

  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function isLatestMessageFromMe(msg) {
  const myMessages = Object.values(messages).filter(m => m.senderId === accountId).sort((a, b) => b.time - a.time);
  return myMessages[0]?.id === msg.id;
}

function zxpLevel(level) {
  if (level <= 0) return Infinity;
  const y = 0.5 * level * level + 8.5 * level - 4;
  return (Math.max(1, Math.ceil(y))) * ZXP_PER_MESSAGE;
}

function updateTabTitle() {
  if (unreadCount > 0) document.title = `(${unreadCount}) ${originalTitle}`;
  else document.title = originalTitle;
}

function timeAgo(timestamp) {
  if (!timestamp) return "";
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "Now";
  if (seconds < 3600) return Math.floor(seconds / 60) + "m ago";
  if (seconds < 86400) return Math.floor(seconds / 3600) + "h ago";
  return Math.floor(seconds / 86400) + "d ago";
}

function isOnlyEmojis(text) {
  const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
  const cleanText = text.trim();
  const matches = cleanText.match(emojiRegex);
  return matches && matches.join('') === cleanText.replace(/\s/g, '') && matches.length <= 3;
}

function getEquippedBadge(badges) {
  if (!badges) return null;

  for (const [name, value] of Object.entries(badges)) {
    if (value === true) return name;
  }
  return null;
}

function profanityFilter(text, userId) {
  let result = text;
  const { collapsed, map } = formatProfanity(text);
  const censoredRanges = [];
  const PROFANITY_WORDS_SORTED = [...PROFANITY_WORDS].map(w => w.toLowerCase()).sort((a, b) => b.length - a.length);

  function overlaps(start, end) {
    return censoredRanges.some(r => Math.max(r.start, start) <= Math.min(r.end, end));
  }

  PROFANITY_WORDS_SORTED.forEach(word => {
    let index = collapsed.indexOf(word);

    while (index !== -1) {
      const startOriginal = map[index];
      const endOriginal = map[index + word.length - 1];

      if (!overlaps(startOriginal, endOriginal)) {
        const length = endOriginal - startOriginal + 1;
        const censored = "*".repeat(length);
        result = result.slice(0, startOriginal) + censored + result.slice(endOriginal + 1);
        censoredRanges.push({ start: startOriginal, end: endOriginal });
        moderationLogsRef.push({
          accountId: userId,
          moderation: "censor",
          fullMessage: text,
          time: Date.now()
        });
      }
      index = collapsed.indexOf(word, index + 1);
    }
  });
  return result;
}

function handleViewportChange() {
  const currentVH = window.visualViewport.height;
  const isInputFocused = document.activeElement === chatInput;

  if (isInputFocused && currentVH < originalVH) {
    const heightDiff = originalVH - currentVH;
    const adjustedHeight = currentVH - 50;

    chatArea.style.height = `${adjustedHeight}px`;
    chatWrapper.style.height = `${adjustedHeight}px`;

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    messagesScroll.scrollTop += heightDiff;
    document.body.style.overflow = "hidden";
  } else if (currentVH >= originalVH) {
    chatArea.style.height = "calc(100dvh - 65px)";
    chatWrapper.style.height = "calc(100dvh - 65px)";
    document.body.style.overflow = "";
  }
}

function lockScroll() {
  if (window.scrollY !== 0) window.scrollTo(0, 0);
  if (document.activeElement === chatInput && window.visualViewport.height < originalVH - 100) requestAnimationFrame(lockScroll);
}

chatInput.addEventListener('focus', () => {
  setTimeout(() => window.scrollTo(0, 0), 50);
  setTimeout(() => window.scrollTo(0, 0), 300);
  requestAnimationFrame(lockScroll); //
});

window.visualViewport.addEventListener("resize", handleViewportChange);

/* ================= CHAT AUDIO ================= */
notificationSound.volume = 0.25;
notificationSound.preload = "auto";

function unlockAudio() {
  if (audioUnlocked) return;
  notificationSound.muted = true;
  notificationSound.play().then(() => {
    notificationSound.pause();
    notificationSound.currentTime = 0;
    audioUnlocked = true;
  }).catch(() => {});
  document.removeEventListener("click", unlockAudio);
}

document.addEventListener("click", unlockAudio, { once: true });

/* ================= CHAT RENDERING HELPERS ================= */
function createMessageElement(data) {
  const { id, name, text, time, senderId, edited } = data;
  const isMe = senderId === accountId;
  const icon = (data.icon === "google" && data.googlePhotoURL)  ? data.googlePhotoURL  : `../Assets/Icons/${data.icon}.png`;
  const isTagged = data.mentions?.includes(accountId);

  const el = document.createElement("div");
  el.className = `msg ${isMe ? "me" : "other"}`;
  el.dataset.id = id;
  el.id = "msg-" + id;
  if (text && isOnlyEmojis(text)) el.classList.add("emoji-only");

  el.innerHTML = `
    <div class="meta">
      <strong>${escapeHtml(name || "Guest")}</strong>
      <div class="badges"></div>
    </div>
    
    <img src="${icon}" class="profile-icon" />

    <div class="bubble">
      <div class="bubble-content">
        ${data.replyToId ? `<div class="reply-bubble loading"></div>` : ""}
        ${formatMessageText(text, data.mentions)}
        </div>
      </div>
    </div>

    <div class="reaction-badges"></div>
    <div class="info-row">
      <div class="time" data-timestamp="${time}">${timeAgo(time)}</div>
      <div class="edit">${edited ? "(edited)" : ""}</div>
    </div>
    <div class="read-status"></div>

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

      <button class="copy-option">
        <span class="fa-solid fas fa-copy"></span> Copy
      </button>

      <button class="delete-option danger">
        <span class="fa-solid far fa-trash-alt"></span> Delete
      </button>

      <button class="report-option danger">
        <span class="fa-solid fas fa-exclamation-triangle"></span> Report
      </button>
    </div>`;

  if (data.embedData) {
    const bubbleContent = el.querySelector(".bubble-content");
    bubbleContent.innerHTML = messageEmbed(data);
  }

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

  if (senderId === BOT_UID && data.embed) el.classList.add("bot-embed");
  if (data.requestedBy) {
    const footer = document.createElement("div");
    footer.className = "requested-by";
    footer.innerHTML = `<small>Requested by ${ allUsers[data.requestedBy]?.displayName || "Unknown" }</small>`;
    el.querySelector(".bubble").appendChild(footer);
  }

  const meta = el.querySelector(".meta");
  const info = el.querySelector(".info-row");
  if (isMe) {
    meta.insertBefore(meta.querySelector(".badges"), meta.querySelector("strong"));
    info.insertBefore(info.querySelector(".edit"), info.querySelector(".time"));
  } else {
    meta.appendChild(meta.querySelector(".badges"));
    info.appendChild(info.querySelector(".edit"));
  }

  if (!isInitialLoading) {
    renderReactions(el, data);
    longPressListener(el);
    swipeToReply(el);
  }

  updateReadStatus(el, data);
  if (isTagged) el.querySelector(".bubble")?.classList.add("mentioned-me");
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

  content.insertAdjacentHTML("beforeend", formatMessageText(data.text, data.mentions));

  renderReplyBubble(data);
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

function messageEmbed(data) {
  switch (data.embedData.type) {
    case "gif": {
      return `<div class="gif-embed">
        <img src="${data.embedData.url}" class="gif-image">
      </div>`;
    }

    case "nasa_apod": {
      const { title, explanation, image, video, date } = data.embedData;

      return `<div class="bubble-embed">
        <div class="nasa-title">NASA - Picture of the Day</div>
          ${image ? `<img src="${image}" class="nasa-image">` : ""}
          ${video ? `<a href="${video}" target="_blank">Watch Video</a>` : ""}
          <div class="nasa-title">${escapeHtml(title)}</div>
          <div class="nasa-date">${date}</div>
          <div class="nasa-description">
            ${escapeHtml(explanation.substring(0, 200))}...
          </div>
        </div>`;
    }

    case "nasa_moon": {
      const { image, title } = data.embedData;

      return `<div class="bubble-embed">
          <div class="nasa-title">NASA - Moon</div>
          <img src="${image}" class="nasa-image">
          <div class="nasa-title">${escapeHtml(title)}</div>
        </div>`;
    }

    case "nasa_iss": {
      const { lat, lon } = data.embedData;

      return `<div class="bubble-embed">
          <div class="nasa-title">NASA - ISS Current Location</div>
          <div class="nasa-description">
            Latitude: ${lat}<br>
            Longitude: ${lon}<br>
            <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank" style="color: #fff; text-decoration: underline;">View on Map</a>
          </div>
        </div>`;
    }

    case "brawl_profile": {
      const { name, tag, iconId, trophies, club, soloVictories, duoVictories, victories, brawlers, total, totalPrestigeLevel } = data.embedData;
      const iconUrl = `https://cdn.brawlify.com/profile-icons/regular/${iconId}.png`;

      return `<div class="bubble-embed">
          <div class="brawl-header">
            <div class="brawl-name">
              ${escapeHtml(name)}
              <div class="brawl-tag"><img class="brawl-emoji" src="../Assets/Emoji/ID.png"> #${escapeHtml(tag)}</div>
            </div>
            <img src="${iconUrl}" class="brawl-profile-icon">
          </div>
          
          <div class="brawl-stats">
            <div class="brawl-stat"><img class="brawl-emoji" src="../Assets/Emoji/Trophy.png"> <strong>Trophies:</strong> ${trophies}</div>
            <div class="brawl-stat"><img class="brawl-emoji" src="../Assets/Emoji/Brawlers.png"> <strong>Brawlers:</strong> ${brawlers} / ${total}</div>
            <div class="brawl-stat"><img class="brawl-emoji" src="../Assets/Emoji/Brawler.png"> <strong>Prestiges:</strong> ${totalPrestigeLevel} / ${total}</div>
            <div class="brawl-stat"><img class="brawl-emoji" src="../Assets/Emoji/Club.png"> <strong>Club:</strong> ${club?.name ? `${escapeHtml(club.name)} (${escapeHtml(club.tag)})` : "No Club"}</div>
          </div>

          <div class="brawl-stats">
            <div class="brawl-stat"><img class="brawl-emoji" src="../Assets/Emoji/Modes/soloShowdown.png"> <strong>Solo Victories:</strong> ${soloVictories}</div>
            <div class="brawl-stat"><img class="brawl-emoji" src="../Assets/Emoji/Modes/duoShowdown.png"> <strong>Duo Victories:</strong> ${duoVictories}</div>
            <div class="brawl-stat"><img class="brawl-emoji" src="../Assets/Emoji/3v3.png"> <strong>3v3 Victories:</strong> ${victories}</div>
          </div>
        </div>`;
    }

    case "brawl_log": {
      const { tag, battles } = data.embedData;

      const getResultText = (battle) => {
        if (battle.result) return battle.result.charAt(0).toUpperCase() + battle.result.slice(1);
        if (battle.rank) {
          const suffixes = ["th", "st", "nd", "rd"];
          const v = battle.rank % 100;
          return battle.rank + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]) + " Place";
        }
        return "-";
      };

      const formatBrawlTime = (isoString) => {
        const date = new Date(isoString.replace(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/, "$1-$2-$3T$4:$5:$6"));
        const now = new Date();
        const diffInMinutes = Math.floor((now - date) / 60000);

        if (diffInMinutes < 1) return "Just now";
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;

        return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
      };

      function renderPlayerRow(p, starPlayer = null) {
        const isStar = starPlayer && p.tag === starPlayer.tag;
        return `
        <div class="brawl-player ${isStar ? 'star-player' : ''}">
          <img src="https://cdn.brawlify.com/brawlers/portraits/${p.brawler.id}.png" class="brawl-mini-portraits" onerror="this.src='../Assets/Emoji/Brawler.png'">
          <span class="player-name">${escapeHtml(p.name)}</span>
          <span class="brawler-info">(${p.tag})</span>
        </div>`;
      }

      const rows = battles.map(b => {
        let teamsHtml = "";

        if (b.battle.teams) {
          teamsHtml = `<div class="brawl-teams">` +
            b.battle.teams.map((team, index) => `
              <div class="brawl-team">
                <div class="team-label">Team ${index + 1}</div>
                ${team.map(p => renderPlayerRow(p, b.battle.starPlayer)).join("")}
              </div>
            `).join("") +
          `</div>`;
        } else if (b.battle.players) {
          teamsHtml = `<div class="brawl-teams">
            <div class="team-label">Players</div>
            ${b.battle.players.map(p => renderPlayerRow(p)).join("")}
          </div>`;
        }

        return `
        <div class="brawl-stats">
        <div class="brawl-stat-header">
          <img src="../Assets/Emoji/Modes/${b.battle.mode}.png" class="brawl-emoji"> 
          <b>${gameModes[b.battle.mode] || b.battle.mode}</b> 
          ${b.event.map ? `| <small>${b.event.map}</small>` : ''}
        </div>
        
        <div class="brawl-grid">
           <div class="brawl-stat"><img src="../Assets/Emoji/Result.png" class="brawl-emoji">${getResultText(b.battle)}</div>
           <div class="brawl-stat"><img src="../Assets/Emoji/Trophy.png" class="brawl-emoji">${b.battle.trophyChange >= 0 ? '+' : ''}${b.battle.trophyChange || 0}</div>
           <div class="brawl-stat"><img src="../Assets/Emoji/Calendar.png" class="brawl-emoji">${formatBrawlTime(b.battleTime)}</div>
        </div>

        ${teamsHtml}
      </div>`;
      }).join("<hr class='brawl-divider'>");

      return `
      <div class="bubble-embed">
        <div class="brawl-header">
          <div class="brawl-name">Battle Log <div class="brawl-tag">#${escapeHtml(tag)}</div></div>
          <img src="../Assets/Emoji/Quests.png" class="brawl-profile-icon">
        </div>
        ${rows}
      </div>`;
    }

    case "brawl_club": {
      const { name, tag, iconId, members, trophies, description } = data.embedData;
      const iconUrl = `https://cdn.brawlify.com/club-badges/regular/${iconId}.png`;

      return `<div class="bubble-embed">
          <div class="brawl-header">
            <div class="brawl-name">
              ${escapeHtml(name)}
              <div class="brawl-tag"><img class="brawl-emoji" src="../Assets/Emoji/ID.png"> #${escapeHtml(tag)}</div>
            </div>
            <img src="${iconUrl}" class="brawl-profile-icon">
          </div>
          
          <div class="brawl-stats">
            <div class="brawl-stat"><img class="brawl-emoji" src="../Assets/Emoji/Trophy.png"> <strong>Trophies:</strong> ${trophies}</div>
            <div class="brawl-stat"><img class="brawl-emoji" src="../Assets/Emoji/Brawlers.png"> <strong>Members:</strong> ${members} / 30</div>
          </div>

          <div class="brawl-stats">
            <div class="brawl-stat"><img class="brawl-emoji" src="../Assets/Emoji/Quests.png"> <strong>Description</strong></div>
            <div style="max-width: 400px;" class="embed-desc">${escapeHtml(description || "No description")}</div>
          </div>
        </div>`;
    }

    case "brawl_events": {
      const totalSlots = 12;
      const activeEvents = data.embedData.modes;
      let eventsHTML = "";

      for (let i = 0; i < totalSlots; i++) {
        const e = activeEvents[i];

        if (e) {
          const displayMode = gameModes[e.event.mode] || e.event.mode;
          const mapId = e.event.id;
          const mapName = e.event.map;

          eventsHTML += `
            <div class="event-card">
              <div class="event-info">
                <div class="event-mode-name">${displayMode}</div>
                <div class="event-map-name">${mapName}</div>
              </div>
              <img src="https://cdn.brawlify.com/maps/regular/${mapId}.png" class="event-map-img" onerror="this.src='../Assets/Emoji/Empty.png'">
            </div>`;
        } else {
          eventsHTML += `
            <div class="event-card empty-slot">
              <div class="event-mode-name">Upcoming</div>
              <div class="event-map-name">TBA</div>
            </div>`;
        }
      }

      return `<div class="bubble-embed">
          <div class="brawl-name">Current Map Rotation</div>
          <div class="events-grid">${eventsHTML}</div>
        </div>`;
    }

    case "brawl_players_lb": {
      const rows = data.embedData.players.map((p, i) =>
        `<div class="lb-row">
            <span>#${i + 1}</span>
            <span>${escapeHtml(p.name)}</span>
            <span><code class="inline-code">🏆 ${p.trophies}</code></span>
          </div>`).join("");

      return `<div class="bubble-embed leaderboard">
          <div class="brawl-header">
            <div class="brawl-name">
              Global Leaderboard
            </div>
            <img src="../Assets/Emoji/Leaderboards.png" class="brawl-profile-icon">
          </div>
          ${rows}
        </div>`;
    }

    case "brawl_brawler_lb": {
      const { brawlerName, players } = data.embedData;
      const formattedName = escapeHtml(brawlerName).toLowerCase().replace(/(?:^|[\s-])\S/g, (match) => match.toUpperCase());

      const rows = players.map((p, i) => `
        <div class="lb-row">
          <span>#${i + 1}</span>
          <span>${escapeHtml(p.name)}</span>
          <span><code class="inline-code">🏆 ${p.trophies}</code></span>
        </div>`).join("");

      return `<div class="bubble-embed leaderboard">
          <div class="brawl-header">
            <div class="brawl-name">
            ${formattedName} Leaderboard
            </div>
            <img src="../Assets/Emoji/Brawler.png" class="brawl-profile-icon">
          </div>
          ${rows}
        </div>`;
    }
  }
}

function appendMessage(data) {
  if (!messagesEl) return null;

  const id = data.id;
  messages[id] = data;

  if (domCache[id]) {
    updateMessageElement(data);
    return domCache[id];
  }

  const isMe = data.senderId === accountId;
  const userLastRead = allUsers[accountId]?.lastRead || 0;
  const insertSeparator = !isInitialLoading && !isMe && data.time > userLastRead && !newMessageSeparator;

  const el = createMessageElement(data);
  const images = el.querySelectorAll("img");
  domCache[id] = el;

  insertMessage(el, data.time);
  if (insertSeparator) {
    createNewMessageSeparator(el);
    newMessageSeparator = true;
  }

  checkDateSeparator(el, data.time);

  renderReplyBubble(data);
  renderReactions(el, data);

  if (!isInitialLoading) {
    regroupAround(el);
  }

  reactionListener(id);
  actionMenuHandler(el, id, data);

  if (images.length) {
    let loaded = 0;
    images.forEach(img => {
      if (img.complete) {
        loaded++;
        if (loaded === images.length) repositionMessage(el);
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === images.length) repositionMessage(el);
        });
      }
    });
  } else repositionMessage(el);

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

    if (childData.times > timestamp) {
      messagesEl.insertBefore(msgEl, child);
      return;
    }
  }
  messagesEl.appendChild(msgEl);
}

function repositionMessage(el) {
  requestAnimationFrame(() => {
    positionActions(el);
    positionIcons(el);
  });
}

/* ================= FIREBASE LISTENERS ================= */
async function initMessageLoading() {
  if (messagesInitialized) return;
  messagesInitialized = true;
  newMessageSeparator = false;

  const loadStart = performance.now();
  const messagesSnap = await messagesRef.orderByChild("time").limitToLast(PAGE_SIZE).once("value")
  const messageItems = [];
  messagesSnap.forEach(snap => { messageItems.push({ type: "msg", id: snap.key, ...snap.val() }); });
  messageItems.sort((a, b) => a.time - b.time);

  oldestLoadedMessageTime = messageItems[0]?.time ?? null;
  newestLoadedMessageTime = messageItems.at(-1)?.time ?? null;

  const levelsSnap = await levelLogsRef.orderByChild("time").startAt(oldestLoadedMessageTime).endAt(newestLoadedMessageTime).once("value");
  const timeline = [...messageItems];
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
      const msg = { ...item, name: info.displayName || info.username || "Unknown User" };
      messages[item.id] = msg;

      const el = createMessageElement({
        ...msg,
        icon: info.profileIcon || "zendra_blue",
        googlePhotoURL: info.google?.IconURL || null,
        badges: info.badges || {}
      });

      domCache[item.id] = el;
      fragment.appendChild(el);

      renderReplyBubble(msg);

      if (pendingReplies[item.id]) {
        for (const replyMsgId of pendingReplies[item.id]) {
          renderReplyBubble(messages[replyMsgId]);
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

      actionMenuHandler(el, id, msg);
      reactionListener(id);
      longPressListener(el);
      swipeToReply(el);
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
    if (domCache[id]) return;

    const msg = snap.val();
    messages[id] = { id, ...msg };

    const info = allUsers[msg.senderId] || {};
    const isMe = msg.senderId === accountId || msg.requestedBy === accountId;

    appendMessage({
      ...msg,
      id,
      name: info.displayName || info.username || "Unknown User",
      icon: info.profileIcon || "zendra_blue",
      googlePhotoURL: info.google?.IconURL || null,
      badges: info.badges || {}
    });

    if (isMe) {
      messagesViewport.scrollTop = messagesViewport.scrollHeight;
      hideNewMsgIndicator();
      markMessagesAsRead();
      return;
    }

    const distanceFromBottom = messagesViewport.scrollHeight - messagesViewport.scrollTop - messagesViewport.clientHeight;
    userIsAtBottom = distanceFromBottom < 120;
    const shouldNotify = !isMe && (!userIsAtBottom || !document.hasFocus());

    if (!shouldNotify) {
      messagesViewport.scrollTop = messagesViewport.scrollHeight;
      markMessagesAsRead();
      return;
    }

    unreadCount++;
    updateNewMsgIndicator();
    updateTabTitle();

    if (audioUnlocked) {
      notificationSound.currentTime = 0;
      notificationSound.muted = false;
      notificationSound.play().catch(() => { });
    }
  });

  messagesRef.on("child_changed", snap => {
    const id = snap.key;
    const incoming = snap.val();
    const prev = messages[id] || {};
    const msg = { ...prev, ...incoming, id };

    messages[id] = msg;
    const el = domCache[id];
    if (!el) return;

    updateMessageElement(msg);
    updateReplyBubble(id);
  });

  messagesRef.on("child_removed", snap => {
    const id = snap.key;
    const el = domCache[id];
    if (!el) return;

    el.remove();
    delete domCache[id];
    delete messages[id];

    regroupMessages();
  });

  levelLogsRef.limitToLast(1).on("child_added", snap => {
    const id = snap.key;
    if (levelEventCache[id]) return;

    const data = snap.val();
    levelEventCache[id] = true;
    
    const el = { id, ...data };
    insertMessage(createLevelSeparator(el), el.time);

    const distanceFromBottom = messagesViewport.scrollHeight - messagesViewport.scrollTop - messagesViewport.clientHeight;
    userIsAtBottom = distanceFromBottom < 120;
    const shouldScroll = userIsAtBottom && document.hasFocus();
    if (shouldScroll) messagesViewport.scrollTop = messagesViewport.scrollHeight;
  });
};

async function loadOlderMessages() {
  const loadStart = performance.now();
  if (isLoadingOlder || !oldestLoadedMessageTime) return;
  isLoadingOlder = true;

  const viewport = messagesViewport;
  const container = messagesEl;

  const prevScrollHeight = container.scrollHeight;
  const prevScrollTop = viewport.scrollTop;

  const msgSnap = await messagesRef.orderByChild("time").endBefore(oldestLoadedMessageTime).limitToLast(PAGE_SIZE).once("value");
  if (!msgSnap.exists()) return isLoadingOlder = false;
  const olderMessages = [];
  msgSnap.forEach(snap => { olderMessages.push({ type: "msg", id: snap.key, ...snap.val() }); });
  olderMessages.sort((a, b) => a.time - b.time);

  const newOldestTime = olderMessages[0].time;

  const levelsSnap = await levelLogsRef.orderByChild("time").startAt(newOldestTime).endBefore(oldestLoadedMessageTime).once("value");
  const timeline = [...olderMessages];
  levelsSnap.forEach(snap => { timeline.push({ type: "level", id: snap.key, ...snap.val() }); });
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
      if (messages[item.id]) continue;

      const info = allUsers[item.senderId] || {};
      const msg = { ...item, name: info.displayName || info.username || "Unknown User" };
      messages[item.id] = msg;

      const el = createMessageElement({
        ...msg,
        icon: info.profileIcon || "zendra_blue",
        googlePhotoURL: info.google?.IconURL || null,
        badges: info.badges || {}
      });

      domCache[item.id] = el;
      fragment.appendChild(el);

      renderReplyBubble(msg);

      if (pendingReplies[item.id]) {
        for (const replyMsgId of pendingReplies[item.id]) {
          renderReplyBubble(messages[replyMsgId]);
        }
        delete pendingReplies[item.id];
      }

      if (msg.replyToId && !messages[msg.replyToId]) {
        (pendingReplies[msg.replyToId] ??= []).push(msg.id);
      }
    } else {
      if (levelEventCache[item.id]) continue;
      levelEventCache[item.id] = true;
      fragment.appendChild(createLevelSeparator(item));
    }
  }

  container.prepend(fragment);

  const newScrollHeight = container.scrollHeight;
  viewport.scrollTop = prevScrollTop + (newScrollHeight - prevScrollHeight);

  const msgEls = [...container.querySelectorAll(".msg")];

  requestAnimationFrame(() => {
    for (const el of msgEls) {
      const id = el.dataset.id;
      const msg = messages[id];
      if (!msg) continue;

      actionMenuHandler(el, id, msg);
      reactionListener(id);
      longPressListener(el);
      swipeToReply(el);
    }
  });

  requestAnimationFrame(() => {
    regroupMessages();

    for (const el of msgEls) {
      const msg = messages[el.dataset.id];
      if (msg?.reactions) renderReactions(el, msg);
      positionActions(el);
      positionIcons(el);
    }
  });

  oldestLoadedMessageTime = newOldestTime;
  isLoadingOlder = false;

  const loadEnd = performance.now();
  console.log(`[LOAD] Loaded ${timeline.length} items in ${(loadEnd - loadStart).toFixed(2)}ms`);
}

window.addEventListener("focus", () => {
  if (!messagesInitialized) return;
  const distanceFromBottom = messagesViewport.scrollHeight - messagesViewport.scrollTop - messagesViewport.clientHeight;
  userIsAtBottom = distanceFromBottom < 120;
  if (userIsAtBottom) markMessagesAsRead();
});

/* ================= MESSAGES HANDLER ================= */
async function sendMessage() {
  if (!authReady || !user) return pendingSend = true;
  if (editingId) return finishEditMessage();
  if (!messageInput) return console.error("[SEND] Message Input:", err);
  if (Date.now() < heatSystem.lockedUntil) return;

  const text = messageInput.value.trim();
  if (!text) return;
  if (text.length > MESSAGE_CHAR_LIMIT) return updateCharLimitIndicator();
  if (text.startsWith("+")) {
    const handled = await handleCommand(text);
    if (handled) return;
  }

  const finalText = profanityFilter(text, accountId);
  const mentions = extractMentions(finalText)
  const newMsg = {
    senderId: accountId,
    text: finalText,
    time: Date.now(),
    edited: false,
    replyToId: replyToId || null,
    mentions
  };

  let heat = 12;
  heat += Math.min(20, text.length / 20);
  if (heatSystem.heat > 80) heat *= 1.3;
  if (heatSystem.heat > 150) heat *= 1.6;
  applyHeat(heat);

  const newRef = messagesRef.push();
  newMsg.id = newRef.key;
  localStorage.removeItem(DRAFT_KEY);

  replyToId = null;
  document.getElementById("reply-bar").classList.add("hidden");
  typingStatus(false);

  newRef.set(newMsg).catch(err => console.error("[ERROR] Sending Message:", err));
  messageInput.value = "";
  updateCharLimitIndicator();
  userProgression(accountId);
}

function beginEditMessage(id) {
  editingId = id;
  originalText = messages[id]?.text || "";

  if (!messageInput) {
      console.error("[EDIT] Message Input:", err);
      return;
  }

  messageInput.value = originalText;
  messageInput.focus();
  sendBtn.textContent = "Save Edit";
  commandBtn.style.display = "none";
  updateCharLimitIndicator();

  if (!document.getElementById("cancelEditBtn")) {
    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancelEditBtn";
    cancelBtn.textContent = "Cancel";
    cancelBtn.className = "cancel-edit-btn";
    cancelBtn.style.marginLeft = "3px";
    cancelBtn.style.marginRight = "3px";
    cancelBtn.onclick = cancelEdit;
    sendBtn.insertAdjacentElement("afterend", cancelBtn);
  }
}

function finishEditMessage() {
  if (!messageInput) return cancelEdit();

  const newText = messageInput.value.trim();
  if (!newText || !editingId) return cancelEdit();
  if (newText === originalText) return cancelEdit();

  const finalText = profanityFilter(newText, accountId);
  const mentions = extractMentions(finalText)
  messagesRef.child(editingId).update({ text: finalText, edited: true, mentions }).catch(console.error);

  cancelEdit();
}

function cancelEdit() {
  editingId = null;
  originalText = "";

  if (messageInput) messageInput.value = "";
  if (sendBtn) sendBtn.textContent = "Send";
  if (commandBtn) commandBtn.style.display = "block";
  const cancelBtn = document.getElementById("cancelEditBtn");
  if (cancelBtn) cancelBtn.remove();
  updateCharLimitIndicator();
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
  setTimeout(() => { msgEl.style.transform = ""; msgEl.style.transition = ""; }, 250);
  startReply(msgEl);
}

function renderReplyBubble(msg) {
  const el = domCache[msg.id];
  if (!el) return;

  const container = el.querySelector(".bubble-content");
  if (!container) return;

  if (!msg.replyToId) {
    container.querySelector(".reply-bubble")?.remove();
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

    (pendingReplies[msg.replyToId] ??= []).push(msg.id);
    return;
  }

  bubble.classList.remove("loading");
  bubble.dataset.replyJump = msg.replyToId;

  bubble.innerHTML = `
    <strong>${escapeHtml(original.name)}</strong>
    <div class="reply-snippet">
      ${escapeHtml(original.text.slice(0, 80))}
      ${original.edited ? " (edited)" : ""}
    </div>
  `;
}

function updateReplyBubble(editedMsgId) {
  for (const id in messages) {
    const msg = messages[id];
    if (msg.replyToId === editedMsgId) renderReplyBubble(msg);
  }
}

async function userProgression(accountId) {
  const u = usersRef.child(accountId);
  
  try {
    await u.transaction(data => {
      if (!data) return data;

      if (!data.experience) {
        data.experience = { level: 1, zxp: 0, messageCount: 0 };
      }

      data.experience.messageCount++;
      data.experience.zxp += ZXP_PER_MESSAGE;

      const currentLevel = data.experience.level || 1;
      const requiredZxp = zxpLevel(currentLevel);

      if (data.experience.zxp >= requiredZxp) {
        const newLevel = currentLevel + 1;
        data.experience.zxp -= requiredZxp;
        data.experience.level = newLevel;

        levelLogsRef.push({
          accountId,
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
  } catch (err) {
    console.error("[ZXP] Progression Error:", err);
  }
}

function typingStatus(isTyping) {
  const ref = firebase.database().ref("users/" + accountId + "/typing");
  ref.set({ typing: isTyping, ts: Date.now() });
}

function restoreDraft() {
  const savedDraft = localStorage.getItem(DRAFT_KEY);
  if (savedDraft) {
    messageInput.value = savedDraft;
    updateCharLimitIndicator();
    detectMention();
  }
}

sendBtn.onclick = () => {
  if (Date.now() - lastSendAt < MESSAGE_RATE_LIMIT) return;
  lastSendAt = Date.now();
  sendMessage();
};

messagesEl.addEventListener("click", e => {
  const bubble = e.target.closest(".reply-bubble");
  if (!bubble) return;

  const targetId = bubble.dataset.replyJump;
  if (!targetId) return;

  const targetEl = document.getElementById("msg-" + targetId);
  if (!targetEl) return;

  targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
});

messagesEl.addEventListener("pointerup", e => {
  const bubble = e.target.closest(".reply-bubble");
  if (!bubble) return;

  const targetId = bubble.dataset.replyJump;
  if (!targetId) return;

  const targetEl = document.getElementById("msg-" + targetId);
  if (!targetEl) return;

  targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
});

window.addEventListener("keydown", (e) => {
  const isModifier = e.ctrlKey || e.metaKey;

  if (isModifier && e.key === ",") {
    e.preventDefault();

    const isHidden = settingsModal.classList.toggle("hidden");
    if (!isHidden) initAccountSettings();
  }

  if (isModifier && e.key.toLowerCase() === "e") {
    e.preventDefault();
    
    const isOpen = emojiMenu.classList.toggle("open");
    if (isOpen) {
      renderAllEmojis();
      const searchInput = emojiMenu.querySelector("input");
      if (searchInput) searchInput.focus();
    } else {
      emojiReactionTarget = null;
      reactionEmoji = false;
    }
  }

  if (isModifier && e.key.toLowerCase() === "u") {
    e.preventDefault();

    const isOpen = commandMenu.classList.toggle("open");
    if (isOpen) renderCommandMenu();
  }
  
  if (e.key === "Escape") {
    settingsModal.classList.add("hidden");
    emojiMenu.classList.remove("open");
    emojiReactionTarget = null;
    reactionEmoji = false;
  }
});

messageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    if (Date.now() - lastSendAt < MESSAGE_RATE_LIMIT) return;
    lastSendAt = Date.now();
    sendMessage();
  }
});

messageInput.addEventListener("input", () => {
  const now = Date.now();
  if (now - lastTyping > 1500) {
    typingStatus(true);
    lastTyping = now;
  }

  if (messageInput.value.length > MESSAGE_CHAR_LIMIT) {
    messageInput.value = messageInput.value.slice(0, MESSAGE_CHAR_LIMIT);
  }

  updateCharLimitIndicator();
  detectMention();
  localStorage.setItem(DRAFT_KEY, messageInput.value);

  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => { typingStatus(false); }, 1500);
});

document.getElementById("cancel-reply").onclick = () => {
  replyToId = null;
  document.getElementById("reply-bar").classList.add("hidden");
};

/* ================= COMMANDS ================= */
function renderCommandMenu() {
  commandMenuList.innerHTML = "";
  let lastCategory = null;

  commandDefinitions.forEach(cmd => {
    if (lastCategory && cmd.category !== lastCategory) {
      const divider = document.createElement("div");
      divider.className = "command-menu-divider";
      divider.innerHTML = `${cmd.category}`; 
      commandMenuList.appendChild(divider);
    }

    const div = document.createElement("div");
    div.className = "command-menu-item";
    div.innerHTML = `
      <div class="command-menu-name">${(cmd.name).replace("+", "")}</div>
      <div class="command-menu-desc">${cmd.description}</div>`;
    div.onclick = () => {
      messageInput.value = cmd.name + " ";
      messageInput.focus();
      commandMenu.classList.remove("open");
    };

    commandMenuList.appendChild(div);
    lastCategory = cmd.category;
  });
}

async function handleCommand(text) {
  const parts = text.trim().split(" ");
  const cmdName = parts[0];

  const cmd = commandDefinitions.find(c => c.name === cmdName);
  if (!cmd) return false;

  let loadingRef = null;
  const loadingTimeout = setTimeout(() => {
    loadingRef = sendLoadingMessage(accountId);
  }, 800);

  messageInput.value = "";
  localStorage.removeItem(DRAFT_KEY);
  updateCharLimitIndicator();
  userProgression(accountId);
  applyHeat(18);

  try {
    const result = await cmd.execute(parts.slice(1), accountId, text);

    clearTimeout(loadingTimeout);
    if (loadingRef) await loadingRef.remove();

    if (result?.type === "gif_picker") {
      openGifPicker(result);
      return true;
    }

    sendBotMessage(result, accountId);
  } catch (err) {
    console.error(err);
    clearTimeout(loadingTimeout);
    if (loadingRef) await loadingRef.remove();
    sendBotMessage("❌ Something went wrong.", accountId);
  }

  return true;
}

function sendLoadingMessage(requestedBy = null) {
  const loadingRef = messagesRef.push();

  loadingRef.set({
    text: "⏳ Waking up...Please wait.",
    id: loadingRef.key,
    senderId: BOT_UID,
    time: Date.now(),
    embed: true,
    requestedBy
  });

  return loadingRef;
}

function sendBotMessage(content, requestedBy = null) {
  const newMsgRef = messagesRef.push();

  if (typeof content === "string") {
    newMsgRef.set({
      text: content,
      id: newMsgRef.key,
      senderId: BOT_UID,
      time: Date.now(),
      embed: true,
      requestedBy
    });
  } else {
    newMsgRef.set({
      embedData: content,
      id: newMsgRef.key,
      senderId: BOT_UID,
      time: Date.now(),
      embed: true,
      requestedBy
    });
  }
}

function sendUserMessage(content) {
  const newMsgRef = messagesRef.push();
  newMsgRef.set({
    senderId: accountId,
    embedData: content,
    id: newMsgRef.key,
    time: Date.now(),
    embed: true
  });
}

function openGifPicker(data) {
  const container = document.getElementById("gif-picker-container");

  const grid = data.gifs.map(g => `<img src="${g.preview}" class="gif-option" data-full="${g.full}">`).join("");
  container.innerHTML = `<div class="gif-grid">${grid}</div>`;
  container.classList.remove("hidden");

  const closePicker = (e) => {
    if (!container.contains(e.target) && !e.target.closest('.gif-btn')) {
      container.classList.add("hidden");
      document.removeEventListener("mousedown", closePicker);
    }
  };
  setTimeout(() => document.addEventListener("mousedown", closePicker), 10);

  container.querySelectorAll(".gif-option").forEach(img => {
    img.addEventListener("click", () => {
      sendUserMessage({ type: "gif", url: img.dataset.full  });
      container.classList.add("hidden");
      container.innerHTML = "";
    });
  });
}

commandBtn.onclick = () => {
  commandMenu.classList.toggle("open");
  renderCommandMenu();
};

messageInput.addEventListener("input", () => {
  const value = messageInput.value.trim();

  if (!value.startsWith("+")) {
    commandMenu.classList.remove("open");
    return;
  }

  const matches = commandDefinitions.filter(cmd =>
    cmd.name.startsWith(value)
  );

  if (matches.length === 0) {
    commandMenu.classList.remove("open");
    return;
  }

  commandMenu.classList.add("open");
  commandMenuList.innerHTML = "";
  let lastCategory = null;

  matches.forEach(cmd => {
    if (lastCategory && cmd.category !== lastCategory) {
      const divider = document.createElement("div");
      divider.className = "command-menu-divider";
      divider.innerHTML = `<span>${cmd.category}</span>`;
      commandMenuList.appendChild(divider);
    }

    const div = document.createElement("div");
    div.className = "command-menu-item";
    div.innerHTML = `
    <div class="command-menu-name">${cmd.name}</div>
    <div class="command-menu-desc">${cmd.description}</div>`;

    div.onclick = () => {
      messageInput.value = cmd.name + " ";
      messageInput.focus();
      commandMenu.classList.remove("open");
    };

    commandMenuList.appendChild(div);
    lastCategory = cmd.category;
  });
});

/* ================= MENTION & ALERTS ================= */
function detectMention() {
  const value = messageInput.value;
  const cursorPos = messageInput.selectionStart;

  const textBeforeCursor = value.slice(0, cursorPos);
  const match = textBeforeCursor.match(/@([a-zA-Z0-9_]{2,})$/);

  if (match) {
    mentionQuery = match[1];
    searchUsersForMention(mentionQuery);
  } else {
    mentionQuery = null;
    hideMentionDropdown();
  }
}

function searchUsersForMention(query) {
  const lower = query.toLowerCase();
  const results = Object.entries(allUsers)
  .filter(([uid, user]) => user.username?.toLowerCase().startsWith(lower) && uid !== BOT_UID)
  .slice(0, 3)
  .map(([uid, user]) => ({uid, username: user.username }));
  showMentionDropdown(results);
}

function showMentionDropdown(users) {
  mentionDropdown.innerHTML = "";

  if (!users || users.length === 0) {
    mentionDropdown.classList.add("hidden");
    return;
  }

  users.forEach(user => {
    const div = document.createElement("div");
    div.className = "mention-item";
    div.textContent = "@" + user.username;
    div.onclick = () => insertMention(user);
    mentionDropdown.appendChild(div);
  });

  mentionDropdown.classList.remove("hidden");
}

function hideMentionDropdown() {
  mentionDropdown.classList.add("hidden");
}

function insertMention(user) {
  const cursorPos = messageInput.selectionStart;
  const value = messageInput.value;

  const before = value.slice(0, cursorPos).replace(/@([a-zA-Z0-9_]{2,})$/, "");
  const after = value.slice(cursorPos);

  const mentionText = `@${user.username} `;

  messageInput.value = before + mentionText + after;
  messageInput.focus();

  const newCursorPos = before.length + mentionText.length;
  messageInput.setSelectionRange(newCursorPos, newCursorPos);

  hideMentionDropdown();
}

function extractMentions(text) {
  const matches = [...text.matchAll(/@([a-zA-Z0-9_]+)/g)];
  const mentionedUids = [];

  matches.forEach(match => {
    const username = match[1].toLowerCase();
    const userEntry = Object.entries(allUsers).find(([uid, user]) => user.username?.toLowerCase() === username);
    if (userEntry) mentionedUids.push(userEntry[0]);
  });

  return [...new Set(mentionedUids)];
}

function highlightMentions() {
  const value = messageInput.value;
  const html = value.replace(/@([a-zA-Z0-9_]+)/g, (match) => { return `<span class="mention">${match}</span>`; });
  inputHighlight.innerHTML = html;
}

function showTopAlert(message, type = "tutorial") {
  if (timeoutActive && type !== "warning") return;
  activeAlert = type;
  topAlertBar.className = `top-alert ${type}`;
  topAlertBar.textContent = message;
  topAlertBar.classList.remove("hidden");
}

function hideTopAlert(force = false) {
  if (!force && timeoutActive) return;
  topAlertBar.classList.add("hidden");
  activeAlert = null;
}

function advanceTutorial() {
  const remaining = allUsers[accountId]?.tutorial ?? 0;
  if (remaining <= 0) return;

  const newRemaining = remaining - 1;
  usersRef.child(accountId).update({ tutorial: newRemaining });

  if (newRemaining <= 0) {
    hideTopAlert(true);
    return;
  }

  const steps = isMobile() ? mobileTutorial : desktopTutorial;
  const index = steps.length - newRemaining;

  showTopAlert(steps[index], "tutorial");
}

topAlertBar.onclick = () => {
  if (activeAlert === "tutorial") {
    advanceTutorial();
  } else if (activeAlert === "warning") {
    timeoutActive = false;
    hideTopAlert(true);
    checkTutorial();
  }
};

/* ================= SEPERATORS & INDICATORS ================= */
function updateIndicatorRow() {
  const row = document.getElementById("indicatorRow");
  const typingShow = document.getElementById("typingIndicator").classList.contains("show");
  const charShow = document.getElementById("charLimitIndicator").classList.contains("show");
  row.classList.toggle("active", typingShow || charShow);
}

function updateTypingIndicator(typingStates) {
  const el = document.getElementById("typingIndicator");
  const now = Date.now();

  const typingUsers = Object.entries(typingStates)
    .filter(([uid, data]) => uid !== accountId)
    .filter(([_, data]) => data.typing?.typing)
    .filter(([_, data]) => data.typing?.ts > now - 4000);

  if (typingUsers.length === 0) {
    el.classList.remove("show");
    return;
  }

  let text;
  if (typingUsers.length === 1) {
    text = `${typingUsers[0][1].username} is typing`;
  } else {
    text = `${typingUsers.length} people are typing`;
  }

  el.innerHTML = `
    <span>${text}</span>
    <div class="typing-dots">
      <span></span><span></span><span></span>
    </div>`;

  el.classList.add("show");
  updateIndicatorRow();
}

function updateCharLimitIndicator() {
  const len = messageInput.value.length;
  const remaining = MESSAGE_CHAR_LIMIT - len;

  charLimitEl.classList.remove("show", "warn", "limit");

  if (remaining <= CHAR_WARNING_AT) {
    if (remaining <= 0) {
      charLimitEl.textContent = `Character limit reached (${MESSAGE_CHAR_LIMIT})`;
      charLimitEl.classList.add("limit");
    } else {
      charLimitEl.textContent = `${remaining} characters remaining`;
      charLimitEl.classList.add("warn");
    }
    charLimitEl.classList.add("show");
  }

  updateIndicatorRow();
}

function updateNewMsgIndicator() {
  if (!newMsgIndicator) return;
  if (unreadCount <= 0) {
    hideNewMsgIndicator();
    return;
  }

  const textEl = document.getElementById("newMsgText");
  textEl.textContent = `↓ ${unreadCount} New Message${unreadCount > 1 ? "s" : ""} ↓`;
  newMsgIndicator.classList.add("show");
  newMsgIndicator.style.display = "block";
}

function hideNewMsgIndicator() {
  unreadCount = 0;
  if (!newMsgIndicator) return;

  newMsgIndicator.classList.remove("show");
  setTimeout(() => {
    if (newMsgIndicator.classList.contains("show"))
      newMsgIndicator.style.display = "none";
  }, 200);
}

function createLevelSeparator({ accountId, level, time }) {
  const el = document.createElement("div");
  el.className = "level-separator";
  el.dataset.timestamp = time;

  const username = allUsers[accountId]?.displayName || allUsers[accountId]?.username || "Unknown User";
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

function createDateSeparator(label) {
  const sep = document.createElement("div");
  sep.className = "date-separator";
  sep.dataset.label = label;
  sep.innerHTML = `<span class="date-line">${label}</span>`;
  return sep;
}

function checkDateSeparator(msgEl, timestamp) {
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

function createNewMessageSeparator(messageElement) {
  const separator = document.createElement("div");
  separator.className = "new-message-separator";
  separator.textContent = "New Messages";
  messagesEl.insertBefore(separator, messageElement);
}

function removeNewMessageSeparator() {
  const separator = messagesEl.querySelector(".new-message-separator");
  if (separator) separator.remove();
}

newMsgIndicator.onclick = () => {
  hideNewMsgIndicator();
  if (messagesViewport) messagesViewport.scrollTop = messagesViewport.scrollHeight;
};

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

function positionMenu(el, menuBtn, menu) {
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

    if (!sameAsPrev && !sameAsNext) { // CASE 1 - Single
      cur.classList.add("single");
      showMeta(cur);
      showIcon(cur);
      showTime(cur);
      continue;
    }

    if (!sameAsPrev && sameAsNext) { // CASE 2 - First in group
      cur.classList.add("first-in-group");
      showMeta(cur);
      hideIcon(cur);
      hideTime(cur);
      continue;
    }

    if (sameAsPrev && sameAsNext) { // CASE 3 - Middle in group
      cur.classList.add("grouped");
      hideMeta(cur);
      hideIcon(cur);
      hideTime(cur);
      continue;
    }

    if (sameAsPrev && !sameAsNext) {
      cur.classList.add("last-in-group"); // CASE 4 - Last in group
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

/* ================= MODERATIONS ================= */
function enableTimeoutUI(until) {
  if (isTimedOut) return;
  isTimedOut = true;

  document.body.classList.add("timed-out");

  inputBar.classList.add("hidden");
  timeoutBar.style.display = "flex";

  updateTimeoutText(until);

  clearTimeout(timeoutTimer);
  timeoutTimer = setInterval(() => updateTimeoutText(until), 1000);
}

function disableTimeoutUI() {
  if (!isTimedOut) return;
  isTimedOut = false;

  document.body.classList.remove("timed-out");

  inputBar.classList.remove("hidden");
  timeoutBar.style.display = "none";

  clearTimeout(timeoutTimer);
}

function updateTimeoutText(until) {
  const now = Date.now();
  let remaining = until - now;

  if (remaining <= 0) {
    disableTimeoutUI();
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  const timeLeft = hours > 0 ? `${hours}h ${minutes}m ${seconds}s` : `${minutes}m ${seconds}s`;
  const till = new Date(until).toLocaleString().replace(",", "");

  timeoutEndEl.innerHTML = `${timeLeft} <span class="timeout-till">(till ${till})</span>`;
}

function enableBannedUI() {
  const chat = document.getElementById("chat-area");
  const banned = document.getElementById("banned-screen");

  if (chat) chat.style.display = "none";
  banned.style.display = "flex";
  inputBar.style.display = "none";
}

function disableBannedUI() {
  const chat = document.getElementById("chat-area");
  const banned = document.getElementById("banned-screen");

  banned.style.display = "none"
  inputBar.style.display = "";
  if (chat) chat.style.display = "";
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

function applyHeat(amount) {
  const now = Date.now();
  const delta = now - heatSystem.lastAction;
  heatSystem.lastAction = now;

  if (delta < 2000) amount *= 2.3;
  else if (delta < 3000) amount *= 2.8;
  else if (delta < 4000) amount *= 1.2;

  heatSystem.heat = Math.min(heatSystem.maxHeat, heatSystem.heat + amount);
  checkHeatWarning();
  // updateHeatUI();
  
  if (heatSystem.heat >= 100) {
    triggerTimeout();
  }
}

function checkHeatWarning() {
  if (heatSystem.heat >= 80 && heatSystem.heat < 100) {
    timeoutActive = true;
    showTopAlert("⚠️ You're sending messages too fast. Slow down or you may be timed out.", "warning");
  } else {
    if (timeoutActive) {
      timeoutActive = false;
      hideTopAlert(true);
      checkTutorial();
    }
  }
}

function updateHeatUI() {
  const pct = Math.min(100, heatSystem.heat);
  document.getElementById("heat-fill").style.width = pct + "%";
  document.getElementById("heat-percent").textContent = Math.round(pct) + "%";
}

async function triggerTimeout() {
  let duration;
  if (heatSystem.heat < 140) duration = 60_000;
  else if (heatSystem.heat < 200) duration = 5 * 60_000; // 5 min
  else if (heatSystem.heat < 260) duration = 10 * 60_000; // 10 min
  else duration = 60 * 60_000;

  heatSystem.heat *= 0.8;
  const until = Date.now() + duration;
  heatSystem.lockedUntil = until;

  await usersRef.child(accountId).update({ timeout: until });

  moderationLogsRef.push({
    moderation: "spam",
    durations: duration,
    accountId,
    time: Date.now()
  });

  alert(`You have been timed out for ${Math.round(duration / 60000)} minute(s).`);
}

/* ================= SETTINGS HANDLER ================= */
function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty("--bg", theme.bg);
  root.style.setProperty("--backdrop", theme.backdrop);
  root.style.setProperty("--text1", theme.text1);
  root.style.setProperty("--text2", theme.text2);
  root.style.setProperty("--text3", theme.text3);
  root.style.setProperty("--text4", theme.text4);
  root.style.setProperty("--input", theme.input);
  root.style.setProperty("--inputArea", theme.inputArea);
  root.style.setProperty("--sidebar", theme.sidebar);
  root.style.setProperty("--actionMenu", theme.actionMenu);
  root.style.setProperty("--reactionBadge", theme.reactionBadge);
  root.style.setProperty("--mentionBg", theme.mentionBg);
  root.style.setProperty("--mentionBd", theme.mentionBd);
  root.style.setProperty("--button", theme.button);
  root.style.setProperty("--buttonHover", theme.buttonHover);
  root.style.setProperty("--buttonShadow", theme.buttonShadow);
  root.style.setProperty("--glassBorder", theme.glassBorder);
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
  renderIconPage();
  renderThemePage();
  updateGoogleUI(firebase.auth().currentUser);
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

  initAccountSettings();
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

async function renderThemePage() {
  themeTrack.innerHTML = "";

  const snap = await usersRef.child(accountId).child("chatTheme").once("value");
  const currentTheme = snap.val() || "dark";

  const start = themeIndex * THEMES_PER_PAGE;
  const pageThemes = THEME_LIST.slice(start, start + THEMES_PER_PAGE);

  pageThemes.forEach(theme => {
    const card = document.createElement("div");
    card.className = "theme-card";
    card.dataset.theme = theme.id;

    if (theme.id === currentTheme) {
      card.classList.add("selected");
    }

    card.innerHTML = `
      <img src="../Assets/Themes/${theme.img}">
      <div class="theme-name">${theme.label}</div>`;

    card.onclick = async () => {
      if (!THEMES[theme.id]) return;

      applyTheme(THEMES[theme.id]);
      await usersRef.child(accountId).update({ chatTheme: theme.id });

      if (theme.id === "stay") themeStatus.style.display = "flex";
      else themeStatus.style.display = "none";
      document.querySelectorAll(".theme-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
    };

    themeTrack.appendChild(card);
  });

  const maxPage = Math.ceil(THEME_LIST.length / THEMES_PER_PAGE) - 1;

  document.getElementById("themePrev").disabled = themeIndex <= 0;
  document.getElementById("themeNext").disabled = themeIndex >= maxPage;
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

themePrev.onclick = () => {
  if (themeIndex > 0) {
    themeIndex--;
    renderThemePage();
  }
};

themeNext.onclick = () => {
  const maxPage = Math.ceil(THEME_LIST.length / THEMES_PER_PAGE) - 1;
  if (themeIndex < maxPage) {
    themeIndex++;
    renderThemePage();
  }
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
  settingsBtn.addEventListener("click", () => {
    settingsOpened = true;
    initAccountSettings();
    settingsModal.classList.remove("hidden");
  });

  closeSettings.addEventListener("click", () => {
    settingsOpened = false;
    googleActionBtn.style.pointerEvents = "none";
    settingsModal.classList.add("hidden");
    if (settingsUpdate) location.reload();
  });

  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      settingsOpened = false;
      googleActionBtn.style.pointerEvents = "none";
      settingsModal.classList.add("hidden");
      if (settingsUpdate) location.reload();
    }
  });
});

/* ================= ACTION MENU HANDLER ================= */
function actionMenuHandler(el, id, data) {
  const menuBtn = el.querySelector(".menu-btn");
  const replyBtn = el.querySelector(".reply-btn");

  const menu = el.querySelector(".action-menu");
  const editBtn = menu.querySelector(".edit-option");
  const reactBtn = menu.querySelector(".react-option");
  const copyBtn = menu.querySelector(".copy-option");
  const deleteBtn = menu.querySelector(".delete-option");
  const reportBtn = menu.querySelector(".report-option");

  const isMe = data.senderId === accountId;
  const isRequester = data.requestedBy === accountId;
  const isBotMessage = !!data.requestedBy;

  const canModify = isMe && canModifyMessage(data);
  const canDelete = (isMe && canModifyMessage(data)) || isRequester;

  menuBtn.onclick = (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.contains("open");
    closeAllMenus({ except: isOpen ? null : menu });
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) positionMenu(el, menuBtn, menu);
  };

  replyBtn.onclick = () => {
    startReply(el);
    closeMenu(menu);
  };

  if (canModify) {
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
  
  copyBtn.onclick = async () => {
    await copyMessageText(data.text);
    closeMenu(menu);
  };
  
  if (canDelete) {
    deleteBtn.onclick = () => {
      messagesRef.child(id).remove().catch(console.error);
      closeMenu(menu);
    };
  } else {
    deleteBtn.style.display = "none";
  }

  if (isBotMessage) {
    reportBtn.style.display = "none";
  } else if (!isMe) {
    reportBtn.onclick = () => {
      openReportPage({ id, senderId: data.senderId, text: data.text });
      closeMenu(menu);
    };
  } else {
    reportBtn.style.display = "none";
  }
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

function mobileActionMenuHandler(action, msgEl) {
  const id = msgEl.dataset.id;
  const msgData = messages[id];
  if (!msgData) return;
  const isMe = msgData.senderId === accountId;
  const isRequester = msgData.requestedBy === accountId;
  const isBotMessage = !!msgData.requestedBy;

  const canModify = isMe && canModifyMessage(msgData);
  const canDelete = (isMe && canModifyMessage(msgData)) || isRequester;

  switch (action) {
    case "reply":
      startReply(msgEl);
      break;
    case "edit":
      if (canModify) {
        beginEditMessage(id);
      }
      break;
    case "react":
      openReactionPicker(msgEl)
      break;
    case "copy":
      copyMessageText(msgData.text);
      break;
    case "delete":
      if (canDelete) messagesRef.child(id).remove().catch(console.error);
      break;
    case "report":
      if (isBotMessage) reportBtn.style.display = "none";
      else if (!isMe) openReportPage({ id, senderId: msgData.senderId, text: msgData.text });
      else reportBtn.style.display = "none";
      break;
  }
  closeMobileActionMenu();
}

function openMobileActionMenu(msgEl) {
  if (suppressNextActionMenu) {
    suppressNextActionMenu = false;
    return;
  }

  currentMobileMsg = msgEl;
  const id = msgEl.dataset.id;
  const msgData = messages[id];
  if (!msgData) return;

  const isMe = msgData.senderId === accountId;
  const isRequester = msgData.requestedBy === accountId;

  const canModify = isMe && canModifyMessage(msgData);
  const canDelete = (isMe && canModifyMessage(msgData)) || isRequester;

  previewName.textContent = msgData.name || "User";
  previewText.textContent = msgData.text;

  sheet.querySelector('[data-action="edit"]').style.display = canModify ? "flex" : "none";
  sheet.querySelector('[data-action="delete"]').style.display = canDelete ? "flex" : "none";
  sheet.querySelector('[data-action="report"]').style.display = isMe ? "none" : "flex";

  sheet.classList.add("open");
  backdrop.classList.add("show");

  document.body.style.overflow = "hidden";
}

function closeMobileActionMenu() {
  sheet.classList.remove("open");
  backdrop.classList.remove("show");
  document.body.style.overflow = "";
  currentMobileMsg = null;
}

function canModifyMessage(msg) {
  if (!msg?.time) return false;
  return Date.now() - msg.time <= EDIT_DELETE_LIMIT;
}

async function copyMessageText(text) {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
  } catch (e) {
    console.error("[COPY] Failed to copy message:", e);
  }
}

sheet.querySelectorAll(".sheet-option").forEach(opt => {
  opt.addEventListener("click", () => {
    if (!currentMobileMsg) return;
    mobileActionMenuHandler(opt.dataset.action, currentMobileMsg);
  });
});

sheet.querySelector(".sheet-cancel").addEventListener("click", closeMobileActionMenu);
backdrop.addEventListener("click", closeMobileActionMenu);

/* ================= REACTIONS & PICKER ================= */
if (picker && picker.parentNode !== document.body) {
  document.body.appendChild(picker);
  picker.classList.remove("hidden");
  picker.style.display = "none";
}

if (picker) {
  picker.querySelectorAll(".react").forEach(el => {
    el.onclick = (ev) => {
      ev.stopPropagation();

      if (!pickerTarget) return closeReactionPicker();
      if (el.classList.contains("react-more")) {
        if (reactionEmoji && emojiMenu.classList.contains("open")) {
          emojiMenu.classList.remove("open");
          emojiReactionTarget = null;
          reactionEmoji = false;
          return;
        }

        emojiReactionTarget = pickerTarget;
        reactionEmoji = true;
        openEmojiMenu(pickerTarget);

        if (isMobile) closeReactionPicker();
        return;
      }

      toggleReaction(pickerTarget, el.textContent);
      closeReactionPicker();
    };
  });
}

function badgeMsgEl(badge) {
  return ( badge.closest(".msg") || badge.parentNode?.closest?.(".msg") || badge.parentElement?.closest?.(".msg") || null );
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

  if (top < margin) top = rect.bottom + 10;
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

function closeReactionPicker() {
  if (!picker) return;

  picker.classList.remove("show");
  picker.style.pointerEvents = "none";

  setTimeout(() => {
    if (!picker.classList.contains("show"))
      picker.style.display = "none";
  }, 150);

  pickerTarget = null;
}

function renderReactions(msgEl, data) {
  const container = msgEl.querySelector(".reaction-badges");
  if (!container) return;

  container.innerHTML = "";
  if (!data?.reactions) return;

  Object.keys(data.reactions).forEach(emoji => {
    const usersObj = data.reactions[emoji];
    if (!usersObj) return;

    const users = Object.keys(usersObj);
    if (!users.length) return;

    const isMine = !!usersObj[accountId];

    const badge = document.createElement("div");
    badge.className = "reaction-badge" + (isMine ? " mine" : "");
    badge.dataset.emoji = emoji;
    badge.innerHTML = `${emoji} <span>${users.length}</span>`;

    container.appendChild(badge);
  });
}

function toggleReaction(msgEl, emoji) {
  const msgId = msgEl.dataset.id;
  const emojiRef = messagesRef.child(msgId).child("reactions").child(emoji);
  if (isTimedOut) return;

  let heat = 6;
  if (heatSystem.heat > 80) heat *= 1.4;
  if (heatSystem.heat > 150) heat *= 1.7;

  emojiRef.child(accountId).once("value").then(snap => {
    if (snap.exists()) {
      emojiRef.child(accountId).remove().then(() => {
        emojiRef.once("value").then(s => {
          if (!s.exists()) emojiRef.remove();
        });
        applyHeat(heat);
      });
    } else {
      emojiRef.child(accountId).set(true);
      applyHeat(heat);
    }
  });
}

function reactionListener(msgId) {
  if (reactionListeners.has(msgId)) return;
  reactionListeners.add(msgId);

  const reactionsRef = messagesRef.child(msgId).child("reactions");

  reactionsRef.on("value", snap => {
    const msg = messages[msgId];
    if (!msg) return;
    msg.reactions = snap.val() || null;

    const el = domCache[msgId];
    if (!el) return;

    renderReactions(el, msg);
  });
}

function showReactionTooltip(badge, msgData, emoji) {
  const usersObj = msgData.reactions?.[emoji];
  if (!usersObj) return;

  const usernames = Object.keys(usersObj)
    .map(uid => { return `<b>${allUsers?.[uid]?.username || "Unknown User"}</b>` })
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

  const msgEl = badgeMsgEl(badge);
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

/* ================= EMOJI MENU ================= */
function renderAllEmojis(search = "") {
  emojiBody.innerHTML = "";
  const searchLower = search.toLowerCase();

  Object.keys(EMOJI_DATA).forEach(category => {
    const section = document.createElement("div");
    section.id = "section-" + category;

    const title = document.createElement("div");
    title.className = "emoji-section-title";
    title.textContent = category;

    const grid = document.createElement("div");
    grid.className = "emoji-grid";

    EMOJI_DATA[category]
      .filter(e => e.name.includes(searchLower) || e.char.includes(searchLower))
      .forEach(e => {
        const span = document.createElement("span");
        span.className = "emoji-item";
        if (category === "Text Faces") span.classList.add("text-face");

        span.textContent = e.char;
        span.title = e.name;

        span.onclick = () => {
          if (emojiReactionTarget) {
            toggleReaction(emojiReactionTarget, e.char);

            emojiReactionTarget = null;
            reactionEmoji = false;

            emojiMenu.classList.remove("open");
            closeReactionPicker();

            return;
          }

          insertAtCursor(messageInput, e.char);
          emojiMenu.classList.remove("open");
        };

        grid.appendChild(span);
      });

    if (grid.children.length > 0) {
      section.appendChild(title);
      section.appendChild(grid);
      emojiBody.appendChild(section);
    }
  });
}

function openEmojiMenu(target = null) {
  emojiReactionTarget = target;
  if (emojiReactionTarget) emojiMenu.classList.add("reaction-mode");
  else emojiMenu.classList.remove("reaction-mode");
  emojiMenu.classList.toggle("open");
}

footerButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    const section = document.getElementById("section-" + category);
    if (!section) return;
    footerButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    emojiBody.scrollTo({top: section.offsetTop - 60, behavior: "smooth"});
  });
});

emojiBody.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("[id^='section-']");
  let closestSection = null;
  let smallestDistance = Infinity;

  sections.forEach(section => {
    const distance = Math.abs(section.offsetTop - emojiBody.scrollTop);
    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestSection = section;
    }
  });

  if (closestSection) {
    const currentCategory = closestSection.id.replace("section-","");
    footerButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === currentCategory);
    });
  }
});

emojiSearch.addEventListener("input", e => {
  renderAllEmojis(e.target.value);
});

emojiBtn.onclick = (e) => {
  e.stopPropagation();
  openEmojiMenu(null);
};

document.addEventListener("click", e => {
  if (!emojiMenu.contains(e.target) && e.target !== emojiBtn) {
    emojiMenu.classList.remove("open");
  }
});

function insertAtCursor(input, text) {
  const start = input.selectionStart;
  const end = input.selectionEnd;
  input.value = input.value.substring(0, start) + text + input.value.substring(end);
  input.selectionStart = input.selectionEnd = start + text.length;
  input.focus();
}

/* ================= REPORT HANDLERS ================= */
function openReportPage(message) {
  activeReport = message;
  selectedReason = null;
  customReasonInput.value = "";
  reportStatusEl.textContent = "";
  customReasonInput.classList.add("hidden");
  reportSubmit.disabled = false; 

  document.querySelectorAll(".report-option").forEach(b => b.classList.remove("selected"));

  reportModal.classList.remove("hidden");
  reportBackdrop.classList.add("show");
}

function closeReportPage() {
  reportModal.classList.add("hidden");
  reportBackdrop.classList.remove("show");
  activeReport = null;
}

async function canSubmitReport() {
  const now = Date.now();
  const since = now - REPORT_WINDOW;

  const snap = await moderationLogsRef.orderByChild("time").startAt(since).once("value");

  let count = 0;
  let oldestTime = null;

  snap.forEach(child => {
    const log = child.val();

    if (log.moderation === "report" && log.reporterId === accountId) {
      count++;
      if (!oldestTime || log.time < oldestTime) oldestTime = log.time;
    }
  });

  if (count >= REPORT_LIMIT && oldestTime) {
    reportStatusEl.textContent = `Too many reports. Please try again later.`;
    reportStatusEl.classList.remove("report-success");
    return false;
  }

  return true;
}

reportSubmit.onclick = async () => {
  if (!activeReport || !selectedReason) {
    reportStatusEl.textContent = "Please select a reason.";
    return;
  }

  const finalReason = selectedReason === "Other" ? customReasonInput.value.trim() : selectedReason;

  if (!finalReason) return;
  reportStatusEl.textContent = "";

  const allowed = await canSubmitReport();
  if (!allowed) return;

  await moderationLogsRef.push({
    moderation: "report",
    reporterId: accountId,
    messageId: activeReport.id,
    reason: finalReason,
    time: Date.now()
  });

  reportStatusEl.innerHTML = "Report Sent Successfully.<br>Admin will review the message.";
  reportStatusEl.classList.add("report-success");
  reportSubmit.disabled = true;

  console.log("[REPORT] Report sent successfully.")
  setTimeout(() => { closeReportPage(); }, 3000);
};

reportBackdrop.onclick = closeReportPage;
reportCancel.onclick = closeReportPage;

document.querySelectorAll(".report-option").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".report-option").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");

    selectedReason = btn.dataset.reason;

    if (selectedReason === "Other") {
      customReasonInput.classList.remove("hidden");
    } else {
      customReasonInput.classList.add("hidden");
      customReasonInput.value = "";
    }
  };
});

/* ================= EVENT HANDLERS ================= */
function getBadgeTarget(target) {
  return target.closest(".badge-icon, .reaction-badge");
}

function isBadge(el) {
  return el?.classList.contains("badge-icon");
}

function isReaction(el) {
  return el?.classList.contains("reaction-badge");
}

document.addEventListener("mouseover", (e) => {
  if (!isDesktop()) return;

  const el = getBadgeTarget(e.target);
  if (!el) {
    hideBadgeTooltip();
    hideReactionTooltip();
    return;
  }

  if (isBadge(el)) {
    const name = el.dataset.badge;
    if (!name) return;

    clearTimeout(badgeTooltipTimer);
    badgeTooltipTimer = setTimeout(() => showBadgeTooltip(el, name), 500);
  }

  if (isReaction(el)) {
    const emoji = el.dataset.emoji;
    const msgEl = badgeMsgEl(el);
    const msg = messages[msgEl?.dataset.id];
    if (!msg) return;

    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(() => showReactionTooltip(el, msg, emoji), 250);
  }
});

document.addEventListener("mouseout", (e) => {
  if (!e.relatedTarget || !badgeTooltip.contains(e.relatedTarget)) {
    hideBadgeTooltip();
  }
  if (!e.relatedTarget || !tooltip.contains(e.relatedTarget)) {
    hideReactionTooltip();
  }
});

document.addEventListener("pointerdown", (ev) => {
  if (!isMobile()) return;

  const el = getBadgeTarget(ev.target);
  if (!el) return;

  badgePress.badge = el;
  badgePress.long = false;
  badgePress.startedAt = Date.now();

  badgePress.timer = setTimeout(() => {
    badgePress.long = true;

    if (isBadge(el)) {
      showBadgeTooltip(el, el.dataset.badge);
    } else if (isReaction(el)) {
      const msgEl = badgeMsgEl(el);
      const msg = messages[msgEl?.dataset.id];
      if (msg) showReactionTooltip(el, msg, el.dataset.emoji);
    }
  }, 350);
}, { passive: true });

document.addEventListener("pointerup", (ev) => {
  clearTimeout(badgePress.timer);

  const el = ev.target.closest(".reaction-badge");
  if (!el || el !== badgePress.badge) {
    badgePress.badge = null;
    return;
  }

  if (!badgePress.long) {
    const msgEl = badgeMsgEl(el);
    if (msgEl) toggleReaction(msgEl, el.dataset.emoji);
  }

  badgePress.badge = null;
});

document.addEventListener("touchstart", (e) => {
  if (e.target.closest(".reaction-badge") || e.target.closest(".badges") || e.target.closest(".meta") || e.target.closest(".profile-icon")) {
    e.stopPropagation();
  }
}, { passive: true });

document.addEventListener("click", (e) => {
  const target = e.target;

  if (isDesktop()) {
    const reaction = target.closest(".reaction-badge");
    if (reaction) {
      e.stopPropagation();
      suppressNextActionMenu = true;

      const msgEl = badgeMsgEl(reaction);
      if (msgEl) toggleReaction(msgEl, reaction.dataset.emoji);
      return;
    }
  }

  if (!target.closest(".badge-selector")) {
    badgeDropdown.classList.add("hidden");
  }

  if (!target.closest("#reaction-picker") && !target.closest(".action-menu")) {
    closeReactionPicker?.();
    closeAllMenus?.();
  }
}, true);

window.addEventListener("scroll", () => {
  hideBadgeTooltip();
  hideReactionTooltip();
}, { passive: true });

messagesViewport?.addEventListener("scroll", () => {
  if (messagesViewport.scrollTop < LOAD_THRESHOLD && !isLoadingOlder) {
    loadOlderMessages();
  }

  const distanceFromBottom = messagesViewport.scrollHeight - messagesViewport.scrollTop - messagesViewport.clientHeight;
  const atBottom = distanceFromBottom < 20;
  userIsAtBottom = atBottom;

  if (atBottom) {
    hideNewMsgIndicator();
    markMessagesAsRead();
    jumpBtn?.classList.remove("show");
  } else {
    if (distanceFromBottom > 150) jumpBtn?.classList.add("show");
    else jumpBtn?.classList.remove("show");
  }

  hasScrolledSinceTouch = true;
  clearTimeout(pressTimer);
  clearTimeout(tooltipPressTimer);

  hideReactionTooltip();
  hideBadgeTooltip();
  closeReactionPicker();

  if (reactionEmoji && !isMobile) {
    emojiMenu.classList.remove("open");
    emojiReactionTarget = null;
    reactionEmoji = false;
  }
}, { passive: true });

window.addEventListener("resize", () => {
  if (resizeTimer) cancelAnimationFrame(resizeTimer);
  resizeTimer = requestAnimationFrame(() => {
    document.querySelectorAll(".msg").forEach(positionActions);
    document.querySelectorAll(".msg").forEach(positionIcons);
  });
});

function longPressListener(msgEl) {
  if (!msgEl) return;
  let pressTimer;

  const start = (e) => {
    hasScrolledSinceTouch = false;
    if ([".reaction-badge",".badges",".badge",".meta",".meta *",".profile-icon"].some(sel => e.target.closest(sel))) return;

    if (!(window.innerWidth <= 900)) return;
    if (hasScrolledSinceTouch) return;
    try { e.preventDefault(); } catch (err) { }

    if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
    pressTimer = setTimeout(() => { openMobileActionMenu(msgEl); }, 420);
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

function swipeToReply(msgEl) {
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

function chatSideBar() {
  if (!sidebar || !toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    if (isMobile()) {
      const isOpen = sidebar.classList.toggle("open");
      if (backdrop) backdrop.classList.toggle("show", isOpen);
    } else {
      sidebar.classList.toggle("collapsed");
      sidebar.classList.remove("open");
      if (backdrop) backdrop.classList.remove("show");
    }
  });

  if (backdrop) {
    backdrop.addEventListener("click", () => {
      sidebar.classList.remove("open");
      backdrop.classList.remove("show");
    });
  }

  window.addEventListener("resize", () => {
    if (!isMobile()) {
      sidebar.classList.remove("open");
      if (backdrop) backdrop.classList.remove("show");
    }

    if (isMobile()) {
      sidebar.classList.remove("collapsed");
    }
  });
}

jumpBtn?.addEventListener("click", () => {
  messagesViewport.scrollTo({
    top: messagesViewport.scrollHeight,
    behavior: "smooth"
  });

  jumpBtn.classList.remove("show");
  hideNewMsgIndicator();
});

document.addEventListener("DOMContentLoaded", chatSideBar);

setInterval(() => {
  if (heatSystem.heat > 0) {
    heatSystem.heat = Math.max(0, heatSystem.heat - heatSystem.decayRate);
    checkHeatWarning();
    // updateHeatUI();
  }
}, 1000);

setInterval(() => {
  const timeEls = Array.from(document.querySelectorAll(".time"));
  const last = timeEls.slice(-120);
  for (const el of last) {
    const ts = Number(el.dataset.timestamp);
    if (!ts) continue;
    if (!el.classList.contains("hidden")) el.textContent = timeAgo(ts);
  }
}, 30000);