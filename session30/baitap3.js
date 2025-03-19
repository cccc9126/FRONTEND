function print(arr) {
  console.table(arr);
}

function printCart(cart) {
  let array = cart.filter((item) => item.quantity > 0);
  console.table(array);
}

function displayByBrand(phones) {
  let brand = prompt("Nhập hãng điện thoại bạn muốn xem: ");
  let filteredPhones = phones.filter(
    (phone) => phone.brand.toLowerCase() === brand.toLowerCase()
  );

  if (filteredPhones.length > 0) {
    print(filteredPhones);
  } else {
    console.log("Không có điện thoại thuộc hãng này.");
  }
}

function addPhone(phones) {
  let id = phones.length + 1;
  let name = prompt("Nhập tên điện thoại: ");
  let price = +prompt("Nhập giá điện thoại: ");
  let quantity = +prompt("Nhập số lượng: ");
  let brand = prompt("Nhập hãng điện thoại: ");

  phones.push({ id, name, price, quantity, brand });
  console.log("Điện thoại đã được thêm vào cửa hàng.");
  print(phones);
}

function searchPhone(phones) {
  let keyword = prompt("Nhập ID hoặc tên điện thoại để tìm: ").toLowerCase();
  let results = phones.filter(
    (phone) => phone.name.toLowerCase().includes(keyword) || phone.id == keyword
  );

  if (results.length > 0) {
    print(results);
  } else {
    console.log("Không tìm thấy điện thoại.");
  }
}

function buyPhone(phones, cart) {
  let buyID = +prompt("Nhập ID điện thoại cần mua: ");
  let phoneIndex = phones.findIndex((phone) => phone.id === buyID);

  if (phoneIndex !== -1) {
    let buyQuantity = +prompt("Nhập số lượng: ");

    if (buyQuantity > 0 && buyQuantity <= phones[phoneIndex].quantity) {
      let cartIndex = cart.findIndex((item) => item.id === buyID);

      if (cartIndex !== -1) {
        cart[cartIndex].quantity += buyQuantity;
        cart[cartIndex].price += buyQuantity * phones[phoneIndex].price;
      } else {
        cart.push({
          id: phones[phoneIndex].id,
          name: phones[phoneIndex].name,
          price: buyQuantity * phones[phoneIndex].price,
          quantity: buyQuantity,
          brand: phones[phoneIndex].brand,
        });
      }
      phones[phoneIndex].quantity -= buyQuantity;
      console.log("Mua điện thoại thành công.");
      printCart(cart);
    } else {
      console.log("Số lượng không hợp lệ.");
    }
  } else {
    console.log("Không tìm thấy điện thoại với ID này.");
  }
}

function sortPhones(phones) {
  console.log("1. Sắp xếp giá tăng dần");
  console.log("2. Sắp xếp giá giảm dần");
  let choice = +prompt("Nhập lựa chọn: ");

  let sortedPhones = phones.slice();
  sortedPhones.sort((a, b) =>
    choice === 1 ? a.price - b.price : b.price - a.price
  );
  print(sortedPhones);
}

function totalStockValue(phones) {
  let total = phones.reduce(
    (sum, phone) => sum + phone.price * phone.quantity,
    0
  );
  console.log(`Tổng giá trị điện thoại trong kho: ${total} VND`);
}

function totalStockByBrand(phones) {
  let brandStock = {};
  phones.forEach((phone) => {
    if (brandStock[phone.brand]) {
      brandStock[phone.brand] += phone.quantity;
    } else {
      brandStock[phone.brand] = phone.quantity;
    }
  });
  console.table(brandStock);
}

function checkout(cart) {
  if (cart.length === 0) {
    console.log("Giỏ hàng trống.");
    return;
  }

  console.log("Thanh toán thành công!");
  cart.length = 0;
}

let phones = [
  { id: 1, name: "iPhone 14", price: 20000000, quantity: 10, brand: "Apple" },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 18000000,
    quantity: 8,
    brand: "Samsung",
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 12",
    price: 7000000,
    quantity: 15,
    brand: "Xiaomi",
  },
  { id: 4, name: "Oppo Find X5", price: 12000000, quantity: 5, brand: "Oppo" },
];

let cart = [];
let choice;

while (choice !== 9) {
  console.log("1. Hiển thị điện thoại theo hãng");
  console.log("2. Thêm điện thoại mới vào cửa hàng");
  console.log("3. Tìm kiếm điện thoại theo tên hoặc ID");
  console.log("4. Mua điện thoại");
  console.log("5. Thanh toán giỏ hàng");
  console.log("6. Sắp xếp điện thoại theo giá");
  console.log("7. Hiển thị tổng giá trị điện thoại trong kho");
  console.log("8. Hiển thị tổng số lượng điện thoại theo từng hãng");
  console.log("9. Thoát");
  choice = +prompt("Nhập lựa chọn: ");

  switch (choice) {
    case 1:
      displayByBrand(phones);
      break;
    case 2:
      addPhone(phones);
      break;
    case 3:
      searchPhone(phones);
      break;
    case 4:
      buyPhone(phones, cart);
      break;
    case 5:
      checkout(cart);
      break;
    case 6:
      sortPhones(phones);
      break;
    case 7:
      totalStockValue(phones);
      break;
    case 8:
      totalStockByBrand(phones);
      break;
    case 9:
      console.log("Thoát chương trình.");
      break;
    default:
      console.log("Lựa chọn không hợp lệ.");
  }
}
