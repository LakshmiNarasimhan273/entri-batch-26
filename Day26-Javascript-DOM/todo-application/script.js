function todoList(){
    const input = document.getElementById("taskInput");
    const list = document.getElementById("taskList");

    if(input.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `${input.value}`;

    list.appendChild(li);
    input.value = "";
}