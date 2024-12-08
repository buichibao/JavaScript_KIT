let number1 = null;
let operator = null;
let number2 = null;
let result = null;
do {
    number1 = Number(prompt('Nhập số thứ 1'));
} while (isNaN(number1));

do {
    number2 = Number(prompt('Nhập số thứ 2'));
} while (isNaN(number2));

operator = prompt('Nhập toán tử cần tính');
switch (operator) {
    case '+':
        result = add(number1, number2);
        alert('Kết quả là ' + result);
        break;

    case '-':
        result = sub(number1, number2);
        alert('Kết quả là ' + result);
        break;
    case '*':
        result = mul(number1, number2);
        alert('Kết quả là ' + result);
        break;
    case '/':
        result = div(number1, number2);
        alert('Kết quả là ' + result);
        break;
    default:
        alert('Phép tính không hợp lệ');

}
let check = true;
let number = null;
if (result === null) {
   alert('Không có kết quả phù hợp để tiếp tục tính toán, chương trình kết thúc!')
} else {
    do {
        operator = prompt('Nhập toán tử cần tính để tiếp tục tính hoặc nhập x để kết thúc');
        switch (operator) {
            case '+':
                result = add(result, enterNumber(number));
                alert('Kết quả là ' + result);
                break;

            case '-':
                result = sub(result, enterNumber(number));;
                alert('Kết quả là ' + result);
                break;
            case '*':
                result = mul(result, enterNumber(number));
                alert('Kết quả là ' + result);
                break;
            case '/':
                result = div(result, enterNumber(number));;
                alert('Kết quả là ' + result);
                break;
            case 'x':
                alert('Chương trình kết thúc');
                check = false;
                break;
            default:
                alert('Phép tính không hợp lệ');

        }
    } while (check);
}



function enterNumber(number) {
    do {
        number = Number(prompt('Nhập số để tiếp tục tính'));
    } while (isNaN(number));
    return number;
}
function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}