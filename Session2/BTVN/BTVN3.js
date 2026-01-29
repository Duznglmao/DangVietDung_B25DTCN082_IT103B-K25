let book_name = prompt("Mời nhập vào tên sách: ");
let book_type = prompt("Mời nhập vào thể loại sách: ");
let book_status = prompt("Nhập vào tình trạng sách (có/không) ?");

book_type = book_type.toLowerCase();
book_status = book_status.toLowerCase();

if (!book_name || book_name.trim() === "") {
    alert("Không để trống tên sách!");
} else if (!isNaN(book_name)) {
    alert("Tên sách không chỉ toàn số!")
} else if (!book_type || book_type.trim() === "") {
    alert("Không để trống thể loại sách!");
} else if (!isNaN(book_type)) {
    alert("Thể loại sách không chỉ toàn số!");
} else if (!book_status || book_status.trim() === "") {
    alert("Không để trống tình trạng sách!");
} else if (!isNaN(book_status)) {
    alert("Tình trạng không chứa số!")
} else {
    if (book_type === "khoa học" || book_type === "lịch sử") {
        if (book_status === "có") {
            document.write("Sách này có sẵn trong thư viện");
        } else if (book_status === "không") {
            document.write("Sách đã được mượn");
        } else {
            document.write("Tình trạng sách không hợp lệ");
        }
    } else if (book_type === "văn học" || book_type === "truyện") {
        document.write("Sách này có thể đọc giải trí");
    } else {
        document.write("Thể loại sách không tồn tại");
    }
}