let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choice;

do {
    let menu = "--- THƯ VIỆN KHOA HỌC ---\n" +
        "1. Xem danh sách\n" +
        "2. Nhập sách mới\n" +
        "3. Mượn sách (Xóa)\n" +
        "4. Sửa tên sách\n" +
        "5. Sắp xếp kệ\n" +
        "0. Thoát\n" +
        "Bạn chọn:";

    choice = prompt(menu);

    switch (choice) {
        case "1":
            console.log("=> Danh sách hiện tại (" + books.length + " cuốn):");
            for (let i = 0; i < books.length; i++) {
                console.log((i + 1) + ". " + books[i]);
            }
            break;

        case "2":
            let new_book = prompt("Nhập tên cuốn sách mới:");
            books.push(new_book);
            console.log("=> Đã thêm thành công!");
            break;

        case "3":
            let borrow_name = prompt("Nhập tên sách muốn mượn:");
            let borrow_index = books.indexOf(borrow_name);

            if (borrow_index !== -1) {
                books.splice(borrow_index, 1);
                console.log("=> Đã cho mượn cuốn '" + borrow_name + "'.");
            } else {
                console.log("=> Lỗi: Không tìm thấy sách " + borrow_name + "!");
            }
            break;

        case "4":
            let old_name = prompt("Nhập tên sách cũ cần sửa:");
            let edit_index = books.indexOf(old_name);

            if (edit_index !== -1) {
                let updated_name = prompt("Nhập tên mới:");
                books[edit_index] = updated_name;
                console.log("=> Cập nhật thành công!");
            } else {
                console.log("=> Lỗi: Không tìm thấy sách cần sửa!");
            }
            break;

        case "5":
            for (let i = 0; i < books.length - 1; i++) {
                for (let j = 0; j < books.length - 1 - i; j++) {
                    if (books[j] > books[j + 1]) {
                        let temp = books[j];
                        books[j] = books[j + 1];
                        books[j + 1] = temp;
                    }
                }
            }
            console.log("=> Đã sắp xếp kệ sách theo thứ tự bảng chữ cái!");
            for (let i = 0; i < books.length; i++) {
                console.log((i + 1) + ". " + books[i]);
            }
            break;

        case "0":
            console.log("Tạm biệt!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
            break;
    }
} while (choice !== "0");