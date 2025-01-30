// ==== Todo CRUD Management ====

// Array to store todos
let todos = [];

// DOM Elements 
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todolist = document.getElementById('todo-List');

// Funtion to rdener todos
function renderTodos() {
    todolist.innerHTML = ''; //clear the list
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onlick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Funtion to add a new todo
function addTodo(event) {
    event.preventDefault(); //Prevent form submission
    const newTodo = todoInput.ariaValueMax.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = ''; // clear the input
        renderTodos();
    }
}

//Funtion to edit a new todo
function editTodo(index) {
    const updatedTodo = prompt('Edit your todo:', todos[index]);
    if (updatedTodo !== null) {
        todos[index] = updateTodo.trim();
        renderTodos();
    }
}

// Function to delete a toddo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

// Event Listeners
todoForm.addEventListener('submit', addTodo);

// Initial render
renderTodos();