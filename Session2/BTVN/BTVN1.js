let book_name = prompt("Mời nhập tên sách: ");
let author = prompt("Mời nhập tên tác giả: ");
let publish_year = parseInt(prompt("Mời nhập năm xuất bản: "));

let current_year = new Date().getFullYear();

if (!book_name || book_name.trim() === "") {
    alert("Bạn chưa nhập tên sách!");
} else if (!isNaN(book_name)) {
    alert("Tên sách phải là chữ!");
} else if (!author || author.trim() === "") {
    alert("Bạn chưa nhập tên tác giả!");
} else if (!isNaN(author)) {
    alert("Tên tác giả phải là chữ!");
} else if (isNaN(publish_year)) {
    alert("Năm xuất bản phải là số!");
} else if (Math.sign(publish_year) === -1) {
    alert("Năm xuất bản phải là số nguyên dương!");
} else if (publish_year > current_year) {
    alert("Năm xuất bản không được quá năm hiện tại!");
} else {
    if (publish_year === current_year) {
        document.write("Đây là sách mới!");
    } else if (current_year - publish_year <= 5) {
        document.write("Sách khá mới!")
    } else {
        document.write("Sách đã cũ!");
    }
}