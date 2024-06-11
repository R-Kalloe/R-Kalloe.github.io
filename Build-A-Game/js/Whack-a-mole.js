function informPlayer(message) {
    alert(message);
}
let currMoleTile;
let score = 0;
let gameOver = false;
let timer;
let timeRemaining = 300; // 5 minuten in seconden

let playerName = prompt('What is your name?');
let player = document.querySelector('.name');
player.innerHTML = playerName;

window.onload = function () {
    setGame();
}
let info = document.querySelector('.info-btn');
let start = document.querySelector('.start-btn');
let playerScore = document.querySelector('.score');
let timerDisplay = document.getElementById('timer');

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("container").appendChild(tile);
    }
}
start.addEventListener('click', function () {
    if (!gameOver) {
        startGame();
        setInterval(setMole, 500);
        start.disabled = true;
    }
});


function startGame() {
    timer = setInterval(function () {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').innerText = `Timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            gameOver = true;
            alert('Tijd is verstreken. Je score is ' + score);
        }

        timerDisplay.innerText = `Timer: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            gameOver = true;
            timerDisplay.innerText = "Tijd is verstreken!";
            alert('Je score is ' + score);
        }




        timeRemaining--;
    }, 1000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (!gameOver) {
        if (currMoleTile) {
            currMoleTile.innerHTML = "";
        }
        let mole = document.createElement('img');
        mole.src = "./IMG/mole.png"
        let num = getRandomTile();
        currMoleTile = document.getElementById(num);
        currMoleTile.appendChild(mole);
    }
}
function displayCelebration() {
    const celebrationDiv = document.getElementById('celebration');
    celebrationDiv.style.display = 'block';
}

function selectTile() {
    if (!gameOver) {
        if (this == currMoleTile) {
            score += 15;
            document.getElementById("score").innerHTML = score.toString();
        } else if (this != currMoleTile) {
            score -= 10;
            score = Math.max(score, 0);
            document.getElementById("score").innerHTML = score.toString();
        }

        if (score >= 500) {
            clearInterval(timer);
            gameOver = true;
            timerDisplay.innerText = "Je bent de winnaar!";
            informPlayer('Gefeliciteerd, je bent de winnaar! Je score is ' + score);
            displayCelebration();
        }
    }
}