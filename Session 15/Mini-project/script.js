let tasks = [];
let editing_index = -1;
let next_id = 1;

const task_input = document.getElementById("taskInput");
const add_btn = document.getElementById("addBtn");
const task_list_element = document.getElementById("taskList");
const completed_count_element = document.getElementById("completedCount");
const total_count_element = document.getElementById("totalCount");
const footer_element = document.querySelector(".footer");

function render_tasks() {
  let html = "";

  if (tasks.length === 0) {
    html = `
      <div class="empty-state">
        <div class="empty-state-icon">📋</div>
        <div class="empty-state-text">
          Chưa có công việc nào. Hãy thêm công việc mới!
        </div>
      </div>
    `;
  } else {
    for (let i = 0; i < tasks.length; i++) {
      html += `
        <div class="task-item ${tasks[i].completed ? "completed" : ""}">
          <input type="checkbox"
                 class="task-checkbox"
                 ${tasks[i].completed ? "checked" : ""}
                 onclick="toggle_task_completed(${i})" />
          <span class="task-text ${
            tasks[i].completed ? "completed" : ""
          }">${tasks[i].text}</span>
          <div class="task-actions">
            <button class="btn-edit" onclick="start_edit_task(${i})">✏️ Sửa</button>
            <button class="btn-delete" onclick="delete_task(${i})">🗑️ Xóa</button>
          </div>
        </div>
      `;
    }
  }

  task_list_element.innerHTML = html;
  update_footer();
}

function add_task() {
  const text = task_input.value.trim();
  if (text === "") {
    alert("Vui lòng nhập nội dung công việc!");
    task_input.focus();
    return;
  }

  if (editing_index === -1) {
    const new_task = {
      id: next_id++,
      text: text,
      completed: false,
    };
    tasks.push(new_task);
  } else {
    tasks[editing_index].text = text;
    editing_index = -1;
    add_btn.textContent = "Thêm";
  }

  task_input.value = "";
  task_input.focus();
  render_tasks();
}

function toggle_task_completed(index) {
  tasks[index].completed = !tasks[index].completed;
  render_tasks();
}

function start_edit_task(index) {
  task_input.value = tasks[index].text;
  task_input.focus();
  add_btn.textContent = "Lưu";
  editing_index = index;
}

function delete_task(index) {
  const is_confirm = confirm("Bạn có chắc chắn muốn xóa công việc này không?");
  if (!is_confirm) {
    return;
  }

  tasks.splice(index, 1);
  render_tasks();
}

function update_footer() {
  let total = tasks.length;
  let completed = 0;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      completed++;
    }
  }

  completed_count_element.textContent = completed;
  total_count_element.textContent = total;

  let badge_element = footer_element.querySelector(".completion-badge");

  if (total > 0 && completed === total) {
    if (!badge_element) {
      const badge_html = `
        <div class="completion-badge">
          <span class="check-icon">✅</span>
          <span>Hoàn thành tất cả!</span>
        </div>
      `;
      footer_element.insertAdjacentHTML("beforeend", badge_html);
    }
  } else {
    if (badge_element) {
      badge_element.remove();
    }
  }
}

add_btn.addEventListener("click", function () {
  add_task();
});

task_input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    add_task();
  }
});

render_tasks();
task_input.focus();