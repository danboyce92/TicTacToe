
let playerTurn = false;
let unavailableTiles = [];
const startButton = document.getElementById('start');
const turnInfo = document.getElementById('turn-info');

let tr = document.getElementById('tr').innerHTML;
let tm = document.getElementById('tm').innerHTML;
let tl = document.getElementById('tl').innerHTML;
let mr = document.getElementById('mr').innerHTML;
let mm = document.getElementById('mm').innerHTML;
let ml = document.getElementById('ml').innerHTML;
let br = document.getElementById('br').innerHTML;
let bm = document.getElementById('bm').innerHTML;
let bl = document.getElementById('bl').innerHTML;

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
        currentTile.style.backgroundColor = '';

    }

    turnInfo.innerHTML = 'Player X, take your turn.'
}

const chooseTile = (tileId) => {
    const chosenTile = document.getElementById(tileId);
    if (playerTurn) {
        chosenTile.innerHTML = 'X';
        turnInfo.innerHTML = 'Player O, take your turn.'
    } else {
        chosenTile.innerHTML = 'O';
        turnInfo.innerHTML = 'Player X, take your turn.' 
    }

    const tile = document.getElementById(`${tileId}Cover`);
    tile.style.zIndex = 2;
    unavailableTiles.push(tileId);
    if (unavailableTiles.length === 9) {
        turnInfo.innerHTML = 'Draw'
        startButton.style.visibility = 'visible';
    }
    playerTurn = !playerTurn;

    tr = document.getElementById('tr').innerHTML;
    tm = document.getElementById('tm').innerHTML;
    tl = document.getElementById('tl').innerHTML;
    mr = document.getElementById('mr').innerHTML;
    mm = document.getElementById('mm').innerHTML;
    ml = document.getElementById('ml').innerHTML;
    br = document.getElementById('br').innerHTML;
    bm = document.getElementById('bm').innerHTML;
    bl = document.getElementById('bl').innerHTML;

    console.log(tr, tm, tl, mr, mm, ml, br, bm, bl);

    if(checkIfWin()) {
        playerTurn = !playerTurn;
        let textToChange = turnInfo.innerHTML;
        let edited = textToChange.slice(0, 7);
        let finished = `A ${edited} has won!!`
        turnInfo.innerHTML = finished;
        startButton.style.visibility = 'visible';
        document.getElementById('board-cover').style.zIndex = 2;

    }

}


const checkIfWin = () => {
    const winningCombinations = [
      [document.getElementById('tr'), document.getElementById('tm'), document.getElementById('tl')], // Top row
      [document.getElementById('mr'), document.getElementById('mm'), document.getElementById('ml')], // Middle row
      [document.getElementById('br'), document.getElementById('bm'), document.getElementById('bl')], // Bottom row
      [document.getElementById('tl'), document.getElementById('mm'), document.getElementById('br')], // Diagonal from top-left to bottom-right
      [document.getElementById('tr'), document.getElementById('mm'), document.getElementById('bl')], // Diagonal from top-right to bottom-left
      [document.getElementById('tr'), document.getElementById('mr'), document.getElementById('br')], // Right column
      [document.getElementById('tm'), document.getElementById('mm'), document.getElementById('bm')], // Middle column
      [document.getElementById('tl'), document.getElementById('ml'), document.getElementById('bl')] // Left column
    ];
  
    for (const combination of winningCombinations) {
      if (combination[0].innerHTML && combination[0].innerHTML === combination[1].innerHTML && combination[1].innerHTML === combination[2].innerHTML) {
        combination[0].style.backgroundColor = '#9ce37d';
        combination[1].style.backgroundColor = '#9ce37d';
        combination[2].style.backgroundColor = '#9ce37d';
        return true;

      }
    }
  
    return false;
  };



// if (playerTurn) {
//     const tiles = document.getElementById('tm');
//     tiles.style.BackgroundColor = 'red';
// }