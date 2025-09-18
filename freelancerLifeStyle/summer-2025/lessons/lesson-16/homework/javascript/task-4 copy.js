"use strict";
if (confirm("Почати тестування?")) {
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
        isAnySumWithdrawn(sumWithdrawn) {
            let sumWithdrawnLocal = sumWithdrawn;
            const minSumWithdrawn = this.getMinSumWithdrawn();
            const maxSumWithdrawn = this.getMaxSumWithdrawn();
            if (sumWithdrawn < minSumWithdrawn) {
                throw new Error("Запитана сума занадто мала.");
            }
            else if (sumWithdrawn > maxSumWithdrawn) {
                throw new Error("Запитана сума занадто висока.");
            }
            else if (sumWithdrawn % 5 !== 0) {
                throw new Error("Запитана сума має бути кратною 5.");
            }
            else {
                const banknote200quantity = Math.floor(sumWithdrawnLocal / 200);
                if (this.banknote200Amount > banknote200quantity) {
                    sumWithdrawnLocal -= banknote200quantity * 200;
                    this.banknote200Amount -= banknote200quantity;
                }
                else {
                    sumWithdrawnLocal -= this.banknote200Amount * 200;
                    this.banknote200Amount = 0;
                    // console.log("У банкоматі закінчилися купюри номіналом 200 гривень.");
                    document.write(`
            У банкоматі закінчилися купюри номіналом 200 гривень.
            <br>
          `);
                }
                const banknote100quantity = Math.floor(sumWithdrawnLocal / 100);
                if (this.banknote100Amount > banknote100quantity) {
                    sumWithdrawnLocal -= banknote100quantity * 100;
                    this.banknote100Amount -= banknote100quantity;
                }
                else {
                    sumWithdrawnLocal -= this.banknote100Amount * 100;
                    this.banknote100Amount = 0;
                    document.write(`
            У банкоматі закінчилися купюри номіналом 100 гривень.
            <br>
          `);
                }
                const banknote50quantity = Math.floor(sumWithdrawnLocal / 50);
                if (this.banknote50Amount > banknote50quantity) {
                    sumWithdrawnLocal -= banknote50quantity * 50;
                    this.banknote50Amount -= banknote50quantity;
                }
                else {
                    sumWithdrawnLocal -= this.banknote50Amount * 50;
                    this.banknote50Amount = 0;
                    document.write(`
            У банкоматі закінчилися купюри номіналом 50 гривень.
            <br>
          `);
                }
                const banknote20quantity = Math.floor(sumWithdrawnLocal / 20);
                if (this.banknote20Amount > banknote20quantity) {
                    sumWithdrawnLocal -= banknote20quantity * 20;
                    this.banknote20Amount -= banknote20quantity;
                }
                else {
                    sumWithdrawnLocal -= this.banknote20Amount * 20;
                    this.banknote20Amount = 0;
                    document.write(`
            У банкоматі закінчилися купюри номіналом 20 гривень.
            <br>
          `);
                }
                const banknote10quantity = Math.floor(sumWithdrawnLocal / 10);
                if (this.banknote10Amount > banknote10quantity) {
                    sumWithdrawnLocal -= banknote10quantity * 10;
                    this.banknote10Amount -= banknote10quantity;
                }
                else {
                    sumWithdrawnLocal -= this.banknote10Amount * 10;
                    this.banknote10Amount = 0;
                    document.write(`
            У банкоматі закінчилися купюри номіналом 10 гривень.
            <br>
          `);
                }
                const banknote5quantity = Math.floor(sumWithdrawnLocal / 5);
                if (this.banknote5Amount > banknote5quantity) {
                    sumWithdrawnLocal -= banknote5quantity * 5;
                    this.banknote5Amount -= banknote5quantity;
                }
                else {
                    sumWithdrawnLocal -= this.banknote5Amount * 5;
                    this.banknote5Amount = 0;
                    document.write(`
            У банкоматі закінчилися купюри номіналом 5 гривень.
            <br>
          `);
                }
            }
            return "Отримайте свої гроші.";
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
        // метод для виводу об'єкта.
        show() {
            document.write(`
    <li class="list__item">
      <span>Вхідний об'ект: {</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>кількість банкнот номіналом 5: ${this.banknote5Amount},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>кількість банкнот номіналом 10: ${this.banknote20Amount},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>кількість банкнот номіналом 20: ${this.banknote20Amount},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>кількість банкнот номіналом 50: ${this.banknote50Amount},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>кількість банкнот номіналом 100: ${this.banknote100Amount},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>кількість банкнот номіналом 200: ${this.banknote200Amount}</span><br>
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
    // document.write(`
    //     <li class="list__item">
    //       <span>Пара для танців: дивіться консоль.</span>
    //     </li>
    //   `);
    try {
        const atm = new TBankomat(500, 500, 500, 400, 300, 300);
        atm.show();
        document.write("<br>");
        document.write(`
    <li class="list__item">
      <span>Мінімальна сума, які може видати банкомат: ${atm.getMinSumWithdrawn()}.</span>
    </li>
  `);
        document.write(`
    <li class="list__item">
      <span>Максимальна сума, які може видати банкомат: ${atm.getMaxSumWithdrawn()}.</span>
    </li>
  `);
        atm.isAnySumWithdrawn(3);
    }
    catch (error) {
        document.write(`
    <li class="list__item">
      <span>Текст повідомлення при спробі зняти 3 грн.: ${error.message}</span>
    </li>
  `);
    }
    try {
        const atm2 = new TBankomat(500, 500, 500, 400, 300, 300);
        atm2.isAnySumWithdrawn(1800000);
    }
    catch (error) {
        document.write(`
    <li class="list__item">
      <span>Текст повідомлення при спробі зняти 1800000 грн.: ${error.message}</span>
    </li>
  `);
    }
    try {
        const atm3 = new TBankomat(500, 500, 500, 400, 300, 300);
        atm3.isAnySumWithdrawn(1063);
    }
    catch (error) {
        document.write(`
    <li class="list__item">
      <span>Текст повідомлення при спробі зняти 1063 грн.: ${error.message}</span>
    </li>
  `);
    }
    try {
        const atm4 = new TBankomat(500, 500, 500, 400, 300, 300);
        document.write(`
    <li class="list__item">
      <span>Текст повідомлення при спробі зняти суму (2365 грн.), яку може видати банкомат: ${atm4.isAnySumWithdrawn(2365)}</span>
    </li>
  `);
    }
    catch (error) {
        console.log(error.message);
    }
    try {
        const atm5 = new TBankomat(500, 500, 500, 400, 300, 300);
        document.write(`
    <li class="list__item">
      <span>Текст повідомлення при спробі зняти суму (92470 грн.), яку може видати банкомат: ${atm5.isAnySumWithdrawn(92470)}</span>
    </li>
  `);
    }
    catch (error) {
        console.log(error.message);
    }
    document.write(`
        </ul>
      </p>
    <li>
  `);
}
