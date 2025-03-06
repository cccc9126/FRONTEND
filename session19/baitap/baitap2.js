let string = prompt("Nhập chuỗi bất kì:");
let length = string.length;
let count = 0;
for(let i=0; i<length; i++){
    if (string.charAt(i) % 1 == 0 ) {
        count++;
    }
}
if(count==0){
    document.write("là chữ cái");
}
else{
    document.write("không phải là chữ cái");
}




