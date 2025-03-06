let stringA = prompt("Nhập chuỗi bất kì: ");
let stringB = "";
stringA = stringA.toLowerCase();
stringB = stringA;
stringB = stringB.charAt(0).toUpperCase() + stringB.slice(1);
for (let i = 0; i < stringB.length; i++) {
    if (stringB.charAt(i) === " ") {
        stringB=stringB.slice(0,i+1)+stringB.charAt(i+1).toUpperCase()+stringB.slice(i+2);
    }
}
document.write(stringB);

