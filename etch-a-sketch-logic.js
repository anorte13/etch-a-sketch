let btn = document.getElementById("user")
    btn.addEventListener('click', createGrid)

function createGrid() {
    let container = document.getElementById("container");

    let rows = prompt("How many rows do you want?: ");
    if (rows > 100) {
        alert('Please pick a number less than 100');
        return;
    }
    let i = 0;
    let x = rows * rows;

    document.documentElement.style.setProperty("--columns-row", rows);

    for (i = 0; i < x; i++) {
        const div = document.createElement("div");
        div.className = 'box';
        document.getElementById("container").appendChild(div);
        div.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "black";
        });
    }
}
let btn2 = document.getElementById("delete");
    btn2.addEventListener('click', clearGrid);

function clearGrid() {
let element = document.querySelectorAll('.box');
element.forEach(box => {
    box.remove();
});
}
let btn3 = document.getElementById("rainbow");
    btn3.addEventListener('click', rainbowMode)

function rainbowMode () {
    let updated = document.querySelectorAll('.box');
   
    updated.forEach(box => {
        box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = getRandomColor();
    });
 });
}
function getRandomColor() {
let randomColor = Math.floor(Math.random()*16777215).toString(16);
let boxColor = "#" + randomColor;
return boxColor;
}

let btn4 = document.getElementById("eraser");
btn4.addEventListener('click', eraserBox)

function eraserBox() {
    let erased = document.querySelectorAll('.box') 

    erased.forEach(box =>{
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "ghostwhite";
        });
    });
}
