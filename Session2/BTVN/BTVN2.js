let book_quantity = parseInt(prompt("Số lượng sách trong thư viện là: "));

if (isNaN(book_quantity)) {
    alert("Số lượng sách phải là số!");
} else if (Math.sign(book_quantity) === -1) {
    alert("Số sách phải là số nguyên dương");
} else {
    if(book_quantity < 10) {
        document.write("Thư viện có ít sách");
    } else if (book_quantity >= 10 && book_quantity <= 20) {
        document.write("Thư viện có số lượng sách vừa đủ");
    } else {
        document.write("Thư viện có nhiều sách");
    }
}