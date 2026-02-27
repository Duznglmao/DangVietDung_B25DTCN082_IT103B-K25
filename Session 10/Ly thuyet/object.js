let email = "thinh@gmail.com";
let fullName = "le phuoc thinh";
let password = "";
let student = {
    name: "thu",
    email: "thu@gmail.com",
}; //khởi tạo đối tượng sinh viên;
let product = {
    id: 1,
    price: 5000,
    image: "",
    name: "",
    sayHello: function name(param) {
        console.log("Xin chào");
    }
};

let book = {};
book.id = "001";
book.author = "Nguyễn Nhật Ánh";
book["bookLame"] = "skibidi";

for (const key in book) {
    console.log("key", book[key]);
}

delete book.bookLame;

book.bookName = "Skibididopdop";
console.log("book:", book);

let a = 5;
let b = a; //giá giá trị
a = 11;
console.log(b); //hai địa chỉ ô nhớ khác nhau (kiểu dữ liệu đơn giản_kiểu tham trị)

let objA = {
    email: "A",
};
let objB = objA; //gán địa chỉ
objA.email = "B";
console.log(objB); //(kiểu tham chiếu), A và B cùng địa chỉ ô nhớ
