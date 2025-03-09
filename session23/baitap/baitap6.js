let n = +prompt("Nhập số phần tử trong chuỗi: ");
if (n > 0) {
    let arr = new Array(n);

    // Nhập các phần tử của mảng
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Nhập phần tử cho mảng: ");
    }

    let result = []; // Mảng lưu các phần tử truthy

    // Duyệt qua các phần tử của mảng và lọc phần tử falsy
    for (let i = 0; i < arr.length; i++) {
        // Chuyển giá trị nhập vào thành kiểu dữ liệu thực tế
        let value = arr[i].trim(); // Loại bỏ khoảng trắng dư thừa
        if (value && value !== "0" && value !== "false" && value !== "null" && value !== "undefined") {
            result.push(value); // Thêm phần tử truthy vào mảng result
        }
    }

    // Hiển thị mảng kết quả
    document.write("Mảng sau khi loại bỏ các phần tử falsy: " + result);
}
else if (n == 0) {
    document.write("Không có ký tự số");
}
else {
    document.write("Độ dài không hợp lệ");
}
