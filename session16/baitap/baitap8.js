let numberA = +prompt("Nhập số thứ nhất :");
let numberB = +prompt("Nhập số thứ hai :");
let numberC = +prompt("Nhập số thứ ba :");
let max = numberA;
if (max < numberB){
    max = numberB;
}
if (max < numberC){
    max = numberC;
}
document.write("Số lớn nhất là: ", max);