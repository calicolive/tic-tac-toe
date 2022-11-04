let cells = document.querySelectorAll(".row > div");
let plays = Array.from(cells);
let xChoice = [];
let oChoice = [];
let player = "X";
let turn = 0;

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

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
  if (event.target.textContent == "") {
    event.target.textContent = player;

    if (player == "X") {
      xChoice.push(plays.indexOf(event.target));
      // console.log(xChoice);
      checkWin();
      player = "O";
    } else {
      oChoice.push(plays.indexOf(event.target));
      // console.log(oChoice);
      player = "X";
    }
  }
}

function checkWin() {
  for (let i = 0; i < winningCombo.length; i++) {
    if (xChoice.includes(winningCombo[i]));
    {
      console.log("test");
    }
  }
}
