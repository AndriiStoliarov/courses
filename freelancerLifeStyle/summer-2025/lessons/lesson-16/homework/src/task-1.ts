// if (confirm("Почати тестування?")) {
interface ITypeDate {
  // properties:
  day: number;
  month: number;
  year: number;
  // methods:
  toString(): string;
}

class TDate {
  // properties:
  private day: number = 0;
  private month: number = 0;
  private year: number = 0;

  // constructor
  constructor(initialDay: number, initialMonth: number, initialYear: number) {
    this.day = initialDay;
    this.month = initialMonth;
    this.year = initialYear;
  }
  // methods:
  // функция, яка визначає рік через визначену кількість місяців.
  setYearDurationMonths(
    monthsAmount: number
  ): number {
    const fullYearsAmount = Math.floor(monthsAmount / 12);
    const remainingMonths = monthsAmount % 12;

    this.month += remainingMonths;
    this.year += fullYearsAmount;

    return this.year;
  },
  public toString(): string {
    return `${this.day}.${this.month}.${this.year}`;
  }
}

document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);

// document.write(`
//     <li class="list__item">
//       <span>Вхідний об'ект: {</span><br>
//       <span>&ensp;</span><span>&ensp;</span><span>День: ${beginning2025.day},</span><br>
//       <span>&ensp;</span><span>&ensp;</span><span>Місяць: ${beginning2025.month},</span><br>
//       <span>&ensp;</span><span>&ensp;</span><span>Рік: ${beginning2025.year}</span><br>
//       <span>}.</span>
//     </li>
//   `);

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
