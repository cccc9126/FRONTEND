let number = +prompt("Nhap so bat ki: ");
for (let i = 1; i <= number; i++){
    if (number % i == 0) {
        document.write(i+" ");
    }
}