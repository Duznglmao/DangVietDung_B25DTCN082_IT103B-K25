let total_returns = prompt("Hôm nay có bao nhiêu lượt trả sách?");
total_returns = parseInt(total_returns);

let late_count = 0;

for (let i = 1; i <= total_returns; i++) {
    let returner_name = prompt("Nhập tên người trả (Lượt " + i + "):");
    let book_title = prompt("Nhập tên sách:");
    
    let actual_days;
    while (true) {
        actual_days = prompt("Nhập số ngày đã mượn thực tế (>= 1):");
        actual_days = parseInt(actual_days);
        
        if (actual_days >= 1) {
            break; 
        }
        alert("Số ngày không hợp lệ! Vui lòng nhập lại số nguyên >= 1.");
    }

    if (actual_days <= 14) {
        alert("Trả đúng hạn");
    } else if (actual_days <= 21) {
        alert("Trả muộn nhẹ - Phạt nhắc nhở");
        late_count++;
    } else {
        alert("Quá hạn nghiêm trọng - Cần ghi biên bản phạt");
        late_count++;
    }
}

document.write("<h1>Thống kê cuối ngày</h1>");
document.write("Tổng số lượt trả sách: " + total_returns + "<br>");
document.write("Số lượt trả muộn (>= 15 ngày): " + late_count);