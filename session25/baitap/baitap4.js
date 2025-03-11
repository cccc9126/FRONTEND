function prime(a) {
    let count = 0;
    if (a % 1 != 0) {
        console.log("du lieu khong hop le");
        return (0);
    }
    for (let i = 2; i <= Math.sqrt(a);i++){
        a % i == 0 ? count++ : count;
    }
    if (count == 0) {
        console.log("la so nguyen to")
    }
    if (count > 0) {
        console.log("khong la so nguyen to");

    }
}
prime(4);