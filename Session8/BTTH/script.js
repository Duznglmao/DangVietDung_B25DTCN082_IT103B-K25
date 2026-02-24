const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

const show_players = (player_list) => {
    console.log("--- DANH SÁCH CẦU THỦ ---");
    player_list.forEach(([name, goals, pos]) => {
        console.log(`${name} (${pos}): ${goals} bàn thắng`);
    });
};

const find_player = (player_list) => {
    const search_name = prompt("Nhập tên cầu thủ cần tìm:");
    const result = player_list.find(([name]) => name.toLowerCase() === search_name.toLowerCase());

    if (result) {
        console.log(`Tìm thấy: ${result[0]} - Vị trí: ${result[2]} - Ghi được: ${result[1]} bàn`);
    } else {
        console.log("Lỗi: Không tìm thấy cầu thủ này.");
    }
};

const filter_by_position = (player_list) => {
    const pos_to_filter = prompt("Nhập vị trí muốn lọc (FW/MF/DF/GK):").toUpperCase();
    const filtered_list = player_list.filter(([, , pos]) => pos === pos_to_filter);

    console.log(`=> KẾT QUẢ LỌC VỊ TRÍ ${pos_to_filter}:`);
    if (filtered_list.length > 0) {
        filtered_list.forEach(([name, goals]) => console.log(`- ${name} (${goals} bàn)`));
    } else {
        console.log("Không có cầu thủ nào ở vị trí này.");
    }
};

const total_goals_report = (player_list) => {
    const total = player_list.reduce((sum, [, goals]) => sum + goals, 0);
    console.log(`=> Tổng số bàn thắng hiện tại là: ${total} bàn`);
};

const check_performance = (player_list) => {
    const has_zero_goal = player_list.some(([, goals]) => goals === 0);

    if (has_zero_goal) {
        console.log("=> Có cầu thủ chưa ghi bàn.");
    } else {
        console.log("=> Tất cả cầu thủ đều đã ghi bàn.");
    }
};

let menu =
    "--- FOOTBALL ANALYTICS MENU ---\n" +
    "1. Xem danh sách\n" +
    "2. Tìm kiếm\n" +
    "3. Lọc vị trí\n" +
    "4. Tổng bàn thắng\n" +
    "5. Kiểm tra hiệu suất\n" +
    "0. Thoát\n";

let start_app = () => {
    let choice;
    do {
        choice = Number(prompt(menu));
        switch (choice) {
            case 1:
                show_players(squad);
                break;
            case 2:
                find_player(squad);
                break;
            case 3:
                filter_by_position(squad);
                break;
            case 4:
                total_goals_report(squad);
                break;
            case 5:
                check_performance(squad);
                break;
            case 0:
                console.log("Hẹn gặp lại!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 0);
};

start_app();