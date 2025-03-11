/* 
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình
*/
let arr = [];
let n;
while (1) {
  console.log(`==================MENU===============`);
  console.log(`1. Nhập mảng`);
  console.log(`2. Hiển thị mảng`);
  console.log(`3. Tìm các phần tử chẵn và lẻ`);
  console.log(`4. Tính trung bình cộng của mảng`);
  console.log(`5. Xóa phần tử tại vị trí chỉ định`);
  console.log(`6. Tìm phần tử lớn thứ hai trong mảng`);
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
          let oddCount = 0;
          let evenCount = 0;
          for (let num of arr) {
              num % 2 ? oddCount++ : evenCount++;
          }
          console.log(`Số số chẵn là: ${evenCount}`);
          console.log(`Số số lẻ là: ${oddCount}`);
      break;
      case 4:
          
          let result=0;
          for (let num of arr) {
              result += num;
          }
         
          console.log(`Trung bình cộng của mảng là: ${(result/n)}`);

      break;
    case 5:
          let deleteIndex = +prompt("Nhập vị trí bạn muốn xóa phần tử : ");
          arr.splice(deleteIndex, 1);
          n--;
          console.log(n);
      break;
      case 6:
          let max = arr[0];
          let maxIndex;
          for (let i = 0; i < n; i++) {
              if (arr[i] > max) {
                  max = arr[i];
                  maxIndex = i;
              }
          }
          arr[maxIndex] = 0;
          max = arr[0];

          for (let num of arr) {
              if (num > max) {
                  max = num;
              }
          }
          console.log(`Số lớn thứ hai là: ${max}`);
      break;
    default:
      console.log("Lựa chọn không hợp lệ.");
      break;
  }
  if (choice == 7) {
    break;
  }
}