// general settings
let newGameBtn = document.getElementById('new-game-btn');
let clearBoxes = document.getElementsByClassName("box");
let twoPlayersBtn = document.getElementById('two-players-btn');
let vsComputerBtn = document.getElementById('play-computer-btn');
let playerXText = document.getElementById('player-x');
let playerOText = document.getElementById('player-o');
let boxes = document.getElementsByClassName("box");
let currentPlayer = "X";

document.addEventListener('DOMContentLoaded', function () {
     
    //overlay settings
    let overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.style.display = 'flex';

        let closeButton = document.getElementById('lets-go-btn');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                overlay.style.display = 'none';
            });
        }
    }
});

newGameBtn.addEventListener("click", function() {
    newGame();
})

// Start new game
function newGame() {
    for (let i = 0; i < clearBoxes.length; i++) {
        clearBoxes[i].innerHTML = "";
    }
}

//choose player type
    twoPlayersBtn.addEventListener('click', function() {
        playerOText.innerHTML = "Player O";
    });

    vsComputerBtn.addEventListener('click', function() {
        playerOText.innerHTML = "Computer O";
    });

// add click event listeners to all boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", handleBoxClick);
}


//Play X or O
function handleBoxClick(event) {
    let box = event.target;
    if (box.innerHTML === "") {
        box.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O":"X";
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
