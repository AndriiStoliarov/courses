document.write(`
  <div class="wrapper">
  <!-- Header -->
  <header class="header" id="up">
    <div class="header__container">
      <div class="header__inner">
        <h1 class="header__title">Домашне завдання № 13</h1>
      </div><!-- /. header__inner -->
    </div><!-- /. header__container -->
  </header>

  <main class="page">
    <!-- Tasks -->
    <div class="tasks">
      <div class="tasks__container">
        <div class="tasks__inner">
          <ul class="tasks__items">
            <li class="tasks__item">
              <p><span class="tasks__title">Задача 1.</span> <span class="tasks__text  tasks__text--weight">Генерація всіх підмножин: </span>Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
              </p>
            </li>
`);

if (confirm("Почати тестування?")) {
  const elementsAmount: number = Number(
    prompt("Введіть кількість елементів для масиву:", "3")
  );

  const inputArray: number[] = createArray(elementsAmount, 1, 9);
  let tempArray: number[][] = [];

  document.write(`
  <li>
    <p>
      <span class="tasks__title">Відповідь:</span>
      <ul class="list">
  `);

  showArray(inputArray, "Вхідний масив");

  document.write("<br>");

  document.write(`
        </ul>
      </p>
    <li>
  `);

  // Рекурсивна функция, яка генерує всі можливі підмножини заданого масиву.
  function generatesSubsets(
    inputArray: number[],
    index: number = 0,
    resultArray: number[] = []
  ) {
    if (index === inputArray.length) {
      tempArray.push(resultArray);
      return;
    } else {
      generatesSubsets(inputArray, index + 1, resultArray);
      generatesSubsets(inputArray, index + 1, [
        ...resultArray,
        inputArray[index],
      ]);
    }
  }

  generatesSubsets(inputArray);
  // сортуємо елементи масиву за розміром довжини підмножини.
  tempArray.sort((array1: any, array2: any) => array1.length - array2.length);

  // showTwoDimensionalArray(tempArray, "Масив можливих підмножин");
  showTwoDimensionalArray(tempArray, "Масив можливих підмножин");

  /**
   * Функція повертає масив випадкових елементів.
   * @param sizeArray
   * @param startRange
   * @param endRange
   * @returns
   */
  function createArray(
    sizeArray: number,
    startRange: number,
    endRange: number
  ): number[] {
    let array: number[] = [];

    for (let index: number = 0; index < sizeArray; index++) {
      array.push(generateRandomNumber(startRange, endRange));
    }

    return array;
  }

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

  /**
   * Функція, яка виводить двовимірний масив.
   *
   * @param {number[][]} array - Масив, який треба вивести.
   * @param {string} caption - Підпис/опис до масиву.
   */
  function showTwoDimensionalArray(array: number[][], caption: string): void {
    document.write(`
      <li class="list__item">
        <span>${caption}: [</span>
        <br>
    `);

    for (let row of array) {
      document.write(`
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>[</span>
    `);

      for (let cell of row) {
        document.write(`
        <span>${cell}</span>
      `);
      }

      document.write(`
      <span>]</span>
      <br>
    `);
    }

    document.write(`
        <span>].</span>
      </li>
    `);
  }

  /**
   * Функція, яка виводить масив.
   *
   * @param {number[]} array - Масив, який треба вивести.
   * @param {string} caption - Підпис/заголовок до масиву.
   */
  function showArray(array: number[], caption: string): void {
    document.write(`
    <li class="list__item">
      <span>${caption}: [</span>
  `);

    for (let index: number = 0; index < array.length; index++) {
      document.write(`
      <span>${array[index]}</span>
    `);
    }

    document.write(`
        <span>].</span>
      </li>
    `);
  }
}

document.write(`
            </ul>
          </div><!-- /.tasks__inner -->
        </div><!-- /.tasks__container -->
      </div><!-- /.tasks -->

      <div class="up  up--left">
        <div class="up__container">
          <a class="up__link" href="../index.html">на головну</a>
        </div>
      </div>
    </main><!-- /.page -->

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__inner">
          <div class="footer__text"><span>&#169; </span>2025 Andrii Stoliarov</div>
        </div>
      </div><!-- /.footer__inner-->
    </footer>
  </div><!-- /.wrapper -->
`);
