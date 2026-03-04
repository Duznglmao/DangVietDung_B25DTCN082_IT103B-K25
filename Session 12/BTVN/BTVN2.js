let books = [
    { id: 1, name: "Dế Mèn Phiêu Lưu Ký", price: 50000, quantity: 10, category: "Thiếu nhi" },
    { id: 2, name: "Lão Hạc", price: 40000, quantity: 8, category: "Văn học" },
    { id: 3, name: "Đắc Nhân Tâm", price: 90000, quantity: 15, category: "Kỹ năng" },
    { id: 4, name: "Harry Potter", price: 120000, quantity: 5, category: "Fantasy" }
];

let cart = [];

const showByCategory = () => {
    let cate = prompt("Nhập thể loại sách:");

    let result = books.filter(book =>
        book.category.toLowerCase().includes(cate.toLowerCase())
    );

    if (result.length === 0) {
        console.log("Không có sách thuộc thể loại này.");
    } else {
        result.map(book =>
            console.log(
                "ID:", book.id,
                "| Tên:", book.name,
                "| Giá:", book.price,
                "| SL:", book.quantity
            )
        );
    }
};

const addBook = () => {
    let id = Number(prompt("Nhập ID sách:"));

    let exists = books.some(book => book.id === id);
    if (exists) {
        alert("ID đã tồn tại!");
        return;
    }

    let name = prompt("Nhập tên sách:");
    let price = Number(prompt("Nhập giá sách:"));
    let quantity = Number(prompt("Nhập số lượng:"));
    let category = prompt("Nhập thể loại:");

    books.push({ id, name, price, quantity, category });

    alert("Thêm sách thành công!");
};

const searchBook = () => {
    let keyword = prompt("Nhập tên hoặc ID sách:");

    let result = books.filter(book =>
        book.name.toLowerCase().includes(keyword.toLowerCase()) ||
        book.id === Number(keyword)
    );

    if (result.length === 0) {
        console.log("Không tìm thấy sách.");
    } else {
        result.map(book =>
            console.log(
                "ID:", book.id,
                "| Tên:", book.name,
                "| Giá:", book.price,
                "| SL:", book.quantity
            )
        );
    }
};

const buyBook = () => {
    let id = Number(prompt("Nhập ID sách muốn mua:"));
    let book = books.find(b => b.id === id);

    if (!book) {
        alert("Sách không tồn tại!");
        return;
    }

    let qty = Number(prompt("Nhập số lượng muốn mua:"));

    if (qty <= 0) {
        alert("Số lượng không hợp lệ!");
        return;
    }

    if (qty > book.quantity) {
        alert("Không đủ sách trong kho!");
        return;
    }

    book.quantity -= qty;

    let cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity += qty;
    } else {
        cart.push({
            id: book.id,
            name: book.name,
            price: book.price,
            quantity: qty
        });
    }

    alert("Mua sách thành công!");
};

const sortBooks = () => {
    let choose = Number(prompt("1. Tăng dần\n2. Giảm dần"));

    if (choose === 1) {
        books.sort((a, b) => a.price - b.price);
    } else if (choose === 2) {
        books.sort((a, b) => b.price - a.price);
    } else {
        alert("Lựa chọn không hợp lệ!");
        return;
    }

    books.map(book =>
        console.log(
            "ID:", book.id,
            "| Tên:", book.name,
            "| Giá:", book.price,
            "| SL:", book.quantity
        )
    );
};

const calculateCart = () => {

    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }

    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    let totalMoney = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    console.log("Tổng số sách đã mua:", totalQuantity);
    console.log("Tổng tiền:", totalMoney, "VNĐ");
};

const totalStock = () => {
    let total = books.reduce((sum, book) => sum + book.quantity, 0);

    console.log("Tổng số lượng sách trong kho:", total);
};

let choice;

do {
    choice = Number(prompt(`
===== QUẢN LÝ SÁCH =====
1. Hiển thị theo thể loại
2. Thêm sách mới
3. Tìm kiếm sách
4. Mua sách
5. Sắp xếp theo giá
6. Tính tiền giỏ hàng
7. Tổng số lượng trong kho
0. Thoát
`));

    switch (choice) {
        case 1:
            showByCategory();
            break;
        case 2:
            addBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortBooks();
            break;
        case 6:
            calculateCart();
            break;
        case 7:
            totalStock();
            break;
        case 0:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }

} while (choice !== 0);