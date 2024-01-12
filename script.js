// Javascript

// DOM Components
let addButton;
let removeButton;
let completeButton;
let taskList;
let taskNameInput;

// Waits until the DOMConetent loaded event and sets a callback
document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

// Waits until all of the DOM content is loaded then assigns DOM elements to variables, them sets up those variables event clicks
function onDOMContentLoaded() {
    // Assign element to variables
    addButton = document.getElementById("addButton");
    removeButton = document.getElementById("removeButton");
    taskList = document.getElementById("taskList");
    taskNameInput = document.getElementById("taskNameInput");


    // Assign all event listeners
    addButton.addEventListener("click", onAddTaskButtonClick);
    removeButton.addEventListener("click", onRemoveButtonClick);
    taskNameInput.addEventListener("keydown", onTaskNameInputKeyDown);
    document.addEventListener("keydown", onDocumentKeyDown)
}

function onAddTaskButtonClick() {
    console.log("Add task button clicked");
    let taskName = taskNameInput.value.trim();

    if (taskName.length != 0) {
        addTask(taskName)
    }
    else {
        alert("Please enter a name for the task!");
    }
}

function onRemoveButtonClick() {
    console.log("Remove task button clicked");
    removeTask();
}

function onCompleteButtonClick()
{
    const selectedTask = document.querySelector("li.active");
    selectedTask.classList.remove("li.active");
    selectedTask.classList.add("list-group-item-success");

}

function onTaskNameInputKeyDown(event) {
    if (event.key == "Enter") {
        console.log("Enter pressed in task box");
        let taskName = taskNameInput.value.trim();

        if (taskName.length != 0) {
            addTask(taskName)
        }
        else {
            alert("Please enter a name for the task!");
        }
    }

}

function onDocumentKeyDown(event) {
    if (event.key == "Delete" || event.key == "Backspace") {
        const selectedTask = document.querySelector("li.active");

        if (selectedTask != null) {
            selectedTask.parentElement.removeChild(selectedTask);
        }
    }
}

function onTaskSelected(taskItem) {
    // When something else gets selected, we need to deselect everything else
    const selectedTasks = document.querySelectorAll("li.active");
    selectedTasks.forEach((task) => task.classList.remove("active"));
    taskItem.classList.add("active");
}


function addTask(taskName) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("list-group-item")
    taskItem.textContent = taskName;
    taskList.appendChild(taskItem);
    taskNameInput.value = "";

    taskItem.addEventListener("click", function () {
        onTaskSelected(taskItem);
    });

}

function removeTask() {
    const selectedTask = document.querySelector("li.active");
    selectedTask.parentElement.removeChild(selectedTask);
}





