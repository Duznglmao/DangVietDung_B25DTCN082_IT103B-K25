let n = parseInt(prompt("Nhập vào số lượng phần tử n:")); //
let arr = [];

if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0"); //
} else if (n === 0) {
    console.log("Mảng không có phần tử nào"); //
} else {
    for (let i = 0; i < n; i++) {
        arr[arr.length] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    }

    if (arr.length < 2) {
        console.log("Mảng phải có ít nhất 2 phần tử");
    } else {
        let max_value = arr[0];
        let second_max = null; 

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max_value) {
                second_max = max_value;
                max_value = arr[i];
            } else if (arr[i] < max_value) {
                if (second_max === null || arr[i] > second_max) {
                    second_max = arr[i];
                }
            }
        }

        if (second_max === null) {
            console.log("Không có số lớn thứ hai (tất cả các số bằng nhau)");
        } else {
            console.log(second_max); //
        }
    }
}