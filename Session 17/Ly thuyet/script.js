let fullName = "Quách chubby";
localStorage.setItem("fullName", fullName);

let age = 18;
localStorage.setItem("age", JSON.stringify(age));

let students = ["Hiếu ", "Hiển ", "T.Dũng ", "Minh "];
localStorage.setItem("student", JSON.stringify(students));

let products = [
    {
        id: 1,
        name: "Sản phẩm 1"
    },
    {
        id: 2,
        name: "Sản phẩm 2"
    }
];
localStorage.setItem("products", JSON.stringify(products));



