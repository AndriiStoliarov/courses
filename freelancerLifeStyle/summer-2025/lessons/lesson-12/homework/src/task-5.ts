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
              <p><span class="tasks__title">Задача 5.</span> Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
              </p>
            </li>
`);
// if (confirm("Почати тестування?")) {
let namesArray: string[] = [
  "Andrii",
  "Ivan",
  "Volodymyr",
  "Serhii",
  "Mykola",
  "Petro",
  "Maksym",
  "Taras",
  "Roman",
  "Bogdan",
  "Yevhen",
  "Ihor",
  "Olga",
  "Vitalii",
  "Yaroslav",
  "Olena",
  "Mariia",
  "Iryna",
  "Nataliia",
  "Tetiana",
];

document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);

showArray(namesArray, "Масив імен");

document.write("<br>");

changeArrayQuickSort(namesArray, 0, namesArray.length - 1);

showArray(namesArray, "Відсортований масив імен");

document.write("<br>");

document.write(`
    <li class="list__item">
      <span>Кількість обмінів під час сортування: .</span>
    </li>
  `);

document.write(`
        </ul>
      </p>
    <li>
  `);

// функция, яка сортує массив швидким методом.
function changeArrayQuickSort(
  array: (number | string)[],
  p: number,
  q: number
): void {
  if (p >= q) return;
  // ділимо на дві частини
  let i = Partition(array, p, q);
  // окремо сортуємо першу частину
  changeArrayQuickSort(array, p, i - 1);
  // окремо сортуємо другу частину
  changeArrayQuickSort(array, i + 1, q);

  // функція, яка ділить фрагмент від p до q на дві частини (<= pivot та > pivot)
  function Partition(array: (number | string)[], p: number, q: number) {
    let pivot: number | string = array[q];
    let i: number = p - 1;

    for (let j: number = p; j < q; j++) {
      if (array[j] <= pivot) {
        i = i + 1;

        swap(array, i, j);
      }
    }
    swap(array, i + 1, q);
    // повертаємо нову позицію pivot
    return i + 1;
  }

  // функция обміну елементів місцями
  function swap(array: (number | string)[], i: number, j: number) {
    const temp: number | string = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

/**
 * Функція, яка виводить масив.
 *
 * @param {(number | string)[]} array - Масив який треба вивести.
 * @param {string} caption - Підпис/заголовок до масиву.
 */
function showArray(array: (number | string)[], caption: string): void {
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
// }

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
