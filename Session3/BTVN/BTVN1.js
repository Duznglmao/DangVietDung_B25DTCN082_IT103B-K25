let total_loans = prompt("Hôm nay có bao nhiêu lượt mượn sách?");
total_loans = parseInt(total_loans);

for (let i = 1; i <= total_loans; i++) {
    let borrower_name = prompt("Nhập tên người mượn (Lượt " + i + "):");
    let book_title = prompt("Nhập tên sách:");
    let loan_days = prompt("Nhập số ngày mượn (1-30):");
    loan_days = parseInt(loan_days);

    if (loan_days > 14) {
        alert("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
    } else {
        alert("Mượn thành công");
    }
}

document.write("<h1>Thống kê cuối ngày</h1>");
document.write("Tổng số lượt mượn: " + total_loans);