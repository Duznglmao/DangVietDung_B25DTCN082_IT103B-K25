let books_id = [];
let books_name = [];
let books_status = [];

let total_input = prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?");
total_input = parseInt(total_input);

for (let i = 1; i <= total_input; i++) {
    let id = prompt("Nhập mã sách thứ " + i + ":");
    let name = prompt("Nhập tên sách thứ " + i + ":");
    let status_choice = prompt("Nhập tình trạng (1-Hỏng nhẹ, 2-Hỏng nặng, 3-Cần sửa gấp):");

    let status_text = "";
    if (status_choice === "1") status_text = "Hỏng nhẹ";
    else if (status_choice === "2") status_text = "Hỏng nặng";
    else if (status_choice === "3") status_text = "Cần sửa gấp";

    books_id.push(id);
    books_name.push(name);
    books_status.push(status_text);
}

let is_running = true;
while (is_running) {
    console.log("--- Danh sách hiện tại (" + books_id.length + " cuốn) ---");
    for (let i = 0; i < books_id.length; i++) {
        console.log((i + 1) + ". " + books_id[i] + " - " + books_name[i] + " - " + books_status[i]);
    }

    let action = prompt("Bạn muốn làm gì?\n1: Sửa tình trạng\n2: Loại bỏ sách\n0: Kết thúc và in báo cáo");

    if (action === "1") {
        let edit_id = prompt("Nhập mã sách cần sửa:");
        let found_index = -1;
        for (let i = 0; i < books_id.length; i++) {
            if (books_id[i] === edit_id) {
                found_index = i;
                break;
            }
        }

        if (found_index !== -1) {
            let new_choice = prompt("Chọn tình trạng mới:\n1: Hỏng nhẹ\n2: Hỏng nặng\n3: Cần sửa gấp\n4: Đã sửa xong\n5: Loại bỏ");
            if (new_choice === "1") books_status[found_index] = "Hỏng nhẹ";
            else if (new_choice === "2") books_status[found_index] = "Hỏng nặng";
            else if (new_choice === "3") books_status[found_index] = "Cần sửa gấp";
            else if (new_choice === "4") books_status[found_index] = "Đã sửa xong";
            else if (new_choice === "5") books_status[found_index] = "Loại bỏ";
        } else {
            alert("Không tìm thấy mã sách này!");
        }

    } else if (action === "2") {
        let delete_id = prompt("Nhập mã sách cần xóa khỏi danh sách:");
        let delete_index = -1;
        for (let i = 0; i < books_id.length; i++) {
            if (books_id[i] === delete_id) {
                delete_index = i;
                break;
            }
        }

        if (delete_index !== -1) {
            books_id.splice(delete_index, 1);
            books_name.splice(delete_index, 1);
            books_status.splice(delete_index, 1);
            alert("Đã xóa sách thành công!");
        } else {
            alert("Không tìm thấy mã sách để xóa!");
        }

    } else if (action === "0") {
        is_running = false;
    }
}

let fixed_count = 0;
let removed_count = 0;

for (let i = 0; i < books_status.length; i++) {
    if (books_status[i] === "Đã sửa xong") fixed_count++;
    if (books_status[i] === "Loại bỏ") removed_count++;
}

console.log("--- BÁO CÁO CUỐI CÙNG ---");
console.log("Tổng số sách còn lại: " + books_id.length);
console.log("Số sách đã 'Đã sửa xong': " + fixed_count);
console.log("Số sách 'Loại bỏ': " + removed_count);