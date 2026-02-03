let books_id = [];
let books_name = [];
let inventory_quantity = [];

let total_types = prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?");
total_types = parseInt(total_types);

for (let i = 1; i <= total_types; i++) {
    let id = prompt("Nhập mã sách thứ " + i + ":");
    let name = prompt("Nhập tên sách thứ " + i + ":");
    let qty = prompt("Nhập số lượng tồn kho hiện tại:");
    qty = parseInt(qty);

    books_id.push(id);
    books_name.push(name);
    inventory_quantity.push(qty);
}

console.log("Danh sách sách cần xem xét bổ sung (" + books_id.length + " loại):");

let low_stock_count = 0;
let out_of_stock_ids = "";

for (let i = 0; i < books_id.length; i++) {
    console.log((i + 1) + ". Mã: " + books_id[i] + " - Tên: " + books_name[i] + " - Còn: " + inventory_quantity[i] + " bản");

    if (inventory_quantity[i] <= 5) {
        low_stock_count++;
    }

    if (inventory_quantity[i] === 0) {
        if (out_of_stock_ids === "") {
            out_of_stock_ids += books_id[i];
        } else {
            out_of_stock_ids += ", " + books_id[i];
        }
    }
}

console.log("Số sách có tồn kho <= 5 bản: " + low_stock_count + " loại");
console.log("Các mã sách đã hết hàng (0 bản): " + out_of_stock_ids);