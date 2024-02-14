const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');

let todos = [];
checkEmptyList();

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addTodo(todoInput.value);
  checkEmptyList();
});



todoItemsList.addEventListener('click', function(event) {
  if (event.target.type === 'checkbox') {
    toggle(event.target.parentElement.getAttribute('data-key'));
  }
  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }

});


function addTodo(item) {
  if (item !== '') {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };
    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.value = '';
    todoInput.focuse();
  }
}

function renderTodos(todos) {
  todoItemsList.innerHTML = '';
  todos.forEach(function(item) {
    const checked = item.completed ? 'checked': null;
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
    /* <li class="item" data-key="20200708"> 
          <input type="checkbox" class="checkbox">
          Go to Shop
          <button class="delete-button">X</button>
        </li> */
    if (item.completed === true) {
      li.classList.add('checked');
    }
li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
     ${item.name}
      <button class="delete-button">X</button>
    `;
    todoItemsList.append(li);
  });
}


function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}



function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

function toggle(id) {
  todos.forEach((item) => { 
    (item.id == id ?  item.completed = !item.completed : none )
  });
addToLocalStorage(todos);
}

function deleteTodo(id) {
  todos = todos.filter((item) => item.id != id);
  addToLocalStorage(todos);
  checkEmptyList();
}


function checkEmptyList() {
	if (todos.length === 0) {
		const emptyListHTML = ` <li id="emptyList" class="list-group-item empty-list">
    <img src="https://e7.pngegg.com/pngimages/853/829/png-clipart-watercolor-painting-drawing-leaf-illustration-%E6%A0%91%E5%8F%B6logo-watercolor-painting-purple.png" alt="Empty" width="48" class="mt-3">
    <div class="empty-list__title">Empty List</div>
  </li>`;
		todoItemsList.insertAdjacentHTML('afterbegin', emptyListHTML);
	}

	if (todos.length > 0) {
		const emptyListEl = document.querySelector('#emptyList');
		emptyListEl ? emptyListEl.remove() : null;
	}
}

getFromLocalStorage();