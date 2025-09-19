if (confirm("Почати тестування?")) {
  interface ITMoney {
    // properties:
    _moneyUSD: number;
    currentRate: number;
    // methods:
    toString(): string;
    addMoney(currentMoneyUAH: number): void;
    withdrawalMoney(currentMoneyUAH: number): void;
    determineRateMoneyIncreaseBy100(): number;
    showObject(): void;
  }

  class TMoney {
    // properties:
    private _moneyUSD: number = 0;
    public currentRate: number = 0;

    constructor(initialMoneyUSD: number, initialCurrentRate: number) {
      this._moneyUSD = initialMoneyUSD;
      this.currentRate = initialCurrentRate;
    }
    // methods:
    toString(): string {
      return `TMoney[moneyAmountUSD: ${this.moneyUSD}, this.currentRate: ${this.currentRate}]`;
    }
    // метод для визначення курсу долара, при якому сума у гривнях збільшиться на 100.
    determineRateMoneyIncreaseBy100(): number {
      // конвертуємо всю суму в гривні
      const currentMoneyUAH = this._moneyUSD * this.currentRate;
      // збільшуємо суму на 100 грн.
      const currentMoneyUAHPlus100 = currentMoneyUAH + 100;
      // знаходимо на скільки відсотків збільшилася сума
      const moneyPercentIncrease =
        (currentMoneyUAHPlus100 * 100) / currentMoneyUAH - 100;
      // знаходимо на скільки доларів треба збільшити поточний курс
      const partOfRateIncreaseSumBy100 =
        (this.currentRate * moneyPercentIncrease) / 100;
      // збільшуємо поточній курс на знайдений відсоток в доларах
      const rateIncreaseSumBy100 =
        this.currentRate + partOfRateIncreaseSumBy100;

      return rateIncreaseSumBy100;
    }
    // метод для додавання грошової маси з конвертацією в доларовий еквівалент.
    addMoney(currentMoneyUAH: number): void {
      // знаходимо скільки коштує доларів одна гривня
      const currentRateUAHtoUSD = 1 / this.currentRate;
      // конвертуємо внесені гривні в долари
      const currentMoneyUSD = currentMoneyUAH * currentRateUAHtoUSD;

      this._moneyUSD += currentMoneyUSD;
    }
    // метод для вилучення грошової маси з конвертацією в доларовий еквівалент.
    withdrawalMoney(currentMoneyUAH: number): void {
      // знаходимо скільки коштує доларів одна гривня
      const currentRateUAHtoUSD = 1 / this.currentRate;
      // конвертуємо в долари гривні, які треба вилучити
      const currentMoneyUSD = currentMoneyUAH * currentRateUAHtoUSD;

      this._moneyUSD -= currentMoneyUSD;
    }
    // гетер для поля moneyUSD.
    get moneyUSD(): number {
      return this._moneyUSD;
    }
    // метод для виводу об'єкта.
    showObject(): void {
      document.write(`
    <li class="list__item">
      <span>Вхідний об'ект: {</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>сума грошей у доларах: ${this._moneyUSD.toFixed(
        2
      )},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>поточній курс: ${
        this.currentRate
      }</span><br>
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
      <span>Загальна сума грошей після додавання 500 грн.: ${wallet.moneyUSD.toFixed(
        2
      )}</span>
    </li>
  `);

    wallet.withdrawalMoney(200);

    document.write(`
    <li class="list__item">
      <span>Загальна сума грошей після вилучення 200 грн.: ${wallet.moneyUSD.toFixed(
        2
      )}</span>
    </li>
  `);

    const rateIncreaseSumBy100: number =
      wallet.determineRateMoneyIncreaseBy100();

    document.write(`
    <li class="list__item">
      <span>Курсу долара, при якому сума у гривнях збільшиться на 100 грн.: ${rateIncreaseSumBy100.toFixed(
        2
      )}</span>
    </li>
  `);
  } catch (error: any) {
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
