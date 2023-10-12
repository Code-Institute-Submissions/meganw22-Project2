// general settings
let newGameBtn = document.getElementById("new-game-btn");
let newBtnOverlay = document.getElementById("new-btn-overlay");
let twoPlayersBtn = document.getElementById("two-players-btn");
let vsComputerBtn = document.getElementById("play-computer-btn");
let playerOText = document.getElementById("player-o");
let boxes = document.getElementsByClassName("box");
let gameStatus = document.getElementById("game-status");
let currentPlayer = "X";
let isTwoPlayerMode = false;
let twoPlayersBtnClicked = false;
let playerXScore = 0;
let playerOScore = 0;
let isGameOver = false;

document.addEventListener("DOMContentLoaded", function () {

    //overlay settings
    let overlay = document.querySelector(".overlay");
    if (overlay) {
        overlay.style.display = "flex";
        hideNewGameButton();
        let closeButton = document.getElementById("lets-go-btn");
        if (closeButton) {
            closeButton.addEventListener("click", function () {
                overlay.style.display = "none";
            });
        }
    }
});

// Start new game
function newGame() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }
    currentPlayer = "X";
    updateGameStatus();
    hideNewGameButton();
    isGameOver = false;
}

newGameBtn.addEventListener("click", newGame);

// add click event listeners to all boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", handleBoxClick);
}

//Two Player mode set up
function twoPlayerMode() {
    isTwoPlayerMode = true; //set game to two player mode
    playerOText.innerHTML = "Player O";
    newGame();
    resetPlayerScore();
    //2 player mode button active
    twoPlayersBtnClicked = true;
    twoPlayersBtn.style.backgroundColor = "rgb(253, 239, 245)";
    vsComputerBtn.style.backgroundColor = "";
}

twoPlayersBtn.addEventListener("click", twoPlayerMode);

// Vs Computer mode set up
function onePlayerMode() {
    isTwoPlayerMode = false; //set game to computer mode
    playerOText.innerHTML = "Computer O";
    newGame();
    resetPlayerScore();
    //1 player mode button active
    twoPlayersBtnClicked = false;
    twoPlayersBtn.style.backgroundColor = "";
    vsComputerBtn.style.backgroundColor = "rgb(253, 239, 245)";
}

vsComputerBtn.addEventListener("click", onePlayerMode);

// Update game status
function updateGameStatus() {
    let gameBoard = Array.from(boxes).map(box => box.textContent);
    if (checkMatches(gameBoard, "X")) {
        gameStatus.textContent = "Player X wins!";
        incrementScore("X");
        isGameOver = true;
    } else if (checkMatches(gameBoard, "O")) {
        gameStatus.textContent = "Player O wins!";
        incrementScore("O");
        isGameOver = true;
    } else if (gameBoard.every(cell => cell !== "")) {
        gameStatus.textContent = "It's a draw!";
        isGameOver = true;
    } else {
        gameStatus.textContent = `Player ${currentPlayer}'s Turn`;
    }
    if (isGameOver) {
        newBtnOverlay.style.display = "flex";
    }
}

//Play X or O
function handleBoxClick(event) {
    if (!isGameOver) {
        //if two players
        if (isTwoPlayerMode) {
            let box = event.target;
            if (box.innerHTML === "") {
                box.innerHTML = currentPlayer;
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                updateGameStatus();
            }
        } else {
            //if vs computer
            if (!isTwoPlayerMode) {
                let box = event.target;
                if (box.innerHTML === "") {
                    box.innerHTML = "X";
                    currentPlayer = "O";
                    setTimeout(calculateRandomMove, 500);
                    updateGameStatus();
                }
            }
        }
    }
}

//Vs Computer calculations - Computer is alway "O"
function calculateRandomMove() {
    updateGameBoard();
    //check if match is found
    if (checkMatches(gameBoard, "X") || checkMatches(gameBoard, "O")) {
        return;
    }

    //finding empty boxes
    let emptyBoxes = [];
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
        currentPlayer = "X";
        updateGameStatus();
    }

    updateGameBoard();
    if (checkMatches(gameBoard, "X") || checkMatches(gameBoard, "O")) {
        return;
    }
}

//Winning Matches check
function checkMatches(board, symbol) {
    let winningMatches = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    //check for win
    for (let match of winningMatches) {
        let [a, b, c] = match;
        if (board[a] === symbol && board[b] === symbol && board[c] === symbol) {
            return true;
        }
    }
    return false;
}

function updateGameBoard() {
    //['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
    gameBoard = Array.from(boxes).map(box => box.innerHTML);
}

function incrementScore(winner) {
    //increment the score to the winner of the match
    if (winner === "X") {
        playerXScore++;
        document.getElementById("px-score").textContent = playerXScore;
    } else if (winner === "O") {
        playerOScore++;
        document.getElementById("po-score").textContent = playerOScore;
    }
}

function resetPlayerScore() {
    playerXScore = 0;
    playerOScore = 0;
    document.getElementById("px-score").textContent = playerXScore;
    document.getElementById("po-score").textContent = playerOScore;
}

function hideNewGameButton() {
    newBtnOverlay.style.display = "none";
}