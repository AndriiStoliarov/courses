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

// if (confirm("Почати тестування?")) {
interface IMathObject1 {
  // properties
  numbers: number[];
  // methods
  sum(): number;
}

const mathObject1: IMathObject1 = {
  // properties
  numbers: [],
  // methods
  sum() {
    const sum = this.numbers.reduce(
      (prevNumber, number) => prevNumber + number,
      0
    );

    return sum;
  },
  // show() {
  //   document.write(`
  //   <li class="list__item">
  //     <span>Ігрове поле: [</span>
  // `);

  //   for (const cell of this.field) {
  //     document.write(`
  //     <span>${cell}</span>
  //   `);
  //   }

  //   document.write(`
  //     <span>].</span>
  //   </li>
  // `);
  // },
};

const HARES_AMOUNT: number = 5,
  BULLETS_AMOUNT: number = 10;

// створюємо масив заданої довжини та заповнюємо його нулями
// shootingGallery.field = new Array(20).fill(0);
// додаємо зайців на поле
// setHareOnField(shootingGallery.field, HARES_AMOUNT);

document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);

// shootingGallery.show();

document.write("<br>");

// shootingGallery.shoot(HARES_AMOUNT, BULLETS_AMOUNT);
// shootingGallery.show();

// console.log("Об'єкт 'Тир' :>> ", shootingGallery);

// document.write(`
//     <li class="list__item">
//       <span>Об'єкт 'Тир' (дивіться консоль).</span>
//     </li>
//   `);

/**
 * Функція повертає масив випадкових числ в заданому інтервалі.
 *
 * @param {number} arrayLength - Довжина нового масиву.
 * @param {number} numberFrom - Число для початку интервала.
 * @param {number} numberTo - Число для кінця интервала.
 * @returns {number[]} Масив випадкових чисел в заданому інтервалі.
 */
function getRandomNumbersArray(
  arrayLength: number,
  numberFrom: number,
  numberTo: number
): number[] {
  return Array.from({ length: arrayLength }, () =>
    generateRandomNumber(numberFrom, numberTo)
  );
}

/**
 * Функція повертає випадкове число в заданому інтервалі.
 *
 * @param {number} numberFrom - Число для початку интервала.
 * @param {number} numberTo - Число для кінця интервалу.
 * @returns {number} Випадково згенероване число.
 */
function generateRandomNumber(numberFrom: number, numberTo: number): number {
  const randomNumber: number =
    numberFrom + Math.floor(Math.random() * (numberTo - numberFrom + 1));

  return randomNumber;
}

document.write(`
        </ul>
      </p>
    <li>
  `);
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
