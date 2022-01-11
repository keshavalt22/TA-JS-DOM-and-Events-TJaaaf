let rootElement = document.querySelector("ul");
let rootBtn = document.querySelector(".btn"); 
let search = document.querySelector(".search");
let allPeople = got.houses.reduce((acc,cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);

let allBtn = got.houses.map((house) => house.name);

let activeHouse = "";

function createCardsUI(data = []) {
    rootElement.innerText = "";
    data.forEach((people) => {
        let li = document.createElement("li");
        let img = document.createElement("img");
        img.src = people.image;
        img.alt = people.name;
        let h2 = document.createElement("h2");
        h2.innerText = people.name;  
        let p = document.createElement("p");
        p.innerHTML = people.description;
        let button = document.createElement("button");
        button.innerText = "Know More"
        li.append(img,h2,p,button);
        rootElement.append(li);
    });
}
function createBtnUI(btn = []) {
    rootBtn.innerText = "";
    btn.forEach((tag) => {
        let button = document.createElement("button")
        button.innerText = tag;
        if(activeHouse === tag){
            button.classList.add(`selected`);
        }
        button.addEventListener("click", () => {
            activeHouse = tag;
            let peopleOfTheHouse = got.houses.find((house) => house.name === tag).people || [];
            createCardsUI(peopleOfTheHouse);
            createBtnUI(allBtn);
        })
        rootBtn.append(button);
    });
}

function handleSearch(event) {
    let searchText = event.target.value;
    let filteredPeople = allPeople.filter((people) => people.name.toLowerCase().includes(searchText.toLowerCase()));
    createCardsUI(filteredPeople);

}

search.addEventListener("input",handleSearch);

createCardsUI(allPeople);
createBtnUI(allBtn);