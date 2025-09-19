// if (confirm("Почати тестування?")) {
interface ICompanyCar {
  // properties:
  numbers: number[];
  // methods:
  toString(): string;
  getPositiveAmount(): number;
  getNegativeAmount(): number;
  getCertainAmount(inputNumber: number): number;
  showArray(): void;
}

class MathOperations {
  // properties:
  static _numbers: number[] = [];

  constructor() {}

  static set numbers(inputArray: number[]) {
    if (inputArray.length !== 0) {
      this._numbers = inputArray;
    } else {
      throw new Error("Array is empty.");
    }
  }

  static get numbers() {
    return this._numbers;
  }
  // methods:
  static toString(): string {
    return `Numbers:[${this._numbers}]`;
  }
  // метод для знаходження кількості додатних.
  static getPositiveAmount(): number {
    const positiveAmount: number = this._numbers.reduce(
      (amount, number) => (number > 0 ? amount + 1 : amount),
      0
    );

    return positiveAmount;
  }
  // метод для знаходження кількості від’ємних.
  static getNegativeAmount(): number {
    const negativeAmount: number = this._numbers.reduce(
      (amount, number) => (number < 0 ? amount + 1 : amount),
      0
    );

    return negativeAmount;
  }
  // метод для підрахунку кількості входжень деякого числа.
  static getCertainAmount(inputNumber: number): number {
    const certainAmount: number = this._numbers.reduce(
      (amount, number) => (number === inputNumber ? amount + 1 : amount),
      0
    );

    return certainAmount;
  }
  // метод для виводу масиву.
  static showArray(): void {
    document.write(`
    <li class="list__item">
      <span>Вхідний масив: [</span>
  `);

    for (const number of this._numbers) {
      document.write(`
      <span>${number}</span>
    `);
    }

    document.write(`
      <span>].</span>
    </li>
  `);
  }
}

document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);

try {
  MathOperations.numbers = createArray(20, -20, 20);

  MathOperations.showArray();

  document.write("<br>");

  const positiveAmount: number = MathOperations.getPositiveAmount();

  document.write(`
    <li class="list__item">
      <span>Кількість додатних чисел в масиві: ${positiveAmount}.</span>
    </li>
  `);

  const negativeAmount: number = MathOperations.getNegativeAmount();

  document.write(`
    <li class="list__item">
      <span>Кількість від’ємних чисел в масиві: ${negativeAmount}.</span>
    </li>
  `);

  const certainAmount: number = MathOperations.getCertainAmount(10);

  document.write(`
    <li class="list__item">
      <span>Кількість входжень числа (деякого) 10 в масив: ${certainAmount}.</span>
    </li>
  `);
} catch (error: any) {
  document.write(`
    <li class="list__item">
      <span>Текст повідомлення помилки: ${error.message}</span>
    </li>
  `);
}

/**
 * Функція повертає масив випадкових чисел.
 * @param {number} sizeArray - Розмір масиву.
 * @param {number} startRange - Число для початку интервала.
 * @param {number} endRange - Число для кінця интервалу.
 * @returns {number} масив випадкових чисел.
 */
function createArray(
  sizeArray: number,
  startRange: number,
  endRange: number
): number[] {
  return Array.from({ length: sizeArray }, () =>
    generateRandomNumber(startRange, endRange)
  );

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
      </p>
    <li>
  `);
// }
