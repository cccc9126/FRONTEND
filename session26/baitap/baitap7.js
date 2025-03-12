let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr1 = arr.map((num) => num *= num);
let arr2 = arr1.filter((num) => num %2==0);
console.log(arr2);
