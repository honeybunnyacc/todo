const taskInput = document.querySelector('.field');
const control = document.querySelector('.control');
const tasksContainer = document.querySelector('.list');

const createTask = (value) => {
	console.log('lrkg');

	const newTask = document.createElement('div');
	const newTaskCheck = document.createElement('input');
	newTaskCheck.type = 'checkbox';
	newTask.textContent = value;
	newTask.classList.add('task');
	newTask.appendChild(newTaskCheck);
	newTaskCheck.addEventListener('input', (e) => {
		e.preventDefault();
		e.target.parentNode.classList.toggle('done');
	});
	const deleteButton = document.createElement('button');
	deleteButton.classList.add('deleteButton');
	deleteButton.addEventListener('click', (e) => e.target.parentNode.remove());
	newTask.appendChild(deleteButton);
	return newTask;
};

const addTask = (e) => {
	e.preventDefault();
	if (taskInput.value) {
		const newTask = createTask(taskInput.value);
		tasksContainer.appendChild(newTask);
		taskInput.value = null;
	}
};

control.addEventListener('submit', addTask);
