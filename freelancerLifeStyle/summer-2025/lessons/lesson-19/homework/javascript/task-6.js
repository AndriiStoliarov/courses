"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    const listIconNodes = document.querySelectorAll(".list__icon");

    for (const iconNode of listIconNodes) {
      iconNode.onclick = onClockIcon;
    }
  };

  function onClockIcon(event) {
    const listItem = event.target.closest(".list__item");

    const cloneListItem = listItem.cloneNode(true);
    const listIconNode = cloneListItem.querySelector(".list__icon");
    listIconNode.onclick = onClockIcon;

    const parentListItem = listItem.parentElement;

    if (parentListItem.classList.contains("board__list--left")) {
      const boardListRight = document.querySelector(".board__list--right");
      listItem.remove();
      boardListRight.append(cloneListItem);
    } else {
      const boardListLeft = document.querySelector(".board__list--left");
      listItem.remove();
      boardListLeft.prepend(cloneListItem);
    }
  }
}
