let money = +prompt("nhap so tien ban muon rut");
let count = 0;
let result = money;
let C500 = 0;
let C200 = 0;
let C100 = 0;
let C50 = 0;
let C20 = 0;
let C10 = 0;
let C5 = 0;
let C2 = 0;
let C1 = 0;



count = Math.floor((money / 500));
C500 = count;
if (count > 0) {
    document.write("500 : " + C500 + " to" + "<br>")
}
money = result - (500 * C500);
if (money > 0) {
    count = Math.floor((money / 200));
    C200 = count;
    if (count > 0) {
        document.write("200 : " + C200 + " to" + "<br>")
    }
    money = result - (500 * C500) - (200 * C200);
}
if (money > 0) {
    count = Math.floor((money / 100));
    C100 = count;
    if (count > 0) {
        document.write("100 : " + C100 + " to" + "<br>")
    }
    money = result - (500 * C500) - (200 * C200) - (100 * C100);
}
if (money > 0) {
    count = Math.floor((money / 50));
    C50 = count;
    if (count > 0) {
        document.write("50 : " + C50 + " to" + "<br>")
    }
    money = result - (500 * C500) - (200 * C200) - (100 * C100) - (50 * C50);
}
if (money > 0) {
    count = Math.floor((money / 20));
    C20 = count;
    if (count > 0) {
        document.write("20 : " + C20 + " to" + "<br>")
    }
    money = result - (500 * C500) - (200 * C200) - (100 * C100) - (50 * C50) - (20 * C20);
}
if (money > 0) {
    count = Math.floor((money / 10));
    C10 = count;
    if (count > 0) {
        document.write("10 : " + C10 + " to" + "<br>")
    }
    money = result - (500 * C500) - (200 * C200) - (100 * C100) - (50 * C50) - (20 * C20) - (10 * C10);
}
if (money > 0) {
    count = Math.floor((money / 5));
    C5 = count;
    if (count > 0) {
        document.write("5 : " + C5 + " to" + "<br>")
    }
    money = result - (500 * C500) - (200 * C200) - (100 * C100) - (50 * C50) - (20 * C20) - (10 * C10) - (5 * C5);
}
if (money > 0) {
    count = Math.floor((money / 2));
    C2 = count;
    if (count > 0) {
        document.write("2 : " + C2 + " to" + "<br>")
    }
    money = result - (500 * C500) - (200 * C200) - (100 * C100) - (50 * C50) - (20 * C20) - (10 * C10) - (5 * C5) - (2 * C2);
}
if (money > 0) {
    count = Math.floor((money / 1));
    C1 = count;
    if (count > 0) {
        document.write("2 : " + C1 + " to" + "<br>")
    }
    money = result - (500 * C500) - (200 * C200) - (100 * C100) - (50 * C50) - (20 * C20) - (10 * C10) - (5 * C5) - (2 * C2) - (1 * C1);
}
