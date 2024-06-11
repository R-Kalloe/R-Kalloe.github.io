//Alle nodige buttons declareren

const playGameOneButton = document.querySelector(".play-game-1");
const playGameTwoButton = document.querySelector(".play-game-2");
const playGameThreeButton = document.querySelector(".play-game-3");

//Adding event listeners, so the user will navigate to the game after clicking the button

//This code will send the user to the tic tac toe game when executed
playGameOneButton.addEventListener("click", function () {
  window.location.assign("TicTacToe/tac-tac-toe.html"); 
});

//This code will send the user to the whack a mole game when executed

playGameTwoButton.addEventListener("click", function () {
  window.location.assign("whack-a-mole.html");
});

//This code will send the user to the 4-connect game when executed

playGameThreeButton.addEventListener("click", function () {
  window.location.assign("connect-4.html");
});