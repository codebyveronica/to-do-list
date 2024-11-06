const tasksHtmlArea = document.querySelector('#to-do-list');
const addNewTaskBtn = document.querySelector('.add-task');

const addNewTask = (newTask) => {
  const newToDo = document.createElement('div');
  newToDo.classList.add('to-do');
  newToDo.innerHTML = `
    <li>${newTask}</li>
    <div class="buttons">
      <button class="check">
        <i class="fa-solid fa-check"></i>
      </button>
      <button class="delete">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `
  tasksHtmlArea.appendChild(newToDo);
}

const checkToDo = (target) => {

}

addNewTaskBtn.addEventListener('click', (e) => {
  const newTaskText = document.querySelector('#new-task');

  if(newTaskText.value === '') {
    alert('Please, fill in a new to do')
  }else {
    addNewTask(newTaskText.value);
    newTaskText.value = '';
    newTaskText.focus();
  }
})

tasksHtmlArea.addEventListener('click', (e) => {
  const positionClick = e.target;
  if(positionClick.classList.contains('check')) {
    const parentElement = positionClick.parentElement.parentElement;
    const task = parentElement.querySelector('li');
    task.classList.toggle('checked');
  }

  if(positionClick.classList.contains('delete')) {
    const parentElement = positionClick.parentElement.parentElement;
    parentElement.remove();
  }
})