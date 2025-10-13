"use strict";

// if (confirm("Почати тестування?")) {
// window.onload = function () {};

const resultList = document.getElementById("resultList");
// if (!resultItem) return;
const taskInput = document.querySelector(".form__input--task");
const addButton = document.querySelector(".form__button--add");

let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

function printTasks() {
  resultList.innerText = "";

  tasks.forEach((taskObject) => {
    const liTag = createTaskEl(taskObject.title);

    resultList.append(liTag);
  });
}

function createTaskEl(title) {
  const liTag = document.createElement("li");

  const spanTag = document.createElement("span");
  spanTag.innerText = `${title}`;

  liTag.append(spanTag);

  return liTag;
}

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addButton.addEventListener("click", () => {
  const currentId = Math.random().toString(36).substring(2, 9);
  const taskObject = {
    id: currentId,
  };

  if (taskObject) {
    taskObject.title = taskInput.value.trim();
    if (taskObject.title === "") return;
    tasks.push(taskObject);
    saveData();
    printTasks();
    taskInput.value = "";
  }
});

function deleteTask(index) {
  tasks.splice(index, 1);
  saveData();
  printTasks();
}

setInterval(() => {
  if (tasks.length === 0) {
    localStorage.removeItem("tasks");
    return;
  }

  const randomIndex = Math.floor(Math.random() * tasks.length);
  const taskObject = tasks[randomIndex];

  const isConfirmed = confirm(
    `Задача "${taskObject.title}" виконана, видалити?`
  );

  if (isConfirmed) {
    deleteTask(randomIndex);
  }
}, 10000);

// ----------------------------------------------------------------------
// class StorageDB {
//   constructor(storageKey) {
//     this.storageKey = storageKey;
//   }

//   loadData() {
//     if (localStorage.getItem(this.storageKey))
//       return JSON.parse(localStorage.getItem(this.storageKey));
//     else return [];
//   }

//   saveData(list) {
//     localStorage.setItem(this.storageKey, JSON.stringify(list));
//   }

//   addItem(item) {
//     const list = this.loadData();
//     list.push(item);
//     this.saveData(list);
//   }

//   deleteItem(id) {
//     let list = this.loadData();
//     list = list.filter((el) => el.id != id);
//     this.saveData(list);
//   }

//   deleteItemByIndex(currentIndex) {
//     let list = this.loadData();
//     // list = list.filter((element, index) => currentIndex != index);
//     list.splice(currentIndex, 1);
//     this.saveData(list);
//   }

// randomChoice() {
//   if (this.storageKey.length === 0) return;
//   const randomIndex = Math.floor(Math.random() * list.length);
//   const task = list[randomIndex];
//   const isConfirmed = confirm(`Виконати задачу: ${task.title}?`);

//   if (isConfirmed) {
//     deleteItemByIndex(randomIndex);
//   }
// }
// }

// function printTasks() {
//   const targetContainer = document.getElementById(targetContainerSelector);
//   targetContainer.innerHTML = "";
//   for (const task of list) {
//     targetContainer.append(createTaskEl(task));
//   }
// }

// function addTask(storageKey, targetContainerSelector) {
//   const title = document.querySelector(".form__input--task").value;

//   const list = new StorageDB(storageKey).addItem({
//     id: Math.random().toString(36).substring(2, 9),
//     title,
//   });

//   printTasks(storageKey, targetContainerSelector);
//   document.querySelector(".form__input--task").value = "";

//   printTasks(storageKey, targetContainerSelector);
// }
// }
