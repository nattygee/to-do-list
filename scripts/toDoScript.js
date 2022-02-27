var taskTitle = document.getElementById('taskTitle');
var taskDescription = document.getElementById('taskDescription');
var submitBtn = document.getElementById('primaryCTA');

var taskListDiv = document.getElementById('theListSide');
var taskTitleSent = document.getElementById('titleSentInput');
var taskDescriptionSent = document.getElementById('descriptionSentInput');

var today = new Date();
var displayDate = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
var displayTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

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
    let taskBox = document.createElement('div');
    let leftColumn = document.createElement('div');
    let rightColumn = document.createElement('div');
    let titleRow = document.createElement('div');
    let taskBtns = document.createElement('div');

    let taskCheckbox = document.createElement('input');
    let deleteBtn = document.createElement('button');
    let editBtn = document.createElement('button');
    

    let newTaskTitle = document.createElement('div');
    let newTaskDescription = document.createElement('div');
    let taskDate = document.createElement('div');

    // defining content to attach to the new element
    let taskTitleContent = document.createTextNode(taskTitle.value);
    let taskDescriptionContent = document.createTextNode(taskDescription.value);
    let dateContent = document.createTextNode(displayDate + ' ' + displayTime);

    
    // actually attaching that content to the new element
    taskCheckbox.appendChild(leftColumn);
    newTaskTitle.appendChild(taskTitleContent);
    newTaskDescription.appendChild(taskDescriptionContent);
    taskDate.appendChild(dateContent);

    //add styling to divs
    taskBox.classList.add('taskBoxStyle');
    leftColumn.classList.add('checkBoxColumn');
    rightColumn.classList.add('contentColumn');
    titleRow.classList.add('titleRowStyle');
    taskBtns.classList.add('taskBtnsDiv');

    newTaskTitle.classList.add('titleSentStyle');
    newTaskDescription.classList.add('descriptionSentStyle');
    taskDate.classList.add('timeStampStyle');

    taskCheckbox.setAttribute("type", "checkbox");
    //editBtn.setAttribute("background", "edit");
    //deleteBtn.setAttribute("value", "delete");


    // placing newly created div on the actual page
        // automatically appends to bottom of body div 👉 document.body.appendChild(newTaskTitle);
        // appends to targeted div 👇
    taskListDiv.appendChild(taskBox);
    
        taskBox.appendChild(leftColumn);
        taskBox.appendChild(rightColumn);

            leftColumn.appendChild(taskCheckbox);
            
            rightColumn.appendChild(titleRow);    
                titleRow.appendChild(newTaskTitle);
                titleRow.appendChild(taskBtns);
                    taskBtns.appendChild(editBtn);
                    taskBtns.appendChild(deleteBtn);
            rightColumn.appendChild(newTaskDescription);    
            rightColumn.appendChild(taskDate);    

    
    //clear task input fields
    taskTitle.value = null;
    taskDescription.value = null;

    //reset focus to title input
    taskTitle.focus();

    
    console.log(displayDate + ' ' + displayTime);

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