let my_arr = [];

for (let i = 0; i < 10; i++) {
    let input_value = prompt("Nhập số nguyên thứ " + (i + 1) + ":");
    let num = parseInt(input_value);

    if (isNaN(num)) {
        alert("Vui lòng nhập một số nguyên hợp lệ!");
        i--; 
    } else {
        my_arr[my_arr.length] = num;
    }
}

let has_greater_than_10 = false;
let result_str = "";

for (let i = 0; i < my_arr.length; i++) {
    if (my_arr[i] >= 10) {
        has_greater_than_10 = true;
        result_str = result_str + my_arr[i] + " ";
    }
}

if (has_greater_than_10 === true) {
    console.log(result_str.trim());
} else {
    console.log("Không có số nào lớn hơn hoặc bằng 10");
}