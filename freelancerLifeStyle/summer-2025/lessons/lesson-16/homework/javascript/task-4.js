"use strict";
class TBankomat {
    constructor(initialBanknote5Amount, initialBanknote10Amount, initialBanknote20Amount, initialBanknote50Amount, initialBanknote100Amount, initialBanknote200Amount) {
        // properties:
        this.banknote5Amount = 0;
        this.banknote10Amount = 0;
        this.banknote20Amount = 0;
        this.banknote50Amount = 0;
        this.banknote100Amount = 0;
        this.banknote200Amount = 0;
        this.banknote5Amount = initialBanknote5Amount;
        this.banknote10Amount = initialBanknote10Amount;
        this.banknote20Amount = initialBanknote20Amount;
        this.banknote50Amount = initialBanknote50Amount;
        this.banknote100Amount = initialBanknote100Amount;
        this.banknote200Amount = initialBanknote200Amount;
    }
    // methods:
    toString() {
        return `TBankomat[banknotes 5: ${this.banknote5Amount}, banknotes 10: ${this.banknote10Amount}, banknotes 20: ${this.banknote20Amount}, banknotes 50: ${this.banknote50Amount}, banknotes 100: ${this.banknote100Amount}, banknotes 200: ${this.banknote200Amount}]`;
    }
    // метод для знаходження будь-якої суми, яку може видати банкомат.
    getAnySumWithdrawn(sumWithdrawn) {
        let sumWithdrawnLocal = sumWithdrawn;
        //2365
        const banknote200quantity = Math.floor(sumWithdrawn / 200);
        if (banknote200quantity !== 0) {
            if (this.banknote200Amount > banknote200quantity) {
                this.banknote200Amount - banknote200quantity;
                sumWithdrawnLocal - banknote200quantity;
            }
        }
    }
    // метод для знаходження максимальної суми, яку може видати банкомат.
    getMaxSumWithdrawn() {
        const maxSumWithdrawn = this.banknote5Amount * 5 +
            this.banknote10Amount * 10 +
            this.banknote20Amount * 20 +
            this.banknote50Amount * 50 +
            this.banknote100Amount * 100 +
            this.banknote200Amount * 200;
        return maxSumWithdrawn;
    }
    // метод для знаходження мінімальної суми, яку може видати банкомат.
    getMinSumWithdrawn() {
        let minSumWithdrawn = 0;
        if (this.banknote5Amount > 0) {
            minSumWithdrawn = 5;
        }
        else if (this.banknote10Amount > 0) {
            minSumWithdrawn = 10;
        }
        else if (this.banknote20Amount > 0) {
            minSumWithdrawn = 20;
        }
        else if (this.banknote50Amount > 0) {
            minSumWithdrawn = 50;
        }
        else if (this.banknote100Amount > 0) {
            minSumWithdrawn = 100;
        }
        else if (this.banknote200Amount > 0) {
            minSumWithdrawn = 200;
        }
        else {
            throw new Error("The ATM is empty.");
        }
        return minSumWithdrawn;
    }
}
const atm = new TBankomat(500, 500, 500, 400, 300, 300);
console.log("atm.toString() :>> ", atm.toString());
console.log("atm.getMaxSumWithdrawn() :>> ", atm.getMaxSumWithdrawn());
console.log("atm.getMinSumWithdrawn() :>> ", atm.getMinSumWithdrawn());
document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);
document.write(`
    <li class="list__item">
      <span>Пара для танців: дивіться консоль.</span>
    </li>
  `);
document.write(`
        </ul>
      </p>
    <li>
  `);
// }
