let phones = [
    { id: 1, name: "iPhone 15", price: 25000000, quantity: 5, company: "Apple" },
    { id: 2, name: "Galaxy S23", price: 20000000, quantity: 7, company: "Samsung" },
    { id: 3, name: "Xiaomi 13", price: 15000000, quantity: 10, company: "Xiaomi" }
];

let cart = [];

const showByCompany = () => {
    let brand = prompt("Nhập hãng điện thoại:");

    let result = phones.filter(p =>
        p.company.toLowerCase().includes(brand.toLowerCase())
    );

    if (result.length === 0) {
        console.log("Không có điện thoại thuộc hãng này.");
    } else {
        result.map(p =>
            console.log(
                "ID:", p.id,
                "| Tên:", p.name,
                "| Giá:", p.price,
                "| SL:", p.quantity,
                "| Hãng:", p.company
            )
        );
    }
};

const addPhone = () => {
    let id = Number(prompt("Nhập ID:"));

    if (phones.some(p => p.id === id)) {
        alert("ID đã tồn tại!");
        return;
    }

    let name = prompt("Nhập tên điện thoại:");
    let price = Number(prompt("Nhập giá:"));
    let quantity = Number(prompt("Nhập số lượng:"));
    let company = prompt("Nhập hãng:");

    phones.push({ id, name, price, quantity, company });

    alert("Thêm điện thoại thành công!");
};

const searchPhone = () => {
    let keyword = prompt("Nhập tên hoặc ID:");

    let result = phones.filter(p =>
        p.name.toLowerCase().includes(keyword.toLowerCase()) ||
        p.id === Number(keyword)
    );

    if (result.length === 0) {
        console.log("Không tìm thấy điện thoại.");
    } else {
        result.map(p =>
            console.log(
                "ID:", p.id,
                "| Tên:", p.name,
                "| Giá:", p.price,
                "| SL:", p.quantity,
                "| Hãng:", p.company
            )
        );
    }
};

const buyPhone = () => {
    let id = Number(prompt("Nhập ID điện thoại muốn mua:"));
    let phone = phones.find(p => p.id === id);

    if (!phone) {
        alert("Điện thoại không tồn tại!");
        return;
    }

    let qty = Number(prompt("Nhập số lượng:"));

    if (qty <= 0) {
        alert("Số lượng không hợp lệ!");
        return;
    }

    if (qty > phone.quantity) {
        alert("Không đủ hàng trong kho!");
        return;
    }

    phone.quantity -= qty;

    let cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity += qty;
    } else {
        cart.push({
            id: phone.id,
            name: phone.name,
            price: phone.price,
            quantity: qty
        });
    }

    alert("Thêm vào giỏ hàng thành công!");
};

const checkout = () => {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    console.log("Thanh toán thành công!");
    console.log("Tổng tiền:", total, "VNĐ");

    cart = []; 
};

// ================= SẮP XẾP =================
const sortPhones = () => {
    let choose = Number(prompt("1. Tăng dần\n2. Giảm dần"));

    if (choose === 1) {
        phones.sort((a, b) => a.price - b.price);
    } else if (choose === 2) {
        phones.sort((a, b) => b.price - a.price);
    } else {
        alert("Lựa chọn không hợp lệ!");
        return;
    }

    phones.map(p =>
        console.log(
            "ID:", p.id,
            "| Tên:", p.name,
            "| Giá:", p.price,
            "| SL:", p.quantity,
            "| Hãng:", p.company
        )
    );
};

const totalStockMoney = () => {
    let total = phones.reduce((sum, p) => sum + p.price * p.quantity, 0);

    console.log("Tổng giá trị điện thoại trong kho:", total, "VNĐ");
};

const totalByCompany = () => {
    let result = phones.reduce((acc, p) => {
        if (!acc[p.company]) {
            acc[p.company] = 0;
        }
        acc[p.company] += p.quantity;
        return acc;
    }, {});

    for (let company in result) {
        console.log(company + " - " + result[company]);
    }
};

let choice;

do {
    choice = Number(prompt(`
===== QUẢN LÝ CỬA HÀNG ĐIỆN THOẠI =====
1. Hiển thị theo hãng
2. Thêm điện thoại
3. Tìm kiếm
4. Mua điện thoại
5. Thanh toán
6. Sắp xếp theo giá
7. Tổng tiền trong kho
8. Tổng số lượng theo hãng
0. Thoát
`));

    switch (choice) {
        case 1:
            showByCompany();
            break;
        case 2:
            addPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkout();
            break;
        case 6:
            sortPhones();
            break;
        case 7:
            totalStockMoney();
            break;
        case 8:
            totalByCompany();
            break;
        case 0:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }

} while (choice !== 0);