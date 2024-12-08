let listStudent = [];
let quantity = 0;
let check = true;
// Nhập số lượng sinh viên
do {
    if (check) {
        quantity = Number(prompt('Nhập số lượng sinh viên'));
    } else {
        quantity = Number(prompt('Số lượng bạn nhập không hợp lệ mời bạn nhập lại'));
    }

    if (!isNaN(quantity)) {
        if (!Number.isInteger(quantity)) {
            check = false;
        } else {
            check = true;
        }
    } else {
        check = false;
    }
} while (!check || quantity < 0);
// Nhập thông tin từng sinh viên
for (let i = 0; i < quantity; i++) {
    let student = [];
    alert('Nhập thông tin sinh viên ' + (i + 1));
    do {
        student[0] = prompt('Nhập mã số sinh viên');
    } while (student[0].length != 7);

    do {
        student[1] = prompt('Họ tên');
    } while (student[1].length < 2);

    do {
        student[2] = prompt('Số điện thoại');
    } while (student[2].length != 10);

    do {
        student[3] = prompt('Địa chỉ');
    } while (student[3].length = 0);

    do {
        student[4] = Number(prompt('Điểm toán'));

    } while ((isNaN(student[4])) || student[4] < 0 || student[4] > 10);

    do {
        student[5] = Number(prompt('Điểm văn'));
    } while ((isNaN(student[5])) || student[5] < 0 || student[5] > 10);

    listStudent[i] = student;
}

let exits = true;
let mode = null;
do {
    mode = prompt("Nhập chức năng bạn muốn thực hiện \n1.Thêm mới sinh viên \n2.Xuất danh sách \n3.Cập nhật thông tin \n4.Xoá sinh viên \n5.Sắp xếp sinh viên theo tên \nx.Để kết thúc chương trình");

    switch (mode) {
        case '1':
            let student = [];
            alert('Nhập thông tin sinh viên mới');
            do {
                student[0] = prompt('Nhập mã số sinh viên');
            } while (student[0].length != 7);

            do {
                student[1] = prompt('Họ tên');
            } while (student[1].length < 2);

            do {
                student[2] = prompt('Số điện thoại');
            } while (student[2].length != 10);

            do {
                student[3] = prompt('Địa chỉ');
            } while (student[3].length = 0);

            do {
                student[4] = Number(prompt('Điểm toán'));

            } while ((isNaN(student[4])) || student[4] < 0 || student[4] > 10);

            do {
                student[5] = Number(prompt('Điểm văn'));
            } while ((isNaN(student[5])) || student[5] < 0 || student[5] > 10);

            listStudent[listStudent.length] = student;
            break;
        case '2':
            // Xuất danh sách sinh viên 
            if (listStudent.length == 0) {
                alert('Danh sách sinh viên đang trống');
            } else {
                for (let i = 0; i < listStudent.length; i++) {
                    let AVG = (listStudent[i][4] + listStudent[i][5]) / 2;
                    alert(`MSSV : ${listStudent[i][0]} - Họ tên : ${listStudent[i][1]} - AVG : ${AVG}`);
                }
            }
            break;

        case '3':
            //Sửa thông tin sinh viên
            if (listStudent.length == 0) {
                alert('Danh sách sinh viên đang trống');
            } else {
                let idUpdate = prompt('Nhập mã số sinh viên cần sửa');
                let findIdUpdate = true;
                for (let i = 0; i < listStudent.length; i++) {
                    if (idUpdate == listStudent[i][0]) {
                        do {
                            listStudent[i][0] = prompt('Nhập mã số sinh viên');
                        } while (listStudent[i][0].length != 7);

                        do {
                            listStudent[i][1] = prompt('Họ tên');
                        } while (listStudent[i][1].length < 2);

                        do {
                            listStudent[i][2] = prompt('Số điện thoại');
                        } while (listStudent[i][2].length != 10);

                        do {
                            listStudent[i][3] = prompt('Địa chỉ');
                        } while (listStudent[i][3].length = 0);

                        do {
                            listStudent[i][4] = Number(prompt('Điểm toán'));

                        } while ((isNaN(listStudent[i][4])) || listStudent[i][4] < 0 || listStudent[i][4] > 10);

                        do {
                            listStudent[i][5] = Number(prompt('Điểm văn'));
                        } while ((isNaN(listStudent[i][5])) || listStudent[i][5] < 0 || listStudent[i][5] > 10);
                        alert('Sửa thành công');
                        alert(listStudent);
                        break;
                    } else {
                        findIdUpdate = false;
                    }
                }
                if (!findIdUpdate) {
                    alert('Không tìm thấy mã sinh viên');
                }
            }

            break;

        case '4':
            // Xoá thông sinh viên
            if (listStudent.length == 0) {
                alert('Danh sách sinh viên đang trống');
            } else {
                let idDelete = prompt('Nhập mã số sinh viên cần xoá');
                let findIdDelete = true;
                for (let i = 0; i < listStudent.length; i++) {
                    if (idDelete == listStudent[i][0]) {
                        listStudent[i] = null;
                        alert('Xoá thành công');
                        alert(listStudent);
                        break;
                    } else {
                        findIdDelete = false;
                    }
                }

                if (!findIdDelete) {
                    alert('Không tìm thấy mã sinh viên');
                }
            }

            break;

        case '5':
            //Sắp xếp theo tên
            if (listStudent.length == 0) {
                alert('Danh sách sinh viên đang trống');
            } else {
                for (let i = 0; i < listStudent.length - 1; i++) {
                    for (let j = i + 1; j < listStudent.length; j++) {
                        if (listStudent[i][1] > listStudent[j][1]) {
                            let temp = listStudent[i];
                            listStudent[i] = listStudent[j];
                            listStudent[j] = temp;
                        }
                    }
                }
            }
            alert('Sắp xếp thành công');
            break;

        case 'x':
            exits = false;
            alert('Kết thức chương trình');
            break;

        default:
            alert('Không có chức năng này');


    }
} while (exits);










