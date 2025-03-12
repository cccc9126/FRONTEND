let arr = [
  "john.doe@gmail.com",
  "inval idemail.com",
  "hello@domain.net",
  "space@out.com",
];
for (let i = 0; i < 4; i++){
    let count = 0;
    let special=0
    for (let j = 0; j < arr[i].length; j++){
        if (arr[i][j] == " ") {
            count++
        } 
        if (arr[i][j] == "@") {
            special++;
        }
    }
    if (count === 0 &&special===1) {
      console.log(arr[i]);
    }
}
