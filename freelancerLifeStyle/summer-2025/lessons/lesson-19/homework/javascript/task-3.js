"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    // створюємо та додаємо тег для заголовка "відповідь"
    const resultTitleNode = document.getElementById("resultTitle");
    const spanTag = document.createElement("span");
    spanTag.className = "tasks__title";
    spanTag.innerText = "Відповідь:";
    resultTitleNode.prepend(spanTag);

    const resultItemNode = document.getElementById("resultItem");

    for (let amount = 0; amount < 5; amount++) {
      resultItemNode.prepend(getRandomOrderedList());
    }
    // створюємо та додаємо тег кнопка
    const buttonTag = document.createElement("button");
    buttonTag.className = "form__button  form__button--border-radius";
    buttonTag.innerText = "кнопка";

    const resultButtonNode = document.getElementById("resultButton");
    resultButtonNode.append(buttonTag);

    if (buttonTag) {
      buttonTag.onclick = function () {
        for (let index = 0; index < resultItemNode.children.length; index++) {
          if (resultItemNode.children[index].children.length % 2 === 0) {
            resultItemNode.children[index].classList.add("list__order--green");
          } else {
            resultItemNode.children[index].classList.add("list__order--red");
          }
        }
      };
    }
  };

  function getRandomOrderedList() {
    const orderedList = document.createElement("ol");
    orderedList.classList.add("list__order");

    for (let item = 0; item < getRangeNumber(1, 10); item++) {
      const li = document.createElement("li");

      li.className = "list__item  list__item--order";
      li.innerText = getRangeNumber(1, 100);

      orderedList.append(li);
    }

    return orderedList;

    function getRangeNumber(numberFrom, numberTo) {
      const randomNumber =
        numberFrom + Math.floor(Math.random() * (numberTo - numberFrom + 1));
      return randomNumber;
    }
  }
}
