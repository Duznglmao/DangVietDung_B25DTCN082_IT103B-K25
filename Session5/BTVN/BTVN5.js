let books_id = [];
let books_name = [];
let books_category = [];
let inventory_quantity = [];

let total_input = prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?");
total_input = parseInt(total_input);

for (let i = 1; i <= total_input; i++) {
    let id = "";
    while (true) {
        id = prompt("Nhập mã sách thứ " + i + " (duy nhất):");
        let is_duplicate = false;
        for (let j = 0; j < books_id.length; j++) {
            if (books_id[j] === id) {
                is_duplicate = true;
                break;
            }
        }
        if (id !== "" && !is_duplicate) break;
        alert("Mã sách không được để trống và không được trùng lặp!");
    }

    let name = prompt("Nhập tên sách thứ " + i + ":");
    let category = prompt("Nhập các thể loại (cách nhau bởi dấu phẩy):");
    let qty = prompt("Nhập số lượng tồn kho:");
    qty = parseInt(qty);

    books_id.push(id);
    books_name.push(name);
    books_category.push(category);
    inventory_quantity.push(qty);
}

console.log("--- KẾT QUẢ KIỂM TRA ---");

let programming_count = 0;
let js_web_ids = "";
let min_qty = inventory_quantity[0];
let min_index = 0;

for (let i = 0; i < books_id.length; i++) {
    let current_cat = books_category[i].toLowerCase();

    if (current_cat.includes("lập trình")) {
        programming_count++;
    }

    if (current_cat.includes("javascript") && current_cat.includes("web")) {
        if (js_web_ids === "") {
            js_web_ids += books_id[i];
        } else {
            js_web_ids += "\n" + books_id[i];
        }
    }

    if (inventory_quantity[i] < min_qty) {
        min_qty = inventory_quantity[i];
        min_index = i;
    }
}

console.log("Tổng số sách thuộc thể loại 'Lập trình': " + programming_count);
console.log("Danh sách mã sách thuộc cả hai loại 'JavaScript' và 'Web':\n" + (js_web_ids || "Không có"));
console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log("Mã sách: " + books_id[min_index] + ", Tên sách: " + books_name[min_index] + ", Tồn kho: " + inventory_quantity[min_index]);