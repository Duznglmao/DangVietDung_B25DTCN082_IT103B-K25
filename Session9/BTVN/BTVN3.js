function area_circle(r) {
    alert(`Diện tích hình tròn: ${Math.PI * r * r}`);
}

function peri_circle(r) {
    alert(`Chu vi hình tròn: ${2 * Math.PI * r}`);
}

function area_rect(w, h) {
    alert(`Diện tích hình chữ nhật: ${w * h}`);
}

function peri_rect(w, h) {
    alert(`Chu vi hình chữ nhật: ${(w + h) * 2}`);
}

let choice;

do {
    choice = +prompt(`Chọn chức năng:
1. Tính diện tích hình tròn
2. Tính chu vi hình tròn
3. Tính diện tích hình chữ nhật
4. Tính chu vi hình chữ nhật
5. Thoát`);

    switch (choice) {
        case 1:
            let r1 = Number(prompt(`Nhập bán kính:`));
            area_circle(r1);
            break;

        case 2:
            let r2 = Number(prompt(`Nhập bán kính:`));
            peri_circle(r2);
            break;

        case 3:
            let w1 = Number(prompt(`Nhập chiều rộng:`));
            let h1 = Number(prompt(`Nhập chiều cao:`));
            area_rect(w1, h1);
            break;

        case 4:
            let w2 = Number(prompt(`Nhập chiều rộng:`));
            let h2 = Number(prompt(`Nhập chiều cao:`));
            peri_rect(w2, h2);
            break;

        case 5:
            alert(`Đã thoát chương trình`);
            break;

        default:
            alert(`Lựa chọn không hợp lệ`);
    }

} while (choice !== 5);