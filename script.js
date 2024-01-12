// Javascript

// DOM Components
let addButton;
let removeButton;
let taskList;
let taskNameInput;

// Waits until the DOMConetent loaded event and sets a callback
document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

// Waits until all of the DOM content is loaded then assigns DOM elements to variables, them sets up those variables event clicks
function onDOMContentLoaded()
{
    addButton = document.getElementById("addButton");
    removeButton = document.getElementById("removeButton");
    taskList = document.getElementById("taskList");
    taskNameInput = document.getElementById("taskNameInput");

        addButton.addEventListener("click", onAddTaskButtonClick);
        removeButton.addEventListener("click", onRemoveButtonClick);
        taskNameInput.addEventListener("keydown", onTaskNameInputKeyDown);
}

function onAddTaskButtonClick()
{
    console.log("Add task button clicked");
    let taskName = taskNameInput.value.trim();

    if(taskName.length != 0)
    {
        addTask(taskName)
    }
    else
    {
        alert("Please enter a name for the task!");
    }
}

function onRemoveButtonClick()
{
    console.log("Remove task button clicked");
    removeTask();
}

function onTaskNameInputKeyDown(event)
{
    if(event.key == "Enter")
    {
        console.log("Enter pressed in task box");
        let taskName = taskNameInput.value.trim();

        if(taskName.length != 0)
        {
            addTask(taskName)
        }
        else
        {
            alert("Please enter a name for the task!");
        }
    }
    
}


function addTask(taskName)
{
    const taskItem = document.createElement("li");
    taskItem.textContent = taskName;
    taskList.appendChild(taskItem);
    taskNameInput.value = "";

    taskItem.addEventListener("click", function()
    {
        onTaskSelected(taskItem);
    });
        
}

function removeTask()
{
    const selectedTask = document.querySelector("li.selected");
    selectedTask.parentElement.removeChild(selectedTask);
}

function onTaskSelected(taskItem)
{
    // When something else gets selected, we need to deselect everything else
    const selectedTasks = document.querySelectorAll("li.selected");
    selectedTasks.forEach((task) => task.classList.remove("selected"));
    taskItem.classList.add("selected");
}

    

