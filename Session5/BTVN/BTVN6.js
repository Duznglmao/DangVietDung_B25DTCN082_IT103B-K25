let reader_card_ids = [];
let reader_names = [];
let borrowed_book_codes = [];
let overdue_days = [];

let total_readers = prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?");
total_readers = parseInt(total_readers);

for (let i = 1; i <= total_readers; i++) {
    let id = "";
    while (true) {
        id = prompt("Nhập mã thẻ bạn đọc thứ " + i + " (duy nhất):");
        let is_duplicate = false;
        for (let j = 0; j < reader_card_ids.length; j++) {
            if (reader_card_ids[j] === id) {
                is_duplicate = true;
                break;
            }
        }
        if (id !== "" && !is_duplicate) break;
        alert("Mã thẻ không được để trống và không được trùng lặp!");
    }

    let name = prompt("Nhập tên bạn đọc:");
    let codes = prompt("Nhập chuỗi các mã sách đang mượn (cách nhau bởi dấu phẩy):");
    let days = prompt("Nhập số ngày quá hạn:");
    days = parseInt(days);

    reader_card_ids.push(id);
    reader_names.push(name);
    borrowed_book_codes.push(codes);
    overdue_days.push(days);
}

console.log("Danh sách bạn đọc quá hạn (" + total_readers + " người):");
for (let i = 0; i < reader_card_ids.length; i++) {
    console.log((i + 1) + ". Mã thẻ: " + reader_card_ids[i] + " | Tên: " + reader_names[i] + " | Sách đang mượn: " + borrowed_book_codes[i] + " | Quá hạn: " + overdue_days[i] + " ngày");
}

let count_10_days = 0;
let js_pyt_ids = "";
let max_days = overdue_days[0];
let max_index = 0;
let count_warn = 0;

for (let i = 0; i < reader_card_ids.length; i++) {
    if (overdue_days[i] >= 10) {
        count_10_days++;
    }

    let current_books = borrowed_book_codes[i];
    if (current_books.includes("JS") && current_books.includes("PYT")) {
        if (js_pyt_ids === "") {
            js_web_ids += reader_card_ids[i]; 
        } else {
            js_pyt_ids += ", " + reader_card_ids[i];
        }
    }

    if (overdue_days[i] > max_days) {
        max_days = overdue_days[i];
        max_index = i;
    }

    if (overdue_days[i] >= 7) {
        count_warn++;
    }
}

console.log("Tổng số bạn đọc quá hạn >= 10 ngày: " + count_10_days + " người");
console.log("Các bạn đọc đang mượn cả sách JS* và PYT*: " + (js_pyt_ids || "Không có"));
console.log("Bạn đọc có số ngày quá hạn cao nhất: " + reader_names[max_index] + " (" + max_days + " ngày)");

if (count_warn === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (count_warn >= 1 && count_warn <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else if (count_warn >= 5) {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}