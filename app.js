  // Get elements
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTask');
  const taskListContainer = document.getElementById('taskList');
  const taskCountElement = document.getElementById('taskCount');
  const clearAllButton = document.getElementById('clearBtn')



  // Retrieve tasks from localStorage or use an empty array if not present
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to localStorage
const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

document.getElementById("addTask").addEventListener("click", function() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();


  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("div");
    taskItem.classList.add("taskItem");
    
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskContent.setAttribute("contenteditable", "true"); 

    document.getElementById("clearBtn").addEventListener("click", function() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = ""; 
      updateTaskCount(); 
    });
    

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
      updateTaskCount();
      saveTasksToLocalStorage(); 

    });
    
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    
    taskInput.value = "";
    updateTaskCount();
    tasks.push(taskText); 
    saveTasksToLocalStorage(); 
  }
});
  

document.getElementById("clearBtn").addEventListener("click", function() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; 
  tasks = []; // Clear all tasks from the tasks array
  
  saveTasksToLocalStorage.removeItem('tasks');
  updateTaskCount();
});

function updateTaskCount() {
  const taskCount = document.getElementById("taskCount");
  const tasks = document.querySelectorAll(".taskItem").length;
  taskCount.textContent = `You have ${tasks} pending task${tasks !== 1 ? "s" : ""}`;
}

document.addEventListener('DOMContentLoaded', function () {
  tasks.forEach(function (taskText) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('div');
    taskItem.classList.add('taskItem');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.setAttribute('contenteditable', 'true');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', function () {
      taskItem.remove();
      updateTaskCount();
      saveTasksToLocalStorage();
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });

  updateTaskCount();
});