"use strict";
// if (confirm("Почати тестування?")) {

document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);

try {
  document.write(`
    <li class="list__item">
      <span>Кількість додатних чисел в масиві: ${positiveAmount}.</span>
    </li>
  `);
} catch (error) {
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
// }
