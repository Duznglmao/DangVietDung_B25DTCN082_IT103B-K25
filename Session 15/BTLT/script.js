/*
Phân tích
Quản lý công việc
có danh sách tất cả các công việc, càn cái gì để quản lý danh sách công việc ==> Mảng
Từng công việc => Dùng object để lưu thông 1 công việc cụ thể
Tạo sự kiện khi người dùng ấn thêm
Thêm công việc:
+ B1: Tạo sự kiện khi người dùng nhấn vào nút thêm
+ B2: Lấy giá trị thông tin người dùng nhập trong ô input
+ B3: Tạo đối tượng công việc
+ B4: Tạo mảng chứa danh sách tất cả công việc

Xóa công việc:
+ B1: Lấy thông tin công việc cần xóa
+ B2: Tạo xác nhận người dùng có chắc chắn muốn xóa hay ko?
+ B3: Xóa khỏi danh sách công việc
+ B4: Gọi hàm render

*/
let tasks = [];
let flag = -1;

function addTask() {
    let elementInput = document.getElementById("task_name");
    if (elementInput.value.trim() === "") {
        alert("Tên công việc không được để trống!");
        return;
    }
    console.log("Kết quả: ", elementInput.value);
    let task = {
        id: Math.floor(Math.random() * 999999) + Date.now(),
        taskName: elementInput.value, //tên công việc người dùng nhập
        status: false,
    };

    if (flag == -1) {
        tasks.push(task)
        console.log(tasks);
        //Gọi hàm render để hiển thị danh sách công việc
        renderTasks();
        elementInput.value = "";
    } else { 
        console.log("sửa");
        let newTaskName = document.getElementById("task_name").value;
        tasks[flag] = { ...tasks[flag], taskName: newTaskName };
        renderTasks();
        flag = -1;
        document.getElementById("btn").innerHTML = "thêm công việc";
    }
}

function renderTasks() {
    let str = "";
    for (let i = 0; i < tasks.length; i++) {
        str += ` <li>
        <input type="checkbox" ${tasks[i].status ? "checked" : ""} onclick="selectInput(${i})" />
            <span class="${tasks[i].status ? `active` : ``}"> ${tasks[i].taskName}</span> &nbsp;
        <button onclick ="editTask(${i})">Sửa</button> <button onclick="deleteTask(${tasks[i].id})">Xóa</button></li>`
    }
    document.getElementById("list").innerHTML = str;
}

function deleteTask(id_task) {
    console.log("Xóa công việc!", id_task);
    let confirm_delete = confirm("Bạn có chắc chắn muốn xóa công việc này không?");
    if (confirm_delete) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id == id_task) {
                tasks.splice(i, 1);
            }
        }
    }
    renderTasks();
}

//Tạo hàm khi người dùng nhấn vào input type = checkbox
function selectInput(index) {
    console.log(index);
    tasks[index].status = !tasks[index].status;
    console.log("tasks", tasks);
    renderTasks();
}

function editTask(index) {
    document.getElementById("task_name").value = tasks[index].taskName;
    document.getElementById("btn").innerHTML = "sửa công việc";
    flag = index;
}