// 1
let a = 10;
alert(a);
a = 20;
alert(a);

// 2
const releaseYear = 2007;
alert(releaseYear);

// 3
const developerJS = "Brendan Eich";
alert(developerJS);

// 4
let b = 10;
let c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

// 5
let result = 2**5;
alert(result);

// 6
a = 9;
b = 2;
alert(a % b);

// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// 8
let age = Number(prompt("Сколько вам лет?"));
alert(age);

// 9.0
let user = {
    name: "Bob",
    age: 43,
    isAdmin: true
};
// 9.1
user["city of residence"] = "Moscow"
// 9.2
user["age"] = 99
// 9.3
delete user["city of residence"]
// 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?", "name")
alert(user[info])


// 10.
let name = prompt("Как тебя зовут?")
alert(`Привет, ${name}!`)
