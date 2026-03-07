let todoList = [];

function addTask() {
    let elementInput = document.getElementById("taskInput");
    let taskValue = elementInput.value.trim();

    if (taskValue === "") {
        alert("Vui lòng nhập nội dung nhiệm vụ!");
        return;
    }

    let newTask = {
        id: Date.now(),
        taskName: taskValue
    };

    todoList.push(newTask);
    elementInput.value = "";
    renderTodoList();
}

function deleteTask(id) {
    let isConfirm = confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này không?");
    if (isConfirm) {
        todoList = todoList.filter(item => item.id !== id);
        renderTodoList();
    }
}

function renderTodoList() {
    let listContainer = document.getElementById("listArea");
    let html = "";

    for (let i = 0; i < todoList.length; i++) {
        html += `
                <div class="task-item">
                    <span class="task-name">${todoList[i].taskName}</span>
                    <button class="btn-delete" onclick="deleteTask(${todoList[i].id})">X</button>
                </div>
                `;
    }

    listContainer.innerHTML = html;
}