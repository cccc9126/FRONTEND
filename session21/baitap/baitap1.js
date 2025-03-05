let result=0;
let number;
for (let i = 0; i < 5; i++){
    number = +prompt("Nhap mot so");
    if (number % 2 == 0) {
        continue;

    }
    result = result + number;
}
document.write(result);