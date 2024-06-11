//Declaring variables

const higherLowerNavigate = document.querySelector(
  "#higher-lower-navigate-button"
);
const startButton = document.querySelector("#start-button");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const throwButton = document.querySelector(".throw-button");
const playerCredits = document.querySelector("#player-credits");
const computerCredits = document.querySelector("#computer-credits");
const computerStake = document.querySelector("#computer-credits-stake");
let computerCreditsStake = 0;
const playerCreditsImage = document.querySelector("#player-credits-image");
const computerCreditsImage = document.querySelector("#computer-credits-image");
const arrowStartButton = document.querySelector("#arrow-to-startbutton");
const musicButton = document.querySelector("#music-button");
const playAgain = document.querySelector("#play-again");
let amountPlayerCredits = 10;
let amountComputerCredits = 10;
playerCredits.innerHTML = "Credits:" + " " + amountPlayerCredits;
computerCredits.innerHTML = "Credits:" + " " + amountComputerCredits;

//Higher Lower navigate button clickevent

higherLowerNavigate.addEventListener("click", function () {
  window.location.assign("index.html");
});

//Credit selector for the player, made with a for loop

let playerCreditsSelector = document.querySelector("#dropdown-player-credits");
function refreshDropdown() {
  playerCreditsSelector.innerHTML = "";
  for (let i = 1; i <= amountPlayerCredits; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    playerCreditsSelector.appendChild(option);
  }
}

refreshDropdown();

//Function for the check if the game is over or not

const nextRound = document.querySelector("#next-round");

function checkGameOver() {
  //If statement to show a game over message after the player- or computercredits amount is 0

  if (amountPlayerCredits <= 0) {
    const gameOver = alert("Game over, you lost from the computer!");
    nextRound.style.display = "none";
    playAgain.style.display = "block";
    return true;
  } else if (amountComputerCredits <= 0) {
    const gameOver = alert("Game over, you won from the computer!");
    nextRound.style.display = "none";
    playAgain.style.display = "block";
    return true;
  } else {
    return false;
  }
}

//Play again button eventlistener, which will appear after the player or computer lost the game

playAgain.addEventListener("click", function () {
  nextRound.style.display = "none";
  amountPlayerCredits = 10;
  playerCredits.innerHTML = "Credits:" + " " + amountPlayerCredits;
  amountComputerCredits = 10;
  computerCredits.innerHTML = "Credits:" + " " + amountComputerCredits;
  refreshDropdown();
  nextRound.click();
  playAgain.style.display = "none";
  scoreHistory = [];
});

//Music button which will turn the background music off and on, as a result on user preference

musicButton.addEventListener("click", function () {
  const backgroundMusic = document.querySelector("#background-music");

  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicButton.innerHTML = "🔇";
  } else {
    backgroundMusic.pause();
    musicButton.innerHTML = "🔊";
  }
});

//The startbutton eventlistener, which will appear right after you clicked on play in the homepage

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  player.style.filter = "none";
  computer.style.filter = "none";
  throwButton.style.display = "block";
  playerCredits.style.filter = "none";
  computerCredits.style.filter = "none";
  playerCreditsSelector.style.display = "block";
  playerCreditsImage.style.filter = "none";
  computerCreditsImage.style.filter = "none";
  playerCreditsSelector.style.filter = "none";
  playerCreditsSelector.disabled = false;
  arrowStartButton.style.display = "none";
  computerStake.style.filter = "none";
});

//Connect to throw button

const diceRoll = document.querySelector(".throw-button");
let totalPlayerResult = 0;
const totalPlayerScore = document.querySelector("#player-count");

//Computer random credits generator

//Player dice roll, throw button function

diceRoll.addEventListener("click", function () {
  //Playercredits selector will be disabled after you threw the dice, so the player can't change the stake of his credits

  playerCreditsSelector.disabled = true;

  //Random number generator for the player dices

  const randomNumberPlayer1 = Math.floor(Math.random() * 6) + 1;
  const randomNumberPlayer2 = Math.floor(Math.random() * 6) + 1;
  totalPlayerResult = randomNumberPlayer1 + randomNumberPlayer2;

  diceRoll.disabled = true;
  diceRoll.innerHTML = "Thrown!";

  //After the player threw the dices, the computer will create a random number for the amount of credits he will stake in

  computerStake.style.display = "block";
  computerCreditsStake = Math.floor(Math.random() * amountComputerCredits) + 1;

  computerStake.innerHTML = "Stake: " + " " + computerCreditsStake;

  //The first dice of the player, made with switch case to prevent overlong code

  switch (randomNumberPlayer1) {
    case 1:
      document.querySelector(".player-dice-1").src = "image/dice-1.png";
      break;
    case 2:
      document.querySelector(".player-dice-1").src = "image/dice-2.png";
      break;
    case 3:
      document.querySelector(".player-dice-1").src = "image/dice-3.png";
      break;
    case 4:
      document.querySelector(".player-dice-1").src = "image/dice-4.png";
      break;
    case 5:
      document.querySelector(".player-dice-1").src = "image/dice-5.png";
      break;
    case 6:
      document.querySelector(".player-dice-1").src = "image/dice-6.png";
      break;
  }

  //The second dice of the player

  switch (randomNumberPlayer2) {
    case 1:
      document.querySelector(".player-dice-2").src = "image/dice-1.png";
      break;
    case 2:
      document.querySelector(".player-dice-2").src = "image/dice-2.png";
      break;
    case 3:
      document.querySelector(".player-dice-2").src = "image/dice-3.png";
      break;
    case 4:
      document.querySelector(".player-dice-2").src = "image/dice-4.png";
      break;
    case 5:
      document.querySelector(".player-dice-2").src = "image/dice-5.png";
      break;
    case 6:
      document.querySelector(".player-dice-2").src = "image/dice-6.png";
      break;
  }

  totalPlayerScore.style.display = "block";

  //Total amount of player score

  totalPlayerScore.innerHTML = "You threw:" + " " + totalPlayerResult + "!";
});

//Elements that will show after throw dice button is clicked

const showPlayerDices = document.querySelector("#player-dices");
const higherButton = document.querySelector("#higher-button");
const lowerButton = document.querySelector("#lower-button");
const textBetween = document.querySelector("#text-between-buttons");
const textAbove = document.querySelector("#would-you-choose");
throwButton.addEventListener("click", function () {
  showPlayerDices.style.display = "block";
  higherButton.style.display = "block";
  lowerButton.style.display = "block";
  textBetween.style.display = "block";
  textAbove.style.display = "block";
});

//All the variables that have to be declared for the function of the higher button clickevent

const showComputerDices = document.querySelector("#computer-dices");
const resultWin = document.querySelector("#win");
const resultLose = document.querySelector("#lose");
const resultDraw = document.querySelector("#draw");
const youChose = document.querySelector(".chose");
const choseHigher = document.querySelector("#higher");
const totalComputerScore = document.querySelector("#computer-count");
let totalComputerResult = 0;
let scoreHistory = [];

//Higher button clickevent

higherButton.addEventListener("click", function () {
  higherButton.style.display = "none";
  lowerButton.style.display = "none";
  textAbove.style.display = "none";
  textBetween.style.display = "none";
  youChose.style.display = "block";
  choseHigher.style.display = "block";

  //The code that will determine the gamelogic if the user chose higher

  const randomNumberComputer1 = Math.floor(Math.random() * 6) + 1;
  const randomNumberComputer2 = Math.floor(Math.random() * 6) + 1;
  totalComputerResult = randomNumberComputer1 + randomNumberComputer2;
  showComputerDices.style.display = "block";
  totalComputerScore.style.display = "block";

  //The first dice of the computer

  switch (randomNumberComputer1) {
    case 1:
      document.querySelector(".computer-dice-1").src = "image/dice-1.png";
      break;
    case 2:
      document.querySelector(".computer-dice-1").src = "image/dice-2.png";
      break;
    case 3:
      document.querySelector(".computer-dice-1").src = "image/dice-3.png";
      break;
    case 4:
      document.querySelector(".computer-dice-1").src = "image/dice-4.png";
      break;
    case 5:
      document.querySelector(".computer-dice-1").src = "image/dice-5.png";
      break;
    case 6:
      document.querySelector(".computer-dice-1").src = "image/dice-6.png";
      break;
  }

  //The second dice of the computer

  switch (randomNumberComputer2) {
    case 1:
      document.querySelector(".computer-dice-2").src = "image/dice-1.png";
      break;
    case 2:
      document.querySelector(".computer-dice-2").src = "image/dice-2.png";
      break;
    case 3:
      document.querySelector(".computer-dice-2").src = "image/dice-3.png";
      break;
    case 4:
      document.querySelector(".computer-dice-2").src = "image/dice-4.png";
      break;
    case 5:
      document.querySelector(".computer-dice-2").src = "image/dice-5.png";
      break;
    case 6:
      document.querySelector(".computer-dice-2").src = "image/dice-6.png";
      break;
  }

  //Total amount of computer score

  totalComputerScore.innerHTML =
    "Computer threw:" + " " + totalComputerResult + "!";

  //The message that will appear when the player or computer won, but also when they played a draw

  if (totalComputerResult > totalPlayerResult) {
    resultWin.style.display = "block";
    scoreHistory.push("Player won");
    amountPlayerCredits += parseInt(playerCreditsSelector.value);
    amountComputerCredits -= parseInt(playerCreditsSelector.value);
    amountPlayerCredits += computerCreditsStake;
    amountComputerCredits -= computerCreditsStake;
    playerCredits.innerHTML = "Credits:" + " " + amountPlayerCredits;
    computerCredits.innerHTML = "Credits:" + " " + amountComputerCredits;
  }
  if (totalComputerResult < totalPlayerResult) {
    resultLose.style.display = "block";
    resultLose.innerHTML = "Computer wins!";
    scoreHistory.push("Computer won");
    amountPlayerCredits -= parseInt(playerCreditsSelector.value);
    amountComputerCredits += parseInt(playerCreditsSelector.value);
    amountPlayerCredits -= computerCreditsStake;
    amountComputerCredits += computerCreditsStake;
    playerCredits.innerHTML = "Credits:" + " " + amountPlayerCredits;
    computerCredits.innerHTML = "Credits:" + " " + amountComputerCredits;
  }
  if (totalComputerResult == totalPlayerResult) {
    resultDraw.style.display = "block";
    resultDraw.innerHTML = "Draw, try again!";
    scoreHistory.push("Draw");
  }
  gameOver = checkGameOver();

  //If statement when the game is over, next round button appearing after win or draw message

  if (!gameOver) {
    nextRound.style.display = "block";
  }

  //The score history button will be removed when the player starts a new game

  scoreHistoryButton.style.display = "block";
});

//The code that will determine the gamelogic when the user chose lower

const choseLower = document.querySelector("#lower");

lowerButton.addEventListener("click", function () {
  higherButton.style.display = "none";
  lowerButton.style.display = "none";
  textAbove.style.display = "none";
  textBetween.style.display = "none";
  youChose.style.display = "block";
  choseLower.style.display = "block";

  //The random number generators for the computer

  const randomNumberComputer1 = Math.floor(Math.random() * 6) + 1;
  const randomNumberComputer2 = Math.floor(Math.random() * 6) + 1;
  totalComputerResult = randomNumberComputer1 + randomNumberComputer2;

  //The computer dices code

  showComputerDices.style.display = "block";
  totalComputerScore.style.display = "block";

  if (randomNumberComputer1 == 1) {
    document.querySelector(".computer-dice-1").src = "image/dice-1.png";
  }
  if (randomNumberComputer1 == 2) {
    document.querySelector(".computer-dice-1").src = "image/dice-2.png";
  }
  if (randomNumberComputer1 == 3) {
    document.querySelector(".computer-dice-1").src = "image/dice-3.png";
  }
  if (randomNumberComputer1 == 4) {
    document.querySelector(".computer-dice-1").src = "image/dice-4.png";
  }
  if (randomNumberComputer1 == 5) {
    document.querySelector(".computer-dice-1").src = "image/dice-5.png";
  }
  if (randomNumberComputer1 == 6) {
    document.querySelector(".computer-dice-1").src = "image/dice-6.png";
  }

  //Computer dice 2

  if (randomNumberComputer2 == 1) {
    document.querySelector(".computer-dice-2").src = "image/dice-1.png";
  }
  if (randomNumberComputer2 == 2) {
    document.querySelector(".computer-dice-2").src = "image/dice-2.png";
  }
  if (randomNumberComputer2 == 3) {
    document.querySelector(".computer-dice-2").src = "image/dice-3.png";
  }
  if (randomNumberComputer2 == 4) {
    document.querySelector(".computer-dice-2").src = "image/dice-4.png";
  }
  if (randomNumberComputer2 == 5) {
    document.querySelector(".computer-dice-2").src = "image/dice-5.png";
  }
  if (randomNumberComputer2 == 6) {
    document.querySelector(".computer-dice-2").src = "image/dice-6.png";
  }

  //Total amount of computer score

  totalComputerScore.innerHTML =
    "Computer threw:" + " " + totalComputerResult + "!";

  //Next round button appearing after win or draw message

  if (totalComputerResult < totalPlayerResult) {
    resultWin.style.display = "block";
    scoreHistory.push("Player won");
    amountPlayerCredits += parseInt(playerCreditsSelector.value);
    amountPlayerCredits += computerCreditsStake;
    amountComputerCredits -= computerCreditsStake;
    amountComputerCredits -= parseInt(playerCreditsSelector.value);
    playerCredits.innerHTML = "Credits:" + " " + amountPlayerCredits;
    computerCredits.innerHTML = "Credits:" + " " + amountComputerCredits;
    nextRound.style.display = "block";
  }
  if (totalComputerResult > totalPlayerResult) {
    resultLose.style.display = "block";
    resultLose.innerHTML = "Computer wins!";
    scoreHistory.push("Computer won");
    amountPlayerCredits -= playerCreditsSelector.value;
    amountPlayerCredits -= computerCreditsStake;
    amountComputerCredits += computerCreditsStake;
    amountComputerCredits += parseInt(playerCreditsSelector.value);
    computerCredits.innerHTML = "Credits:" + " " + amountComputerCredits;
    playerCredits.innerHTML = "Credits:" + " " + amountPlayerCredits;
    nextRound.style.display = "block";
  }
  if (totalComputerResult == totalPlayerResult) {
    resultDraw.style.display = "block";
    resultDraw.innerHTML = "Draw, try again!";
    scoreHistory.push("Draw");
    nextRound.style.display = "block";
  }
  checkGameOver();

  scoreHistoryButton.style.display = "block";
});

//Clickevent for Next Round button

nextRound.addEventListener("click", function () {
  showPlayerDices.style.display = "none";
  totalPlayerScore.style.display = "none";
  throwButton.disabled = false;
  throwButton.innerHTML = "Throw the dice";
  youChose.style.display = "none";
  choseHigher.style.display = "none";
  choseLower.style.display = "none";
  resultWin.style.display = "none";
  showComputerDices.style.display = "none";
  totalComputerScore.style.display = "none";
  resultWin.style.display = "none";
  resultLose.style.display = "none";
  resultDraw.style.display = "none";
  nextRound.style.display = "none";
  playerCreditsSelector.disabled = false;
  computerStake.style.display = "none";
  refreshDropdown();
});

//The scorehistory clickevent

const scoreHistoryButton = document.querySelector("#score-history");

scoreHistoryButton.addEventListener("click", function () {
  let scoreList = "";
  for (let i = 0; i < scoreHistory.length; i++) {
    scoreList += `Round ${i + 1}: ${scoreHistory[i]} `;
  }

  alert(scoreList);
});
