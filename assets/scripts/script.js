// general settings
let newGameBtn = document.getElementById('new-game-btn');

document.addEventListener('DOMContentLoaded', function () {
     
    //overlay settings
    var overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.style.display = 'flex';

        var closeButton = document.getElementById('lets-go-btn');
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




