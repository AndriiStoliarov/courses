"user strict";
// Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення.

const firstNumber = parseInt(prompt("Введіть перше число:", "5"));
const secondNumber = parseInt(prompt("Введіть друге число:", "15"));
const thirdNumber = parseInt(prompt("Введіть трете число:", "7"));
const fourthNumber = parseInt(prompt("Введіть четверте число:", "27"));

function getSum(firstNumber, secondNumber, thirdNumber, fourthNumber) {
  const sumNumbers = firstNumber + secondNumber + thirdNumber + fourthNumber;

  return sumNumbers;
}

function getMultiplication(
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber
) {
  const multiplicationNumbers =
    firstNumber * secondNumber * thirdNumber * fourthNumber;

  return multiplicationNumbers;
}

function getMean(firstNumber, secondNumber, thirdNumber, fourthNumber) {
  const meanNumbers =
    (firstNumber + secondNumber + thirdNumber + fourthNumber) / 4;

  return meanNumbers;
}

function isMinNumber(firstNumber, secondNumber, thirdNumber, fourthNumber) {
  const minNumber = Math.min(
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber
  );

  // if (firstNumber < secondNumber) minNumber = firstNumber;
  // if (secondNumber < thirdNumber) minNumber = secondNumber;
  // if (thirdNumber < fourthNumber) {
  //   minNumber = thirdNumber;
  // } else {
  //   minNumber = fourthNumber;
  // }

  return minNumber;
}

function showResult(functionName) {
  document.write(`
    <li class="list__item">
      <span>${functionName()}</span>
    </li>
  `);
}
