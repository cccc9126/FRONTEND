let string = "";
let arr = [];
while (true) {
  console.log("\n1. Nhập chuỗi kí tự");
  console.log("2. Hiển thị chuỗi kí tự");
  console.log("3. Tìm tất cả các từ con trùng lặp và số lần xuất hiện");
  console.log("4. Tìm từ dài nhất và ngắn nhất");
  console.log("5. Tìm ký tự xuất hiện nhiều nhất");
  console.log("6. Chuyển đổi sang snake_case");
  console.log("7. Thoát");

  let choice = prompt("Nhập lựa chọn của bạn: ");

  switch (choice) {
    case "1":
      string = prompt("Nhập chuỗi: ");
      break;
    case "2":
      console.log("Chuỗi hiện tại:", string);
      break;
    case "3":
      arr = string.split(" ");
      for (let word of arr) {
        let count = 0;
        for (let wordCount of arr) {
          if (word == wordCount) {
            count++;
          }
        }
        if (count >1) {
          console.log(`Chuỗi ${word} lặp lại ${count} lần`);  
        }
        }
      
      break;
    case "4":
      let wordList = string.split(/\s+/);
      let minWord = wordList[0];
      let maxWord = wordList[0];

      for (let word of wordList) {
        if (word.length < minWord.length) minWord = word;
        if (word.length > maxWord.length) maxWord = word;
      }

      console.log("Từ ngắn nhất:", minWord);
      console.log("Từ dài nhất:", maxWord);
      break;
    case "5":
      let charCount = {};
      for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
      let maxCount = Math.max(...Object.values(charCount));
      let maxChars = Object.keys(charCount).filter(
        (char) => charCount[char] === maxCount
      );

      console.log(
        "Ký tự xuất hiện nhiều nhất:",
        maxChars,
        "với số lần:",
        maxCount
      );
      break;
    case "6":
      string=string.split(" ").join("_");
      break;
    case "7":
      console.log("Thoát chương trình.");
      break;
    default:
      console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
  }

  if (choice === "7") break;
}
