const elements = parseInt(prompt("Введіть кількість елементів:", "10"));

const randomNumbers = createArray(elements);

showArray(randomNumbers);

const numbersBigger100 = getNumbersBigger100(randomNumbers);

showArray(numbersBigger100);

// функція повертає масив елементів, що більші за 100
function getNumbersBigger100(numbers) {
  let array = [];

  for (let number of numbers) {
    if (number > 100) array.push(number);
  }

  return array;
}

// функція повертає масив випадкових елементів
function createArray(sizeArray) {
  let array = [];

  for (let index = 0; index < sizeArray; index++) {
    array.push(generateRandomNumber(0, 200));
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

// функція, яка виводить масив
function showArray(array, caption) {
  document.write(`
    <li class="list__item">
      <span>${caption}: [</span>
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
