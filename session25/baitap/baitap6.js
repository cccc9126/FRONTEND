function doiXung(string) {
    let count = 0;
    for (let i = 0; i < string.length / 2; i++){
        if (string[i] != string[string.length - 1 - i]) {
            count++;
        }
    
    }
    if (count == 0) {
        console.log("doi xung");

    } else {
        console.log("khong doi xung");
    }
}
doiXung("hellolleh");