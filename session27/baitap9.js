function sortEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) % 1 != 0) {
        count++;
      }
    }
    if (count === 0) {
        let even = arr.filter((n) => n % 2 == 0);
        even = even.sort((a, b) => a - b);
        console.log(even);
        let Count = 0;
        for (let i = 0; i < arr.length; i++){
            if (arr[i] % 2 == 0) {
                arr[i] = even[Count];
                Count++;
            }
        }
        console.log(arr);
    }
    
    
}
let case1 = [5, 8, 6, 3, 4, 2, 7];
let case2 = [5, 9, 6, 4, 1, 8, 3];
let case3 = "abc";
sortEven(case1);
sortEven(case2);
sortEven(case3);
