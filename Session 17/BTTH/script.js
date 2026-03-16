const products = [
  { id: 1, name: "Bánh Chưng", price: 150000, img: "img/banhchung.webp" },
  { id: 2, name: "Giò Lụa", price: 180000, img: "img/giolua.jpg" },
  { id: 3, name: "Cành Đào", price: 500000, img: "img/canhdao.webp" },
  { id: 4, name: "Mứt Tết", price: 120000, img: "img/muttet.webp" },
  { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "img/lixi.webp" },
  { id: 6, name: "Dưa Hấu", price: 60000, img: "img/duahau.jpg" },
];

let cart = [];

let savedCart = localStorage.getItem("cart");
if (savedCart) {
  cart = JSON.parse(savedCart);
}

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

const product_list_element = document.getElementById("product-list");
const cart_list_element = document.getElementById("cart-list");
const total_price_element = document.getElementById("total-price");

function render_product_list() {
  let html = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    html += `
      <div class="product-card">
        <img src="${product.img}" alt="">
        <h3>${product.name}</h3>
        <p class="price">${formatter.format(product.price)}</p>
        <button class="btn-add" onclick="add_to_cart(${product.id})">Mua ngay</button>
      </div>
    `;
  }

  product_list_element.innerHTML = html;
}

function render_cart() {
  if (cart.length === 0) {
    cart_list_element.innerHTML = '<li class="empty-msg">Chưa có món nào...</li>';
    return;
  }

  let html = "";

  for (let i = 0; i < cart.length; i++) {
    const cart_item = cart[i];

    html += `
      <li>
        <span class="cart-item-name">${cart_item.name}</span>
        <span class="cart-item-quantity">Số lượng: ${cart_item.quantity}</span>
        <span class="cart-item-price">${formatter.format(cart_item.price * cart_item.quantity)}</span>
        <button class="btn-remove" onclick="remove_from_cart(${cart_item.id})">X</button>
      </li>
    `;
  }

  cart_list_element.innerHTML = html;
}

function update_total_price() {
  let total_price = 0;

  for (let i = 0; i < cart.length; i++) {
    total_price = total_price + cart[i].price * cart[i].quantity;
  }

  total_price_element.innerText = formatter.format(total_price);
}

function add_to_cart(product_id) {
  let selected_product = null;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id === product_id) {
      selected_product = products[i];
      break;
    }
  }

  if (selected_product === null) return;

  let found_in_cart = null;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === selected_product.id) {
      found_in_cart = cart[i];
      break;
    }
  }

  if (found_in_cart) {
    found_in_cart.quantity = found_in_cart.quantity + 1;
  } else {
    const cart_item = {
      id: selected_product.id,
      name: selected_product.name,
      price: selected_product.price,
      quantity: 1,
    };
    cart.push(cart_item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  render_cart();
  update_total_price();
}

function remove_from_cart(product_id) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === product_id) {
      cart.splice(i, 1);
      break;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  render_cart();
  update_total_price();
}

document.getElementById("btn-checkout").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }

  localStorage.removeItem("cart");
  cart = [];

  render_cart();
  update_total_price();

  alert("Đã thanh toán thành công!");
});

render_product_list();
render_cart();
update_total_price();