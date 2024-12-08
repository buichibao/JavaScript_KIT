let listStudent = [];
let quantity = null;
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
} while (!check || quantity < 0 || quantity == null);

for (let i = 0; i < quantity; i++) {
    createStudent();
}

let exits = true;
let mode = null;
do {
    mode = prompt("Nhập chức năng bạn muốn thực hiện \n1.Thêm mới sinh viên \n2.Xuất danh sách \n3.Xoá sinh viên \n4.Cập nhật thông tin \n5.Sắp xếp sinh viên theo tên \nx.Để kết thúc chương trình");
    switch (mode) {
        case '1':
            createStudent();
            break;
        case '2':
            showList(listStudent);
            break;
        case '3':
            let idDelete = prompt('Nhập mã sinh viên cần xoá');
            deleteStudent(idDelete);
            break;
        case '4':
            let idUpdate = prompt('Nhập mã sinh viên cần cập nhật');
            updateStudent(idUpdate);
            break;
        case '5':
            let listStudentSort = sortByName();
            showList(listStudentSort);
            break;
        case 'x':
            alert('Chương trình kết thúc');
            exits = false;
            break;
        default:
            alert('Không có chức năng này');
            break;
    }
} while (exits)


function showList(array) {
    for (let i = 0; i < array.length; i++) {
        alert(`MSSV ${array[i][0]} - Tên : ${array[i][1]} - AVG : ${(array[i][4] + array[i][5]) / 2} -email : ${array[i][6]}`);
    }
}
function createStudent() {
    let student = [];
    alert('Nhập thông tin sinh viên');
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
    student[6] = email(student[1]);
    listStudent.push(student);
    alert('Thêm thành công');
}

function deleteStudent(id) {
    let findIdDelete = true;
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i][0] == id) {
            listStudent.splice(i, 1);
            alert('Xoá thành công');
            findIdDelete = true;
            break;
        } else {
            findIdDelete = false;
        }
    }
    if (!findIdDelete) {
        alert('Không tìm thấy mã sinh viên này');
    }
}

function updateStudent(id) {
    let findIdUpdate = true;
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i][0] == id) {
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
            listStudent[i][6] = email(listStudent[i][1]);
            alert('Sửa thành công');
            findIdUpdate = true;
            break;
        } else {
            findIdUpdate = false;
        }
    }
    if (!findIdUpdate) {
        alert('Không tìm thấy mã sinh viên này');
    }
}

function sortByName() {
    let listStudentSort = [];
    for (let i = 0; i < listStudent.length; i++) {
        listStudentSort[i] = listStudent[i];
    }
    for (let i = 0; i < listStudentSort.length; i++) {
        for (let j = 0; j < listStudentSort.length; j++) {
            if (listStudentSort[i] > listStudentSort[j]) {
                let temp = listStudentSort[i];
                listStudentSort[i] = listStudentSort[j];
                listStudentSort[j] = temp;
            }
        }
    }
    return listStudentSort;
}


function email(name){
    let arrayName = name.split(" ");
    let email = arrayName[arrayName.length-1];
    for (let i = 0; i < arrayName.length-1; i++) {
      email+= arrayName[i][0];
    }
    email+='@fpt.edu.vn';
    return email;
}