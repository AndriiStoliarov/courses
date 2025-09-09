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
              <p><span class="tasks__title">Задача 7.</span> Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
              </p>
            </li>
`);
if (confirm("Почати тестування?")) {
  const NUMBER_FROM: number = 1,
    NUMBER_TO: number = 9;

  let timerId = setInterval(() => {
    additionSimulator();
  }, 10000);

  // функция, яка емулює тренажер додавання.
  function additionSimulator(): void {
    const leftOperand: number = generateRandomNumber(NUMBER_FROM, NUMBER_TO);
    const rightOperand: number = generateRandomNumber(NUMBER_FROM, NUMBER_TO);
    const sumResult: number = leftOperand + rightOperand;

    const sumResultAnswer: string | null = prompt(
      `Скільки буде ${leftOperand} + ${rightOperand} = ?`
    );

    if (sumResultAnswer === null) {
      clearInterval(timerId);

      alert("Кінець.");
    } else if (String(sumResult) === sumResultAnswer) {
      alert(`Відповідь вірна! Сума чисел: ${sumResult}.`);
    } else {
      alert(`Відповідь не вірна. Сума чисел: ${sumResult}.`);
    }
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
