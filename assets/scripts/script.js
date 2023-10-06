// general settings
let newGameBtn = document.getElementById('new-game-btn');
let twoPlayersBtn = document.getElementById('two-players-btn');
let vsComputerBtn = document.getElementById('play-computer-btn');
let playerXText = document.getElementById('player-x');
let playerOText = document.getElementById('player-o');

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
    newGameBtn.addEventListener("click", function() {
        newGame();
    })
});


// Start new game
function newGame() {

    let clearBoxes = document.getElementsByClassName("box");
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

 
//if vs computer:
function vsComputer () {

}

//ensure box is free for play
function freeSpace() {

}

//player X turn?
function checkMatches() {

}
