let tasks = [];

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

        if (task.done) {
            doneBtn.textContent = "Undo";
        } else {
            doneBtn.textContent = "Done";
        }

        doneBtn.addEventListener("click", function () {
            toggleDone(i);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function () {
            deleteTask(i);
        });

        li.appendChild(span);
        li.appendChild(doneBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    }

    updateCounter();
}

function updateCounter() {

    const totalTasks = tasks.length;

    const undoneTasks = tasks.filter(function (task) {
        return task.done == false;
    }).length;

    const doneTasks = totalTasks - undoneTasks;

    if (totalTasks == 0) {

        remainingCount.textContent = "0";
        remainingCount.classList.remove("all-done");

    } else if (undoneTasks == 0) {

        remainingCount.textContent =
            doneTasks + " of " + totalTasks + " tasks completed";

        remainingCount.classList.add("all-done");

    } else {

        remainingCount.textContent =
            doneTasks + " of " + totalTasks +
            " tasks completed (" + undoneTasks + " remaining)";

        remainingCount.classList.remove("all-done");

    }

    if (totalTasks > 0 && undoneTasks == 0) {
        allDoneMsg.classList.add("visible");
    } else {
        allDoneMsg.classList.remove("visible");
    }
}

function addTask() {

    const value = taskInput.value.trim();

    if (value == "") {
        errorMsg.textContent = "Please type a task first";
        return;
    }

    const existingTexts = tasks.map(function (task) {
        return task.text.toLowerCase();
    });

    if (existingTexts.includes(value.toLowerCase())) {
        errorMsg.textContent = "This task already exists!";
        return;
    }

    errorMsg.textContent = "";

    tasks.push({
        text: value,
        done: false
    });

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

    colorCircles.forEach(function (c) {
        c.classList.remove("active");
    });

    circle.classList.add("active");
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {

    if (event.key == "Enter") {
        addTask();
    }

});

clearBtn.addEventListener("click", clearAllTasks);

colorCircles.forEach(function (circle) {

    circle.addEventListener("click", function () {

        handleColorClick(circle);

    });

});

renderTasks();