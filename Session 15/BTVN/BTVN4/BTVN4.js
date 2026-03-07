function checkEmail() {
    let email = document.getElementById("emailInput").value.trim();
    let message = document.getElementById("emailMessage");

    let hasAtSymbol = email.includes("@");
    let isCorrectEnd = email.endsWith(".com") || email.endsWith(".vn");

    if (hasAtSymbol && isCorrectEnd) {
        message.innerHTML = `<span style="color: green;">email hợp lệ!</span>`;
    } else {
        message.innerHTML = `<span style="color: red;">email không hợp lệ!</span>`;
    }
}