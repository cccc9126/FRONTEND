function print(arr) {
  console.table(arr);
}

function printCart(cart) {
  let array = cart.filter((item) => item.quantity > 0);
  console.table(array);
}

function displayByCategory(books) {
  let category = prompt("Nhập thể loại sách bạn muốn xem: ");
  let filteredBooks = books.filter((book) =>
    book.category.toLowerCase().includes(category.toLowerCase()) 
  );

  if (filteredBooks.length > 0) {
    print(filteredBooks);
  } else {
    console.log("Không có sách thuộc thể loại này.");
  }
}

function addBook(books) {
  let id = books.length + 1;
  let name = prompt("Nhập tên sách: ");
  let price = +prompt("Nhập giá sách: ");
  let quantity = +prompt("Nhập số lượng: ");
  let category = prompt("Nhập thể loại sách: ");

  books.push({ id, name, price, quantity, category });
  console.log("Sách đã được thêm vào kho.");
  print(books);
}

function searchBook(books) {
  let keyword = prompt("Nhập ID hoặc tên sách để tìm: ").toLowerCase();
  let results = books.filter(
    (book) => book.name.toLowerCase().includes(keyword) || book.id == keyword
  );

  if (results.length > 0) {
    print(results);
  } else {
    console.log("Không tìm thấy sách.");
  }
}

function buyBook(books, cart) {
  let buyID = +prompt("Nhập ID sách cần mua: ");
  let bookIndex = books.findIndex((book) => book.id === buyID);

  if (bookIndex !== -1) {
    let buyQuantity = +prompt("Nhập số lượng: ");

    if (buyQuantity > 0 && buyQuantity <= books[bookIndex].quantity) {
      let cartIndex = cart.findIndex((item) => item.id === buyID);

      if (cartIndex !== -1) {
        cart[cartIndex].quantity += buyQuantity;
        cart[cartIndex].price += buyQuantity * books[bookIndex].price;
      } else {
        cart.push({
          id: books[bookIndex].id,
          name: books[bookIndex].name,
          price: buyQuantity * books[bookIndex].price,
          quantity: buyQuantity,
          category: books[bookIndex].category,
        });
      }
      books[bookIndex].quantity -= buyQuantity;
      console.log("Mua sách thành công.");
      printCart(cart);
    } else {
      console.log("Số lượng không hợp lệ.");
    }
  } else {
    console.log("Không tìm thấy sách với ID này.");
  }
}

function sortBooks(books) {
  console.log("1. Sắp xếp giá tăng dần");
  console.log("2. Sắp xếp giá giảm dần");
  let choice = +prompt("Nhập lựa chọn: ");

  let sortedBooks = books.slice();
  sortedBooks.sort((a, b) =>
    choice === 1 ? a.price - b.price : b.price - a.price
  );
  print(sortedBooks);
}

function totalCart(cart) {
  let total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(`Tổng tiền trong giỏ hàng: ${total} VND`);
}

function totalStock(books) {
  let total = books.reduce((sum, book) => sum + book.quantity, 0);
  console.log(`Tổng số lượng sách trong kho: ${total}`);
}

let books = [
  { id: 1, name: "Sách A", price: 10000, quantity: 10, category: "Văn học" },
  { id: 2, name: "Sách B", price: 15000, quantity: 5, category: "Khoa học" },
  { id: 3, name: "Sách C", price: 20000, quantity: 8, category: "Lịch sử" },
  { id: 4, name: "Sách D", price: 25000, quantity: 12, category: "Văn học" },
];

let cart = [];
let choice;

while (choice !== 8) {
  console.log("1. Hiển thị sách theo thể loại");
  console.log("2. Thêm sách mới vào kho");
  console.log("3. Tìm kiếm sách theo tên hoặc ID");
  console.log("4. Mua sách");
  console.log("5. Sắp xếp sách theo giá");
  console.log("6. Tính tổng tiền trong giỏ hàng");
  console.log("7. Hiển thị tổng số lượng sách trong kho");
  console.log("8. Thoát");
  choice = +prompt("Nhập lựa chọn: ");

  switch (choice) {
    case 1:
      displayByCategory(books);
      break;
    case 2:
      addBook(books);
      break;
    case 3:
      searchBook(books);
      break;
    case 4:
      buyBook(books, cart);
      break;
    case 5:
      sortBooks(books);
      break;
    case 6:
      totalCart(cart);
      break;
    case 7:
      totalStock(books);
      break;
    case 8:
      console.log("Thoát chương trình.");
      break;
    default:
      console.log("Lựa chọn không hợp lệ.");
  }
}
