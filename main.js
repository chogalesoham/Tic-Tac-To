let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGame = document.querySelector(".new-game");
let winner = document.querySelector(".winner");
let WText = document.querySelector(".Wtext");

let TurnBnt = true;

const PayerWon = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (TurnBnt == true) {
      box.innerText = "X";
      box.style.color = "red";
      TurnBnt = false;
    } else {
      box.innerText = "O";
      box.style.color = "green";
      TurnBnt = true;
    }
    box.disabled = true;

    CheckWinner();
  });
});

const DesableBox = () => {
  for (let box of boxs) {
    box.disabled = true;
  }
};

const resetfun = () => {
  for (let box of boxs) {
    box.disabled = false;
    box.innerHTML = " ";
  }
};

const WennerMsg = (win) => {
  WText.innerText = `Wenner is: ${win}`;
  winner.classList.remove("hide");
  DesableBox();
};

const CheckWinner = () => {
  for (let pattern of PayerWon) {
    let pos1val = boxs[pattern[0]].innerText;
    let pos2val = boxs[pattern[1]].innerText;
    let pos3val = boxs[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        TurnBnt = true;
        console.log("winner", pos1val);
        WennerMsg(pos1val);
      }
    }
  }
};

resetBtn.addEventListener("click", resetfun);
newGame.addEventListener("click", resetfun);
