const initialTodos = [
    { id: 1, task: "Mua bánh chưng", done: true },
    { id: 2, task: "Dọn nhà đón Tết", done: true },
    { id: 3, task: "Gói bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa", done: false },
    { id: 5, task: "Mua phong bao lì xì", done: false },
    { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false }
];

let todos = [];

function loadData() {
    const saved = localStorage.getItem("myTodos");
    if (saved) {
        todos = JSON.parse(saved);
    } else {
        todos = initialTodos;
        saveData();
    }
}

function saveData() {
    localStorage.setItem("myTodos", JSON.stringify(todos));
}

function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (text !== "") {
        const newTodo = {
            id: Date.now(),
            task: text,
            done: false
        };
        todos.push(newTodo);
        saveData();
        render();
        input.value = "";
    }
}

document.getElementById("todoInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTodo();
});

function toggleDone(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos[i].done = !todos[i].done;
            break;
        }
    }
    saveData();
    render();
}

function deleteTodo(id, taskName) {
    const isConfirm = window.confirm(`Bạn có chắc muốn xóa công việc "${taskName}" ?`);

    if (isConfirm) {
        const newTodos = [];
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== id) {
                newTodos.push(todos[i]);
            }
        }
        todos = newTodos;
        saveData();
        render();
    }
}

function render() {
    const container = document.getElementById("todoContainer");
    let html = "";

    for (let i = 0; i < todos.length; i++) {
        const item = todos[i];
        html += `
            <div class="todoItem ${item.done ? 'completed' : ''}">
                <div class="todoText" onclick="toggleDone(${item.id})">
                    <div class="circle">${item.done ? '✓' : ''}</div>
                    <span>${item.task}</span>
                </div>
                <button class="deleteBtn" onclick="deleteTodo(${item.id}, '${item.task}')">🗑️</button>
            </div>
        `;
    }
    container.innerHTML = html;
}

loadData();
render();