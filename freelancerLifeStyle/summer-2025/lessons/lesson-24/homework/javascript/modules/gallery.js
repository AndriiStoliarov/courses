"use strict";

import { Card } from "./card.js";

export class Gallery {
  constructor(initData) {
    this.data = initData;
  }

  createUlTag() {
    const ulTag = document.createElement("ul");

    return ulTag;
  }

  render() {
    const ulTag = this.createUlTag();
    ulTag.className = "gallery";

    for (let index = 0; index < 15; index++) {
      this.data.getData().then((data) => {
        const card = new Card(data.image);
        ulTag.append(card.render());
      });
    }

    return ulTag;
  }
}
