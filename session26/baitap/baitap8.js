function searchPrime(num) {
  if (num > 1) {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        count++;
      }
    }
      if (count == 0) {
          if (num % 2 == 1) {
              return num;
          }
    }
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];
searchPrime(arr);
let array = arr.filter((num) => searchPrime(num));
console.log(array);
