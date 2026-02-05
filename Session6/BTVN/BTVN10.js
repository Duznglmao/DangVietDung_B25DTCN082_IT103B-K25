let arr = [];
let choice;

do {
    console.log("================== MENU ===================");
    console.log("1. Nhập số phần tử và giá trị");
    console.log("2. In ra giá trị mảng");
    console.log("3. In số chẵn, tính tổng và sắp xếp giảm dần");
    console.log("4. In Max, Min và vị trí");
    console.log("5. In số nguyên tố và tính tổng");
    console.log("6. Đếm số lần xuất hiện của một số");
    console.log("7. Thêm phần tử vào vị trí chỉ định");
    console.log("8. Xóa phần tử theo giá trị");
    console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần");
    console.log("0. Thoát");
    console.log("============================================");

    choice = parseInt(prompt("Lựa chọn của bạn:"));

    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số lượng phần tử:"));
            if (n < 0 || isNaN(n)) {
                console.log("Số lượng không hợp lệ!");
            } else {
                arr = [];
                for (let i = 0; i < n; i++) {
                    let val = parseFloat(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
                    if (!isNaN(val)) {
                        arr[arr.length] = val;
                    }
                }
                console.log("Nhập mảng thành công!");
            }
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                for (let i = 0; i < arr.length; i++) {
                    console.log("arr[" + i + "] = " + arr[i]);
                }
            }
            break;

        case 3:
            let even_arr = [];
            let sum_even = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    even_arr[even_arr.length] = arr[i];
                    sum_even = sum_even + arr[i];
                }
            }
            if (even_arr.length === 0) {
                console.log("Không có số chẵn!");
            } else {
                for (let i = 0; i < even_arr.length - 1; i++) {
                    for (let j = i + 1; j < even_arr.length; j++) {
                        if (even_arr[i] < even_arr[j]) {
                            let temp = even_arr[i];
                            even_arr[i] = even_arr[j];
                            even_arr[j] = temp;
                        }
                    }
                }
                console.log("Số chẵn giảm dần: " + even_arr);
                console.log("Tổng chẵn: " + sum_even);
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Mảng rỗng!");
            } else {
                let max_val = arr[0];
                let min_val = arr[0];
                let max_idx = "0";
                let min_idx = "0";
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max_val) {
                        max_val = arr[i];
                        max_idx = i + "";
                    } else if (arr[i] === max_val) {
                        max_idx = max_idx + ", " + i;
                    }
                    if (arr[i] < min_val) {
                        min_val = arr[i];
                        min_idx = i + "";
                    } else if (arr[i] === min_val) {
                        min_idx = min_idx + ", " + i;
                    }
                }
                console.log("Giá trị lớn nhất: " + max_val + " tại vị trí: " + max_idx);
                console.log("Giá trị nhỏ nhất: " + min_val + " tại vị trí: " + min_idx);
            }
            break;

        case 5:
            let sum_prime = 0;
            let res_prime = "";
            for (let i = 0; i < arr.length; i++) {
                let is_prime = true;
                if (arr[i] < 2 || arr[i] !== Math.floor(arr[i])) {
                    is_prime = false;
                } else {
                    for (let j = 2; j * j <= arr[i]; j++) {
                        if (arr[i] % j === 0) {
                            is_prime = false;
                            break;
                        }
                    }
                }
                if (is_prime === true) {
                    res_prime = res_prime + arr[i] + " ";
                    sum_prime = sum_prime + arr[i];
                }
            }
            if (res_prime !== "") {
                console.log("Các số nguyên tố: " + res_prime);
            } else {
                console.log("Không có số nguyên tố");
            }
            console.log("Tổng số nguyên tố: " + sum_prime);
            break;

        case 6:
            let find_num = parseFloat(prompt("Nhập số cần đếm:"));
            let count_find = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === find_num) {
                    count_find = count_find + 1;
                }
            }
            console.log("Số " + find_num + " xuất hiện " + count_find + " lần");
            break;

        case 7:
            let add_pos = parseInt(prompt("Nhập vị trí muốn thêm (0-" + arr.length + "):"));
            if (add_pos >= 0 && add_pos <= arr.length) {
                let add_val = parseFloat(prompt("Nhập giá trị:"));
                let temp_add = [];
                for (let i = 0; i < add_pos; i++) {
                    temp_add[temp_add.length] = arr[i];
                }
                temp_add[temp_add.length] = add_val;
                for (let i = add_pos; i < arr.length; i++) {
                    temp_add[temp_add.length] = arr[i];
                }
                arr = temp_add;
                console.log("Đã thêm thành công!");
            } else {
                console.log("Vị trí không hợp lệ!");
            }
            break;

        case 8:
            let del_val = parseFloat(prompt("Giá trị cần xóa:"));
            let temp_del = [];
            let is_del = false;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== del_val) {
                    temp_del[temp_del.length] = arr[i];
                } else {
                    is_del = true;
                }
            }
            arr = temp_del;
            if (is_del === true) {
                console.log("Đã xóa tất cả phần tử có giá trị " + del_val);
            } else {
                console.log("Không tìm thấy giá trị cần xóa!");
            }
            break;

        case 9:
            let sort_type = prompt("Nhập 1 để sắp xếp Tăng dần, nhập 2 để sắp xếp Giảm dần:");
            if (sort_type === "1") {
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = i + 1; j < arr.length; j++) {
                        if (arr[i] > arr[j]) {
                            let tmp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = tmp;
                        }
                    }
                }
                console.log("Đã sắp xếp tăng dần!");
            } else if (sort_type === "2") {
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = i + 1; j < arr.length; j++) {
                        if (arr[i] < arr[j]) {
                            let tmp = arr[i];
                            arr[i] = arr[j];
                            arr[j] = tmp;
                        }
                    }
                }
                console.log("Đã sắp xếp giảm dần!");
            } else {
                console.log("Lựa chọn sắp xếp không hợp lệ!");
            }
            break;

        case 0:
            console.log("Thoát chương trình. Tạm biệt!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }
} while (choice !== 0);