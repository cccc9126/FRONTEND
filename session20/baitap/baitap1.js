let number = +prompt("nhập số bất kì: ");
let result = 0;
if (number >= 0) {
    for (let i = 0; i <= number; i++) {
        result += i;
    }
    document.write(result);
}
else {
    document.write("Số bạn nhập không hợp lệ");
}
