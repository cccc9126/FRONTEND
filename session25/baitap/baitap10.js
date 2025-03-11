
function choose(arr,cart) {
    let name = prompt("Nhập tên sản phẩm bạn muốn mua");
    let count = 0;
    for (let i = 0; i < 4; i++){
        if (name === arr[i][0]) {
            console.log(arr[i][0]);
            count = 1;
            cart[i][0] = name;
            cart[i][1]++;
            cart[i][2] = cart[i][1] * products[i][2];
        }
    }
    if (count === 1) {
        console.log("Đã thêm vào giỏ hàng 1 sản phẩm");
    } else {
        console.log("Sản phẩm không có trong cửa hàng");
    }
}
let products = [["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]];
let cart = [["", 0,0], ["", 0,0], ["", 0,0], ["", 0,0]];

console.log(products[0][0]);
while(1){
    console.log("1. Xem danh sách sản phẩm");
    console.log("2. CHọn sản phẩm thêm vào giỏ hàng");
    console.log("3. Tổng tiền và hóa đơn");
    console.log("4. Thoát");
    let choice = +prompt("Nhập lựa chọn của bạn: ");
    switch (choice) {
        case 1:
                console.table(products);
            break;
        case 2:
            choose(products,cart);
            break;
        case 3:
            let sum = 0;
            console.table(cart);
            for (let i = 0; i < cart.length; i++) {
                sum += cart[i][2];
            }
            console.log("Tổng tiền là: " + sum);
            break;
    }
    if (choice == 4) {
        break;
    }
}