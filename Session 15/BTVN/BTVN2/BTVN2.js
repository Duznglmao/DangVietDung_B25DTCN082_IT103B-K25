let clickCount = 0;

function handleClick() {
    clickCount++;
    renderClickCount();
}

function renderClickCount() {
    let elementDisplay = document.getElementById("countDisplay");
    elementDisplay.innerText = clickCount;
}