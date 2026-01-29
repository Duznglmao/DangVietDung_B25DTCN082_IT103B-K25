let book_name = prompt("Mời nhập tên sách:");
let borrower_name = prompt("Mời nhập tên người mượn:");
let book_status = prompt("Mời nhập tình trạng sách (có sẵn / đã mượn / không có sẵn):");
let borrow_days = parseInt(prompt("Mời nhập số ngày mượn:"));
let has_card = prompt("Người mượn có thẻ thư viện không? (có / không)");

book_status = book_status.trim().toLowerCase();
has_card = has_card.trim().toLowerCase();

if (!book_name || book_name.trim() === "") {
    alert("Bạn chưa nhập tên sách!");
} else if (!isNaN(book_name)) {
    alert("Tên sách phải là chữ!");
} else if (!borrower_name || borrower_name.trim() === "") {
    alert("Bạn chưa nhập tên người mượn!");
} else if (!isNaN(borrower_name)) {
    alert("Tên người mượn phải là chữ!");
} else if (!book_status || book_status.trim() === "") {
    alert("Bạn chưa nhập tình trạng sách!");
} else if (isNaN(borrow_days)) {
    alert("Số ngày mượn phải là số!");
} else if (Math.sign(borrow_days) === -1) {
    alert("Số ngày mượn phải là số nguyên dương!");
} else if (!has_card || has_card.trim() === "") {
    alert("Bạn chưa nhập thông tin thẻ thư viện!");
} else {
    if (book_status === "có sẵn" && has_card === "có") {
        document.write("Chúc mừng, bạn có thể mượn sách này");
    }
    else if (book_status === "đã mượn" && borrow_days < 30) {

        if (has_card === "có") {
            document.write("Sách đang được mượn, vui lòng đợi đến khi trả lại");
        } else {
            document.write("Bạn không thể mượn sách nếu không có thẻ thư viện");
        }

    }
    else if (book_status === "không có sẵn") {
        document.write("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
    }
    else {
        alert("Thông tin không hợp lệ, vui lòng nhập lại");
    }
}
