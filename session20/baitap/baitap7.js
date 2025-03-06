let number = +prompt("Nhap so bat ki: ");
if (number < 1) {
    document.write("Do dai chuoi khong hop le");

}
else {
    if (number == 2) {
        document.write("0,1");
    }
    else if (number > 2) {
        document.write("0 ");
        let i = 0;
        let j = 1;
        let result=0;
        let temp;
       do {
    
            result = i + j;
            document.write(result," ");
            temp = result;
            j = i;
            i = temp;
            
       } while ((i+j) < number)
    }
}