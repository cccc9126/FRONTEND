function even(arr) {
    let count = 0;
    let str = [];
    for (let index of arr) {
        if (index % 2 == 0) {
            str += index;
            count++;
        } if (index % 1 != 0) {
            console.log("du lieu khong hop le");
        }
    }
    if (count > 0) {
        console.log(str.split(""));
    } else if(count===0) {
        console.log("mang khong co so chan");
    }
    
    
}
let array = ["hehee"];
even(array);