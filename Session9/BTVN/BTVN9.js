function sort_even_keep_odd(arr) {
    if (!Array.isArray(arr)) {
        alert(`Dữ liệu không hợp lệ`);
        return;
    }

    let even_arr = arr.filter(function (val) {
        return val % 2 === 0;
    });

    even_arr.sort(function (a, b) {
        return a - b;
    });

    let even_idx = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(even_arr[even_idx]);
            even_idx++;
        } else {
            result.push(arr[i]);
        }
    }

    alert(`Kết quả: [${result}]`);
}

sort_even_keep_odd([5, 8, 6, 3, 4, 2, 7]);
sort_even_keep_odd([5, 9, 6, 4, 1, 8, 3]);
sort_even_keep_odd("abc");