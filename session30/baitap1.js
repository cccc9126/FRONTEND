function print(arr) {
  console.table(arr);
}
function printCart(arr) {
  let array = arr.filter((item) => item.quantity > 0);
  console.table(array);
}
function buy(products, cart) {
  let buyID = +prompt("Nhập ID sản phẩm để thêm vào giỏ hàng");
  if (buyID <= 4 && buyID > 0) {
    let buyQuantity = +prompt("Nhập số lượng bạn muốn mua");
    let temp = products.findIndex((product) => product.id == buyID);
    if (0 < buyQuantity && buyQuantity <= products[temp].quantity) {
      cart[temp].price == 0
        ? (cart[temp].price = buyQuantity * products[temp].price)
        : (cart[temp].price += buyQuantity * products[temp].price);
      cart[temp].quantity == 0
        ? (cart[temp].quantity = buyQuantity)
        : (cart[temp].quantity += buyQuantity);
      products[temp].quantity -= buyQuantity;
      console.log("Thêm vào giỏ hàng thành công");
      printCart(cart);
    } else {
      console.log("Số lượng quá nhiều");
    }
  } else {
    console.log("Không tồn tại sản phẩm này");
  }
}
function sortProduct(arr) {
    let array = arr.slice();
    console.log("1. Tăng dần");
    console.log("2. Giảm dần");
    let sortChoice = +prompt("Nhập lựa chọn của bạn: ");
    switch (sortChoice) {
        
        case 1:
            console.table(array.sort((a, b)=>a.price - b.price));
            break;
        case 2:
            console.table(array.sort((a, b) => b.price - a.price));
            break;
        default:
            console.log("Lựa chọn không phù hợp");
            
    }

}
function sumCart(arr) {
    let sum = 0;
    for (let i = 0; i < 4; i++){
        sum += arr[i].price;
    }
    console.log("Tổng giỏ hàng của bạn là" +sum+ "vnd");
    
}
let products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
let cart = [
  {
    id: 1,
    name: "mèn mén",
    price: 0,
    quantity: 0,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 0,
    quantity: 0,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 0,
    quantity: 0,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 0,
    quantity: 0,
    category: "món ăn dân tộc Kinh",
  },
];
let choice;
while (choice != 5) {
  console.log("1. Hiển thị các sản phẩm theo tên danh mục");
  console.log("2. Chọn sản phẩm để mua bằng ID");
  console.log("3. Sắp xếp các sản phẩm trong cửa hàng theo giá");
  console.log("4. TÍnh số tiền thanh toán trong giỏ hàng");
  console.log("5. Thoát");
  choice = +prompt("Nhập lựa chọn của bạn: ");
  switch (choice) {
    case 1:
      print(products);

      break;
    case 2:
      buy(products, cart);
      break;
    case 3:
      sortProduct(products);
          break;
      case 4:
          sumCart(cart);
          break;
  }
}
