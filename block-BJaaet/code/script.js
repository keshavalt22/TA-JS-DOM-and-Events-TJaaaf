let form = document.querySelector("form");

function handleSubmit(event) {
    event.preventDefault();

    let elements = event.target.elements;

    const movieName = elements.movieName.value;

    console.log(form.elements[name].nextElementSibling);

    // console.log({movieName});
}

form.addEventListener("submit", handleSubmit);