let students = [
    { id: "S001", name: "Nguyen Van A", age: 18, gpa: 8.5, status: "active", createdAt: new Date().getTime(), updatedAt: null, deletedAt: null },
    { id: "S002", name: "Tran Thi B", age: 19, gpa: 7.2, status: "active", createdAt: new Date().getTime(), updatedAt: null, deletedAt: null },
    { id: "S003", name: "Le Van C", age: 20, gpa: 9.1, status: "active", createdAt: new Date().getTime(), updatedAt: null, deletedAt: null },
    { id: "S004", name: "Pham Thi D", age: 18, gpa: 6.8, status: "active", createdAt: new Date().getTime(), updatedAt: null, deletedAt: null },
    { id: "S005", name: "Hoang Van E", age: 21, gpa: 5.5, status: "active", createdAt: new Date().getTime(), updatedAt: null, deletedAt: null },
    { id: "S006", name: "Vu Thi F", age: 19, gpa: 4.2, status: "inactive", createdAt: new Date().getTime(), updatedAt: null, deletedAt: null }
];

const createStudent = () => {
    let id = prompt("Nhập mã sinh viên (ID):");
    if (students.some(student => student.id === id)) return alert("Mã sinh viên đã tồn tại!");

    let name = prompt("Nhập tên sinh viên:").trim();

    let age = Number(prompt("Nhập tuổi:"));
    if (age < 16 || age > 60) return alert("Tuổi không hợp lệ (phải từ 16-60)!");

    let gpa = Number(prompt("Nhập điểm trung bình (GPA):"));
    if (gpa < 0 || gpa > 10) return alert("GPA không hợp lệ (phải từ 0-10)!");

    let status = prompt("Trạng thái (active/inactive):").trim().toLowerCase();
    if (status !== "active" && status !== "inactive") return alert("Trạng thái không hợp lệ!");

    students.push({
        id: id,
        name: name,
        age: age,
        gpa: gpa,
        status: status,
        createdAt: new Date().getTime(),
        updatedAt: null,
        deletedAt: null
    });
    alert("Thêm sinh viên thành công!");
};

const updateStudent = () => {
    let id = prompt("Nhập mã sinh viên cần cập nhật:");
    let studentToUpdate = students.find(student => student.id === id);
    if (!studentToUpdate) return alert("Không tìm thấy sinh viên!");

    let name = prompt("Tên mới (để trống nếu không đổi):").trim();
    let age = prompt("Tuổi mới (để trống nếu không đổi):").trim();
    let gpa = prompt("GPA mới (để trống nếu không đổi):").trim();

    if (name !== "") studentToUpdate.name = name;

    if (age !== "") {
        let ageNum = Number(age);
        if (ageNum < 16 || ageNum > 60) return alert("Tuổi không hợp lệ!");
        studentToUpdate.age = ageNum;
    }

    if (gpa !== "") {
        let gpaNum = Number(gpa);
        if (gpaNum < 0 || gpaNum > 10) return alert("GPA không hợp lệ!");
        studentToUpdate.gpa = gpaNum;
    }

    studentToUpdate.updatedAt = new Date().getTime();
    alert("Cập nhật thành công!");
};

const softDeleteStudent = () => {
    let id = prompt("Nhập mã sinh viên cần xóa:");
    let studentFound = students.find(student => student.id === id);
    if (!studentFound) return alert("Không tìm thấy sinh viên!");

    if (confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
        studentFound.status = "inactive";
        studentFound.deletedAt = new Date().getTime();
        alert("Đã xóa mềm sinh viên!");
    }
};

const restoreStudent = () => {
    let id = prompt("Nhập mã sinh viên cần khôi phục:");
    let studentToRestore = students.find(student => student.id === id);

    if (!studentToRestore || studentToRestore.status !== "inactive" || !studentToRestore.deletedAt)
        return alert("Không thể khôi phục - Sinh viên không tồn tại hoặc chưa bị xóa!");

    studentToRestore.status = "active";
    studentToRestore.deletedAt = null;
    studentToRestore.updatedAt = new Date().getTime();
    alert("Khôi phục thành công!");
};

const viewStudents = () => {
    let keyword = prompt("Tìm kiếm theo tên (để trống để bỏ qua):") || "";
    let filterStatus = prompt("Lọc trạng thái (active/inactive/all):") || "all";
    let sortOrder = prompt("Sắp xếp GPA (asc/desc):") || "asc";

    let result = students.slice();

    if (keyword.trim()) {
        result = result.filter(student =>
            student.name.toLowerCase().includes(keyword.toLowerCase().trim())
        );
    }

    if (filterStatus !== "all") {
        result = result.filter(student => student.status === filterStatus);
    }

    result = result.sort((a, b) => sortOrder === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa);

    let pageSize = 5;
    let currentPage = 1;
    let totalPages = Math.ceil(result.length / pageSize);

    if (result.length === 0) {
        console.log("Không tìm thấy sinh viên nào.");
        return;
    }

    let browsing = true;
    while (browsing) {
        let paginated = result.slice((currentPage - 1) * pageSize, currentPage * pageSize);

        console.log(`Trang ${currentPage}/${totalPages} | Tổng cộng: ${result.length} bản ghi`);
        console.log(`Từ khóa: "${keyword}" | Trạng thái: "${filterStatus}" | Sắp xếp: "${sortOrder}"`);
        console.log("---");

        paginated.forEach(student => {
            console.log(`[${student.id}] ${student.name} - Tuổi: ${student.age}, GPA: ${student.gpa.toFixed(2)}, Trạng thái: ${student.status}`);
        });

        let action = prompt(`[First: Trang đầu | Last: Trang cuối | Next: Tiếp | Prev: Trước | Exit: Thoát]: `).toLowerCase().trim();

        switch (action) {
            case "first": currentPage = 1; break;
            case "last": currentPage = totalPages; break;
            case "next":
                if (currentPage < totalPages) currentPage++;
                else alert("Đang ở trang cuối cùng!");
                break;
            case "prev":
                if (currentPage > 1) currentPage--;
                else alert("Đang ở trang đầu tiên!");
                break;
            case "exit": browsing = false; break;
            default: if (action !== "") alert("Lệnh không hợp lệ!");
        }
    }
};

const analyticsDashboard = () => {
    console.log("===== BẢNG THỐNG KÊ =====");
    if (students.length === 0) return alert("Không có dữ liệu");

    const total = students.length;

    const activeCount = students.reduce((count, student) =>
        student.status === "active" ? count + 1 : count, 0
    );

    const totalGpaSum = students.reduce((sum, student) => sum + student.gpa, 0);

    const activeGpaSum = students.reduce((sum, student) =>
        student.status === "active" ? sum + student.gpa : sum, 0
    );

    const riskCount = students.reduce((count, student) =>
        student.gpa < 3 ? count + 1 : count, 0
    );

    const top5Gpa = students.slice().sort((a, b) => b.gpa - a.gpa).slice(0, 5);

    const distribution = students.reduce((dist, student) => {
        if (student.gpa >= 8) dist.excellent++;
        else if (student.gpa >= 6.5) dist.good++;
        else if (student.gpa >= 5) dist.average++;
        else dist.poor++;
        return dist;
    }, { excellent: 0, good: 0, average: 0, poor: 0 });

    console.log("Tổng số sinh viên:", total);
    console.log("Sinh viên đang hoạt động:", activeCount, `(${((activeCount / total) * 100).toFixed(2)}%)`);
    console.log("Điểm GPA trung bình hệ thống:", (totalGpaSum / total).toFixed(2));
    console.log("Điểm GPA trung bình (Active):", activeCount ? (activeGpaSum / activeCount).toFixed(2) : 0);
    console.log("Số sinh viên có nguy cơ (GPA < 3):", riskCount);
    console.log("Phân bổ học lực:");
    console.table(distribution);
    console.log("Top 5 sinh viên điểm cao nhất:");
    console.table(top5Gpa);
};

let choice;
do {
    choice = +prompt(`===== QUẢN LÝ SINH VIÊN =====
1. Thêm sinh viên
2. Cập nhật sinh viên
3. Xóa mềm sinh viên
4. Khôi phục sinh viên
5. Xem danh sách sinh viên
6. Bảng thống kê
0. Thoát chương trình`);

    switch (choice) {
        case 1: createStudent(); break;
        case 2: updateStudent(); break;
        case 3: softDeleteStudent(); break;
        case 4: restoreStudent(); break;
        case 5: viewStudents(); break;
        case 6: analyticsDashboard(); break;
        case 0: alert("Tạm biệt!"); break;
        default:  alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== 0 && choice !== null);