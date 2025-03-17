let tasks = [];
let choice;
while (choice != 6) {
  console.log("1. Thêm công việc mới");
  console.log("2. Hiển thị tất cả công việc");
  console.log("3. Cập nhật trạng thái công việc theo ID");
  console.log("4. Lọc công việc theo trạng thái");
  console.log("5. Sắp xếp công việc theo trạng thái");
  console.log("6. Thoát");

  choice = +prompt("Nhập lựa chọn của bạn: ");

  switch (choice) {
    case 1:
      const newTask = {
        id: +prompt("Nhập ID công việc: "),
        name: prompt("Nhập tên công việc: "),
        description: prompt("Nhập mô tả công việc: "),
        startTime: prompt("Nhập thời gian bắt đầu: "),
        status: prompt("Nhập trạng thái (hoàn thành/chưa hoàn thành): "),
      };
      tasks.push(newTask);
      console.log("Thêm công việc thành công!");
      break;

    case 2:
      console.table(tasks);
      break;

    case 3:
      let updateID = +prompt("Nhập ID công việc cần cập nhật trạng thái: ");
      let found = false;
      for (let task of tasks) {
        if (task.id === updateID) {
          task.status = prompt(
            "Nhập trạng thái mới (hoàn thành/chưa hoàn thành): "
          );
          console.log("Cập nhật thành công!");
          found = true;
          break;
        }
      }
      if (!found) console.log("ID không tồn tại!");
      break;

    case 4:
      let filterStatus = prompt(
        "Nhập trạng thái cần lọc (hoàn thành/chưa hoàn thành): "
      );
      let filteredTasks = tasks.filter((task) => task.status === filterStatus);
      console.table(filteredTasks);
      break;

    case 5:
      tasks.sort((a, b) => a.status.localeCompare(b.status));
      console.table(tasks);
      break;

    case 6:
      console.log("Thoát chương trình.");
      break;

    default:
      console.log("Lựa chọn không hợp lệ!");
  }
}
