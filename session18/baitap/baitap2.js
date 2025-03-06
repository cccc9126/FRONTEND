let number1 = prompt("Nhap so diem mon toan : ");
let number2 = prompt("Nhap so diem mon van : ");
let number3 = prompt("Nhap so diem mon anh : ");
let result = (parseInt(number1) + parseInt(number2) + parseInt(number3)) / 3;
if (result < 5) {
    document.write("yeu");

}
else if (result < 6.5) {
    document.write("trung binh");
}
else if (result < 8) {
    document.write("kha");
}
else if (result < 10) {
    document.write("xuat sac");
}
