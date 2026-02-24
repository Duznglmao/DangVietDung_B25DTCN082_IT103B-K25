const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];

const filter_players_by_position = (position, player_list) => {
    const filtered_list = player_list.filter((player_string) => {
        return player_string.includes(position);
    });
    return filtered_list;
};

const midfielders = filter_players_by_position("Midfielder", players);
console.log(midfielders);

const forwards = filter_players_by_position("Forward", players);
console.log(forwards);