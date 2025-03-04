let number = prompt("nhập số bất kì: ");
let count = -1;
for (let i = 0; i < number.length; i++){
    if (number[i] != number[number.length - i - 1]) {
        count = 0;
    }
}
if (count = 0) {
    document.write("Số bạn nhập không phải số đối xứng");
}
else {
    document.write("Số bạn nhập là số đối xứng");
}