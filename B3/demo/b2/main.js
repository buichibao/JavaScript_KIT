let fullname = prompt('Nhập tên của bạn');
let arrayName = fullname.split(" ");
let lastName = arrayName[arrayName.length-1];
for (let i = 0; i < arrayName.length-1; i++) {
    lastName+= arrayName[i].charAt(0);
}
console.log(lastName);
