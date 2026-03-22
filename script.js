//let arr = [1,2,3,4,6];
//
//let sum = arr.reduce(a,b){
//
//function addNum(a,b){
//
//return a+b
//}
//console.log(sum);
//
//}



let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks
    .filter(task => {
      if (currentFilter === 'completed') return task.completed;
      if (currentFilter === 'pending') return !task.completed;
      return true;
    })
    .forEach((task, index) => {
      const li = document.createElement('li');
      li.className = task.completed ? 'completed' : '';

      li.innerHTML = `
        <span onclick="toggleComplete(${index})">${task.text}</span>
        <button onclick="deleteTask(${index})">X</button>
      `;

      list.appendChild(li);
    });
}

function addTask() {
  const input = document.getElementById('taskInput');
  if (!input.value.trim()) return;

  tasks.push({ text: input.value, completed: false });
  input.value = '';
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function filterTasks(type) {
  currentFilter = type;
  renderTasks();
}

function toggleTheme() {
  document.body.classList.toggle('light');
}

renderTasks();
