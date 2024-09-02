// 1
const people1 = [
	{ name: 'Глеб', age: 29 },
	{ name: 'Анна', age: 17 },
	{ name: 'Олег', age: 7 },
	{ name: 'Оксана', age: 47 }
];
console.log(people1.sort((person1, person2) => person1["age"] - person2["age"]));

// 2
function isPositive(num) {
	return num > 0;
}

function isMale(person) {
	return person["gender"] === "male";
}

function filter(array, cb) {
	const newArray = [];

	for (let i = 0; i < array.length; i++) {
		if (cb(array[i])) {
			newArray.push(array[i]);
		}
	}

	return newArray;
	// return array.filter(cb);
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
	{ name: 'Глеб', gender: 'male' },
	{ name: 'Анна', gender: 'female' },
	{ name: 'Олег', gender: 'male' },
	{ name: 'Оксана', gender: 'female' }
];
console.log(filter(people2, isMale));

// 3
function printDate30Sec() {
	const interval = setInterval(() => {
		console.log(Date());
	}, 3000);

	setTimeout(() => {
		console.log("30 секунд прошло");
		clearInterval(interval);
	}, 1000 * 30);
}
printDate30Sec();

// 4
function delayForSecond(callback) {
	// Код писать можно только внутри этой функции
	setTimeout(() => {
		callback();
	}, 1000);	
}

delayForSecond(function () {
	console.log('Привет, Глеб!');
})

// 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 3000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));


// 6
function askQuestion(question, answer, attempt) {
	const userAnswer = prompt(question[attempt]);
	return answer.toLowerCase() === userAnswer.toLowerCase();
}

function game3() {
	const question = [
		"Что может путешествовать по свету, оставаясь в одном и том же углу?",
		"Это что-то маленькое, что можно наклеить.",
		"Это используется для отправки писем."
	]
	const answer = "марка";
	let attempt = 0;

	while (attempt < question.length) {
		if (askQuestion(question, answer, attempt)) {
			alert("Поздравляем!");
			return;
		} else {
			attempt++;
		}
	}
	alert("Марка!");
}
