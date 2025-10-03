"use strict";

if (confirm("Почати тестування?")) {
  const cars = [
    {
      make: "Mercedes",
      releaseYear: 2018,
      price: 25000,
    },
    {
      make: "Opel",
      releaseYear: 2000,
      price: 5000,
    },
    {
      make: "Opel",
      releaseYear: 2004,
      price: 15000,
    },
    {
      make: "Audi",
      releaseYear: 2000,
      price: 7000,
    },
  ];

  window.onload = function () {
    const resultList = document.getElementById("resultList");
    const list = new List(cars);
    resultList.append(list.render());

    const resultFilter = document.getElementById("resultFilter");
    const filter = new Filter();
    resultFilter.append(filter.render());
  };

  class List {
    constructor(initialList) {
      this.Value = initialList;
    }

    get Value() {
      return this.list;
    }

    set Value(newList) {
      this.list = JSON.parse(JSON.stringify(newList));
    }

    createUlTag() {
      const ulTag = document.createElement("ul");
      ulTag.classList.add("board__list");

      return ulTag;
    }

    deleteUlTag() {
      ulTag.remove();
    }

    createLiTag() {
      const liTag = document.createElement("li");

      return liTag;
    }

    render() {
      const ulTag = this.createUlTag();

      for (const car of this.list) {
        const liTag = this.createLiTag();
        liTag.innerHTML = `<p><span>${car.make}</span> - <span>${car.releaseYear} р.</span> - <span>${car.price}$</span></p>`;
        ulTag.append(liTag);
      }

      return ulTag;
    }
  }

  class Filter {
    constructor() {
      this.currentInstance = new List(cars);
      this.currentArray = this.currentInstance.Value;
      this.selectedMake = "0";
      this.selectedReleaseYear = "0";
    }

    getObjectValues(key) {
      this.currentList = new List(cars).Value;

      const values = this.currentList
        .map((car) => car[key])
        .filter((item, index, array) => array.indexOf(item) === index);

      return values;
    }

    createFormTag() {
      const formTag = document.createElement("form");
      formTag.className = "form  filter-form";

      return formTag;
    }

    createFieldsetTag() {
      const fieldsetTag = document.createElement("fieldset");
      fieldsetTag.classList.add("filter-form__item");

      return fieldsetTag;
    }

    createLabelTag(title, paramFor) {
      const labelTag = document.createElement("label");
      labelTag.classList.add("filter-form__label");
      labelTag.setAttribute("for", paramFor);
      labelTag.innerText = title;

      return labelTag;
    }

    filterChangeHandler(event) {
      const targetId = event.target.id;
      const targetValue = event.target.value;

      if (targetId === "makeCar") {
        this.selectedMake = targetValue;
      }
      if (targetId === "releaseYearCar") {
        this.selectedReleaseYear = targetValue;
      }

      const newArray = this.currentArray.filter((car) => {
        const filterMake =
          this.selectedMake === "0" || car.make === this.selectedMake;
        const filterReleaseYear =
          this.selectedReleaseYear === "0" ||
          car.releaseYear === Number(this.selectedReleaseYear);
        return filterMake && filterReleaseYear;
      });

      const newCars = new List(newArray);

      const ulTemp = resultList.querySelector("ul");
      ulTemp.remove();

      resultList.append(newCars.render());
    }

    createSelectTag(paramId) {
      this.selectTag = document.createElement("select");
      this.selectTag.classList.add("filter-form__select");
      this.selectTag.id = paramId;

      this.selectTag.onchange = this.filterChangeHandler.bind(this);

      return this.selectTag;
    }

    createOptionTag(value) {
      const optionTag = document.createElement("option");

      if (value) {
        optionTag.value = value;
        optionTag.innerText = value;
      } else {
        optionTag.value = 0;
        optionTag.selected;
      }

      return optionTag;
    }

    render() {
      const formTag = this.createFormTag();

      // створюємо фильтр "Марка" та додаем його до загальної форми
      const fieldsetTagMake = this.createFieldsetTag();
      fieldsetTagMake.append(this.createLabelTag("Марка:", "makeCar"));
      const selectTagMake = this.createSelectTag("makeCar");
      selectTagMake.append(this.createOptionTag());
      for (const make of this.getObjectValues("make")) {
        selectTagMake.append(this.createOptionTag(make));
      }
      fieldsetTagMake.append(selectTagMake);
      formTag.append(fieldsetTagMake);

      // створюємо фильтр "Рік випуску" та додаем його до загальної форми
      const fieldsetTagReleaseYear = this.createFieldsetTag();
      fieldsetTagReleaseYear.append(
        this.createLabelTag("Рік випуску:", "releaseYearCar")
      );
      const selectTagReleaseYear = this.createSelectTag("releaseYearCar");
      selectTagReleaseYear.append(this.createOptionTag());
      for (const releaseYear of this.getObjectValues("releaseYear")) {
        selectTagReleaseYear.append(this.createOptionTag(releaseYear));
      }
      fieldsetTagReleaseYear.append(selectTagReleaseYear);
      formTag.append(fieldsetTagReleaseYear);

      return formTag;
    }
  }
}
