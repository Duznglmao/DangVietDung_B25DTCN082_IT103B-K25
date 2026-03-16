let fullName = localStorage.getItem("fullName");
console.log(fullName);

let products = JSON.parse(localStorage.getItem("products"));    
console.log(products);

localStorage.setItem("test", "test");
// localStorage.removeItem("test");
// localStorage.clear();



