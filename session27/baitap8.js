function maxNumber(number) {
    let count = 0;
    for (let i = 0; i < number.length; i++){
        if (Number(number[i]) % 1 != 0) {
            count++;
        }
    }
    if (count === 0) {
        console.log(number.split("").sort((a, b) => b - a).join(""));
    }
}
let case1 = "17101"
let case2 = "4718";
let case3 = "3j5g";
maxNumber(case1);
maxNumber(case2);
maxNumber(case3);
