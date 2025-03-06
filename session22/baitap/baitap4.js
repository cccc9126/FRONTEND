let number = prompt("nhap day so bat ki: ");
let arr = number.split("");
let max = arr[0];
for (let index in arr) {
    if (arr[index] > max) {
        max = arr[index];
    }
}
document.write(max);