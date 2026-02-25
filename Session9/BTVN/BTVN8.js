function max_from_digits(input_val) {
    if (isNaN(input_val)) {
        alert(`Dữ liệu không hợp lệ`);
        return;
    }

    let digit_arr = String(input_val).split("");

    digit_arr.sort(function (a, b) {
        return b - a;
    });

    let result = Number(digit_arr.join(""));

    alert(`Số lớn nhất tạo được: ${result}`);
}

max_from_digits(2941);
max_from_digits(3875);
max_from_digits("1h8t");