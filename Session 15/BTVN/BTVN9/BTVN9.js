function changeProgress(step) {
    let progressBar = document.getElementById("myProgressBar");
    let percentText = document.getElementById("percentText");

    let newValue = progressBar.value + step;

    if (newValue >= 0 && newValue <= 100) {
        progressBar.value = newValue;
        percentText.innerText = `Tiến độ: ${newValue}%`;
    }
}