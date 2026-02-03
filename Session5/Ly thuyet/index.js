let numbers = [1, 5, 9, 4];
let students = ["minh", "thu", "lan", "hồng"]; 
students.splice(2, 0, "phương");
students.splice(3, 1, "hoa");
console.log(students);
console.log(students[2]);
console.log("Số lượng phần tử trong mảng students", students.length);

let scores = [];
scores.push(5);
scores.push(8); //[5, 8]
scores.unshift(6); //[6, 5, 8] ==> [6, 5, 7, 8];
scores.splice(2, 0, 7);
console.log("mảng scores",scores)

let courses = ["JS", "HTML", "Python", "CSS"];
// courses[1] = "C++";
// courses.splice(2, 1, "Java");
courses.splice(1, 1);
for (let i = 0; i < courses.length; i++) {
    console.log("Các khóa học", courses[i]);
}

