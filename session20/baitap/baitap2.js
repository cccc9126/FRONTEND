let number = +prompt("nhập số bất kì: ");
let result = 0;
if (number >= 0) {
    document.write("các số chua hết cho 5 từ 1 đến ", number, "là:");

    for (let i = 1; i <= number; i++){
        if (i % 5 == 0) {
            document.write(i," ");
        }
    }
}
else {
    document.write("Số bạn nhập không hợp lệ");
}