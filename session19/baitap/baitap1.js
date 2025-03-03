let month = prompt("Nhập tháng: ");
if (month%1==0 && month>0 && month<13) {
    if(month==1||month==3||month==5||month==7||month==8||month==10||month==12) {
        document.write("Tháng " + month + " có 31 ngày");
    }
    else if(month==4||month==6||month==9||month==11) {
        document.write("Tháng " + month + " có 30 ngày");
    }
    else {
        document.write("Tháng " + month + " có 28 hoặc 29 ngày");
    }

} else {
    document.write("Tháng không hợp lệ");
}