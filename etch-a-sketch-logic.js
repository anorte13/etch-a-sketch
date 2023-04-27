//Helper function to grab document ID's without repeating code
const $ = (id) => {
  return document.getElementById(id);
};

let container = $("container");

let startBtn = $("user");
startBtn.addEventListener("click", createGrid);

let deleteBtn = $("delete");
deleteBtn.addEventListener("click", clearGrid);

let defaultBtn = $("default");
defaultBtn.addEventListener("click", defaultMode);

let rainbowBtn = $("rainbow");
rainbowBtn.addEventListener("click", rainbowMode);

let ereaseBtn = $("eraser");
ereaseBtn.addEventListener("click", eraserBox);

function createGrid() {
  let rows = prompt("How many rows do you want?: ");
  if (rows > 100) {
    alert("Please pick a number less than 100");
    return;
  }
  let i = 0;
  let x = rows * rows;

  document.documentElement.style.setProperty("--columns-row", rows);

  for (i = 0; i < x; i++) {
    const div = document.createElement("div");
    div.className = "box";
    document.getElementById("container").appendChild(div);
    div.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "black";
    });
  }
  startBtn.disabled = true;
}

function clearGrid() {
  let element = document.querySelectorAll(".box");
  element.forEach((box) => {
    box.style.backgroundColor = "ghostwhite";
  });
  while (container.firstChild) {
    container.removeChild(container.firstElementChild);
  }
  startBtn.disabled = false;
}

function rainbowMode() {
  let updated = document.querySelectorAll(".box");

  updated.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = getRandomColor();
    });
  });
}

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let boxColor = "#" + randomColor;
  return boxColor;
}

function eraserBox() {
  let erased = document.querySelectorAll(".box");

  erased.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "ghostwhite";
    });
  });
}
function defaultMode() {
  let box = document.querySelectorAll(".box");

  box.forEach((box) => {
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "black";
    });
  });
}
