/**
 * Chronicles of Aethelgard - Tavern Card Game "Aethelgard Duel" Engine
 */
window.Aethelgard = window.Aethelgard || {};
window.Aethelgard.Minigames = window.Aethelgard.Minigames || {};
window.Aethelgard.Minigames.CardGame = (function () {
  let playerHand = [];
  let oppHand = [];
  let playerScore = 0, oppScore = 0;

  return {
    startDuel() {
      const cards = window.Aethelgard.Data.Cards || [];
      playerHand = cards.slice(0, 6);
      oppHand = cards.slice(6, 12);
      playerScore = 0;
      oppScore = 0;
      
      this.render();
      window.Aethelgard.UI.ModalManager.openModal("modal-card-game");
    },
    playCard(index) {
      if (index >= playerHand.length) return;
      const card = playerHand.splice(index, 1)[0];
      playerScore += card.power || 5;
      
      // AI Turn
      if (oppHand.length > 0) {
        const oppCard = oppHand.splice(0, 1)[0];
        oppScore += oppCard.power || 5;
      }
      
      this.render();
    },
    render() {
      const pScoreEl = document.getElementById("card-player-score");
      const oScoreEl = document.getElementById("card-opp-score");
      const pHandEl = document.getElementById("card-player-hand");
      
      if (pScoreEl) pScoreEl.textContent = `Score: ${playerScore}`;
      if (oScoreEl) oScoreEl.textContent = `Score: ${oppScore}`;
      if (pHandEl) {
        pHandEl.innerHTML = "";
        playerHand.forEach((card, idx) => {
          const cardEl = document.createElement("div");
          cardEl.className = "game-card";
          cardEl.innerHTML = `<span class="card-power">${card.power}</span><span class="card-title">${card.name}</span>`;
          cardEl.onclick = () => this.playCard(idx);
          pHandEl.appendChild(cardEl);
        });
      }
    }
  };
})();
