const initialTodos = [
    { id: 1, task: "Mua bánh chưng", done: true },
    { id: 2, task: "Dọn nhà đón Tết", done: true },
    { id: 3, task: "Gói bánh chưng", done: true },
    { id: 4, task: "Trang trí nhà cửa", done: true },
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

function render() {
    const container = document.getElementById("todoContainer");
    let html = "";
    
    for (let i = 0; i < todos.length; i++) {
        const item = todos[i];
        const completedClass = item.done ? "completed" : "";
        const checkIcon = item.done ? "✓" : "";
        
        html += `
            <div class="todoItem ${completedClass}" onclick="toggleDone(${item.id})">
                <div class="circle">${checkIcon}</div>
                <span>${item.task}</span>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

loadData();
render();