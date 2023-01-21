let lightSwitchIsOn = false;
let todayIsCloudy = false;

let example1 = 5 > 10;
let example2 = 5 < 10;
let example3 = 10 >= 10;
let example4 = 5 <= 4;
let example5 = 5 === 6;
let a = 5;
let b = 6;
let result = a < b;

console.log(result);

if (a < b) {
  console.log(a);
} else {
  console.log(b);
}

let students = 25;
let capacity = 20;

if (students <= capacity) {
  console.log("They will fit");
} else {
  console.log("They won`t fit");
}

let example6 = 5 < 10 && 5 > 3; //true и true = true 
let example7 = 5 < 3 && 5 === 5; // false & true = false
let example8 = 5 > 3 && 5 === 6; //true & false = false
let example9 = 5 > 3 || 5 < 3;
let example10 = 5 < 1 || 5 > 1;

console.log(example10);

console.log("Столица КР,?");
let answer = "бикек";
if (answer === "Бишкек" || answer === "бишкек") {
  console.log(answer + "- правильно");
} else {
  console.log(answer + "- не правильно");
}


let weekday = 3;
if (weekday === 1){
  console.log("Дуйшонбу");
}

else if (weekday === 2){
  console.log("Вторник");
}

else if (weekday === 3){
  console.log("Среда");
}

else if (weekday === 4){
  console.log("Четверг");
}

else if (weekday === 5){
  console.log("Жума");
}
else {
  console.log("Эмне дейт я")
}

let balance = 344;
let iceCreame = 20;

if (balance >= iceCreame){
  console.log("да хватит")
}
else {
  console.log("Не хватит")
}

let temperature = 100;
if (temperature < 100 && temperature > 0){
  console.log("не жидкий")
}
else{
  console.log("жидкий")
}

console.log('пароль?')
let password = 'adwerti123'
if (password === 'adwerti123'){
  console.log('Да правильно, Вход');
}
else{
  console.log('Пароль не правельный....');
}

let message = 'hello';
console.log(message);

let message1;
message1 = 'world';

console.log(message1);

let message2 = "!"
console.log(message2)

let user = 'aydin ';
let age = 15;
let message3 = ' hello'
message3 = ' years '; // Изменил значение message3
message3 = age; // Скопировал значение age в message3

console.log(user + age + message3)

const color_blue = '#00F ' + '-Синий'
const color_white = '#fff ' + '-Белый'
//если значение не изменится то можно использовать const
let color = color_white
console.log(color)

