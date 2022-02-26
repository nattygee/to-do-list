var taskTitle = document.getElementById('taskTitle');
var taskDescription = document.getElementById('taskDescription');
var submitBtn = document.getElementById('primaryCTA');

var taskListDiv = document.getElementById('theListSide');
var taskTitleSent = document.getElementById('titleSentInput');
var taskDescriptionSent = document.getElementById('descriptionSentInput');

submitBtn.addEventListener('click', () => {
    createTask();
    sendTaskOver();
});

    //🏁 creating a brand new task from scratch in the task column
function createTask() {
    // creating a new element
    let newTaskTitle = document.createElement('div');

    // defining content to attach to the new element
    let taskTitleContent = document.createTextNode(taskTitle.value);
    
    // actually attaching that content to the new element
    newTaskTitle.appendChild(taskTitleContent);

    // placing newly created div on the actual page
    const parentDiv = taskListDiv.parentNode;
    parentDiv.insertBefore(newTaskTitle, taskListDiv);


    console.log(newTaskText);
}

function sendTaskOver() {
    //translate task input text to task list div
    taskTitleSent.value = taskTitle.value;
    taskDescriptionSent.value = taskDescription.value;
        
    //clear task input fields
    taskTitle.value = null;
    taskDescription.value = null;
}
