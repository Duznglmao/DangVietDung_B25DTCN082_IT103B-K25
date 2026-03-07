let todoList = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Vui lòng không để trống công việc!");
        return;
    }

    todoList.push(value);
    input.value = "";
    renderTasks();
}

function deleteTask(index) {
    let isConfirm = confirm("Bạn có chắc chắn muốn xóa công việc này không?");
    if (isConfirm) {
        todoList.splice(index, 1);
        renderTasks();
    }
}

function editTask(index) {
    let newValue = prompt("Chỉnh sửa công việc:", todoList[index]);

    if (newValue !== null && newValue.trim() !== "") {
        todoList[index] = newValue.trim();
        renderTasks();
    }
}

function renderTasks() {
    let container = document.getElementById("listContainer");
    let html = "";

    for (let i = 0; i < todoList.length; i++) {
        html += `
                    <div class="task-item">
                        <span>${todoList[i]}</span>
                        <div class="actions">
                            <button class="btn-edit" onclick="editTask(${i})">Sửa</button>
                            <button class="btn-delete" onclick="deleteTask(${i})">Xóa</button>
                        </div>
                    </div>
                `;
    }
    container.innerHTML = html;
}