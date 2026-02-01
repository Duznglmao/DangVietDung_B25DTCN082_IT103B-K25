let success_count = 0;
let fail_count = 0;

while (true) {
    let ask = prompt("Có yêu cầu gia hạn mới không? (có/không)");

    if (ask === "không") {
        break;
    }

    if (ask === "có") {
        let reader_name = prompt("Tên bạn đọc:");
        let book_name = prompt("Tên sách:");

        let current_days;
        while (true) {
            current_days = parseInt(prompt("Số ngày đã mượn hiện tại (>= 1):"));
            if (current_days >= 1) break;
            alert("Vui lòng nhập số nguyên >= 1");
        }

        let extra_days;
        while (true) {
            extra_days = parseInt(prompt("Số ngày muốn gia hạn thêm (>= 1):"));
            if (extra_days >= 1) break;
            alert("Vui lòng nhập số nguyên >= 1");
        }

        if (current_days + extra_days > 60) {
            alert("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
            fail_count++;
        } else if (current_days > 45) {
            alert("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
            fail_count++;
        } else {
            alert("Gia hạn thành công");
            success_count++;
        }
    }
}

document.write("<h1>Thống kê ca làm việc</h1>");
document.write("Số lần gia hạn thành công: " + success_count + "<br>");
document.write("Số lần gia hạn không thành công: " + fail_count);