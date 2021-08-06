let form = document.querySelector("form");
let modal = document.querySelector(".modal_overlay");
let modalInfo = document.querySelector(".modal_Info");
let userInfo = {};



form.addEventListener("submit", (event) => {
    event.preventDefault();

    let elements = event.target.elements;

    userInfo.name = elements.text.value;
    userInfo.email = elements.email.value;
    userInfo.choice = elements.gender.value;
    userInfo.color = elements.color.value;
    userInfo.movie = elements.movie.value;
    userInfo.book = elements.book.value;
    userInfo.terms = elements.terms.checked;

    modal.classList.add("open");


    let close = document.querySelector(".modal_close");

    close.addEventListener("click", () => {
        modal.classList.remove("open");
    });

    displayInfo(userInfo);
});

function displayInfo(data = {}) {
    modalInfo.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.innerText = `Hello ${data.name}`;
    let email = document.createElement("p");
    email.innerText = `Email: ${data.email}`;
    let choice = document.createElement("p");
    choice.innerText = `watching Choice: ${data.choice}`;
    let color = document.createElement("p");
    color.innerText = `color: ${data.color}`;
    let movie = document.createElement("p");
    movie.innerText = `Rating for movie: ${data.movie}`;
    let book = document.createElement("p");
    book.innerText = `${data.book}`;
    let terms = document.createElement("p");
    terms.innerText = `${data.terms
    ?"You have accepted the terms and condition"
    :"You have not accepted the terms and condition"    
}`;
modalInfo.append(h1,email,choice,color,movie,book,terms); 
}