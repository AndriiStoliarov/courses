"use strict";
if (confirm("Почати тестування?")) {
    class MathOperations {
        constructor() { }
        static set numbers(inputArray) {
            if (inputArray.length !== 0) {
                this._numbers = inputArray;
            }
            else {
                throw new Error("Array is empty.");
            }
        }
        static get numbers() {
            return this._numbers;
        }
        // methods:
        static toString() {
            return `Numbers:[${this._numbers}]`;
        }
        // метод для знаходження кількості додатних.
        static getPositiveAmount() {
            const positiveAmount = this._numbers.reduce((amount, number) => (number > 0 ? amount + 1 : amount), 0);
            return positiveAmount;
        }
        // метод для знаходження кількості від’ємних.
        static getNegativeAmount() {
            const negativeAmount = this._numbers.reduce((amount, number) => (number < 0 ? amount + 1 : amount), 0);
            return negativeAmount;
        }
        // метод для підрахунку кількості входжень деякого числа.
        static getCertainAmount(inputNumber) {
            const certainAmount = this._numbers.reduce((amount, number) => (number === inputNumber ? amount + 1 : amount), 0);
            return certainAmount;
        }
        // метод для виводу масиву.
        static showArray() {
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
    // properties:
    MathOperations._numbers = [];
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
        const positiveAmount = MathOperations.getPositiveAmount();
        document.write(`
    <li class="list__item">
      <span>Кількість додатних чисел в масиві: ${positiveAmount}.</span>
    </li>
  `);
        const negativeAmount = MathOperations.getNegativeAmount();
        document.write(`
    <li class="list__item">
      <span>Кількість від’ємних чисел в масиві: ${negativeAmount}.</span>
    </li>
  `);
        const certainAmount = MathOperations.getCertainAmount(10);
        document.write(`
    <li class="list__item">
      <span>Кількість входжень числа (деякого) 10 в масив: ${certainAmount}.</span>
    </li>
  `);
    }
    catch (error) {
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
    function createArray(sizeArray, startRange, endRange) {
        return Array.from({ length: sizeArray }, () => generateRandomNumber(startRange, endRange));
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
    }
    document.write(`
        </ul>
      </p>
    <li>
  `);
}
