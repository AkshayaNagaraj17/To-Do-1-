let btn=document.getElementById("add");
let input=document.getElementById("input");
let todoList=document.getElementById("todoList");

let todos=[];

btn.addEventListener("click",()=>
{
    todos.push(input.value)
    addtodo(input.value)
    input.value=""
})
function addtodo(todo)
{
    let par=document.createElement("p");
    par.innerHTML=todo;
    todoList.appendChild(par)
    par.addEventListener("click",()=>{
        par.style.textDecoration="line-through"
        remove(todo)
    })
    par.addEventListener("dblclick",()=>{
        todoList.remove(par)
    })
}
function remove(todo)
{
    let index=todos.index(todo)
    if(index>-1)
        todos.splice(index,1)
}