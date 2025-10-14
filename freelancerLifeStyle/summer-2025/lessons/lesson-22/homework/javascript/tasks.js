"use strict";

// if (confirm("Почати тестування?")) {
window.onload = function () {
  const resultItemArray = document.getElementById("resultItemArray");
  if (!resultItemArray) return;

  const strings = [
    "hello",
    "abc123",
    "2025",
    "no_digits",
    "user1",
    "room 404",
    // "price: 100$",
    "test",
    "v2.0",
    "ID007",
    "zero0",
    // "plaintext",
  ];

  resultItemArray.append(showArray(strings, "Вхідний масив рядків"));

  const resultItemString = document.getElementById("resultItemString");
  if (!resultItemString) return;

  const string =
    "Замовлення №42: сума 15,30 грн; кількість — 12 шт.; знижка 03%; доставка: 08.11.2025. Примітки: код 99, контакт +380-67-45-12-34...";

  resultItemString.append(showString(string, "Вхідний рядок"));

  const resultItemCardNumbers = document.getElementById(
    "resultItemCardNumbers"
  );
  if (!resultItemCardNumbers) return;

  const cardNumbers =
    "Мої картки: 4142-3433-2323-3434, 5555666677778888, 1234 5678 9012 3456, 4000.1111.2222.3333, 5440*8999*1205*1123.";

  resultItemCardNumbers.append(
    showString(cardNumbers, "Вхідний рядок з номерами карток")
  );

  const resultItemSites = document.getElementById("resultItemSites");
  if (!resultItemSites) return;

  const sites =
    "Офіційні сайти: https://company.gov.ua, http://school.edu.ua, https://bank.com, https://minfin.gov, http://example.org, https://cabinet.gov.ua, https://university.edu.ua.";

  resultItemSites.append(showString(sites, "Вхідний рядок з адресами сайтів"));

  task1(strings);
  task2(strings);
  task3(strings);
  task4(strings);
  task5(strings);
  task6(string);
  task7(string);
  task8(string);
  task9(string);
  task10(string);
  task11(cardNumbers);
  task12(sites);
};

// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).
function task1(array) {
  const resultItem1 = document.getElementById("resultItem-1");
  if (!resultItem1) return;

  const exp = /\d/;
  const newArray = array.filter((string) => exp.test(string));

  resultItem1.append(showArray(newArray, "Масив рядків у яких є цифри"));
}
/**
 * Функція, яка виводить масив.
 */
function showArray(array, caption) {
  const spanParentTag = document.createElement("span");

  const spanTagStart = document.createElement("span");
  spanTagStart.innerText = `${caption}: [`;
  spanParentTag.append(spanTagStart);
  // for (const item of array) {
  //   const spanTag = document.createElement("span");
  //   spanTag.innerText = item;
  //   spanParentTag.append(spanTag);
  // }
  const string = array.join(", ");
  spanParentTag.append(string);

  const spanTagEnd = document.createElement("span");
  spanTagEnd.innerText = "].";
  spanParentTag.append(spanTagEnd);

  return spanParentTag;
}

// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.
function task2(array) {
  const resultItem2 = document.getElementById("resultItem-2");
  if (!resultItem2) return;

  const exp = /^\D*$/;
  const newArray = array.filter((string) => exp.test(string));

  resultItem2.append(showArray(newArray, "Масив рядків у яких немає цифр"));
}

// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.
function task3(array) {
  const resultItem3 = document.getElementById("resultItem-3");
  if (!resultItem3) return;

  // const exp = /[aeiouAEIOU]/;
  const exp = /[aeiou]/i;
  const newArray = array.filter((string) => exp.test(string));

  resultItem3.append(
    showArray(newArray, "Масив рядків у яких є голосні літери")
  );
}

// Задача 4. Дано масив рядків. Вивести ті, у яких немає голосних літер.
function task4(array) {
  const resultItem4 = document.getElementById("resultItem-4");
  if (!resultItem4) return;

  // const exp = /^[^aeiou]{1,}$/i;
  const exp = /^[^aeiou]+$/i;
  const newArray = array.filter((string) => exp.test(string));

  resultItem4.append(
    showArray(newArray, "Масив рядків у яких немає голосних літер")
  );
}

// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
function task5(array) {
  const resultItem5 = document.getElementById("resultItem-5");
  if (!resultItem5) return;

  // const exp = /[13]/;
  const exp = /(1|3)/;
  const newArray = array.filter((string) => exp.test(string));

  resultItem5.append(
    showArray(newArray, "Масив рядків у яких є або цифра 1 або цифра 3")
  );
}

// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.
function task6(string) {
  const resultItem6 = document.getElementById("resultItem-6");
  if (!resultItem6) return;

  const exp = /\d+/g;
  const newArray = string.match(exp) ?? [];
  // newArray === null ? (newArray = []) : newArray;
  resultItem6.append(showArray(newArray, "Усі числа, які є у тексті"));
}
/**
 * Функція, яка виводить рядок.
 */
function showString(string, caption) {
  const spanParentTag = document.createElement("span");

  const spanTagStart = document.createElement("span");
  spanTagStart.innerText = `${caption}: "`;
  spanParentTag.append(spanTagStart);

  spanParentTag.append(string);

  const spanTagEnd = document.createElement("span");
  spanTagEnd.innerText = '".';
  spanParentTag.append(spanTagEnd);

  return spanParentTag;
}

// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
function task7(string) {
  const resultItem7 = document.getElementById("resultItem-7");
  if (!resultItem7) return;

  // const exp = /\.{3}|\p{P}/gu;
  const exp = /\.{3}|[.,:;—]/g;
  const newArray = string.match(exp) ?? [];

  resultItem7.append(
    showArray(newArray, "Усі знаки пунктуації, які були використано")
  );
}

// Задача 8. Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
function task8(string) {
  const resultItem8 = document.getElementById("resultItem-8");
  if (!resultItem8) return;

  // const exp = /\.{3}|\p{P}/gu;
  // const exp = /\.{3}|[.,:;—\-!?«»“”„“()<>\*]/g;
  const exp = /\.{3}|[.,:;—\-]/g;
  const newArray = string.split(exp);

  resultItem8.append(
    showArray(newArray, "Усі складові, які розділені розділовими знаками")
  );
}

// Задача 9. Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd - день, mm - місяць, yyyy - рік).
function task9(string) {
  const resultItem9 = document.getElementById("resultItem-9");
  if (!resultItem9) return;

  // const exp = /\d{2}\.\d{2}\.\d{4}/;
  const exp = /\b\d{2}\.\d{2}\.\d{4}\b/;
  if (exp.test(string)) {
    resultItem9.append(
      showString(exp.exec(string), "Текст містить дату у форматі dd.mm.yyyy")
    );
  }
}

// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
function task10(string) {
  const resultItem10 = document.getElementById("resultItem-10");
  if (!resultItem10) return;

  // const exp = /(?<!\d,)\b\d{2}\b(?!,\d)/g;
  const exp = /\b\d{2}\b/g;
  const newArray = string.match(exp) ?? [];
  const digitsAmount = newArray.length ?? 0;

  resultItem10.append(
    showArray(newArray, `У рядку ${digitsAmount} двоцифрових чисел`)
  );
}

// Задача 11. Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434» ). Знайти усі такі номери (при цьому символи “-” можуть бути, а можуть і не бути, тобто так «4142343323233434»).
function task11(string) {
  const resultItem11 = document.getElementById("resultItem-11");
  if (!resultItem11) return;

  // const exp = /\b(\d{4}.?){4}\b/g;
  const exp = /\b(\d{4}[-\s]?){4}\b/g;
  const newArray = string.match(exp) ?? [];

  resultItem11.append(showArray(newArray, "Усі номери банківських карток"));
}

// Задача 12. Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”, але не обов'язково у кінці). Наприклад: “https://company.gov.ua”.
function task12(string) {
  const resultItem12 = document.getElementById("resultItem-12");
  if (!resultItem12) return;

  // const exp = /\b(\d{4}[-\s]?){4}\b/g;
  // /\.gov[^\.]/i.test(source);
  const exp = /\b(\d{4}[-\s]?){4}\b/g;
  const newArray = string.match(exp) ?? [];

  console.log("newArray :>> ", newArray);

  resultItem12.append(showArray(newArray, "Усі номери банківських карток"));
}
// }
