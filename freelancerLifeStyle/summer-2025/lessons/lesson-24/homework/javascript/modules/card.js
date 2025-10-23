"use strict";

export class Card {
  constructor(initImage) {
    this.image = initImage;
  }

  createLiTag() {
    const liTag = document.createElement("li");

    return liTag;
  }

  createATag() {
    const aTag = document.createElement("a");

    return aTag;
  }

  createImgTag() {
    const imgTag = document.createElement("img");

    return imgTag;
  }

  render() {
    const liTag = this.createLiTag();
    liTag.className = "gallery__item";

    const aTag = this.createATag();
    aTag.className = "gallery__link";
    aTag.setAttribute("href", "#");

    const imgTag = this.createImgTag();
    imgTag.setAttribute("src", this.image);
    imgTag.className = "gallery__image";

    aTag.append(imgTag);
    liTag.append(aTag);

    return liTag;
  }
}
