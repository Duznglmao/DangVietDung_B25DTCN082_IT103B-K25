let book_name = prompt("Mời nhập tên sách: ");
let borrower = prompt("Nhập tên người mượn: ");
let level_interest = parseInt(prompt("Mời nhập vào mức độ yêu thích (1 - 5): "));

if (!book_name || book_name.trim() === "") {
    alert("Không để trống tên sách");
} else if (!isNaN(book_name)) {
    alert("Tên sách không phải là số");
} else if (!borrower || borrower.trim() === "") {
    alert("Không để trống tên người mượn");
} else if (!isNaN(borrower)) {
    alert("Tên người mượn không phải là số");
}  else if (isNaN(level_interest)) {
    alert("Mức độ yêu thích phải là số");
} else if (level_interest < 1 || level_interest > 5) {
    alert("Mức độ yêu thích phải lớn hơn 0 và nằm trong khoảng từ 1 dến 5");
} else {
    switch (level_interest) {
        case 1:
        case 2:
            document.write("Sách này bạn có thể cân nhắc mượn lại sau");
            break;
        case 3: 
            document.write("Sách này khá ổn, có thể mượn");
            break;
        case 4:
        case 5:
            document.write("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
            break;
    }
}