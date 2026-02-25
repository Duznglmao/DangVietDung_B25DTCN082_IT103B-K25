function find_missing(arr) {
    if (!Array.isArray(arr)) {
        alert(`Dữ liệu không hợp lệ`);
        return;
    }

    arr.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            alert(`Số bị thiếu: ${arr[i] + 1}`);
            return;
        }
    }

    alert(`Không có số bị thiếu`);
}

find_missing([1, 2, 3, 5]);
find_missing([1, 2, 4, 5]);
find_missing("abc");