"use strict";
document.write(`
  <div class="wrapper">
  <!-- Header -->
  <header class="header" id="up">
    <div class="header__container">
      <div class="header__inner">
        <h1 class="header__title">Домашне завдання № 15</h1>
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
              <p><span class="tasks__title">Задача 0.</span> Дано два об'єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням. Використати обидва методи стосовно обидвох об'єктів (використати call, apply).
              </p>
            </li>
`);
if (confirm("Почати тестування?")) {
    const mathObject2 = {
        // properties
        numbers: [],
        // methods
        // метод, який повертає добуток елементів які знаходяться між заданими мінімальним і максимальних значенням.
        multiplication(min, max) {
            const multiplication = this.numbers.reduce((prevNumber, number) => number >= min && number <= max ? prevNumber * number : prevNumber, 1);
            return multiplication;
        },
        // метод, який виводить масив.
        show() {
            document.write(`
        <li class="list__item">
          <span>Масив чисел другого об'єкта: [</span>
      `);
            for (const number of this.numbers) {
                document.write(`<span>${number}</span>`);
            }
            document.write(`
          <span>].</span>
        </li>
      `);
        },
    };
    const mathObject1 = {
        // properties
        numbers: [],
        // methods
        // метод, який повертає сумму всіх елементів.
        sum() {
            const sum = this.numbers.reduce((prevNumber, number) => prevNumber + number);
            return sum;
        },
        // метод, який виводить масив.
        show() {
            document.write(`
        <li class="list__item">
          <span>Масив чисел першого об'єкта: [</span>
      `);
            for (const number of this.numbers) {
                document.write(`<span>${number}</span>`);
            }
            document.write(`
          <span>].</span>
        </li>
      `);
        },
    };
    document.write(`
  <li>
    <p>
      <span class="tasks__title">Відповідь:</span>
      <ul class="list">
  `);
    mathObject1.numbers = getRandomNumbersArray(10, 1, 9);
    mathObject1.show();
    const sumObject1 = mathObject1.sum();
    const multiplicationMathObject1 = mathObject2.multiplication.call(mathObject1, 3, 7);
    document.write(`
    <li class="list__item">
      <span>Сума елементів першого об'єкта: ${sumObject1}.</span>
    </li>
  `);
    document.write(`
    <li class="list__item">
      <span>Добуток елементів першого об'єкта: ${multiplicationMathObject1}.</span>
    </li>
  `);
    document.write("<br>");
    mathObject2.numbers = getRandomNumbersArray(10, 1, 9);
    mathObject2.show();
    const multiplicationMathObject2 = mathObject2.multiplication(3, 7);
    const sumObject2 = mathObject1.sum.call(mathObject2);
    document.write(`
    <li class="list__item">
      <span>Добуток елементів другого об'єкта: ${multiplicationMathObject2}.</span>
    </li>
  `);
    document.write(`
    <li class="list__item">
      <span>Сума елементів другого об'єкта: ${sumObject2}.</span>
    </li>
  `);
    /**
     * Функція повертає масив випадкових числ в заданому інтервалі.
     *
     * @param {number} arrayLength - Довжина нового масиву.
     * @param {number} numberFrom - Число для початку интервала.
     * @param {number} numberTo - Число для кінця интервала.
     * @returns {number[]} Масив випадкових чисел в заданому інтервалі.
     */
    function getRandomNumbersArray(arrayLength, numberFrom, numberTo) {
        return Array.from({ length: arrayLength }, () => generateRandomNumber(numberFrom, numberTo));
    }
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
    document.write(`
        </ul>
      </p>
    <li>
  `);
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
