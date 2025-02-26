let firstNumber = +prompt("Nhập số thứ nhất: ");
let secondNumber = +prompt("Nhập số thứ hai: ");
Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber);
document.write(Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber));