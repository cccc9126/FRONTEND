let string = prompt("Nhập chuỗi bất kì:");
let count = 0;
for (let i = 0; i < string.length; i++){
    if (string.charAt(i) == " ") {
        count++;
    }
}
if (count == 0) {
    document.write("Chuỗi không có khoảng trắng");
}   
else {
    document.write("Chuỗi có khoảng trắng");
}