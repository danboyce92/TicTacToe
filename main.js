import { checkIfWin } from "./winLogic";

let playerTurn = false;
let unavailableTiles = [];
const startButton = document.getElementById('start');

//This function makes it playerOnes turn,
//Removes an invisible cover protecting the tiles from use outside of a game.
//And prepares tiles for the game
const startGame = () => {
    startButton.style.visibility = 'hidden';
    unavailableTiles = [];
    playerTurn = true;

    document.getElementById('board-cover').style.zIndex = -1;

    let covers = document.getElementsByClassName('cover');
    for (let i = 0; i < covers.length; i++) {
        let currentCover = covers[i];
        currentCover.style.zIndex = -1;
    }

    let tiles = document.getElementsByClassName('tile');
    for (let i = 0; i < tiles.length; i++) {
        let currentTile = tiles[i];
        currentTile.innerHTML = '';
        currentTile.classList.add('active');
    }

    const turnInfo = document.getElementById('turn-info');
    turnInfo.innerHTML = 'Player One, take your turn.'
}

const chooseTile = (tileId) => {
    const chosenTile = document.getElementById(tileId);
    const turnInfo = document.getElementById('turn-info');
    if (playerTurn) {
        chosenTile.innerHTML = 'X';
        turnInfo.innerHTML = 'Player Two, take your turn.'
    } else {
        chosenTile.innerHTML = 'O';
        turnInfo.innerHTML = 'Player One, take your turn.' 
    }



    const tile = document.getElementById(`${tileId}Cover`);
    tile.style.zIndex = 2;
    unavailableTiles.push(tileId);
    if (unavailableTiles.length === 9) {
        turnInfo.innerHTML = 'Draw'
        startButton.style.visibility = 'visible';
    }
    playerTurn = !playerTurn;
}



// if (playerTurn) {
//     const tiles = document.getElementById('tm');
//     tiles.style.BackgroundColor = 'red';
// }