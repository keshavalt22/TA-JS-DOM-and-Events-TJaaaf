let input = document.querySelector(`input[type="text"]`); 
let rootElm = document.querySelector(".movie_list");

let allMovies = [
    {
        name: "Troy",
        watched: false,
    },
    {
        name: "Lake House",
        watched: false,
    }
]

input.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value = "";
        createMovieUI();
    }
});

function deleteMovie(event){
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovieUI();
}

function handleChange(event){
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
}

function createMovieUI(){
    rootElm.innerHTML = "";
    allMovies.forEach((movie, i) =>{
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.id = i;
        input.checked = movie.watched;
        input.addEventListener("click", handleChange);
        let label = document.createElement("label");
        label.for = i;
        label.innerText = movie.name;
        let span = document.createElement("span");
        span.innerText = "x";
        span.setAttribute("data-id", i);
        span.addEventListener("click", deleteMovie);
        li.append(input,label,span);
        rootElm.append(li);
    })
}

createMovieUI();