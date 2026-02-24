const player_names = [
    "Messi",
    "Ronaldo",
    "Neymar",
    "De Bruyne",
    "Kante",
    "Van Dijk",
    "Alisson"
];

const get_upper_names = (list) => {
    const new_list = list.map((name) => {
        return name.toUpperCase();
    });
    return new_list;
};

const result = get_upper_names(player_names);
console.log(result);