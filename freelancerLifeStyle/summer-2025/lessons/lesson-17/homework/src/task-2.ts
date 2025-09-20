if (confirm("Почати тестування?")) {
  interface ICompanyCar {
    // properties:
    driver: string;
    make: string;
    number: string;
    // methods:
    toString(): string;
    showCompanyCar(): void;
  }

  class CompanyCar {
    // properties:
    private static instance: CompanyCar;

    private make: string = "";
    private number: string = "";
    private driver: string = "";

    constructor(
      initialMake: string,
      initialNumber: string,
      initialDriver: string
    ) {
      if (CompanyCar.instance) return CompanyCar.instance;

      this.driver = initialDriver;
      this.make = initialMake;
      this.number = initialNumber;

      CompanyCar.instance = this;
    }

    // methods:
    toString(): string {
      return `CompanyCar:[${this.make}, ${this.number}, ${this.driver}]`;
    }
    // метод для виводу властивостей.
    public showCompanyCar(): void {
      document.write(`
    <li class="list__item">
      <span>&ensp;</span><span>&ensp;</span><span>Марка: ${this.make},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>Номер: ${this.number},</span><br>
      <span>&ensp;</span><span>&ensp;</span><span>Водій: ${this.driver}.</span>
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
    const companyCar1 = new CompanyCar("BMW", "A258HP", "Ivan");

    document.write(`
    <li class="list__item">
      <span>Властивості першого екземпляра класу:</span>
    </li>
  `);

    companyCar1.showCompanyCar();

    document.write("<br>");

    const companyCar2 = new CompanyCar("Audi", "P366NH", "Max");

    document.write(`
    <li class="list__item">
      <span>Властивості класу при спробі створити ще один екземпляр:</span>
    </li>
  `);

    companyCar2.showCompanyCar();
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
    function generateRandomNumber(
      numberFrom: number,
      numberTo: number
    ): number {
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
}
