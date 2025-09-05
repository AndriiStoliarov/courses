document.write(`
  <div class="wrapper">
  <!-- Header -->
  <header class="header" id="up">
    <div class="header__container">
      <div class="header__inner">
        <h1 class="header__title">Домашне завдання № 12</h1>
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
              <p><span class="tasks__title">Задача 4.</span> Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
              </p>
              <img class="tasks__image" src="../images/iteration-table.jpg" alt="iteration table image">
              <p>
                Тобто кожного разу після обміну елементів вивести поточний стан масиву
                на екран.
              </p>
            </li>
`);

if (confirm("Почати тестування?")) {
  const ELEMENTS_AMOUNT: number = 30;
  const RANDOM_NUMBER_FROM: number = 10,
    RANDOM_NUMBER_TO: number = 99;

  document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);

  let numbersArrayForBubbleSort: number[] = createArray(
    ELEMENTS_AMOUNT,
    RANDOM_NUMBER_FROM,
    RANDOM_NUMBER_TO
  );

  document.write(`
  <li class="list__item  list__item--weight">
    <span>Етапи сортування масиву бульбашковим методом.</span>
  </li>
`);

  showArray(numbersArrayForBubbleSort, "Масив випадкових чисел");

  document.write(`
    <li class="list__item">
      <span>Поточний стан масиву, після кожного обміну елементів:</span>
    </li>
  `);

  showChangeArrayBubbleSort(numbersArrayForBubbleSort);

  document.write(`
  <div class="up">
    <div class="up__container">
      <a class="up__link" href="#up">на гору</a>
    </div>
  </div>
`);

  document.write(`
  <li class="list__item  list__item--weight">
    <span>Етапи сортування масиву методом змішуванням.</span>
  </li>
`);

  let numbersArrayForShakerSort: number[] = createArray(
    ELEMENTS_AMOUNT,
    RANDOM_NUMBER_FROM,
    RANDOM_NUMBER_TO
  );

  showArray(numbersArrayForShakerSort, "Масив випадкових чисел");

  document.write(`
    <li class="list__item">
      <span>Поточний стан масиву, після кожного обміну елементів:</span>
    </li>
  `);

  showChangeArrayShakerSort(numbersArrayForShakerSort);

  document.write(`
  <div class="up">
    <div class="up__container">
      <a class="up__link" href="#up">на гору</a>
    </div>
  </div>
`);

  document.write(`
  <li class="list__item  list__item--weight">
    <span>Етапи сортування масиву методом включенням.</span>
  </li>
`);

  let numbersArrayForInsertionSort: number[] = createArray(
    ELEMENTS_AMOUNT,
    RANDOM_NUMBER_FROM,
    RANDOM_NUMBER_TO
  );

  showArray(numbersArrayForInsertionSort, "Масив випадкових чисел");

  document.write(`
    <li class="list__item">
      <span>Поточний стан масиву, після кожного обміну елементів:</span>
    </li>
  `);

  showChangeArrayInsertionSort(numbersArrayForInsertionSort);

  document.write(`
        </ul>
      </p>
    <li>
  `);

  // функция, показує змінений масив після обміну елементів при сортуванні методом включенням
  function showChangeArrayInsertionSort(array: number[]): void {
    let changeCounter: number = 0;

    for (let k: number = 0; k < array.length; k++) {
      let key: number = array[k],
        index: number = k - 1;

      while (index >= 0 && array[index] > key) {
        array[index + 1] = array[index];
        index--;
        changeCounter++;
        showArray(array, `${changeCounter}`);
      }

      array[index + 1] = key;
    }
  }

  // функция, показує змінений масив після обміну елементів при сортуванні методом змішування
  function showChangeArrayShakerSort(array: number[]): void {
    let leftIndex: number = 0,
      rightIndex: number = array.length - 1;
    let changeCounter: number = 0;

    while (leftIndex < rightIndex) {
      let change: boolean = false;
      // рух зліва направо
      for (let index = leftIndex + 1; index <= rightIndex; index++) {
        if (array[index - 1] > array[index]) {
          const temp = array[index - 1];
          array[index - 1] = array[index];
          array[index] = temp;

          change = true;
          changeCounter++;
          showArray(array, `${changeCounter}`);
        }
      }

      rightIndex--;

      if (change === false) break;
      // рух з права наліво
      change = false;

      for (let index = rightIndex; index > leftIndex; index--) {
        if (array[index - 1] > array[index]) {
          let temp = array[index - 1];
          array[index - 1] = array[index];
          array[index] = temp;

          change = true;
          changeCounter++;
          showArray(array, `${changeCounter}`);
        }
      }

      leftIndex++;

      if (change === false) break;
    }
  }

  // функция, показує змінений масив після обміну елементів при бульбашковому сортуванні массива
  function showChangeArrayBubbleSort(array: number[]): void {
    let endIndexLimit: number = array.length;
    let change: boolean = false;
    let changeCounter: number = 0;

    do {
      change = false;

      for (let index = 1; index < endIndexLimit; index++) {
        if (array[index - 1] > array[index]) {
          const temp = array[index - 1];
          array[index - 1] = array[index];
          array[index] = temp;

          change = true;
          changeCounter++;
          showArray(array, `${changeCounter}`);
        }
      }

      endIndexLimit--;
    } while (change);
  }

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
   * @param {number} startRange - Число для початку интервала.
   * @param {number} endRange - Число для кінця интервалу.
   * @returns {number} Випадково згенероване число.
   */
  function generateRandomNumber(startRange: number, endRange: number): number {
    const RANDOM_NUMBER_FROM: number = startRange,
      RANDOM_NUMBER_TO: number = endRange;

    const randomNumber: number =
      RANDOM_NUMBER_FROM +
      Math.floor(Math.random() * (RANDOM_NUMBER_TO - RANDOM_NUMBER_FROM + 1));

    return randomNumber;
  }

  /**
   * Функція, яка виводить масив.
   *
   * @param {number[]} array - Масив який треба вивести.
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
      <div class="up">
					<div class="up__container">
						<a class="up__link" href="#up">на гору</a>
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
