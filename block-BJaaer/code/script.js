let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let userPreference = document.querySelector("#gender");
let userColor = document.querySelector("#color");
let userRating = document.querySelector("#range");


let userInfo = {};

function handleKeyName(event){
    userInfo.Name = event.target.value;
} 

function handleKeyEmail(event){
    userInfo.Email = event.target.value;
} 

function handleSelect(event){
    userInfo.Preference = event.target.value;
}

function handleKeyColor(event){
    userInfo.Color = event.target.value;
}

function handleKeyRating(event){
    console.log(event.target)
}

userName.addEventListener("input", handleKeyName);
userEmail.addEventListener("input", handleKeyEmail);
userPreference.addEventListener("input", handleSelect);
userColor.addEventListener("input", handleKeyColor);
userRating.addEventListener("input", handleKeyRating);