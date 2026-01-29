let username = prompt("Mời nhập tên người dùng:");
let role = prompt("Mời nhập vai trò (admin / student / guest):");
let account_balance = +prompt("Nhập số dư tài khoản:");
let card_status = prompt("Nhập trạng thái thẻ (true / khác):");
let date = +prompt("Nhập số ngày quá hạn:");

if (role === "admin") {
    console.log("Chào Admin, bạn có toàn quyền hệ thống");
} else if (role === "student") {
    console.log("Chào sinh viên, bạn có thể mượn sách");
} else if (role === "guest") {
    console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
} else {
    console.log("Lỗi: Vai trò không hợp lệ!");
}

if (
    username &&
    (role === "admin" || role === "student") &&
    account_balance > 0 &&
    card_status === "true"
) {
    console.log("Kết quả mượn: ĐƯỢC PHÉP MƯỢN SÁCH");
} else {
    console.log("Kết quả mượn: YÊU CẦU BỊ TỪ CHỐI");
}

if (date <= 0) {
    console.log("Tình trạng trả sách: Cảm ơn bạn đã trả đúng hạn");
    console.log("Tiền phạt: 0 VNĐ");
} else if (date <= 5) {
    console.log("Tình trạng trả sách: Quá hạn " + date + " ngày");
    console.log("Tiền phạt: " + date * 5000 + " VNĐ");
} else if (date <= 10) {
    console.log("Tình trạng trả sách: Quá hạn " + date + " ngày");
    console.log("Tiền phạt: " + date * 10000 + " VNĐ");
} else {
    console.log("Tình trạng trả sách: Quá hạn " + date + " ngày");
    console.log("Tiền phạt: 200000 VNĐ");
    console.log("CẢNH BÁO: TÀI KHOẢN BỊ KHÓA");
}

console.log(`---HỆ THỐNG MƯỢN TRẢ---

    Người dùng: ${username}
    Quyền hạn: Chào ${role}, bạn có thể mượn sách
    Kết quả mượn: ĐƯỢC PHÉP MƯỢN SÁCH
    Tình trạng trả sách: Quá hạn ${date} ngày
    Tiền phạt: 70000 VND
    `);