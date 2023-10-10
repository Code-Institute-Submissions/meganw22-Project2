// general settings
let newGameBtn = document.getElementById('new-game-btn');
let twoPlayersBtn = document.getElementById('two-players-btn');
let vsComputerBtn = document.getElementById('play-computer-btn');
let playerXText = document.getElementById('player-x');
let playerOText = document.getElementById('player-o');
let boxes = document.getElementsByClassName("box");
let gameStatus = document.getElementById("game-status");
let currentPlayer = "X";
let isTwoPlayerMode = false;

document.addEventListener('DOMContentLoaded', function () {

    //overlay settings
    let overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.style.display = 'flex';

        let closeButton = document.getElementById('lets-go-btn');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                overlay.style.display = 'none';
            });
        }
    }
});

// Start new game
function newGame() {
    const boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }
    currentPlayer = "X";
    updateGameStatus();
}
newGameBtn.addEventListener("click", newGame)

//choose player type buttons
twoPlayersBtn.addEventListener('click', function () {
    isTwoPlayerMode = true; //set game to two player mode
    playerOText.innerHTML = "Player O";
    newGame();
});

vsComputerBtn.addEventListener('click', function () {
    isTwoPlayerMode = false; //set game to computer mode
    playerOText.innerHTML = "Computer O";
    newGame();
});

// add click event listeners to all boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", handleBoxClick);
}

// Update game status
function updateGameStatus() {
    if (isTwoPlayerMode) {
        gameStatus.textContent = `Player ${currentPlayer}'s Turn`;
    }     
}

//Play X or O
function handleBoxClick(event) {
    let box = event.target;
    if (box.innerHTML === "") {
        box.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateGameStatus();
    }
    
}

/*

//if vs computer:
function vsComputer () {
    if (playerOMove)
}

/**
 * //ensure box is free for play
function freeSpace() {
    //ensure box is free for play
    let allCleared = true;
    for (let i = 0; i < clearBoxes.length; i++) {
        clearBoxes[i].innerHTML !== ""; {
            allCleared = false;
            break;
        }
    }
    if (allCleared) {
       playerXMove = true; 
    }
}
 */


//check 3 in a row
function checkMatches() {

}
