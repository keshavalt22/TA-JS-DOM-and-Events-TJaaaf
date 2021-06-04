let randomNumber = function getRandomNumber(){
    return Math.floor(Math.random() * 12);
}

let root = document.querySelector("boxes");


randomNumber.forEach((number) =>{
    let li = document.createElement("li");
    li.classList.add("box");
    
    li.addEventListener("click", function(event){
        handleClick(randomNumber);
    })

    li.innerText = randomNumber;
    root.append(li);
})