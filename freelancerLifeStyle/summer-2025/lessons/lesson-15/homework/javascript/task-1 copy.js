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
              <p><span class="tasks__title">Задача 1.</span> Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
              </p>
              <img class="tasks__image" src="../images/object-shooting-gallery.png" alt="shooting gallery table">
            </li>
`);
if (confirm("Почати тестування?")) {
    let shootingGallery = {
        // properties
        field: [],
        // methods
        shoot(hares, bullets) {
            let bulletsAmount = bullets, haresAmount = hares;
            while (bulletsAmount > 0 && haresAmount > 0) {
                const promptCoordinateX = prompt("Введіть координату пострілу (від 0 до 19):", "10");
                const coordinateX = Number(promptCoordinateX);
                if (promptCoordinateX === null ||
                    isNaN(coordinateX) ||
                    !isFinite(coordinateX) ||
                    coordinateX < 0 ||
                    coordinateX > 19)
                    break;
                if (this.field[coordinateX] === 1) {
                    bulletsAmount--;
                    this.field[coordinateX] = "X";
                    haresAmount--;
                    confirm("Ви влучили! Зайця вбито.");
                }
                else {
                    bulletsAmount--;
                    confirm("Ви схибили.");
                }
            }
            document.write(`
      <li class="list__item">
        <span>Кінець гри.</span>
      </li>
    `);
        },
        show() {
            document.write(`
    <li class="list__item">
      <span>Ігрове поле: [</span>
  `);
            for (const cell of this.field) {
                document.write(`
      <span>${cell}</span>
    `);
            }
            document.write(`
      <span>].</span>
    </li>
  `);
        },
    };
    const HARES_AMOUNT = 5, BULLETS_AMOUNT = 10;
    // створюємо масив заданої довжини та заповнюємо його нулями
    shootingGallery.field = new Array(20).fill(0);
    // додаємо зайців на поле
    setHareOnField(shootingGallery.field, HARES_AMOUNT);
    document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);
    shootingGallery.show();
    document.write("<br>");
    shootingGallery.shoot(HARES_AMOUNT, BULLETS_AMOUNT);
    shootingGallery.show();
    console.log("Об'єкт 'Тир' :>> ", shootingGallery);
    document.write(`
    <li class="list__item">
      <span>Об'єкт 'Тир' (дивіться консоль).</span>
    </li>
  `);
    // функция, яка в розташовує/додає зайців на поле
    function setHareOnField(field, haresAmountOnField) {
        let haresAmountCounter = 0;
        while (haresAmountCounter < haresAmountOnField) {
            const randomIndex = generateRandomNumber(0, 19);
            // перевірка сусідніх комірок, щоб зайці не розміщувалися поряд один до одному.
            if (field[randomIndex - 1] !== 1 &&
                field[randomIndex] !== 1 &&
                field[randomIndex + 1] !== 1) {
                field[randomIndex] = 1;
                haresAmountCounter++;
            }
        }
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
