function pass(password) {
    let numCount = 0;
    let wordCount = 0;
    let WordCount = 0;
    password = password.split("");
   
    for (let i = 0; i < password.length; i++){
        if (password[i] > "0" && password[i] < "9") {
            numCount++;
        }
         
        if (password[i] >= "a" && password[i] <= "z") {
            wordCount++;
        }
        if (password[i] >= "A" && password[i] <= "Z") {
            WordCount++
        }
        
    }
     console.log(wordCount);
    if (numCount + wordCount + WordCount >= 8) {
        if (numCount > 0 && wordCount > 0 && WordCount > 0) {
            console.log("password manh");
        } else {
            console.log("password yeu");
        }
    } else {
      console.log("password yeu");
    }
}
pass("Aaabc2134");
