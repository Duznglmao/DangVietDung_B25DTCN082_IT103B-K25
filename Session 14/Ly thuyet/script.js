/* 
Các cách clone object trong js:
1. Clone nông
    +Operator: spread
2. Clone sâu

Các cách tạo object
const obj = {};
const obj = new.Object();

Object.keys(name) -> trả vè mảng chứa các key

*/
let student = {
    name: "skibidi",
    email: "skibidi@gmail.com",
    say: () => {
        console.log("dop dop yes yes");
    }
}
student.say();
document.write("Oh shietttt");

document.getElementById("skibidi"); // Trả về duy nhất đối tượng
document.getElementsByClassName("dop dop"); //Trả về HTML collection (gần giống mảng)

let getElementsByClassName = document.getElementsByClassName("dop dop");
console.log(getElementsByClassName[0]);

let getElementsByTagName = document.getElementsByTagName("p");
console.log(getElementsByTagName);

function login() {
    console.log("ok");
}
function check_input() {
    console.log(111);
}

function change_color() {
    let elementH1 = document.getElementById("skibidi");
    elementH1.style.color = "red";
}

function change_text() {
    alert("Đã gọi hàm!");
    let elementP = document.getElementById("vanban");
    elementP.innerText("Olalala");
}

