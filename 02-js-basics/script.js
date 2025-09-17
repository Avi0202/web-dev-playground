// const todoList=getelementbyid('todo-list');
console.log("Script loaded successfully");
console.log(document);

const taskList = document.getElementById('task-list');
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const clearButton = document.getElementById('clear-completed');
const taskCount = document.getElementById('task-count');


let count=0;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;
    taskList.innerHTML += `<li>${task}</li>`;
    input.value = '';
    count++;
    taskCount.innerHTML = `Total tasks: ${count}`;
});

clearButton.addEventListener('click', () => {
    taskList.innerHTML = '';
});