let arr = [3, 1, 5, 35, 84, 12, 5, 4];
let count = 0;
for (let num of arr) {
    num >= 10 ? (count++, document.write(num," ")) : count;
}

count > 0 ? document.write(``) : document.write(`không có số lớn hơn 10`);