"use strict";

//IMPLEMENTING THE GAME LOGIC
//defining the secret number
let secretNumber = Math.floor(Math.random() * 20) + 1;

//initialising the total score
let totalScore = 20;

//initialising high score
let highScore = 0;

//creating functions to refactor the code
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Selecting the event listener class i.e the check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //implementing the game conditions

  //check for empty input field
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number! ⛔";
    displayMessage("No Number! ⛔");
  }

  //check when guess is correct
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "Correct Number!!! 🎉💃";
    displayMessage("Correct Number!!! 🎉💃");

    //changing the css styles
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //showing the secret number on correct guess
    document.querySelector(".number").textContent = secretNumber;

    //implementing high score logic
    if (totalScore > highScore) {
      highScore = totalScore;
      document.querySelector(".highscore").textContent = highScore;
    } else {
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //when guess is not corret
  else if (guess != secretNumber) {
    if (totalScore > 1) {
      totalScore--;
      document.querySelector(".score").textContent = totalScore;
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "Too High! 📈" : "Too Low! 📉";
      displayMessage(guess > secretNumber ? "Too High! 📈" : "Too Low! 📉");
    } else {
      document.querySelector(".message").textContent =
        "You Lost the GAME!!! 💔";
    }
  }

  //check when guess is high
  //   else if (guess > secretNumber) {
  //     if (totalScore > 1) {
  //       totalScore--;
  //       document.querySelector(".score").textContent = totalScore;
  //       document.querySelector(".message").textContent = "Too High! 📈";
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "You Lost the GAME!!! 💔";
  //     }
  //   }

  //check when guess is low
  //   else {
  //     if (totalScore > 1) {
  //       totalScore--;
  //       document.querySelector(".score").textContent = totalScore;
  //       document.querySelector(".message").textContent = "Too Low! 📉";
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "You Lost the GAME!!! 💔";
  //     }
  //   }
});

//Implementing the again button logic
document.querySelector(".again").addEventListener("click", function () {
  //resetting the total score
  totalScore = 20;
  //generating new secret number
  secretNumber = Math.floor(Math.random() * 20) + 1;
  //hiding the secret number
  document.querySelector(".number").textContent = "?";
  //restoring the inital message
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  //restoring the score number display
  document.querySelector(".score").textContent = totalScore;
  //restoring the input field
  document.querySelector(".guess").value = "";

  //restoring the css properties
  document.querySelector("body").style.backgroundColor = " #222";
  document.querySelector(".number").style.width = "15rem";
});
