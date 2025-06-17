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
