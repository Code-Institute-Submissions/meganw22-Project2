document.addEventListener('DOMContentLoaded', function () {
    // general settings
    let newGameBtn = document.getElementsByClassName('new-game-btn');

    //overlay settings
    var overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.style.display = 'block';

        var closeButton = document.getElementById('first-game-start');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                overlay.style.display = 'none';
            });
        }
    }
    
    document.
});



// Start new game
function newGame() {

    let clearBoxes = document.getElementsByClassName("box");
    for (let i = 0; i < clearBoxes.length; i++) {
        clearBoxes[i].innerHTML = "";
    }
}




