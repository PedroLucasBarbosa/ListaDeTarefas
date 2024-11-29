
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => toggleComplete(taskItem);

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => editTask(taskItem, taskSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => deleteTask(taskItem);

  
  buttonsDiv.appendChild(completeBtn);
  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(deleteBtn);
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(buttonsDiv);
  taskList.appendChild(taskItem);

  
  taskInput.value = "";
}


function toggleComplete(taskItem) {
  taskItem.classList.toggle("completed");
}


function editTask(taskItem, taskSpan) {
  const newTaskText = prompt("Edite a tarefa:", taskSpan.textContent);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskSpan.textContent = newTaskText;
  }
}


function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}


addTaskBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
