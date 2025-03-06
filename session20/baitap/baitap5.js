let number = +prompt("Nhập số bất kì : ");
let mu = +prompt("Nhập số mũ");
let result =number;
for (let i = 0; i < mu-1; i++){
    result *= number;
}
document.write(result);