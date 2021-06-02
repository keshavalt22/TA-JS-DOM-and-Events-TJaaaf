colors = ["red","orange","blue","apricot","amber","yello","perple"]

let box1 = document.querySelector(".first");
let box2 = document.querySelector(".second");

box1.addEventListener("click", function(){
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    let container = document.querySelector(`.first`);

    container.style.background = randomColor;
});

box2.addEventListener("mousemove", function(){
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    let container = document.querySelector(`.second`);

    container.style.background = randomColor;
})