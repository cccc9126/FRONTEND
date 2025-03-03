let money;
let result;
let para = `1. Chuyển đổi USD sang VND
2. Chuyển đổi VND sang USD`;
alert(para);

let choice = prompt("Nhập lựa chọn của bạn:");
if (choice == 1) {
    money = prompt("Nhập số tiền USD:");
    result = money * 23000;
    document.write("Số tiền sau khi chuyển đổi: " + result + " VND");
}
else if (choice == 2) {
    money = prompt("Nhập số tiền VND:");
    result = money / 23000;
    document.write("Số tiền sau khi chuyển đổi: " + result + " USD");
}
else {

    document.write("Lựa chọn không hợp lệ");
}
