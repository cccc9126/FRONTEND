let str = prompt("Nhập chuỗi bất kì: ");
let search = prompt("Nhập chuỗi cần tìm: ");
let count = 0;
let lengthSearch = search.length;
for (let i = 0; i < str.length; i++) {
    if (str[i] == search[0]) {
        let temp = str.slice(i, i + lengthSearch);
        if (temp == search) {
            count++;
            break;
        }
    }
}
if (count == 0) {
    document.write("Chuỗi cần tìm không tồn tại");
}
else {
    document.write("Chuỗi cần tìm xuất tồn tại");
}