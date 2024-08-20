let btn=document.getElementById("add");
let input=document.getElementById("input");
let todoList=document.getElementById("todoList");
//local storage
let todos=[];
window.onload=()=>
{
   todos=JSON.parse(localStorage.getItem("todos")) || []
    todos.forEach(todo=>addtodo(todo))
}

btn.addEventListener("click",()=>
{
    todos.push(input.value)
    localStorage.setItem("todos",JSON.stringify(todos))
    addtodo(input.value)
    input.value=""
})
function addtodo(todo)
{
    let par=document.createElement("p");
    par.innerText=todo;
    todoList.appendChild(par)
    
    par.addEventListener("click",()=>{
        par.style.textDecoration="line-through"
        remove(todo)
    })
    par.addEventListener("dblclick",()=>{
        todoList.removeChild(par)
        remove(todo)
    })
}
function remove(todo)
{
    let index=todos.index(todo)
    if(index> -1){
        todos.splice(index,1);
    }
    localStorage.setItem("todos",JSON.stringify(todos))
}