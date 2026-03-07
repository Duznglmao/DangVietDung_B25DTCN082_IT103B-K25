let currentFontSize = 16;

function increaseFontSize() {
    currentFontSize += 2; 
    document.getElementById("textContent").style.fontSize = currentFontSize + "px";
    console.log("Kích thước hiện tại: ", currentFontSize);
}

function decreaseFontSize() {
    if (currentFontSize > 0) {
        currentFontSize -= 2; 
        document.getElementById("textContent").style.fontSize = currentFontSize + "px";
        console.log("Kích thước hiện tại: ", currentFontSize);
    }
}