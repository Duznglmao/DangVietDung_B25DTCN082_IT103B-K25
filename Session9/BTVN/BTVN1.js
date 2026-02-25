function sum_two(a, b) {
    alert(`Kết quả: ${a + b}`);
}

function sub_two(a, b) {
    alert(`Kết quả: ${a - b}`);
}

function mul_two(a, b) {
    alert(`Kết quả: ${a * b}`);
}

function div_two(a, b) {
    alert(`Kết quả: ${a / b}`);
}

let choice;

do {
    choice = +prompt(`Chọn chức năng:
1. Cộng hai số
2. Trừ hai số
3. Nhân hai số
4. Chia hai số
5. Thoát`);

    switch (choice) {
        case 1:
            let a1 = Number(prompt(`Nhập số thứ nhất:`));
            let b1 = Number(prompt(`Nhập số thứ hai:`));
            sum_two(a1, b1);
            break;

        case 2:
            let a2 = Number(prompt(`Nhập số thứ nhất:`));
            let b2 = Number(prompt(`Nhập số thứ hai:`));
            sub_two(a2, b2);
            break;

        case 3:
            let a3 = Number(prompt(`Nhập số thứ nhất:`));
            let b3 = Number(prompt(`Nhập số thứ hai:`));
            mul_two(a3, b3);
            break;

        case 4:
            let a4 = Number(prompt(`Nhập số thứ nhất:`));
            let b4 = Number(prompt(`Nhập số thứ hai:`));
            div_two(a4, b4);
            break;

        case 5:
            alert(`Đã thoát chương trình`);
            break;

        default:
            alert(`Lựa chọn không hợp lệ`);
    }

} while (choice !== 5);