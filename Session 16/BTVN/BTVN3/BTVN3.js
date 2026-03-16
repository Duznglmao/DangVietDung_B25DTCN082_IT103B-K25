let products = [
    { id: 1, name: "iPhone 15", category: "electronics" },
    { id: 2, name: "Áo sơ mi", category: "fashion" },
    { id: 3, name: "Laptop ASUS", category: "electronics" },
    { id: 4, name: "Bánh mì", category: "food" },
    { id: 5, name: "Giày thể thao", category: "fashion" }
];

function renderProducts(data) {
    let listContent = "";
    for (let i = 0; i < data.length; i++) {
        listContent += `<li>${data[i].name} - [${data[i].category}]</li>`;
    }
    document.getElementById("productList").innerHTML = listContent;
}

function filterProducts() {
    let selectedCategory = document.getElementById("categorySelect").value;

    if (selectedCategory === "all") {
        renderProducts(products);
    } else {
        let filteredData = products.filter(function (item) {
            return item.category === selectedCategory;
        });
        renderProducts(filteredData);
    }
}

renderProducts(products);