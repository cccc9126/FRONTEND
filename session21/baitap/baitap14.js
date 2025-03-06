let dai = +prompt("nhap chieu dai: ");
let rong = +prompt("nhap chieu rong: ");
for (let i = 0; i < dai; i++){
    for (let j = 0; j < rong; j++){
        if (i == 0 || j == 0 || i == (dai - 1) || j == (rong - 1)) {
            document.write("*");
        }
        else {
            document.write("&nbsp;&nbsp;");

        }
    }
    document.write("<br>")
}