let todoList = JSON.parse(localStorage.getItem("todoItem")) || [
    { item: 'SprigBoot study', dueDate: '4/1/2025' },
    { item: 'SprigBoot study', dueDate: '4/1/2025' }
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let inputDate = document.querySelector('#todo-date');

    let inputItem = inputElement.value;
    let todoDate = inputDate.value;

    todoList.push({ item: inputItem, dueDate: todoDate });
    localStorage.setItem("todoItem", JSON.stringify(todoList));

    inputElement.value = '';
    inputDate.value = '';
    displayItems();
}

function displayItems() {
    // Always get updated list from localStorage
    todoList = JSON.parse(localStorage.getItem("todoItem")) || [];

    let containerElement = document.querySelector('#todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;

        newHtml += `
            <span>${item}</span> <span>${dueDate}</span>
            <button onclick="
                todoList.splice(${i}, 1);
                localStorage.setItem('todoItem', JSON.stringify(todoList));
                displayItems();
            ">Delete</button>
        `;
    }

    containerElement.innerHTML = newHtml;
}
