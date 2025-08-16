const productsTitles = [
  "сир",
  "сок",
  "хлів",
  "банани",
  "молоко",
  "картопля",
  "малина",
  "масло",
  "помідори",
  "шоколад",
];

const productsPrices = [123, 41, 25, 38, 64, 32, 200, 178, 94, 50];

const moneyAmount = parseInt(prompt("Введіть кількість грошей:", "500"));

const productsAmount = getProductsAmount(productsPrices, moneyAmount);
const productsTitlesUserCan = getProductsTitles(productsAmount);

document.write(`
  <li class="list__item">
    <span>Користувач може собі дозволити:</span>
  </li>
`);

// функція повертає перелік товарів
function getProductsTitles(productsTitles, productsAmount) {
  let productsTitlesArray = [];

  for (let i = 0; i < productsAmount; i++) {
    productsTitlesArray.push(productsTitles[i]);
  }

  return productsTitlesArray;
}

// функція повертає кількість продуктів
function getProductsAmount(productsPrices, moneyAmount) {
  let currentMoneyAmount = moneyAmount;
  let counterProducts = 0;

  for (let i = 0; i < productsPrices.length; i++) {
    if (currentMoneyAmount > 0 && currentMoneyAmount > array[i]) {
      currentMoneyAmount -= productsPrices[i];

      if (currentMoneyAmount <= 0) {
        break;
      } else {
        counterProducts++;
      }
    }
  }

  return counterProducts;
}

// функція, яка виводить масив
function showArray(array) {
  document.write(`
    <li class="list__item">
      <span>Массив оцінок: [</span>
  `);

  for (let index = 0; index < array.length; index++) {
    document.write(`
        <span>${array[index]}</span>
    `);
  }

  document.write(`
      <span>].</span>
    </li>
  `);
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// функція повертає кількість двійок
function getTwoAmount(array) {
  let counterTwo = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 2) counterTwo++;
  }

  return counterTwo;
}

// функція повертає середній бал
function getAverageMark(marksArray) {
  let gradesSum = 0;

  for (let grade = 0; grade < gradesArray.length; grade++) {
    gradesSum += gradesArray[grade];
  }

  const averageGrade = gradesSum / gradesArray.length;

  return Math.round(averageGrade);
}

// функція повертає масив оцінок
function createArray(sizeArray) {
  let array = [];

  for (let index = 0; index < sizeArray; index++) {
    array.push(generateRandomNumber(2, 5));
  }

  return array;
}

// функція повертає випадкове число в заданому інтервалі
function generateRandomNumber(startRange, endRange) {
  const RANDOM_NUMBER_TO = startRange,
    RANDOM_NUMBER_FROM = endRange;

  const randomNumber =
    RANDOM_NUMBER_TO +
    Math.floor(Math.random() * (RANDOM_NUMBER_FROM - RANDOM_NUMBER_TO + 1));

  return randomNumber;
}
