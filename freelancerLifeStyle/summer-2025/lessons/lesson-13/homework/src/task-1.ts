document.write(`
  <div class="wrapper">
  <!-- Header -->
  <header class="header" id="up">
    <div class="header__container">
      <div class="header__inner">
        <h1 class="header__title">Домашне завдання № 13</h1>
      </div><!-- /. header__inner -->
    </div><!-- /. header__container -->
  </header>

  <main class="page">
    <!-- Tasks -->
    <div class="tasks">
      <div class="tasks__container">
        <div class="tasks__inner">
          <ul class="tasks__items">
            <li class="tasks__item">
              <p><span class="tasks__title">Задача 1.</span> <span class="tasks__text  tasks__text--weight">Генерація всіх підмножин:</span> Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
              </p>
            </li>
`);
// if (confirm("Почати тестування?")) {
const ELEMENTS_AMOUNT: number = 30;
const RANDOM_NUMBER_FROM: number = 10,
  RANDOM_NUMBER_TO: number = 99;

let numbersArray: number[] = createArray(
  ELEMENTS_AMOUNT,
  RANDOM_NUMBER_FROM,
  RANDOM_NUMBER_TO
);

document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);

showArray(numbersArray, "Масив випадкових чисел");

document.write("<br>");

document.write(`
    <li class="list__item">
      <span>Кількість обмінів під час сортування: .</span>
    </li>
  `);

document.write(`
        </ul>
      </p>
    <li>
  `);

// Рекурсивна функция, яка генерує всі можливі підмножини заданого масиву.
function generatesSubsets(
  inputArray: number[],
  // resultArray: number[],
  indexAmount: number
) {
  let resultArray: number[] = inputArray;

  if (resultArray.length === 0) {
    return;
  } else {
    resultArray.splice(indexAmount, 1);
    // console.log("inputArray :>> ", inputArray);
    // resultArray = inputArray;
    console.log("resultArray :>> ", resultArray);
    generatesSubsets(resultArray, resultArray.length - 1);
  }
}

let arr = [1, 2, 3];

const temp = generatesSubsets(arr, arr.length);
console.log("temp :>> ", temp);

/**
 * Функція повертає масив випадкових чисел.
 * @param sizeArray
 * @param startRange
 * @param endRange
 * @returns
 */
function createArray(
  sizeArray: number,
  startRange: number,
  endRange: number
): number[] {
  let array: number[] = [];

  for (let index: number = 0; index < sizeArray; index++) {
    array.push(generateRandomNumber(startRange, endRange));
  }

  return array;
}

/**
 * Функція повертає випадкове число в заданому інтервалі.
 *
 * @param {number} startRange - Число для початку интервала.
 * @param {number} endRange - Число для кінця интервалу.
 * @returns {number} Випадково згенероване число.
 */
function generateRandomNumber(startRange: number, endRange: number): number {
  const RANDOM_NUMBER_FROM: number = startRange,
    RANDOM_NUMBER_TO: number = endRange;

  const randomNumber: number =
    RANDOM_NUMBER_FROM +
    Math.floor(Math.random() * (RANDOM_NUMBER_TO - RANDOM_NUMBER_FROM + 1));

  return randomNumber;
}

/**
 * Функція, яка виводить масив.
 *
 * @param {number[]} array - Масив який треба вивести.
 * @param {string} caption - Підпис/заголовок до масиву.
 */
function showArray(array: number[], caption: string): void {
  document.write(`
    <li class="list__item">
      <span>${caption}: [</span>
  `);

  for (let index: number = 0; index < array.length; index++) {
    document.write(`
      <span>${array[index]}</span>
    `);
  }

  document.write(`
      <span>].</span>
    </li>
  `);
}
// }

document.write(`
            </ul>
          </div><!-- /.tasks__inner -->
        </div><!-- /.tasks__container -->
      </div><!-- /.tasks -->

      <div class="up  up--left">
        <div class="up__container">
          <a class="up__link" href="../index.html">на головну</a>
        </div>
      </div>
    </main><!-- /.page -->

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__inner">
          <div class="footer__text"><span>&#169; </span>2025 Andrii Stoliarov</div>
        </div>
      </div><!-- /.footer__inner-->
    </footer>
  </div><!-- /.wrapper -->
`);
