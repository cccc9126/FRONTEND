let arr = [1, 4, 7, 8, 3, 6];
let number = +prompt("nhap mot so de kiem tra : ");
let count = 0;
for (let index in arr) {
    if (number == arr[index]) {
        count++;
    }
}
if (count == 0) {
    console.log("sai oi");
}
else {
    console.log("bingo");
}