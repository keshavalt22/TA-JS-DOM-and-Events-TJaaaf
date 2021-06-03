function generateRandomColor(){
    let hexCharacters = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

    let color = "#";

    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexCharacters[randomNumber];
    }
    return color;
}

let box1 = document.querySelector(".first");
let box2 = document.querySelector(".second");

function handleClick(){
    let randomColor = generateRandomColor();

    box1.style.backgroundColor = randomColor;
}

box1.addEventListener("click",handleClick)

function handleHover(){
    let randomColor = generateRandomColor();

    box2.style.backgroundColor = randomColor;
}

box2.addEventListener("mousemove", handleHover)