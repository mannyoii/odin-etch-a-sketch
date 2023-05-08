// console.log("hi");

// const sqaure = document.querySelector(".container");
// sqaure;

// for (let i = 0; i < 16; i++) {
//   document.createElement("div");
// }
let color = "black";

document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
  // getSize();

  const popup = document.querySelector(".popup");
  popup.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });
});

function createBoard(size) {
  let container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    // div.style.backgroundColor = "blue";
    div.addEventListener("mouseover", colorDiv);
    container.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = prompt("What size would you like?");
  let message = document.querySelector("#message");
  if (input === "") {
    message.textContent = "Please enter a number!";
  } else if (input < 0 || input > 100) {
    message.textContent = "Please enter a number between 1 and 100";
  } else {
    message.textContent = "Now you can play!";
  }
  return input;
}

function colorDiv() {
  // const black = document.querySelector(".black");
  // black.addEventListener("click", function () {
  // this.style.backgroundColor = "white";
  // });
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = "black";
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
