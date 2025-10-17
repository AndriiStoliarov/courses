"use strict";

// if (confirm("Почати тестування?")) {
window.onload = function () {
  const resultItem2 = document.getElementById("resultItem-2");
  if (!resultItem2) return;

  let list = [];
  list.push(new Product("Олівець", 12, 100));
  list.push(new Product("Зошит", 20, 240));
  list.push(new Product("Ручка", 50, 150));
  list.push(new Product("Лінійка", 35, 50));
  list.push(new Product("Маркер", 60, 80));

  // const shop = new Shop();
  console.log("list :>> ", list);
};

class Product {
  constructor(initTitle, initPrice, initAmount) {
    this.title = initTitle;
    this.price = initPrice;
    this.amount = initAmount;
  }

  toString() {
    return `${this.title} — ${this.amount} шт. × ${this.price.toFixed(
      2
    )} = ${this.total().toFixed(2)}`;
  }

  toJSON() {
    return { title: this.title, price: this.price, amount: this.amount };
  }

  total() {
    return Number(this.price * this.amount).toFixed(2);
  }
}

class Shop {
  constructor(initProducts) {
    this.products = [...initProducts];
  }

  // set Products(value) {
  //   if (this.products.length > 0) {
  //     this.number = value;
  //   } else {
  //     throw new Error("Номер не відповідає формату.");
  //   }
  // }

  // get Products() {
  //   return this.products;
  // }

  [Symbol.iterator]() {
    this.currentProduct = 0;

    return this;
  }

  next() {
    if (this.currentProduct <= this.products.length - 1) {
      return { done: false, value: this.currentProduct++ };
    } else {
      return { done: true };
    }
  }
}

class PhoneNumber {
  constructor(initNumber) {
    this.Number = initNumber;
  }

  set Number(value) {
    if (/^0\d{9}$/.test(value)) {
      this.number = value;
    } else {
      throw new Error("Номер не відповідає формату.");
    }
  }

  get Number() {
    return this.number;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      const prefix = this.Number.slice(1, 3);
      let operator;

      switch (prefix) {
        case "50":
        case "66":
        case "95":
        case "99":
          operator = "MTC";
          break;
        case "67":
        case "68":
        case "96":
        case "97":
        case "98":
          operator = "Kyivstar";
          break;
        case "63":
        case "73":
        case "93":
          operator = "Lifecell";
          break;
        default:
          operator = "Unknown operator";
      }

      return operator;
    }
  }
}
// }
