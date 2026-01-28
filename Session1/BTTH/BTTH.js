let book_name = prompt("Nhập tên sách:");
let author = prompt("Nhập tên tác giả:");
let publish_year = parseInt(prompt("Nhập năm xuất bản:"));
let book_price = Number(prompt("Nhập giá tiền một cuốn:"));
let quantity = parseInt(prompt("Nhập số lượng nhập kho:"));

book_name = book_name.trim().toUpperCase();
author = author.toUpperCase();

let book_ID = author.slice(0, 3) + publish_year + "-" + (Math.floor(Math.random() * 1000) + 1);

let book_age = new Date().getFullYear() - publish_year;
let total_price = book_price * quantity;

let shelf = Math.floor(Math.random() * 10) + 1;

console.log(`--- PHIẾU NHẬP KHO ---

Mã sách: ${book_ID}
Tên sách: ${book_name}
Tác giả: ${author}
Năm xuất bản: ${publish_year}
Tuổi sách: ${book_age} năm
Tổng giá trị: ${total_price} VNĐ
Ngăn kệ gợi ý: Kệ số ${shelf}
`);
