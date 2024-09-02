'use strict';

const todoList = [
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

let ul = document.querySelector('ul');

for (let todo of todoList) {
  let input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `todo-${todo.id}`;

  input.checked = todo.completed;

  let label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.innerText = todo.task;

  let li = document.createElement('li');
  li.append(input, label);

  ul.appendChild(li);
}
