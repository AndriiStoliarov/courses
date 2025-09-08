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
              <p><span class="tasks__title">Задача 7.</span> Сформувати двовимірний масив (4 * 8) з номерами днів (описати окремий тип для днів). Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
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
  const ROWS_LENGTH: number = 8,
    ROWS_AMOUNT: number = 4;

  type DaysOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;

  const daysOfWeekArray: number[][] = getTwoDimensionalArray(
    ROWS_LENGTH,
    ROWS_AMOUNT
  );

  showTwoDimensionalArray(
    daysOfWeekArray,
    "Двовимірний масив з номерами днів тижня"
  );

  document.write("<br>");

  document.write(`
    <li class="list__item">
      <span>Кількість неділь в кожному рядку: [</span>
      <br>
  `);

  for (const row of daysOfWeekArray) {
    const sundayAmount: number = row.reduce(
      (previousResult, element) =>
        element === 7 ? ++previousResult : previousResult,
      0
    );

    document.write(`
      <li class="list__item">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>[${sundayAmount}]</span>
      </li>
    `);
  }

  document.write(`
    <span>].</span>
  </li>
`);

  document.write(`
      </ul>
    </p>
  <li>
`);

  /**
   * Функція повертає двовимірний масив.
   *
   * @param {number} rowsLength - Довжина рядка.
   * @param {number} rowsAmount - Кількість рядків.
   * @returns {number[][]} двовимірний масив числ.
   */
  function getTwoDimensionalArray(
    rowsLength: number,
    rowsAmount: number
  ): number[][] {
    return Array.from({ length: rowsAmount }, () => getRowsOfArray(rowsLength));

    /**
     * Функція повертає рядки для двовимірного массиву.
     *
     * @param {number} rowsLength - Довжина рядка.
     * @returns {number[]} Масив рядків з числами, для двовимірного массиву.
     */
    function getRowsOfArray(rowsLength: number): number[] {
      return Array.from({ length: rowsLength }, () => getRandomDayOfWeek());
    }
  }

  /**
   * Функція повертає випадкове день тижня.
   *
   * @returns {number} Згенерований випадковий день тижня.
   */
  function getRandomDayOfWeek(): number {
    const START_WEEK: DaysOfWeek = 1,
      END_WEEK: DaysOfWeek = 7;

    const daysOfWeek: number =
      START_WEEK + Math.floor(Math.random() * (END_WEEK - START_WEEK + 1));

    return daysOfWeek;
  }

  /**
   * Функція, яка виводить двовимірний масив.
   *
   * @param {(number | string)[][]} array - Масив який треба вивести.
   * @param {string} caption - Підпис/заголовок до масиву.
   */
  function showTwoDimensionalArray(
    array: (number | string)[][],
    caption: string
  ): void {
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
   * @param {(number | string)[]} array - Масив який треба вивести.
   * @param {string} caption - Підпис/заголовок до масиву.
   */
  function showArray(array: (number | string)[], caption: string): void {
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
