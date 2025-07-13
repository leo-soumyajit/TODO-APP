let todoList = [];

function addTodo(){
    let inputElement = document.querySelector('#todo-input');

    let inputItem = inputElement.value;
    todoList.push(inputItem)
    console.log(todoList)
    //after adding make inputElemnt blank
    inputElement.value = '';
}