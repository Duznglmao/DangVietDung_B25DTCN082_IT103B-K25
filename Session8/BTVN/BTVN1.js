const players = [
    "Messi - Forward",
    "Ronaldo - Forward",
    "Neymar - Forward",
    "De Bruyne - Midfielder",
    "Kante - Midfielder",
    "Van Dijk - Defender",
    "Alisson - Goalkeeper"
];

const display_players = (player_list) => {
    player_list.forEach((each_player) => {
        console.log(each_player);
    });
};

display_players(players);