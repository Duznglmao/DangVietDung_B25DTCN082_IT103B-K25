let book_name = prompt("Nhập vào tên quyển sách: ");
let book_publish = prompt("Nhập năm xuất bản sách: ");

book_publish = parseInt(book_publish);
let current_year = new Date().getFullYear();
let book_age = current_year - book_publish;

document.write("Sách: " + book_name + "<br>");
document.write("Năm xuất bản: " + book_publish + "<br>");
document.write("Tuổi của sách: " + book_age + " năm");