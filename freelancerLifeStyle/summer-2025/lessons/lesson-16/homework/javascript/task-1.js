"use strict";
class TDate {
    // constructor
    constructor(initialDay, initialMonth, initialYear) {
        // properties:
        this.day = 0;
        this.month = 0;
        this.year = 0;
        this.day = initialDay;
        this.month = initialMonth;
        this.year = initialYear;
    }
    // methods:
    // функция, яка визначає рік через визначену кількість місяців.
    setYearDurationMonths(monthsAmount) {
        const fullYearsAmount = Math.floor(monthsAmount / 12);
        const remainingMonths = monthsAmount % 12;
        this.month += remainingMonths;
        this.year += fullYearsAmount;
        return this.year;
    }
    toString() {
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
let monthsAmount = Number(prompt("Введіть кількість місяців, які мають сплинути:", "18"));
// перевіряємо вхідні данні на NaN при позитивному результаті вхідні даны обнуляемо.
if (isNaN(monthsAmount) || !isFinite(monthsAmount)) {
    // throw new Error("Input must be a number.");
    monthsAmount = 0;
}
// const yearOfFuture: number = getYearDurationMonths(beginning2025, monthsAmount);
document.write(`
    <li class="list__item">
      <span>Через ${monthsAmount} міс. буде     рік.</span>
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
function generateRandomNumber(numberFrom, numberTo) {
    const randomNumber = numberFrom + Math.floor(Math.random() * (numberTo - numberFrom + 1));
    return randomNumber;
}
// }
