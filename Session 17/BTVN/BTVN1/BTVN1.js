const todos = [
    { id: 1, task: "Mua bánh chưng", done: false },
    { id: 2, task: "Dọn nhà đón Tết", done: false },
    { id: 3, task: "Gói bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa", done: false },
];

const todoContainer = document.getElementById("todoContainer");

function render() {
    let html = "";
    todos.forEach(function (item) {
        html += `
            <div class="todoItem">
                <div class="taskName">
                    <span class="icon">🌸</span>
                    ${item.task}
                </div>
                <div class="statusText">Chưa làm</div>
            </div>
        `;
    });
    todoContainer.innerHTML = html;
}

function saveOnce() {
    if (!localStorage.getItem("myTodos")) {
        localStorage.setItem("myTodos", JSON.stringify(todos));
    }
}

render();
saveOnce();