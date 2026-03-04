let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let cart = [];

const showByCategory = () => {
    let cate = prompt("Nhập tên danh mục:");

    let result = products.filter(p =>
        p.category.toLowerCase().includes(cate.toLowerCase())
    );

    if (result.length === 0) {
        console.log("Không có sản phẩm trong danh mục này.");
    } else {
        result.map(p =>
            console.log(
                "ID:", p.id,
                "| Tên:", p.name,
                "| Giá:", p.price,
                "| SL:", p.quantity
            )
        );
    }
};

const buyProduct = () => {
    let id = Number(prompt("Nhập ID sản phẩm muốn mua:"));
    let product = products.find(p => p.id === id);

    if (!product) {
        alert("Sản phẩm không tồn tại!");
        return;
    }

    let qty = Number(prompt("Nhập số lượng muốn mua:"));

    if (qty <= 0) {
        alert("Số lượng không hợp lệ!");
        return;
    }

    if (product.quantity === 0) {
        alert("Sản phẩm đã hết hàng!");
        return;
    }

    if (qty > product.quantity) {
        alert("Không đủ số lượng trong kho!");
        return;
    }

    product.quantity -= qty;

    let cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: qty
        });
    }

    alert("Mua thành công!");
};

const sortProducts = () => {
    let choose = Number(prompt("1. Tăng dần\n2. Giảm dần"));

    if (choose === 1) {
        products.sort((a, b) => a.price - b.price);
    } else if (choose === 2) {
        products.sort((a, b) => b.price - a.price);
    } else {
        alert("Lựa chọn không hợp lệ!");
        return;
    }

    products.map(p =>
        console.log(
            "ID:", p.id,
            "| Tên:", p.name,
            "| Giá:", p.price,
            "| SL:", p.quantity
        )
    );
};

const calculateTotal = () => {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    cart.map(item =>
        console.log(
            "Tên:", item.name,
            "| SL:", item.quantity,
            "| Giá:", item.price
        )
    );

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    console.log("Tổng tiền cần thanh toán:", total, "VNĐ");
};

let choice;

do {
    choice = Number(prompt(`
===== MENU =====
1. Hiển thị sản phẩm theo danh mục
2. Mua sản phẩm
3. Sắp xếp sản phẩm theo giá
4. Tính tiền giỏ hàng
0. Thoát
`));

    switch (choice) {
        case 1:
            showByCategory();
            break;
        case 2:
            buyProduct();
            break;
        case 3:
            sortProducts();
            break;
        case 4:
            calculateTotal();
            break;
        case 0:
            alert("Tạm biệt!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }

} while (choice !== 0);