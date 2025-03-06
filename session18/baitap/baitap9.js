
let hour = prompt("Nhap gio : ");
let minute = prompt("Nhap phut : ");
let second = prompt("Nhap giay : ");
let result = hour >= 12 ? "PM" : "AM";

if (hour >= 12) {
    result = "PM";
}
else {
    result = "AM";
}
document.write("Bay gio la " + hour + " gio " + minute + " phut " + second + " giay " + result);