let students = ["Na", "Hiển", "Minh", "Đức"];

// let flag = 1;
// for (let i = 0; i < students.length; i ++) {
//     if (students[i] == "Trang") {
//         flag = 0;
//         break;
//     }
// }
// if (flag == 1) {
//     //console.log("Khong co");
// } else {
//     //console.log("có");
// }

result = students.indexOf("Đức");
if (result != 1) {
    console.log("Có");
} else {
    console.log("Không");
}

console.log("Cắt sao chép minh đức", students.slice(1, 2));

let courses = ["HTML", "CSS", "JS"];
courses.reverse();
console.log("course", courses.join(" "));

let fullname = "lê minh thu";
console.log("mảng mới: ", fullname.split("_"));





