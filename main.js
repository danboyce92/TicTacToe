let playerTurn = false;
let unavailableTiles = [];
let startButton = document.getElementById('start');
let turnInfo = document.getElementById('turn-info');

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

  turnInfo.innerHTML = 'Player X, take your turn.';
};

const chooseTile = (tileId) => {
  const chosenTile = document.getElementById(tileId);
  if (playerTurn) {
    chosenTile.innerHTML = 'X';
    turnInfo.innerHTML = 'Player O, take your turn.';
  } else {
    chosenTile.innerHTML = 'O';
    turnInfo.innerHTML = 'Player X, take your turn.';
  }

  const tile = document.getElementById(`${tileId}Cover`);
  tile.style.zIndex = 2;
  unavailableTiles.push(tileId);
  if (unavailableTiles.length === 9) {
    turnInfo.innerHTML = 'Draw';
    startButton.style.visibility = 'visible';
  }
  playerTurn = !playerTurn;

  if (checkIfWin()) {
    if (!playerTurn) {
      let xWins = 'Player X has won!!';
      turnInfo.innerHTML = xWins;
    } else {
      let oWins = 'Player O has won!!';
      turnInfo.innerHTML = oWins;
    }
    // let textToChange = turnInfo.innerHTML;
    // let edited = textToChange.slice(0, 8);
    // let finished = `${edited} has won!!`;
    // turnInfo.innerHTML = finished;
    startButton.style.visibility = 'visible';
    document.getElementById('board-cover').style.zIndex = 2;
  }
};

const checkIfWin = () => {
  const winningCombinations = [
    [
      document.getElementById('tr'),
      document.getElementById('tm'),
      document.getElementById('tl'),
    ], // Top row
    [
      document.getElementById('mr'),
      document.getElementById('mm'),
      document.getElementById('ml'),
    ], // Middle row
    [
      document.getElementById('br'),
      document.getElementById('bm'),
      document.getElementById('bl'),
    ], // Bottom row
    [
      document.getElementById('tl'),
      document.getElementById('mm'),
      document.getElementById('br'),
    ], // Diagonal from top-left to bottom-right
    [
      document.getElementById('tr'),
      document.getElementById('mm'),
      document.getElementById('bl'),
    ], // Diagonal from top-right to bottom-left
    [
      document.getElementById('tr'),
      document.getElementById('mr'),
      document.getElementById('br'),
    ], // Right column
    [
      document.getElementById('tm'),
      document.getElementById('mm'),
      document.getElementById('bm'),
    ], // Middle column
    [
      document.getElementById('tl'),
      document.getElementById('ml'),
      document.getElementById('bl'),
    ], // Left column
  ];

  for (const combination of winningCombinations) {
    if (
      combination[0].innerHTML &&
      combination[0].innerHTML === combination[1].innerHTML &&
      combination[1].innerHTML === combination[2].innerHTML
    ) {
      combination[0].style.backgroundColor = '#9ce37d';
      combination[1].style.backgroundColor = '#9ce37d';
      combination[2].style.backgroundColor = '#9ce37d';
      return true;
    }
  }

  return false;
};
const start = document.getElementById('start-button');

start.addEventListener('click', startGame());

//GSAP

// gsap.to(start, {
//   duration: 2,
//   x: 200,
//   rotation: 360,
// });

// module.exports = {
//   startGame,
//   playerTurn,
//   startButton,
// };
