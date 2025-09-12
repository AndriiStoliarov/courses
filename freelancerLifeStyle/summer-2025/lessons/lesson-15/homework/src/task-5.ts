document.write(`
  <div class="wrapper">
  <!-- Header -->
  <header class="header" id="up">
    <div class="header__container">
      <div class="header__inner">
        <h1 class="header__title">Домашне завдання № 15</h1>
      </div><!-- /. header__inner -->
    </div><!-- /. header__container -->
  </header>

  <main class="page">
    <!-- Tasks -->
    <div class="tasks">
      <div class="tasks__container">
        <div class="tasks__inner">
          <ul class="tasks__items">
            <li class="tasks__item">
              <p><span class="tasks__title">Задача 5.</span> Розробити клас «Керівник танців».
              </p>
              <img class="tasks__image" src="../images/class-dance-director.png" alt="shooting gallery table">
            </li>
`);

if (confirm("Почати тестування?")) {
  const BOYS_NAMES: string[] = [
    "Andrii",
    "Oleksandr",
    "Ivan",
    "Dmytro",
    "Serhii",
    "Yevhen",
    "Taras",
    "Mykola",
    "Yaroslav",
    "Roman",
  ];

  const GIRLS_NAMES: string[] = [
    "Olena",
    "Iryna",
    "Tetiana",
    "Kateryna",
    "Svitlana",
    "Natalia",
    "Oksana",
    "Viktoriia",
    "Anna",
    "Mariia",
  ];

  interface IDanceDirector {
    // properties
    boysName: string[];
    girlsName: string[];
    // methods
    getRandomBoysName(): string;
    getRandomGirlsName(): string;
    showCoupleForDancing(): void;
    showNewCoupleForDancing(): void;
  }

  class DanceDirector {
    // properties
    boysName: string[];
    girlsName: string[];

    constructor(boysName: string[], girlsName: string[]) {
      this.boysName = boysName;
      this.girlsName = girlsName;
    }

    // methods
    // метод для вибору випадкового імені хлопця.
    getRandomBoysName(): string {
      const randomIndex = Math.floor(Math.random() * this.boysName.length);

      return this.boysName[randomIndex];
    }
    // метод для вибору випадкового імені дівчини.
    getRandomGirlsName(): string {
      const randomIndex = Math.floor(Math.random() * this.girlsName.length);

      return this.girlsName[randomIndex];
    }
    // метод для виведення парі для танців.
    showCoupleForDancing(): void {
      const dancePartner1: string = this.getRandomBoysName();
      const dancePartner2: string = this.getRandomGirlsName();

      console.log(
        "Пара для танців :>> ",
        dancePartner1 + " & " + dancePartner2 + "."
      );
    }
    // метод для виведення нової парі для танців, кожні 5 секунд.
    showNewCoupleForDancing(): void {
      const timerFiveSecond = setInterval(() => {
        this.showCoupleForDancing();
      }, 5000);

      setTimeout(() => {
        clearInterval(timerFiveSecond);
      }, 60000);
    }
  }

  document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);

  document.write(`
    <li class="list__item">
      <span>Пара для танців: дивіться консоль.</span>
    </li>
  `);

  const coupleForDancing: IDanceDirector = new DanceDirector(
    BOYS_NAMES,
    GIRLS_NAMES
  );

  coupleForDancing.showCoupleForDancing();
  coupleForDancing.showNewCoupleForDancing();

  document.write(`
        </ul>
      </p>
    <li>
  `);
}

document.write(`
            </ul>
          </div><!-- /.tasks__inner -->
        </div><!-- /.tasks__container -->
      </div><!-- /.tasks -->

      <div class="up  up--left">
        <div class="up__container">
          <a class="up__link" href="../index.html">на головну</a>
        </div>
      </div>
    </main><!-- /.page -->

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__inner">
          <div class="footer__text"><span>&#169; </span>2025 Andrii Stoliarov</div>
        </div>
      </div><!-- /.footer__inner-->
    </footer>
  </div><!-- /.wrapper -->
`);
