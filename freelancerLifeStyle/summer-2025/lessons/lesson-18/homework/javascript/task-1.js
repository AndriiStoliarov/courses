"use strict";
if (confirm("Почати тестування?")) {
    class MathOperations {
        constructor() { }
        // methods:
        // метод для знаходження кількості додатних.
        static getPositiveAmount(numbers) {
            const positiveAmount = numbers.reduce((amount, number) => (number > 0 ? amount + 1 : amount), 0);
            return positiveAmount;
        }
        // метод для знаходження кількості від’ємних.
        static getNegativeAmount(numbers) {
            const negativeAmount = numbers.reduce((amount, number) => (number < 0 ? amount + 1 : amount), 0);
            return negativeAmount;
        }
        // метод для підрахунку кількості входжень деякого числа.
        static getCertainAmount(numbers, inputNumber) {
            const certainAmount = numbers.reduce((amount, number) => (number === inputNumber ? amount + 1 : amount), 0);
            return certainAmount;
        }
        // метод для виводу масиву.
        static showArray(numbers) {
            document.write(`
    <li class="list__item">
      <span>Вхідний масив: [</span>
  `);
            for (const number of numbers) {
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
        const numbers = createArray(20, -20, 20);
        MathOperations.showArray(numbers);
        document.write("<br>");
        const positiveAmount = MathOperations.getPositiveAmount(numbers);
        document.write(`
    <li class="list__item">
      <span>Кількість додатних чисел в масиві: ${positiveAmount}.</span>
    </li>
  `);
        const negativeAmount = MathOperations.getNegativeAmount(numbers);
        document.write(`
    <li class="list__item">
      <span>Кількість від’ємних чисел в масиві: ${negativeAmount}.</span>
    </li>
  `);
        const certainAmount = MathOperations.getCertainAmount(numbers, 10);
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
