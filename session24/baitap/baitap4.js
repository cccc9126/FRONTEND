/* 
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
*/
let n,m
let arr=[]

while (1) {
    console.log(`====================MENU=================`);
    console.log(`1. Nhập mảng 2 chiều`);
    console.log(`2. Hiển thị các phần tử trong mảng`);
    console.log(`3. Tính tổng các phần tử trong mảng`);
    console.log(`4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó`);
    console.log(`5. Tính trung bình cộng của các phần tử của một hàng cụ thể`);
    console.log(`6. Đáo ngược các hàng trong mảng`);
    console.log(`7. Thoát`);
    let choice = +prompt("Nhập vào lựa chọn của bạn: ");
    switch (choice) {
        case 1:
            m = +prompt("Nhập số hàng cho mảng: ");
            n = +prompt("Nhập số cột của mảng: ");
            arr=new Array(m).fill(0).map(() => new Array(n).fill(0));
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    arr[i][j] = +prompt(`Nhập phần tử arr[${i}][${j}]:`);
                }
            }
            break;
        case 2:
            console.table(arr);
            break;
        case 3:
            let result = 0
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    result += arr[i][j];
                }
            }
            console.log(result);
            break;
        case 4:
            let max = arr[0][0];
            let maxRow;
            let maxColt;
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        maxRow = i;
                        maxColt = j;
                    }
                }
            }
            console.log(`Số lớn nhất là ${arr[maxRow][maxColt]} tại arr[${maxRow}][${maxColt}]`);
            break;
        case 5:
            let sum = 0;
            let row = +prompt("Nhập hàng mà bạn muốn tính tổng:");
            for (let i = 0; i < n; i++) {
                sum += arr[row][i];
            }
            console.log(`trung bình cộng là :${(sum / n)}`);
            break;
        case 6:
            console.log(arr.reverse());
    }
    if (choice == 7) {
        break;
    }
}