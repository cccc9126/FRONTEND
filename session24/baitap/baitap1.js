/* 
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
*/
let arr = [];
let n;
while (1) {
    console.log(`==================MENU===============`);
    console.log(`1. Nhập mảng`);
    console.log(`2. Hiển thị mảng`);
    console.log(`3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng`);
    console.log(`4. Tính tổng các phần tử trong mảng`);
    console.log(`5. Tìm số lần xuất hiện của một phần tử trong mảng`);
    console.log(`6. Sắp xếp tăng dần`);
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
            let min = arr[0];
            for (let num of arr) {
                if (num > max) {
                    max = num;
                }
                if (num < min) {
                    min = num;
                }
            }
            console.log(`Số lớn nhất là: ${max}`);
            console.log(`Số nhỏ nhất là: ${min}`);
            break;
        case 4:
            let result = 0;
            for (let num of arr) {
                result += num;
            }
            console.log(`Tổng của các phần tử là: ${result}`);
            break;
        case 5:
            let number = +prompt("Nhập phần tử bạn muốn kiểm tra: ");
            let count = 0;
            for (let num of arr) {
                num == number ? count++ : count;
            }
            console.log(`Số ${number} xuất hiện ${count} lần`);
            break;
        case 6:
            console.log(arr.sort((a, b) => a - b));
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
            break;

    }
    if (choice == 7) {
        break;

    }
}