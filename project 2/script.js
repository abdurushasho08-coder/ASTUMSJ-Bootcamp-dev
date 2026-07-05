
let tasks = [];

// ── Grab elements from the DOM ──
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const errorMsg = document.getElementById("errorMsg");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");
const remainingCount = document.getElementById("remainingCount");
const allDoneMsg = document.getElementById("allDoneMsg");
const colorCircles = document.querySelectorAll(".color-circle");

function renderTasks() {
  taskList.textContent = "";


  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const li = document.createElement("li");
    li.className = "task-item";
    if (task.done) {
      li.classList.add("done"); 
    }

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;

    const doneBtn = document.createElement("button");
    doneBtn.className = "done-btn";
    doneBtn.textContent = task.done ? "Undo" : "Done";
    doneBtn.addEventListener("click", () => toggleDone(i));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(i));

    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  updateCounter();
}


function updateCounter() {
  const totalTasks = tasks.length;
  const undoneTasks = tasks.filter((task) => !task.done).length; // R4
  const doneTasks = totalTasks - undoneTasks; // B3

  if (totalTasks === 0) {
    remainingCount.textContent = "0";
  } else if (undoneTasks === 0) {
    
    remainingCount.textContent = `${doneTasks} of ${totalTasks} tasks completed`;
    remainingCount.classList.add("all-done");
  } else {
  
    remainingCount.textContent = `${doneTasks} of ${totalTasks} tasks completed (${undoneTasks} remaining)`;
    remainingCount.classList.remove("all-done");
  }


  if (totalTasks > 0 && undoneTasks === 0) {
    allDoneMsg.classList.add("visible");
  } else {
    allDoneMsg.classList.remove("visible");
  }
}


function addTask() {
  const value = taskInput.value.trim();

  if (!value) {
    errorMsg.textContent = "Please type a task first";
    return;
  }


  const existingTexts = tasks.map((task) => task.text.toLowerCase());
  if (existingTexts.includes(value.toLowerCase())) {
    errorMsg.textContent = "This task already exists!";
    return;
  }
  errorMsg.textContent = "";

  tasks.push({ text: value, done: false });
  taskInput.value = "";

  renderTasks();
}


function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}


function clearAllTasks() {
  tasks = [];
  renderTasks();
}


function handleColorClick(circle) {
  document.body.style.backgroundColor = circle.dataset.color;

  colorCircles.forEach((c) => c.classList.remove("active"));
  circle.classList.add("active");
}


addBtn.addEventListener("click", addTask);


taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

clearBtn.addEventListener("click", clearAllTasks);

colorCircles.forEach((circle) => {
  circle.addEventListener("click", () => handleColorClick(circle));
});

renderTasks();