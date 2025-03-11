/* 
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
7. Thoát chương trình
*/
let m, n;
let arr=[];
while (1) {
    console.log("================MENU==============");
    console.log("1. Nhập mảng 2 chiều.");
    console.log("2. Hiển thị mảng 2 chiều");
    console.log("3. Tính tổng các phần tử");
    console.log("4. Tỉnh tổng đường chéo chính");
    console.log("5. Tỉnh tổng đường chéo phụ");
    console.log("6. Tính trung bình cộng các phần tử trong một hàng hoặc cột");
    let choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
      case 1:
        m = +prompt("Nhập số hàng của mảng: ");
        n = +prompt("Nhấp số cột của mảng: ");
        arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
        for (let i in arr) {
          for (let j in arr[i]) {
            arr[i][j] = +prompt(`Nhập phần tử arr[${i}][${j}]`);
          }
        }
        break;
      case 2:
        console.table(arr);
        break;
      case 3:
        let result = 0;
        for (let i in arr) {
          for (let j in arr[i]) {
            result += arr[i][j];
          }
        }
        console.log(`tổng các phần tử là: ${result}`);
        break;
      case 4:
        let sum = 0;
        for (let i in arr) {
          sum += arr[i][i];
        }
        console.log(`Tổng đường chéo chính là: ${sum}`);
        break;
      case 5:
        let Sum = 0;
        for (let i = 0; i < m; i++) {
          Sum += arr[i][m - i - 1];
          console.log(arr[i][m - i - 1]);
        }
        console.log(`Tổng đường chéo phụ là: ${Sum}`);
        break;
      case 6:
        let chon = +prompt("Chọn: 1. Hàng, 2. Cột");
        if (chon === 1) {
          let hang = +prompt(`Nhập số hàng (0 đến ${m - 1}):`);
          if (hang >= 0 && hang < m) {
            let tong = 0;
            for (let j = 0; j < n; j++) {
              tong += arr[hang][j];
            }
            console.log(`Trung bình hàng ${hang} là: ${tong / n}`);
          } else {
            console.log("Số hàng không hợp lệ!");
          }
        } else if (chon === 2) {
          let cot = +prompt(`Nhập số cột (0 đến ${n - 1}):`);
          if (cot >= 0 && cot < n) {
            let tong = 0;
            for (let i = 0; i < m; i++) {
              tong += arr[i][cot];
            }
            console.log(`Trung bình cột ${cot} là: ${tong / m}`);
          } else {
            console.log("Số cột không hợp lệ!");
          }
        } else {
          console.log("Lựa chọn không hợp lệ!");
        }
        break;
    }
    if (choice == 7) {
        break;
    }
}