const players = [
    { name: "Messi", position: "Forward", age: 36, goals: 25, assists: 15, matches: 34, yellowCards: 2 },
    { name: "Ronaldo", position: "Forward", age: 39, goals: 30, assists: 10, matches: 38, yellowCards: 4 },
    { name: "Neymar", position: "Forward", age: 32, goals: 18, assists: 20, matches: 35, yellowCards: 3 },
    { name: "De Bruyne", position: "Midfielder", age: 33, goals: 8, assists: 25, matches: 32, yellowCards: 1 },
    { name: "Kante", position: "Midfielder", age: 33, goals: 2, assists: 5, matches: 36, yellowCards: 2 },
    { name: "Van Dijk", position: "Defender", age: 33, goals: 7, assists: 3, matches: 37, yellowCards: 1 },
    { name: "Alisson", position: "Goalkeeper", age: 31, goals: 0, assists: 1, matches: 37, yellowCards: 0 }
];

function generateRankingReport(min_matches, players_list) {

    const ranked = players_list
        .map((p, idx) => {
            const performanceScore = ((p.goals + p.assists) / p.matches).toFixed(2);
            const efficiencyScore = (performanceScore - (p.yellowCards / p.matches) * 10).toFixed(2);

            const newPlayer = {};
            for (let key in p) {
                newPlayer[key] = p[key];
            }
            newPlayer.performanceScore = Number(performanceScore);
            newPlayer.efficiencyScore = Number(efficiencyScore);
            newPlayer.originalIndex = idx;

            return newPlayer;
        })
        .filter(p => p.matches >= min_matches)
        .sort((a, b) => {
            if (b.efficiencyScore !== a.efficiencyScore)
                return b.efficiencyScore - a.efficiencyScore;

            if (b.performanceScore !== a.performanceScore)
                return b.performanceScore - a.performanceScore;

            if (b.goals !== a.goals)
                return b.goals - a.goals;

            return a.originalIndex - b.originalIndex;
        });

    console.log(`XẾP HẠNG ĐỘI BÓNG (từ ${min_matches} matches trở lên)`);

    ranked.forEach((p, i) => {
        console.log(
            `${i + 1}. ${p.name} - Efficiency: ${p.efficiencyScore} | Performance: ${p.performanceScore} | Goals: ${p.goals}`
        );
    });

    console.log(``);
    console.log(`Tổng số cầu thủ xếp hạng: ${ranked.length}`);

    if (ranked.length > 0) {
        console.log(``);
        console.log(`Cầu thủ xuất sắc nhất: ${ranked[0].name}`);

        const top3 = ranked.slice(0, 3);
        const avgEff = (
            top3.reduce((sum, p) => sum + p.efficiencyScore, 0) / top3.length
        ).toFixed(2);

        console.log(``);
        console.log(`Trung bình efficiency top 3: ${avgEff}`);
    }
}

generateRankingReport(30, players);