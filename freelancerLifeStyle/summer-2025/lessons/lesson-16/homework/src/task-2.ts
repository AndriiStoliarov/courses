// if (confirm("Почати тестування?")) {
interface ITMoney {
  // properties:
  _moneyUSD: number;
  currentRate: number;
  // methods:
  toString(): string;
  // getAnySumWithdrawn(sumWithdrawn: number): number;
  // getMaxSumWithdrawn(): number;
  // getMinSumWithdrawn(): number;
  addMoney(currentMoneyUAH: number): void;
  withdrawalMoney(currentMoneyUAH: number): void;
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
  // метод для додавання грошової маси з конвертацією в доларовий еквівалент.
  addMoney(currentMoneyUAH: number): void {
    const currentRateUAHtoUSD = 1 / this.currentRate;
    const currentMoneyAmountUSD = currentMoneyUAH * currentRateUAHtoUSD;

    this._moneyUSD += currentMoneyAmountUSD;
  }
  // метод для вилучення грошової маси з конвертацією в доларовий еквівалент.
  withdrawalMoney(currentMoneyUAH: number): void {
    const currentRateUAHtoUSD = 1 / this.currentRate;
    const currentMoneyAmountUSD = currentMoneyUAH * currentRateUAHtoUSD;

    this._moneyUSD -= currentMoneyAmountUSD;
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
  const wallet = new TMoney(300, 41.28);

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
} catch (error: any) {
  document.write(`
    <li class="list__item">
      <span>Текст повідомлення : ${error.message}</span>
    </li>
  `);
}

// try {
//   const atm4 = new TBankomat(500, 500, 500, 400, 300, 300);

//   document.write(`
//     <li class="list__item">
//       <span>Текст повідомлення при спробі зняти суму (2365 грн.), яку може видати банкомат: ${atm4.isAnySumWithdrawn(
//         2365
//       )}</span>
//     </li>
//   `);
// } catch (error: any) {
//   console.log(error.message);
// }

document.write(`
        </ul>
      </p>
    <li>
  `);
// }
