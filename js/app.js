"use strict";

const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");
const options = document.querySelectorAll(".options button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hands img");
const computerOptions = ["rock", "paper", "scissors"];
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");
const winner = document.querySelector(".winner");

const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  hands.forEach(hand => {
    hand.addEventListener("animationend", function() {
      this.style.animation = "";
    });
  });

  const playMatch = () => {
    options.forEach(option => {
      option.addEventListener("click", function() {
        playerHand.src = `/img/rock.png`;
        computerHand.src = `/img/rock.png`;
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          playerHand.src = `/img/${this.textContent}.png`;
          computerHand.src = `/img/${computerChoice}.png`;
        }, 2000);
      });
    });
  };

  const updateScore = () => {
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
      }
      updateScore();
      return;
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins";
        pScore++;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
      }
      updateScore();
      return;
    }
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins";
        pScore++;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
      }
      updateScore();
      return;
    }
  };

  startGame();
  playMatch();
};

game();
