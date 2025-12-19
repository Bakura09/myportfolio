// load saved tasks if they exist or start with empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// function to render existing tasks
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) {
      li.classList.add("done");
    }

    li.addEventListener("click", function () {
      tasks[index].done = !tasks[index].done;
      saveTasks();
      renderTasks();
    });

    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// event listener for addtaksbutton
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") return;

  tasks.push({
    text: taskText,
    done: false,
  });

  saveTasks();
  renderTasks();
  taskInput.value = "";
});

renderTasks();
