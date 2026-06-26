const GameConfigs = {
    "SHU": { min: 2, max: 10, default: 4 },
    "Blackjack": { min: 2, max: 7, default: 4 },
    "Poker": { min: 2, max: 8, default: 6 },
    "Big2": { min: 2, max: 4, default: 4 },
    "Mahjong": { min: 4, max: 4, default: 4 }
    // "Speed": { min: 2, max: 2, default: 2 }
};

const TUTORIAL_DATA = {
  "mahjong": {
    title: "MAHJONG (香港麻雀)",
    steps: [
      "<b>Objective:</b> Build a 'Legal Hand' of 14 tiles consisting of 4 sets (3 tiles each) and 1 Pair (Eye).",
      "<b>Combinations:</b> Pongs (3 identical), Chows (3 in sequence, same suit), Kongs (4 identical).",
      "<b>Flow:</b> Draw one from the wall, then discard one from your hand. You can 'steal' others' discards to Chow/Pong/Kong.<br>*Chow only applies to discards from your previous player",
      "<b>Mahjong:</b> You must meet the <b>Minimum Fan</b> requirement set by the host to declare a win.",
      "<b>Bonus Tiles:</b> Flowers and Seasons give extra <b>Fan</b>. If you draw one, click 'Replace' to draw a new playable tile from the back of the wall."
    ],
    fanTable: [
      { pattern: "Common Hand (平糊)", fan: "1", desc: "4 sequences (Chows) and a non-dragon pair." },
      { pattern: "Self-Draw (自摸)", fan: "1", desc: "Drawing the 14th winning tile yourself from the wall." },
      { pattern: "Winds (風刻)", fan: "1", desc: "Triplet of your Seat Wind or the current Prevailing Wind." },
      { pattern: "Dragon (番子)", fan: "1", desc: "A triplet of Red, Green, or White Dragon tiles." },
      { pattern: "All Pongs (對對糊)", fan: "3", desc: "Hand consisting only of Triplets/Kongs and one pair." },
      { pattern: "Mixed Flush (混一色)", fan: "3", desc: "Tiles from only one suit + any Honor (Wind/Dragon) tiles." },
      { pattern: "Small Dragons (小三元)", fan: "3", desc: "2 Dragon triplets and a pair of the third Dragon." },
      { pattern: "Pure Flush (清一色)", fan: "7", desc: "All 14 tiles are from the same suit (Dots, Bamboo, or Characters)." },
      { pattern: "Great Dragons (大三元)", fan: "8", desc: "Three triplets of Red, Green, and White Dragons." },
      { pattern: "Small Winds (小四喜)", fan: "8", desc: "3 Wind triplets and a pair of the fourth Wind." },
      { pattern: "Great Winds (大四喜)", fan: "10", desc: "Four triplets of East, South, West, and North Winds." },
      { pattern: "Thirteen Orphans (十三么)", fan: "10", desc: "One of each terminal (1, 9) and Honor tile, plus one pair." },
      { pattern: "Jewel Dragons (翡翠/紅寶)", fan: "10", desc: "A Pure Flush containing a triplet of the matching Dragon." }
    ]
  },
  "big2": {
    title: "BIG TWO",
    steps: [
      "<b>Objective:</b> Be the first to empty your hand. Remaining cards in others' hands become penalty points.",
      "<b>Power Ranking:</b> The <b>2 of Spades</b> is the strongest card. The <b>3 of Diamonds</b> is the weakest.",
      "<b>Playing:</b> You must play a card or combo higher than the previous player. If you can't, you must 'Pass'.",
      "<b>Combos:</b> Singles, Pairs, or 5-card Poker hands (Straight, Flush, Full House, 4-of-a-kind, Straight Flush).",
      "<b>End Condition:</b> Game ends when one of the players have over 18 penalty points, whoever has the least wins."
    ]
  },
  "poker": {
    title: "POKER",
    steps: [
      "<b>Objective:</b> Win the chips in the 'Pot' by having the best 5-card hand or forcing others to fold.",
      "<b>Setup:</b> You get 2 private cards. 5 community cards are dealt in the center (Flop, Turn, River).",
      "<b>Actions:</b> <b>Check</b> (stay in), <b>Call</b> (match bet), <b>Raise</b> (increase bet), or <b>Fold</b> (quit the round).",
      "<b>Ranks:</b> Royal Flush > Straight Flush > 4-of-a-Kind > Full House > Flush > Straight > 3-of-a-Kind > 2-Pair > Pair.",
      "<b>Showdown:</b> If multiple players remain after the last card, the best hand takes the entire pot."
    ]
  },
  "blackjack": {
    title: "BLACKJACK (21)",
    steps: [
      "<b>Objective:</b> Beat all player's hand total without going over 21 in a best of three.",
      "<b>Card Values:</b> Number cards are face value. J, Q, K are 10. Aces are either 1 or 11.",
      "<b>Your Turn:</b> <b>Hit</b> to take another card, or <b>Stand</b> to keep your current total.",
      "<b>Bust:</b> If your total exceeds 21, you lose instantly.",
      "<b>Dealer Rules:</b> The dealer must 'Hit' until they reach at least 17. Use this to your advantage!"
    ]
  },
  "shu": {
    title: "SHU (MASTER)",
    steps: [
      "<b>Objective:</b> Clear your hand by matching the center pile.",
      "<b>Gameplay:</b> Play your cards as fast as you can if they match the center card's colour or number.",
      "<b>Function Cards:</b> Function cards can be used to intensify gameplay, such as reversing order, skipping players, change colour, or add extra cards to the next person drawing.",
      "<b>SHU Button:</b> When you have one card left, you <b>must</b> click the 'SHU' button before other players challenge you (+2 cards penalty for successful challenges).",
      "<b>Penalty:</b> If you are too slow, another player might clear their hand and shout first, leaving you with a loss."
    ]
  }
};

const MJ_TILES = {
  bamboo: ['🀐', '🀑', '🀒', '🀓', '🀔', '🀕', '🀖', '🀗', '🀘'].map(t => t + '\uFE0E'),
  dots: ['🀙', '🀚', '🀛', '🀜', '🀝', '🀞', '🀟', '🀠', '🀡'].map(t => t + '\uFE0E'),
  chars: ['🀇', '🀈', '🀉', '🀊', '🀋', '🀌', '🀍', '🀎', '🀏'].map(t => t + '\uFE0E'),
  winds: ['🀀', '🀁', '🀂', '🀃'].map(t => t + '\uFE0E'),
  dragons: ['🀄︎', '🀅', '🀆'].map(t => t + '\uFE0E'),
  flowers: ['🀦', '🀧', '🀨', '🀩'].map(t => t + '\uFE0E'),
  seasons: ['🀢', '🀣', '🀤', '🀥'].map(t => t + '\uFE0E')
};
const MJ_SORT_ORDER = [
    ...MJ_TILES.bamboo, 
    ...MJ_TILES.dots, 
    ...MJ_TILES.chars, 
    ...MJ_TILES.winds, 
    ...MJ_TILES.dragons, 
    ...MJ_TILES.flowers, 
    ...MJ_TILES.seasons
];

const COLORS = ['red', 'blue', 'green', 'yellow'];
const VALUES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Skip', 'Reverse', '+2'];
const PRERANKMAP = { '3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':11,'Q':12,'K':13,'A':14,'2':15 };
const PRESUITMAP = { 'Diamonds':1, 'Clubs':2, 'Hearts':3, 'Spades':4 };

const PROFILE_ICONS = [
  "zendra_blue", "zendra_gray", "zendra_green", "zendra_orange", "zendra_pink", "zendra_purple", "zendra_red", "zendra_turquoise",
  "city_home", "city_hongkong", "city_toronto", "city_london", "city_shanghai", "city_paris", "city_seoul", "city_washington",
  "ai_cyberpunk", "ai_urban", "ai_rain", "ai_town", "ai_droid", "ai_robot", "ai_fox", "ai_firework",
  "others_zendra1", "others_zendra2", "others_zen", "others_cat", "others_lasers", "others_snow", "others_spark", "others_spiral"
];

const GameLogics = {
  shu: {
    getInitialState: (players) => {
      let deck = shuffle(createShuDeck());
      const privateData = {};
      const handCounts = {};

      players.forEach(uid => {
        privateData[uid] = { hand: deck.splice(0, 7) };
        handCounts[uid] = 7;
      });

      let topCard;
      do {
        if (deck.length === 0) deck = shuffle(createShuDeck());
        topCard = deck.pop();
      } while (isNaN(topCard.value) || topCard.color === "black");

      return {
        public: {
          topCard,
          discardPile: [topCard],
          turnIndex: 0,
          direction: 1,
          drawStack: 0,
          handCounts
        },
        private: privateData,
        deck
      };
    },

    render: (gameState) => {
      if (isResultShown) return; 
      if (!gameState.public || !gameState.private) return;
      const room = rooms[selectedRoomId];
      if (!room) return;

      lobbyUI.style.display = "none";
      document.getElementById("shu-table").style.display = "flex";

      const players = gameState.public.playerOrder;
      const myIndex = players.indexOf(accountId);

      const oppSlots = {
        top: document.getElementById("shu-opp-top"),
        left: document.getElementById("shu-opp-left"),
        right: document.getElementById("shu-opp-right")
      };

      Object.values(oppSlots).forEach(s => { s.innerHTML = ""; s.style.display = "none"; });
      const otherPlayers = [];
      for (let i = 1; i < players.length; i++) {
        otherPlayers.push(players[(myIndex + i) % players.length]);
      }

      if (otherPlayers.length === 1) {
        renderShuOpponent(oppSlots.top, otherPlayers[0], gameState);
      } else if (otherPlayers.length === 2) {
        renderShuOpponent(oppSlots.left, otherPlayers[0], gameState);
        renderShuOpponent(oppSlots.right, otherPlayers[1], gameState);
      } else {
        renderShuOpponent(oppSlots.left, otherPlayers[0], gameState);
        renderShuOpponent(oppSlots.top, otherPlayers[1], gameState);
        renderShuOpponent(oppSlots.right, otherPlayers[2], gameState);
      }

      const discard = document.getElementById("discard-pile");
      const topCard = gameState.public.topCard;
      const isLongValue = topCard.value.length > 5 ? "small-text" : "";
      discard.innerHTML = `
        <div class="shu-card black messy-card messy-3"></div>
        <div class="shu-card ${topCard.color} messy-card messy-2"></div>
        <div class="shu-card ${topCard.color} messy-card messy-1"></div>
        <div class="shu-card ${topCard.color}" style="z-index:10;"><span class="${isLongValue}">${topCard.value}</span></div>`;

      const handDiv = document.getElementById("my-shu-hand");
      handDiv.innerHTML = "";
      (gameState.private[accountId]?.hand || []).forEach((card, i) => {
        const c = document.createElement("div");
        c.className = `shu-card ${card.color}`;
        const isLongText = card.value.length > 5 ? "small-text" : "";
        c.innerHTML = `<span class="${isLongText}">${card.value}</span>`;
        c.onclick = () => handleShuAction("playCard", { index: i });
        handDiv.appendChild(c);
      });

      const drawStack = gameState.public.drawStack || 0;
      const deckLabel = document.getElementById("draw-label");

      if (drawStack > 0) {
        deckLabel.innerText = `DRAW +${drawStack}`;
        deckLabel.style.color = "#ff3e3e";
      } else {
        deckLabel.innerText = "DRAW";
        deckLabel.style.color = "white";
      }

      const myCount = gameState.public.handCounts[accountId];
      const myShu = gameState.public.shuFlags?.[accountId];
      const shuBtn = document.getElementById("shu-shout");

      if (myCount === 1 && !myShu) shuBtn.classList.add("danger-glow");
      else shuBtn.classList.remove("danger-glow");

      const current = getCurrentPlayer(gameState);
      const isCurrentPlayerOnline = room.players[current] === true;
      const skipContainer = document.getElementById("shu-skip-button");
      if (room.hostId === accountId && !isCurrentPlayerOnline && room.status === "playing") skipContainer.style.display = "block";
      else skipContainer.style.display = "none";

      document.getElementById("current-turn-name").innerText = current === accountId ? "YOUR TURN" : `${allUsers[current]?.displayName || "Player"}'s turn`;

      const winnerId = gameState.public.winner;
      const isGameOver = gameState.public.status === "ended" || (room && room.status === "ended");
      if (isGameOver && winnerId && !isResultShown) {
        let resultDescription = "";

        const leaderboard = gameState.public.playerOrder.map(uid => ({
          uid,
          name: allUsers[uid]?.displayName || "Player",
          remaining: gameState.public.handCounts?.[uid] || 0
        })).sort((a, b) => a.remaining - b.remaining);

        const listHtml = leaderboard.map((player, index) => {
          const isWinner = player.uid === winnerId;

          return `
            <div class="result-row ${isWinner ? 'winner-row' : ''}">
              <div class="rank">#${index + 1}</div>
              <div class="name">${player.name}</div>
              <div class="score"><span class="shu-cards">${player.remaining}</span><span class="pts-label">CARDS</span></div>
            </div>`; }).join('');

        resultDescription = `
          <div class="shu-leaderboard">
            <div class="leaderboard-header">CARDS REMAINING</div>
            ${listHtml}
          </div>`;

        showGameResults(winnerId, resultDescription);
      }
    }
  },

  blackjack: {
    getInitialState: (players) => {
      let deck = createStandardDeck();
      const publicData = {
        playerOrder: players,
        turnIndex: 0,
        dealerHand: [deck.pop(), deck.pop()],
        hands: {},
        handCounts: {},
        roundPoints: {},
        isDealerTurn: false,
        currentRound: 1,
        status: "playing"
      };

      players.forEach(uid => {
        const startHand = [deck.pop(), deck.pop()];
        publicData.hands[uid] = startHand;
        publicData.handCounts[uid] = 2;
        publicData.roundPoints[uid] = 0;
      });

      const firstPlayerHand = publicData.hands[players[0]];
      if (calculateBJScore(firstPlayerHand) === 21) {
        publicData.turnIndex = 1;
        if (publicData.turnIndex >= players.length) {
          publicData.isDealerTurn = true;
        }
      }

      return { public: publicData, private: {}, deck };
    },

    render: (gameState) => {
      const pub = gameState.public;
      const room = rooms[selectedRoomId];
      if (!room) return;
      const isHost = room.hostId === accountId;

      const dealerDiv = document.getElementById("dealer-hand");
      dealerDiv.innerHTML = pub.dealerHand.map((card, i) => {
        const isHidden = (i === 1 && !pub.isDealerTurn);
        return createBJCardHTML(card, isHidden);
      }).join('');

      const dScoreEl = document.getElementById("dealer-score-val");
      dScoreEl.innerText = pub.isDealerTurn ? calculateBJScore(pub.dealerHand) : "?";

      const myHand = pub.hands[accountId] || [];
      const myHandDiv = document.getElementById("my-bj-hand");
      myHandDiv.innerHTML = myHand.map(card => createBJCardHTML(card)).join('');

      const myScore = calculateBJScore(myHand);
      document.getElementById("my-score-val").innerText = myScore;

      const points = pub.roundPoints[accountId] || 0;
      const pointsHtml = `${"●".repeat(points)}${"○".repeat(3 - points)}`;
      document.getElementById("my-points-val").innerText = pointsHtml;

      const leftGroup = document.getElementById("bj-opponents-left");
      const rightGroup = document.getElementById("bj-opponents-right");

      if (leftGroup && rightGroup) {
        leftGroup.innerHTML = "";
        rightGroup.innerHTML = "";

        const myIndex = pub.playerOrder.indexOf(accountId);

        pub.playerOrder.forEach((uid, index) => {
          if (uid === accountId) return;

          const oppDiv = document.createElement("div");
          oppDiv.className = "bj-opp-slot";
          renderBjOpponent(oppDiv, uid, gameState);

          if (index < myIndex) {
            leftGroup.appendChild(oppDiv);
          } else {
            rightGroup.appendChild(oppDiv);
          }
        });
      }

      const currentUid = pub.playerOrder[pub.turnIndex];
      const isMyTurn = currentUid === accountId && !pub.isDealerTurn;
      const turnMsg = document.getElementById("bj-turn-name");
      
      turnMsg.innerText = isMyTurn ? "YOUR TURN" : `${allUsers[currentUid]?.displayName || 'Dealer'}'s Turn`;
      document.getElementById("bj-controls").style.display = (isMyTurn) ? "flex" : "none";

      if (pub.status === "playing") {
        bjStatusMsg.innerText = `ROUND ${pub.currentRound || 1}`;
        bjStatusMsg.style.color = "var(--accent)";
      } else if (pub.status === "round_over") {
        bjStatusMsg.innerText = "ROUND COMPLETE";
        bjStatusMsg.style.color = "#ffaa00";
      } else if (pub.status === "ended") {
        bjStatusMsg.innerText = "ARENA OVER";
      }

      const isDealerTurn = pub.isDealerTurn;
      const current = getCurrentPlayer(gameState);
      const isCurrentPlayerOnline = room.players[current] === true;
      const skipContainer = document.getElementById("bj-skip-button");
      if (isHost && !isDealerTurn && !isCurrentPlayerOnline && room.status === "playing") skipContainer.style.display = "block";
      else skipContainer.style.display = "none";

      if (isHost && pub.isDealerTurn && pub.status === "playing") {
        setTimeout(() => runDealerAI(selectedRoomId), 1500);
      }

      if (isHost && pub.status === "calculating_bj") calculateBJResults(selectedRoomId);

      const winnerId = pub.winner || (room && room.winners ? Object.keys(room.winners).find(uid => room.winners[uid] >= 3) : null);
      const isGameOver = pub.status === "ended" || (room && room.status === "ended");
      if (isGameOver && winnerId && !isResultShown) {
        let resultDescription = "";

        const leaderboard = pub.playerOrder.map(uid => ({
          uid,
          name: allUsers[uid]?.displayName || "Player",
          points: pub.roundPoints?.[uid] || 0
        })).sort((a, b) => b.points - a.points);

        const listHtml = leaderboard.map((player, index) => {
          const isWinner = player.uid === winnerId;
          return `
            <div class="result-row ${isWinner ? 'winner-row' : ''}">
              <div class="rank">#${index + 1}</div>
              <div class="name">${player.name}</div>
              <div class="score"><span class="bj-lb-points">${player.points}</span><span class="pts-label">PTS</span></div>
            </div>`; }).join('');

        resultDescription = `
          <div class="bj-leaderboard">
            <div class="leaderboard-header">MATCH STANDINGS</div>
            ${listHtml}
          </div>`;

        showGameResults(winnerId, resultDescription);
      }
    }
  }, 

  poker: {
    getInitialState: (players) => {
      let deck = createSingleDeck();
      const totalRounds = players.length * 3;
      const privateData = {};

      const SMALL_BLIND = 10;
      const BIG_BLIND = 20;

      const publicData = {
        playerOrder: players,
        turnIndex: players.length > 2 ? 2 : 0,
        pot: 0,
        currentBet: BIG_BLIND,
        currentRound: 1,
        maxRounds: totalRounds,
        round: "pre-flop",
        playerStates: {},
        status: "playing",
        communityCards: [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()],
      };

      players.forEach((uid, idx) => {
        privateData[uid] = { hand: [deck.pop(), deck.pop()] };

        let chips = 1000;
        let bet = 0;

        if (idx === 0) {
          bet = SMALL_BLIND;
          chips -= SMALL_BLIND;
          publicData.pot += SMALL_BLIND;
        } else if (idx === 1) {
          bet = BIG_BLIND;
          chips -= BIG_BLIND;
          publicData.pot += BIG_BLIND;
        }

        publicData.playerStates[uid] = {
          chips: chips,
          bet: bet,
          folded: false,
          hasActed: false
        };
      });
      return { public: publicData, private: privateData, deck };
    },

    render: (gameState) => {
      const pub = gameState.public;
      const room = rooms[selectedRoomId];
      if (!room) return;

      const myState = pub.playerStates[accountId];
      if (!myState) return;
      const isHost = room.hostId === accountId;

      const board = document.getElementById("poker-community");
      const cards = pub.communityCards || [];
      board.innerHTML = cards.map((card, i) => {
        let isHidden = false;
        if (i < 3 && pub.round === "pre-flop") isHidden = true;
        if (i === 3 && (pub.round === "pre-flop" || pub.round === "flop")) isHidden = true;
        if (i === 4 && (pub.round !== "river")) isHidden = true;
        return createBJCardHTML(card, isHidden);
      }).join('');
      document.getElementById("poker-pot-val").innerText = pub.pot;

      const myHand = gameState.private[accountId]?.hand || [];
      document.getElementById("my-poker-cards").innerHTML = myHand.map(c => createBJCardHTML(c)).join('');
      document.getElementById("my-chips-val").innerText = myState?.chips || 0;
      document.getElementById("my-bet-val").innerText = myState?.bet || 0;

      const currentUid = pub.playerOrder[pub.turnIndex];
      const isMyTurn = currentUid === accountId;

      const actionPanel = document.getElementById("poker-actions");
      actionPanel.style.display = (isMyTurn && !myState?.folded && pub.status === "playing") ? "grid" : "none";

      if (isMyTurn && !myState.folded && pub.status === "playing") {
        actionPanel.style.display = "grid";
        const raiseBtn = document.getElementById("raise-toggle-btn");
        raiseBtn.onclick = () => toggleRaiseSlider(gameState);
      } else {
        actionPanel.style.display = "none";
        document.getElementById("raise-slider-container").style.display = "none";
      }

      document.getElementById("poker-turn-name").innerText = isMyTurn ? "YOUR TURN" : `${allUsers[currentUid]?.displayName || "Player"}'s Turn`;
      document.getElementById("poker-status-msg").innerText = `ROUND ${pub.currentRound} / ${pub.maxRounds}`;
      document.getElementById("call-btn").innerText = pub.currentBet === 0 ? "CHECK" : "CALL";

      const current = getCurrentPlayer(gameState);
      const isCurrentPlayerOnline = room.players[current] === true;
      const skipContainer = document.getElementById("poker-skip-button");
      if (isHost && !isCurrentPlayerOnline && room.status === "playing") skipContainer.style.display = "block";
      else skipContainer.style.display = "none";

      renderPokerOpponents(gameState);

      const winnerId = pub.winner || (room && room.winners ? Object.keys(room.winners).find(uid => room.winners[uid] >= 3) : null);
      const isGameOver = pub.status === "ended" || (room && room.status === "ended");
      if (isGameOver && winnerId && !isResultShown) {
        let resultDescription = "";

        const leaderboard = pub.playerOrder.map(uid => ({
          uid,
          name: allUsers[uid]?.displayName || "Player",
          chips: pub.playerStates?.[uid]?.chips || 0
        })).sort((a, b) => b.chips - a.chips);

        const listHtml = leaderboard.map((player, index) => {
          const isWinner = player.uid === winnerId;
          const isBankrupt = player.chips <= 0;

          return `
              <div class="result-row ${isWinner ? 'winner-row' : ''} ${isBankrupt ? 'bankrupt-row' : ''}">
                <div class="rank">#${index + 1}</div>
                <div class="name">${player.name}</div>
                <div class="score"><span class="chip-count">${player.chips.toLocaleString()}</span><i class="fa-solid fa-coins"></i></div>
              </div>`;
        }).join('');

        resultDescription = `
          <div class="poker-leaderboard">
            <div class="leaderboard-header">FINAL CHIP STANDINGS</div>${listHtml}
          </div>`;

        showGameResults(winnerId, resultDescription);
      }
    }
  },

  big2: {
    getInitialState: (players) => {
      let deck = createSingleDeck();

      const privateData = {};
      const publicData = {
        playerOrder: players,
        turnIndex: 0,
        currentRound: 1, 
        totalScores: {},
        lastPlayed: null,
        passCount: 0,
        status: "playing",
        handCounts: {},
        finishedPlayers: [],
        lastPlayerToPlay: null,
        isFirstMoveOfRound: true
      };

      let lowestPower = 999;
      let starterUid = players[0];

      players.forEach(uid => {
        const hand = [];
        for (let c = 0; c < 13; c++) { hand.push(deck.pop()); }

        hand.forEach(card => {
          const p = getCardPower(card);
          if (p < lowestPower) {
            lowestPower = p;
            starterUid = uid;
          }
        });

        privateData[uid] = { hand: hand.sort((a, b) => getCardPower(a) - getCardPower(b)) };
        publicData.handCounts[uid] = 13;
        publicData.totalScores[uid] = 0;
      });

      publicData.turnIndex = players.indexOf(starterUid);

      return { public: publicData, private: privateData };
    },

    render: (gameState) => {
      const pub = gameState.public;
      const room = rooms[selectedRoomId];
      if (!room) return;

      const myHand = gameState.private[accountId]?.hand || [];
      const isHost = rooms[selectedRoomId]?.hostId === accountId;

      const finishedList = pub.finishedPlayers || [];
      const hasFinished = finishedList.includes(accountId);

      const handDiv = document.getElementById("my-pres-hand");
      handDiv.innerHTML = myHand.map((card, idx) => {
        const isSelected = selectedPresIndices.includes(idx) ? 'selected' : '';
        return `<div class="pres-card-wrapper ${isSelected}" onclick="togglePresSelection(${idx})">${createBJCardHTML(card)}</div>`;
      }).join('');

      const pileDiv = document.getElementById("pres-discard-pile");
      const pileInfo = document.getElementById("pres-pile-info");
      if (pub.lastPlayed && pub.lastPlayed.cards && pub.lastPlayed.combo) {
        const combo = pub.lastPlayed.combo;
        pileDiv.innerHTML = pub.lastPlayed.cards.map(c => createBJCardHTML(c)).join('');
        const leadRank = pub.lastPlayed.cards[0].rank;
        pileInfo.innerText = `${combo.type} (${leadRank} HIGH)`;

      } else {
        pileDiv.innerHTML = '<div class="card-placeholder">OPEN LEAD</div>';
        pileInfo.innerText = "WAITING...";
      }

      const totalPenalty = pub.totalScores?.[accountId] || 0;
      const currentUid = pub.playerOrder[pub.turnIndex];
      const isMyTurn = currentUid === accountId;
      document.getElementById("pres-actions").style.display = (isMyTurn && !hasFinished) ? "flex" : "none";
      document.getElementById("pres-turn-name").innerText = isMyTurn ? "YOUR TURN" : `${allUsers[currentUid]?.displayName || "Player" }'s Turn`;
      document.getElementById("pres-status-msg").innerText = `ROUND ${pub.currentRound || "1"}`;
      document.getElementById("my-pres-penalty").innerText = totalPenalty;

      const current = getCurrentPlayer(gameState);
      const isCurrentPlayerOnline = room.players[current] === true;
      const skipContainer = document.getElementById("pres-skip-button");
      if (isHost && !isCurrentPlayerOnline && room.status === "playing") skipContainer.style.display = "block";
      else skipContainer.style.display = "none";

      renderPresOpponents(gameState);

      if (isHost && pub.passCount >= (pub.playerOrder.length - finishedList.length - 1) && pub.lastPlayed) setTimeout(() => clearPresPile(selectedRoomId), 1000);

      const winnerId = pub.winner || (room && room.winners ? Object.keys(room.winners).find(uid => room.winners[uid] >= 3) : null);
      const isGameOver = pub.status === "ended" || (room && room.status === "ended");
      if (isGameOver && winnerId && !isResultShown) {
        let resultDescription = "";

        const leaderboard = pub.playerOrder.map(uid => ({
          uid,
          name: allUsers[uid]?.displayName || "Player",
          count: pub.totalScores?.[uid] || 0
        })).sort((a, b) => a.count - b.count);

        const listHtml = leaderboard.map((player, index) => {
          const isWinner = player.count === 0;

          return `
            <div class="result-row ${isWinner ? 'winner-row' : ''}">
              <div class="rank">#${index + 1}</div>
              <div class="name">${player.name}</div>
              <div class="score">${player.count}<i class="fa-solid fa-layer-group"></i></div>
            </div>`;}).join('');

        resultDescription = `
          <div class="big2-leaderboard">
            <div class="leaderboard-header">REMAINING CARDS</div>${listHtml}
          </div>`;

        showGameResults(winnerId, resultDescription);
      }
    }
  },

  mahjong: {
    getInitialState: (players, extraParams) => {
      let pool = [];

      const standard = [...MJ_TILES.bamboo, ...MJ_TILES.dots, ...MJ_TILES.chars, ...MJ_TILES.winds, ...MJ_TILES.dragons];
      standard.forEach(t => {
        for (let i = 0; i < 4; i++) pool.push(t);
      });

      const unique = [...MJ_TILES.flowers, ...MJ_TILES.seasons];
      unique.forEach(t => pool.push(t));

      pool = shuffle(pool);

      const privateData = {};
      const publicData = {
        gameId: Date.now(),
        playerOrder: players,
        turnIndex: 0,
        discards: [],
        wallCount: 0,
        handCounts: {},
        ...extraParams,
        animationPlayed: false,
        status: "playing"
      };

      players.forEach((uid, idx) => {
        privateData[uid] = { hand: [] };
        const cardsToDeal = (idx === 0) ? 14 : 13;
        for (let j = 0; j < cardsToDeal; j++) privateData[uid].hand.push(pool.pop());
        privateData[uid].hand = sortMJHand(privateData[uid].hand);
        publicData.handCounts[uid] = privateData[uid].hand.length;
      });

      publicData.wallCount = pool.length;
      return { public: publicData, private: privateData, deck: pool };
    },

    render: (gameState) => {
      const pub = gameState.public || {};
      const room = rooms[selectedRoomId];
      if (!room) return;

      const discardBtn = document.getElementById("btn-mj-discard");
      const chowBtn = document.getElementById("btn-mj-chow");
      const pongBtn = document.getElementById("btn-mj-pong");
      const kongBtn = document.getElementById("btn-mj-kong");
      const mjBtn = document.getElementById("btn-mj-mahjong");

      if (pub.gameId && pub.gameId !== activeGameRoundId) {
        activeGameRoundId = pub.gameId;
        isDealing = false;
        isResultShown = false;

        document.getElementById("mj-discard-pile").innerHTML = "";
        document.getElementById("my-mj-hand").innerHTML = "";
        document.getElementById("my-revealed").innerHTML = "";
        
        const positions = ["mj-opp-right", "mj-opp-top", "mj-opp-left"];
        positions.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = "";
        });

        prevRevealedState = {};
        lastTotalRevealedCount = 0;
        lastMJActionTime = 0;
        selectedMJIndex = null;
        
        document.getElementById("result-overlay").classList.remove("show");
        document.getElementById("result-overlay").style.display = "none";
        isResultShown = false;

        if (discardBtn) discardBtn.style.display = "none";
        if (chowBtn) chowBtn.style.display = "none";
        if (pongBtn) pongBtn.style.display = "none";
        if (kongBtn) kongBtn.style.display = "none";
        if (mjBtn) mjBtn.style.display = "none";
      }

      lobbyUI.style.display = "none";
      const tableEl = document.getElementById("mahjong-table");
      tableEl.removeAttribute('style'); 
      if (window.innerWidth <= 850) tableEl.style.display = "flex";
      else tableEl.style.display = "grid";

      if (pub.status === "playing" && !pub.animationPlayed && !isDealing) {
        startDealingAnimation(pub.minFan, pub.prevailingWind, gameState);
        return;
      }
      if (isDealing) return;

      const order = pub.playerOrder || [];
      const current = getCurrentPlayer(gameState);
      const currentUid = pub.playerOrder[pub.turnIndex];
      const isMyTurn = pub.playerOrder[pub.turnIndex] === accountId;

      const myHand = gameState.private[accountId]?.hand || [];
      const myRevealed = pub.revealedHands?.[accountId] || [];
      const discards = pub.discards || [];
      const lastTile = discards[discards.length - 1];

      const lastDiscarderIndex = (pub.turnIndex - 1 + order.length) % order.length;
      const lastDiscarderId = order[lastDiscarderIndex];
      const isMyTile = lastDiscarderId === accountId;
      
      const canDraw = isMyTurn && pub.waitingForDraw;
      const canDiscard = isMyTurn && (!pub.waitingForDraw && !pub.waitingForSupplement);

      renderMJOpponents(gameState);
      renderRevealedSets("my-revealed", accountId, gameState);
      updateMJWallVisual(pub.wallCount || 0, canDraw, gameState);

      const windMap = {"East": "東","South": "南","West": "西","North": "北"};
      document.getElementById("mj-wall-count").innerText = pub.wallCount || 0;
      document.getElementById("mj-turn-name").innerText = isMyTurn ? "YOUR TURN" : `${allUsers[currentUid]?.displayName || "Player" }'s Turn`;
      const windChar = windMap[pub.prevailingWind] || "東";
      const windDisplay = `${windChar}圈${windChar}局`;
      document.getElementById("mj-status-msg").innerText = windDisplay;

      const isCurrentPlayerOnline = room.players[current] === true;
      const skipContainer = document.getElementById("mj-skip-button");
      if ((room.hostId === accountId) && !isCurrentPlayerOnline && room.status === "playing") skipContainer.style.display = "block";
      else skipContainer.style.display = "none";

      if (isMyTurn && !pub.waitingForDraw && myHand.length === 14 && selectedMJIndex === null) selectedMJIndex = myHand.length - 1;
      const handDiv = document.getElementById("my-mj-hand");
      handDiv.innerHTML = myHand.map((tile, i) => `<div class="mj-tile ${getTileSuite(tile)} ${selectedMJIndex === i ? 'selected' : ''}" onclick="selectMJTile(${i})"><span>${tile}</span></div>`).join('');

      const isSetupPhase = pub.status === "playing" && !pub.gameStarted;
      if (isSetupPhase) {
        const myHand = gameState.private[accountId].hand;
        const hasFlowers = myHand.some(t => isBonusTile(t));

        if (isMyTurn) {
          if (hasFlowers) {
            document.getElementById("btn-mj-exchange-flowers").style.display = "block";
          } else {
            document.getElementById("btn-mj-exchange-flowers").style.display = "none";
            if (!pub.waitingForSupplement) handleMJAction('passInitialFlowers');
          }
        }
        return;
      }

      discardBtn.style.display = canDiscard ? "flex" : "none";
      document.getElementById("mj-discard-pile").innerHTML = discards.map(t => `<div class="mj-tile discarded">${t}</div>`).join('');
      
      const chowOverlay = document.getElementById("mj-chow-overlay");
      const optionsList = document.getElementById("mj-chow-options-list");
      if (isMyTurn && pub.canInterrupt && lastTile && !isMyTile) {
        const options = getChowOptions(myHand, lastTile);
        chowBtn.style.display = options.length > 0 ? "block" : "none";

        if (isChowMenuOpen && options.length > 0) {
          chowOverlay.style.display = "flex";
          optionsList.innerHTML = options.map((pair, idx) => {
            const combined = [...pair, lastTile];
            const sortedMeld = sortMJHand(combined);
            return `<div class="chow-option-group" onclick="handleChowClick(${idx})">${sortedMeld.map(t => `<div class="mj-tile discarded ${getTileSuite(t)}"><span>${t}</span></div>`).join('')}</div>`;
          }).join('');
        } else {
          chowOverlay.style.display = "none";
        }
      } else {
        isChowMenuOpen = false;
        chowBtn.style.display = "none";
        chowOverlay.style.display = "none";
      }

      if (pub.canInterrupt && lastTile && !isMyTile) {
        const canI = getPongOptions(myHand, lastTile);
        pongBtn.style.display = canI ? "block" : "none";
      } else {
        pongBtn.style.display = "none";
      }
    
      const options = getKongOptions(myHand, (pub.canInterrupt && !isMyTile) ? lastTile : null, myRevealed);
      const canExposed = options.exposed.length > 0 && pub.canInterrupt && !isMyTile;
      const canConcealed = options.concealed.length > 0 && isMyTurn && !pub.waitingForDraw;
      const canAdditive = options.additive.length > 0 && isMyTurn && !pub.waitingForDraw;

      if (canExposed || canConcealed || canAdditive) {
        kongBtn.style.display = "block";
        const targetTile = options.exposed[0] || options.additive[0] || options.concealed[0];
        kongBtn.onclick = () => handleMJAction('kong', targetTile);
      } else {
        kongBtn.style.display = "none";
      }

      const cleanHand = myHand.filter(t => !isBonusTile(t));
      const canWinOnDiscard = pub.canInterrupt && lastTile && !isMyTile;
      const testHand = canWinOnDiscard ? [...cleanHand, lastTile] : cleanHand;

      if (pub.status !== "ended") {
        let effectiveMeldCount = 0;
        myRevealed.forEach(meld => {
          if (meld.type === 'flower' || meld.type === 'season') return;
          if (meld.type === 'kong') effectiveMeldCount += 3;
          else effectiveMeldCount += (meld.tiles ? meld.tiles.length : 0);
        });

        const totalCount = testHand.length + effectiveMeldCount;
        const winResult = (totalCount === 14) ? checkMahjongWin(testHand, myRevealed) : null;

        if (winResult) {
          if (winResult && winResult.fan >= pub.minFan) {
            mjBtn.style.display = "block";
            mjBtn.innerText = `MAHJONG! [${winResult.fan}番]`;
            mjBtn.onclick = () => handleMJAction('mahjong', winResult);
          }
        } else {
          mjBtn.style.display = "none";
        }
      }

      const winnerId = pub.winner || (room && room.winners ? Object.keys(room.winners).find(uid => room.winners[uid] >= 3) : null);
      const isGameOver = pub.status === "ended" || (room && room.status === "ended");

      if (isGameOver && winnerId && !isResultShown) {
        let winDetails = "";

        if (pub.winningHand) {
          const { name, fan, private: priv, revealed } = pub.winningHand;
          const tilesHtml = `
            <div class="result-tiles-container">
                <div class="result-meld-row">${revealed.map(m => `<div class="mj-meld-group mini">${m.tiles.map(t => `<div class="mj-tile discarded ${getTileSuite(t)}"><span>${t}</span></div>`).join('')}</div>`).join('')}</div>
                <div class="result-hand-row">${priv.map(t => `<div class="mj-tile discarded ${getTileSuite(t)}"><span>${t}</span></div>`).join('')}</div>
            </div>`;
          winDetails = `<div class="win-stats"><span class="win-pattern">${name} <span class="win-fan">[${fan}番]</span></span></div>${tilesHtml}`;
        }

        showGameResults(winnerId, winDetails);
      }
    }
  }
};

const firebaseConfig = {
  apiKey: "AIzaSyAmI86EcG9Zvln4n4s39tcPNlCYfPjO16s",
  authDomain: "zentral-chat-b7ca0.firebaseapp.com",
  databaseURL: "https://zentral-chat-b7ca0-default-rtdb.firebaseio.com",
  projectId: "zentral-chat-b7ca0",
  storageBucket: "zentral-chat-b7ca0.firebasestorage.app",
  messagingSenderId: "808973774382",
  appId: "1:808973774382:web:0320afd63bb326ebd839bf",
  measurementId: "G-F663TF4T6K"
};
firebase.initializeApp(firebaseConfig);

// ===== DOOMS HOOK =====
let user = null;
let accountId = null;
let isLoggingOut = false;
let sessionListenerRef = null;
let displayName = "";
let allUsers = {};

const db = firebase.database();
const usersRef = firebase.database().ref("users");
const roomsRef = db.ref('rooms');
const gamesRef = db.ref('activeGames');
const googleProvider = new firebase.auth.GoogleAuthProvider();

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
const winText = document.getElementById("winText");
const iconGrid = document.getElementById("iconGrid");
const iconPrev = document.getElementById("iconPrev");
const iconNext = document.getElementById("iconNext");

const googleStatusEl = document.getElementById("googleStatus");
const googleActionBtn = document.getElementById("googleActionBtn");
const googleBtnText = document.getElementById("googleBtnText");

const headerBtn = document.getElementById("header-action-btn");
const headerBtnText = document.getElementById("header-btn-text");

const roomControl = document.getElementById("roomControls");
const roomHeader = document.getElementById("roomHeader");
const lobbyUI = document.querySelector(".arena-lobby");
const playersGrid = document.getElementById("players");
const resultUI = document.getElementById("result-overlay");

const createRoomModal = document.getElementById("create-room-modal");
const mode = document.getElementById("setup-gamemode");
const modeSelect = document.getElementById("gamemode-select")
const maxPlayers = document.getElementById("max-player-val");
const joinInput = document.getElementById("direct-join-input");
const copyIdBtn = document.getElementById("copy-id-btn");
const copyLinkBtn = document.getElementById("link-id-btn")
const roomSettingsBtn = document.getElementById("room-settings-btn")
const roomConfirmBtn = document.getElementById("modal-confirm-btn");

const bjStatusMsg = document.getElementById("bj-status-msg");

let rooms = {};
let leavingRoom = false;
let isResultShown = false;
let lastGameState = null;
let currentRoomId = null;
let selectedRoomId = null;

let currentGameListener = null;
let gameListenerActive = null;
let roomPresenceListener = null;
let lastRoomDataJSON = "";

let iconIndex = 0;
let equippedIcon = null;
let settingsUpdate = false;
let settingsOpened = false
const ICONS_PER_PAGE = 8;

let isEditMode = false;
let currentMaxSelection = 4;
let selectedVisibility = 'public';
let hasProcessedWin = false;

let pendingWildIndex = null;
let localLastShoutTime = 0;

let lastBJRoundTime = 0;
let lastPokerRoundTime = 0;
let lastPresRoundTime = 0;

let isDealing = false;
let isChowMenuOpen = false;
let selectedPresIndices = [];
let selectedWind = "East";
let selectedMJIndex = null;
let prevRevealedState = {};
let activeGameRoundId = null;

usersRef.on("value", (snap) => { allUsers = snap.val() || {}; });

// ===== LOBBY FUNCTIONS =====
function openCreateModal() {
  isEditMode = false;
  mode.value = "SHU";
  maxPlayers.innerText = "4";
  setVisibility('public');
  roomConfirmBtn.innerText = "CREATE";
  roomConfirmBtn.onclick = confirmCreateRoom;
  createRoomModal.classList.add("show");
}

function openEditModal() {
  const room = rooms[currentRoomId];
  if (!room) return;
  isEditMode = true;

  mode.value = room.gameType;
  maxPlayers.innerText = room.maxPlayers;
  setVisibility(room.visibility || 'public');
  roomConfirmBtn.innerText = "SAVE CHANGES";
  roomConfirmBtn.onclick = confirmEditRoom;
  createRoomModal.classList.add("show");
}

function closeCreateModal() {
  createRoomModal.classList.remove("show");
}

function toggleChat() {
  const chat = document.getElementById("chat-sidebar");
  const frame = document.getElementById("chat-frame");
  const overlay = document.getElementById("chat-overlay");
  const isActive = chat.classList.toggle("active");

  if (isActive) {
    frame.src = "../Chat/chat.html";
    if (window.innerWidth <= 850) document.body.style.overflow = "hidden";
    if (overlay) overlay.classList.add("active");
  } else {
    frame.src = "";
    document.body.style.overflow = "auto";
    if (overlay) overlay.classList.remove("active");
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("lobby-sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const isActive = sidebar.classList.toggle("active");

  if (isActive) {
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
  } else {
    overlay.style.opacity = "0";
    setTimeout(() => { overlay.style.visibility = "hidden"; }, 300);
  }
}

function toggleDropdown() {
  modeSelect.classList.toggle("active");
}

function selectOption(val) {
  document.getElementById("selected-gamemode").innerText = val.toUpperCase();
  mode.value = val;
  updateMaxPlayerRange();
  modeSelect.classList.remove("active");
}

function setVisibility(type) {
  selectedVisibility = type;
  document.getElementById("btn-public").className = type === 'public' ? 'active' : '';
  document.getElementById("btn-private").className = type === 'private' ? 'active' : '';
}

function updateMaxPlayerRange() {
  const config = GameConfigs[mode.value];
  currentMaxSelection = config.default;
  maxPlayers.innerText = currentMaxSelection;
}

function adjustMaxPlayers(change) {
  const config = GameConfigs[mode.value];
  let newValue = currentMaxSelection + change;

  if (newValue >= config.min && newValue <= config.max) {
    currentMaxSelection = newValue;
    maxPlayers.innerText = currentMaxSelection;
  }
}

async function confirmCreateRoom() {
  await createRoom(mode.value, selectedVisibility, currentMaxSelection);
  closeCreateModal();
}

function handleDirectJoin() {
  const roomId = joinInput.value.trim();
  if (!roomId) return;
  joinRoom(roomId);
  joinInput.value = "";
  showMessage(`Successfully Joined ${roomId}`);
  if (window.innerWidth <= 850) toggleSidebar();
}

function copyRoomID() {
  const idToCopy = selectedRoomId || currentRoomId;
  if (!idToCopy) return;

  navigator.clipboard.writeText(idToCopy).then(() => {
    const icon = copyIdBtn.querySelector(".copy-icon");
    copyIdBtn.classList.add("success");
    icon.classList.replace("fa-copy", "fa-check-circle");

    setTimeout(() => {
      copyIdBtn.classList.remove("success");
      icon.classList.replace("fa-check-circle", "fa-copy");
    }, 2000);
  });
}

function copyInviteLink() {
  const rid = selectedRoomId || currentRoomId;
  if (!rid) return;
  const inviteUrl = `${window.location.origin}${window.location.pathname}?join=${rid}`;

  navigator.clipboard.writeText(inviteUrl).then(() => {
    const icon = copyLinkBtn.querySelector(".link-icon");
    copyLinkBtn.classList.add("success");
    icon.classList.replace("fa-link", "fa-check-circle");

    setTimeout(() => {
      copyLinkBtn.classList.remove("success");
      icon.classList.replace("fa-check-circle", "fa-link");
    }, 2000);
  });
}

joinInput?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleDirectJoin();
});

window.addEventListener('click', function(e) {
    const select = document.getElementById('gamemode-select');
    if (!select.contains(e.target)) {
        select.classList.remove('active');
    }
});

// ===== UI HANDLERS =====
function formatBadgeName(name) {
  return name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Badge";
}

function showMessage(title, text) {
  const msg = document.getElementById("arenaMessage");
  msg.querySelector("h3").textContent = title;
  msg.querySelector("p").textContent = text;
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 3000);
}

function viewRoom(id) {
  selectedRoomId = id;
  renderRoomList();
  renderRoom(id);
}

function resetRoomView() {
  document.querySelector(".arena-game").style.display = "none";
  copyIdBtn.style.display = "none";
  copyLinkBtn.style.display = "none";
  roomSettingsBtn.style.display = "none";
  lobbyUI.style.display = "grid";
  roomControl.style.display = "none";
  playersGrid.innerHTML = "";
  document.getElementById("action-status").innerHTML = "";
  roomHeader.innerHTML = "SELECT AN ARENA TO BEGIN";
  roomHeader.classList.remove("code");
}

function enterGameUI(roomId) {
  const room = rooms[roomId];
  if (!room) return;
  
  const gameType = room.gameType.toLowerCase();
  const tableId = `${gameType}-table`;
  const tableEl = document.getElementById(tableId);

  if (!tableEl || tableEl.style.display === "flex") return;

  selectedRoomId = roomId;
  lobbyUI.style.display = "none";
  if (gameType === "mahjong" && (window.innerWidth > 850)) tableEl.style.display = "grid";
  else tableEl.style.display = "flex";

  headerBtn.onclick = () => leaveArena();
  headerBtn.classList.add("leave-style");
  headerBtnText.innerHTML = '✕ <span class="responsive-text">LEAVE ARENA</span>';

  if (gameListenerActive !== roomId) {
    listenToGame(roomId);
    gameListenerActive = roomId;
  }
}

function exitGameUI() {
  const tables = ["shu-table", "blackjack-table", "poker-table", "big2-table", "mahjong-table"];
  tables.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  document.getElementById("result-overlay").style.display = "none";
  lobbyUI.style.display = "grid";
  lastGameState = null;

  headerBtn.onclick = () => openCreateModal();
  headerBtn.classList.remove("leave-style");
  headerBtnText.innerHTML = '+ <span class="responsive-text">CREATE ROOM</span>';

  if (gameListenerActive) {
    gamesRef.child(gameListenerActive).off();
    gameListenerActive = null;
  }
}

async function updateUI() {
  if (!currentRoomId || !rooms[currentRoomId]) {
    exitGameUI();
    resetRoomView();
    return;
  }

  const room = rooms[currentRoomId];
  if (room.status === "playing") {
    enterGameUI(currentRoomId);
  } else if (room.status === "waiting") {
    exitGameUI();
    renderRoom(currentRoomId);
  } else if (room.status === "ended") {
    const gameSnap = await gamesRef.child(currentRoomId).once("value");
    const gameState = gameSnap.val();
    const gameType = room.gameType.toLowerCase();
    if (gameState && GameLogics[gameType]) GameLogics[gameType].render(gameState);
  }
}

function getEquippedBadge(badges) {
  if (!badges) return null;

  for (const [name, value] of Object.entries(badges)) {
    if (value === true) return name;
  }
  return null;
}

function openTutorial() {
    const room = rooms[currentRoomId];
    if (!room) return;
    
    const mode = room.gameType.toLowerCase();
    const data = TUTORIAL_DATA[mode];
    if (!data) return;

    document.getElementById("tutorial-game-title").innerText = data.title;
    let html = data.steps.map(step => `
        <div class="tutorial-step">
            <div class="step-bullet"><i class="fa-solid fa-chevron-right"></i></div>
            <div class="step-text">${step}</div>
        </div>
    `).join('');

    if (data.fanTable) {
      html += `<div class="fan-table-container">
        <div class="table-header">SCORING DIRECTORY (番數規則)</div>
        <div class="fan-list">${data.fanTable.map(item => `<div class="fan-entry">
          <div class="fan-row"><span class="patt">${item.pattern}</span><span class="val">+${item.fan} FAN</span></div>
          <div class="fan-desc">${item.desc}</div>
        </div>`).join('')}
        </div>
      </div>`;
    }
    
    document.getElementById("tutorial-content").innerHTML = html;
    
    const overlay = document.getElementById("tutorial-overlay");
    overlay.style.display = "flex";
    setTimeout(() => overlay.classList.add("show"), 10);
}

function closeTutorial() {
    const overlay = document.getElementById("tutorial-overlay");
    overlay.classList.remove("show");
    setTimeout(() => overlay.style.display = "none", 400);
}

// ===== LISTENER FUNCTIONS =====
function listenToRooms() {
  roomsRef.on('value', (snapshot) => {
    rooms = snapshot.val() || {};
    renderRoomList();

     if (currentRoomId && rooms[currentRoomId]) {
      const room = rooms[currentRoomId];
      
      if (room.status === "playing" && lastGameState) {
        const gameType = room.gameType.toLowerCase();
        if (GameLogics[gameType]) GameLogics[gameType].render(lastGameState);
      }
    }

    updateUI();
  });
}

function listenToUser() {
  if (!accountId) return;
  
  usersRef.child(accountId).on("value", async (snap) => {
    const userData = snap.val() || {};
    const rid = userData.currentRoomId;

    if (rid && rid !== currentRoomId && !leavingRoom) {
      roomsRef.child(rid).once("value", (roomSnap) => {
        const roomData = roomSnap.val();
        if (roomSnap.exists()) {
          if (roomData.kicked && roomData.kicked[accountId]) {
            console.warn("[SECURITY] Blocked auto-join to kicked room.");
            usersRef.child(accountId).update({ currentRoomId: null });
            return;
          }

          currentRoomId = rid;
          selectedRoomId = rid;
          monitorCurrentRoom(rid);
          console.log("[RECONNECT] Restored session:", rid);
        } else {
          console.warn("[CLEANUP] Room no longer exists.");
          usersRef.child(accountId).update({ currentRoomId: null });
        }
      });
    }
  }, (err) => {
    console.error("[ERROR] User Listener failed:", err.message);
  });
}

function monitorCurrentRoom(rid) {
  if (roomPresenceListener) roomsRef.child(currentRoomId).off("value", roomPresenceListener);

  roomPresenceListener = roomsRef.child(rid).on("value", async (snap) => {
    const roomData = snap.val();

    if (!snap.exists()) {
      console.warn("[CLEANUP] Current room was deleted.");

      const playerRef = roomsRef.child(rid).child("players").child(accountId);
      playerRef.onDisconnect().cancel(); 

      roomsRef.child(rid).off("value", roomPresenceListener);
      roomPresenceListener = null;

      currentRoomId = null;
      selectedRoomId = null;
      await usersRef.child(accountId).update({ currentRoomId: null });

      exitGameUI();
      resetRoomView();
      return;
    }

    if (!leavingRoom) {
      if (roomData.kicked && roomData.kicked[accountId]) {
        leavingRoom = true;
        roomsRef.child(rid).off("value", roomPresenceListener);
        roomPresenceListener = null;

        await usersRef.child(accountId).child("currentRoomId").remove();
        await roomsRef.child(rid).child('kicked').child(accountId).remove();
        const playerRef = roomsRef.child(rid).child("players").child(accountId);
        playerRef.onDisconnect().cancel();

        currentRoomId = null;
        selectedRoomId = null;

        showMessage("Host has removed you from this arena");
        console.warn("[CLEANUP] Current room was removed.");
        exitGameUI();
        resetRoomView();
        return;
      }
    }

    const currentDataJSON = JSON.stringify(roomData);
    if (lastRoomDataJSON === currentDataJSON) return;
    lastRoomDataJSON = currentDataJSON;

    if (!leavingRoom && roomData.players?.[accountId] !== true && roomData.status !== "ended") {
      console.log("[SYNC] Adding player back to room...");
      const playerRef = roomsRef.child(rid).child("players").child(accountId);
      playerRef.set(true);
      playerRef.onDisconnect().set(false);
    }
  });
}

// ===== UNIVERSAL ROOM FUNCTIONS =====
function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
    if (i === 2) code += '-';
  }
  return code;
}

async function toggleReady() {
    if (!currentRoomId || !accountId) return;
    const room = rooms[currentRoomId];
    const currentlyReady = room.ready && room.ready[accountId];
    await roomsRef.child(currentRoomId).child("ready").child(accountId).set(!currentlyReady);
}

async function createRoom(gameType, visibility, maxPlayers) {
  if (currentRoomId) {
    showMessage("Unable to Create New Room", "Please leave your current room first");
    return;
  }

  const roomId = generateRoomCode();
  await roomsRef.child(roomId).set({
    gameType: gameType,
    visibility: visibility,
    maxPlayers: maxPlayers,
    hostId: accountId,
    status: "waiting",
    players: { [accountId]: true },
    createdAt: firebase.database.ServerValue.TIMESTAMP
  });

  await usersRef.child(accountId).update({ currentRoomId: roomId });
  currentRoomId = roomId;
  selectedRoomId = roomId;
  viewRoom(roomId);
}

async function confirmEditRoom() {
    const gamemode = document.getElementById("setup-gamemode").value;
    const visibility = document.getElementById("btn-public").classList.contains("active") ? "public" : "private";
    const maxPlayers = parseInt(document.getElementById("max-player-val").innerText);

    if (!currentRoomId) return;

    try {
        const roomRef = roomsRef.child(currentRoomId);
        
        await roomRef.update({
            gameType: gamemode,
            visibility: visibility,
            maxPlayers: maxPlayers
        });

        closeCreateModal();
        showMessage("Room Updated Successfully");
    } catch (err) {
        console.error("[ERROR] Failed to update room:", err);
        showMessage("Failed to Update Room", "Please try again later!");
    }
}

async function joinRoom(roomId) {
  const room = rooms[roomId];
  if(!room) return;

  if (room.status !== "waiting"){
    showMessage("Unable to Join Arena", "Match has already begun");
    return;
  }

  if (currentRoomId){
    showMessage("Unable to Join Arena", "Please leave your current room first");
    return;
  }

  const pCount = Object.keys(room.players || {}).length;
  const max = room.maxPlayers || 4;

  if (pCount >= max) {
    showMessage("Unable to Join Arena", "This room is at full capacity");
    return;
  }

  const playerRef = roomsRef.child(roomId).child("players").child(accountId);
  const readyRef = roomsRef.child(roomId).child("ready").child(accountId);
  const userRoomRef = usersRef.child(accountId).child("currentRoomId");

  try {
    await playerRef.set(true);
    await userRoomRef.set(roomId);
    await readyRef.set(true);
    await playerRef.onDisconnect().set(false);

    currentRoomId = roomId;
    selectedRoomId = roomId;
    prevRevealedState = {};
    
    viewRoom(roomId);
    console.log("[JOIN] Successfully joined", roomId);
  } catch (err) {
    console.error("[ERROR] Join failed:", err);
  }
}

async function leaveRoom() {
  if (!selectedRoomId) return;
  const room = rooms[selectedRoomId];
  leavingRoom = true;

  try {
    if (room.hostId === accountId) {
      if (room.status === "playing") await gamesRef.child(selectedRoomId).remove();
      await roomsRef.child(selectedRoomId).remove();
    } else {
      await roomsRef.child(selectedRoomId).child('players').child(accountId).remove();
      await usersRef.child(accountId).child("currentRoomId").remove();
      await roomsRef.child(selectedRoomId).child("players").child(accountId).onDisconnect().cancel();
    }

    selectedRoomId = null;
    currentRoomId = null;
    resetRoomView();
    exitGameUI();
  } catch (err) {
    console.error("[ERROR] Leave failed:", err);
  }
}

async function kickPlayer(uid) {
  if (!currentRoomId) return;
  try {
    roomsRef.child(currentRoomId).child("kicked").child(uid).set(true);
    roomsRef.child(currentRoomId).child("players").child(uid).remove();
    roomsRef.child(selectedRoomId).child("players").child(uid).onDisconnect().cancel();
    console.log(`[HOST] Kicked player: ${uid}`);
  } catch (err) {
    console.error("[ERROR] Kick failed:", err.message);
  }
}

function renderRoomList() {
  const list = document.getElementById("roomList");
  list.innerHTML = "";

  Object.entries(rooms).forEach(([id, room]) => {
    const players = room.players || {};
    const isMeInRoom = players[accountId] === true;
    const isPrivate = room.visibility === "private";
    const isPlaying = room.status === "playing";
    if (isPrivate && !isMeInRoom) return;

    let iconClass = "fas fa-globe";
    if (isPrivate) iconClass = "fas fa-lock";
    else if (isPlaying) iconClass = "fas fa-gamepad";

    const pCount = Object.keys(room.players || {}).length;
    const isActive = id === selectedRoomId ? "active-room" : "";

    const div = document.createElement("div");
    div.className = `room-item ${isActive}`;
    div.innerHTML = `
      <span class="game-name"><i class="${iconClass}"></i> ${room.gameType}</span>
      <span class="player-count">${pCount} / ${room.maxPlayers || 4}</span>`;
    div.onclick = () => {
      viewRoom(id);
      if (window.innerWidth <= 850) toggleSidebar();
    }
    list.appendChild(div);
  });
}

function renderRoom(roomId) {
  const room = rooms[roomId];
  if (!room || !allUsers) return;
  const isHost = room.hostId === accountId;

  roomControl.style.display = "flex";
  roomHeader.innerHTML = "Room ID: " + roomId;
  roomHeader.classList.add("code");

  const playersDiv = playersGrid;
  playersDiv.innerHTML = "";

  const playerIds = Object.keys(room.players || {}).sort((a, b) => {
    if (a === room.hostId) return -1;
    if (b === room.hostId) return 1;
    return 0;
  });

  const readyList = room.ready || {};
  const amIReady = readyList[accountId] === true;
  const otherPlayers = playerIds.filter(uid => uid !== room.hostId);
  const readyCount = otherPlayers.filter(uid => readyList[uid] === true).length;
  const allReady = otherPlayers.length > 0 && readyCount === otherPlayers.length;

  const isPlayerInRoom = room.players && room.players[accountId];
  copyIdBtn.style.display = isPlayerInRoom ? "flex" : "none";
  copyLinkBtn.style.display = isPlayerInRoom ? "flex" : "none";
  roomSettingsBtn.style.display = isPlayerInRoom ? "flex" : "none";

  let requirePlayers = false;
  const config = GameConfigs[room.gameType] || { min: 2 };
  if (playerIds.length >= config.min) requirePlayers = true;

  playerIds.forEach(uid => {
    const userData = allUsers[uid] || {};
    const isOnline = room?.players?.[uid] === true;
    const isReady = readyList[uid] === true;
    const isThisHost = room.hostId === uid;

    const icon = userData.profileIcon || "zendra_blue";
    const googlePhoto = userData.google?.IconURL || null;

    const equippedBadge = getEquippedBadge(userData.badges);
    const name = userData.displayName || userData.username || "Anonymous";

    const wins = (room.winners && room.winners[uid]) ? room.winners[uid] : 0;
    const winDisplay = wins > 0 ? `<span class="win-count">🏆 ${wins}</span>` : '';

    const showKickBtn = isHost && uid !== room.hostId;
    const kickBtnHtml = showKickBtn ? `<div class="kick-btn" onclick="kickPlayer('${uid}')"><i class="fas fa-times"></i></div>` : '';

    let statusBadge = "";
    if (isThisHost) statusBadge = `<span class="host-badge">HOST</span>`;
    else statusBadge = isReady ? `<span class="ready-badge ready">READY</span>` : `<span class="ready-badge">PLAYER</span>`;

    let iconUrl = "../Assets/Icons/zendra_blue.png";
    if (icon === "google" && googlePhoto) iconUrl =  googlePhoto;
    else iconUrl = `../Assets/Icons/${icon}.png`;

    const p = document.createElement("div");
    p.className = "player-card";
    p.innerHTML = `
    ${kickBtnHtml}
    <img src="${iconUrl}" class="player-avatar ${isOnline ? '' : 'grayscale'}" onerror="this.src='/Assets/Icons/default_player.png'" />
    <div class="player-info">
      <span class="player-name">${name}</span>
      <div class="badges">
        <span>${winDisplay}</span>
        ${equippedBadge ? `<div class="presence-badge">
          <img src="../Assets/Badges/${equippedBadge}.png" />
          <span>${formatBadgeName(equippedBadge).replace(" Badge", "")}</span></div>` : ""}
      </div>
      <div class="badges">
        ${statusBadge}
        ${isOnline ? '' : '<div class="offline-badge">OFFLINE</div>'}
      </div>
    </div>`;
    playersDiv.appendChild(p);
  });

  const statusMsgElem = document.getElementById("action-status");
  if (!requirePlayers) {
    statusMsgElem.innerHTML = `Game requires a minimum of ${config.min} players to begin...`;
    statusMsgElem.classList.remove("all-ready");
  } else if (isPlayerInRoom && otherPlayers.length > 0) {
    statusMsgElem.style.display = "block";
    statusMsgElem.innerHTML = `READY: ${readyCount} / ${otherPlayers.length}`;
    if (allReady) statusMsgElem.classList.add("all-ready");
    else statusMsgElem.classList.remove("all-ready");

    if (allReady && !isHost) statusMsgElem.innerHTML += ` (AWAITING HOST...)`;
  } else statusMsgElem.style.display = "none";

  let actionButtons = "";
  if (!isPlayerInRoom) actionButtons = `<button class="btn-action join neon-pulse" onclick="joinRoom('${roomId}')">JOIN ARENA</button>`;
  else if (isHost) actionButtons = `<button class="btn-action start ${(!allReady || !requirePlayers) ? 'locked' : 'neon-glow'}" ${(!allReady || !requirePlayers) ? 'disabled' : ''} onclick="prepareGame()">${(allReady && requirePlayers) ? '<i class="fas fa-check-circle"></i> START GAME' : 'LOCKED'}</button>`;
  else actionButtons = `<button class="btn-action ${amIReady ? 'ready-active' : 'ready-idle'}" onclick="toggleReady()">${amIReady ? 'UNREADY' : 'READY UP'}</button>`;

  roomControl.innerHTML = `
    <div class="action-bar-inner">
      ${actionButtons}
      ${isPlayerInRoom ? `<button class="btn-action leave-minimal" onclick="leaveRoom()"><i class="fas fa-sign-out-alt"></i> <span class="responsive-text">LEAVE ARENA</span></button>` : ""}
    </div>`;
}

// ===== UNIVERSAL GAME FUNCTIONS =====
function getCurrentPlayer(game) {
  return game.public.playerOrder[game.public.turnIndex];
}

function getNextPlayerId(game) {
  const nextIdx = (game.public.turnIndex + game.public.direction + game.public.playerOrder.length) % game.public.playerOrder.length;
  return game.public.playerOrder[nextIdx];
}

function getCardPower(card) {
    if (!card) return 0;
    return PRERANKMAP[card.rank] + (PRESUITMAP[card.suit] / 10);
}

function createStandardDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let shoe = [];
    
    for (let i = 0; i < 6; i++) {
        suits.forEach(s => {
            ranks.forEach(r => {
                shoe.push({ rank: r, suit: s });
            });
        });
    }
    return shuffle(shoe);
}

function createSingleDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let deck = [];
    suits.forEach(s => {
        ranks.forEach(r => {
            deck.push({ rank: r, suit: s });
        });
    });
    return shuffle(deck);
}

function advanceTurn(game) {
  const order = game.public.playerOrder;
  const len = order.length;
  let next = game.public.turnIndex + game.public.direction;

  if (next < 0) next = len - 1;
  if (next >= len) next = 0;

  game.public.turnIndex = next;
}

function reshuffleDeck(game) {
  const discard = game.public.discardPile;
  if (!discard || discard.length <= 1) return;
  const topCard = game.public.topCard;
  const cardsToShuffle = discard.filter(card => card !== topCard);
  game.deck = shuffle(cardsToShuffle);
  game.public.discardPile = [topCard];
  console.log(`[DECK] Reshuffled ${game.deck.length} cards.`);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function hostSkipPlayer() {
  const rid = selectedRoomId || currentRoomId;
  const room = rooms[rid];
  if (!room || room.hostId !== accountId) return;

  const gameRef = gamesRef.child(rid);
  const gameType = room.gameType.toLowerCase();

  await gameRef.transaction(game => {
    if (!game || !game.public) return game;
    const pub = game.public;
    const currentUid = pub.playerOrder[pub.turnIndex];

    if (!room.players || !room.players[currentUid]) {
      console.log(`[HOST] Skipping offline player in ${gameType}: ${currentUid}`);

      switch (gameType) {
        case "shu":
          advanceTurn(game);
          break;

        case "blackjack":
          pub.turnIndex++;
          if (pub.turnIndex >= pub.playerOrder.length) {
            pub.isDealerTurn = true;
          }
          break;

        case "poker":
          pub.playerStates[currentUid].folded = true;
          pub.playerStates[currentUid].hasActed = true;

          const activePlayers = pub.playerOrder.filter(uid => !pub.playerStates[uid].folded);
          if (activePlayers.length === 1) {
            pub.winner = activePlayers[0];
            pub.status = "calculating_poker";
            return game;
          }

          const allActed = activePlayers.every(uid => pub.playerStates[uid].hasActed);
          const allMatched = activePlayers.every(uid => pub.playerStates[uid].bet === pub.currentBet);

          if (allActed && allMatched) {
            const rounds = ["pre-flop", "flop", "turn", "river"];
            const nextIdx = rounds.indexOf(pub.round) + 1;
            if (pub.round === "river") pub.status = "calculating_poker";
            else {
              pub.round = rounds[nextIdx];
              pub.currentBet = 0;
              pub.playerOrder.forEach(u => { pub.playerStates[u].hasActed = false; pub.playerStates[u].bet = 0; });
            }
          }

          let nextIdx = (pub.turnIndex + 1) % pub.playerOrder.length;
          while (pub.playerStates[pub.playerOrder[nextIdx]].folded) {
            nextIdx = (nextIdx + 1) % pub.playerOrder.length;
          }
          pub.turnIndex = nextIdx;
          break;

        case "big2": {
          pub.passCount = (pub.passCount || 0) + 1;
          if (pub.passCount >= pub.playerOrder.length - 1) {
            pub.lastPlayed = null;
            pub.passCount = 0;
          }

          pub.turnIndex = (pub.turnIndex + 1) % pub.playerOrder.length;
          break;
        }

        case "mahjong": {
          let myHand = game.private[currentUid].hand;
          const revealed = pub.revealedHands?.[currentUid] || [];
          const isSetupPhase = pub.status === "playing" && !pub.gameStarted;

          if (game.deck.length === 0) {
            pub.status = "ended";
            pub.winner = "draw";
            pub.canInterrupt = false;
            console.log("[HOST] Game ended in a DRAW.");
            break;
          }

          if (pub.waitingForDraw) {
            myHand.push(game.deck.pop());
            pub.waitingForDraw = false;
            pub.wallCount = game.deck.length;
          }

          let hasFlowers = true;
          let safetyCounter = 0;
          while (hasFlowers && game.deck.length > 0 && safetyCounter < 20) {
            safetyCounter++;
            const flowerIndex = myHand.findIndex(t => isBonusTile(t));

            if (flowerIndex > -1) {
              const flowerTile = myHand.splice(flowerIndex, 1)[0];
              if (!pub.revealedHands) pub.revealedHands = {};
              if (!pub.revealedHands[currentUid]) pub.revealedHands[currentUid] = [];
              pub.revealedHands[currentUid].push({ type: 'flower', tiles: [flowerTile] });

              myHand.push(game.deck.pop());
              console.log(`[HOST] Auto-replaced flower ${safetyCounter} for ${currentUid}`);
            } else {
              hasFlowers = false;
            }
          }

          if (isSetupPhase) {
            if (pub.turnIndex < 3) pub.turnIndex++;
            else {
              pub.gameStarted = true;
              pub.turnIndex = 0;
              pub.waitingForDraw = false;
            }
          } else {
            let meldCount = 0;
            revealed.forEach(m => {
              if (m.type === 'flower' || m.type === 'season') return;
              meldCount += (m.type === 'kong') ? 3 : m.tiles.length;
            });

            while ((myHand.length + meldCount) > 13) {
              const discardedTile = myHand.pop();
              if (!pub.discards) pub.discards = [];
              pub.discards.push(discardedTile);
              console.log(`[HOST] Auto-discarded tile to reset hand: ${discardedTile}`);
            }

            pub.turnIndex = (pub.turnIndex + 1) % pub.playerOrder.length;
            pub.waitingForDraw = true;
            pub.canInterrupt = true;
          }

          pub.wallCount = game.deck.length;
          game.private[currentUid].hand = sortMJHand(myHand);
          pub.handCounts[currentUid] = myHand.length;

          if (game.deck.length === 0) {
            pub.status = "ended";
            pub.winner = "draw";
          }

          console.log(`[HOST] Auto-played turn for ${currentUid}. Setup Phase: ${isSetupPhase}`);
          break;
        }
      }
    }
    return game;
  });
}

async function prepareGame() {
  const room = rooms[selectedRoomId];
  if (!room || room.hostId !== accountId) return;

  const players = room.players || {};
  const playerIds = Object.keys(players);
  const readyList = room.ready || {};

  const config = GameConfigs[room.gameType] || { min: 2 };
  if (playerIds.length < config.min) {
    showMessage("Unable to Start Game", `Need at least ${config.min} players to start ${room.gameType}!`);
    return;
  }

  /* const allOnline = playerIds.every(uid => players[uid] === true);
  if (!allOnline) {
    showMessage("Unable to Start Game", "Some players are OFFLINE.");
    return;
  } */

  const otherPlayers = playerIds.filter(uid => uid !== room.hostId);
  const allReady = otherPlayers.every(uid => readyList[uid] === true);
  if (otherPlayers.length > 0 && !allReady) {
    showMessage("Unable to Start Game", "Not all players are READY.");
    return;
  }

  isResultShown = false;
  lastGameState = null;
  localLastShoutTime = 0;

  if (room.gameType === "Mahjong") {
    document.getElementById("mj-setup-modal").style.display = "flex";
    setTimeout(() => document.getElementById("mj-setup-modal").classList.add("show"), 50);
  } else {
    startGame();
  }
}

async function startGame(extraParams = {}) {
  const roomRef = roomsRef.child(currentRoomId);
  // await roomRef.child("ready").remove();

  const room = rooms[currentRoomId];
  const gameType = room.gameType.toLowerCase();
  const logic = GameLogics[gameType];

  const players = Object.keys(room.players || {});
  const order = shuffle(players);
  const initialData = logic.getInitialState(players, extraParams);
  initialData.public.playerOrder = order;
  bjStatusMsg.innerText = "EYES ON THE DEALER";

  await gamesRef.child(selectedRoomId).set(initialData);
  await roomsRef.child(selectedRoomId).update({ status: "playing" });
}

function listenToGame(roomId) {
  const room = rooms[roomId];
  if (!room) return;
  
  const gameType = room.gameType.toLowerCase();
  if (currentGameListener) gamesRef.child(roomId).off("value");

  const listener = (snap) => {
    const gameState = snap.val();
    if (!gameState) {
      clearMahjongTableUI();
      lastGameState = null;
      return;
    }

    lastGameState = gameState; 
    const pub = gameState.public;

    if (GameLogics[gameType]) {
      GameLogics[gameType].render(gameState);
    }
    
    if (gameType === "shu") {
      if (pub.pendingPenalties && pub.pendingPenalties[accountId]) {
        processShuPenalty();
      }
      const shout = pub.lastShout;
      if (shout && shout.time > localLastShoutTime) {
        localLastShoutTime = shout.time;
        const shouterName = allUsers[shout.by]?.displayName || "Someone";
        showMessage(`${shouterName} shouted SHU!`);
      }
    }
    
    if (gameType === "blackjack") {
      const roundResult = pub.lastRoundResult;

      if (roundResult && roundResult.time > lastBJRoundTime) {
        lastBJRoundTime = roundResult.time;

        if (roundResult.winner) {
          const name = allUsers[roundResult.winner]?.displayName || "A Player";
          const isMatchPoint = roundResult.points === 2;

          let msg = `${name} won the round!`;
          if (isMatchPoint) msg = `🔥 MATCH POINT for ${name}!`;

          if (pub.status !== "ended") showMessage(msg, "Next round starting...");
        } else {
          showMessage("No points awarded this round", "Next round starting...");
        }
      }
    }

    if (gameType === "poker") {
      if (pub.lastHandWinner && pub.lastHandWinnerTime > lastPokerRoundTime) {
        lastPokerRoundTime = pub.lastHandWinnerTime;

        const winnerId = pub.lastHandWinner;
        const name = allUsers[winnerId]?.displayName || "A Player";
        const isMatchPoint = pub.currentRound === (pub.maxRounds - 1);

        let msg = `${name} takes the pot!`;
        if (isMatchPoint) msg = `🏁 FINAL: ${name} is in the lead!`;

        if (pub.status === "round_over" || pub.status === "ended") {
          showMessage(msg, `Round ${pub.currentRound} complete.`);
        }
      }

      if (room.hostId === accountId) {
        if (pub.status === "playing") checkPokerRoundAdvance(roomId);
        if (pub.status === "calculating_poker") calculatePokerResults(roomId);
      }
    }

    if (gameType === "big2") {
      if (pub.status === "round_over" && pub.roundWinner && pub.roundWinnerTime > lastPresRoundTime) {
        lastPresRoundTime = pub.roundWinnerTime;

        const winnerId = pub.roundWinner; 
        const winnerName = allUsers[winnerId]?.displayName || "A Player";

        let msg = `🏆 ${winnerName} won round ${pub.currentRound}!`;
        let subMsg = "Next round starting...";
        
        showMessage(msg, subMsg);
      }

      if (room.hostId === accountId) {
        if (pub.status === "calculating_pres") calculatePresResults(selectedRoomId);
      }
    }

    if (gameType === "mahjong" && pub.revealedHands && pub.gameStarted) {
      const currentRevealed = pub.revealedHands;
      const isInitialSync = Object.keys(prevRevealedState).length === 0;
      let actingUid = null;
      let newMeld = null;

      Object.keys(currentRevealed).forEach(uid => {
        const currentMelds = currentRevealed[uid] || [];
        const prevMelds = prevRevealedState[uid] || [];

        if (currentMelds.length > prevMelds.length) {
          actingUid = uid;
          newMeld = currentMelds[currentMelds.length - 1];
        }
      });

      if (actingUid && newMeld && !isInitialSync) {
        const name = allUsers[actingUid]?.displayName || "Unknown User";
        const type = newMeld.type;

        let title = "";
        let sub = "";

        switch (type) {
          case 'pong': title = "🀄 PONG (碰)"; sub = `${name} took the triplet`; break;
          case 'chow': title = "🥢 CHOW (上)"; sub = `${name} completed a sequence`; break;
          case 'kong': title = "💥 KONG (槓)"; sub = `${name} declared a Quad`; break;
          case 'flower': title = "🌸 FLOWER"; sub = `${name} replaced a bonus tile`; break;
        }

        if (title) showMessage(title, sub);
      }

      prevRevealedState = JSON.parse(JSON.stringify(currentRevealed));
    }

    if (pub.status === "ended" && pub.winner === accountId) {
      if (!hasProcessedWin) {
        hasProcessedWin = true;
        usersRef.child(accountId).child('arenaWins').transaction(v => (v || 0) + 1);
      }
    } else if (pub.status === "playing") {
      hasProcessedWin = false;
    }
  };

  gamesRef.child(roomId).on("value", listener);
  currentGameListener = listener;
}

function showGameResults(winnerId, description = "") {
    if (isResultShown) return;
    isResultShown = true;

    const overlay = document.getElementById("result-overlay");
    const winnerNameElem = document.getElementById("result-winner-name");
    const avatarElem = document.getElementById("result-avatar");
    const descElem = document.getElementById("result-description");
    const winnerDisplay = document.getElementById("winner-display");

    if (winnerId === "draw") {
        winnerDisplay.style.display = "none";
        descElem.innerHTML = `<div class="draw-text">IT'S A DRAW</div>`;
    } else {
        winnerDisplay.style.display = "flex";
        const userData = allUsers[winnerId] || {};
        winnerNameElem.innerHTML = `<span class="avatar-crown">🏆</span> ${userData.displayName || "A Player"}`;
        
        let iconUrl = "../Assets/Icons/zendra_blue.png";
        if (userData.profileIcon === "google" && userData.googlePhotoURL) iconUrl = userData.googlePhotoURL;
        else if (userData.profileIcon) iconUrl = `../Assets/Icons/${userData.profileIcon}.png`;
        avatarElem.src = iconUrl;
        descElem.innerHTML = description;
    }

    overlay.style.display = "flex";
    requestAnimationFrame(() => { overlay.classList.add("show"); });

    const room = rooms[currentRoomId];
    const isHost = room && room.hostId === accountId;
    document.getElementById("host-result-controls").style.display = isHost ? "flex" : "none";
    document.getElementById("player-result-controls").style.display = isHost ? "none" : "flex";
}

async function rematch() {
    if (!currentRoomId) return;
    const rid = currentRoomId;
    clearMahjongTableUI();

    const room = rooms[rid];
    const updatedPlayers = {};

    if (room && room.players) {
        Object.keys(room.players).forEach(uid => {
            updatedPlayers[uid] = false;
        });
    }

    await roomsRef.child(rid).update({ 
        status: "waiting", 
        ready: updatedPlayers 
    });
  
    await gamesRef.child(rid).remove();
    
    resultUI.classList.remove("show");
    setTimeout(async () => { resultUI.style.display = "none"; }, 400);
}

async function deleteEntireRoom() {
    if (!currentRoomId) return;
    const rid = currentRoomId;

    leavingRoom = true; 
    await gamesRef.child(rid).remove();
    await roomsRef.child(rid).remove();

    resultUI.classList.remove("show");
    setTimeout(async () => { resultUI.style.display = "none"; }, 400);

    currentRoomId = null;
    exitGameUI();
    resetRoomView();
}

async function leaveArena() {
  const room = rooms[selectedRoomId];
  
  if (room && room.hostId === accountId) {
    const otherPlayers = Object.keys(room.players || {}).filter(uid => { return uid !== accountId && room.players[uid] === true; });
    if (otherPlayers.length > 0) {
      showMessage("Game cannot be terminated with active players.", "Wait for the game to end or all players to leave.");
      return;
    }
  }

  resultUI.classList.remove("show");
  setTimeout(async () => { resultUI.style.display = "none"; }, 400);

  try {
    await leaveRoom();
    renderRoomList();
  } finally {
    setTimeout(() => { leavingRoom = false; }, 500);
  }
}

// ===== GAME SHU =====
function isValidPlay(card, topCard, drawStack = 0) {
  if (drawStack > 0) return card.value === "+2" || card.value === "+4";
  return (card.color === topCard.color || card.value === topCard.value || card.color === "black");
}

function closeColorPicker() {
    const overlay = document.getElementById("color-picker-overlay");
    overlay.style.display = "none";
    pendingWildIndex = null; 
}

function updateShuDiscardPile(card) {
  const div = document.getElementById("discard-pile");
  div.innerHTML = "";
  const el = document.createElement("div");
  el.className = `shu-card ${card.color}`;
  el.innerText = card.value;
  div.appendChild(el);
}

async function selectWildColor(chosenColor) {
  document.getElementById("color-picker-overlay").style.display = "none";
  if (pendingWildIndex !== null) {
    executeShuCard(pendingWildIndex, chosenColor);
    pendingWildIndex = null;
  }
}

async function applyShuEffects(game, card) {
  const room = rooms[selectedRoomId];
  const value = card.value;

  if (value === "Reverse") game.public.direction *= -1;
  if (value === "Skip") advanceTurn(game);
  if (value === "+2") game.public.drawStack += 2;
  if (value === "+4") game.public.drawStack += 4;

  advanceTurn(game);
}

function createShuDeck() {
  let deck = [];
  COLORS.forEach(color => {
    VALUES.forEach(val => {
      deck.push({ color, value: val });
      if (val !== '0') deck.push({ color, value: val });
    });
  });

  for (let i = 0; i < 4; i++) {
    deck.push({ color: 'black', value: 'Wild' });
    deck.push({ color: 'black', value: '+4' });
  }
  return deck.sort(() => Math.random() - 0.5);
}

function renderShuOpponent(container, uid, gameState) {
    container.style.display = "flex";
    container.style.alignItems = "center";
    
    let iconUrl = "../Assets/Icons/zendra_blue.png";
    const userData = allUsers[uid] || {};
    const count = gameState.public.handCounts[uid] || 0;
    const room = rooms[selectedRoomId];
    const isOnline = room?.players?.[uid] === true;
    const name = allUsers[uid]?.displayName || "Player";

    if (userData.profileIcon === "google" && userData.googlePhotoURL) iconUrl = userData.googlePhotoURL;
    else if (userData.profileIcon) iconUrl = `../Assets/Icons/${userData.profileIcon}.png`;

    let cardsHtml = "";
    for (let i = 0; i < count; i++) cardsHtml += `<div class="shu-mini-card"></div>`;

    container.innerHTML = `
      <img src="${iconUrl}" class="player-avatar ${isOnline ? '' : 'grayscale'}"  onerror="this.src='/Assets/Icons/default_player.png'" />
      <div class="shu-opp-details">
        <div class="opp-name">${name} ${isOnline ? '' : '<span class="offline-badge" style="margin-left: 8px;">OFFLINE</span>'}</div>
        <div class="opp-hand-row">${cardsHtml} <span class="count-pill">${count}</span></div>
      </div>`;
}

async function handleShuAction(actionType, data = {}) {
  if (!selectedRoomId) return;

  const room = rooms[selectedRoomId];
  const gameType = room.gameType.toLowerCase();

  if (gameType === "shu") {
    if (actionType === "playCard") {
      await playShuCard(data.index);
    }
    if (actionType === "draw") {
      await drawShuCard();
    }
  }
}

async function playShuCard(index) {
    const gameSnap = await gamesRef.child(selectedRoomId).once("value");
    const game = gameSnap.val();
    if (getCurrentPlayer(game) !== accountId) return game;
    
    const card = game.private[accountId].hand[index];
    if (!card) return;

    if (card.color === "black" || card.value === "Wild" || card.value === "+4") {
        pendingWildIndex = index;
        document.getElementById("color-picker-overlay").style.display = "flex";
        return; 
    }

    executeShuCard(index, null);
}

async function executeShuCard(index, wildColor) {
  const gameRef = gamesRef.child(selectedRoomId);
  let gameEnded = false;

  await gameRef.transaction(game => {
    if (!game) return game;
    if (getCurrentPlayer(game) !== accountId) return game;

    const hand = game.private[accountId].hand;
    const card = { ...hand[index] };
    if (!card || !isValidPlay(card, game.public.topCard)) return game;
    if (wildColor) card.color = wildColor;

    const isFunctionCard = isNaN(card.value) || card.color === "black";

    if (hand.length === 1 && isFunctionCard) {
      if (!game.public.shuFlags) game.public.shuFlags = {};
      game.public.shuFlags[accountId] = false;

      let penaltyCard = null;
      let attempts = 0;

      while (attempts < 10) {
        if (!game.deck || game.deck.length === 0) reshuffleDeck(game);
        const drawn = game.deck.pop();
        if (!drawn) break;
        const isDrawnFunction = isNaN(drawn.value) || drawn.color === "black";

        if (!isDrawnFunction) {
          penaltyCard = drawn;
          break;
        } else {
          game.deck.unshift(drawn);
          attempts++;
        }
      }
      if (penaltyCard) hand.push(penaltyCard);
      else hand.push(game.deck.pop());

      hand.splice(index, 1);
      game.public.topCard = card;
      game.public.handCounts[accountId] = hand.length;

      showMessage("PENALTY +2 CARDS", "Cannot win on a function card");

      applyShuEffects(game, card);
      return game;
    }

    hand.splice(index, 1);
    game.public.topCard = card;
    game.public.handCounts[accountId] = hand.length;

    if (hand.length === 1) {
      if (!game.public.shuFlags) game.public.shuFlags = {};
      game.public.shuFlags[accountId] = false;
    }

    if (hand.length === 0) {
      gameEnded = true;
      game.public.winner = accountId;
    } else {
      applyShuEffects(game, card);
    }
    return game;
  });

  if (gameEnded) {
    setTimeout(async () => {
      const roomWinnersRef = roomsRef.child(selectedRoomId).child('winners').child(accountId);
      await roomWinnersRef.transaction((currentValue) => { return (currentValue || 0) + 1; });

      const userStatsRef = usersRef.child(accountId).child('arenaWins');
      await userStatsRef.transaction((val) => (val || 0) + 1);

      await roomsRef.child(selectedRoomId).update({ status: "ended" });
    }, 1500);
  }
}

async function drawShuCard() {
  const gameRef = gamesRef.child(selectedRoomId);
  let gameEnded = false;

  await gameRef.transaction(game => {
    if (!game) return game;
    if (getCurrentPlayer(game) !== accountId) return game;

    let drawCount = (game.public.drawStack > 0) ? game.public.drawStack : 1;
    game.public.drawStack = 0;

    for (let i = 0; i < drawCount; i++) {
      if (!game.deck || game.deck.length === 0) reshuffleDeck(game);
      if (game.deck && game.deck.length > 0) {
        const card = game.deck.pop();
        if (card) game.private[accountId].hand.push(card);
      } else {
        console.warn("No cards left in deck or discard pile!");
        gameEnded = true;
        game.public.winner = "draw";
        break;
      }
    }

    if (gameEnded) return roomsRef.child(selectedRoomId).update({ status: "ended" });
    game.public.handCounts[accountId] = game.private[accountId].hand.length;
    advanceTurn(game);
    return game;
  });
}

async function handleShuClick() {
  const gameRef = gamesRef.child(selectedRoomId);

  await gameRef.transaction(game => {
    if (!game || !game.public) return game;
    const pub = game.public;
    if (!pub.shuFlags) pub.shuFlags = {};
    if (!pub.pendingPenalties) pub.pendingPenalties = {};

    if (pub.handCounts[accountId] === 1 && !pub.shuFlags[accountId]) {
      pub.shuFlags[accountId] = true;
      pub.lastShout = { by: accountId, time: Date.now() }; 
      showMessage("SHU shouted!");
      return game;
    }

    for (let uid in pub.handCounts) {
      if (uid !== accountId && pub.handCounts[uid] === 1 && !pub.shuFlags[uid]) {
        pub.pendingPenalties[uid] = "SHU_MISS";
        showMessage("SHU Challenge Successful!");
        return game;
      }
    }
    return game;
  });
}

async function processShuPenalty() {
  const gameRef = gamesRef.child(selectedRoomId);
  await gameRef.transaction(game => {
    if (!game || !game.public.pendingPenalties?.[accountId]) return game;

    for (let i = 0; i < 2; i++) {
      if (!game.deck || game.deck.length === 0) reshuffleDeck(game);
      const card = game.deck.pop();
      if (card) game.private[accountId].hand.push(card);
    }

    game.public.handCounts[accountId] = game.private[accountId].hand.length;
    delete game.public.pendingPenalties[accountId];
    showMessage("PENALTY +2 CARDS", "SHU Missed, opponent successfully challenged.");

    if (game.public.shuFlags) game.public.shuFlags[accountId] = false;
    return game;
  });
}

// ===== GAME BLACKJACK =====
function createBJCardHTML(card, isHidden) {
  if (!card) return "";
  if (isHidden) return `
    <div class="playing-card back-style">
    <div class="card-pattern"></div>
    <div class="card-glow"></div>
    <div class="card-middle">
        <span class="logo-z">Z</span>
        <div class="logo-ring"></div>
    </div>
    <div class="corner-tech top-left"></div>
    <div class="corner-tech bottom-right"></div>
  </div>`;

  const symbols = { 'Hearts': '♥', 'Diamonds': '♦', 'Clubs': '♣', 'Spades': '♠' };
  const colorClass = (card.suit === 'Hearts' || card.suit === 'Diamonds') ? 'red-suit' : 'black-suit';

  return `
        <div class="playing-card ${colorClass}">
            <div class="card-corner top"><span>${card.rank}</span><span>${symbols[card.suit]}</span></div>
            <div class="card-center">${symbols[card.suit]}</div>
            <div class="card-corner bottom"><span>${card.rank}</span><span>${symbols[card.suit]}</span></div>
        </div>`;
}

function calculateBJScore(hand) {
    let score = 0;
    let aces = 0;
    hand.forEach(card => {
        if (['J', 'Q', 'K'].includes(card.rank)) score += 10;
        else if (card.rank === 'A') { score += 11; aces++; }
        else score += parseInt(card.rank);
    });
    while (score > 21 && aces > 0) { score -= 10; aces--; }
    return score;
}

async function handleBJMove(action) {
    const gameRef = gamesRef.child(selectedRoomId);
    await gameRef.transaction(game => {
        if (!game) return game;
        const uid = accountId;
        const hand = game.public.hands[uid];

        if (action === 'hit') {
            const card = game.deck.pop();
            hand.push(card);
            game.public.handCounts[uid] = hand.length;
            
            if (calculateBJScore(hand) >= 21) {
                game.public.turnIndex++;
                if (game.public.turnIndex >= game.public.playerOrder.length) game.public.isDealerTurn = true;
            }
        } else {
            game.public.turnIndex++;
            if (game.public.turnIndex >= game.public.playerOrder.length) game.public.isDealerTurn = true;
        }
        return game;
    });
}

function renderBjOpponent(container, uid, gameState) {
  const pub = gameState.public;
  const room = rooms[selectedRoomId];

  const isOnline = room?.players?.[uid] === true;
  const userData = allUsers[uid] || {};
  const name = userData.displayName || "Player";
  const oppHand = pub.hands[uid] || [];
  const oppScore = calculateBJScore(oppHand);

  const myIndex = pub.playerOrder.indexOf(uid);
  const isCurrentTurn = (pub.turnIndex === myIndex);
  const hasPassedTurn = (pub.turnIndex > myIndex || pub.status === "ended");
  const points = pub.roundPoints[uid] || 0;

  let iconUrl = "../Assets/Icons/zendra_blue.png";
  if (userData.profileIcon === "google" && userData.googlePhotoURL) iconUrl = userData.googlePhotoURL;
  else if (userData.profileIcon) iconUrl = `../Assets/Icons/${userData.profileIcon}.png`;

  const cardsHtml = oppHand.map((card, i) => {
    const shouldHide = (i === 0 && !isCurrentTurn && !hasPassedTurn);

    if (shouldHide) {
      return `<div class="playing-mini-card back-style">?</div>`;
    }

    const symbols = { 'Hearts': '♥', 'Diamonds': '♦', 'Clubs': '♣', 'Spades': '♠' };
    const symbol = symbols[card.suit] || '♠';
    const isRed = (card.suit === 'Hearts' || card.suit === 'Diamonds');

    return `<div class="playing-mini-card ${isRed ? 'red' : 'black'}">
      <div class="mini-corner">${card.rank}</div>
      <div class="mini-suit">${symbol}</div>
    </div>`;
  }).join('');

  container.innerHTML = `
    <div class="opp-info glass-panel ${isCurrentTurn ? 'active-glow' : ''}">
      <img src="${iconUrl}" class="player-avatar mini ${isOnline ? '' : 'grayscale'}"  onerror="this.src='/Assets/Icons/default_player.png'" />
      <div class="opp-name-row"><b>${name}</b></div>
        ${isOnline ? '' : '<div class="offline-badge">OFFLINE</div>'}
        <div class="bj-points">${"● ".repeat(points)}${"○ ".repeat(3 - points)}<span class="bj-score-badge">${(isCurrentTurn || hasPassedTurn) ? oppScore : '?'}</span></div>
        <div class="opp-hand-row">${cardsHtml}</div>
      </div>`;
}

async function runDealerAI(roomId) {
    const room = rooms[roomId];
    if (!room || room.hostId !== accountId) return;

    const gameRef = gamesRef.child(roomId);
    
    await gameRef.transaction(game => {
        if (!game || !game.public.isDealerTurn || game.public.status !== "playing") return game;

        const dealerHand = game.public.dealerHand;
        const dealerScore = calculateBJScore(dealerHand);

        if (dealerScore < 17) {
            if (!game.deck || game.deck.length === 0) reshuffleDeck(game);
            const newCard = game.deck.pop();
            if (newCard) dealerHand.push(newCard);
            return game;
        } else {
            game.public.status = "calculating_bj";
            return game;
        }
    });
}

async function calculateBJResults(roomId) {
  const gameRef = gamesRef.child(roomId);

  await gameRef.transaction(game => {
    if (!game || game.public.status !== "calculating_bj") return game;

    const pub = game.public;
    const dealerScore = calculateBJScore(pub.dealerHand);

    let bestScore = -1;
    let winnersList = [];

    pub.playerOrder.forEach(uid => {
      const pScore = calculateBJScore(pub.hands[uid]);
      if (pScore <= 21) {
        if (pScore > bestScore) {
          bestScore = pScore;
          winnersList = [uid];
        } else if (pScore === bestScore) {
          winnersList.push(uid);
        }
      }
    });

    const isTie = winnersList.length > 1;
    const beatDealer = bestScore > dealerScore || dealerScore > 21;
    const roundWinner = (winnersList.length === 1 && beatDealer) ? winnersList[0] : null;

    if (roundWinner) {
      pub.roundPoints[roundWinner] = (pub.roundPoints[roundWinner] || 0) + 1;
      pub.lastRoundResult = {
        winner: roundWinner,
        points: pub.roundPoints[roundWinner],
        time: Date.now()
      };

      if (pub.roundPoints[roundWinner] >= 3) {
        pub.status = "ended";
        pub.winner = roundWinner;
      } else {
        pub.status = "round_over";
      }
    } else {
      pub.lastRoundResult = {
        winner: null,
        reason: isTie ? "TIE" : "DEALER",
        time: Date.now()
      };
      pub.status = "round_over";
    }

    return game;
  });

  const snap = await gameRef.child("public/winner").once("value");
  const matchWinner = snap.val();
  if (matchWinner) {
    await roomsRef.child(roomId).child('winners').child(matchWinner).transaction(v => (v || 0) + 1);
    await roomsRef.child(roomId).update({ status: "ended" });
  } else {
    setTimeout(() => startNextBJRound(roomId), 4000);
  }
}

async function startNextBJRound(roomId) {
    const gameRef = gamesRef.child(roomId);
    await gameRef.transaction(game => {
        if (!game || game.public.status !== "round_over") return game;

        let deck = createStandardDeck();
        game.deck = deck;
        game.public.dealerHand = [deck.pop(), deck.pop()];
        game.public.isDealerTurn = false;
        game.public.turnIndex = 0;
        game.public.currentRound = (game.public.currentRound || 1) + 1;

        game.public.playerOrder.forEach(uid => {
            game.public.hands[uid] = [deck.pop(), deck.pop()];
            game.public.handCounts[uid] = 2;
        });

        game.public.status = "playing";
        return game;
    });
}

// ===== GAME POKER =====
function renderPokerOpponents(gameState) {
  const pub = gameState.public;
  const room = rooms[selectedRoomId];
  const showdown = pub.showdownHands || {};

  const left = document.getElementById("poker-opps-left");
  const right = document.getElementById("poker-opps-right");
  left.innerHTML = ""; right.innerHTML = "";

  const myIdx = pub.playerOrder.indexOf(accountId);
  pub.playerOrder.forEach((uid, i) => {
    if (uid === accountId) return;

    const state = pub.playerStates[uid];
    const isTurn = pub.turnIndex === i && pub.status === "playing";
    const isOnline = room?.players?.[uid] === true;
    const userData = allUsers[uid] || {};

    let iconUrl = "../Assets/Icons/zendra_blue.png";
    if (userData.profileIcon === "google" && userData.googlePhotoURL) iconUrl = userData.googlePhotoURL;
    else if (userData.profileIcon) iconUrl = `../Assets/Icons/${userData.profileIcon}.png`;

    const revealedHand = showdown[uid];
    const cardsHtml = (revealedHand && pub.status !== "playing") ? revealedHand.map(c => createPokerMiniCardHTML(c)).join('') : `<div class="playing-mini-card back-style">?</div><div class="playing-mini-card back-style">?</div>`;

    const div = document.createElement("div");
    div.className = "opp-slot";
    div.innerHTML = `
      <div class="opp-info glass-panel ${isTurn ? 'active-glow' : ''}">
        <img src="${iconUrl}" class="player-avatar mini ${isOnline ? '' : 'grayscale'}" onerror="this.src='/Assets/Icons/default_player.png'" />
        <div class="opp-name-row"><b>${userData.displayName || "Player"}</b></div>
        ${isOnline ? '' : '<div class="offline-badge">OFFLINE</div>'}
        <div class="opp-hand-row">${state.folded ? '<span class="fold-tag">FOLDED</span>' : cardsHtml}</div>
        <div class="poker-chips-badge"><i class="fa-solid fa-wallet"></i> ${state.chips}</div>
      </div>`;

    (i < myIdx) ? left.appendChild(div) : right.appendChild(div);
  });
}

function createPokerMiniCardHTML(card) {
  const symbols = { 'Hearts': '♥', 'Diamonds': '♦', 'Clubs': '♣', 'Spades': '♠' };
  const symbol = symbols[card.suit] || '♠';
  const isRed = (card.suit === 'Hearts' || card.suit === 'Diamonds');
  return `
    <div class="playing-mini-card ${isRed ? 'red' : 'black'}">
      <div class="mini-corner">${card.rank}</div>
      <div class="mini-suit">${symbol}</div>
    </div>`;
}

async function handlePokerMove(action, raiseAmount) {
  const gameRef = gamesRef.child(selectedRoomId);
  await gameRef.transaction(game => {
    if (!game || !game.public) return game;
    const pub = game.public;
    const myState = pub.playerStates[accountId];

    if (action === 'fold') {
      myState.folded = true;
      myState.hasActed = true;
    } else if (action === 'call') {
      const amountNeeded = pub.currentBet - myState.bet;
      const actualCall = Math.min(myState.chips, amountNeeded);
      myState.chips -= actualCall;
      myState.bet += actualCall;
      pub.pot += actualCall;
      myState.hasActed = true;
    } else if (action === 'raise') {
      const amountToCall = pub.currentBet - myState.bet;
      const totalCost = amountToCall + raiseAmount;

      if (myState.chips >= totalCost) {
        myState.chips -= totalCost;
        myState.bet += totalCost;
        pub.pot += totalCost;
        pub.currentBet = myState.bet;

        pub.playerOrder.forEach(uid => {
          pub.playerStates[uid].hasActed = (uid === accountId);
        });
      }
    }

    const activePlayers = pub.playerOrder.filter(uid => !pub.playerStates[uid].folded);
    if (activePlayers.length === 1) {
        pub.lastHandWinner = activePlayers[0];
        pub.status = "calculating_poker";
        return game;
    }

    const allActed = activePlayers.every(uid => pub.playerStates[uid].hasActed);
    const allMatched = activePlayers.every(uid => pub.playerStates[uid].bet === pub.currentBet);

    if (allActed && allMatched) {
      if (pub.round === "river") {
        pub.status = "calculating_poker";
      } else {
        const rounds = ["pre-flop", "flop", "turn", "river"];
        const nextRoundIdx = rounds.indexOf(pub.round) + 1;
        pub.round = rounds[nextRoundIdx];
        
        pub.currentBet = 0;
        pub.playerOrder.forEach(uid => {
          pub.playerStates[uid].hasActed = false;
          pub.playerStates[uid].bet = 0;
        });
        
        let firstPlayer = 0;
        while(pub.playerStates[pub.playerOrder[firstPlayer]].folded) firstPlayer++;
        pub.turnIndex = firstPlayer;
      }
      return game;
    }

    let nextIdx = (pub.turnIndex + 1) % pub.playerOrder.length;
    while (pub.playerStates[pub.playerOrder[nextIdx]].folded) {
      nextIdx = (nextIdx + 1) % pub.playerOrder.length;
    }
    pub.turnIndex = nextIdx;

    return game;
  });
}

function toggleRaiseSlider(gameState) {
    const container = document.getElementById("raise-slider-container");
    const slider = document.getElementById("poker-raise-slider");
    const label = document.getElementById("raise-amount-label");
    
    const myState = gameState.public.playerStates[accountId];
    const currentBet = gameState.public.currentBet;
    
    const minRaise = 50; 
    const maxRaise = myState.chips - (currentBet - myState.bet);

    if (container.style.display === "none") {
        container.style.display = "block";
        slider.min = minRaise;
        slider.max = maxRaise;
        slider.value = minRaise;
        label.innerText = minRaise;

        slider.oninput = (e) => {
            label.innerText = e.target.value;
        };
    } else {
        container.style.display = "none";
    }
}

function confirmRaise() {
    const amount = parseInt(document.getElementById("poker-raise-slider").value);
    handlePokerMove('raise', amount);
    document.getElementById("raise-slider-container").style.display = "none";
}

async function checkPokerRoundAdvance(roomId) {
  const room = rooms[roomId];
  if (!room || room.hostId !== accountId) return;

  const gameRef = gamesRef.child(roomId);
  await gameRef.transaction(game => {
    if (!game || game.public.status !== "playing") return game;
    const pub = game.public;

    const activePlayers = pub.playerOrder.filter(uid => !pub.playerStates[uid].folded);
    const allActed = activePlayers.every(uid => pub.playerStates[uid].hasActed);
    const allMatched = activePlayers.every(uid => pub.playerStates[uid].bet === pub.currentBet);

    if (allActed && allMatched && activePlayers.length > 1) {
      if (pub.round === "river") {
        pub.status = "calculating_poker"; 
        return game;
      }

      pub.playerOrder.forEach(uid => {
        pub.playerStates[uid].hasActed = false;
        pub.playerStates[uid].bet = 0;
      });
      pub.currentBet = 0;
      pub.turnIndex = 0;

      if (pub.round === "pre-flop") {
        pub.round = "flop";
      } else if (pub.round === "flop") {
        pub.round = "turn";
      } else if (pub.round === "turn") {
        pub.round = "river";
      }
    }
    return game;
  });
}

async function calculatePokerResults(roomId) {
  const gameRef = gamesRef.child(roomId);
  let matchIsOver = false;

  const snap = await gameRef.once("value");
  const gameData = snap.val();
  if (!gameData) return;

  const activePlayers = gameData.public.playerOrder.filter(uid => !gameData.public.playerStates[uid].folded);
  const revealedHands = {};
  activePlayers.forEach(uid => {
    revealedHands[uid] = gameData.private[uid].hand;
  });

  await gameRef.transaction(game => {
    if (!game || game.public.status !== "calculating_poker") return game;
    const pub = game.public;

    const community = [...(pub.communityCards || []), ...(pub.dealerHole || [])];
    const activePlayersList = pub.playerOrder.filter(uid => !pub.playerStates[uid].folded);

    const rankMap = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    let winnerId = activePlayersList[0];
    let bestScore = -1;

    activePlayersList.forEach(uid => {
      const hand = game.private[uid].hand;
      const fullHand = [...hand, ...community];

      const ranks = fullHand.map(c => rankMap[c.rank]).sort((a, b) => b - a);
      const counts = {};
      ranks.forEach(r => counts[r] = (counts[r] || 0) + 1);

      const quads = Object.keys(counts).filter(r => counts[r] === 4).map(Number).sort((a, b) => b - a);
      const trips = Object.keys(counts).filter(r => counts[r] === 3).map(Number).sort((a, b) => b - a);
      const pairs = Object.keys(counts).filter(r => counts[r] === 2).map(Number).sort((a, b) => b - a);

      const suits = fullHand.map(c => c.suit);
      const suitCounts = {};
      suits.forEach(s => suitCounts[s] = (suitCounts[s] || 0) + 1);
      const isFlush = Object.values(suitCounts).some(count => count >= 5);

      const uniqueRanks = [...new Set(ranks)].sort((a, b) => b - a);
      let isStraight = false;
      let straightHigh = 0;
      for (let i = 0; i <= uniqueRanks.length - 5; i++) {
        if (uniqueRanks[i] - uniqueRanks[i + 4] === 4) {
          isStraight = true;
          straightHigh = uniqueRanks[i];
          break;
        }
      }

      if (!isStraight && uniqueRanks.includes(14) && uniqueRanks.includes(2) &&
        uniqueRanks.includes(3) && uniqueRanks.includes(4) && uniqueRanks.includes(5)) {
        isStraight = true;
        straightHigh = 5;
      }

      let score = 0;

      if (quads.length > 0) {
        const kicker = ranks.find(r => r !== quads[0]);
        score = 7000000 + (quads[0] * 15) + kicker;
      } else if (trips.length > 0 && (trips.length > 1 || pairs.length > 0)) {
        const pairSide = trips.length > 1 ? trips[1] : pairs[0];
        score = 6000000 + (trips[0] * 15) + pairSide;
      } else if (isFlush) {
        const flushRanks = fullHand.filter(c => suitCounts[c.suit] >= 5).map(c => rankMap[c.rank]).sort((a, b) => b - a);
        score = 5000000 + flushRanks[0];
      } else if (isStraight) {
        score = 4000000 + straightHigh;
      } else if (trips.length > 0) {
        const kickers = ranks.filter(r => r !== trips[0]).slice(0, 2);
        score = 3000000 + (trips[0] * 225) + (kickers[0] * 15) + kickers[1];
      } else if (pairs.length >= 2) {
        const kicker = ranks.find(r => r !== pairs[0] && r !== pairs[1]);
        score = 2000000 + (pairs[0] * 225) + (pairs[1] * 15) + kicker;
      } else if (pairs.length === 1) {
        const kickers = ranks.filter(r => r !== pairs[0]).slice(0, 3);
        score = 1000000 + (pairs[0] * 3375) + (kickers[0] * 225) + (kickers[1] * 15) + kickers[2];
      } else {
        score = (ranks[0] * 50625) + (ranks[1] * 3375) + (ranks[2] * 225) + (ranks[3] * 15) + ranks[4];
      }

      if (score > bestScore) {
        bestScore = score;
        winnerId = uid;
      }
    });

    pub.playerStates[winnerId].chips += pub.pot;
    pub.pot = 0;
    pub.lastHandWinner = winnerId;
    pub.lastHandWinnerTime = Date.now();
    pub.showdownHands = revealedHands;

    if (pub.currentRound >= pub.maxRounds) {
      let topPlayer = pub.playerOrder[0];
      let topChips = -1;
      pub.playerOrder.forEach(uid => {
        if (pub.playerStates[uid].chips > topChips) {
          topChips = pub.playerStates[uid].chips;
          topPlayer = uid;
        }
      });
      pub.winner = topPlayer;
      pub.status = "ended";
      matchIsOver = true;
    } else {
      pub.status = "round_over";
      matchIsOver = false;
    }

    return game;
  });

  if (matchIsOver) {
    const finalWinnerSnap = await gameRef.child("public/winner").once("value");
    const finalWinnerId = finalWinnerSnap.val();
    if (finalWinnerId) {
      await roomsRef.child(roomId).child('winners').child(finalWinnerId).transaction(v => (v || 0) + 1);
      await roomsRef.child(roomId).update({ status: "ended" });
    }
  } else {
    setTimeout(() => startNextPokerRound(roomId), 5000);
  }
}

async function startNextPokerRound(roomId) {
  const gameRef = gamesRef.child(roomId);
  await gameRef.transaction(game => {
    if (!game || game.public.status !== "round_over") return game;

    let deck = createStandardDeck();
    const pub = game.public;
    const SB = 10;
    const BB = 20;

    const sbIdx = pub.currentRound % pub.playerOrder.length;
    const bbIdx = (pub.currentRound + 1) % pub.playerOrder.length;

    pub.playerOrder.forEach((uid, idx) => {
      const p = pub.playerStates[uid];
      p.bet = 0;
      if (idx === sbIdx) { p.chips -= SB; p.bet = SB; pub.pot += SB; }
      if (idx === bbIdx) { p.chips -= BB; p.bet = BB; pub.pot += BB; }

      p.folded = false;
      p.hasActed = false;
    });

    pub.currentBet = BB;
    pub.turnIndex = (bbIdx + 1) % pub.playerOrder.length;
    pub.currentRound++;
    pub.status = "playing";
    pub.round = "pre-flop";
    pub.communityCards = [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()],
      game.deck = deck;

    pub.playerOrder.forEach(uid => {
      game.private[uid].hand = [deck.pop(), deck.pop()];
      pub.playerStates[uid].bet = 0;
      pub.playerStates[uid].folded = false;
      pub.playerStates[uid].hasActed = false;
    });

    return game;
  });
}

// ===== GAME BIG 2 =====
function renderPresOpponents(gameState) {
  const pub = gameState.public;
  const room = rooms[selectedRoomId];

  const left = document.getElementById("pres-opps-left");
  const right = document.getElementById("pres-opps-right");
  if (!left || !right) return;

  left.innerHTML = ""; right.innerHTML = "";
  const myIdx = pub.playerOrder.indexOf(accountId);

  pub.playerOrder.forEach((uid, i) => {
    if (uid === accountId) return;
    const count = pub.handCounts[uid] || 0;
    const isTurn = pub.turnIndex === i;
    const userData = allUsers[uid] || {};
    const isOnline = room?.players?.[uid] === true;
    const totalPenalty = pub.totalScores?.[uid] || 0;

    let iconUrl = "../Assets/Icons/zendra_blue.png";
    if (userData.profileIcon === "google" && userData.googlePhotoURL) iconUrl = userData.googlePhotoURL;
    else if (userData.profileIcon) iconUrl = `../Assets/Icons/${userData.profileIcon}.png`;

    const visualCount = Math.min(count, 10); 
    let cardsHTML = "";
    for (let j = 0; j < visualCount; j++) {
        cardsHTML += `<div class="playing-mini-card back-style" style="left: ${j * 5}px; z-index: ${j};">?</div>`;
    }

    const div = document.createElement("div");
    div.className = "opp-slot";
    div.innerHTML = `
    <div class="opp-info glass-panel ${isTurn ? 'active-glow' : ''}">
      <img src="${iconUrl}" class="player-avatar mini ${isOnline ? '' : 'grayscale'}" onerror="this.src='/Assets/Icons/default_player.png'" />
      <div class="opp-name-row"><b>${userData.displayName || "Player"}</b></div>
      <div class="pres-penalty-score">Penalty: ${totalPenalty}/18</div>
      ${isOnline ? '' : '<div class="offline-badge">OFFLINE</div>'}
      <div class="pres-opp-hand">
        <div class="visual-card-stack" style="width: ${25 + (visualCount * 5)}px;">
          ${cardsHTML}
        </div>
        <span class="card-count-badge">x${count}</span>
      </div>
    </div>`;
    (i < myIdx) ? left.appendChild(div) : right.appendChild(div);
  });
}

function togglePresSelection(idx) {
    const pos = selectedPresIndices.indexOf(idx);
    if (pos > -1) selectedPresIndices.splice(pos, 1);
    else selectedPresIndices.push(idx);
    GameLogics.big2.render(lastGameState);
}

function getHandType(cards) {
    const len = cards.length;
    const rankPowers = cards.map(c => PRERANKMAP[c.rank]).sort((a, b) => a - b);
    const absolutePowers = cards.map(c => getCardPower(c)).sort((a, b) => a - b);
    
    if (len === 1) return { type: 'SINGLE', power: absolutePowers[0], count: 1, rank: 0 };

    const allSameRank = cards.every(c => c.rank === cards[0].rank);
    if (allSameRank) {
        if (len === 2) return { type: 'PAIR', power: absolutePowers[1], count: 2, rank: 0 };
    }

    if (len === 5) {
        const counts = {};
        rankPowers.forEach(p => counts[p] = (counts[p] || 0) + 1);
        const values = Object.values(counts);

        const isFlush = cards.every(c => c.suit === cards[0].suit);
        let isStraight = true;
        for (let i = 0; i < rankPowers.length - 1; i++) {
            if (rankPowers[i+1] !== rankPowers[i] + 1) isStraight = false;
        }
        if (isStraight && isFlush) return { type: 'STR. FLUSH', power: absolutePowers[4], count: 5, rank: 5 };

        if (values.includes(4)) {
            const quadRank = Object.keys(counts).find(r => counts[r] === 4);
            const quadPower = Math.max(...cards.filter(c => PRERANKMAP[c.rank] == quadRank).map(c => getCardPower(c)));
            return { type: 'QUADS', power: quadPower, count: 5, rank: 4 };
        }

        if (values.includes(3) && values.includes(2)) {
            const tripleRank = Object.keys(counts).find(r => counts[r] === 3);
            const triplePower = Math.max(...cards.filter(c => PRERANKMAP[c.rank] == tripleRank).map(c => getCardPower(c)));
            return { type: 'FULL HOUSE', power: triplePower, count: 5, rank: 3 };
        }

        if (isFlush) return { type: 'FLUSH', power: absolutePowers[4], count: 5, rank: 2 };
        if (isStraight) return { type: 'STRAIGHT', power: absolutePowers[4], count: 5, rank: 1 };
    }

    return null; 
}

async function handlePresPlay() {
  if (selectedPresIndices.length === 0) return;

  const indicesToPlay = [...selectedPresIndices];
  selectedPresIndices = [];

  const gameRef = gamesRef.child(selectedRoomId);
  await gameRef.transaction(game => {
    if (!game || !game.private[accountId]) return game;

    const pub = game.public;
    const myHand = game.private[accountId].hand;

    const selectedCards = indicesToPlay.map(i => myHand[i]).filter(c => c);
    const myCombo = getHandType(selectedCards);
    if (!myCombo) return;

    if (pub.isFirstMoveOfRound) {
      const absoluteLowestCard = myHand[0];
      const includesLowest = selectedCards.some(c =>
        c.rank === absoluteLowestCard.rank && c.suit === absoluteLowestCard.suit
      );

      if (!includesLowest) {
        showMessage("First move must include your lowest card!");
        return;
      }
    }

    if (pub.lastPlayed && pub.lastPlayed.combo) {
      const last = pub.lastPlayed.combo;
      if (myCombo.count !== last.count) return;

      if (myCombo.count === 5) {
        if (myCombo.rank > last.rank) {
        } else if (myCombo.rank === last.rank) {
          if (myCombo.power <= last.power) return;
        } else {
          return;
        }
      } else {
        if (myCombo.type !== last.type) return;
        if (myCombo.power <= last.power) return;
      }
    }

    const remainingHand = myHand.filter((_, i) => !indicesToPlay.includes(i));
    remainingHand.sort((a, b) => getCardPower(a) - getCardPower(b));

    game.private[accountId].hand = remainingHand;
    pub.handCounts[accountId] = remainingHand.length;

    pub.lastPlayed = { cards: selectedCards, uid: accountId, combo: myCombo  };
    pub.lastPlayerToPlay = accountId;
    pub.passCount = 0;

    const MAX_POWER = 15.4; 
    const isUnbeatable = (myCombo.power >= MAX_POWER) || (myCombo.rank === 5);

    if (isUnbeatable && remainingHand.length > 0) {
        pub.lastPlayed = null; 
        pub.lastPlayerToPlay = accountId;
        pub.passCount = 0;
    } else {
        pub.lastPlayed = { cards: selectedCards, uid: accountId, combo: myCombo };
        pub.lastPlayerToPlay = accountId;
        pub.passCount = 0;

        if (remainingHand.length === 0) {
            pub.status = "calculating_pres";
            pub.roundWinner = accountId;
            pub.roundWinnerTime = Date.now();
        } else {
            advancePresTurn(pub);
        }
    }

    pub.isFirstMoveOfRound = false;
    return game;
  });

  if (GameLogics.big2) GameLogics.big2.render(lastGameState);
}

async function handlePresPass() {
    const gameRef = gamesRef.child(selectedRoomId);
    await gameRef.transaction(game => {
        if (!game || !game.public) return game;
        const pub = game.public;
        pub.passCount = (pub.passCount || 0) + 1;
        advancePresTurn(pub);
        selectedPresIndices = [];
        return game;
    });
}

function advancePresTurn(pub) {
    pub.turnIndex = (pub.turnIndex + 1) % pub.playerOrder.length;
    let attempts = 0;
    while ((pub.finishedPlayers || []).includes(pub.playerOrder[pub.turnIndex]) && attempts < 10) {
        pub.turnIndex = (pub.turnIndex + 1) % pub.playerOrder.length;
        attempts++;
    }
}

async function clearPresPile(rid) {
    await gamesRef.child(rid).child('public').update({
        lastPlayed: null,
        passCount: 0
    });
}

async function calculatePresResults(roomId) {
  const gameRef = gamesRef.child(roomId);
  let matchIsOver = false;

  await gameRef.transaction(game => {
    if (!game || game.public.status !== "calculating_pres") return game;
    const pub = game.public;

    if (!pub.totalScores) {
      pub.totalScores = {};
      pub.playerOrder.forEach(uid => pub.totalScores[uid] = 0);
    }

    pub.playerOrder.forEach(uid => {
      const cardsLeft = pub.handCounts[uid] || 0;
      pub.totalScores[uid] += cardsLeft;
    });

    const loser = pub.playerOrder.find(uid => pub.totalScores[uid] >= 18);

    if (loser) {
      let winnerId = pub.playerOrder[0];
      let minScore = pub.totalScores[winnerId];

      pub.playerOrder.forEach(uid => {
        if (pub.totalScores[uid] < minScore) {
          minScore = pub.totalScores[uid];
          winnerId = uid;
        }
      });

      pub.winner = winnerId;
      pub.status = "ended";
      matchIsOver = true;
    } else {
      pub.status = "round_over";
    }

    return game;
  });

  if (matchIsOver) {
    const finalWinnerSnap = await gameRef.child("public/winner").once("value");
    const finalWinnerId = finalWinnerSnap.val();
    if (finalWinnerId) {
      await roomsRef.child(roomId).child('winners').child(finalWinnerId).transaction(v => (v || 0) + 1);
      await roomsRef.child(roomId).update({ status: "ended" });
    }
  } else {
    setTimeout(() => startNextPresRound(roomId), 4000);
  }
}

async function startNextPresRound(roomId) {
  const gameRef = gamesRef.child(roomId);
  await gameRef.transaction(game => {
    if (!game || game.public.status !== "round_over") return game;
    let deck = createSingleDeck();
    const pub = game.public;

    pub.currentRound++;
    pub.status = "playing";
    pub.lastPlayed = null;
    pub.isFirstMoveOfRound = true;
    pub.passCount = 0;

    let lowestPower = 999;
    let starterUid = pub.playerOrder[0];

    pub.playerOrder.forEach(uid => {
      const newHand = [];
      for (let c = 0; c < 13; c++) { newHand.push(deck.pop()); }

      newHand.forEach(card => {
        const p = getCardPower(card);
        if (p < lowestPower) { lowestPower = p; starterUid = uid; }
      });

      if (!game.private[uid]) game.private[uid] = {};
      game.private[uid].hand = newHand.sort((a, b) => getCardPower(a) - getCardPower(b));
      pub.handCounts[uid] = 13;
    });

    pub.turnIndex = pub.playerOrder.indexOf(starterUid);
    return game;
  });
}

// ===== GAME MAHJONG =====
function getTileSortIndex(t) {
    const cleanT = t ? t.replace(/\uFE0E/g, '') : '';
    return MJ_SORT_ORDER.map(s => s.replace(/\uFE0E/g, '')).indexOf(cleanT);
}

function selectMJTile(index) {
    selectedMJIndex = (selectedMJIndex === index) ? null : index;
    GameLogics.mahjong.render(lastGameState);
}

function toggleChowMenu() {
    isChowMenuOpen = !isChowMenuOpen;
    GameLogics.mahjong.render(lastGameState);
}

function handleChowClick(idx) {
    isChowMenuOpen = false;
    handleMJAction('chow', idx);
}

function isBonusTile(tile) {
    if (!tile) return false;
    const clean = tile.replace(/\uFE0E/g, '');
    const bonusSet = [
        ...MJ_TILES.flowers.map(t => t.replace(/\uFE0E/g, '')),
        ...MJ_TILES.seasons.map(t => t.replace(/\uFE0E/g, ''))
    ];
    return bonusSet.includes(clean);
}

function sortMJHand(handArray) {
    const clean = (s) => s ? s.replace(/\uFE0E/g, '') : '';
    const cleanOrder = MJ_SORT_ORDER.map(t => clean(t));

    return [...handArray].sort((a, b) => {
        const indexA = cleanOrder.indexOf(clean(a));
        const indexB = cleanOrder.indexOf(clean(b));
        return indexA - indexB;
    });
}

function getTileSuite(tile) {
    if (MJ_TILES.bamboo.includes(tile)) return 'bamboo';
    if (MJ_TILES.dots.includes(tile)) return 'dots';
    if (MJ_TILES.chars.includes(tile)) return 'chars';
    if (MJ_TILES.dragons.includes(tile) && tile !== "🀄︎") return 'dragon';
    if (MJ_TILES.winds.includes(tile)) return 'winds';
    if (MJ_TILES.flowers.includes(tile) || MJ_TILES.seasons.includes(tile)) return 'unique';
    return 'chong';
}

function setWind(type) {
  selectedWind = type;
  const currentActive = document.querySelector('.wind-toggle-group .active');
  if (currentActive) currentActive.classList.remove('active');
  document.getElementById(`btn-${type.toLowerCase()}`).classList.add('active');
}

async function confirmMJStart() {
    const minFan = parseInt(document.getElementById("mj-min-fan-val").innerText);
    closeMJSetup();
    startGame({ prevailingWind: selectedWind, minFan: minFan });
}

function adjustMinFan(val) {
    const el = document.getElementById("mj-min-fan-val");
    let current = parseInt(el.innerText);
    current = Math.max(0, Math.min(10, current + val));
    el.innerText = current;
}

function closeMJSetup() {
    document.getElementById("mj-setup-modal").classList.remove("show");
    setTimeout(() => document.getElementById("mj-setup-modal").style.display = "none", 400);
}

async function handleMJAction(type, optionIndex = 0) {
  const gameRef = gamesRef.child(selectedRoomId);
  let matchIsOver = false;

  await gameRef.transaction(game => {
    if (!game || !game.public) return game;
    const pub = game.public;

    const discards = pub.discards || [];
    const lastTile = discards[discards.length - 1];
    const isSetupPhase = pub.status === "playing" && !pub.gameStarted;

    const myHand = game.private[accountId].hand;
    const myRevealedList = (game.public.revealedHands && game.public.revealedHands[accountId]) || [];
    let totalTiles = myHand.length;
    
    myRevealedList.forEach(meld => {
      if (meld.tiles && Array.isArray(meld.tiles)) totalTiles += meld.tiles.length;
    });

    if (type === 'discard' && selectedMJIndex !== null) {
      if (totalTiles < 14) {
        console.error("You must draw a tile before discarding!");
        return game;
      }

      const actualTile = myHand.splice(selectedMJIndex, 1)[0];
      if (!pub.discards) pub.discards = [];
      pub.discards.push(actualTile);

      game.private[accountId].hand = sortMJHand(myHand);
      pub.turnIndex = (pub.turnIndex + 1) % pub.playerOrder.length;
      pub.waitingForDraw = true;
      pub.canInterrupt = true;
      selectedMJIndex = null;

      if (pub.wallCount === 0) {
        if (pub.wallCount === 0) {
             pub.status = "ended";
             pub.winner = "draw";
        }
    }
    }

    if (type === 'chow' && pub.canInterrupt) {
      const discards = pub.discards || [];
      const lastTile = discards[discards.length - 1];
      const options = getChowOptions(myHand, lastTile);

      if (options.length > 0 && options[optionIndex]) {
        const pair = options[optionIndex];

        let newHand = [...myHand];
        pair.forEach(card => {
          const i = newHand.indexOf(card);
          if (i > -1) newHand.splice(i, 1);
        });

        if (!pub.revealedHands) pub.revealedHands = {};
        if (!pub.revealedHands[accountId]) pub.revealedHands[accountId] = [];

        const sortedMeld = sortMJHand([...pair, lastTile]);

        pub.revealedHands[accountId].push({
          type: 'chow',
          tiles: sortedMeld
        });

        pub.discards.pop();
        pub.canInterrupt = false;
        pub.waitingForDraw = false;
        pub.handCounts[accountId] = newHand.length;
        game.private[accountId].hand = sortMJHand(newHand);

        return game;
      }
    }

    if (type === 'pong' && pub.canInterrupt) {
      if (getPongOptions(myHand, lastTile)) {
        let newHand = [...myHand];
        let removedCount = 0;
        const targetClean = lastTile.replace(/\uFE0E/g, '');

        newHand = newHand.filter(t => {
          if (removedCount < 2 && t.replace(/\uFE0E/g, '') === targetClean) {
            removedCount++;
            return false;
          }
          return true;
        });

        if (!pub.revealedHands) pub.revealedHands = {};
        if (!pub.revealedHands[accountId]) pub.revealedHands[accountId] = [];

        pub.revealedHands[accountId].push({
          type: 'pong',
          tiles: [lastTile, lastTile, lastTile]
        });

        pub.turnIndex = pub.playerOrder.indexOf(accountId);
        pub.waitingForDraw = false;
        pub.discards.pop();
        pub.canInterrupt = false;

        game.private[accountId].hand = sortMJHand(newHand);
        pub.handCounts[accountId] = newHand.length;
        selectedMJIndex = null;
      }
    }

    if (type === 'kong') {
      const myHand = game.private[accountId].hand;
      if (!pub.revealedHands) pub.revealedHands = {};
      if (!pub.revealedHands[accountId]) pub.revealedHands[accountId] = [];
      const myRevealed = pub.revealedHands[accountId];

      const discards = pub.discards || [];
      const lastTile = discards[discards.length - 1];
      const targetClean = optionIndex.replace(/\uFE0E/g, '');

      const myTurnIdx = pub.playerOrder.indexOf(accountId);
      const isMyTile = pub.turnIndex === myTurnIdx;

      const options = getKongOptions(myHand, (pub.canInterrupt && !isMyTile) ? lastTile : null, myRevealed);
      const existingPongIdx = myRevealed.findIndex(m => m.type === 'pong' && m.tiles[0].replace(/\uFE0E/g, '') === targetClean);

      if (existingPongIdx > -1) {
        const handIdx = myHand.findIndex(t => t.replace(/\uFE0E/g, '') === targetClean);
        const tileFromHand = myHand.splice(handIdx, 1)[0];
        myRevealed[existingPongIdx].type = 'kong';
        myRevealed[existingPongIdx].tiles.push(tileFromHand);
        pub.discards.push(tileFromHand);
        pub.canInterrupt = true;
      } else if (pub.canInterrupt && lastTile && lastTile.replace(/\uFE0E/g, '') === targetClean) {
        pub.discards.pop();

        let removed = 0;
        for (let i = myHand.length - 1; i >= 0; i--) {
          if (removed < 3 && myHand[i].replace(/\uFE0E/g, '') === targetClean) {
            myHand.splice(i, 1);
            removed++;
          }
        }

        myRevealed.push({ type: 'kong', tiles: [lastTile, lastTile, lastTile, lastTile] });
        pub.canInterrupt = false;
        pub.turnIndex = pub.playerOrder.indexOf(accountId);
      } else {
        let removed = 0;
        let kongTiles = [];
        for (let i = myHand.length - 1; i >= 0; i--) {
          if (removed < 4 && myHand[i].replace(/\uFE0E/g, '') === targetClean) {
            kongTiles.push(myHand.splice(i, 1)[0]);
            removed++;
          }
        }
        myRevealed.push({ type: 'kong', tiles: kongTiles });
        pub.canInterrupt = false;
      }

      pub.waitingForSupplement = true;
      pub.waitingForDraw = false;

      game.private[accountId].hand = sortMJHand(myHand);
      pub.handCounts[accountId] = myHand.length;
      pub.wallCount = game.deck.length;
      selectedMJIndex = null;

      return game;
    }

    if (type === 'exchangeFlowers' && isSetupPhase) {
      const myHand = game.private[accountId].hand;
      const flowers = myHand.filter(t => isBonusTile(t));
      const cleanHand = myHand.filter(t => !isBonusTile(t));

      if (flowers.length > 0) {
        if (!pub.revealedHands) pub.revealedHands = {};
        if (!pub.revealedHands[accountId]) pub.revealedHands[accountId] = [];
        flowers.forEach(f => pub.revealedHands[accountId].push({ type: 'flower', tiles: [f] }));
        game.private[accountId].hand = cleanHand;
        pub.waitingForSupplement = true;
      }
      return game;
    }

    if (type === 'passInitialFlowers' && isSetupPhase) {
      if (pub.turnIndex < 3) {
        pub.turnIndex++;
      } else {
        pub.gameStarted = true;
        pub.turnIndex = 0;
        pub.waitingForDraw = false;
      }
      return game;
    }

    if (type === 'drawSupplement' && pub.waitingForSupplement) {
      if (game.deck.length > 0) {
        const suppTile = game.deck.pop();
        const myHand = game.private[accountId].hand;
        const revealed = pub.revealedHands?.[accountId] || [];

        const isDealer = pub.playerOrder[0] === accountId;
        const targetSize = isDealer ? 14 : 13;

        if (pub.canInterrupt) {
          pub.discards.pop();
          pub.canInterrupt = false;
        }

        let meldCount = 0;
        revealed.forEach(m => {
            if (m.type === 'flower' || m.type === 'season') return;
            meldCount += (m.type === 'kong') ? 3 : m.tiles.length;
        });

        if (isBonusTile(suppTile)) {
          if (!pub.revealedHands[accountId]) pub.revealedHands[accountId] = [];
          pub.revealedHands[accountId].push({ type: 'flower', tiles: [suppTile] });
        } else {
          myHand.push(suppTile);
          game.private[accountId].hand = myHand;

          const currentTotal = myHand.length + meldCount;
          if (currentTotal < targetSize) {
            console.log(`[FLOWERS] Still need ${targetSize - currentTotal} more tiles.`);
          } else {
            pub.waitingForSupplement = false;
            selectedMJIndex = myHand.length - 1;
            if (isSetupPhase) handleMJAction('passInitialFlowers');
          }
        }

        pub.wallCount = game.deck.length;
        pub.handCounts[accountId] = game.private[accountId].hand.length;
        return game;
      }
    }

    if (type === 'draw' && pub.waitingForDraw && pub.playerOrder[pub.turnIndex] === accountId) {
      pub.canInterrupt = false;
      isChowMenuOpen = false;

      if (game.deck.length > 0) {
        const newTile = game.deck.pop();

        if (isBonusTile(newTile)) {
          if (!pub.revealedHands) pub.revealedHands = {};
          if (!pub.revealedHands[accountId]) pub.revealedHands[accountId] = [];

          pub.revealedHands[accountId].push({
            type: 'flower',
            tiles: [newTile]
          });

          pub.waitingForSupplement = true;
          pub.waitingForDraw = false;
          pub.canInterrupt = false;
        } else {
          myHand.push(newTile);
          game.private[accountId].hand = myHand;
          pub.waitingForDraw = false;
          pub.canInterrupt = false;
          selectedMJIndex = myHand.length - 1;
        }

        pub.wallCount = game.deck.length;
        pub.handCounts[accountId] = game.private[accountId].hand.length;
      } else {
        pub.status = "ended";
        pub.winner = "draw";
        pub.canInterrupt = false;
      }
    }

    if (type === 'mahjong') {
      const myHand =  game.private[accountId]?.hand || [];
      const myRevealed = pub.revealedHands?.[accountId] || [];
      const discards = pub.discards || [];
      const lastTile = discards[discards.length - 1];

      let meldCount = 0;
      let displayHand = [...myHand];
      myRevealed.forEach(m => {
        if (m.type === 'flower' || m.type === 'season') return;
        meldCount += (m.type === 'kong') ? 3 : (m.tiles ? m.tiles.length : 0);
      });
      const currentTotal = myHand.length + meldCount;


      if (currentTotal === 13 && lastTile && pub.canInterrupt) {
        const victimId = pub.playerOrder[pub.turnIndex];
        const victimRevealed = pub.revealedHands[victimId] || [];
        const targetClean = getTileSortIndex(lastTile);
        const kongMeld = victimRevealed.find(m => m.type === 'kong' && getTileSortIndex(m.tiles[0]) === targetClean);

        if (kongMeld) {
          kongMeld.type = 'pong';
          kongMeld.tiles.pop();
        }

        pub.discards.pop();
        displayHand.push(lastTile);
      }

      pub.canInterrupt = false;
      pub.winner = accountId;
      pub.winningHand = {
        name: optionIndex.name,
        fan: optionIndex.fan,
        revealed: myRevealed,
        private: sortMJHand(displayHand) 
      };
      pub.status = "ended";
      matchIsOver = true;
      return game;
    }

    return game;
  });

  if (matchIsOver) {
    const finalWinnerSnap = await gameRef.child("public/winner").once("value");
    const finalWinnerId = finalWinnerSnap.val();
    if (finalWinnerId) {
      await roomsRef.child(selectedRoomId).child('winners').child(finalWinnerId).transaction(v => (v || 0) + 1);
      await roomsRef.child(selectedRoomId).update({ status: "ended" });
    }
  }
}

function clearMahjongTableUI() {
  const containers = [
    "mj-discard-pile", 
    "my-mj-hand", 
    "my-revealed", 
    "mj-opp-right", 
    "mj-opp-top", 
    "mj-opp-left"
  ];
  containers.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = "";
  });

  const buttons = [
    "btn-mj-discard", 
    "btn-mj-chow", 
    "btn-mj-pong", 
    "btn-mj-kong", 
    "btn-mj-mahjong"
  ];
  buttons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.style.display = "none";
  });

  isDealing = false;
  isResultShown = false;
  selectedMJIndex = null;
  prevRevealedState = {};
  lastTotalRevealedCount = 0;
  lastMJActionTime = 0;
  
  const overlay = document.getElementById("result-overlay");
  if (overlay) {
    overlay.classList.remove("show");
    overlay.style.display = "none";
  }
}

function renderMJOpponents(gameState) {
  const isMobile = window.innerWidth <= 850;
  const table = document.getElementById("mahjong-table");
  const wrapper = document.getElementById("mj-mobile-opp-wrapper");

  if (isMobile) {
    if (!wrapper) {
      const newWrapper = document.createElement("div");
      newWrapper.id = "mj-mobile-opp-wrapper";
      newWrapper.className = "mj-mobile-opp-row";
      table.insertBefore(newWrapper, document.querySelector(".mj-center"));
    }
    const targetWrapper = document.getElementById("mj-mobile-opp-wrapper");
    targetWrapper.appendChild(document.getElementById("mj-opp-right"));
    targetWrapper.appendChild(document.getElementById("mj-opp-top"));
    targetWrapper.appendChild(document.getElementById("mj-opp-left"));
  } else {
    if (wrapper) {
      table.appendChild(document.getElementById("mj-opp-right"));
      table.appendChild(document.getElementById("mj-opp-top"));
      table.appendChild(document.getElementById("mj-opp-left"));
      wrapper.remove();
    }
  }

  const pub = gameState.public;
  const room = rooms[selectedRoomId];
  if (!pub) return;

  const myIdx = pub.playerOrder.indexOf(accountId);
  const positions = ["mj-opp-right", "mj-opp-top", "mj-opp-left"];
  const winds = ["東 (E)", "南 (S)", "西 (W)", "北 (N)"];

  positions.forEach((id, i) => {
    const targetIdx = (myIdx + i + 1) % pub.playerOrder.length;
    const uid = pub.playerOrder[targetIdx];
    const container = document.getElementById(id);
    if (!container || !uid) return;

    const userData = allUsers[uid] || {};
    const isOnline = room?.players?.[uid] === true;
    const count = pub.handCounts?.[uid] || 13;
    const playerWind = winds[targetIdx];

    let iconUrl = "../Assets/Icons/zendra_blue.png";
    if (userData.profileIcon === "google" && userData.googlePhotoURL) iconUrl = userData.googlePhotoURL;
    else if (userData.profileIcon) iconUrl = `../Assets/Icons/${userData.profileIcon}.png`;

    let handCount = "", handHtml = "";
    if (isMobile) handCount = `<div class="mj-hand-count"><i class="fa-solid fa-clone"></i> ${count}</div>`;
    else handHtml = `${Array(count).fill('<div class="mj-tile back-style"></div>').join('')}`;

    container.innerHTML = `
    <div class="mj-opp-row">
      <div class="mj-opp-info">
        <img src="${iconUrl}" style="margin: 0; width: 30px; height: 30px;" class="player-avatar mini ${isOnline ? '' : 'grayscale'}" onerror="this.src='/Assets/Icons/default_player.png'" />
        <div class="mj-opp-name">${userData.displayName || "Player"}</div>
        <div class="mj-wind-badge">${playerWind}</div>
        ${isOnline ? '' : '<div class="offline-badge" style="animation:none;">OFFLINE</div>'}
        ${handCount}
      </div>
      
      <div id="revealed-${uid}" class="mj-revealed-row"></div>
    </div>
    <div class="mj-hand">${handHtml}</div>`;

    renderRevealedSets(`revealed-${uid}`, uid, gameState);
  });
}

function renderRevealedSets(containerId, uid, gameState) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const revealed = gameState.public.revealedHands?.[uid] || [];

  container.innerHTML = revealed.map(meld => `
    <div class="mj-meld-group">
      ${meld.tiles.map(tile => `<div class="mj-tile ${getTileSuite(tile)}" data-tile="${tile}"><span>${tile}</span></div>`).join('')}
    </div>`).join('');
}

function updateMJWallVisual(wallCount, canDraw, gameState) {
  const pub = gameState.public;
  const myIdx = pub.playerOrder.indexOf(accountId);
  const totalStacks = 72;
  const stacksRemaining = Math.ceil(wallCount / 2);

  const headIndex = totalStacks - stacksRemaining;
  const tailIndex = 71;

  const localToGlobal = [(myIdx + 0) % 4, (myIdx + 1) % 4, (myIdx + 2) % 4, (myIdx + 3) % 4];
  const localSides = ['bottom', 'right', 'top', 'left'];
  const isSupp = pub.waitingForSupplement && pub.playerOrder[pub.turnIndex] === accountId;

  localSides.forEach((side, i) => {
    const container = document.getElementById(`mj-wall-${side}`);
    const globalWallIdx = localToGlobal[i];
    if (!container) return;

    let html = "";
    for (let s = 0; s < 18; s++) {
      const globalStackIdx = (globalWallIdx * 18) + s;

      if (globalStackIdx >= headIndex) {
        const isNextNormal = (globalStackIdx === headIndex && canDraw && !isSupp);
        const isSupplement = (globalStackIdx === tailIndex && isSupp);

        let onClick = "";
        let classes = "mj-wall-brick";

        if (isNextNormal) {
          onClick = `onclick="handleMJAction('draw')"`;
          classes += " highlight-draw";
        } else if (isSupplement) {
          onClick = `onclick="handleMJAction('drawSupplement')"`;
          classes += " highlight-draw";
        }

        html += `<div class="${classes}" ${onClick}></div>`;
      }
    }

    if (side === 'top') container.style.flexDirection = 'row-reverse';
    if (side === 'right') container.style.flexDirection = 'column-reverse';

    container.innerHTML = html;
  });
}

function getChowOptions(hand, discardedTile) {
    const clean = (s) => s ? s.replace(/\uFE0E/g, '') : '';
    const cleanHand = hand.map(t => clean(t));
    const cleanDiscard = clean(Array.isArray(discardedTile) ? discardedTile[0] : discardedTile);
    
    const cleanSortOrder = MJ_SORT_ORDER.map(t => clean(t));
    const idx = cleanSortOrder.indexOf(cleanDiscard);
    if (idx < 0 || idx > 26) return []; 

    const suiteStart = Math.floor(idx / 9) * 9;
    const suiteEnd = suiteStart + 8;
    const options = [];

    if (idx - 2 >= suiteStart) {
        if (cleanHand.includes(cleanSortOrder[idx - 2]) && cleanHand.includes(cleanSortOrder[idx - 1])) {
            options.push([MJ_SORT_ORDER[idx - 2], MJ_SORT_ORDER[idx - 1]]);
        }
    }

    if (idx - 1 >= suiteStart && idx + 1 <= suiteEnd) {
        if (cleanHand.includes(cleanSortOrder[idx - 1]) && cleanHand.includes(cleanSortOrder[idx + 1])) {
            options.push([MJ_SORT_ORDER[idx - 1], MJ_SORT_ORDER[idx + 1]]);
        }
    }

    if (idx + 2 <= suiteEnd) {
        if (cleanHand.includes(cleanSortOrder[idx + 1]) && cleanHand.includes(cleanSortOrder[idx + 2])) {
            options.push([MJ_SORT_ORDER[idx + 1], MJ_SORT_ORDER[idx + 2]]);
        }
    }

    return options;
}

function getPongOptions(hand, discardedTile) {
    const clean = (s) => s ? s.replace(/\uFE0E/g, '') : '';
    const target = clean(discardedTile);
    const matches = hand.filter(t => clean(t) === target).length;
    return matches >= 2;
}

function getKongOptions(hand, discardedTile = null, revealed = []) {
    const clean = (s) => s ? s.replace(/\uFE0E/g, '') : '';
    const counts = {};
    hand.forEach(t => {
        const c = clean(t);
        counts[c] = (counts[c] || 0) + 1;
    });

    const options = { concealed: [], exposed: [], additive: [] };
    if (discardedTile) {
        const target = clean(discardedTile);
        if (counts[target] === 3) options.exposed.push(discardedTile);
    } else {
        for (const [tile, count] of Object.entries(counts)) {
            if (count === 4) {
                const originalTile = hand.find(t => clean(t) === tile);
                options.concealed.push(originalTile);
            }
        }

        revealed.forEach(meld => {
            if (meld.type === 'pong') {
                const meldTile = clean(meld.tiles[0]);
                const hasFourth = hand.find(t => clean(t) === meldTile);
                if (hasFourth) options.additive.push(hasFourth);
            }
        });
    }

    return options;
}

function checkMahjongWin(hand, revealed) {
    const clean = (t) => t ? t.replace(/\uFE0E/g, '') : '';
    
    let evalTiles = hand.filter(t => !isBonusTile(t));
    revealed.forEach(m => {
        if (m.type === 'flower' || m.type === 'season') return;
        if (m.type === 'kong') {
            const t = m.tiles[0];
            evalTiles.push(t, t, t);
        } else {
            evalTiles.push(...m.tiles);
        }
    });

    if (evalTiles.length !== 14) return null;

    const counts = {};
    evalTiles.forEach(t => { const c = clean(t); counts[c] = (counts[c] || 0) + 1; });

    const orphans = ['🀇', '🀏', '🀙', '🀡', '🀐', '🀘', '🀀', '🀁', '🀂', '🀃', '🀄︎', '🀅', '🀆'];
    if (orphans.every(o => counts[o] >= 1) && Object.keys(counts).length === 13) return calculateMahjongScore(hand, revealed, counts, "十三么 (Thirteen Orphans)");

    const pairs = Object.values(counts).filter(c => c === 2).length;
    if (pairs === 7) return calculateMahjongScore(hand, revealed, counts, "七對子 (Seven Pairs)");

    const concealedCounts = {};
    hand.filter(t => !isBonusTile(t)).forEach(t => { 
        const c = clean(t); 
        concealedCounts[c] = (concealedCounts[c] || 0) + 1; 
    });

    for (let t in concealedCounts) {
        if (concealedCounts[t] >= 2) { 
            const temp = { ...concealedCounts };
            temp[t] -= 2;
            
            if (canDecomposeSets({ ...temp })) {
                return calculateMahjongScore(hand, revealed, counts);
            }
        }
    }
    return null;
}

function canDecomposeSets(counts) {
    const remaining = Object.keys(counts).filter(t => counts[t] > 0).sort((a,b) => getTileSortIndex(a) - getTileSortIndex(b));
    if (remaining.length === 0) return true;
    const first = remaining[0];
    
    if (counts[first] >= 3) {
        counts[first] -= 3;
        if (canDecomposeSets(counts)) return true;
        counts[first] += 3;
    }
    
    const idx = getTileSortIndex(first);
    if (idx !== -1 && idx < 27 && idx % 9 < 7) {
        const n1 = MJ_SORT_ORDER[idx+1].replace(/\uFE0E/g, '');
        const n2 = MJ_SORT_ORDER[idx+2].replace(/\uFE0E/g, '');
        if (counts[n1] > 0 && counts[n2] > 0) {
            counts[first]--; counts[n1]--; counts[n2]--;
            if (canDecomposeSets(counts)) return true;
            counts[first]++; counts[n1]++; counts[n2]++;
        }
    }
    return false;
}

function calculateMahjongScore(hand, revealed, counts, specialName = null) {
  let fan = 0;
  let names = [];
  const pub = lastGameState.public;
  const mySeatIdx = pub.playerOrder.indexOf(accountId);

  const myHand = lastGameState.private[accountId]?.hand || [];
  const cleanHand = myHand.filter(t => !isBonusTile(t));

  const myRevealed = (lastGameState.public.revealedHands && lastGameState.public.revealedHands[accountId]) || [];
  const myBonus = myRevealed.filter(m => m.type === 'flower' || m.type === 'season').flatMap(m => m.tiles);

  myBonus.forEach(t => {
    const cleanT = t.replace(/\uFE0E/g, '');
    const bonusIdx = [...MJ_TILES.flowers, ...MJ_TILES.seasons].map(x => x.replace(/\uFE0E/g, '')).indexOf(cleanT);
    if (bonusIdx % 4 === mySeatIdx) {
        fan += 1;
        names.push("正花 (Seat Flower)");
    }
  });
  if (myBonus.length === 8) return { fan: 10, name: "八仙過海 (Eight Immortals)" };

  const windTiles = ['🀀', '🀁', '🀂', '🀃'];
  const seatWindTile = windTiles[mySeatIdx];
  if (counts[seatWindTile] >= 3) {
      fan += 1;
      names.push("門風 (Seat Wind)");
  }

  const windMap = { "East": 0, "South": 1, "West": 2, "North": 3 };
  const prevailingIdx = windMap[pub.prevailingWind] || 0;
  const prevailingTile = windTiles[prevailingIdx];
  if (counts[prevailingTile] >= 3) {
      fan += 1;
      names.push("圈風 (Prevailing Wind)");
  }

  const suites = new Set();
  let hasHonors = false;
  Object.keys(counts).forEach(t => {
    const idx = getTileSortIndex(t);
    if (idx < 27) suites.add(Math.floor(idx / 9));
    else hasHonors = true;
  });

  if (specialName) {
    names.push(specialName);
    fan += (specialName === "十三么 (Thirteen Orphans)" ? 10 : 4);
  } else {
    const hasChowMeld = revealed.some(m => m.type === 'chow');
    
    const isAllPongs = !hasChowMeld && revealed.every(m => m.type === 'pong' || m.type === 'kong') && !Object.values(counts).includes(1) && !Object.values(counts).includes(4);
    const isAllChows = revealed.every(m => m.type === 'chow');

    if (isAllPongs) { fan += 3; names.push("對對糊 (All Pongs)"); }
    else if (isAllChows) { fan += 1; names.push("平糊 (Common Hand)"); }
  }

  if (specialName) {
    names.push(specialName);
    fan += (specialName === "十三么 (Thirteen Orphans)" ? 10 : 4);
  } else {
    const isAllPongs = revealed.every(m => m.type !== 'chow') && !Object.values(counts).includes(1);
    const isAllChows = revealed.every(m => m.type === 'chow');

    if (isAllPongs) { fan += 3; names.push("對對糊 (All Pongs)"); }
    else if (isAllChows) { fan += 1; names.push("平糊 (Common Hand)"); }
  }

  if (suites.size === 1 && !hasHonors) { fan += 7; names.push("清一色 (Pure Flush)"); }
  else if (suites.size === 1 && hasHonors) { fan += 3; names.push("混一色 (Mixed Flush)"); }

  const dragons = ['🀄︎', '🀅', '🀆'];
  const dTrips = dragons.filter(d => counts[d] >= 3).length;
  const dPair = dragons.some(d => counts[d] === 2);

  if (dTrips === 3) { fan += 6; names.push("大三元 (Great Dragons)"); }
  else if (dTrips === 2 && dPair) { fan += 3; names.push("小三元 (Small Dragons)"); }
  else { dragons.forEach(d => { if (counts[d] >= 3) { fan += 1; names.push("番子 (Dragon)"); } }); }

  const wTrips = windTiles.filter(w => counts[w] >= 3).length;
  const wPair = windTiles.some(w => counts[w] === 2);
  if (wTrips === 4) { fan += 10; names.push("大四喜 (Great Winds)"); }
  else if (wTrips === 3 && wPair) { fan += 8; names.push("小四喜 (Small Winds)"); }

  if (suites.has(0) && counts['🀅'] >= 3) { fan = 10; names.push("翡翠龍 (Emerald Dragon)"); }
  if (suites.has(2) && counts['🀄︎'] >= 3) { fan = 10; names.push("紅寶龍 (Ruby Dragon)"); }
  if (suites.has(1) && counts['🀆'] >= 3) { fan = 10; names.push("珍珠龍 (Pearl Dragon)"); }

  if (revealed.length === 0) { fan += 1; names.push("門前清 (Concealed Hand)"); }

  let effectiveMeldTiles = 0;
  const validMelds = revealed.filter(m => m.type !== 'flower' && m.type !== 'season');
  validMelds.forEach(m => { effectiveMeldTiles += (m.type === 'kong') ? 3 : m.tiles.length; });
  const totalEffectiveTiles = cleanHand.length + effectiveMeldTiles;
  if (totalEffectiveTiles === 14) {
    fan += 1;
    names.push("自摸 (Self-Draw)");
  }

  return { fan: Math.min(fan, 10), name: names.length > 0 ? names.join(" + ") : "鷄糊 (Chicken Hand)" };
}

function startDealingAnimation(minFan, wind, gameState) {
  isDealing = true;
  if (window.innerWidth <= 850) renderMJOpponents(gameState);
  gamesRef.child(currentRoomId).child('public').update({ animationPlayed: true });

  document.getElementById("wall-label").style.display = "none";
  const table = document.getElementById("mahjong-table");
  const positions = ["bottom", "right", "top", "left"];
  let virtualWallCount = 144;
  let delay = 0;
  const tileCounts = { bottom: 0, right: 0, top: 0, left: 0 };

  const ghosts = {};
  positions.forEach(pos => {
    if (window.innerWidth <= 850 && pos !== 'bottom') return;
    const div = document.createElement("div");
    div.className = `mj-ghost-hand ghost-${pos}`;
    table.appendChild(div);
    ghosts[pos] = div;
  });

  const announce = document.createElement("div");
  announce.className = "mj-announcement-popup";
  announce.innerHTML = `<div class="ann-top">INITIALIZING</div><div class="ann-mid">${wind} WIND</div><div class="ann-bot">${minFan} 番起糊</div>`;
  table.appendChild(announce);
  setTimeout(() => { announce.classList.add("fade-out"); }, 1200);
  setTimeout(() => { if (announce.parentNode) announce.remove(); }, 1700);

  for (let round = 0; round < 4; round++) {
    const tilesToGive = (round === 3) ? 1 : 4;

    positions.forEach((pos) => {
      setTimeout(() => {
        virtualWallCount -= tilesToGive;
        updateMJWallVisual(virtualWallCount, false, lastGameState);

        if ((window.innerWidth <= 850) && pos !== 'bottom') {
          tileCounts[pos] += tilesToGive;
          return; 
        }

        const dummy = document.createElement("div");
        dummy.className = `mj-tile back-style flying-tile to-${pos}`;
        table.appendChild(dummy);
        setTimeout(() => { dummy.classList.add('animate'); }, 50);

        setTimeout(() => {
          if (dummy.parentNode) dummy.remove();
          for (let i = 0; i < tilesToGive; i++) {
            const t = document.createElement("div");
            t.className = "mj-tile back-style ghost-tile";
            const offset = (tileCounts[pos] * 22) - 140;
            t.style.left = `${offset}px`;
            ghosts[pos].appendChild(t);
            tileCounts[pos]++;
          }
        }, 650);
      }, delay);

      delay += 300;
    });
  }

  setTimeout(() => {
    if (announce.parentNode) announce.remove();
    Object.values(ghosts).forEach(g => g.remove());
    isDealing = false;
    document.getElementById("wall-label").style.display = "block";
    GameLogics.mahjong.render(lastGameState);
  }, delay + 800);
}

window.addEventListener('resize', () => {
  if (lastGameState && currentRoomId) {
    const room = rooms[currentRoomId];
    if (room && room.gameType.toLowerCase() === 'mahjong') {
       GameLogics.mahjong.render(lastGameState);
    }
  }
});

// ===== FIREBASE HANDLERS =====
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
  console.log("[AUTH] Logged in:", accountId, "Anonymous:", u.isAnonymous);

  const urlParams = new URLSearchParams(window.location.search);
  const joinId = urlParams.get('join');

  if (joinId) {
    console.log("[INVITE] Found invite link for:", joinId);
    window.history.replaceState({}, document.title, window.location.pathname);
    setTimeout(() => { joinRoom(joinId); }, 1000);
  }

  listenToUser();
  listenToRooms(); 

  if (!await userHasAccount(accountId)) {
    document.getElementById("prompt").style.display = "flex";
    return;
  }
  document.getElementById("prompt").style.display = "none";

  usersRef.child(accountId).on("value", snap => {
      const data = snap.val();
      const state = getCurrentState(data);
      banReady = true;
      if (state.type === "banned") {
        isBanned = true;
        enableBannedUI();
      } else {
        isBanned = false;
        disableBannedUI();
      }
  });
});

async function join(name, username) {
  if (!user || !firebase.auth().currentUser) {
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
        arenaWins: 0,
      };

      await userRef.set(payload);
      localStorage.setItem("z_tutorialStep", 0);
      location.reload();
    } else {
      console.log("[JOIN] Existing account:", accountId);
      const userData = snap.val();
      localStorage.setItem("z_sessionVersion", userData.sessionVersion);
    }

    if (await userHasAccount(accountId)) sessionListener(accountId);
    console.log("[JOIN] Complete — active UID:", accountId);
  } catch (err) {
    console.error("[JOIN]", err);
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

async function userHasAccount(uid) {
  const snap = await usersRef.child(uid).once("value");
  return snap.exists();
}

function showGoogleUsernamePrompt(user) {
  promptEl.style.display = "none";
  googlePrompt.style.display = "flex";
  googleInput.value = user.displayName || "";
  googleInput.focus();
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

function getCurrentState(user) {
  const t = user.timeout || 0;
  if (t === 1) return { type: "banned" };
  if (t > Date.now()) return { type: "timeout", until: t };
  return { type: "ok" };
}

function enableBannedUI() {
  const main = document.getElementById("menu-container");
  const banned = document.getElementById("banned-screen");

  if (main) main.style.display = "none";
  banned.style.display = "flex";
}

function disableBannedUI() {
  const main = document.getElementById("menu-container");
  const banned = document.getElementById("banned-screen");

  banned.style.display = "none"
  if (main) main.style.display = "";
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
  console.log("Bye");

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
    console.error("h", err);
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

      timeout: 0,
      tutorial: 10,
      arenaWins: 0,
    });

    googlePrompt.style.display = "none";
    location.reload();
    join(displayName, username);
  } catch (err) {
    console.error(err);
    googleError.textContent = "Error creating account. Try again.";
  }
};

function formatBadgeName(name) {
  return name.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Badge";
}

function openSettingsModal() {
  const user = allUsers?.[accountId];
  if (!user) return;

  settingsModal.classList.remove("hidden");
  accountUsername.textContent = user.username || "Unknown User";
  const wins = user.arenaWins || 0;
  winText.textContent = wins;

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

document.addEventListener("DOMContentLoaded", () => {
  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.add("hidden");
      if (settingsUpdate) location.reload();
    }
  });
});