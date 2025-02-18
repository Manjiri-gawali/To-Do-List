document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

document.getElementById("add-task").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  const taskNotes = document.getElementById("task-notes");
  const taskList = document.getElementById("task-list");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<span><strong>${taskInput.value}</strong><br>${taskNotes.value}</span> 
                        <button onclick="this.parentElement.remove()">❌</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
    taskNotes.value = "";
  }
});
