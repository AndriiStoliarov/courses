document.write(`
  <div class="wrapper">
  <!-- Header -->
  <header class="header" id="up">
    <div class="header__container">
      <div class="header__inner">
        <h1 class="header__title">Домашне завдання № 14</h1>
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
              <p><span class="tasks__title">Задача 2.</span> Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
              </p>
            </li>
`);

if (confirm("Почати тестування?")) {
  type TypeDate = {
    day: number;
    month: number;
    year: number;
  };

  const beginning2025: TypeDate = {
    day: 1,
    month: 1,
    year: 2025,
  };

  document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);

  document.write(`
    <li class="list__item">
      <span>Вхідний об'ект: {</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>День: ${beginning2025.day},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>Місяць: ${beginning2025.month},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>Рік: ${beginning2025.year}</span><br>
      <span>}.</span>
    </li>
  `);

  document.write("<br>");

  let monthsAmount: number = Number(
    prompt("Введіть кількість місяців, які мають сплинути:", "18")
  );

  // перевіряємо вхідні данні на NaN при позитивному результаті вхідні даны обнуляемо.
  if (isNaN(monthsAmount) || !isFinite(monthsAmount)) {
    // throw new Error("Input must be a number.");
    monthsAmount = 0;
  }

  const yearOfFuture: number = getYearDurationMonths(
    beginning2025,
    monthsAmount
  );

  document.write(`
    <li class="list__item">
      <span>Через ${monthsAmount} міс. буде ${yearOfFuture} рік.</span>
    </li>
  `);

  document.write(`
        </ul>
      </p>
    <li>
  `);

  // функция, яка визначає рік через визначену кількість місяців.
  function getYearDurationMonths(
    dateObject: TypeDate,
    monthsAmount: number
  ): number {
    const fullYearsAmount = Math.floor(monthsAmount / 12);

    const yearOfFuture = dateObject.year + fullYearsAmount;

    return yearOfFuture;
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
