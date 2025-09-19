"use strict";
if (confirm("Почати тестування?")) {
    class TMoney {
        constructor(initialMoneyUSD, initialCurrentRate) {
            // properties:
            this._moneyUSD = 0;
            this.currentRate = 0;
            this._moneyUSD = initialMoneyUSD;
            this.currentRate = initialCurrentRate;
        }
        // methods:
        toString() {
            return `TMoney[moneyAmountUSD: ${this.moneyUSD}, this.currentRate: ${this.currentRate}]`;
        }
        // метод для визначення курсу долара, при якому сума у гривнях збільшиться на 100.
        determineRateMoneyIncreaseBy100() {
            // конвертуємо всю суму в гривні
            const currentMoneyUAH = this._moneyUSD * this.currentRate;
            // збільшуємо суму на 100 грн.
            const currentMoneyUAHPlus100 = currentMoneyUAH + 100;
            // знаходимо на скільки відсотків збільшилася сума
            const moneyPercentIncrease = (currentMoneyUAHPlus100 * 100) / currentMoneyUAH - 100;
            // знаходимо на скільки доларів треба збільшити поточний курс
            const partOfRateIncreaseSumBy100 = (this.currentRate * moneyPercentIncrease) / 100;
            // збільшуємо поточній курс на знайдений відсоток в доларах
            const rateIncreaseSumBy100 = this.currentRate + partOfRateIncreaseSumBy100;
            return rateIncreaseSumBy100;
        }
        // метод для додавання грошової маси з конвертацією в доларовий еквівалент.
        addMoney(currentMoneyUAH) {
            // знаходимо скільки коштує доларів одна гривня
            const currentRateUAHtoUSD = 1 / this.currentRate;
            // конвертуємо внесені гривні в долари
            const currentMoneyUSD = currentMoneyUAH * currentRateUAHtoUSD;
            this._moneyUSD += currentMoneyUSD;
        }
        // метод для вилучення грошової маси з конвертацією в доларовий еквівалент.
        withdrawalMoney(currentMoneyUAH) {
            // знаходимо скільки коштує доларів одна гривня
            const currentRateUAHtoUSD = 1 / this.currentRate;
            // конвертуємо в долари гривні, які треба вилучити
            const currentMoneyUSD = currentMoneyUAH * currentRateUAHtoUSD;
            this._moneyUSD -= currentMoneyUSD;
        }
        // гетер для поля moneyUSD.
        get moneyUSD() {
            return this._moneyUSD;
        }
        // метод для виводу об'єкта.
        showObject() {
            document.write(`
    <li class="list__item">
      <span>Вхідний об'ект: {</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>сума грошей у доларах: ${this._moneyUSD.toFixed(2)},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>поточній курс: ${this.currentRate}</span><br>
      <span>}.</span>
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
        const wallet = new TMoney(150, 41.28);
        wallet.showObject();
        document.write("<br>");
        wallet.addMoney(500);
        document.write(`
    <li class="list__item">
      <span>Загальна сума грошей після додавання 500 грн.: ${wallet.moneyUSD.toFixed(2)}</span>
    </li>
  `);
        wallet.withdrawalMoney(200);
        document.write(`
    <li class="list__item">
      <span>Загальна сума грошей після вилучення 200 грн.: ${wallet.moneyUSD.toFixed(2)}</span>
    </li>
  `);
        const rateIncreaseSumBy100 = wallet.determineRateMoneyIncreaseBy100();
        document.write(`
    <li class="list__item">
      <span>Курс долара, при якому сума у гривнях збільшиться на 100 грн.: ${rateIncreaseSumBy100.toFixed(2)}</span>
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
    document.write(`
        </ul>
      </p>
    <li>
  `);
}
