const players = [
    "Messi - Forward - 25 - 15 - 34",
    "Ronaldo - Forward - 30 - 10 - 38",
    "Neymar - Forward - 18 - 20 - 32",
    "De Bruyne - Midfielder - 8 - 25 - 35",
    "Kante - Midfielder - 2 - 5 - 36",
    "Van Dijk - Defender - 5 - 3 - 33",
    "Alisson - Goalkeeper - 0 - 1 - 37",
];

const report_by_position = (player_list, min_goals = 3) => {
    const filtered = player_list.filter((item) => {
        const goals = parseInt(item.split(" - ")[2]);
        return goals >= min_goals;
    });

    const positions = ["Forward", "Midfielder", "Defender", "Goalkeeper"];
    let total_goals_team = 0;

    console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ");

    positions.forEach((pos) => {
        const group = filtered.filter((item) => {
            return item.split(" - ")[1] === pos;
        });

        if (group.length === 0) {
            return;
        }

        let count = group.length;

        let goals = group.reduce((sum, item) => {
            return sum + parseInt(item.split(" - ")[2]);
        }, 0);

        let assists = group.reduce((sum, item) => {
            return sum + parseInt(item.split(" - ")[3]);
        }, 0);

        let matches = group.reduce((sum, item) => {
            return sum + parseInt(item.split(" - ")[4]);
        }, 0);

        const performance_per_match = ((goals + assists) / matches).toFixed(2);

        console.log(`${pos}:`);
        console.log(`- Số cầu thủ: ${count}`);
        console.log(`- Tổng bàn thắng: ${goals}`);
        console.log(`- Tổng kiến tạo: ${assists}`);
        console.log(`- Tổng số trận: ${matches}`);
        console.log(`- Trung bình hiệu suất/trận: ${performance_per_match}`);
        console.log("");

        total_goals_team += goals;
    });

    console.log("--------------------------");
    console.log(`Tổng bàn thắng toàn đội: ${total_goals_team}`);
};

report_by_position(players);