let n = parseInt(prompt("Nhập vào số lượng phần tử n:"));
let my_arr = [];

if (isNaN(n) || n <= 0) {
    console.log("Số lượng phần tử không hợp lệ!");
} else {
    for (let i = 0; i < n; i++) {
        let input_value = prompt("Nhập phần tử thứ " + (i + 1) + ":");
        let num = parseInt(input_value);

        if (isNaN(num)) {
            alert("Vui lòng nhập một số nguyên hợp lệ!");
            i--; 
        } else {
            my_arr[my_arr.length] = num;
        }
    }

    let count_neg = 0;
    for (let i = 0; i < my_arr.length; i++) {
        if (my_arr[i] < 0) {
            count_neg = count_neg + 1;
        }
    }

    console.log("Mảng đã nhập:", my_arr);
    console.log("Số lượng số nguyên âm trong mảng là: " + count_neg);
}