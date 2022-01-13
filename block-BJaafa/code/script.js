let genrateUI = (pageName) => {
 return `<body>
    <h1>"BACK TO WORK"</h1>
 </body>`
}

let genrateStyle = () => {
    return `
    body {
        background-color: #b907f0;
        color: #fff;
        font-family: "Open Sans", sans-serif;
        max-height: 700px;
        text-align: center;
    }
    h1 {
        margin-top: 200px;
    }`
};
genrateUI();
switch (window.location.hostname) {
    case "www.facebook.com":
        document.head.innerHTML = genrateStyle();
        document.body.innerHTML = genrateUI("facebook");
        break;
    case "www.netflix.com":
        document.head.innerHTML = genrateStyle();
        document.body.innerHTML = genrateUI("netflix");
        break;
    case "www.instagram.com":
        document.head.innerHTML = genrateStyle();
        document.body.innerHTML = genrateUI("instagram");
        break;
}