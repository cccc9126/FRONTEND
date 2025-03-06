
let month = +prompt("Nhập tháng: ");
if (month >= 1 && month <= 3) {
    document.write("Mùa xuân");
}
else if (month >= 4 && month <= 6) {
    document.write("Mùa hạ");
}
else if (month >= 7 && month <= 9) {
    document.write("Mùa thu");
}
else if (month >= 10 && month <= 12) {
    document.write("Mùa đông");
}
else {
    document.write("Tháng không hợp lệ");
}   