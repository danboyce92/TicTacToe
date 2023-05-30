const tr = document.getElementById('tr').innerHTML;
const tm = document.getElementById('tm').innerHTML;
const tl = document.getElementById('tl').innerHTML;
const mr = document.getElementById('mr').innerHTML;
const mm = document.getElementById('mm').innerHTML;
const ml = document.getElementById('ml').innerHTML;
const br = document.getElementById('br').innerHTML;
const bm = document.getElementById('bm').innerHTML;
const bl = document.getElementById('bl').innerHTML;

const checkIfWin = () => {
    const winningCombinations = [
      [tr, tm, tl], // Top row
      [mr, mm, ml], // Middle row
      [br, bm, bl], // Bottom row
      [tl, mm, br], // Diagonal from top-left to bottom-right
      [tr, mm, bl], // Diagonal from top-right to bottom-left
      [tr, mr, br], // Right column
      [tm, mm, bm], // Middle column
      [tl, ml, bl]  // Left column
    ];
  
    for (const combination of winningCombinations) {
      if (combination[0] === combination[1] && combination[1] === combination[2]) {
        return true;
      }
    }
  
    return false;
  }