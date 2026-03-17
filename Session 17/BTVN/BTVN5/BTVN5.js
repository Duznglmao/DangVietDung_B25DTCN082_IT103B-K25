const initialTodos = [
    { id: 1, task: "Mua bánh chưng", done: true },
    { id: 2, task: "Dọn nhà đón Tết", done: true },
    { id: 3, task: "Gói bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa", done: false },
    { id: 5, task: "Mua phong bao lì xì", done: false },
    { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false }
];

let todos = [];
let editingId = null;

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

function render() {
    const container = document.getElementById("todoContainer");
    let html = "";

    for (let i = 0; i < todos.length; i++) {
        const item = todos[i];
        const isEditing = editingId === item.id;

        html += `
            <div class="todoItem ${item.done ? 'completed' : ''}">
                <div class="todoText">
                    <div class="circle" onclick="toggleDone(${item.id})">${item.done ? '✓' : ''}</div>
                    ${isEditing ?
                `<input type="text" class="editInput" id="input-${item.id}" 
                            value="${item.task}" 
                            onkeydown="handleEditKey(event, ${item.id})">` :
                `<span onclick="toggleDone(${item.id})">${item.task}</span>`
            }
                </div>
                <div class="btnGroup">
                    <button class="actionBtn" onclick="startEdit(${item.id})">✏️</button>
                    <button class="actionBtn deleteBtn" onclick="deleteTodo(${item.id}, '${item.task}')">🗑️</button>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;

    if (editingId !== null) {
        const input = document.getElementById(`input-${editingId}`);
        input.focus();
        input.select();
    }
}

function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();
    if (text !== "") {
        const newTodo = { id: Date.now(), task: text, done: false };
        todos.push(newTodo);
        saveData();
        render();
        input.value = "";
    }
}

function startEdit(id) {
    editingId = id;
    render();
}

function handleEditKey(event, id) {
    if (event.key === "Enter") {
        const newTask = event.target.value.trim();
        if (newTask !== "") {
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id === id) {
                    todos[i].task = newTask;
                    break;
                }
            }
            editingId = null;
            saveData();
            render();
        }
    } else if (event.key === "Escape") {
        editingId = null;
        render();
    }
}

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
    if (window.confirm(`Bạn có chắc muốn xóa công việc "${taskName}" ?`)) {
        const newTodos = [];
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== id) newTodos.push(todos[i]);
        }
        todos = newTodos;
        saveData();
        render();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
    render();
    document.getElementById("todoInput").onkeypress = (e) => {
        if (e.key === "Enter") addTodo();
    };
});