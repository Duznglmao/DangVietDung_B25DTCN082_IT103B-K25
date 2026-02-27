const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 }
];

function analyzeSalary(minYears, teamPlayers) {

    if (!Array.isArray(teamPlayers) || isNaN(minYears)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    const filteredPlayers = teamPlayers.filter(player => player.years >= minYears);

    if (filteredPlayers.length === 0) {
        const result = {
            totalSalary: 0,
            highestPaid: null,
            lowestPaid: null
        };

        console.log(result);
        return;
    }

    const totalSalary = filteredPlayers.reduce(
        (sum, player) => sum + player.salary, 0
    );

    const highestPaid = filteredPlayers.reduce(
        (max, player) => player.salary > max.salary ? player : max
    );

    const lowestPaid = filteredPlayers.reduce(
        (min, player) => player.salary < min.salary ? player : min
    );

    const result = {
        totalSalary: totalSalary,
        highestPaid: {
            name: highestPaid.name,
            years: highestPaid.years,
            salary: highestPaid.salary
        },
        lowestPaid: {
            name: lowestPaid.name,
            years: lowestPaid.years,
            salary: lowestPaid.salary
        }
    };

    console.log(result);
}

analyzeSalary(10, players);
analyzeSalary(30, players);