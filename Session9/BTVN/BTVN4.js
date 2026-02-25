function input_list(arr) {
    let count = Number(prompt(`Nhập số lượng số nguyên:`));

    for (let i = 0; i < count; i++) {
        let num = Number(prompt(`Nhập số thứ ${i + 1}:`));
        arr.push(num);
    }
}

function calc_avg(arr) {
    if (arr.length === 0) {
        alert(`Danh sách trống`);
        return;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    alert(`Trung bình các số: ${sum / arr.length}`);
}

function max_even(arr) {
    let found = false;
    let max;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (!found || arr[i] > max) {
                max = arr[i];
                found = true;
            }
        }
    }

    if (found) {
        alert(`Số chẵn lớn nhất: ${max}`);
    } else {
        alert(`Không có số chẵn trong danh sách`);
    }
}

function min_odd(arr) {
    let found = false;
    let min;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            if (!found || arr[i] < min) {
                min = arr[i];
                found = true;
            }
        }
    }

    if (found) {
        alert(`Số lẻ nhỏ nhất: ${min}`);
    } else {
        alert(`Không có số lẻ trong danh sách`);
    }
}

let num_list = [];
let choice;

do {
    choice = +prompt(`Chọn chức năng:
1. Nhập danh sách số nguyên
2. Tính trung bình các số
3. Tìm số chẵn lớn nhất
4. Tìm số lẻ nhỏ nhất
5. Thoát`);

    switch (choice) {
        case 1:
            input_list(num_list);
            break;

        case 2:
            calc_avg(num_list);
            break;

        case 3:
            max_even(num_list);
            break;

        case 4:
            min_odd(num_list);
            break;

        case 5:
            alert(`Đã thoát chương trình`);
            break;

        default:
            alert(`Lựa chọn không hợp lệ`);
    }

} while (choice !== 5);