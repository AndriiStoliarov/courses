"use strict";
document.write(`
  <div class="wrapper">
  <!-- Header -->
  <header class="header" id="up">
    <div class="header__container">
      <div class="header__inner">
        <h1 class="header__title">Домашне завдання № 12</h1>
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
              <p><span class="tasks__title">Задача 3.</span> Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
              </p>
            </li>
`);
if (confirm("Почати тестування?")) {
    const ELEMENTS_AMOUNT = 30;
    const RANDOM_NUMBER_FROM = 10, RANDOM_NUMBER_TO = 99;
    let numbersArray = createArray(ELEMENTS_AMOUNT, RANDOM_NUMBER_FROM, RANDOM_NUMBER_TO);
    document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);
    showArray(numbersArray, "Масив випадкових чисел");
    document.write("<br>");
    const changeAmountInsertionSort = getChangeAmountInsertionSort(numbersArray);
    showArray(numbersArray, "Масив відсортованих чисел");
    document.write(`
    <li class="list__item">
      <span>Кількість обмінів під час сортування: ${changeAmountInsertionSort}.</span>
    </li>
  `);
    document.write(`
        </ul>
      </p>
    <li>
  `);
    // функция, яка повертає кількість змін при сортуванні массива методом включенням
    function getChangeAmountInsertionSort(array) {
        let changeCounter = 0;
        for (let k = 0; k < array.length; k++) {
            let key = array[k], index = k - 1;
            while (index >= 0 && array[index] > key) {
                array[index + 1] = array[index];
                changeCounter++;
                index--;
            }
            array[index + 1] = key;
        }
        return changeCounter;
    }
    /**
     * Функція повертає масив випадкових елементів.
     * @param sizeArray
     * @param startRange
     * @param endRange
     * @returns
     */
    function createArray(sizeArray, startRange, endRange) {
        let array = [];
        for (let index = 0; index < sizeArray; index++) {
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
    function generateRandomNumber(startRange, endRange) {
        const RANDOM_NUMBER_FROM = startRange, RANDOM_NUMBER_TO = endRange;
        const randomNumber = RANDOM_NUMBER_FROM +
            Math.floor(Math.random() * (RANDOM_NUMBER_TO - RANDOM_NUMBER_FROM + 1));
        return randomNumber;
    }
    /**
     * Функція, яка виводить масив.
     *
     * @param {number[]} array - Масив який треба вивести.
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
}
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
