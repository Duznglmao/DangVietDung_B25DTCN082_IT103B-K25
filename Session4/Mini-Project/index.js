let login_attempts = 0;
let is_authenticated = false;

do {
    let user_name = prompt("Nhập tài khoản:");
    let pass_word = prompt("Nhập mật khẩu:");

    if (user_name === "admin" && pass_word === "12345") {
        alert("Đăng nhập thành công!");
        is_authenticated = true;
        break;
    } else {
        login_attempts += 1;

        if (user_name !== "admin") {
            alert("Sai Tài khoản! Lần thử: " + login_attempts + "/3");
        } else {
            alert("Sai Mật khẩu! Lần thử: " + login_attempts + "/3");
        }
    }
} while (login_attempts < 3);

if (is_authenticated === false) {
    document.write("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
} else {
    let menu_choice;
    do {
        menu_choice = prompt(
            "--- HỆ THỐNG PHÂN TÍCH THƯ VIỆN ---\n" +
            "1. Phân loại mã số sách\n" +
            "2. Thiết kế sơ đồ kho\n" +
            "3. Dự toán phí bảo trì\n" +
            "4. Tìm mã số sách may mắn\n" +
            "5. Thoát\n" +
            "Chọn chức năng (1-5):"
        );

        switch (menu_choice) {
            case "1":
                let total_codes = 0;
                let science_books = 0;
                let art_books = 0;
                while (true) {
                    let book_code = parseInt(prompt("Nhập mã sách (0 để dừng):"));
                    if (book_code === 0 || isNaN(book_code)) {
                        break;
                    }
                    total_codes += 1;
                    if (book_code % 2 === 0) {
                        science_books += 1;
                    } else {
                        art_books += 1;
                    }
                }
                alert("Tổng mã: " + total_codes + "\nKhoa học: " + science_books + "\nNghệ thuật: " + art_books);
                break;

            case "2":
                let rows = parseInt(prompt("Nhập số Hàng:"));
                let cols = parseInt(prompt("Nhập số Cột:"));
                document.write("SƠ ĐỒ KHO SÁCH:");
                for (let r = 1; r <= rows; r += 1) {
                    for (let c = 1; c <= cols; c += 1) {
                        if (r === c) {
                            document.write("[" + r + "-" + c + "] (Kệ ưu tiên) &nbsp;&nbsp;");
                        } else {
                            document.write("[" + r + "-" + c + "] &nbsp;&nbsp;");
                        }
                    }
                    document.write("<br><br>");
                }
                alert("Đã in sơ đồ ra trang web.");
                break;

            case "3":
                let qty = parseInt(prompt("Số lượng sách hiện có:"));
                let fee = parseFloat(prompt("Phí bảo trì hiện tại (đ/cuốn):"));
                let years = parseInt(prompt("Số năm dự toán:"));
                document.write("DỰ TOÁN PHÍ BẢO TRÌ:");
                for (let y = 1; y <= years; y += 1) {
                    let current_total = qty * fee;
                    document.write("Năm " + y + ": " + current_total + " VNĐ<br>");
                    fee += (fee * 0.1);
                }
                break;

            case "4":
                let n_range = parseInt(prompt("Nhập khoảng N:"));
                let lucky_list = "";
                let lucky_count = 0;
                for (let i = 1; i <= n_range; i += 1) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        lucky_list += i + " ";
                        lucky_count += 1;
                    }
                }
                alert("Mã may mắn: " + lucky_list + "\nTổng cộng: " + lucky_count);
                break;

            case "5":
                alert("Hệ thống đang đăng xuất...");
                break;

            default:
                if (menu_choice !== null) {
                    alert("Lựa chọn không hợp lệ!");
                }
                break;
        }

    } while (menu_choice !== "5");
}