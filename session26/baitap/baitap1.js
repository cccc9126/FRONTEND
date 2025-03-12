let arr = new Array(10); 
let array;

for (let i = 0; i < 10; i++) {
    arr[i] = +prompt(`Nhap phan tu ${i} cho mang`); 
}

array = arr.filter((num) => num >= 10); 
console.log(array);
