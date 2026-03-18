const products = [
    {
        id: 1,
        name: "Tai nghe Bluetooth TWS",
        price: 320000,
        image: "https://picsum.photos/seed/mp19-tws/1200/800",
        description: "Chống ồn nhẹ, pin 20h, kết nối ổn định.",
    },
    {
        id: 2,
        name: "Bàn phím cơ 87 phím",
        price: 790000,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
        description: "Switch blue, led trắng, gõ sướng tay.",
    },
    {
        id: 3,
        name: "Chuột không dây công thái học",
        price: 450000,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
        description: "Thiết kế ergonomic, sạc USB-C.",
    },
    {
        id: 4,
        name: "USB 64GB",
        price: 120000,
        image: "https://picsum.photos/seed/mp19-usb/1200/800",
        description: "Nhỏ gọn, tốc độ đọc/ghi ổn định.",
    },
    {
        id: 5,
        name: "Đế tản nhiệt laptop",
        price: 210000,
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60",
        description: "2 quạt gió, đỡ mỏi cổ tay.",
    },
    {
        id: 6,
        name: "Cáp sạc Type-C 1m",
        price: 80000,
        image: "https://picsum.photos/seed/mp19-cable/1200/800",
        description: "Bọc dù, hỗ trợ sạc nhanh.",
    },
];

let cart = [];

const init = () => {
    const data = localStorage.getItem("cart");
    if (data) {
        cart = JSON.parse(data);
    }

    renderProducts();
    renderCart();

    document.getElementById("clear-cart-btn").onclick = clearCart;
};

const renderProducts = () => {
    const grid = document.getElementById("products-grid");
    const empty = document.getElementById("products-empty");
    const badge = document.getElementById("product-count-badge");

    badge.innerText = `${products.length} sản phẩm`;

    if (products.length === 0) {
        empty.classList.remove("hidden");
        grid.innerHTML = "";
        return;
    }

    empty.classList.add("hidden");

    grid.innerHTML = products.map((product) => `
        <div class="card">
            <div class="card-img">
                <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="card-body">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-desc">${product.description || ""}</p>
                <div class="card-footer">
                    <span class="price">${product.price.toLocaleString("vi-VN")} VNĐ</span>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    `).join("");
};

const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const existingItem = cart.find((item) => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

const renderCart = () => {
    const tbody = document.getElementById("cart-tbody");
    const empty = document.getElementById("cart-empty");
    const tableWrap = document.querySelector(".table-wrap");

    if (cart.length === 0) {
        empty.classList.remove("hidden");
        tableWrap.style.display = "none";
        tbody.innerHTML = "";
        renderStats();
        return;
    }

    empty.classList.add("hidden");
    tableWrap.style.display = "";

    tbody.innerHTML = cart.map((item) => `
        <tr>
            <td>${item.name}</td>
            <td class="right">${item.price.toLocaleString("vi-VN")} VNĐ</td>
            <td class="center">
                <div class="qty-controls">
                    <button class="btn btn-icon btn-ghost" onclick="updateQuantity(${item.productId}, -1)">−</button>
                    <span class="qty">${item.quantity}</span>
                    <button class="btn btn-icon btn-ghost" onclick="updateQuantity(${item.productId}, 1)">+</button>
                </div>
            </td>
            <td class="right">${(item.price * item.quantity).toLocaleString("vi-VN")} VNĐ</td>
            <td class="center">
                <button class="btn btn-danger" onclick="removeFromCart(${item.productId})">Xóa</button>
            </td>
        </tr>
    `).join("");

    renderStats();
};

const updateQuantity = (productId, change) => {
    const item = cart.find((i) => i.productId === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter((i) => i.productId !== productId);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

const removeFromCart = (productId) => {
    const item = cart.find((i) => i.productId === productId);
    if (!item) return;

    if (!confirm(`Bạn có chắc muốn xóa "${item.name}" khỏi giỏ hàng?`)) return;

    cart = cart.filter((i) => i.productId !== productId);

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

const clearCart = () => {
    if (cart.length === 0) return;

    if (!confirm("Bạn có chắc muốn xóa TOÀN BỘ giỏ hàng? Hành động này không thể hoàn tác.")) return;

    cart = [];

    localStorage.removeItem("cart");
    renderCart();
};

const renderStats = () => {
    const totalLines = cart.length;
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    document.getElementById("stat-lines").innerText = totalLines;
    document.getElementById("stat-qty").innerText = totalQty;
    document.getElementById("stat-total").innerText = totalPrice.toLocaleString("vi-VN") + " VNĐ";

    document.getElementById("cart-lines-badge").innerText = `${totalLines} dòng`;
    document.getElementById("cart-qty-badge").innerText = `${totalQty} món`;
};

const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const loadCart = () => {
    const data = localStorage.getItem("cart");
    if (data) {
        cart = JSON.parse(data);
    }
};

init();