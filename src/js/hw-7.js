// 1
let str1 = "js";
str1 = str1.toUpperCase();

// 2
function getStartsWith(arr, str) {
    return arr.filter(value => value.toLowerCase().startsWith(str.toLowerCase()));
}
console.log(getStartsWith(["ПРИВЕТ", "прИдёт", "как", "дела", "ПРикуп"], "пРи"));

// 3
const float = 32.58884;
console.log(Math.floor(float));
console.log(Math.ceil(float));
console.log(Math.round(float));

// 4
const arr = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...arr), Math.max(...arr));

// 5
function printRandomNumber() {
    num = Math.round(Math.random() * 10 + 1)
    console.log(num)
}

// 6
function getRandomArray(max) {
    const tempArr = [];

    for (let i = 0; i < Math.floor(max / 2); i++) {
        tempArr.push(Math.round(Math.random() * max));
    }

    return tempArr;
}

// 7
function printRandomNumberFromRange(min, max) {
    num = Math.round(Math.random() * (max - min) + min);
    console.log(num);
}

// 8 и 9
const currentDate = new Date();
const numberDays = 73;
const optionsLocale = ['ru-RU', { day: "2-digit", month: "2-digit", year: "numeric" }]

const dayForNewDate = currentDate.getDate() + numberDays;
let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayForNewDate);

console.log(`Сегодня: ${currentDate.toLocaleString(...optionsLocale)}`);
console.log(`Через ${numberDays}дн будет: ${newDate.toLocaleString(...optionsLocale)}`);

// 10
function dateToStr(date) {
    const optionsDateLocale = ['ru-RU', { day: "numeric", month: "long", year: "numeric" }];
    const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    strDate = date.toLocaleDateString(...optionsDateLocale);
    weekday = weekdays[date.getDay()];
    strTime = date.toLocaleTimeString('ru-RU');

    return `Дата: ${strDate} - это ${weekday}\nВремя: ${strTime}`;
}
console.log(dateToStr(new Date()))




// 11
function shuffleArray(array) {
    const length = array.length;
    const newArr = [];

    for (let i = 0; i < length; i++) {
        randomIndex = Math.round(Math.random() * (array.length - 1));
        newArr.push(array[randomIndex]);
        array.splice(randomIndex, 1);
    }

    return newArr;
}

function game2() {
    const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    // Перемешанные фрукты
    shuffleFruits = shuffleArray(fruits);
    alert(shuffleFruits);

    const attempts = [];
    let word = "";    

    word = prompt("Введите первое слово");
    attempts.push(word.toLowerCase() === shuffleFruits[0].toLowerCase());

    word = prompt("Введите последнее слово");
    attempts.push(word.toLowerCase() === shuffleFruits[shuffleFruits.length - 1].toLowerCase());

    switch (attempts.reduce((a, b) => a + b)) {
        case 1:
            alert("Так близко!");
            break;
        case 2:
            alert("Вы победили!");
            break;
        default:
            confirm("Повторить игру?") ? game2() : alert("Пока-пока!");
            break;
    }
}
