const cells = document.querySelectorAll(".cell");

const statusText = document.querySelector("#status-text");

const restartBtn = document.querySelector(".restart-button");

//Dit zijn al de win mogelijkheden
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""]; //een lege gameboard

let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked)); //Hierdoor kan je de cellen klikken
    restartBtn.addEventListener("click", restartGame);//Restart het spel
    statusText.textContent = `${currentPlayer}'s turn`; //Restart je het spel dan geeft het aan wie aan de beurt is
    running = true;
}
function cellClicked(){//this = cell

    // console.log(this.classList[1]);
    const cellIndex = this.classList[1];

    if(options[cellIndex] != "" || !running){//checkt of array niet leeg is en of het spel aan het runnen is.

        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

//dit checkt wie aan de beurt is
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X"; //toggled tussen X en O en veranderd de Status wie aan de beurt is
    statusText.textContent = `${currentPlayer}'s turn`;
}
//Checkt of de player dat ronde heeft gewonnen
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){//for loop laad alle wincombos in
        const condition = winConditions[i];//alle wincombos
        const cellA = options[condition[0]];//checked hele boord
        const cellB = options[condition[1]];//checked hele boord
        const cellC = options[condition[2]];//checked hele boord

        //console.log(condition[0]);
        //console.log(condition[1]);
        //console.log(condition[2]);

        if(cellA == "" || cellB == "" || cellC == ""){//checked of cellA, cellB of cellC leeg is.
            continue;
        }
        if(cellA == cellB && cellB == cellC){//gewonnen!

            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;//round won status
        running = false;

    }
    else if(!options.includes("")){//check of alle arrays een X of O bevatten, als alle arrays vol zijn en niemand heeft gewonnen dan is het een draw.

        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}

//Met de restart knop kan je de game restarten
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];//clear de board array
    statusText.textContent = `${currentPlayer}'s turn`;//status
    cells.forEach(cell => cell.textContent = "");//maakt alle cells textcontent leeg

    running = true;
}
