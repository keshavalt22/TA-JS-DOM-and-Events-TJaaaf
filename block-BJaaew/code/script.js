let rootElement = document.querySelector("ul");

got.houses.forEach((book) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = book.image;
    img.alt = book.title;
    let h2 = document.createElement("h2")
    h2.innerText = book.title  
    let p = document.createElement("p");
    p.innerHTML = "Author:";
    let span = document.createElement("span");
    let authorName = document.createTextNode(book.author);
    span.append(authorName);
    p.append(span);
    let button = document.createElement("button");
    button.innerText = "Buy Now";
    li.append(img,h2,p,button);
    rootElement.append(li);
})