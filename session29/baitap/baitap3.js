/* 
Thêm món ăn vào danh mục.
Xóa món ăn theo tên khỏi danh mục.
Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
Tìm kiếm món ăn theo tên trong toàn bộ menu.
Thoát
*/
let menu = [
  {
    category: "Món chính",
    item: [],
  },
  {
    category: "Đồ uống",
    item: [],
  },
  {
    category: "Món tráng miệng",
    item: [],
  },
];
let choice;

while (choice != 6) {
  console.log("1. Thêm món ăn vào danh mục");
  console.log("2. Xóa món ăn theo tên khỏi danh mục");
  console.log("3. Cập nhật thông tin theo tên của món ăn");
  console.log("4. Hiện thị toàn bộ MENU");
  console.log("5. Tìm kiếm món ăn theo tên trong toàn bộ MENU");
  choice = +prompt("Nhập lựa chọn của bạn: ");
  switch (choice) {
    case 1:
      let addChoice;
      console.log(`1. Món chính\n2. Đồ uống\n3. Món tráng miệng\n 4. Thoát`);
      do {
        addChoice = +prompt("Chọn danh mục món ăn muốn thêm vào: ");
      } while (addChoice > 4);
      switch (addChoice) {
        case 1:
          const newFood = {
            name: prompt("Nhập tên món: "),
            price: +prompt("Nhập giá của món: "),
            describe: prompt("Mô tả món: "),
          };
          menu[0].item.push(newFood);
          break;
        case 2:
          const newDrink = {
            name: prompt("Nhập tên món: "),
            price: +prompt("Nhập giá của món: "),
            describe: prompt("Mô tả món: "),
          };

          menu[1].item.push(newDrink);

          break;
        case 3:
          const newHee = {
            name: prompt("Nhập tên món: "),
            price: +prompt("Nhập giá của món: "),
            describe: prompt("Mô tả món: "),
          };
          menu[2].item.push(newHee);
          break;
      }
      break;
    case 2:
      let deleteName = prompt("Nhập tên món ăn muốn xóa: ").toLowerCase();
      let found = false;
      for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].item.length; j++) {
          if (menu[i].item[j].name.toLowerCase() === deleteName) {
            menu[i].item.splice(j, 1);
            found = true;
            console.log("Món ăn đã được xóa!");
            break;
          }
        }
        if (found) break;
      }

      if (!found) console.log("Không tìm thấy món ăn.");
      break;
    case 3:
      let updateName = prompt("Nhập tên món ăn cần cập nhật: ").toLowerCase();
      let updated = false;

      for (let i = 0; i < menu.length; i++) {
        for (let j = 0; j < menu[i].item.length; j++) {
          if (menu[i].item[j].name.toLowerCase() === updateName) {
            menu[i].item[j].name = prompt("Nhập tên mới: ");
            menu[i].item[j].price = +prompt("Nhập giá mới: ");
            menu[i].item[j].describe = prompt("Nhập mô tả mới: ");
            updated = true;
            console.log("Món ăn đã được cập nhật!");
            break;
          }
        }
        if (updated) break;
      }

      if (!updated) console.log("Không tìm thấy món ăn.");
      break;

    case 4:
      console.log("\n===== MENU =====");
      menu.forEach((category) => {
        console.log(`\n${category.category}:`);
        category.item.length
          ? category.item.forEach((food) =>
              console.log(`- ${food.name} | ${food.price}đ | ${food.describe}`)
            )
          : console.log("(Không có món ăn)");
      });
      break;
    case 5:
      let searchName = prompt("Nhập tên món ăn cần tìm: ").toLowerCase();
      let Found = false;
      menu.forEach((category) => {
        category.item.forEach((food) => {
          if (food.name.toLowerCase().includes(searchName)) {
            console.log(`${food.name} - ${food.price}đ | ${food.describe}`);
            Found = true;
          }
        });
      });
      if (!Found) console.log("Không tìm thấy món ăn.");
      break;

    case 6:
      console.log("Thoát chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ, vui lòng nhập lại.");
  }
}
