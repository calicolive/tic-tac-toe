let cells = document.querySelectorAll(".row > div");
let player = "X";
let turn = 0;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

if (turn == "X") {
  turn = "O";
} else {
  turn = "X";
}

function cellClicked(event) {
  if (event.target.textContent == "") {
    event.target.textContent = player;
    turn++;
    if (player == "X") {
      player = "O";
    } else {
      player = "X";
    }
  }
}
