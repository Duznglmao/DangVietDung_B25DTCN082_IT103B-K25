// for (let i = 0; i <= 100; i++) {
//     console.log("Số tờ phát được là: ", i);
// }

// for (let i = 1; i < 3; i++) {
//     for(let j = 1; j < 4; j++) {
//         console.log("j", j);
//     }
// }

for (let i = 1; i <= 10; i++) {
    document.write(`<p style="color: red;">Bảng cửu chương ${i}</p>`);
    for (let j = 1; j <= 10; j++) {
        document.write(`${i} X ${j} = ${i * j} <br>`);
    }
}

