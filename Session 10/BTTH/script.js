let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
    { id: 3, name: "Le Van C", goals: 0, position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0, position: "GK" }
];

function showSquad() {
    console.log("===== DANH SÁCH ĐỘI BÓNG =====");
    squad.forEach(player => {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
    });
}

function addPlayer() {
    let name = prompt("Nhập tên cầu thủ:");
    let goals = parseInt(prompt("Nhập số bàn thắng:"));
    let position = prompt("Nhập vị trí:");

    let newPlayer = {
        id: squad.length + 1,
        name: name,
        goals: goals,
        position: position
    };

    squad.push(newPlayer);
    alert("Đã thêm cầu thủ!");
}

function findPlayer() {
    let id = parseInt(prompt("Nhập ID cầu thủ cần tìm:"));

    let player = squad.find(p => p.id === id);

    if (player) {
        console.log("===== THÔNG TIN CẦU THỦ =====");
        console.log(player);
    } else {
        alert("Không tìm thấy!");
    }
}

function updateGoals() {
    let id = parseInt(prompt("Nhập ID cầu thủ vừa ghi bàn:"));

    let player = squad.find(p => p.id === id);

    if (player) {
        player.goals += 1;
        alert(`Đã cập nhật: ${player.name} hiện có ${player.goals} bàn thắng.`);
    } else {
        alert("Không tìm thấy!");
    }
}

function deletePlayer() {
    let id = parseInt(prompt("Nhập ID cầu thủ cần xóa:"));

    let index = squad.findIndex(p => p.id === id);

    if (index !== -1) {
        let removed = squad.splice(index, 1);
        alert(`Đã xóa cầu thủ: ${removed[0].name}`);
    } else {
        alert("Không tìm thấy!");
    }
}

let choice;

do {
    choice = parseInt(prompt(
        `--- FOOTBALL MANAGER PRO ---

1. Xem đội hình
2. Thêm cầu thủ
3. Tìm kiếm (theo ID)
4. Cập nhật bàn thắng
5. Xóa cầu thủ (Chuyển nhượng)
0. Thoát`));

    switch (choice) {
        case 1:
            showSquad();
            break;
        case 2:
            addPlayer();
            break;
        case 3:
            findPlayer();
            break;
        case 4:
            updateGoals();
            break;
        case 5:
            deletePlayer();
            break;
        case 0:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }

} while (choice !== 0);