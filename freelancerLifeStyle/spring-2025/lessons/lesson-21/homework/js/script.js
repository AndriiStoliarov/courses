"use strict";

let numOne = 20;
let numTwo = "20";

let numSumm = numOne + numTwo;
console.log('numSumm :>> ', numSumm);

// const userName = 20;
// userName = "Іштван";
// console.log('userName :>> ', userName);

// Який результат виведе наступний код у консолі?
let x = 5;
console.log('5 + "5" :>> ', x + '5');

// Який тип даних поверне наступний вираз?
console.log('typeof "Hello world!" :>> ', typeof 'Hello world!');

// Який буде результат в консолі?
let a = 10;
let b = '20';
console.log('10 * "20" :>> ', a * b);

// Який буде результат в консолі?
console.log('10 / "2" :>> ', 10 / '2');

// Що виведе наступний код?
let c = 10;
let d = 2;
console.log('10 - 2 :>> ', c - d);

// Який буде результат в консолі та визначте тип значення?
let num = 3.14159;
console.log('3.14159.toFixed(2) :>> ', num.toFixed(2));

// Який результат виведе наступний код?
let arr = [1, 2, 3];
console.log('[1, 2, 3].lenght :>> ', arr.length);

// Який результат буде при обчисленні (також визначити тип даних результату)?

let sum = 10 + 'Igor';
console.log('10 + Igor :>> ', 10 + 'Igor');

let subtract = 10 - 'Igor';
console.log('10 - Igor :>> ', 10 - 'Igor');

let div1 = 35 / '-1';
console.log('35 / "-1" :>> ', 35 / '-1');

let div2 = 35 / 0;
console.log('35 / 0 :>> ', 35 / 0);

let multiply = 10 * '10';
console.log('10 * "10" :>> ', 10 * '10');

let mod = 10 % '10';
console.log('10 % "10" :>> ', 10 % '10');


let userName = 'Василь';
// інтерполяція
let greeting = `Привіт, ${userName}!`;
console.log('інтерполяція :>> ', greeting);

let someString = `Hello world 2024`;
console.log('"Hello world 2024".length :>> ', someString.length);
console.log('someString[5] :>> ', someString[5]);
console.log('someString[13] :>> ', someString[13]);
console.log('someString[5] :>> ', someString[15]);

console.log('someString.toUpperCase() :>> ', someString.toUpperCase());
console.log('someString.toLowerCase() :>> ', someString.toLowerCase());

let hello = 'Привіт! Як справи?';
console.log('hello :>> ', hello);
console.log('hello.includes("Як") :>> ', hello.includes('Як'));
console.log('hello.startsWith("ив") :>> ', hello.startsWith('ив'));
console.log('hello.endsWith("?") :>> ', hello.endsWith('?'));

console.log('"Hello world 2024".slice(2, 5) :>> ', someString.slice(2, 5));

let helloWith = '#Привіт! Як справи?';
helloWith = helloWith.replace('#', 'Друже! ');
console.log('"#Привіт! Як справи?".replace("#", "Друже! ") :>> ', helloWith);

let numberFloor = 25.9;
console.log('Math.floor(25.9) :>> ', Math.floor(numberFloor));
let numberCeil = 25.001;
console.log('Math.ceil(25.001) :>> ', Math.ceil(numberCeil));
let numberRound = 25.5;
console.log('Math.round(25.5) :>> ', Math.round(numberRound));

let numberModal = -25.8;
console.log('Math.abs(-25.9) :>> ', Math.abs(numberModal));

console.log('Math.random() :>> ', Math.random());

console.log('Math.max(1, 2, -3) :>> ', Math.max(1, 2, -3));
console.log('Math.min(1, 2, -3) :>> ', Math.min(1, 2, -3));


let someVar = `35.5px`;
console.log('parseInt("35.5px") :>> ', parseInt(someVar));
console.log('parseFloat("35.5px") :>> ', parseFloat(someVar));

let varOne = "10";
let varTwo = "3";

let varRes1 = varOne - varTwo;
console.log('"10" - "3" :>> ', varRes1);
console.log('typeof :>> ', typeof varRes1);

let varRes2 = varOne / varTwo;
console.log('"10" / "3" :>> ', varRes2);
console.log('typeof :>> ', typeof varRes2);

let varRes3 = varOne * varTwo;
console.log('"10" * "3" :>> ', varRes3);
console.log('typeof :>> ', typeof varRes3);

let varRes4 = varOne % varTwo;
console.log('"10" % "3" :>> ', varRes4);
console.log('typeof :>> ', typeof varRes4);

let varRes5 = varOne + varTwo;
console.log('"10" + "3" :>> ', varRes5);
console.log('typeof :>> ', typeof varRes5);

varOne = +"10";
varTwo = +"20";
let varRes6 = varOne + varTwo;
console.log('+"10" + +"20" :>> ', varRes6);
console.log('typeof :>> ', typeof varRes6);

let someNumOne = 5;
let someNumTwo = 3;
console.log('someNumOne :>> ', someNumOne);
console.log('someNumTwo :>> ', someNumTwo);
++someNumOne;
--someNumTwo;
console.log('++someNumOne :>> ', someNumOne);
console.log('--someNumTwo :>> ', someNumTwo);

for(let i = 0; i < 10; i++) {
  console.log(i);
}