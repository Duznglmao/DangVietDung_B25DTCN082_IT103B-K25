let employees = [
  { id: 1, fullName: "Nguyễn Văn A", email: "a.nguyen@example.com", dateOfBirth: "1995-01-01", position: "Nhân viên" },
  { id: 2, fullName: "Trần Thị B", email: "b.tran@example.com", dateOfBirth: "1993-03-12", position: "Trưởng nhóm" },
  { id: 3, fullName: "Lê Văn C", email: "c.le@example.com", dateOfBirth: "1990-07-20", position: "Trưởng phòng" },
];

let nextId = 4;
let editingId = -1;

renderEmployees();

function addEmployee(event) {
  event.preventDefault();

  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let dateOfBirth = document.getElementById("dateOfBirth").value;
  let position = document.getElementById("position").value;

  if (fullName === "" || email === "" || dateOfBirth === "" || position === "") {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Email không hợp lệ!");
    return;
  }

  if (editingId === -1) {
    let newEmployee = {
      id: nextId++,
      fullName: fullName,
      email: email,
      dateOfBirth: dateOfBirth,
      position: position,
    };
    employees.push(newEmployee);
  } else {
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === editingId) {
        employees[i].fullName = fullName;
        employees[i].email = email;
        employees[i].dateOfBirth = dateOfBirth;
        employees[i].position = position;
        break;
      }
    }
    editingId = -1;
    document.getElementById("formTitle").innerText = "Thêm Nhân Viên Mới";
    document.getElementById("btnSubmit").innerText = "Thêm Nhân Viên";
    document.getElementById("btnCancel").classList.add("hidden");
  }

  document.querySelector("form").reset();
  renderEmployees();
}


function renderEmployees() {
  let str = "";

  for (let i = 0; i < employees.length; i++) {
    let parts = employees[i].dateOfBirth.split("-");
    let dateDisplay = parts[2] + "/" + parts[1] + "/" + parts[0];

    str += `
        <tr>
            <td>${employees[i].id}</td>
            <td>${employees[i].fullName}</td>
            <td>${employees[i].email}</td>
            <td>${dateDisplay}</td>
            <td>${employees[i].position}</td>
            <td>
                <div class="actions">
                    <button class="btn btn-sm btn-edit" onclick="editEmployee(${employees[i].id})">Sửa</button>
                    <button class="btn btn-sm btn-delete" onclick="deleteEmployee(${employees[i].id})">Xóa</button>
                </div>
            </td>
        </tr>`;
  }

  document.querySelector("tbody").innerHTML = str;
  updateStats();
}

function editEmployee(id) {
  let employee;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      employee = employees[i];
      break;
    }
  }

  document.getElementById("fullName").value = employee.fullName;
  document.getElementById("email").value = employee.email;
  document.getElementById("dateOfBirth").value = employee.dateOfBirth;
  document.getElementById("position").value = employee.position;

  editingId = id;
  document.getElementById("formTitle").innerText = "Chỉnh Sửa Nhân Viên";
  document.getElementById("btnSubmit").innerText = "Cập Nhật";
  document.getElementById("btnCancel").classList.remove("hidden");

  document.querySelector(".form-section").scrollIntoView({ behavior: "smooth" });
}


function deleteEmployee(id) {
  let employeeName = "";
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      employeeName = employees[i].fullName;
      break;
    }
  }

  if (!confirm("Bạn có chắc chắn muốn xóa nhân viên " + employeeName + "?")) return;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      employees.splice(i, 1);
      break;
    }
  }

  if (editingId === id) {
    cancelEdit();
  }

  renderEmployees();
}

function cancelEdit() {
  editingId = -1;
  document.querySelector("form").reset();
  document.getElementById("formTitle").innerText = "Thêm Nhân Viên Mới";
  document.getElementById("btnSubmit").innerText = "Thêm Nhân Viên";
  document.getElementById("btnCancel").classList.add("hidden");
}

function updateStats() {
  let total = employees.length;
  document.querySelector(".badge").innerText = total + " nhân viên";
  document.querySelector(".footer span").innerText = "Tổng số nhân viên: " + total;
}