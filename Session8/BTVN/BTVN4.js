const players = [
    "Messi - Forward - 25",
    "Ronaldo - Forward - 30",
    "Neymar - Forward - 18",
    "De Bruyne - Midfielder - 8",
    "Kante - Midfielder - 2",
    "Van Dijk - Defender - 5",
    "Alisson - Goalkeeper - 0"
];

const get_reversed_names = (player_list) => {
    const name_list = player_list.map((item) => {
        const parts = item.split(" - ");
        return parts[0];
    });

    const reversed_list = name_list.reverse();
    return reversed_list;
};

const result = get_reversed_names(players);
console.log(result);