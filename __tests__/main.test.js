const { startGame, chooseTile, checkIfWin, playerTurn, turnInfo, startButton } = require('../main');

describe('Tic-Tac-Toe', () => {

  beforeEach(() => {
    // Reset the game state before each test
    document.body.innerHTML = `
      <div id="screen">
        <div id="title">Tic-Tac-Toe</div>
        <div id="board">
        <div id="board-cover"></div>
        <div onclick="chooseTile('tl')" class="tile" id="tl"></div>
        <div class="cover" id="tlCover"></div>
        <div onclick="chooseTile('tm')" class="tile" id="tm"></div>
        <div class="cover" id="tmCover"></div>
        <div onclick="chooseTile('tr')" class="tile" id="tr"></div>
        <div class="cover" id="trCover"></div>
        <div onclick="chooseTile('ml')" class="tile" id="ml"></div>
        <div class="cover" id="mlCover"></div>
        <div onclick="chooseTile('mm')" class="tile" id="mm"></div>
        <div class="cover" id="mmCover"></div>
        <div onclick="chooseTile('mr')" class="tile" id="mr"></div>
        <div class="cover" id="mrCover"></div>
        <div onclick="chooseTile('bl')" class="tile" id="bl"></div>
        <div class="cover" id="blCover"></div>
        <div onclick="chooseTile('bm')" class="tile" id="bm"></div>
        <div class="cover" id="bmCover"></div>
        <div onclick="chooseTile('br')" class="tile" id="br"></div>
        <div class="cover" id="brCover"></div>
        </div>
        <div id="turn-info"></div>
        <div id="start">
          <button onclick="startGame()">Start New Game</button>
        </div>
      </div>
    `;
  });

  describe('startGame', () => {
    test('should initialize the game state', () => {
      // Call the startGame function
      startGame();

      // Check if the game state is correctly initialized
      expect(playerTurn).toBe(true);
      expect(unavailableTiles).toEqual([]);
      expect(startButton).toBe('hidden');
      expect(document.getElementById('board-cover').style.zIndex).toBe('-1');
      expect(turnInfo.innerHTML).toBe('Player X, take your turn.');
    });
  });

  describe('chooseTile', () => {
    test('should update the chosen tile and change the turn information', () => {
      // Set up the initial game state
      startGame();

      // Call the chooseTile function for a specific tile
      chooseTile('tl');

      // Check if the chosen tile is correctly updated and the turn information is changed
      expect(document.getElementById('tl').innerHTML).toBe('X');
      expect(turnInfo.innerHTML).toBe('Player O, take your turn.');

      // Call the chooseTile function for another tile
      chooseTile('mm');

      // Check if the chosen tile is correctly updated and the turn information is changed
      expect(document.getElementById('mm').innerHTML).toBe('O');
      expect(turnInfo.innerHTML).toBe('Player X, take your turn.');
    });

    test('should handle a draw when all tiles are chosen', () => {
      // Set up the initial game state
      startGame();

      // Choose all tiles
      chooseTile('tl');
      chooseTile('tm');
      chooseTile('tr');
      chooseTile('ml');
      chooseTile('mm');
      chooseTile('mr');
      chooseTile('bl');
      chooseTile('bm');
      chooseTile('br');

      // Check if the turn information is updated to indicate a draw and the start button is visible
      expect(turnInfo.innerHTML).toBe('Draw');
      expect(startButton).toBe('visible');
    });
  });

  describe('checkIfWin', () => {
    test('should return true when there is a winning combination', () => {
      // Set up the game state with a winning combination
      document.getElementById('tr').innerHTML = 'X';
      document.getElementById('mm').innerHTML = 'X';
      document.getElementById('bl').innerHTML = 'X';

      // Call the checkIfWin function
      const result = checkIfWin();

      // Check if the function correctly identifies the winning combination
      expect(result).toBe(true);
    })})});
