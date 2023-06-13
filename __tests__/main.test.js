const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync('./index.html');

const { startGame, playerTurn, startButton } = require('../main');

// Create the startButton element and add it to the virtual DOM
// beforeEach(() => {
//     document.body.innerHTML = `
//     <div id="screen">
//         <div id="title">Tic-Tac-Toe</div>
//         <div id="board">
//             <div id="board-cover"></div>
//             <div onclick="chooseTile('tl')" class="tile" id="tl"></div>
//             <div class="cover" id="tlCover"></div>
//             <div onclick="chooseTile('tm')" class="tile" id="tm"></div>
//             <div class="cover" id="tmCover"></div>
//             <div onclick="chooseTile('tr')" class="tile" id="tr"></div>
//             <div class="cover" id="trCover"></div>
//             <div onclick="chooseTile('ml')" class="tile" id="ml"></div>
//             <div class="cover" id="mlCover"></div>
//             <div onclick="chooseTile('mm')" class="tile" id="mm"></div>
//             <div class="cover" id="mmCover"></div>
//             <div onclick="chooseTile('mr')" class="tile" id="mr"></div>
//             <div class="cover" id="mrCover"></div>
//             <div onclick="chooseTile('bl')" class="tile" id="bl"></div>
//             <div class="cover" id="blCover"></div>
//             <div onclick="chooseTile('bm')" class="tile" id="bm"></div>
//             <div class="cover" id="bmCover"></div>
//             <div onclick="chooseTile('br')" class="tile" id="br"></div>
//             <div class="cover" id="brCover"></div>
//         </div>
//         <div id="turn-info">
            
//         </div>
//         <div id="start">
//             <button onclick="startGame()">Start New Game</button>
//         </div>
//     </div>
//     `
//   });

test('turns playerTurn true', () => {
    
    startGame();

    expect(playerTurn).toBe(true);
})