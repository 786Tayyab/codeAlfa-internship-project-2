document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'list-group-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);

    const completeButton = document.createElement('button');
    completeButton.className = 'btn btn-success btn-sm ml-2';
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        taskSpan.classList.toggle('completed');
    });
    taskItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm ml-2';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
}
