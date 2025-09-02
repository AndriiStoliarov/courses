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
    <div class="page__container">
      <div class="page__inner">
        <!-- Tasks -->
        <div class="tasks">
          <div class="tasks__container">
            <div class="tasks__inner">
              <ul class="tasks__items">
                <li class="tasks__item">
                  <p><span class="tasks__title">Задача 1.</span> Дано масив 30 випадкових цілих чисел. Підрахувати скільки було
                    обмінів під час сортування бульбашкою.
                  </p>
                </li>
              </ul>
`);
// /**
//  * Знаходить суму двох чисел
//  * @param{number} num1 - перше число
//  * @param{number} num2 - друге число
//  * @returns{number} - суму двох чисел
//  */
function sum(num1, num2) {
    return num1 + num2;
}
const sumRes = sum(2, 5);
// const sum = (num1, num2) => num1 + num2;
document.write(`${sumRes}`);
document.write(`
              </div><!-- /.tasks__inner -->
            </div><!-- /.tasks__container -->
          </div><!-- /.tasks -->

          <div class="up  up--left">
            <div class="up__container">
              <a class="up__link" href="../index.html">на головну</a>
            </div>
          </div>
        </div><!-- /.page__inner -->
      </div><!-- /.page__container -->
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
