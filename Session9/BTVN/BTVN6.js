function is_arith_seq(arr) {
    if (!Array.isArray(arr)) {
        alert(`Dữ liệu không hợp lệ`);
        return;
    }

    if (arr.length < 2) {
        alert(`TRUE`);
        return;
    }

    let diff = arr[1] - arr[0];

    let check = arr.every((val, idx) => {
        if (idx === 0) return true;
        return val - arr[idx - 1] === diff;
    });

    alert(`${check ? "TRUE" : "FALSE"}`);
}

is_arith_seq([2, 4, 6, 8]);
is_arith_seq([3, 6, 9, 12, 14]);
is_arith_seq("abc");