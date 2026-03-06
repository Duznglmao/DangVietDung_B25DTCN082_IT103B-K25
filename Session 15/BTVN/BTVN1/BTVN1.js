function changeBackgroundColor() {
    let hexCharacters = "0123456789ABCDEF";
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        randomColor += hexCharacters[randomIndex];
    }

    console.log("Mã màu mới là: ", randomColor);

    let elementBox = document.getElementById("displayBox");
    elementBox.style.backgroundColor = randomColor;
}