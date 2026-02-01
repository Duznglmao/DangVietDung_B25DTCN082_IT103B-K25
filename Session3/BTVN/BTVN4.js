let total_checked = 0;
let lost_count = 0;
let out_of_stock_count = 0;
let high_stock_count = 0;
let normal_stock_count = 0;

while (true) {
    let ask = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

    if (ask === "không") {
        break;
    }

    if (ask === "có") {
        let book_id;
        while (true) {
            book_id = prompt("Nhập mã sách:");
            if (book_id !== "" && book_id !== null) {
                break;
            }
            alert("Mã sách không được để trống!");
        }

        let book_name = prompt("Nhập tên sách:");

        let actual_quantity;
        while (true) {
            actual_quantity = parseInt(prompt("Số lượng thực tế đang có trong kho (>= 0):"));
            if (actual_quantity >= 0) {
                break;
            }
            alert("Số lượng phải là số nguyên >= 0!");
        }

        let status;
        while (true) {
            status = parseInt(prompt("Tình trạng sách (1 - Bình thường, 2 - Mất):"));
            if (status === 1 || status === 2) {
                break;
            }
            alert("Vui lòng chỉ nhập 1 hoặc 2!");
        }

        total_checked++;

        if (status === 2) {
            alert("Phân loại: Sách mất");
            lost_count++;
        } else if (status === 1 && actual_quantity === 0) {
            alert("Phân loại: Sách hết (vẫn còn trong hệ thống)");
            out_of_stock_count++;
        } else if (status === 1 && actual_quantity >= 10) {
            alert("Phân loại: Sách tồn kho nhiều");
            high_stock_count++;
        } else if (status === 1 && actual_quantity >= 1 && actual_quantity <= 9) {
            alert("Phân loại: Sách tồn kho bình thường");
            normal_stock_count++;
        }
    }
}

document.write("<h1>Báo cáo kết quả kiểm kê</h1>");
document.write("Tổng số sách đã kiểm kê: " + total_checked + " cuốn<br>");
document.write("<hr>");
document.write("Số sách mất: " + lost_count + " cuốn<br>");
document.write("Số sách hết hàng: " + out_of_stock_count + " cuốn<br>");
document.write("Số sách tồn kho nhiều: " + high_stock_count + " cuốn<br>");
document.write("Số sách tồn kho bình thường: " + normal_stock_count + " cuốn");