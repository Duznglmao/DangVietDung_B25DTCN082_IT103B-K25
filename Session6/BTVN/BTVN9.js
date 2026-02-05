let arr = [];
let choice = 0;

do {
    console.log("================== MENU ===================");
    console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử");
    console.log("2. In ra giá trị các phần tử dạng quản lý");
    console.log("3. In ra giá trị các phần tử chẵn và tính tổng");
    console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng");
    console.log("5. In ra các phần tử là số nguyên tố trong mảng và tính tổng");
    console.log("6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó");
    console.log("7. Thêm một phần tử vào vị trí chỉ định");
    console.log("8. Thoát");
    console.log("============================================");

    choice = parseInt(prompt("Lựa chọn của bạn:"));

    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số phần tử:"));
            if (n < 0) {
                console.log("Số phần tử không hợp lệ!");
            } else {
                arr = [];
                for (let i = 0; i < n; i++) {
                    let value = parseFloat(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
                    arr[arr.length] = value;
                }
                console.log("Đã nhập mảng thành công!");
            }
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                console.log("Các phần tử trong mảng:");
                for (let i = 0; i < arr.length; i++) {
                    console.log("arr[" + i + "] = " + arr[i]);
                }
            }
            break;

        case 3:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                let sum_even = 0;
                let res_even = "";
                let has_even = false;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        has_even = true;
                        res_even = res_even + arr[i] + " ";
                        sum_even = sum_even + arr[i];
                    }
                }
                if (has_even) {
                    console.log("Các phần tử chẵn: " + res_even.trim());
                    console.log("Tổng: " + sum_even);
                } else {
                    console.log("Không có phần tử chẵn!");
                }
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                let max_val = arr[0];
                let min_val = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max_val) max_val = arr[i];
                    if (arr[i] < min_val) min_val = arr[i];
                }
                console.log("Giá trị lớn nhất: " + max_val);
                console.log("Giá trị nhỏ nhất: " + min_val);
            }
            break;

        case 5:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                let sum_prime = 0;
                let res_prime = "";
                let has_prime = false;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] >= 2 && arr[i] === Math.floor(arr[i])) {
                        let is_prime = true;
                        for (let j = 2; j * j <= arr[i]; j++) {
                            if (arr[i] % j === 0) {
                                is_prime = false;
                                break;
                            }
                        }
                        if (is_prime) {
                            has_prime = true;
                            res_prime = res_prime + arr[i] + " ";
                            sum_prime = sum_prime + arr[i];
                        }
                    }
                }
                if (has_prime) {
                    console.log("Các số nguyên tố: " + res_prime.trim());
                    console.log("Tổng: " + sum_prime);
                } else {
                    console.log("Không có số nguyên tố!");
                }
            }
            break;

        case 6:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                let search_num = parseFloat(prompt("Nhập số cần thống kê:"));
                let count_num = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === search_num) count_num++;
                }
                console.log("Số " + search_num + " xuất hiện " + count_num + " lần");
            }
            break;

        case 7:
            let pos_insert = parseInt(prompt("Nhập vị trí muốn thêm (0-" + arr.length + "):"));

            if (pos_insert < 0 || pos_insert > arr.length) {
                console.log("Vị trí không hợp lệ!");
            } else {
                let val_insert = parseFloat(prompt("Nhập giá trị:"));
                arr.splice(pos_insert, 0, val_insert);

                console.log("Đã thêm phần tử thành công!");
            }
            break;

        case 8:
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 8);