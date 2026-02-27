const teamHistory = [
    {
        name: "Messi",
        position: "Forward",
        nationality: "Argentina",
        seasons: {
            "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
            "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
            "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 }
        }
    },
    {
        name: "Ronaldo",
        position: "Forward",
        nationality: "Portugal",
        seasons: {
            "2022-2023": { matches: 38, goals: 28, assists: 5, yellowCards: 5 },
            "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
            "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 }
        }
    }
];

const generatePlayerSeasonReport = (playerName, teamHistory) => {
    const player = teamHistory.find(p => p.name === playerName);

    if (!player) {
        console.log("Không tìm thấy cầu thủ");
        return;
    }

    let totalMatches = 0;
    let totalGoals = 0;
    let totalAssists = 0;
    let totalCards = 0;

    let bestSeasonName = "";
    let bestSeasonData = null;

    for (let seasonName in player.seasons) {
        const s = player.seasons[seasonName]; 

        totalMatches += s.matches;
        totalGoals += s.goals;
        totalAssists += s.assists;
        totalCards += s.yellowCards;

        if (!bestSeasonData || 
            s.goals > bestSeasonData.goals || 
            (s.goals === bestSeasonData.goals && s.assists > bestSeasonData.assists)) {
            
            bestSeasonName = seasonName;
            bestSeasonData = s;
        }
    }

    const avgGoals = (totalGoals / totalMatches).toFixed(2);
    const avgAssists = (totalAssists / totalMatches).toFixed(2);

    const report = {
        name: player.name,
        position: player.position,
        nationality: player.nationality,
        careerStats: {
            totalMatches,
            totalGoals,
            totalAssists,
            totalYellowCards: totalCards,
            averageGoalsPerMatch: Number(avgGoals),
            averageAssistsPerMatch: Number(avgAssists),
            bestSeason: {
                season: bestSeasonName,
                goals: bestSeasonData.goals,
                assists: bestSeasonData.assists
            }
        }
    };

    console.log(report);
};

generatePlayerSeasonReport("Messi", teamHistory);