let libraries = ["Toán", "Văn", "Anh"];
let login_attempts = 0;
let is_logged_in = false;

while (login_attempts < 3 && is_logged_in === false) {
    let username = prompt("Nhập tên đăng nhập:");
    let password = prompt("Nhập mật khẩu:");

    if (username === "admin" && password === "12345") {
        is_logged_in = true;
        alert("Đăng nhập thành công!");
    } else {
        login_attempts = login_attempts + 1;
        let remaining = 3 - login_attempts;

        if (remaining > 0) {
            alert("Sai thông tin! Còn " + remaining + " lần thử.");
        } else {
            alert("Tài khoản đã bị khóa!");
        }
    }
}

if (is_logged_in === true) {
    let choice;

    do {
        let menu = "=== QUẢN LÝ THƯ VIỆN ===\n" +
            "1. Nhập thêm lô sách mới\n" +
            "2. Hiển thị danh sách sách\n" +
            "3. Tìm kiếm sách\n" +
            "4. Cập nhật tên sách\n" +
            "5. Đảo ngược kệ sách\n" +
            "6. Nhập kho từ nguồn khác\n" +
            "7. Thoát\n\n" +
            "Lựa chọn của bạn:";

        choice = parseInt(prompt(menu));

        switch (choice) {
            case 1:
                let input_new = prompt("Nhập tên các cuốn sách (cách nhau bởi dấu phẩy):");
                if (input_new !== null && input_new.trim() !== "") {
                    let new_books = input_new.split(",");
                    let count_added = 0;
                    for (let i = 0; i < new_books.length; i++) {
                        let clean_name = new_books[i].trim();
                        if (clean_name !== "") {
                            libraries[libraries.length] = clean_name;
                            count_added = count_added + 1;
                        }
                    }
                    alert("Đã thêm " + count_added + " sách mới!");
                } else {
                    alert("Dữ liệu không hợp lệ!");
                }
                break;

            case 2:
                if (libraries.length === 0) {
                    console.log("Kho trống!");
                } else {
                    console.log("=== DANH SÁCH THƯ VIỆN ===");
                    for (let i = 0; i < libraries.length; i++) {
                        console.log((i + 1) + ". " + libraries[i]);
                    }
                }
                break;

            case 3:
                let search_name = prompt("Nhập tên sách cần tìm:");
                if (search_name !== null && search_name.trim() !== "") {
                    let is_found = false;
                    let found_at = -1;
                    for (let i = 0; i < libraries.length; i++) {
                        if (libraries[i].toLowerCase() === search_name.trim().toLowerCase()) {
                            is_found = true;
                            found_at = i;
                            break;
                        }
                    }
                    if (is_found === true) {
                        alert("Tìm thấy sách tại vị trí: " + found_at);
                    } else {
                        alert("Không tìm thấy sách!");
                    }
                }
                break;

            case 4:
                let old_name = prompt("Nhập tên sách muốn sửa:");
                let update_idx = -1;
                for (let i = 0; i < libraries.length; i++) {
                    if (libraries[i].toLowerCase() === old_name.trim().toLowerCase()) {
                        update_idx = i;
                        break;
                    }
                }

                if (update_idx !== -1) {
                    let new_name = prompt("Nhập tên mới cho sách:");
                    if (new_name !== null && new_name.trim() !== "") {
                        libraries[update_idx] = new_name.trim();
                        alert("Cập nhật thành công!");
                    }
                } else {
                    alert("Không tìm thấy sách để sửa!");
                }
                break;

            case 5:
                libraries.reverse();
                console.log("Đã đảo ngược thứ tự kệ sách!");
                break;

            case 6:
                let other_input = prompt("Nhập sách từ chi nhánh (cách bởi dấu phẩy):");
                if (other_input !== null && other_input.trim() !== "") {
                    let other_books = other_input.split(",");
                    let clean_list = [];
                    for (let i = 0; i < other_books.length; i++) {
                        let book_item = other_books[i].trim();
                        if (book_item !== "") {
                            clean_list[clean_list.length] = book_item;
                        }
                    }
                    libraries = libraries.concat(clean_list);
                    alert("Gộp kho thành công!");
                }
                break;

            case 7:
                alert("Hẹn gặp lại!");
                break;

            default:
                alert("Lựa chọn từ 1 đến 7!");
                break;
        }
    } while (choice !== 7);
}