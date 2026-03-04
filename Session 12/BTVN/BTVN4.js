let courses = [
    { id: 1, name: "JavaScript Cơ Bản", instructor: "Thầy A", students: [] },
    { id: 2, name: "HTML CSS", instructor: "Thầy B", students: [] }
];

let users = [
    { id: 1, name: "Nguyễn Văn A", registeredCourses: [] },
    { id: 2, name: "Trần Thị B", registeredCourses: [] }
];

const courseMenu = () => {
    let choice;
    do {
        choice = Number(prompt(`
===== QUẢN LÝ KHÓA HỌC =====
1. Thêm khóa học
2. Tìm kiếm khóa học theo tên
3. Xóa khóa học
0. Thoát
`));

        switch (choice) {
            case 1:
                let id = Number(prompt("Nhập ID khóa học:"));
                if (courses.some(c => c.id === id)) {
                    alert("ID đã tồn tại!");
                    break;
                }

                let name = prompt("Nhập tên khóa học:");
                let instructor = prompt("Nhập tên giảng viên:");

                courses.push({ id, name, instructor, students: [] });
                alert("Thêm khóa học thành công!");
                break;

            case 2:
                let keyword = prompt("Nhập tên khóa học cần tìm:");

                let result = courses.filter(c =>
                    c.name.toLowerCase().includes(keyword.toLowerCase())
                );

                if (result.length === 0) {
                    console.log("Không tìm thấy khóa học.");
                } else {
                    result.forEach(c =>
                        console.log("ID:", c.id, "| Tên:", c.name, "| GV:", c.instructor)
                    );
                }
                break;

            case 3:
                let deleteId = Number(prompt("Nhập ID khóa học cần xóa:"));
                let index = courses.findIndex(c => c.id === deleteId);

                if (index === -1) {
                    alert("Không tìm thấy khóa học!");
                    break;
                }

                courses.splice(index, 1);

                users.forEach(user => {
                    user.registeredCourses =
                        user.registeredCourses.filter(courseId => courseId !== deleteId);
                });

                alert("Xóa khóa học thành công!");
                break;

            case 0:
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }

    } while (choice !== 0);
};

const userMenu = () => {
    let choice;
    do {
        choice = Number(prompt(`
===== QUẢN LÝ NGƯỜI DÙNG =====
1. Thêm người dùng
2. Đăng ký khóa học
3. Hủy đăng ký khóa học
4. Hiển thị khóa học của người dùng
0. Thoát
`));
        switch (choice) {
            case 1:
                let id = Number(prompt("Nhập ID người dùng:"));
                if (users.some(u => u.id === id)) {
                    alert("ID đã tồn tại!");
                    break;
                }

                let name = prompt("Nhập tên người dùng:");
                users.push({ id, name, registeredCourses: [] });
                alert("Thêm người dùng thành công!");
                break;

            case 2:
                let userId = Number(prompt("Nhập ID người dùng:"));
                let courseId = Number(prompt("Nhập ID khóa học:"));

                let user = users.find(u => u.id === userId);
                let course = courses.find(c => c.id === courseId);

                if (!user || !course) {
                    alert("User hoặc khóa học không tồn tại!");
                    break;
                }

                if (user.registeredCourses.includes(courseId)) {
                    alert("Đã đăng ký rồi!");
                    break;
                }

                user.registeredCourses.push(courseId);
                course.students.push(userId);

                alert("Đăng ký thành công!");
                break;

            case 3:
                let uId = Number(prompt("Nhập ID người dùng:"));
                let cId = Number(prompt("Nhập ID khóa học:"));

                let u = users.find(user => user.id === uId);
                let c = courses.find(course => course.id === cId);

                if (!u || !c) {
                    alert("Không tồn tại!");
                    break;
                }

                u.registeredCourses =
                    u.registeredCourses.filter(id => id !== cId);

                c.students =
                    c.students.filter(id => id !== uId);

                alert("Hủy đăng ký thành công!");
                break;

            case 4:
                let checkId = Number(prompt("Nhập ID người dùng:"));
                let foundUser = users.find(u => u.id === checkId);

                if (!foundUser) {
                    alert("Không tìm thấy người dùng!");
                    break;
                }

                if (foundUser.registeredCourses.length === 0) {
                    console.log("Người dùng chưa đăng ký khóa học nào.");
                } else {
                    foundUser.registeredCourses.forEach(courseId => {
                        let course = courses.find(c => c.id === courseId);
                        if (course) {
                            console.log("ID:", course.id, "| Tên:", course.name);
                        }
                    });
                }
                break;

            case 0:
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }

    } while (choice !== 0);
};

let mainChoice;

do {
    mainChoice = Number(prompt(`
===== HỆ THỐNG QUẢN LÝ =====
1. Quản lý khóa học
2. Quản lý người dùng
0. Thoát
`));

    switch (mainChoice) {
        case 1:
            courseMenu();
            break;
        case 2:
            userMenu();
            break;
        case 0:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }

} while (mainChoice !== 0);