function main() {
    let input = document.querySelector(`input[type="text"]`); 
    let rootElm = document.querySelector(".todo_list");
    
    let allTodo = JSON.parse(localStorage.getItem("todos")) || [];
    
    function handleInput (event) {
        let value = event.target.value;
        if(event.keyCode === 13 && value !== ""){
            allTodo.push({
                name: value,
                isDone: false,
            });
            event.target.value = "";
            createTodoUI(allTodo, rootElm);
        }
        localStorage.setItem("todos", JSON.stringify(allTodo))
    };
    
    
    function deleteTodo (event) {
        let id = event.target.dataset.id;
        allTodo.splice(id, 1);
        localStorage.setItem("todos", JSON.stringify(allTodo))
        createTodoUI(allTodo, rootElm);
    }
    
    function handleToggle(event){
        let id = event.target.id;
        allTodo[id].isDone = !allTodo[id].isDone;
        localStorage.setItem("todos", JSON.stringify(allTodo))
        createTodoUI(allTodo, rootElm);
    }
    
    function createTodoUI(data, rootElm){
        rootElm.innerHTML = "";
        data.forEach((todo, i) =>{
            let li = document.createElement("li");
            let input = document.createElement("input");
            input.type = "checkbox";
            input.id = i;
            input.checked = todo.isDone;
            input.addEventListener("input", handleToggle);
            let label = document.createElement("label");
            label.for = i;
            label.innerText = todo.name;
            let span = document.createElement("span");
            span.innerText = "x";
            span.setAttribute("data-id", i);
            span.addEventListener("click", deleteTodo
            );
            li.append(input,label,span);
            rootElm.append(li);
        })
    }
    
    createTodoUI(allTodo, rootElm);
    input.addEventListener("keyup",handleInput);
    }
    main();