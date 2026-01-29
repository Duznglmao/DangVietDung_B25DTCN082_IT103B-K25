let book_name = prompt("Mời nhập tên sách:");
let book_status = prompt("Mời nhập trạng thái sách (có sẵn / đã mượn):");
let publish_year = parseInt(prompt("Mời nhập năm xuất bản:"));

let current_year = new Date().getFullYear();
book_status = book_status.trim().toLowerCase();


if (!book_name || book_name.trim() === "") {
    alert("Bạn chưa nhập tên sách!");
} else if (!isNaN(book_name)) {
    alert("Tên sách phải là chữ!");
} else if (!book_status || book_status.trim() === "") {
    alert("Bạn chưa nhập trạng thái sách!");
} else if (isNaN(publish_year)) {
    alert("Năm xuất bản phải là số!");
} else if (Math.sign(publish_year) === -1) {
    alert("Năm xuất bản phải là số nguyên dương!");
} else if (publish_year > current_year) {
    alert("Năm xuất bản không được lớn hơn năm hiện tại!");
} else {
    if (book_status === "có sẵn" && current_year - publish_year <= 5) {
        document.write("Sách này mới và có sẵn để mượn");
    } else if (book_status === "đã mượn" && current_year - publish_year <= 10) {
        document.write("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
    } else if (book_status === "đã mượn" && current_year - publish_year > 10) {
        document.write("Sách này đã mượn và khá cũ");
    } else if (book_status === "có sẵn" && current_year - publish_year > 5) {
        document.write("Sách này có sẵn nhưng đã lâu năm");
    } else {
        alert("Trạng thái sách không hợp lệ!");
    }
}
