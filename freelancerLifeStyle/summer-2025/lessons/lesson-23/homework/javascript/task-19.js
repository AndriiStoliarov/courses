"use strict";

if (confirm("Почати тестування?")) {
  window.onload = function () {
    const resultList = document.getElementById("resultList");
    if (!resultList) return;
    const taskInput = document.querySelector(".form__input--task");
    const addButton = document.querySelector(".form__button--add");

    addButton.addEventListener("click", () => {
      const currentId = Math.random().toString(36).substring(2, 9);
      const taskObject = {
        id: currentId,
      };

      if (taskObject) {
        taskObject.title = taskInput.value.trim();
        if (taskObject.title === "") return;
        tasks.push(taskObject);
        saveTasks();
        printTasks();
        taskInput.value = "";
      }
    });

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
    }, 7000);
  };

  let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    printTasks();
  }

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
}
