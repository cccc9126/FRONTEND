let day = new Date(prompt("Nhap ngay sinh cua ban"));
let day2 = new Date(prompt("Nhap ngay hien tai"));
let reusult = day2 - day;
document.write("So ngay chenh lech la: ", reusult/86400000);