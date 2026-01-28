let book_name = prompt("Nhập tên cuốn sách: ");
let upper_book_name = book_name.toUpperCase();
let lower_book_name = book_name.toLowerCase();

document.write("Tên gốc: " + book_name + "<br>");
document.write("Tên viết thường: " + lower_book_name + "<br>");
document.write("Tên viết hoa: " + upper_book_name);
