"use strict";

// if (confirm("Почати тестування?")) {
const cars = [
  {
    id: 1,
    make: "Mercedes",
    year: 2018,
    price: 25000,
  },
  {
    id: 2,
    make: "Opel",
    year: 2000,
    price: 5000,
  },
  {
    id: 3,
    make: "Opel",
    year: 2004,
    price: 15000,
  },
  {
    id: 4,
    make: "Audi",
    year: 2000,
    price: 7000,
  },
];

window.onload = function () {
  const resultList = document.getElementById("resultList");

  const list = new List(cars);

  console.log("list.list :>> ", list.list);
};

class List {
  list = [];

  constructor(initialList) {
    this.list = JSON.parse(JSON.stringify(initialList));
  }

  get list() {
    return this.list;
  }

  // set list(newList) {
  //   if (newList.light !== 0) {
  //     this.list = newList;
  //   }
  // }

  render() {
    console.log("this.list :>> ", this.list);
  }
}

// function onClockIcon(event) {
//   const listItem = event.target.closest(".list__item");

//   const cloneListItem = listItem.cloneNode(true);
//   const listIconNode = cloneListItem.querySelector(".list__icon");
//   listIconNode.onclick = onClockIcon;

//   const parentListItem = listItem.parentElement;

//   if (parentListItem.classList.contains("board__list--left")) {
//     const boardListRight = document.querySelector(".board__list--right");
//     listItem.remove();
//     boardListRight.append(cloneListItem);
//   } else {
//     const boardListLeft = document.querySelector(".board__list--left");
//     listItem.remove();
//     boardListLeft.prepend(cloneListItem);
//   }
// }
// }
