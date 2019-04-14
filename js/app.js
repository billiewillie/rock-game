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

  const playMatch = () => {
    options.forEach(option => {
      option.addEventListener("click", function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        compareHands(this.textContent, computerChoice);
        playerHand.src = `../img/${this.textContent}.png`;
        computerHand.src = `../img/${computerChoice}.png`;
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
      } else {
        winner.textContent = "Computer wins";
      }
      return;
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins";
      } else {
        winner.textContent = "Computer wins";
      }
      return;
    }
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins";
      } else {
        winner.textContent = "Computer wins";
      }
      return;
    }
  };

  startGame();
  playMatch();
};

game();
