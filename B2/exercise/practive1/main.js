let a = Number(prompt('Nhập hê số a'));
let b = Number(prompt('Nhập hê số b'));
let c = Number(prompt('Nhập hê số c'));

if (a == 0) {
   alert('Phương trình trên không phải là phương trình bậc 2');
} else {
   let delta = Math.pow(b,2)- 4*a*c;
   if(delta > 0){
    let x1 = (-b + Math.sqrt(delta)) / 2*a;
    let x2 = (-b - Math.sqrt(delta)) / 2*a;
    alert('Phương trình có 2 nghiệm phân biệt x1 = '+x1 +' và '+x2);
   }else if(delta == 0){
    let x = -b / 2*a ;
    alert('Phương trình có nghiệm kép x1 =x2 '+ x);
   }else {
    alert('Phương trình vô nghiệm');
   }
}