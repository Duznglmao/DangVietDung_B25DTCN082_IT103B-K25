let login_attempts = 0;
let is_authenticated = false;

while (login_attempts < 3) {
    let password_input = prompt("Vui lòng nhập mật khẩu hệ thống:");
    
    if (password_input === "admin123") {
        alert("Đăng nhập thành công!");
        is_authenticated = true;
        break; 
    } else {
        login_attempts++;
        alert("Sai mật khẩu! Bạn còn " + (3 - login_attempts) + " lần thử.");
    }
}

if (is_authenticated === false) {
    document.write("Hệ thống bị khóa do nhập sai quá 3 lần!");
} else {
    while (true) {
        let menu_choice = prompt(
            "--- QUẢN LÝ THƯ VIỆN ---\n" +
            "1. Nhập lô sách mới\n" +
            "2. Vẽ sơ đồ kệ sách\n" +
            "3. Thoát\n" +
            "Chọn chức năng (1-3):"
        );

        if (menu_choice === "1") {
            let total_books = parseInt(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
            let total_price = 0;

            for (let i = 1; i <= total_books; i++) {
                let price = parseFloat(prompt("Nhập giá tiền cho cuốn sách thứ " + i + ":"));

                if (price <= 0 || isNaN(price)) {
                    alert("Giá tiền không hợp lệ! Bỏ qua cuốn sách này.");
                    continue; 
                }

                total_price = total_price + price;
            }
            alert("Tổng giá trị nhập kho đợt này là: " + total_price);
        } 

        else if (menu_choice === "2") {
            document.write("SƠ ĐỒ VỊ TRÍ KỆ SÁCH:");
            
            for (let khu = 1; khu <= 3; khu++) {
                for (let ke = 1; ke <= 5; ke++) {
                    
                    if (khu === 2 && ke === 3) {
                        document.write("Khu vực " + khu + " - Kệ " + ke + " (Đang sửa chữa)<br>");
                        continue;
                    }

                    document.write("Khu vực " + khu + " - Kệ " + ke + "<br>");
                }
                document.write("<hr>"); 
            }
            alert("Đã vẽ sơ đồ kệ sách");
        } 

        else if (menu_choice === "3" || menu_choice === null) {
            alert("Hẹn gặp lại!");
            break; 
        } 
        
        else {
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
        }
    }
}