"use strict";

// if (confirm("Почати тестування?")) {
window.onload = function () {
  const resultTitleNode = document.getElementById("resultTitle");
  const spanTag = document.createElement("span");
  spanTag.className = "tasks__title";
  spanTag.innerText = "Відповідь:";
  resultTitleNode.prepend(spanTag);

  const resultItemNode = document.getElementById("resultItem");

  for (let amount = 0; amount < 5; amount++) {
    resultItemNode.prepend(getRandomOrderedList());
  }

  const buttonTag = document.createElement("button");
  buttonTag.className = "form__button  form__button--border-radius";
  buttonTag.innerText = "кнопка";

  const resultButtonNode = document.getElementById("resultButton");
  resultButtonNode.append(buttonTag);

  // <button class="form__button  form__button--border-radius" type="button">кнопка</button>
};

function getRandomOrderedList() {
  const orderedList = document.createElement("ol");

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
// }
