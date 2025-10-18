"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    const resultItem2 = document.getElementById("resultItem-2");
    if (!resultItem2) return;

    let list = [];
    list.push(new Product("Олівець", 12, 100));
    list.push(new Product("Зошит", 20, 240));
    list.push(new Product("Ручка", 50, 150));
    list.push(new Product("Лінійка", 35, 50));
    list.push(new Product("Маркер", 60, 80));

    const shop = new Shop(list);

    for (const product of shop) {
      resultItem2.append(renderItem(product));
    }

    function renderItem(item) {
      const ulTag = document.createElement("ul");
      const spanTag = document.createElement("span");
      spanTag.innerText = item;
      ulTag.append(spanTag);

      return ulTag;
    }
  };

  class Product {
    constructor(initTitle, initPrice, initAmount) {
      this.title = initTitle;
      this.price = initPrice;
      this.amount = initAmount;
    }

    toString() {
      return `${this.title}: ${this.amount} шт. × ${this.price.toFixed(
        2
      )} грн. = ${this.total()} грн..`;
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
      this.products = initProducts;
    }

    [Symbol.iterator]() {
      this.currentProduct = 0;

      return this;
    }

    next() {
      if (this.currentProduct < this.products.length) {
        return {
          done: false,
          value: this.products[this.currentProduct++].toString(),
        };
      } else {
        return { done: true };
      }
    }
  }
}
