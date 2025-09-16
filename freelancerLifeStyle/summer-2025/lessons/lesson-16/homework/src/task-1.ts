// if (confirm("Почати тестування?")) {
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

const yearOfFuture: number = getYearDurationMonths(beginning2025, monthsAmount);

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
  const remainingMonths = monthsAmount % 12;

  dateObject.month += remainingMonths;
  dateObject.year += fullYearsAmount;

  return dateObject.year;
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
// }
