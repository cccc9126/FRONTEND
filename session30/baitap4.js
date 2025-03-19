function courseManager(arr, array) {
  let courseChoice;
  while (courseChoice != 4) {
    console.log("1. Thêm khóa học");
    console.log("2. TÌm kiếm khóa học");
    console.log("3. Xóa khóa học");
    console.log("4. Thoát");
    courseChoice = +prompt("Nhập lựa chọn của bạn: ");
    switch (courseChoice) {
      case 1:
        const newCourse = {
          id: arr.length + 1,
          name: prompt("Nhập tên khóa học: "),
          instructor: prompt("Nhập tên giáo viên: "),
          students: [],
        };
        arr.push(newCourse);
        console.table(arr);
        break;
      case 2:
        let nameSearch = prompt("Nhập tên khóa học bạn muốn tìm: ");
        let search = arr.filter((item) =>
          item.name.toLowerCase().includes(nameSearch.toLowerCase())
        );
        if (search.length > 0) {
          console.table(search);
        } else {
          console.log("Không tồn tại");
        }
        break;
      case 3:
        if (arr.length > 0) {
          deleteID = +prompt("Nhập ID khóa học bạn muốn xóa: ");
          if (deleteID > 0 && deleteID <= arr.length) {
            let deleteIndex = arr.findIndex((item) => item.id == deleteID);
            let temp = arr[deleteIndex].name;
            arr.splice(deleteIndex, 1);
            if (arr.length == 0) {
              console.log("Không có khóa học nào");
            } else {
              for (let i = 0; i < arr.length; i++) {
                arr[i].id = i + 1;
              }
              for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].registeredCourses.length; j++) {
                  if (array[i].registeredCourses[j] == temp) {
                    array[i].registeredCourses.splice(
                      array[i].registeredCourses.findIndex(
                        (item) => item == temp
                      ),
                      1
                    );
                  }
                }
              }
              console.log("Xóa thành công");
              console.table(arr);
            }
          } else {
            console.log("ID không hợp lệ");
          }
        } else {
          console.log("Chưa có khóa học");
        }
        break;
      default:
        console.log("Lựa chọn không hợp lệ");
    }
  }
}
function userManager(arr, array) {
  let userChoice;
  while (userChoice != 5) {
    console.log("1. Thêm người dùng mới");
    console.log("2. Đăng kí khóa học");
    console.log("3. Hủy đăng kí khóa học");
    console.log("4. Hiển thị danh sách khóa học của một người dùng");
    console.log("5. Thoát");
    userChoice = +prompt("Nhập lựa chọn của bạn: ");
    switch (userChoice) {
      case 1:
        const newUser = {
          id: arr.length + 1,
          name: prompt("Nhập tên người dùng: "),
          registeredCourses: [],
        };
        arr.push(newUser);
        console.table(arr);
        break;
      case 2:
        console.table(arr);
        let userRegisterChoice = +prompt(
          "Nhập ID người dùng bạn muốn đăng kí khóa học: "
        );
        if (userRegisterChoice < 0 || userRegisterChoice > arr.length) {
          console.log("ID không hợp lệ");
        } else {
          console.log("==========================");
          console.log(`Các khóa học:`);
          for (let i = 0; i < array.length; i++) {
            console.log(array[i].id + " | " + array[i].name);
          }
          console.log("==========================");

          let registerChoice = +prompt("Nhâp ID khóa học bạn muốn đăng kí: ");
          if (registerChoice < 0 || registerChoice > array.choice) {
            console.log("ID không hợp lệ");
          } else {
            arr[userRegisterChoice - 1].registeredCourses.push(
              array[registerChoice - 1].name
            );
            array[registerChoice - 1].students.push(
              arr[userRegisterChoice - 1].name
            );
            console.log(arr[userRegisterChoice - 1].registeredCourses);
            console.log(array[registerChoice - 1].students);
          }
        }
        break;
      case 3:
        console.table(arr);
        let userRegisterChoice2 = +prompt(
          "Nhập ID người dùng bạn muốn đăng kí khóa học: "
        );
        if (userRegisterChoice2 < 0 || userRegisterChoice2 > arr.length) {
          console.log("ID không hợp lệ");
        } else {
          for (
            let i = 0;
            i < arr[userRegisterChoice2-1].registeredCourses.length;
            i++
          ) {
            console.log(
              ` ${i}${arr[userRegisterChoice2-1].registeredCourses[i]}`
            );
          }
          let cancel = +prompt("Nhập ID môn học bạn muốn hủy");
          if (
            cancel > 0 &&
            cancel <= arr[userRegisterChoice2-1].registeredCourses.length
          ) {
              let temp = arr[userRegisterChoice2 - 1].registeredCourses[cancel];
            arr[userRegisterChoice2-1].registeredCourses.splice(cancel, 1);
            for (let i = 0; i < array.length; i++) {
              if (array[i].name === temp) {
                let studentIndex = array[i].students.indexOf(user.name);
                if (studentIndex !== -1) {
                  array[i].students.splice(studentIndex, 1);
                }
              }
            }
            console.log("xóa thành công");
          } else {
            console.log("Không hợp lệ");
          }
        }
        break;
        case 4:
            console.table(arr);
        let userRegisterChoice3 = +prompt(
          "Nhập ID người dùng bạn muốn đăng kí khóa học: "
        );
            if (userRegisterChoice3 < 0 || userRegisterChoice3 > arr.length) {
                console.log("ID không hợp lệ");
            } else {
                console.log(arr[userRegisterChoice3 - 1].registeredCourses);
            }
        break;
    }
  }
}

let course = [];
let user = [];
let choice;
while (choice != 3) {
  console.log("1. Quản lí khóa học");
  console.log("2. Quản lí người dùng");
  console.log("3. Thoát");
  choice = +prompt("Nhập lựa chọn của bạn: ");
  switch (choice) {
    case 1:
      courseManager(course, user);
      break;
    case 2:
      userManager(user, course);
      break;
    default:
      console.log("Lựa chọn không hợp lệ");
  }
}
