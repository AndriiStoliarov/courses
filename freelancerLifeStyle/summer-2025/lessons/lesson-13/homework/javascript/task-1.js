"use strict";
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
let tempArray = [];
const inputArray = [1, 2, 3];
document.write(`
  <li>
    <p>
      <span class="tasks__title">Відповідь:</span>
      <ul class="list">
`);
showArray(inputArray, "");
// document.write("<br>");
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
function generatesSubsets(inputArray, index = 0, resultArray = []) {
    if (index === inputArray.length) {
        console.log("resultArray :>> ", resultArray);
        tempArray.push(resultArray);
        return;
    }
    else {
        generatesSubsets(inputArray, index + 1, resultArray);
        generatesSubsets(inputArray, index + 1, [
            ...resultArray,
            inputArray[index],
        ]);
    }
}
generatesSubsets(inputArray);
// сортуємо елементи масиву за спаданням.
tempArray.sort((array1, array2) => array1 - array2);
showTwoDimensionalArray(tempArray, "Масив можливих підмножин");
/**
 * Функція повертає випадкове число в заданому інтервалі.
 *
 * @param {number} numberFrom - Число для початку интервала.
 * @param {number} numberTo - Число для кінця интервалу.
 * @returns {number} Випадково згенероване число.
 */
function generateRandomNumber(numberFrom, numberTo) {
    const randomNumber = numberFrom + Math.floor(Math.random() * (numberTo - numberFrom + 1));
    return randomNumber;
}
/**
 * Функція, яка виводить двовимірний масив.
 *
 * @param {number[][]} array - Масив, який треба вивести.
 * @param {string} caption - Підпис/опис до масиву.
 */
function showTwoDimensionalArray(array, caption) {
    document.write(`
    <li class="list__item">
      <span>${caption}: [</span>
      <br>
  `);
    for (let row of array) {
        document.write(`
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>[</span>
    `);
        for (let cell of row) {
            document.write(`
        <span>${cell}</span>
      `);
        }
        document.write(`
      <span>]</span>
      <br>
    `);
    }
    document.write(`
      <span>].</span>
    </li>
  `);
}
/**
 * Функція, яка виводить масив.
 *
 * @param {number[]} array - Масив, який треба вивести.
 * @param {string} caption - Підпис/заголовок до масиву.
 */
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
