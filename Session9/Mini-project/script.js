const names = ["Laptop", "Mouse", "Keyboard", "Monitor", "USB Hub", "Webcam", "Headset"];
let prices = [1200, 25, 85, 600, 45, 150, 250];
const stocks = [10, 0, 5, 3, 20, 0, 8];

const filter_premium = () => {
    const result = names.filter(function (name, i) {
        return prices[i] > 500;
    });

    if (result.length === 0) {
        alert("Không có sản phẩm nào > 500$");
        return;
    }

    alert("SẢN PHẨM CAO CẤP:\n" + result.join("\n"));
};

const check_data = () => {
    const has_out_of_stock = stocks.some(function (stock) {
        return stock === 0;
    });

    const all_above_floor = prices.every(function (price) {
        return price > 100;
    });

    alert(`KIỂM ĐỊNH DỮ LIỆU:
Có sản phẩm hết hàng: ${has_out_of_stock ? "Đúng" : "Sai"}
Tất cả giá > 100: ${all_above_floor ? "Đúng" : "Sai"}`);
};

const calc_total_value = () => {
    const total = prices.reduce(function (sum, price, i) {
        return sum + price * stocks[i];
    }, 0);

    alert("TỔNG GIÁ TRỊ KHO:\n" + total.toFixed(2) + "$");
};

const apply_discount = () => {
    prices.forEach(function (price, i) {
        prices[i] = +(price * 0.9).toFixed(2);
    });

    const msg = names.map(function (name, i) {
        return name + ": " + prices[i].toFixed(2) + "$";
    });

    alert("ĐÃ GIẢM GIÁ 10%:\n" + msg.join("\n"));
};

const search_by_keyword = () => {
    const keyword = prompt("Nhập từ khóa:");

    if (!keyword) {
        alert("Đã hủy tìm kiếm");
        return;
    }

    const lower_keyword = keyword.toLowerCase();

    const result = names
        .map(function (name, i) {
            if (name.toLowerCase().includes(lower_keyword)) {
                return name + " - " + prices[i].toFixed(2) + "$ - SL: " + stocks[i];
            }
            return null;
        })
        .filter(function (item) {
            return item !== null;
        });

    if (result.length === 0) {
        alert("Không tìm thấy sản phẩm");
        return;
    }

    alert("KẾT QUẢ:\n" + result.join("\n"));
};

const stock_report = () => {
    const report = names.map(function (name, i) {
        return name + ": " + (stocks[i] > 0 ? "Còn hàng (" + stocks[i] + ")" : "Hết hàng");
    });

    alert("TỒN KHO:\n" + report.join("\n"));
};

const menu = `--- QUẢN LÝ KHO HÀNG ---
1. Lọc sản phẩm cao cấp
2. Kiểm định dữ liệu
3. Tổng giá trị kho
4. Giảm giá 10%
5. Tìm theo từ khóa
6. Báo cáo tồn kho
0. Thoát`;

const start_app = () => {
    let choice;

    do {
        choice = Number(prompt(menu));

        switch (choice) {
            case 1:
                filter_premium();
                break;
            case 2:
                check_data();
                break;
            case 3:
                calc_total_value();
                break;
            case 4:
                apply_discount();
                break;
            case 5:
                search_by_keyword();
                break;
            case 6:
                stock_report();
                break;
            case 7:
                alert("Hẹn gặp lại!");
                break;
            default:
                alert("Lựa chọn không hợp lệ");
        }

    } while (choice !== 7);
};

start_app();