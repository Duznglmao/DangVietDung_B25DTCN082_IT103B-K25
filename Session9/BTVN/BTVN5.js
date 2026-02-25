function split_array(arr, size) {
    if (!Array.isArray(arr) || typeof size !== "number") {
        alert(`Dữ liệu không hợp lệ`);
        return;
    }

    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    let output = `Kết quả:\n`;

    for (let i = 0; i < result.length; i++) {
        output += `[${result[i]}]`;

        if (i !== result.length - 1) {
            output += `, `;
        }
    }

    alert(output);
}

let input_data = [1, 2, 3, 4, 5, 6, 7, 8];
let input_size = Number(prompt(`Nhập kích thước mảng con:`));

split_array(input_data, input_size);