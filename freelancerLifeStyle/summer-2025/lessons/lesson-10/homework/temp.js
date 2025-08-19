parseInt(prompt("Введіть кількість елементів:", "10"));

// функція повертає масив з вказаної кількості елементів заповнених нулями.
function createArrayFillZero(sizeArray) {
  const array = new Array(sizeArray);

  array.fill(0);

  return array;
}
