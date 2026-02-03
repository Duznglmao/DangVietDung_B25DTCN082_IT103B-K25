let book_list = [];

let num_books = prompt("Bạn muốn trả bao nhiêu cuốn sách?");
num_books = parseInt(num_books);

for (let i = 1; i <= num_books; i++) {
    let book_name = prompt("Nhập tên cuốn sách thứ " + i + ":");
    book_list.push(book_name);
}

console.log("Tổng số sách đã được trả: " + book_list.length);
console.log("Danh sách sách đã trả:");

for (let i = 0; i < book_list.length; i++) {
    console.log((i + 1) + ". " + book_list[i]);
}