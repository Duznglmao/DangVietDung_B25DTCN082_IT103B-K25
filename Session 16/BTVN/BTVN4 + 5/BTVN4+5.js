let productList = [
    { id: 1, name: "iPhone 15 Pro Max", price: 30000000 },
    { id: 2, name: "Samsung Galaxy S24", price: 25000000 },
    { id: 3, name: "MacBook Air M3", price: 28000000 },
    { id: 4, name: "Sony WH-1000XM5", price: 8000000 },
    { id: 5, name: "iPad Pro M2", price: 22000000 }
];

function renderDisplay(data) {
    let htmlContent = "";
    for (let i = 0; i < data.length; i++) {
        htmlContent += `
            <li>
                <strong>${data[i].name}</strong> - 
                <span>${data[i].price.toLocaleString()} VNĐ</span>
            </li>`;
    }
    document.getElementById("displayList").innerHTML = htmlContent;
}

function searchProduct() {
    let keyword = document.getElementById("searchInput").value.toLowerCase();

    let result = productList.filter(function (item) {
        return item.name.toLowerCase().includes(keyword);
    });

    renderDisplay(result);
}

renderDisplay(productList);