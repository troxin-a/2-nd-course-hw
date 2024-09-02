function getPeriod() {
    let monthNumber = Number(prompt("Введите номер месяца"));

    switch (monthNumber) {
        case 12: case 1: case 2:
            return "Зима";
        case 3: case 4: case 5:
            return "Весна";
        case 6: case 7: case 8:
            return "Лето";
        case 9: case 10: case 11:
            return "Осень";
        default:
            return "Нет такого месяца";
    }
}

function game1() {
    alert(getPeriod())
}

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

function startAllGames() {
    game1();
    game2();
    game3();
}