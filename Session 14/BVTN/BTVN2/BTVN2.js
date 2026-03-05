const products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

function render_product_list() {
  let product_items_html = "";

  for (let i = 0; i < products.length; i++) {
    product_items_html += `
      <li>
        ${products[i].name} - ${products[i].price} VND
      </li>
    `;
  }

  document.getElementById("product-list").innerHTML = product_items_html;
}

render_product_list();

const product_form_element = document.getElementById("product-form");
const product_name_input = document.getElementById("product-name");
const product_price_input = document.getElementById("product-price");

product_form_element.addEventListener("submit", function (event) {
  event.preventDefault();

  const product_name_value = product_name_input.value.trim();
  const product_price_value = Number(product_price_input.value);

  const new_product = {
    id: products.length + 1,
    name: product_name_value,
    price: product_price_value,
  };

  products.push(new_product);

  render_product_list();

  product_name_input.value = "";
  product_price_input.value = "";
});
