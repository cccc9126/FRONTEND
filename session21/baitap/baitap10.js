let number = +prompt("nhap so so nguyen to ban muon");
let count = 0;
let a = 2;
while (count < number) {
    let Count = 0;
    for (let i = 2; i < a; i++){
        if (a % i == 0) {
            Count++;
            break;
        }
    }
    if (Count == 0) {
        document.write(a, " ");
        count++;
    }
    a++;
}