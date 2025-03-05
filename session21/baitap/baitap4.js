let a = +prompt("nhap so thu nhat :");
let b = +prompt("nhap so thu hai: ");
let c = +prompt("nhap so thu ba: ");
let denta = b*b - 4 * a * c;
let x1=0, x2=0;
if (denta < 0) {
    document.write("phuong trinh vo nghiem");
}
else if (denta == 0) {
    x1 = x2 = (-b) / (2 * a);
    document.write("phuong trinh co nghiem kep la: "+ x1);
}
else if (denta > 0) {
    x1 = (-b + Math.sqrt(denta)) / (2 * a);
    x2 = (-b - Math.sqrt(denta)) / (2 * a);
    document.write("phuong trinh co 2 nghiem phan biet "+ x1+ " "+ x2);
}