"use strict"

// let currentAgeUser = prompt('Сколько Вам лет?', '');
//
// alert(`Тебе ${currentAgeUser} лет, дожили...`);
//
// let currentUserName = prompt('Как тебя зовут?', '')
//
// alert(`Ну привет, ${currentUserName}!`);
//
// let isYourName = confirm('Это точно ты?');
//
// alert (isYourName);
// alert (`Ну хорошо, ` + ` ${currentUserName}!` )

//Условное ветвление: if, '?'//

//Задачка Блок «else»//

// let officialNameCompany = prompt('Какое «официальное» название JavaScript?', '');
// if (officialNameCompany === 'ECMAScript') {
//     alert('Верно!');
// }
// else {
//     alert('Не знаете? ECMAScript!');
// }

//Задачка Несколько условий: «else if»//

// let typeNumber = prompt('Type number', '0' );
// if (typeNumber > 0) {
//     alert(1);
// }
// else if (typeNumber < 0) {
//     alert(-1);
// }
// else {
//     alert(0);
// }

//Задачка Условный оператор „?“//

// let result = (a + b < 4) ? 'Мало' : 'Много';
//
// // if (a + b < 4) {
// //     result = 'Мало';
// // } else {
// //     result = 'Много';
// // }

//Задачка Несколько операторов „?“//

// let login = prompt('Укажите Ваш статус', '');
//
// let message = (login === 'Сотрудник') ? 'Привет!'
//     : (login === 'Директор') ? 'Здравствуйте!'
//         : (login === '') ? 'Нет логина('
//             : "Ну и пока!";
//
// alert(message)
//
// //
// // if (login == 'Сотрудник') {
// //     message = 'Привет';
// // } else if (login == 'Директор') {
// //     message = 'Здравствуйте';
// // } else if (login == '') {
// //     message = 'Нет логина';
// // } else {
// //     message = '';
// // }

//Условное ветвление: if, '?'//

//Логические операторы

//#Проверка значения из диапазона

// let age = prompt('Type number', '');
//
// if (age >= 14 && age <= 90) {
//     alert('norm');
// }
// else {
//     alert('no norm');
// }

//#Проверка значения вне диапазона
//
// let age = prompt('Type your age!', '')
//
// if(age < 14 || age > 90){
//     alert('no norm')
// }
// else {
//     alert('norm')
// }
//
//OR
//
// let age = prompt('Type your age!', '')
//
// if (!(age >= 14 && age <= 90)){
//     alert('no norm')
// }
// else {
//     alert('norm')
// }

//#Проверка логина

// let requestUserLogin = prompt('Type your login!', '');
//
// if (requestUserLogin === 'Admin') {
//     checkPassword();
// } else if (requestUserLogin === null || requestUserLogin === '') {
//     alert('Cancel!');
// } else {
//     alert('I do not know you!');
// }
//
// function checkPassword() {
//     let requestUserPassword = prompt('Type your password!', '');
//
//     if (requestUserPassword === 'Boss') {
//         alert('Hello!');
//     } else if (requestUserPassword === null || requestUserPassword === '') {
//         alert('Cancel!');
//     } else {
//         alert('Invalid password!')
//     }
// }

// let sum = 0;
//
// while (sum <= 10) {
//     let value = +prompt("Введите число", '');
//     debugger;
//
//     if (!value || (sum + value) > 10) {
//         break;
//     }
//     sum += value;
// }
// alert('Сумма: ' + sum);

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 !== 0 || i === 0) continue;
//     alert(i);
// }

// let i = 0;
// while (i < 3) {
// alert(`number ${i}`);
// i++;
// }

//#Повторять цикл, пока ввод неверен

// let userNumber;
// do {
//     userNumber = +prompt('Type number more then 100!', '');
// }
// while (userNumber <= 100 && userNumber);
// alert('Thanks!')


// //#Вывести простые числа
// let n = 10;
//
// next:
//     for (let i = 2; i < n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) continue next;
//         }
//         alert(i);
//     }

//Конструкция "switch"
//
// let browser = prompt('Type your browser name!', '');
// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome'
//     || browser === 'Firefox'
//     || browser === 'Safari'
//     || browser === 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }
//
// // switch (browser) {
// //     case 'Edge':
// //         alert( "You've got the Edge!" );
// //         break;
// //
// //     case 'Chrome':
// //     case 'Firefox':
// //     case 'Safari':
// //     case 'Opera':
// //         alert( 'Okay we support these browsers too' );
// //         break;
// //
// //     default:
// //         alert( 'We hope that this page looks ok!' );
// //
// //
// //


// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0')
//         break;
//
//     case 1:
//         alert('Вы ввели число 1')
//         break;
//
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3')
//         break;
// }


// if (number === 0) {
//     alert('Вы ввели число 0');
// }
//
// if (number === 1) {
//     alert('Вы ввели число 1');
// }
//
// if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
// }

// function showMessage(from, text) {
//     from = '*' + from + '*';
//     alert(from + ': ' + text);
// }
//
// let from = "Аня";
//
// showMessage(from, "Привет"); // *Аня*: Привет
// alert(from); // Аня

// function showPrimes(n) {
//
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//
//         alert(i);  // простое
//     }
// }
//
// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if ( n % i === 0) return false;
//     }
//     return true;
// }
//
// showPrimes(10);

//#Перепишите функцию, используя оператор '?' или '||'

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?')
// }
// alert(checkAge(3));

// function checkAge(age) {

//
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Родители разрешили?');
//     }
// }

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// createUser();
//
// function createUser() {
//     let user = new User("Nick", 21);
//     alert(`${user.name} is ${user.age} year old.`);
// }

// function min(a, b) {
//     if(a < b) {
//         return alert(a);
//     } else if(b === a) {
//         alert(`${a} = ${b}!`);
//     } else {
//         return alert(b);
//     }
// }
//
// min(4, 4)

// sumPow()
//
// function sumPow() {
//     let sumX = +prompt('x?', '');
//     let sumN = +prompt('n?', '');
//
//     if (!isNaN(sumX) && !isNaN(sumN)) {
//         if (sumN < 1) {
//             alert('n must be greater or equal then 1')
//         } else {
//             alert(pow(sumX, sumN));
//         }
//     }
// }
//
// function pow(x, n) {
//     return x ** n;
// }

//Функции-стрелки, основы

// let ask = (question, yes, no) => (confirm(question))? yes(): no();
//
//
// ask (
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
// )

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

//Объекты

// let user = {}
//
// user.name = 'John';
// user.surname = 'Smith';
//
// user.name = 'Pete';
//
// delete user.name;

// function isEmpty(obj) {
//  for (let key in obj) {
//      return false
//  }
//  return true
// }
//
// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// } //390
//
// function sum(obj) {
//
//     let result = 0;
//     for (let key in obj) {
//         result += obj[key];
//     }
//     if (result === 0) {
//         return 0;
//     } else {
//         return result;
//     }
//
// }
//
// alert(sum(salaries));

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         alert(key = +obj[key] * 2);
//     }
//
// }
// multiplyNumeric(menu)

// let calculator = {
//     a: 0,
//     b: 0,
//     read() {
//       this.a = +prompt('a?', '0')
//       this.b = +prompt('b?', '0')
//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
//
// };
//
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() {
//         alert( this.step );
//     }
// };
//
// ladder.up().up().down().showStep();

// function A() {
//
// }
//
// function B() {
//     return a
// }
//
// let a = new A;
// let b = new B;
//
// alert(a === b); // true

// function Calculator () {
//     this.read = function () {
//       this.a = +prompt('a?', '0')
//       this.b = +prompt('b?', '0')
//     }
//     this.sum = function () {
//         return this.a + this.b;
//     }
//     this.mul = function () {
//         return this.a * this.b;
//     }
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator (startingValue) {
//     this.read = function () {
//         this.value += +prompt('Сколько нужно добавить?', '0')
//     };
//     this.value = startingValue;
// }
//
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

// let upper = 'Hello!';
//
// alert (upper.toUpperCase());

// alert( 255..toString(16) );  // ff
// alert( 255..toString(2) ); // 11111111

//Числа

// function sum () {
//      let firstNum = +prompt('Введите первое число', '0')
//      let secondNum = +prompt('Введите второе число', '0')
//     return firstNum + secondNum;
// }
//
// alert(sum());

// alert( Math.round(6.35 * 10) / 10);

// function readNumber() {
//     let num = prompt('Введите число', '0')
//     if (num === '') {
//          num = +(num + 'p')
//         if (isNaN(num)) {
//             return alert('Number: null')
//         }
//
//     }
//     if (isFinite(+num)) {
//         return alert(`Number: ${num}`)
//     }
//
//     return readNumber();
// }
//
// readNumber()

// function randomNum(min, max) {
//     return min + Math.random() * (max - min);
// }
//
// alert(randomNum(7, 20));

// alert(Math.random().toFixed(0));

// function randomNum(min, max) {
//     let num = min + Math.random() * (max - min + 1);
//     return Math.floor(num);
// }
//
// function checkFrequency() {
//     let map = new Map();
//     for (let i = 0; i < 100_000; i++) {
//         let number = randomNum(1, 3);
//         if (map.has(number)) {
//             map.set(number, map.get(number) + 1);
//         } else {
//             map.set(number, 1);
//         }
//     }
//
//     return map.get(1) + " " + map.get(2) + " " + map.get(3);
// }
//
// alert(checkFrequency());

// function randomNum(min, max) {
//     return min + Math.random() * ((max - min) + 1);
// }
//
// alert(randomNum(1, 3));

// function ucFirst(str) {
//     if (!str) return str;
//
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// alert( ucFirst("вася") ); // Вася

// function checkSpam(str) {
//     str = str.toUpperCase();
//         alert(str.includes('XXX') || str.includes('VIAGRA'));
// }
//
// checkSpam('buy ViAgRA now') // == true
// checkSpam('free xxxxx') // == true
// checkSpam("innocent rabbit") // == false

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         return str.slice(0, maxlength - 1) + '...';
//     } else {
//         return str;
//     }
// }
//
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) //= "Вот, что мне хотело…"
//
// alert(truncate("Всем привет!", 20)) //= "Всем привет!"

// function extractCurrencyValue(str) {
//
// return +str.slice(1);
// }
//
// alert( extractCurrencyValue('$120') === 120 ); // true

// function center (styles) {
//     styles[Math.round((styles.length) / 2)] = " Классика";
//     return styles;
// }
//
// let styles = ['Джаз', ' Блюз',];
//
// styles.push(' Рок-н-ролл');
//
// styles.shift();
//
// styles.unshift(' Рэп', ' Регги');
//
// alert(center (styles));

// function sumInput() {
//
//     let numbers = [];
//
//     while (true) {
//
//         let value = prompt("Введите число", 0);
//
//         // Прекращаем ввод?
//         if (value === "" || value === null || !isFinite(value)) break;
//
//         numbers.push(+value);
//     }
//
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
//
// alert( sumInput() );
//
// function getMaxSubSum(arr) {
//     if (arr[0] < 0) {
//         arr.shift()
//         let sum = 0;
//         for (let number of arr) {
//             if (arr[0] < 0) continue
//             sum += number;
//         }
//         if (sum > arr[arr.length - 1]) {
//             return alert(sum - arr[arr.length - 1])
//         }
//         return alert(arr[arr.length - 1]);
//     } else {
//         let sum = 0;
//         for (let number of arr) {
//             sum += number;
//         }
//         if (sum > arr[arr.length - 1]) {
//             return alert(sum - arr[arr.length - 1])
//         }
//         return alert(arr[arr.length - 1]);
//
//     }
// }

// function getMaxSubSum(arr) {
//     let sum = 0;
//     for (let number of arr) {
//         if (arr[0] < 0) continue
//         sum += number;
//     }
//     if (sum > arr[arr.length - 1]) {
//         return alert(sum - arr[arr.length - 1])
//     }
//     return alert(arr[arr.length - 1]);
// }

// function getMaxSubSum(arr) {
//     let sum = 0;
//     for (let number of arr) {
//         if (number < 0)
//             arr.shift()
//         alert(arr)
//     }
// alert(arr)

// function getMaxSubSum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr.shift();
//             i--;
//         } else break;
//     }
//
//     let sum1 = 0;
//     let sum2 = 0;
//     let sum3 = 0;
//     for (let number of arr) {
//         if (sum1 + number < 0) break;
//         sum1 += number;
//     }
//
//     for (let number of arr) {
//         if (sum2 + number < sum2) break;
//         sum2 += number;
//     }
//
//     for (let number of arr) {
//         if (sum3 + number > sum3) {
//             sum3 += number
//         } else sum3 = 0;
//     }
//
//     let arr2 = [sum1, sum2, sum3];
//     let sum = Math.max(...arr2)
//
//     alert(sum);
// }

// function getMaxSubSum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr.shift();
//             i--;
//         } else break;
//     }
//
//     let sums = [];
//     let temporarySum = 0;
//     for (let number of arr) {
//         if (temporarySum < number) {
//             sums.push(number);
//         }
//         if (temporarySum + number < 0) {
//             sums.push(temporarySum);
//         }
//         temporarySum += number;
//     }
//     sums.push(temporarySum);
//
//     let sum = Math.max(...sums)
//
//     alert(sum);
// }
//
// getMaxSubSum([-1, 2, 3, -9])// = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9])// = 6
// getMaxSubSum([-1, 2, 3, -9, 11])// = 11
// getMaxSubSum([-2, -1, 1, 2])// = 3
// getMaxSubSum([100, -9, 2, -3, 5])// = 100
// getMaxSubSum([1, 2, 3])// = 6 (берём все )
// getMaxSubSum([-1, -2, -3])// = 0
// getMaxSubSum([100, -9, 5, -1, 150, -1, 200, -1, -500, 1000])// = 1000

// function camelize(str) {
//     let arr = str.split('-');
//
//     for (let i = 1; i < arr.length; i++) {
//         let toUpp = arr[i];
//         toUpp = toUpp[0].toUpperCase() + toUpp.slice(1)
//         arr.splice(i, 1, `${toUpp}`)
//     }
//
//     return arr.join('');
// }
//
// alert(camelize("background-color"))// == 'backgroundColor';
// alert(camelize("list-style-image")) //== 'listStyleImage';
// alert(camelize("-webkit-transition"))// == 'WebkitTransition';

// let arr = [5, 3, 8, 1];
//
// function filterRange(arr, a, b) {
//     let arrChange = arr.slice(0)
//     let arr2 = []
//     for (let i = 0; i < arrChange.length; i++) {
//         if (arrChange[i] >= a && arrChange[i] <= b) {
//             arr2.push(arrChange[i])
//         }
//     }
// return arr2
// }
//
// let filtered = filterRange(arr, 1, 4);
//
// alert(filtered); // 3,1 (совпадающие значения)
//
// alert(arr); // 5,3,8,1 (без изменений)

// function filterRange(arr, a, b) {
//     // добавлены скобки вокруг выражения для улучшения читабельности
//     return arr.filter(item => (a <= item && item <= b));
// }
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered ); // 3,1 (совпадающие значения)
//
// alert( arr ); // 5,3,8,1 (без изменений)

// let arr = [5, 3, 8, 1];
//
// function filterRange(arr, a, b) {
//     let arrChange = arr.slice(0)
//
//     for (let i = 0; i < arrChange.length; i++) {
//         if (arrChange[i] >= a && arrChange[i] <= b) {
//             arrChange.splice(i - 1, 1)
//         }
//     }
//     return arrChange
// }
//
// let filtered = filterRange(arr, 1, 4);
//
// alert(filtered); // 3,1 (совпадающие значения)

// let arr = [5, 2, 1, -10, 8];
//
// let arrSort = arr.sort( (a, b) => b - a );
//
// alert(arr);

// let arr = ["HTML", "JavaScript", "CSS"];
//
// function copySorted(arr) {
//     let arrCopy = arr.slice(0);
//     return arrCopy.sort();
// }
//
// let sorted = copySorted(arr);
//
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = users.map(item => item.name)
//
//     alert( names ); // Вася, Петя, Маша

// let vasya = {name: "Вася", surname: "Пупкин", id: 1};
// let petya = {name: "Петя", surname: "Иванов", id: 2};
// let masha = {name: "Маша", surname: "Петрова", id: 3};
//
// let users = [vasya, petya, masha];
//
// let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}))
//
// alert(usersMapped);
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
//
// alert(usersMapped[0].id) // 1
// alert(usersMapped[0].fullName) // Вася Пупкин

// let arr = [1, 2, 3, 4, 5, 6];
// let value = arr.reduce(function (previousValue, item, index, array) {
//     if (previousValue >= 10) {
//         alert(item)
//         return previousValue;
//     }
//
//     previousValue += item;
//
//     return previousValue;
// }, 0);
// alert(value);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
//
// function sortByAge(users) {
//
// users.sort( (a, b) => a.age - b.age);
// }
//
// sortByAge(arr);
//
// // // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// let vasya = {name: "Вася", age: 25};
// let petya = {name: "Петя", age: 30};
// let masha = {name: "Маша", age: 29};
//
// let arr = [vasya, petya, masha];
//
// function getAverageAge(users) {
//     let ageUsers = users.map(user => user.age);
//     let result = ageUsers.reduce((sum, current) => sum + current, 0);
//     return result / users.length;
// }
//
// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// function unique(arr) {
//     let sortArr = [arr[0]];
//     for (let i = 1; i < arr.length; i++) {
//
//         if (arr[i] === sortArr[0] || arr[i] === sortArr[+1]) {
//             continue;
//         } else sortArr.push(arr[i]);
//     }
//     return sortArr;
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
// alert(unique(strings))

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// function unique(arr) {
// //     let set = new Set(arr);
// //     let a = [];
// //     for (let value of set) {
// //         a.push(value);
// //     }
// //
// //     return a;
// // }
//     return Array.from(new Set(arr));
// }
//
// alert(unique(values)); // Hare,Krishna,:-O

// function aclean(arr) {
//
//     let map = new Map();
//
//     for (let i = 0; i < arr.length; i++) {
//
//         let toJoin = arr[i].toUpperCase()
//             .split('')
//             .sort()
//             .join('');
//
//         map.set(toJoin, arr[i]);
//
//     }
//
//
//     return Array.from(map.values());
// }
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

// let map = new Map();
//
// map.set("name", "John");
//
// let keys = Array.from(map.keys());
//
//
// keys.push("more");
// alert(keys);

// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];
//
// let wasReadedSet = new WeakSet;
//
// wasReadedSet.add(messages[0]);
// wasReadedSet.add(messages[2]);
//
// alert('Read:' + wasReadedSet.has(messages[2]));

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// // function sumSalaries(obj) {
// //     let result = 0;
// //     for (let num of Object.values(obj)) {
// //         result += num;
// //     }
// //     return result;
// // }
//
// // reduce перебирает массив значений salaries,
// // складывает их
// // и возвращает результат
// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
// }
//
// alert(sumSalaries(salaries)); // 650

// let user = {
//     name: 'John',
//     age: 30
// };
//
// function count(obj) {
// return Object.entries(obj).length;
// }
//
// alert( count(user) ); // 2

// let user = {
//     name: "John",
//     years: 30
// };
//
// let {name, years: age, isAdmin = false} = user;
//
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// function topSalary(salaries) {
//     let highlySalary = 0;
//     let highlyEmployee = null;
//     for (let [key = null, value = null] of Object.entries(salaries)) {
//         if (value >= highlySalary) {
//             highlySalary = `${value}`;
//             highlyEmployee = `${key}: ${value}`;
//         }
//     }
//     return highlyEmployee;
// }
//
// alert(topSalary(salaries));

//Date

// let date = new Date(2012, 1, 20, 3, 12)
// alert(date)

// let date = new Date(2012, 0, 3);// 3 января 2012 года
//
// function getWeekDay(date) {
//  let week = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return week[date.getDay()];
//
// }
//
// alert( getWeekDay(date) );// нужно вывести "ВТ"

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
//
// function getLocalDay(date) {
//     let week = [7, 1, 2, 3, 4, 5, 6];
//     return week[date.getDay()];
// }
//
// alert( getLocalDay(date) );       // вторник, нужно показать 2

// let date = new Date(2015, 0, 2);
//
// function getDateAgo(date, days) {
// let newDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
// return newDay.getDate();
// }
//
// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
//
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }
//
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
//
// alert(getLastDayOfMonth(2012, 1)); // 29

// function getSecondsToday() {
//     let day = new Date();
//
//     return day.getHours() * 3600 + day.getMinutes() * 60 + day.getSeconds();
// }
//
// alert(getSecondsToday())

// function getSecondsToTomorrow() {
//     let day = new Date()
//     // let tomorrow = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1)
//
//     return 86400 - (day.getHours() * 3600 + day.getMinutes() * 60 + day.getSeconds());
//     // return ((tomorrow - Date.now()) / 1000).toFixed()
// }
// alert(getSecondsToTomorrow())

// function formatDate(date) {
//     let time = date;
//     let now = Date.now();
//     let diff = new Date() - date; // разница в миллисекундах
//
//     if (diff <= 1) {
//         return 'Right now';
//     } else if (diff <= 60000) {
//         time = diff / 1000;
//         return `${time} sec before`;
//     } else if (diff <= 600000) {
//         time = diff / 60000;
//         return `${time} min before`;
//     } else {
//         time = (diff);
//         time = now - time;
//         time = new Date(time);
//         let zero = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
//         return `Online ${time.getFullYear()}.${zero[time.getMonth()]}.${zero[time.getDate()]}`
//     }
// }
//
// alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"
//
// alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
//
// alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
//
// // вчерашняя дата вроде 31.12.2016, 20:00
// alert(formatDate(new Date(new Date - 86400 * 1000)));

// JSON

// let user = {
//     name: "Василий Иванович",
//     age: 35
// };
//
// let json = JSON.stringify(user);
//
// json = JSON.parse(json)
//
// alert(json.age)

// let room = {
//     number: 23
// };
//
// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//     place: room
// };
//
// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
//
// alert( JSON.stringify(meetup, function replacer(key, value) {
//     return (key != "" && value == meetup) ? undefined : value;
// }));
//
// /* в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */

//Рекурсия

// function sumTo(n) {
//     if (n < 1) {
//         return n;
//     } else {
//         n += sumTo(n - 1)
//     }
//     return n;
// }
//
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
//
// function sumTo(n) {
//     return n * (n + 1) / 2;
// }
//
// alert( sumTo(100) );
//
// alert(sumTo(100)); // 5050

// function factorial(n) {
//     let fact = n;
//     if (n <= 1) {
//         return n;
//     } else {
//         fact = n * factorial(n - 1);
//     }
//     return fact;
// }
//
// alert(factorial(5)); // 120

// function fib(n) {
//
//     // if (n <= 1){
//     //     return n;
//     // } else {
//     //     return fib(n - 1) + fib(n - 2);
//     // }
//
//
//
//     // for (let i = 3; i <= n; i++) {
//     //     a = sum - a;
//     //     sum += a;
//     // }
//     // return sum;
// }
//
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
//
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// function printFromTheEnd(list) {
//     let a = [] // Я тебя очень люблю и горжусь тобой!
//
//     if (list) {
//         a.push(list.value)
//         printFromTheEnd(list.next)
//     }
//     alert(a)
// }
// printFromTheEnd(list)

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// function printFromTheEnd(list) {
//
//     if (list.next === null) {
//         list.value
//     } else {
//        printFromTheEnd(list.next)
//     }
//
//     alert(list.value)
// }
//
// printFromTheEnd(list);

// function printList(list) {
//
//     alert(list.value)
//
//     if (list) {
//         printList(list.next)
//     }
//
// //
// // //     let i = list;
// // //     while (i.next != null) {
// // //         alert(i.value)
// // //         i = i.next;
// // //     }
// // // return i.value;
// }
// printList(list)

//Замыкание

// function makeCounter() {
//     let count = 0;
//
//     return function() {
//         return count++;
//     };
// }
//
// let counter = makeCounter();
// let counter2 = makeCounter();
//
// alert( counter() ); // 0
// alert( counter() ); // 1
//
// alert( counter2() ); // ?
// alert( counter2() ); // ?

// function Counter() {
//     let count = 0;
//
//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return --count;
//     };
// }
//
// let counter = new Counter();
//
// alert( counter.up() ); // ?
// alert( counter.up() ); // ?
// alert( counter.down() ); // ?

// let phrase = "Hello";
//
// if (true) {
//     let user = "John";
//
//     function sayHi() {
//         alert(`${phrase}, ${user}`);
//     }
// }
//
// sayHi(); // Ошибка!

// function sum(a) {
//
//  return    function (b) {
//         alert(a + b);
//     }
//
// }
//
// sum(1)(2);// = 3
// sum(5)(-1);// = 4

// function inBetween(a, b) {
//     return item => item >= a && item <= b;
// }
//
// function inArray(array) {
//     return item => array.includes(item)
// }
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6
//
// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// function makeArmy() {
//     let shooters = [];
//
//     let i = 0;
//     while (i < 10) {
//         let a = i;
//         let shooter = function() { // функция shooter
//           alert(a); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//         i++;
//     }
//
//    return shooters;
// }
//
// let army = makeArmy();
//
// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// let users = [
//     {name: "John", age: 20, surname: "Johnson"},
//     {name: "Pete", age: 18, surname: "Peterson"},
//     {name: "Ann", age: 19, surname: "Hathaway"}
// ];
//
// function byField(key) {
//
//     return (a, b) => a[key] > b[key] ? 1 : -1
// }
//
// users.sort(byField('name'));
// alert(users.map(user => user.name))
// users.sort(byField('age'));
// alert(users.map(user => user.age))

//Объект функции, NFE

// function makeCounter() {
//
//     function counter() {
//         return counter.count++;
//     }
//
//     counter.count = 0;
//     counter.set = function (value) {
//         counter.count = value;
//     }
//     counter.decrease = () => counter.count--;
//
//     return counter;
//
// }
//
// let counter = makeCounter();
//
// alert(counter()); // 0
// alert(counter()); // 1
//
// counter.set(10); // установить новое значение счётчика
//
// alert(counter()); // 10
//
// counter.decrease(); // уменьшить значение счётчика на 1
//
// alert(counter()); // 10 (вместо 11)

// function sum(a) {
//     let ans = 0;
//
//     function num(value) {
//
//         if (value === false) {
//             return ans;
//         } else {
//             ans += num
//         }
//
//     }
//
//     return num;
// }
//
// alert(sum(1)(2))// == 3; // 1 + 2
// alert(sum(1)(2)(3))// == 6; // 1 + 2 + 3
// alert(sum(5)(-1)(2))// == 6
// alert(sum(6)(-1)(-2)(-3))// == 0
// alert(sum(0)(1)(2)(3)(4)(5))// == 15

// function printNumbers(from, to) {
//     let count = from;
//
//     let timerId = setInterval(function () {
//             alert(count)
//             if (count === to) {
//                 clearInterval(timerId)
//             }
//             count++
//         },1000)
// }
//
//
// alert(printNumbers(1, 5))

// function printNumbers(from, to) {
//     let count = from;
//
//     let timerId = setTimeout(function tick() {
//         alert(count)
//         count++
//         timerId = setTimeout(tick, 1000)
//         if (count === to) {
//             clearTimeout(timerId)
//         }
//     }, 1000)
// }
//
//
// alert(printNumbers(1, 5))

// function printNumbers(from, to) {
//     let current = from;
//
//     setTimeout(function go() {
//         alert(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }, 1000);
// }
//
// // использование:
// printNumbers(5, 10);

//Decoration

// function work(a, b) {
//     alert(a + b); // произвольная функция или метод
// }
//
// function spy(func) {
// // I love you
//     function a (a, b) {
//         // a.calls = [];
//         // a.calls.push(a, b);
//         return func.apply(this, a, b);
//     }
//
//     return a;
// }
//
//
// work = spy(work);
//
// work(1, 2);// 3
// work(4, 5);// 9
//
// for (let args of work.calls) {
//     alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }

// function work(a, b) {
//     alert(a + b); // произвольная функция или метод
// }
//
// function spy(func) {
//     function c(...args) {
//         c.calls.push([args]);
//         return func.apply(this, arguments);
//     }
//
//     c.calls = [];
//
//     return c;
// }
//
// work = spy(work);
//
// work(1, 2);// 3
// work(4, 5);// 9
//
// for (let args of work.calls) {
//     alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }

// function f(x) {
//     alert(x);
// }
//
// function delay(func, time) {
//
//
//     return function(x) {
//
//         setTimeout(() => func(x), time)
//
//     }
// }
//
//
// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);
//
//
// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// function debounce(func, time) {
//     let coolDown = false;
//
//     function timeOut() {
//         if (coolDown) return;
//         func.apply(this, arguments);
//         coolDown = true;
//         setTimeout(() => coolDown = false, time)
//     }
//
//
//     return timeOut
// }
//
// let f = debounce(alert, 1000);
//
// f(1); // выполняется немедленно
// f(2); // проигнорирован
//
// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500);

// function f(a) {
//     alert(a);
// }
//
// function throttle(func, time) {
//     let coolDown = false;
//     let arr = [];
//
//     function timeOut(...arg) {
//         if (coolDown) {
//             arr.splice(0, 1);
//             arr.push([arg]);
//             return;
//         }
//
//         func.apply(this, arguments);
//         coolDown = true;
//         setTimeout(() => {
//             coolDown = false;
//             alert(arr)
//         }, time);
//     }
//
//     return timeOut;
// }
//
// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);
//
// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)
//
// // когда 1000 мс истекли ...
// // ...выводим 3, промежуточное значение 2 было проигнорировано

//Привязка контекста к функции

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password === "rockstar") ok();
//     else fail();
// }
//
// let user = {
//     name: 'Вася',
//
//     loginOk() {
//         alert(`${this.name} logged in`);
//     },
//
//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
//
// };
//
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password === "rockstar") ok();
//     else fail();
// }
//
// let user = {
//     name: 'John',
//
//     login(result) {
//         alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };
//
// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?

//Prototype

// example:

// let animal = {
//     eats: true,
//     walk() {
//         alert("Rabbit!");  /* этот метод не будет использоваться в rabbit */
//     }
// };
//
// let rabbit = {
//     __proto__: animal
// };
//
// rabbit.walk = function() {
//     alert("Rabbit! Bounce-bounce!");
// };
//
// rabbit.walk(); // Rabbit! Bounce-bounce!
//
// animal.walk()

// exercise:

// let head = {
//     glasses: 1
// };
//
// let table = {
//     pen: 3,
//     __proto__: head
// };
//
// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };
//
// let pockets = {
//     money: 2000,
//     __proto__: bed
// };
//
// alert(pockets.pen); // 3
// alert(bed.glasses); // 1
// alert(table.money); // undefined

/* С точки зрения производительности, для современных движков неважно,
откуда берётся свойство – из объекта или из прототипа. Они запоминают,
где было найдено свойство, и повторно используют его в следующем запросе.
Например, при обращении к pockets.glasses они запомнят, что нашли glasses
в head, и в следующий раз будут искать там же. Они достаточно умны, чтобы
при изменениях обновлять внутренний кеш, поэтому такая оптимизация безопасна. */

// let hamster = {
//     stomach: [],
//
//     eat(food) {
//         this.stomach.push(food);
//     }
// };
//
// let speedy = {
//     stomach: [],
//     __proto__: hamster
// };
//
// let lazy = {
//     stomach: [],
//     __proto__: hamster
// };
//
// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple
//
// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple

// function F(value) {
//     let obj = { name: value};
//
//     return alert(obj.name);
// }
//
// let obj = new F('Anna');
//
// let obj2 = new obj.constructor('John');

//Встроенные прототипы

// Function.prototype.defer = function (ms) {
// return setTimeout(this, ms);
// }
//
// function f() {
//     alert("Hello!");
// }
//
// f.defer(1000); // выведет "Hello!" через 1 секунду

// Function.prototype.defer = function (ms) {
// let f = this;
//
//    return  function (...args) {
//        setTimeout(f.apply(this, arguments), ms);
//
//    }
//
// }
//
// function f(a, b) {
//     alert(a + b);
// }
//
// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

//

// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join()
//         }
//     }
// });
//
// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
//
// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//     alert(key); // "apple", затем "__proto__"
// }
//
// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

// function Rabbit(name) {
//     this.name = name;
// }
//
// Rabbit.prototype.sayHi = function () {
//     alert(this.name);
// };
//
// let rabbit = new Rabbit("Rabbit");
//
// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();

//Class

// function Clock({template}) {
//
//     let timer;
//
//     function render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     this.stop = function () {
//         clearInterval(timer);
//     };
//
//     this.start = function () {
//         render();
//         timer = setInterval(render, 1000);
//     };
//
// }
//
// class Clock {
//
//     constructor({template}) {
//         this.template = template;
//     }
//
//     render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//
//     stop() {
//         clearInterval(this.timer);
//     };
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     };
//
// }
//
// let clock = new Clock({template: 'h:m:s'});
// clock.start();

// class Animal {
//
//     constructor(name) {
//         this.name = name;
//     }
//
// }
//
// class Rabbit extends Animal {
//     constructor(name) {
//         super(name)
//         this.created = Date.now();
//     }
// }
//
// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);

// class Clock {
//     constructor({template}) {
//         this.template = template;
//     }
//
//     render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     stop() {
//         clearInterval(this.timer);
//     }
//
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), 1000);
//     }
// }
//
// class ExtendedClock extends Clock {
//     constructor(opt) {
//         super(opt);
//         let {precision = 1000} = opt;
//         this.precision = precision;
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(() => this.render(), this.precision);
//
//     }
// }
//
// let lowResolutionClock = new ExtendedClock({
//     template: 'h:m:s',
//     precision: 10000
// });
//
// lowResolutionClock.start();

//

// class Rabbit extends Object {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }
//
// let rabbit = new Rabbit("Кроль");
//
// alert( rabbit.hasOwnProperty('name') ); // Ошибка

// function delay(ms) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => resolve(), ms)
//     })
// }
//
// delay(3000).then(() => alert('выполнилось через 3 секунды'));

// async function loadJson(url) {
//     let response = await fetch(url)
//
//         if (response.status == 200) {
//             let j = await response.json();
//         } else {
//             let err = await Promise.reject(new Error("Упс!"));
//         }
// }
//
// loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

// async function loadJson(url) { // (1)
//     let response = await fetch(url); // (2)
//
//     if (response.status == 200) {
//         let json = await response.json(); // (3)
//         return json;
//     }
//
//     throw new Error(response.status);
// }
//
// loadJson('no-such-user.json')
//     .catch(alert); // Error: 404 (4)

// class HttpError extends Error {
//     constructor(response) {
//         super(`${response.status} for ${response.url}`);
//         this.name = 'HttpError';
//         this.response = response;
//     }
// }
//
// async function loadJson(url) {
//     let response = await fetch(url)
//
//     if (response.status == 200) {
//         return response.json();
//
//     }
//     throw new HttpError(response.status);
//
// }
//
// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//
//     let user;
//     while(true) {
//         let name = prompt("Введите логин?", "iliakan");
//
//         try {
//             user = await loadJson(`https://api.github.com/users/${name}`);
//             break; // ошибок не было, выходим из цикла
//         } catch(err) {
//             if (err instanceof HttpError && err.response.status == 404) {
//                 // после alert начнётся новая итерация цикла
//                 alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//             } else {
//                 // неизвестная ошибка, пробрасываем её
//                 throw err;
//             }
//         }
//     }
//
//
//     alert(`Полное имя: ${user.name}.`);
//     return user;
// }
//
// demoGithubUser();

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//
//     return 10;
// }
//
// function f() {
//     (async () => {
//         alert (await wait())
//     })()
// }
//
// f();

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//
//     return 10;
// }
//
// function f() {
//     // покажет 10 через 1 секунду
//     wait().then(result => alert(result));
// }
//
// f();

// function* pseudoRandom(seed) {
//     let result = seed * 16807 % 2147483647;
//     yield result;
//     yield *pseudoRandom(result)
//
// }
//
// let generator = pseudoRandom(1);
//
// alert(generator.next().value); // 16807
// alert(generator.next().value); // 282475249
// alert(generator.next().value); // 1622650073

// let user = {
//     name: "John"
// };
//
// function wrap(target) {
//     return new Proxy(target, {
//         /* ваш код */
//         get(target, key) {
//             if(key in target) {
//                 return target[key];
//             } else {
//                 throw new Error("Ошибка: такого свойства не существует");
//             }
//         }
//     });
// }
//
// user = wrap(user);
//
// alert(user.name); // John
// alert(user.age); // Ошибка: такого свойства не существует

// //array[array.length - N]
//
// let array = [1, 2, 3];
//
// array = new Proxy(array, {
//     /* ваш код */
//     get(array, prop) {
//         if (!prop.startsWith('-')) {
//             return array[prop];
//         } else {
//             return array[array.length - prop.slice(1)];
//         }
//     }
// });
//
// alert(array[-1]); // 3
// alert(array[-2]); // 2
//
// // вся остальная функциональность массивов должна остаться без изменений
//
// // let array = [1, 2, 3];
// //
// // alert(array[array.length - 1])

// function makeObservable(target) {
//     /* ваш код */
//     let arr = [];
//
//     target.observe(handler) {
//
//     }
//
//     return new Proxy(target, {
//         set(target, prop, val, receiver) {
//             return Reflect.set(...arguments);
//         }
//     })
// }
//
// let user = {};
// user = makeObservable(user);
//
// user.observe((key, value) => {
//     alert(`SET ${key}=${value}`);
// });
//
// user.name = "John"; // выводит: SET name=John

// let calc = prompt('Введите арифметическое выражение:', '2*3+2');
// alert(eval(calc));

// function isInteger(num) {
//
//     return (num ^ 0 ) === num;
// }
//
// alert(isInteger(1)); // true
// alert(isInteger(1.5)); // false
// alert(isInteger(-0.5)); // false

// let collator = new Intl.Collator();
//
//
// alert( collator.compare("ёжик", "яблоко") );

// let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
//
// let collator = new Intl.Collator("ru", {
//     sensitivity: "accent"
// });
//
// animals.sort((a, b) => collator.compare(a, b));
//
// alert(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК