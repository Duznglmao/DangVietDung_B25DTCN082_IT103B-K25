let numbers = [3, 8, 4, 13, 42];
let scores = [
    ["đức","c++",5],
    ["bình","c++",5],
    ["linh","c++",5],
]
// () => {}
let result = numbers.filter((value, index, arr) => {
    return value > 11;
})

console.log(result);

let result1 = scores.filter((value) => {
    return value[2] >= 10;
})
console.log(result1);