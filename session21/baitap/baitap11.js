let date = +prompt("Nhập ngày sinh:");
let month = +prompt("Nhập tháng sinh:");

if (month < 1 || month > 12 || date < 1 || date > 31) {
    document.write("Ngày hoặc tháng không hợp lệ!");
} else {
    switch (month) {
        case 1:
            document.write(date <= 19 ? "Ma Kết" : "Bảo Bình");
            break;
        case 2:
            if (date > 29) {
                document.write("Tháng 2 chỉ có tối đa 29 ngày!");
            } else {
                document.write(date <= 18 ? "Bảo Bình" : "Song Ngư");
            }
            break;
        case 3:
            document.write(date <= 20 ? "Song Ngư" : "Bạch Dương");
            break;
        case 4:
            document.write(date <= 19 ? "Bạch Dương" : "Kim Ngưu");
            break;
        case 5:
            document.write(date <= 20 ? "Kim Ngưu" : "Song Tử");
            break;
        case 6:
            document.write(date <= 20 ? "Song Tử" : "Cự Giải");
            break;
        case 7:
            document.write(date <= 22 ? "Cự Giải" : "Sư Tử");
            break;
        case 8:
            document.write(date <= 22 ? "Sư Tử" : "Xử Nữ");
            break;
        case 9:
            document.write(date <= 22 ? "Xử Nữ" : "Thiên Bình");
            break;
        case 10:
            document.write(date <= 22 ? "Thiên Bình" : "Bọ Cạp");
            break;
        case 11:
            document.write(date <= 21 ? "Bọ Cạp" : "Nhân Mã");
            break;
        case 12:
            document.write(date <= 21 ? "Nhân Mã" : "Ma Kết");
            break;
        default:
            document.write("Tháng không hợp lệ!");
            break;
    }
}
