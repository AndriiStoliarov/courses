"use strict";
if (confirm("Почати тестування?")) {
  const resultTitle = document.getElementById("resultTitle");
  const spanTag = document.createElement("span");
  // spanTag.innerHTML = '<span class="tasks__title">Відповідь:</span>';
  spanTag.className = "tasks__title";
  spanTag.innerText = "Відповідь:";
  resultTitle.prepend(spanTag);

  const table = document.createElement("table");
  table.classList.add("table");

  for (let row = 0; row < 3; row++) {
    const tr = document.createElement("tr");
    tr.classList.add("table__receipt");

    for (let cell = 0; cell < 4; cell++) {
      const td = document.createElement("td");
      td.classList.add("table__data");
      td.innerText = getRangeNumber(0, 1000);

      tr.append(td);
    }

    table.append(tr);
  }

  document.getElementById("resultItem").append(table);

  function getRangeNumber(numberFrom, numberTo) {
    const randomNumber =
      numberFrom + Math.floor(Math.random() * (numberTo - numberFrom + 1));
    return randomNumber;
  }
}
