let a = Number(prompt('Nhập a',0));
let b = Number(prompt('Nhập b',0));


if (a == 0 && b == 0) {
   alert("Phương trình vô số nghiệm");
} else if(b == 0) {
   alert("Phương trình x = 0");
} else {
    alert("Phương trình x = "+(-b/a));
}