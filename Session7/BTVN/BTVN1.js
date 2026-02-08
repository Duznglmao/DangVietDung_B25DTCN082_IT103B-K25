let playerIds = [];
let playerPositions = [];

let positionNames = ["Thủ môn", "Hậu vệ", "Tiền vệ", "Tiền đạo"];

let numPlayers = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng ?"));

for (let i = 0; i < numPlayers; i++) {
    let id;
    let isDuplicate = true;

    while (isDuplicate) {
        id = prompt("Nhập mã cầu thủ " + (i + 1) + ":");
        isDuplicate = false;

        for (let j = 0; j < playerIds.length; j++) {
            if (playerIds[j] === id) {
                isDuplicate = true;
                alert("Mã cầu thủ đã tồn tại, vui lòng nhập lại!");
                break;
            }
        }
    }

    let posIndex = parseInt(prompt("Vị trí (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"));

    playerIds.push(id);
    playerPositions.push(positionNames[posIndex - 1]);
}

function printTeamRoster() {
    console.log("Đội bóng hiện tại (" + playerIds.length + " cầu thủ):");
    for (let i = 0; i < playerIds.length; i++) {
        console.log((i + 1) + ". " + playerIds[i] + " - " + playerPositions[i]);
    }
}

function findPlayersByPosition(position) {
    let indices = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            indices.push(i);
        }
    }
    return indices;
}

printTeamRoster();

let searchPos = parseInt(prompt("Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn, 2: Hậu vệ, 3: Tiền vệ, 4: Tiền đạo):"));
let searchName = positionNames[searchPos - 1];
let resultIndices = findPlayersByPosition(searchName);

console.log("Số cầu thủ ở vị trí " + searchName + ": " + resultIndices.length);
console.log("Các chỉ số cầu thủ ở vị trí " + searchName + ": " + resultIndices.join(", "));