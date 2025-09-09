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
              <p><span class="tasks__title">Задача 5.</span> З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців.
              </p>
            </li>
`);
if (confirm("Почати тестування?")) {
    document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);
    let numberMonth = numbersIterator(1, 12);
    document.write(`
    <li class="list__item">
      <span>Перебір номерів місяців:</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
      <span>${numberMonth()}</span>
    </li>
  `);
    document.write(`
        </ul>
      </p>
    <li>
  `);
    // функция, яка поступово за окремими викликами повертає по одному значенню від заданого мінімального до заданого максимального.
    function numbersIterator(min, max) {
        let currentNumber = min - 1;
        function innerFunction() {
            // currentNumber =
            //   currentNumber < max ? currentNumber + 1 : (currentNumber = min);
            if (currentNumber < max) {
                currentNumber++;
            }
            else {
                currentNumber = min;
            }
            return currentNumber;
        }
        return innerFunction;
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
