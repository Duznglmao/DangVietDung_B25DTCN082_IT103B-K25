let numbers = [4,7,8,9,11,3];
// acumulator: biến tích lũy
let result = numbers.reduce((acc, currentValue) => {
    return acc + currentValue;
},0)
console.log(result);