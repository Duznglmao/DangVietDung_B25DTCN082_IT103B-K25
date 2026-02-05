let n = parseInt(prompt("Nhập vào số lượng phần tử n:"));
let arr = [];

if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0"); 
} else if (n === 0) {
    console.log("Không phải dãy số fibonacci"); 
} else {
    for (let i = 0; i < n; i++) {
        arr[arr.length] = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    }

    let is_fibonacci = true;

    if (n >= 1 && (arr[0] !== 0 && arr[0] !== 1)) {
        is_fibonacci = false;
    }
    
    if (is_fibonacci && n >= 2) {
        if (arr[0] === 0 && arr[1] !== 1) {
            is_fibonacci = false;
        } else if (arr[0] === 1 && arr[1] !== 1) {
            is_fibonacci = false;
        }
    }

    if (is_fibonacci && n >= 3) {
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                is_fibonacci = false;
                break;
            }
        }
    }

    if (is_fibonacci) {
        console.log("Là dãy số fibonacci");
    } else {
        console.log("Không phải dãy số fibonacci");
    }
}