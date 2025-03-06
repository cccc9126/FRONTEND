let arr = [1, 4, 7, 8, 3, 6];
let number = +prompt("nhap mot so de kiem tra : ");
let count = 0;
for (let index in arr) {
    number == arr[index]?count++:count;
    
}
count == 0 ? console.log("sai oi") : console.log("bingo");
