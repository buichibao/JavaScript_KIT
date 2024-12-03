let listStudent = [];
let quantity = Number(prompt('Nhập số lượng sinh viên'));


for (let i = 0; i < quantity; i++) {
    let student = [];
    alert('Nhập thông tin sinh viên thứ ' + (i + 1));
    student[0] = prompt('Nhập mã sinh viên');
    student[1] = prompt('Nhập tên sinh viên');
    student[2] = prompt('Nhập số điện thoại sinh viên');
    student[3] = prompt('Nhập email sinh viên');
    student[4] = prompt('Nhập địa chỉ sinh viên');
    student[5] = Number(prompt('Nhập điểm toán sinh viên'));
    student[6] = Number(prompt('Nhập điểm văn sinh viên'));
    listStudent[i] = student;
}

for (let i = 0; i < listStudent.length; i++) {
    console.log('MSSV : ' + listStudent[i][0] + '- Tên :' + listStudent[i][1] + '- Điểm toán :' + 
    listStudent[i][5] + '- Điểm văn :' + listStudent[i][6] + '- Điểm TB :' + (listStudent[i][5] + listStudent[i][6]) / 2);
}


/*Sử thông tin sinh viên */
let mssv_delete = prompt('Nhập mã số sinh viên cần sửa');
for (let i = 0; i < listStudent.length; i++) {
    if(listStudent[i][0] == mssv_delete){
        listStudent[i][0] = prompt('Nhập mã sinh viên mới');
    }
}
console.log(listStudent);

/*Xoá 1 sinh viên */
let mssv_update = prompt('Nhập mã số sinh viên cần xoá');
for (let i = 0; i < listStudent.length; i++) {
    if(listStudent[i][0] == mssv_update){
        listStudent[i] = null;
    }
}

console.log(listStudent);
