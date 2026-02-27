const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35
};
function addPerformanceScore(player) {
    const performance = (player.goals + player.assists) / player.matchesPlayed;

    player.performancePerMatch = Number(performance.toFixed(2));
    player.isKeyPlayer = player.performancePerMatch >= 1.0;

    console.log(`{
    name: "${player.name}",
    position: "${player.position}",
    goals: ${player.goals},
    assists: ${player.assists},
    matchesPlayed: ${player.matchesPlayed},
    performancePerMatch: ${player.performancePerMatch},
    isKeyPlayer: ${player.isKeyPlayer}
}`);
}

addPerformanceScore(player);