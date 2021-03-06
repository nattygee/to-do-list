window.onload = function() {
    let retrievedTaskStorage = localStorage.getItem("taskListz");
    taskListDiv.innerHTML = retrievedTaskStorage;
    elBtn.click();
}
//let newEditBtn = Array.from(document.getElementsByClassName('editBtnStyle'));

var taskTitle = document.getElementById('taskTitle');
var taskDescription = document.getElementById('taskDescription');
var submitBtn = document.getElementById('primaryCTA');

var taskListDiv = document.getElementById('theListSide');
var taskTitleSent = document.getElementById('titleSentInput');
var taskDescriptionSent = document.getElementById('descriptionSentInput');

const taskTemplate = document.getElementById('task-template');
//var editBtnDiv = document.createElement('div');

var deleteStorageBtn = document.getElementById('clearStorage');

// note that i had to use getElementsByClassName for whatever reason 👇👇👇
var elBtn = document.getElementById('addBackEL');
elBtn.addEventListener('click', function(event) {
    // define elements by class name
    let newEditBtn = document.getElementsByClassName('editBtnStyle');
    //let firstEditBtn = newEditBtn[1];
    // figure out the function you want to perform on each
    var runFunction = function() {
            /* if (document.querySelector('div.titleSentStyle').getAttribute("contenteditable") === "false") {
                document.querySelector('div.titleSentStyle').setAttribute("contenteditable", "true");
            }  else { 
                alert('oh no');
            }; */
            console.log('hey Woo');
    };

    //loop the function to each element in the array
    for (var i = 0; i < newEditBtn.length; i++) {
        newEditBtn[i].addEventListener('click', runFunction);
    }
    /* firstEditBtn.addEventListener('click', function() {
        if (document.querySelector('div.titleSentStyle').getAttribute("contenteditable") === "false") {
            document.getElementsByClassName('titleSentStyle')[1].setAttribute("contenteditable", "true");
        }
        console.log('hey');
    }); */
});

var today = new Date();
var displayDate = today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
var displayTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

// define variables for retrieved task title and description classes (so we can target in new event listener)
var newTaskTitleLS = document.getElementsByClassName('titleSentStyle');
var newTaskDescriptionLS = document.getElementsByClassName('descriptionSentStyle');

deleteStorageBtn.addEventListener('click', function() {
    localStorage.removeItem("taskListz");
});

function saveAndCreate() {
    createTask();
    save();
}

function save() {
    // get existing
    //let existingTaskStorage = localStorage.getItem("taskListz");
    // get new (in taskListDiv)
    let newlyAddedTasks = taskListDiv.innerHTML;
    // set new local storage value
    localStorage.setItem("taskListz", newlyAddedTasks);
}
//taskListDiv

// 🥳 this is pretty helpful for finding out the 'key' values of each keyboard key/variation
window.addEventListener('keydown', x => {
    console.log(x);
})

//listen for CTA button press
submitBtn.addEventListener('click', () => {
    saveAndCreate();
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
    let deleteBtnDiv = document.createElement('div');
    let editBtnDiv = document.createElement('div');
    let deleteBtnImg = document.createElement('img');
    let editBtnImg = document.createElement('img');

    let newTaskTitle = document.createElement('div');
    let newTaskDescription = document.createElement('div');
    let taskDate = document.createElement('div');

    // defining content to attach to the new element
    let taskTitleContent = document.createTextNode(taskTitle.value);
    let taskDescriptionContent = document.createTextNode(taskDescription.value);
    let dateContent = document.createTextNode(displayDate + ' ' + displayTime);
    editBtnImg.src = "images/edit pencil.svg";
    deleteBtnImg.src = "images/delete.svg";

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
    deleteBtnDiv.classList.add('deleteBtnStyle');
    editBtnDiv.classList.add('editBtnStyle');


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
                    newTaskTitle.setAttribute("contenteditable", "false");
                titleRow.appendChild(taskBtns);
                    taskBtns.appendChild(editBtnDiv);
                        editBtnDiv.appendChild(editBtnImg);
                    taskBtns.appendChild(deleteBtnDiv);
                        //deleteBtnDiv.setAttribute("onclick", "removeTheDiv(taskBox)");
                        deleteBtnDiv.appendChild(deleteBtnImg);
            rightColumn.appendChild(newTaskDescription); 
                newTaskDescription.setAttribute("contenteditable", "false");  
            rightColumn.appendChild(taskDate);    


    editBtnDiv.addEventListener('click', function() {
        // making title and description editable
        if (newTaskTitle.getAttribute("contenteditable") === "false") {
            newTaskTitle.setAttribute("contenteditable", "true");
            newTaskDescription.setAttribute("contenteditable", "true");

            // attributes to make it more obvious that edit feature has been activated
            newTaskTitle.focus();
            newTaskTitle.classList.replace('titleSentStyle', 'titleEditStyle');
            newTaskDescription.classList.replace('descriptionSentStyle', 'descriptionEditStyle');

            //update edit button image
            editBtnImg.src = "images/confirmBtn.svg";
            
            newTaskTitle.style.transition = "all .4s";
            newTaskDescription.style.transition = "all .4s";

        } else if (newTaskTitle.getAttribute("contenteditable") === "true") {
            // turning off editability
            newTaskTitle.setAttribute("contenteditable", "false");
            newTaskDescription.setAttribute("contenteditable", "false");
            
            // resetting to non-editable style
            newTaskTitle.classList.replace('titleEditStyle', 'titleSentStyle');
            newTaskDescription.classList.replace('descriptionEditStyle', 'descriptionSentStyle');
            
            //update edit button image
            editBtnImg.src = "images/edit pencil.svg";
            
        }
        

        /* // attributes to make it more obvious that edit feature has been activated
        newTaskTitle.focus();
        newTaskTitle.classList.replace('titleSentStyle', 'titleEditStyle');
        newTaskDescription.classList.replace('descriptionSentStyle', 'descriptionEditStyle');
                            
            editBtnDiv.addEventListener('click', function() {
                // turning off editability
                newTaskTitle.setAttribute("contenteditable", "false");
                newTaskDescription.setAttribute("contenteditable", "false");
                
                // resetting to non-editable style
                newTaskTitle.classList.replace('titleEditStyle', 'titleSentStyle');
                newTaskDescription.classList.replace('descriptionEditStyle', 'descriptionSentStyle');
            }) */
    });    
    
    // rig delete button
    deleteBtnDiv.addEventListener('click', function() {
        taskBox.remove();
        
    });

    //clear task input fields
    taskTitle.value = null;
    taskDescription.value = null;

    //reset focus to title input
    taskTitle.focus();

    
    console.log(displayDate + ' ' + displayTime);

    console.log('enter key worked');
    //committed created elements to storage
   
}

// 🏁 make task and description divs editable on button click


// original way i tried to manually display tasks👇 (found out after that I needed to do it dynamically, like the above ☝️)
/*function sendTaskOver() {
    //translate task input text to task list div
    taskTitleSent.value = taskTitle.value;
    taskDescriptionSent.value = taskDescription.value;
        
    //clear task input fields
    taskTitle.value = null;
    taskDescription.value = null;
}*/