let arr = [];

let max = arr[0];
let maxIndex = 0;
if (arr.length!=0) {
    for (let index in arr) {
        if (arr[index] > max) {
            max = arr[index];
            maxIndex = index;
        }
    }
    document.write(`so lớn nhất trong mảng là ${max} xuất hiện tại vị trí ${maxIndex}`);
}
else {
    document.write("không có phần tử trong mảng");
}

