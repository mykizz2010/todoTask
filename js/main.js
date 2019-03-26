let removeSpan = '<img src="image/remove.png" alt="">';
let completedSpan = '<img src="image/complete.png" alt="">';

document.getElementById('addtask').addEventListener('click', function() {
    let value = document.getElementById('task').value;
    if(value) { addTaskList(value); document.getElementById('task').value = ""}
});

// Remove Function Task   

function removeTask() {
    let task = this.parentNode.parentNode;
    let parent = task.parentNode;
    parent.removeChild(task);
}

function completedTask() {
    let task = this.parentNode.parentNode;
    let parent = task.parentNode;
    let id = parent.id;

    let target = (id === 'todo')? document.getElementById('completed'): document.getElementById('todo');
    
    // Can use the above code or below one.

    // if(id==='todo'){
    //     target = document.getElementById('completed');
    // } else {
    //     target = document.getElementById('todo');
    // }

    parent.removeChild(task);
    target.insertBefore(task, target.childNodes[0]);

}

// Add Function Task

function addTaskList(text) {
    let list = document.getElementById('todo');

    let task = document.createElement('li'); task.innerHTML = text;

    let buttons = document.createElement('div'); buttons.classList.add('buttons');

    let remove = document.createElement('button'); buttons.classList.add('remove'); remove.innerHTML = removeSpan;

    let completed = document.createElement('button'); buttons.classList.add('completed'); completed.innerHTML = completedSpan;

    // addEventListener for removing task from the list

    remove.addEventListener('click', removeTask);

    // addEventListener for completed task from the list

    completed.addEventListener('click', completedTask);

    buttons.appendChild(remove);
    buttons.appendChild(completed);
    task.appendChild(buttons);

    // Display the next item on top of the list.

    list.insertBefore(task, list.childNodes[0]);
}
