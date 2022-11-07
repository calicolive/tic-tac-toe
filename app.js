let cells = document.querySelectorAll(".row > div");
let results = document.querySelector("h2");
let isPlaying = document.querySelector("h3");
let plays = Array.from(cells);

// Holds X players movements
let xChoice = [];
// Holds O player movements
let oChoice = [];
let player = "X";

let turn = 0;

// Possible Winning Combinations
let winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Sets click events for each cell.

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

// function that gets called per click
function cellClicked(event) {
  if (event.target.textContent == "") {
    event.target.textContent = player;
    turn++;

    if (player == "X") {
      xChoice.push(plays.indexOf(event.target));
      checkWin();
      player = "O";
    } else {
      oChoice.push(plays.indexOf(event.target));
      checkWin();
      player = "X";
    }

    if (turn >= 9) {
      results.innerHTML = "Draw!";
      resetGame();
    }
  }
}

// Checks for the win
function checkWin() {
  for (i = 0; i < winningCombo.length; i++) {
    if (
      winningCombo[i].every((v) => oChoice.includes(v)) ||
      winningCombo[i].every((v) => xChoice.includes(v))
    ) {
      results.innerHTML = `Player ${player} Wins!`;
      resetGame();
    }
  }
}

// Resets the game

function resetGame() {
  setTimeout(function () {
    window.location.reload();
  }, 2000);
}
