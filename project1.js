function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = function () {
    li.classList.toggle("completed");
  };

  const buttons = document.createElement("div");
  buttons.className = "task-buttons";

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.onclick = function () {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = function () {
    li.remove();
  };

  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttons);

  document.getElementById("
