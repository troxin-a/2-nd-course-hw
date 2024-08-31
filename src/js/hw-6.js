// 1
const list = [1, 5, 4, 10, 0, 3];
for (const item of list) {
    console.log(item);
    if (item === 10) break;
}

// 2
const list2 = [1, 5, 4, 10, 0, 3];
for (const index in list2) {
    if (list2[index] === 4) {
        console.log(index);
        break;
    }
}

// 3
const list3 = [1, 3, 5, 10, 20];
console.log(list3.join(" "));

// 4
const list4 = [];
for (let i = 0; i < 3; i++) {
    list4.push([]);
    for (let j = 0; j < 3; j++) {
        list4[i].push(1);
    }
}
console.log(list4);

// 5
const list5 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    list5.push(2);
}
console.log(list5);

// 6
let list6 = [9, 8, 7, 'a', 6, 5];
list6.sort();
list6 = list6.filter(item => typeof item === "number");
console.log(list6);

// 7
const list7 = [9, 8, 7, 6, 5];
answer = Number(prompt("Угадайте число"));
list7.includes(answer) ? alert("Угадал") : alert("Не угадал");

// 8
let str = 'abcdef';
str = str.split("").reverse().join("");
console.log(str);

// 9
const list9 = [[1, 2, 3], [4, 5, 6]];
const result9 = []
for (const i in list9) {
    result9.push(...list9[i])
}
console.log(result9);

// 10
const list10 = [2, 5, 9, 3, 2, 3, 6, 8, 2, 9, 3, 6, 10, 1]
for (const i in list10) {
    if (i < (list10.length - 1)) {
        const sum = list10[i] + list10[Number(i) + 1];
        console.log(sum);
    }
}

// 11
function getSquares(array) {
    return array.map(item => item ** 2);
}
console.log(getSquares([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 12
function getLength(array) {
    return array.map(item => item.length);
}
console.log(getLength(["asd", "q", "ewewewewe"]));

// 13
function getNegative(array) {
    return array.filter(item => item < 0);
}
console.log(getNegative([1, 2, -3, -4, 5, 6, -7, -8]));

// 14
const list14 = [];
for (let i = 0; i < 10; i++) {
    list14.push(Math.round(Math.random() * 10));
}
let list14_1 = list14.filter(item => item % 2 === 0);
console.log(list14);
console.log(list14_1);

// 15
const list15 = [];
for (let i = 0; i < 6; i++) {
    list15.push(Math.round(Math.random() * 10));
}
let avg = list15.reduce((prev, cur) => prev + cur) / list15.length;
console.log(list15);
console.log(avg);