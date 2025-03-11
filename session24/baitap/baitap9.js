let str = "";
let str2 = "";

while (true) {
  let choice = prompt(
    "Chọn chức năng:\n" +
      "1. Nhập chuỗi ký tự\n" +
      "2. Hiển thị chuỗi ký tự\n" +
      "3. Đếm số lượng chữ và số trong chuỗi\n" +
      "4. Đảo đổi hoa thường\n" +
      "5. Trộn lẫn với chuỗi thứ 2\n" +
      "6. Sắp xếp từ theo độ dài\n" +
      "7. Thoát"
  );

  switch (choice) {
    case "1":
      str = prompt("Nhập chuỗi ký tự:");
      break;
    case "2":
      alert("Chuỗi hiện tại: " + str);
      break;
    case "3":
      let letterCount = 0,
        digitCount = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
          digitCount++;
        } else if (
          (str[i] >= "A" && str[i] <= "Z") ||
          (str[i] >= "a" && str[i] <= "z")
        ) {
          letterCount++;
        }
      }
      alert(`Chữ cái: ${letterCount}, Chữ số: ${digitCount}`);
      break;
    case "4":
      let convertedStr = "";
      for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= "A" && char <= "Z") {
          convertedStr += char.toLowerCase();
        } else if (char >= "a" && char <= "z") {
          convertedStr += char.toUpperCase();
        } else {
          convertedStr += char;
        }
      }
      str = convertedStr;
      alert("Chuỗi sau khi đổi hoa/thường: " + str);
      break;
    case "5":
      str2 = prompt("Nhập chuỗi thứ 2:");
      let mixedStr = "";
      let maxLength = Math.max(str.length, str2.length);
      for (let i = 0; i < maxLength; i++) {
        if (i < str.length) mixedStr += str[i];
        if (i < str2.length) mixedStr += str2[i];
      }
      alert("Chuỗi trộn: " + mixedStr);
      break;
    case "6":
      let words = str.split(" ");
      for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
          if (words[i].length > words[j].length) {
            let temp = words[i];
            words[i] = words[j];
            words[j] = temp;
          }
        }
      }
      alert("Chuỗi sau khi sắp xếp: " + words.join(" "));
      break;
    case "7":
      alert("Thoát chương trình!");
      exit(0);
    default:
      alert("Lựa chọn không hợp lệ!");
  }
}
