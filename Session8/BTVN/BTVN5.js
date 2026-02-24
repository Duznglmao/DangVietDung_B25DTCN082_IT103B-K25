const players = [
    "Messi - Forward - 25 - 15",
    "Ronaldo - Forward - 30 - 10",
    "Neymar - Forward - 18 - 20",
    "De Bruyne - Midfielder - 8 - 25",
    "Kante - Midfielder - 2 - 5",
    "Van Dijk - Defender - 5 - 3",
    "Alisson - Goalkeeper - 0 - 1"
];

const report_top_performers = (min_performance, player_list) => {
    let total_score = 0;

    player_list.forEach((item) => {
        const parts = item.split(" - ");
        const name = parts[0];
        const goals = parseInt(parts[2]);
        const assists = parseInt(parts[3]);

        const performance = goals + assists;

        if (performance >= min_performance) {
            console.log(name + ": " + performance);

            total_score = total_score + performance;
        }
    });

    console.log("Tổng hiệu suất: " + total_score);
    return total_score;
};

console.log(report_top_performers(30, players));
console.log(report_top_performers(20, players));
console.log(report_top_performers(50, players));
