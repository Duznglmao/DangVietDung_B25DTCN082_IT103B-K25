let book_name = prompt("Nhập vào tên sách: ");
let order_book = parseInt(prompt("Nhập số thứ tự của sách: "));

let correct_name = book_name.trim().toUpperCase();
let book_code = "LIB- " + correct_name + " - " + order_book;

document.write("Tên sách gốc: " + book_name + "<br>");
document.write("Mã sách sau chuẩn hóa: " + book_code);
