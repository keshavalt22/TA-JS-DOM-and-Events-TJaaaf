let form = document.querySelector("form");

let usernameError = "";

let nameError = "";

let emailError = "";

let phonenumberError = "";

let passwordError = "";

function doescontainANumber(str){
    return str.split('').some(e => Number(e));
}

function handleSubmit(event) {
    event.preventDefault();

    let usernameElm = event.target.elements.username;

    if(usernameElm.value === ""){
        usernameError = "Can't be empty!";
    }else if(usernameElm.value.length < 4){
        usernameError = "Username can't be less than 4 characters";
    }else{
        usernameError = "";
        parentElm.classList.add("success");
    }
    usernameElm.nextElementSibling.innerText = usernameError;

    let nameElm = event.target.elements.name;

    if(doescontainANumber(nameElm.value)){
        nameError = "You can't use number in the name field";
    }else{
        nameError = "";
    }
    nameElm.nextElementSibling.innerText = nameError;

    let emailElm = event.target.elements.email;

    if(emailElm.value.length < 5){
        emailError = "Not a valid email";
    }else if(!emailElm.value.includes("@")){
        emailError = "Not a valid email";
    }
    else{
        emailError = "";
    }

    emailElm.nextElementSibling.innerText = emailError;

    let phonenumberElm = event.target.elements.phonenumber;


    if(phonenumberElm.value.length < 7){
        phonenumberError = "Length of phone number can't be less than 7";
    }else if(!doescontainANumber(phonenumberElm.value)){
        phonenumberError = "Phone number can only contain numbers";
    }else{
        phonenumberError = "";
    }

    phonenumberElm.nextElementSibling.innerText = phonenumberError;

    let passwordElm = event.target.elements.password;

    let passwordcheckElm = event.target.elements.passwordCheck;

    if(passwordElm !== passwordcheckElm){
        passwordError = "Password and confirm password must be same."
    }

    passwordcheckElm.nextElementSibling.innerText = passwordError;
}

form.addEventListener("submit", handleSubmit);