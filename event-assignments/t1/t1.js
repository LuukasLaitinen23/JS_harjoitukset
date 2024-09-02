// array for todo list
let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

function loadTodoList() {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
  for (const todo of todoList) {
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = `todo-${todo.id}`;

    input.checked = todo.completed;

    input.addEventListener('change', event => {
      todo.completed = event.target.checked;
      console.log(todoList);
    });

    const deleteButton = document.createElement('button');

    deleteButton.addEventListener('click', event => {
      const index = todoList.findIndex(i => i.id === todo.id);

      todoList.splice(index, 1);

      ul.removeChild(li);

      console.log(todoList);
    });

    const label = document.createElement('label');
    label.htmlFor = `todo-${todo.id}`;
    label.innerText = todo.task;

    const li = document.createElement('li');
    li.append(input, label, deleteButton);

    ul.appendChild(li);
  }
}

const addButton = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const nameInput = document.querySelector('dialog input');
const form = document.querySelector('dialog form');

addButton.addEventListener('click', event => {
  dialog.showModal();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const newTodo = {
    id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
    task: nameInput.value,
    completed: false,
  };

  todoList.push(newTodo);
  console.log(newTodo);

  loadTodoList();
  dialog.close();
  nameInput.value = '';
});

loadTodoList();
