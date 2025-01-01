let todoList = JSON.parse(localStorage.getItem('todoList')) || [
  { name: 'Apple', dueDate: '2025-01-01' },
  { name: 'Banana', dueDate: '2025-01-01' },
  { name: 'Orange', dueDate: '2025-01-01' },
  { name: 'Guava', dueDate: '2025-01-01' },
];

function saveToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function renderTodoList() {
  let todoListHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
     <div>${name}</div>
     <div>${dueDate}</div> 
     <button onclick="
        todoList.splice(${i}, 1);
        saveToLocalStorage();
        renderTodoList();
        " class="delete-todo-btn">Delete
     </button>
    `;
    todoListHtml += html;
  }

  document.querySelector('.todo-list').innerHTML = todoListHtml;
}

function addTodoList() {
  let inputElement = document.querySelector('input');
  let dateInputElement = document.querySelector('#date');

  let name = inputElement.value;
  let dueDate = dateInputElement.value;

  if (name.trim() === '' || dueDate.trim() === '') {
    alert('Both task and date are required!');
    return;
  }

  // Add todo to the array
  todoList.push({ name, dueDate });
  saveToLocalStorage();
  renderTodoList();

  // Clear the input fields
  inputElement.value = '';
  dateInputElement.value = '';
}

// Render the initial list
renderTodoList();
