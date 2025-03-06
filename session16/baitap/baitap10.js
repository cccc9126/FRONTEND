let firstNumber = +prompt("Nhập số thứ nhất: ");
let secondNumber = +prompt("Nhập số thứ hai: ");
document.write(Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber));