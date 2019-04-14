"use strict";

const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");
const options = document.querySelectorAll(".options button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hands img");
const computerOptions = ["rock", "paper", "scissors"];
const computerNumber = Math.floor(Math.random() * 3);
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");
const winner = document.querySelector(".winner");

console.log(computerNumber);

const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {};

  startGame();
  playMatch();
};

game();
