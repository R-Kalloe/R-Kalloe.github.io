//Declaring all variables for interface
const goBackButton = document.querySelector(".go-back-button");
const clickAreas = document.querySelectorAll(".select-area");
const playerNameInputButton = document.querySelector(
  ".player-name-input-button"
);
const showPlayerName = document.querySelector("#player-name");
const currentPlayerDisplay = document.querySelector("#current-player");
const welcomeMessage = document.querySelector("#welcome-message");

//Variables for the two players we need
let playerRed = "Red";
let playerBlue = "Blue";
let scoreRed = 0;
let scoreBlue = 0;
const scoreRedDisplay = document.querySelector("#score-red");
const scoreBlueDisplay = document.querySelector("#score-blue");

//Variables for the current player and if the game is over or not
let currentPlayer = playerRed;
const showCurrentPlayer = document.querySelector("#current-player");
const restartButton = document.querySelector(".restart-button");
let gameOver = false;

//Variables for the board and the rows for the 4 connect logic
const playBoard = document.querySelector("#board");
const scoreBoard = document.querySelector(".scoreboard");
let board;
let rows = 5;
let columns = 7;
let currentColumns;

//Event listener for go-back button, which will navigate the user to the main page
goBackButton.addEventListener("click", function () {
  window.location.assign("index.html");
});

//This code will disable the restart button so it can't be clicked while the first round hasn't finished yet
restartButton.disabled = true;

let playerName = "";

//Prompt for name input from the player
playerNameInputButton.addEventListener("click", function () {
  //Declare a variable and connect it to a function which will validate the prompt input
  playerName = validatePromptInput();

  //Making the function which will validate the prompt input
  function validatePromptInput() {
    while (playerName === "") {
      playerName = prompt("Enter your name");

      if (playerName === "") {
        alert("You need to enter a name if you want to play the game!");
      } else if (playerName.length > 16) {
        alert("Your name can contain a maximum of 16 characters");
        playerName = "";
      } else if (checkForbiddenCharacters(playerName)) {
        alert(
          "Your name contains forbidden characters, make sure your name doesn't contain one of the follow characters  '!@#$%^&*()' "
        );
        playerName = "";
      } else if (checkForbiddenWords(playerName)) {
        alert(
          "Your name contains forbidden words, make sure your name doesn't contain any bad words"
        );
        playerName = "";
      } else {
        playerNameEntered = true;
        playerNameInputButton.disabled = true;
        showPlayerName.style.display = "block";
        showPlayerName.innerHTML = playerName + " " + "is playing!";
        playerNameInputButton.style.display = "none";
        welcomeMessage.style.display = "none";

        //Updating the name of player Red to the name from the input
        scoreRedDisplay.textContent = `Red: 0`;
        //Calling the setGame function so the game can start
        setGame();
        break;
      }
    }
  }
});

//Making the function which will check if the name contains forbidden characters

function checkForbiddenCharacters(playerName) {
  const forbiddenCharacters = "!@#$%^&*()";

  for (let i = 0; i < playerName.length; i++) {
    if (forbiddenCharacters.includes(playerName[i])) {
      //If the name includes one or multiple forbiddne characters, the code will return true as it isn't allowed
      return true;
    } else {
      return false;
    }
  }
}

//Making the function which will check if the name contains forbidden words

function checkForbiddenWords(playerName) {
  const forbiddenWords = [
    "klootzak",
    "kut",
    "homo",
    "teringlijer",
    "hond",
    "fuck",
    "tering",
  ];

  for (let i = 0; i < forbiddenWords.length; i++) {
    if (playerName.includes(forbiddenWords[i])) {
      return true;
    }
  }
  return false;
}

//This function will start the game
function setGame() {
  //Adding a border to the playboard using JavaScript, and let the scoreboard appear
  playBoard.style.border = "2px solid rgb(152, 231, 231)";
  playBoard.style.boxShadow = "0 0 20px #eee";
  scoreBoard.style.display = "block";

  showCurrentPlayer.textContent = `Its the turn of player: Red!`;

  //Making an array of the board
  board = [];
  //Making an array of the currentColumns variable, which is responsible for the correct placement of the tiles
  currentColumns = [4, 4, 4, 4, 4, 4, 4];

  //This code will loop through the rows
  for (let addRow = 0; addRow < rows; addRow++) {
    let row = [];

    //This code will loop through the columns
    for (let addColumn = 0; addColumn < columns; addColumn++) {
      //This will push an empty space for a cell in the row array
      row.push(" ");

      //HTML

      let tile = document.createElement("div");

      //This will assign a unique ID to the div based on its row and column
      tile.id = addRow.toString() + "-" + addColumn.toString();

      //This will add a class 'tile', so it can be styled in CSS
      tile.classList.add("tile");

      //This addEventListener will activate the function setPiece by clicking on the tiles.
      tile.addEventListener("click", setPiece);

      //This will add the tiles to the board, this code will get the board ID and 'append' will show the tiles in the board
      document.querySelector("#board").append(tile);
    }
    //This will push the row array to the board
    board.push(row);
  }
}

//Creating the setPiece function, which will add the color of the player to the tiles
function setPiece() {
  //Checking if the game is over or not
  if (gameOver) {
    //If gameOver is true, we return it because we don't have to do anything now
    return;
  }

  //This will select the current id of the HTML element, split will split the strings into a array of substrings, where the '-' makes the split clear
  let coordinates = this.id.split("-");

  //This will convert the first and second substring from the array coordinates to an integer. After this, the variables are integer variables instead of string variables
  //0 will get the first element of the array (row), and 1 will get the second element (column)
  addRow = parseInt(coordinates[0]);
  addColumn = parseInt(coordinates[1]);

  addRow = currentColumns[addColumn];
  if (addRow < 0) {
    return;
  }

  //This code will update the board array into coordinates of addRow and addColumn, the current player is assigned to the specific location on the board and will save the results
  board[addRow][addColumn] = currentPlayer;

  //This code will escape any special characters in the string that is created in the previous step. Speciale characters needs to escape so the code can run correctly.
  //The # symbol is the ID-Selector in CSS, which will create an CSS ID-selector by combining the # with the previous escaped string
  let tile = document.querySelector(
    `#${CSS.escape(addRow.toString() + "-" + addColumn.toString())}`
  );

  //Checking the current player so we can add the correct CSS style to the selected tile
  if (currentPlayer == playerRed) {
    tile.classList.add("red-piece");

    showCurrentPlayer.textContent = "Its the turn of player: Blue!";
    //This will turn the current player to blue, so there is a switch in turns after a player selected a tile
    currentPlayer = playerBlue;
  } else {
    tile.classList.add("blue-piece");
    showCurrentPlayer.textContent = `Its the turn of player: Red!`;
    currentPlayer = playerRed;
  }

  //This will update the row height for the column
  addRow -= 1;

  //This will update the array
  currentColumns[addColumn] = addRow;

  checkWinner();
}

function checkWinner() {
  //Checking horizontally if there is an four on a row connection
  for (let addRow = 0; addRow < rows; addRow++) {
    //Minus 3, so we can check 3 ahead of us, without going out of the bounds
    for (let addColumn = 0; addColumn < columns - 3; addColumn++) {
      //Checking if the current position on the board is not empty
      if (board[addRow][addColumn] != " ") {
        //This code will check if there is a four in a row connection on the horizontal line by comparing the values in the next 3 positions on the same row
        if (
          board[addRow][addColumn] == board[addRow][addColumn + 1] &&
          board[addRow][addColumn + 1] == board[addRow][addColumn + 2] &&
          board[addRow][addColumn + 2] == board[addRow][addColumn + 3]
        ) {
          //If there is a four in a row connection, the setWinner function gets called and it will return from the checkWinner function
          setWinner(addRow, addColumn);

          //Ths exits the checkWinner function as the game ends because there is an four in a row connection
          return;
        }
      }
    }
  }

  //Checking vertically if there is an four on a row connection
  for (let addColumn = 0; addColumn < columns; addColumn++) {
    //Minus 3, so we can check 3 ahead of us, without going out of the bounds
    for (let addRow = 0; addRow < rows - 3; addRow++) {
      //Checking if the current position on the board is not empty
      if (board[addRow][addColumn] != " ") {
        //This code will check if there is a four in a row connection on the vertical line by comparing the values in the next 3 positions on the same row
        if (
          board[addRow][addColumn] == board[addRow + 1][addColumn] &&
          board[addRow + 1][addColumn] == board[addRow + 2][addColumn] &&
          board[addRow + 2][addColumn] == board[addRow + 3][addColumn]
        ) {
          //If there is a four in a row connection, the setWinner function gets called and it will return from the checkWinner function
          setWinner(addRow, addColumn);

          //Ths exits the checkWinner function as the game ends because there is an four in a row connection
          return;
        }
      }
    }
  }

  //Checking anti-diagonally if there is an four in a row connection
  for (let addRow = 0; addRow < rows - 3; addRow++) {
    for (let addColumn = 0; addColumn < columns - 3; addColumn++) {
      //Checking if the current position on the board is not empty
      if (board[addRow][addColumn] != " ") {
        //This code will check if there is a four in a row connection on the anti-diagonally line by comparing the values in the next 3 positions on the same row
        if (
          board[addRow][addColumn] == board[addRow + 1][addColumn + 1] &&
          board[addRow + 1][addColumn + 1] ==
            board[addRow + 2][addColumn + 2] &&
          board[addRow + 2][addColumn + 2] == board[addRow + 3][addColumn + 3]
        ) {
          //If there is a four in a row connection, the setWinner function gets called and it will return from the checkWinner function
          setWinner(addRow, addColumn);

          //Ths exits the checkWinner function as the game ends because there is an four in a row connection
          return;
        }
      }
    }
  }

  // Checking diagonally if there is an four in a row connection
  for (let addRow = 3; addRow < rows; addRow++) {
    for (let addColumn = 0; addColumn < columns - 3; addColumn++) {
      //Checking if the current position on the board is not empty
      if (board[addRow][addColumn] != " ") {
        //This code will check if there is a four in a row connection on the diagonally line by comparing the values in the next 3 positions on the same row
        if (
          board[addRow][addColumn] == board[addRow - 1][addColumn + 1] &&
          board[addRow - 1][addColumn + 1] ==
            board[addRow - 2][addColumn + 2] &&
          board[addRow - 2][addColumn + 2] == board[addRow - 3][addColumn + 3]
        ) {
          //If there is a four in a row connection, the setWinner function gets called and it will return from the checkWinner function
          setWinner(addRow, addColumn);

          //Ths exits the checkWinner function as the game ends because there is an four in a row connection
          return;
        }
      }
    }
  }

  //Checking if the game ended in a draw or not
  let tilesSelected = 0;

  for (let addRow = 0; addRow < rows; addRow++) {
    for (let addColumn = 0; addColumn < columns; addColumn++) {
      if (board[addRow][addColumn] !== " ") {
        tilesSelected++;
      }
    }
  }

  if (tilesSelected === rows * columns && !gameOver) {
    setDraw();
    return;
  }

  function setDraw() {
    const winner = document.querySelector("#winner");
    winner.textContent = "The game ended in a draw!";
    showCurrentPlayer.style.display = "none";
    restartButton.disabled = false;
    gameOver = true;
  }
}

function setWinner(addRow, addColumn) {
  //This code will turn the restart button to true, so the player can click the button
  restartButton.disabled = false;

  let winner = document.querySelector("#winner");

  //Checking if playerRed is equal to a four in a row connection
  if (board[addRow][addColumn] == playerRed) {
    winner.textContent = `Red wins!`;
    showCurrentPlayer.style.display = "none";

    //This logic will update the score if player Red wins
    scoreRed++;
    scoreRedDisplay.textContent = `Red: ${scoreRed}`;
  } else {
    //Checking if playerBlue is equal to a four in a row connection
    winner.textContent = "Blue wins!";
    showCurrentPlayer.style.display = "none";

    //This logic will update the score if player Red wins
    scoreBlue++;
    scoreBlueDisplay.textContent = `Blue: ${scoreBlue}`;
  }

  //Gameover variable will turn true after the game has ended so there no other tile can be selected anymore
  gameOver = true;
}

//Restart button addEventListener
restartButton.addEventListener("click", function () {
  restartGame();
});

function restartGame() {
  //Turning the gameOver variable to false so the game will start over
  gameOver = false;

  //This will clear the playboard and remove all the tiles
  playBoard.innerHTML = " ";

  //This will restart the game
  nextRound();
}

function nextRound() {
  restartButton.disabled = true;
  showCurrentPlayer.style.display = "block";
  showCurrentPlayer.textContent = "Its the turn of player: Blue!";
  winner.textContent = "";
  board = [];
  currentColumns = [4, 4, 4, 4, 4, 4, 4];

  for (let addRow = 0; addRow < rows; addRow++) {
    let row = [];

    for (let addColumn = 0; addColumn < columns; addColumn++) {
      row.push(" ");

      let tile = document.createElement("div");
      tile.id = addRow.toString() + "-" + addColumn.toString();
      tile.classList.add("tile");
      tile.addEventListener("click", setPiece);
      document.querySelector("#board").append(tile);
    }

    board.push(row);
  }
}
