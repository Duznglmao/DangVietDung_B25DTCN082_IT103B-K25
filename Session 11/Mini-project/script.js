let student_list = [];
let choice;

const create_student = () => {
    let id;
    while (true) {
        id = prompt("Nhập ID: ");
        let is_exist = student_list.some(student => student.id === id);
        if (!is_exist) {
            break;
        }
        alert("ID đã tồn tại! Vui lòng nhập ID khác.");
    }

    let name = prompt("Nhập tên:");
    let age = parseInt(prompt("Nhập tuổi:"));
    let gpa = parseFloat(prompt("Nhập GPA:"));

    let status;
    while (true) {
        status = prompt("Nhập trạng thái (active / inactive):").toLowerCase().trim();
        if (status === "active" || status === "inactive") {
            break;
        }
        alert("Trạng thái không hợp lệ! Chỉ nhận 'active' hoặc 'inactive'.");
    }

    let student = { id, name, age, gpa, status };
    student_list.push(student);
    alert("Thêm sinh viên thành công");
}

const read_all = () => {
    if (student_list.length === 0) {
        console.log("Danh sách trống");
        return;
    }
    console.log("===== DANH SÁCH SINH VIÊN =====");
    student_list.forEach(student => {
        console.log(`ID: ${student.id} | Name: ${student.name} | Age: ${student.age} | GPA: ${student.gpa} | Status: ${student.status}`);
    });
}

const filter_scholarship = () => {
    let result = student_list.filter(student => student.gpa > 8.0);

    if (result.length === 0) {
        console.log("Không có sinh viên đủ điều kiện học bổng (GPA > 8.0)");
        return;
    }

    console.log("===== SINH VIÊN HỌC BỔNG =====");
    result.forEach(student => {
        console.log(`ID: ${student.id} | Name: ${student.name} | GPA: ${student.gpa}`);
    });
}

const update_profile = () => {
    let id = prompt("Nhập ID cần cập nhật:");
    let new_name = prompt("Nhập tên mới:");
    let new_gpa = parseFloat(prompt("Nhập GPA mới:"));
    let found = false;

    student_list.forEach(student => {
        if (student.id === id) {
            student.name = new_name;
            student.gpa = new_gpa;
            found = true;
        }
    });

    alert(found ? "Cập nhật thành công" : "Không tìm thấy ID");
}

const delete_record = () => {
    let id = prompt("Nhập ID cần xóa:");
    let index = student_list.findIndex(student => student.id === id);

    if (index !== -1) {
        student_list.splice(index, 1);
        alert("Xóa thành công");
    } else {
        alert("Không tìm thấy ID");
    }
}

const compliance_verify = () => {
    let under_18 = student_list.some(student => student.age < 18);
    let all_active = student_list.every(student => student.status === "active");

    console.log("===== KIỂM TRA TUÂN THỦ =====");
    console.log(`1. Tồn tại sinh viên < 18 tuổi: ${under_18 ? "Đúng" : "Sai"}`);
    console.log(`2. Tất cả sinh viên đều active: ${all_active ? "Đúng" : "Sai"}`);
}

const academic_stats = () => {
    if (student_list.length === 0) {
        alert("Danh sách trống");
        return;
    }
    let total_gpa = student_list.reduce((sum, student) => sum + student.gpa, 0);
    alert(`GPA trung bình: ${(total_gpa / student_list.length).toFixed(2)}`);
}

const data_normalization = () => {
    if (student_list.length === 0) {
        console.log("Danh sách trống");
        return;
    }
    let name_list = student_list.map(student => student.name.toUpperCase());
    console.log("===== DANH SÁCH TÊN IN HOA =====");
    name_list.forEach(name => console.log(name));
}

do {
    choice = Number(prompt(`Chọn chức năng:
1. Create Student
2. Read All Students
3. Filter Scholarship Candidates
4. Update Student Profile
5. Delete Record
6. Compliance Verification
7. Academic Statistics
8. Data Normalization
9. Thoát`));

    switch (choice) {
        case 1:
            create_student();
            break;
        case 2:
            read_all();
            break;
        case 3:
            filter_scholarship();
            break;
        case 4:
            update_profile();
            break;
        case 5:
            delete_record();
            break;
        case 6:
            compliance_verify();
            break;
        case 7:
            academic_stats();
            break;
        case 8:
            data_normalization();
            break;
        case 9:
            alert("Đã thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while (choice !== 9);