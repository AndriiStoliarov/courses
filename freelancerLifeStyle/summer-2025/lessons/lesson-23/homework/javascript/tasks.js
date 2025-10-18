"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    task5();
    task6();
    task7();
    task8();
    task9();
    task10();
  };

  // Задача 5. Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.
  function task5() {
    const resultItem5 = document.getElementById("resultItem-5");
    if (!resultItem5) return;
    const resultItemAges = document.getElementById("resultItem-ages");
    if (!resultItemAges) return;

    const ages = [12, 13, 15, 12, 15, 12, 13, 13, 12, 15];
    resultItemAges.append(showArray(ages, "Масив з віком учнів"));

    const agesMap = new Map();

    for (const age of ages) {
      let counter = agesMap.get(age) ?? 0;
      agesMap.set(age, counter + 1);
    }

    agesMap.forEach((counter, age) => {
      const liTag = renderItem(`${age} р., зустрічається ${counter} р..`);
      resultItem5.append(liTag);
    });

    const max = Math.max(...agesMap.keys());

    resultItem5.append(showString(max, " Максимальній вік учня"));
  }

  // Задача 6. Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.
  function task6() {
    const resultItem6 = document.getElementById("resultItem-6");
    if (!resultItem6) return;

    const books = [
      { title: "Кобзар", year: 1840, author: "Тарас Шевченко" },
      { title: "Гайдамаки", year: 1841, author: "Тарас Шевченко" },
      { title: "Тигролови", year: 1944, author: "Іван Багряний" },
      { title: "Захар Беркут", year: 1883, author: "Іван Франко" },
      { title: "Борислав сміється", year: 1889, author: "Іван Франко" },
      { title: "З вершин і низин", year: 1896, author: "Іван Франко" },
      {
        title: "Вечори на хуторі біля Диканьки",
        year: 1832,
        author: "Микола Гоголь",
      },
      { title: "Лісова пісня", year: 1911, author: "Леся Українка" },
      { title: "Бояриня", year: 1897, author: "Леся Українка" },
      { title: "Майстер і Маргарита", year: 1967, author: "Михайло Булгаков" },
      { title: "Біла гвардія", year: 1925, author: "Михайло Булгаков" },
      { title: "Анна Кареніна", year: 1877, author: "Лев Толстой" },
    ];

    console.log("Задача 6. Масив книг :>> ", books);

    const booksMap = new Map();

    for (const book of books) {
      let counter = booksMap.get(book.author) ?? 0;
      booksMap.set(book.author, counter + 1);
    }

    for (const [author, counter] of booksMap) {
      const liTag = renderItem(`${author} є автором ${counter} кн..`);
      resultItem6.append(liTag);
    }
  }

  // Задача 7. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
  function task7() {
    const resultItem7 = document.getElementById("resultItem-7");
    if (!resultItem7) return;
    const resultItemVisitors = document.getElementById("resultItem-visitors");
    if (!resultItemVisitors) return;

    const visitors = [
      "ivan",
      "andrii",
      "ivan",
      "andrii",
      "peter",
      "max",
      "andrii",
      "vika",
      "peter",
      "guest",
      "guest",
      "ivan",
      "oleg",
      "vika",
      "andrii",
    ];
    resultItemVisitors.append(showArray(visitors, "Масив відвідувачів"));

    const visitorsMap = new Map();

    for (const visitor of visitors) {
      let counter = visitorsMap.get(visitor) ?? 0;
      visitorsMap.set(visitor, counter + 1);
    }

    visitorsMap.forEach((counter, visitor) => {
      const liTag = renderItem(
        `Клієнт ${visitor}, відвідав сайт ${counter} р..`
      );
      resultItem7.append(liTag);
    });
  }

  // Задача 8. Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.
  function task8() {
    const resultItem8 = document.getElementById("resultItem-8");
    if (!resultItem8) return;

    const students = [
      { name: "Іваненко Іван", course: 1, faculty: "Факультет інформатики" },
      { name: "Петренко Олена", course: 2, faculty: "Факультет економіки" },
      { name: "Ковальчук Андрій", course: 3, faculty: "Факультет інформатики" },
      { name: "Сидоренко Марія", course: 1, faculty: "Факультет філології" },
      { name: "Бондаренко Тарас", course: 4, faculty: "Факультет математики" },
      { name: "Гуменна Оксана", course: 2, faculty: "Факультет інформатики" },
      { name: "Мельник Ярослав", course: 3, faculty: "Факультет фізики" },
      { name: "Литвиненко Наталія", course: 1, faculty: "Факультет економіки" },
      { name: "Руденко Олег", course: 2, faculty: "Факультет математики" },
      { name: "Кравець Анна", course: 4, faculty: "Факультет філології" },
      { name: "Ткачук Микола", course: 3, faculty: "Факультет інформатики" },
      { name: "Назаренко Вікторія", course: 2, faculty: "Факультет фізики" },
    ];

    console.log("Задача 8. Масив студентів :>> ", students);

    const facultySet = new Set(students.map((student) => student.faculty));

    const liTag = renderItem(
      `Кількість різних факультетів: ${facultySet.size}.`
    );
    resultItem8.append(liTag);

    const studentsMap = new Map();

    for (const student of students) {
      let counter = studentsMap.get(student.course) ?? 0;
      studentsMap.set(student.course, counter + 1);
    }

    studentsMap.forEach((counter, course) => {
      const liTag = renderItem(
        `На ${course} курсі навчається ${counter} студента.`
      );
      resultItem8.append(liTag);
    });
  }

  // Задача 9. Дано масив показів температур. Підрахувати кількість входжень кожного із показів: let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]. Заокруглити вверх значення та підрахувати кількість різних показів.
  function task9() {
    const resultItem9 = document.getElementById("resultItem-9");
    if (!resultItem9) return;
    const resultItemTemperatures = document.getElementById(
      "resultItem-temperatures"
    );
    if (!resultItemTemperatures) return;

    const temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9];
    resultItemTemperatures.append(
      showArray(temperatures, "Масив показів температур")
    );

    const temperaturesMap = new Map();

    for (const temperature of temperatures) {
      let counter = temperaturesMap.get(temperature) ?? 0;
      temperaturesMap.set(temperature, counter + 1);
    }

    temperaturesMap.forEach((counter, temperature) => {
      const liTag = renderItem(
        `Показ ${temperature}, кількість входжень: ${counter}.`
      );
      resultItem9.append(liTag);
    });

    const ceilTemperatures = temperatures.map((temperature) =>
      Math.ceil(temperature)
    );
    resultItem9.append(
      showArray(ceilTemperatures, "Масив заокруглених показів температур")
    );

    const temperaturesSet = new Set(ceilTemperatures);

    const liTag = renderItem(
      `Кількість різних показів: ${temperaturesSet.size}.`
    );
    resultItem9.append(liTag);
  }

  // Задача 10. Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії. Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики. Також підрахувати скільки всього студентів відвідують хоча б один гурток.
  function task10() {
    const resultItem10 = document.getElementById("resultItem-10");
    if (!resultItem10) return;

    const mathClub = [
      "Іваненко",
      "Петренко",
      "Ковальчук",
      "Сидоренко",
      "Бондаренко",
      "Гуменна",
      "Мельник",
      "Литвиненко",
      "Руденко",
      "Кравець",
      "Ткачук",
      "Назаренко",
    ];
    const historyClub = [
      "Петренко",
      "Сидоренко",
      "Мельник",
      "Кравець",
      "Гуменна",
      "Шевчук",
      "Бондар",
      "Козак",
      "Гнатюк",
      "Орлик",
      "Савченко",
      "Хмельницький",
    ];

    console.log("Задача 10. Гурток з математики :>> ", mathClub);
    console.log("Задача 10. Гурток з історії :>> ", historyClub);

    const mathClubSet = new Set(mathClub);
    const historyClubSet = new Set(historyClub);

    const intersectionSet = historyClubSet.intersection(mathClubSet);
    const liTag1 = renderItem(
      `Кількість студентів, з гуртка з історії, які також відвідують гурток з математики: ${intersectionSet.size}.`
    );
    resultItem10.append(liTag1);

    const symmetricDifferenceSet =
      mathClubSet.symmetricDifference(historyClubSet);
    const liTag2 = renderItem(
      `Кількість студентів, які відвідують хоча б один гурток: ${symmetricDifferenceSet.size}.`
    );
    resultItem10.append(liTag2);
  }
  /**
   * Функція, яка створює необхідні теги для відображення.
   */
  function renderItem(item) {
    const liTag = document.createElement("li");
    const spanTag = document.createElement("span");
    spanTag.innerText = item;
    liTag.append(spanTag);

    return liTag;
  }
  /**
   * Функція, яка виводить масив.
   */
  function showArray(array, caption) {
    const spanParentTag = document.createElement("span");

    const spanTagStart = document.createElement("span");
    spanTagStart.innerText = `${caption}: [`;
    spanParentTag.append(spanTagStart);

    const string = array.join(", ");
    spanParentTag.append(string);

    const spanTagEnd = document.createElement("span");
    spanTagEnd.innerText = "].";
    spanParentTag.append(spanTagEnd);

    return spanParentTag;
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
}
