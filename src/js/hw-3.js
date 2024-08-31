// 1
let password = 'пароль';
let pass = prompt("Введите пароль");
pass === password ? alert("Пароль введен верно") : alert("Пароль введен неправильно");

//2
let c = prompt("Введите число");
// c > 0 && c < 10 ? alert("Верно") : alert("Неверно");
10 > c > 0 ? console.log("Верно") : console.log("Неверно");

//3
let d = prompt("Первое число");
let e = prompt("Второе число");
e > 100 || d > 100 ? console.log("Верно") : console.log("Неверно");

// 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// 5
let monthNumber = Number(prompt("Введите номер месяца"));
let period = 0;
monthNumber <= 12 ? period = Math.floor((monthNumber % 12 + 1  - 1) / 3) : period = 4;

switch (period) {
    case 0:
        console.log("Зима");
        break;
    case 1:
        console.log("Весна");
        break;
    case 2:
        console.log("Лето");
        break;
    case 3:
        console.log("Осень");
        break;
    default:
        console.log("Нет такого месяца");
        break;
}

// 7
let num = Number(prompt("Введите число"));
if (isNaN(num)) {
    alert("Это не число");    
} else {
    num % 2 === 0 ? alert("Четное") : alert("Нечетное");
};

// 8 и 9
let clientOS = window.navigator.platform;
let year = 2012;
let light = "";

year < 2015 ? light = "облегченную " : light = "";
console.log(`Установите ${light}версию приложения для ${clientOS} по ссылке`);