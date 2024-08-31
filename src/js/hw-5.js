// 1
function lesserNumber(a, b) {
    if (a < b) return a;
    return b;
}

// 2
function determineParity(n) {
    if (n % 2 == 0) return "Число четное";
    return "Число нечетное";
}

// 3
function square(n) {
    console.log(n ** 2);
}

let square2 = (n) => n ** 2;
a = square2(3);

// 4
function askAge() {
    age = Number(prompt("Сколько лет?"));

    if (age < 0) {
        alert("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
        alert("Привет друг!");
    }
    else {
        alert("Добро пожаловать!");
    }

}

// 5
function mult(a, b) {
    let result;
    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) return "Одно или оба значения не являются числом";
    return a * b;
}

// 6
function calcCube() {
    a = Number(prompt("Введите число"));

    if (isNaN(a)) return "Переданный параметр не является числом";

    let result = a ** 3;

    return `${a} в кубе равняется ${result}`;
}

// 7
function getArea() {
    return 3.14 * (this["radius"] ** 2)
}

function getPerimeter() {
    return 2 * 3.14 * this["radius"]
}

let circle1 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter
}

let circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter
}

// 8
function getPeriod() {
    let monthNumber = Number(prompt("Введите номер месяца"));
    let period = 0;

    // Вычисляем номер времени года
    monthNumber <= 12 ? period = Math.floor((monthNumber % 12 + 1  - 1) / 3) : period = NaN;

    switch (period) {
        case 0:
            return "Зима";            
        case 1:
            return "Весна";            
        case 2:
            return "Лето";            
        case 3:
            return "Осень";            
        default:
            return "Нет такого месяца";            
    }
}

function game1() {
    alert(getPeriod())
}