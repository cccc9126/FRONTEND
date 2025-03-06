let number = +prompt("nhap so bat ki : ");
let count = 0;
let COUNT = 0;

let i = 2;
while (COUNT < number) {
    count = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            count++;
            break;
        }
    }
    if (count == 0) {
        COUNT++;
        document.write(i+" ");
    }
    i++;
}
