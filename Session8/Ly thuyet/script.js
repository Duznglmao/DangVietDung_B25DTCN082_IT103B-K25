/* 
Bài 1:
1. Biến:
+ let, var, const
2. Kiểu dữ liệu:
chia 2 nhóm:
nhóm 1: nguyên thủy, đơn giản, primitive type, tham trị
+number, string, boolean, nan, null, undefined 
nhóm 2: phức tạp, reference type, tham chiếu
+array, function, object
3. Toán tử _ operator
+toán tử số học : +, -, *, /, %, **
+toán tử logic: &&, ||, 
+toán tử so sánh: >, <, >=, <=, !=, !==, ==, ===
+toán tử tăng giảm: ++a, a++
+toán tử ba ngôi ? :

Bài 2: Câu điều kiện & vòng lặp
condition:
+if/else
+if/else lồng
+if/else bậc thang
+switch/case

loop:
+for 
+while
+do while

Bài 3: Mảng
+cách khai báo mảng, sử dụng let,var,const tên mảng = [];
+thao tác với mảng: CRUD
    +C(create): push thêm vào cuối, unshift thêm vào đầu, splice thêm vào vị trí bất kì
    +R(read): for, for in, for of
    +U(update): _arr[index]=giá trị mới
    _splice(vị trí, số lượng phần tử muốn xóa. giá trị muốn thêm vào)
    +D(delete): xóa, pop xóa phần tử cuối, shift xóa đầu tử đầu
+các phương thức làm việc với mảng:
    +slice(start, end): cắt, sao chép ra mảng mới (ko truyền end từ đầu về sau);
    +concat(): gộp, nối mảng
    +reverse(): đảo ngược mảng
    +split(): chuyển string sang mảng
    +join(): chuyển mảng sang string
    +indexOf(): trả về vị trí, không có trả về -1
    +includes(): tìm kiếm phần tử, trả về true hoặc false
    +sort(): sắp xếp theo mảng mã

Bài 4: Hàm
+Là khối code có khả năng tái sử dụng
+1. Declaration function
    function name() {
    
    }
+2. Expression function
    const fn = function () {
    
    }
+3. Arrow function
    () => {}

_Tham số: phần định nghĩa trong hàm (Parameter)
_Đối số: khi gọi hàm truyền giá trị (Arguement)
+Phải gọi hàm thì hàm mới được thực thi
*/

// const sum = (a, b) => {
//     console.log(a+b);
// }
// sum(5,6);

// const sum = (a, b) => a + b // nếu viết như này thì mũi tên ở đây có tác dụng như return
// sum(5,6);

/*
Bài 5: Các phương thức làm việc với mảng 
_map, forEach, filter, reduce, find, findIndex, some, every,...
_Nếu dùng for có thể giải quyết hết tất cả bài toán về mảng
_HOF (Higher order function), một function bình thường muốn trở thành HOF cần phải thỏa mãn ít nhất 1 trong 2 điều kiện:
    +Hàm nhận hàm khác làm tham số
    +Hàm trả về một hàm khác
*/

function sayHello(){
    console.log("Xin chào");
    return function fn1 () {

    }
}

const fn = (call) => {
    call();
}

fn(sayHello);
//fn được gọi là HOF

let numbers = [5, 56, 55, 45, 16];
//lấy ra các phần tử lớn hơn 30
let result = [];
for (let i = 0; i <= number.length; i++) {
    if(numbers[i] > 30) result.push(number[i]);
}

//dùng filter
let result1 = numbers.filter((item) => item % 2 == 0);
let result2 = numbers.filter((item) => item > 30);
