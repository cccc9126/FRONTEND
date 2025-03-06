let number;
let countLe=0;
let countChan=0;
for (let i = 0; i < 5; i++){
    number = +prompt("nhap mot so bat ki");
    number % 2 ? countLe++ : countChan++;
}
document.write("tong so luong so le la: " + countLe);
document.write("tong so luong so chan la: " + countChan);