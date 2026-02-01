let password;
let count = 0;
while (password != "12345") {
    password = prompt("Mời nhập password");
    count++;
    if(count >= 3) {
        break;
    }
}

let i = 1;
while(1<10) {
    console.log(i);
    i++;
}