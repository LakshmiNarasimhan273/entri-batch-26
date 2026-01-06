const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

document.getElementById('addBtn').onclick = () => {
    if (input.value.trim() === "") return; // Stop if empty

    // Create a new list item using a template string
    const li = document.createElement('li');
    li.innerHTML = `
        ${input.value} 
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    list.appendChild(li);
    input.value = ""; // Clear input
};