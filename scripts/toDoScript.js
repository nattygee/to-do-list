var taskTitle = document.getElementById('taskTitle');
var taskDescription = document.getElementById('taskDescription');
var submitBtn = document.getElementById('primaryCTA');

var taskListDiv = document.getElementById('theListSide');
var taskTitleSent = document.getElementById('titleSentInput');
var taskDescriptionSent = document.getElementById('descriptionSentInput');

// 🥳 this is pretty helpful for finding out the 'key' values of each keyboard key/variation
window.addEventListener('keydown', x => {
    console.log(x);
})

//listen for CTA button press
submitBtn.addEventListener('click', () => {
    createTask();
    console.log('offs');
});


// hit enter to submit task to listSide
taskTitle.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        submitBtn.click();
    }
});

taskDescription.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        submitBtn.click();
    }
});

    //🏁 creating a brand new task from scratch in the task column
function createTask() {
    // creating a new element
    let newTaskTitle = document.createElement('div');
    let newTaskDescription = document.createElement('div');

    // defining content to attach to the new element
    let taskTitleContent = document.createTextNode(taskTitle.value);
    let taskDescriptionContent = document.createTextNode(taskDescription.value);

    
    // actually attaching that content to the new element
    newTaskTitle.appendChild(taskTitleContent);
    newTaskDescription.appendChild(taskDescriptionContent);

    //add styling to divs
    newTaskTitle.classList.add('titleSentStyle');
    newTaskDescription.classList.add('descriptionSentStyle');

    // placing newly created div on the actual page
        // automatically appends to bottom of body div 👉 document.body.appendChild(newTaskTitle);
        // appends to targeted div 👇
    taskListDiv.appendChild(newTaskTitle);    
    taskListDiv.appendChild(newTaskDescription);    

    //clear task input fields
    taskTitle.value = null;
    taskDescription.value = null;

    //reset focus to title input
    taskTitle.focus();

    console.log('enter key worked');
}
// original way i tried to manually display tasks👇 (found out after that I needed to do it dynamically, like the above ☝️)
/*function sendTaskOver() {
    //translate task input text to task list div
    taskTitleSent.value = taskTitle.value;
    taskDescriptionSent.value = taskDescription.value;
        
    //clear task input fields
    taskTitle.value = null;
    taskDescription.value = null;
}*/