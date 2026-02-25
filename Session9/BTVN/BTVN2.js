function input_list(arr) {
    let count = Number(prompt(`Nhập số lượng sinh viên:`));

    for (let i = 0; i < count; i++) {
        let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
        arr.push(name);
    }
}

function show_list(arr) {
    if (arr.length === 0) {
        alert(`Danh sách trống`);
    } else {
        let result = `Danh sách sinh viên:\n`;
        for (let i = 0; i < arr.length; i++) {
            result += `${i + 1}. ${arr[i]}\n`;
        }
        alert(result);
    }
}

function find_student(arr) {
    let key = prompt(`Nhập tên sinh viên cần tìm:`);
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            alert(`Tìm thấy: ${arr[i]}`);
            found = true;
            break;
        }
    }

    if (!found) {
        alert(`Sinh viên không có trong danh sách`);
    }
}

function delete_student(arr) {
    let key = prompt(`Nhập tên sinh viên cần xóa:`);
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        arr.splice(index, 1);
        alert(`Đã xóa sinh viên`);
    } else {
        alert(`Sinh viên không có trong danh sách`);
    }
}

let student_list = [];
let choice;

do {
    choice = +prompt(`Chọn chức năng:
1. Nhập danh sách sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xóa sinh viên khỏi danh sách
5. Thoát`);

    switch (choice) {
        case 1:
            input_list(student_list);
            break;

        case 2:
            show_list(student_list);
            break;

        case 3:
            find_student(student_list);
            break;

        case 4:
            delete_student(student_list);
            break;

        case 5:
            alert(`Đã thoát chương trình`);
            break;

        default:
            alert(`Lựa chọn không hợp lệ`);
    }

} while (choice !== 5);