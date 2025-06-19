"use strict";

let someVar = 0;
++someVar;

if (someVar) {
	console.log(someVar);
}

for(let i = 1; i <= 10; i++) {
  console.log(`Пункт №${i}`);
}
// або
for(let i = 0; i < 10; i++) {
  console.log(`Пункт №${i + 1}`);
}

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
  // step 1: (40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20")
  // step 2: (false || false && true || false)
  // step 3: (false)
  console.log('000');
}

function division(a, b) {
  let result = null;

  if (b === 0) {
    result = 'на "0" ділити не можна.';
  } else if ((typeof a === 'string' || typeof b === 'string')) {
    result = 'операнди мають бути числами.';
  } else if (typeof a === 'undefined' || typeof b === 'undefined') {
    result = 'введіть достатню кількість опрерандів.';
  } else {
    result = a / b;
  }

  return `Результат ділення: ${result}`;
}

console.log(division(10, 2)); // Результат ділення: 5
console.log(division(2, 5)); // Результат ділення: 0.4
console.log(division(17)); // Результат ділення: введіть достатню кількість опрерандів!
console.log(division()); // Результат ділення: введіть достатню кількість опрерандів!
console.log(division(0, 15)); // Результат ділення: 0
console.log(division(10, 0)); // Результат ділення: на "0" ділити не можна!
console.log(division('100', 15)); // Результат ділення: операнди мають бути числами!
console.log(division(150, '20')); // Результат ділення: операнди мають бути числами!


const numberArray = [2, 5, 7, 10, 12];
numberArray.forEach(item => {
	if (item === 10) {
    console.log(item);
  }
});


console.log('6 == "6" :>> ', 6 == "6");
console.log('6 === "6" :>> ', 6 === "6");

console.log('Boolean(!5) :>> ', Boolean(!5));

console.log('"" || 0 :>> ', "" || 0);
console.log('"текст" || 0 :>> ', "текст" || 0);

console.log('1 && 5 :>> ', 1 && 5);
console.log('Boolean(1 && 5) :>> ', Boolean(1 && 5));

let varOne = 10;
let varTwo = 10;

if (varOne > varTwo) {
  let result = varOne + varTwo;
  console.log('result :>> ', result);
} else if (varOne === 10) {
  console.log(`varOne = ${varOne}`);
} else {
  console.log('else');
}
console.log('...продовження коду');

let age = 15;
let beverage = (age >= 21) ? "Beer" : "Juice";
console.log('(15 >= 21) ? "Beer" : "Juice" :>> ', beverage);

const someString = 'Hello World 2024';
console.log('Hello World 2024 :>> ', `К-сть символів: ${someString.length}`);
for (let i = 0; i < someString.length; ++i) {
  console.log(`someString[${i}] :>> `, someString[i]);
}

let someArray = [10, "Жека", true];
console.log('[10, "Жека", true].length :>> ', someArray.length);
console.log('typeof :>> ', typeof someArray);

let usersNames = ["Василь", "Петро", "Євген"];
console.log('usersNames :>> ', usersNames);
console.log('usersNames[1] :>> ', usersNames[1]);

for (let i = 0; i < usersNames.length; ++i) {
  console.log(`usersNames[${i}] :>> `, usersNames[i]);
}

usersNames.forEach(userName => console.log('userName :>> ', userName));

usersNames.forEach((item, index) => {
  console.log('index: item :>> ', `${index}: ${item};`);
});

console.log('usersNames :>> ', usersNames);
usersNames.push('Микола');
console.log('usersNames.push("Микола") :>> ', usersNames);

console.log('usersNames.includes("Петро") :>> ', usersNames.includes("Петро"));

console.log('Array.isArray(usersNames) :>> ', Array.isArray(usersNames));

console.log('usersNames.join(" ") :>> ', usersNames.join(" "));
console.log('usersNames.join(", ") :>> ', usersNames.join(", "));
console.log('usersNames.join(" * ") :>> ', usersNames.join(" * "));

let arrTwo = [8, 22, 1];
console.log('[8, 22, 1].sort() :>> ', arrTwo.sort());

function compareNumeric(a, b) {
  console.log(`Порівнюємо ${a} i ${b}`);

  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;

  return a - b;
}

console.log(compareNumeric);

console.log('[8, 22, 1].sort(compareNumeric) :>> ', arrTwo.sort(compareNumeric));

const someObject = {};
console.log('{} :>> ', someObject);
console.log('typeof {} :>> ', typeof someObject);

const user = {
  age: 46,
  name: "Peter Griffin",
  sourceUrl: "https://en.wikipedia.org/wiki/Peter_Griffin"
};

console.log('object user :>> ', user);

// "show..." - зазвичай щось показують;
// "get.." - повертають значення;
// "calc..." - щось вираховують;
// "create..." - щось створюють;
// "check..." - щось перевіряють і повертають логічне значення, і т. д.

const numOne = 10;
const numTwo = 20;

function calcSum(a, b) {
  const sum = a + b;
  console.log(`Сума: ${sum}`);
}

calcSum(numOne, numTwo);
calcSum(10, 30);

let showTextArrow = (text) => console.log(text);
showTextArrow('test');


let someText = '';
console.log('someText :>> ', someText);

someText = someText + '<div></div>';
console.log('someText + "<div></div>" :>> ', someText);

someText = someText + `<a href="contacts.html"></a>`;
console.log('someText + `<a href="contacts.html"></a>` :>> ', someText);

let someText2 = '';
someText2 += '<div>';
someText2 += '<a href="contacts.html"></a>';
someText2 += '</div>';
console.log('someText2 :>> ', someText2);


// створення константи в якій рядок text
const text = "Привіт! Ще текст!";
// створення порожньої зміної (шаблону)
let template = '';

// оголошення функції
function initText(text) {
  for (let i = 0; i < text.length; i++) {
    // створення константи, в яку буде передаватись значення (літеру)
    const item = text[i];
    // додавання до змінної template span з стилями для затримки анімації
    // template += `<span style="${item === ' ' ? 'display:inline;' : ""}animation-delay: ${i * 0.1}s">${item}</span>`;
    template += `<span style="${item === ' ' ? `display:inline; ` : ""}animation-delay: ${i * 0.1}s">${item}</span>`
  }
}

// виклик функції
initText(text);

// цього ми ще не проходили але я коротко поясню
/*
створюємо константу - const page та за допомогою document.querySelector('.page') шукаємо елемент на
сторінці з класом page.
*/
const tasksText = document.querySelector('.tasks__text');

/*
рядок нижче вставляє HTML код, що знаходиться у змінній template, безпосередньо перед закриваючим тегом елемента page (beforeend). Це означає, що HTML з template буде додано в кінець елемента page,
але перед його закриваючим тегом.
*/

tasksText.insertAdjacentHTML("beforeend", template);