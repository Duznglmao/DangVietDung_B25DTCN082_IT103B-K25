let late_books = [];
let long_name_count = 0;

let total_book = prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?");
total_book = parseInt(total_book);

for (let i = 1; i <= total_book; i++) {
    let book_name = prompt("Nhập tên cuốn sách bị trả muộn thứ " + i + ":");
    late_books.push(book_name);
}

console.log("Tổng số sách bị trả muộn: " + late_books.length);
console.log("Danh sách sách bị trả muộn:");

for (let i = 0; i < late_books.length; i++) {
    let current_book = late_books[i];

    console.log((i + 1) + "- " + current_book);

    if (current_book.length > 20) {
        long_name_count++;
    }
}

console.log("Số lượng sách có tên dài hơn 20 ký tự: " + long_name_count);