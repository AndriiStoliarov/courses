"use strict";

import { Fetch } from "./modules/fetch.js";
import { Card } from "./modules/card.js";
import { Gallery } from "./modules/gallery.js";

if (confirm("Почати тестування?")) {
  window.addEventListener("load", windowLoad);

  function windowLoad() {
    const resultItem = document.getElementById("resultItem");
    if (!resultItem) return;

    const API_URL = "https://randomfox.ca/floof/";

    const data = new Fetch(API_URL);
    const gallery = new Gallery(data);
    resultItem.append(gallery.render());

    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal__image");
    const galleryElement = document.querySelector(".gallery");

    async function loadMore() {
      let currentScrollY = 0;

      for (let item = 0; item < 10; item++) {
        data.getData().then((data) => {
          const card = new Card(data.image);
          galleryElement.append(card.render());
        });
      }

      galleryElement.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG") {
          const currentSrc = event.target.getAttribute("src");
          modalImg.setAttribute("src", currentSrc);

          currentScrollY = window.scrollY;

          modal.classList.add("show");
          document.body.classList.add("no-scroll");

          setTimeout(() => (modalImg.style.opacity = "1"), 300);
        }
      });

      modal.addEventListener("click", () => {
        modalImg.style.opacity = "0";

        setTimeout(() => {
          modal.classList.remove("show");
          document.body.classList.remove("no-scroll");

          window.scrollTo(0, currentScrollY);
        }, 300);
      });

      modalImg.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    }

    const trigger = document.querySelector("#load-trigger");

    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          await loadMore();
        }
      },
      {
        rootMargin: "0px 0px 200px 0px",
        threshold: 0,
      }
    );

    observer.observe(trigger);
  }
}
