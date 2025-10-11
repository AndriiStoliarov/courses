// "use strict";

// if (confirm("Почати тестування?")) {
window.onload = function () {
  // const resultItem = document.getElementById("resultItem");
  // if (!resultItem) return;

  printTasks("tasks", "resultItem");

  document.querySelector(".form__button--add").onclick = addTask.bind(
    null,
    "tasks",
    "resultItem"
  );
};

class StorageDB {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  loadData() {
    if (localStorage.getItem(this.storageKey))
      return JSON.parse(localStorage.getItem(this.storageKey));
    else return [];
  }

  saveData(list) {
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  addItem(item) {
    const list = this.loadData();
    list.push(item);
    this.saveData(list);
  }

  deleteItem(id) {
    let list = this.loadData();
    list = list.filter((el) => el.id != id);
    this.saveData(list);
  }

  updateItem(item) {
    const list = this.loadData();
    const elIndex = list.findIndex((el) => el.id == item.id);
    list[elIndex] = item;
    this.saveData(list);
  }

  getItem(id) {
    const list = this.loadData();
    return list.find((el) => el.id == id);
  }
}

function createTaskEl(taskObj) {
  const container = document.createElement("div");
  container.innerText = `${taskObj.title}`;
  return container;
}

function printTasks(storageKey, targetContainerSelector) {
  const list = new StorageDB(storageKey).loadData();
  const targetContainer = document.getElementById(targetContainerSelector);
  targetContainer.innerHTML = "";
  for (const task of list) {
    targetContainer.append(createTaskEl(task));
  }
}

function addTask(storageKey, targetContainerSelector) {
  const title = document.querySelector(".form__input--task").value;

  new StorageDB(storageKey).addItem({
    id: new Date().getTime(),
    title,
  });

  printTasks(storageKey, targetContainerSelector);
  document.querySelector(".form__input--task").value = "";
}
// }
