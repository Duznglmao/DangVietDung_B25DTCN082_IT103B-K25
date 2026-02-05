let my_arr = [];

for (let i = 0; i < 10; i++) {
    let input_value = prompt("Nhập phần tử thứ " + (i + 1) + ":");
    let num = parseInt(input_value);

    if (isNaN(num)) {
        alert("Vui lòng nhập số nguyên!");
        i--; 
    } else {
        my_arr[my_arr.length] = num;
    }
}

if (my_arr.length === 0) {
    console.log("Mảng rỗng");
} else {
    let max_value = my_arr[0];
    let max_indices = "0";

    for (let i = 1; i < my_arr.length; i++) {
        if (my_arr[i] > max_value) {
            max_value = my_arr[i];
            max_indices = i + ""; 
        } else if (my_arr[i] === max_value) {
            max_indices = max_indices + ", " + i;
        }
    }

    console.log("Số lớn nhất: " + max_value);
    console.log("Vị trí xuất hiện: " + max_indices);
}