// 1
for (let i = 0; i < 2; i++) {
    console.log("Привет");
};

// 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
};

// 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
};

// 4
let obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
};
for (let key in obj) {
        console.log(`${key} — зарплата ${obj[key]} долларов`);
    };

// 5
let n = 1000;
let i = 0

while (n > 50) {
    n /= 2;
    i++;
};
console.log(`Получившееся число: ${n}`);
console.log(`Количество итераций: ${i}`);

// 6
const friday = 3;

for (let day = 1; day <= 31; day++) {
    if (day % 7 === friday) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
    }
};