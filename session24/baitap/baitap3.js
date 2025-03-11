/* 
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
*/
let arr = [];
let n;
while (1) {
  console.log(`==================MENU===============`);
  console.log(`1. Nhập mảng`);
  console.log(`2. Hiển thị mảng`);
  console.log(`3. Tìm phần tử lớn nhất và in ra chỉ số của nó`);
  console.log(`4. Tính tổng tcb các số dương trong mảng`);
  console.log(`5. Đảo ngược mảng`);
  console.log(`6. Kiểm tra mảng có đối xứng không`);
  console.log(`7. Thoát`);
  let choice = +prompt("Nhập lựa chọn của bạn: ");
  switch (choice) {
    case 1:
      n = +prompt("Nhập độ dài mảng: ");
      arr = new Array(n);
      for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Nhập phần tử arr[${i}]: `);
      }
      break;
    case 2:
      for (let num of arr) {
        console.log(num);
      }
      break;
    case 3:
      let max = arr[0];
      let maxIndex=0
      for (let index in arr) {
        if (arr[index] > max) {
            max = arr[index];
            maxIndex = index;
        }
      }
      console.log(`Số lớn nhất là: ${max} tại vị trí ${maxIndex}`);
      break;
    case 4:
          let tcb = 0;
          let result=0;
          for (let num of arr) {
              if (num >= 0) {
                  result += num;
              }
          }
          tbc = (result / n);
        console.log(`Trung bình cộng các số dương là: ${tbc}`)
      break;
    case 5:
          console.log(`Mảng đảo ngược là ${arr.reverse()}`);
      break;
      case 6: 
          let count = 0;
          for (let i = 0; i < n / 2; i++){
            arr[i] != arr[n - i - 1] ? count++ : count;
          }
          count == 0?console.log(`Đây là mảng đối xứng`):console.log(`Đây không là mảng đối xứng`)   
      break;
    default:
      console.log("Lựa chọn không hợp lệ.");
      break;
  }
  if (choice == 7) {
    break;
  }
}