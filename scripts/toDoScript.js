var taskTitle = document.getElementById('taskTitle');
var taskDescription = document.getElementById('taskDescription');
var submitBtn = document.getElementById('primaryCTA');

var taskTitleSent = document.getElementById('titleSentInput');
var taskDescriptionSent = document.getElementById('descriptionSentInput');

submitBtn.addEventListener('click', () => {
    sendTaskOver();
});


function sendTaskOver() {
    //translate task input text to task list div
    taskTitleSent.value = taskTitle.value;
    taskDescriptionSent.value = taskDescription.value;
        
    //clear task input fields
    taskTitle.value = null;
    taskDescription.value = null;
}