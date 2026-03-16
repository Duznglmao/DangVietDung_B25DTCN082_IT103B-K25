function togglePassword() {
    let passwordField = document.getElementById("passwordInput");
    let toggleButton = document.getElementById("toggleBtn");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.innerHTML = "Ẩn";
    } else {
        passwordField.type = "password";
        toggleButton.innerHTML = "Hiện";
    }
}