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
let twoPlayersBtnClicked = false;


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

// add click event listeners to all boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", handleBoxClick);
}

//Two Player mode ONLY
function twoPlayerMode() {
    isTwoPlayerMode = true; //set game to two player mode
    playerOText.innerHTML = "Player O";
    newGame();

    //2 player mode button active
    twoPlayersBtnClicked = true;
    twoPlayersBtn.style.backgroundColor = 'rgb(253, 239, 245)';
    vsComputerBtn.style.backgroundColor = '';
}

twoPlayersBtn.addEventListener('click', twoPlayerMode);


//Play X or O
function handleBoxClick(event) {
        let box = event.target;
        if (box.innerHTML === "") {
            box.innerHTML = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            updateGameStatus();
        }
    }











// Vs Computer mode ONLY
vsComputerBtn.addEventListener('click', function () {
        isTwoPlayerMode = false; //set game to computer mode
        playerOText.innerHTML = "Computer O";
        newGame();
        //1 player mode button active
        twoPlayersBtnClicked = false;
        twoPlayersBtn.style.backgroundColor = '';
        vsComputerBtn.style.backgroundColor = 'rgb(253, 239, 245)';
    });

// Update game status
function updateGameStatus() {
    if (isTwoPlayerMode) {
        gameStatus.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

/*

//Vs Computer calculations - Computer is alway "O"
function calculateRandomMove() {
    let emptyBoxes = [];
    //finding empty boxes
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML === "") {
            emptyBoxes.push(boxes[i]);
        }
    }
    //choose an empty box, and play
    if (emptyBoxes.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
        const selectedBox = emptyBoxes[randomIndex];
        selectedBox.innerHTML = "O";
    }
}

/*
//check 3 in a row
function checkMatches() {

}
*/