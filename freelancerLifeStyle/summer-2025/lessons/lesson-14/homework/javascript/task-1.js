"use strict";
document.write(`
  <div class="wrapper">
  <!-- Header -->
  <header class="header" id="up">
    <div class="header__container">
      <div class="header__inner">
        <h1 class="header__title">Домашне завдання № 14</h1>
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
              <p><span class="tasks__title">Задача 1.</span> Описати масив об'єктів – сайтів розроблених компанією з такими властивостями:
              <ul class="list">
                <li class="list__item">
                  <span class="tasks__text  tasks__text--weight">----- Властивості ------</span>
                </li>
                <li class="list__item">
                  <span>- назва компанії на час розробки (назву періодично змінюють)</span>
                </li>
                <li class="list__item">
                  <span>- власник компанії</span>
                </li>
                <li class="list__item">
                  <span>- спонсори (масив спонсорів)</span>
                </li>
                <li class="list__item">
                  <ul class="list">
                    <li class="list__item">
                      <span>* прізвище спонсора</span>
                    </li>
                    <li class="list__item">
                      <span>* ім’я спонсора</span>
                    </li>
                    <li class="list__item">
                      <span>* сума вкладень спонсора</span>
                    </li>
                  </ul>
                </li>
                <li class="list__item">
                  <span>- рік випуску</span>
                </li>
                <li class="list__item">
                  <span>- вартість сайту</span>
                </li>
              </ul>
              <span class="tasks__text  tasks__text--weight">Знайти:</span>
              <ul class="list">
                <li class="list__item">
                  <span>1) загальну вартість усіх сайтів;</span>
                </li>
                <li class="list__item">
                  <span>2) кількість сайтів, що було зроблено між 2000 та 2009 роками;</span>
                </li>
                <li class="list__item">
                  <span>3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000;</span>
                </li>
                <li class="list__item">
                  <span>4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив);</span>
                </li>
                <li class="list__item">
                  <span>5) знайти рік, коли прибуток був найбільшим;</span>
                </li>
                <li class="list__item">
                  <span>6) упорядкувати список за спаданням прибутку;</span>
                </li>
                <li class="list__item">
                  <span>7) створити 2 окремих списки з копіями об'єктів, що містять сайти з вартість до 10000 і більше 10000.</span>
                </li>
              </ul>
              </p>
            </li>
`);
if (confirm("Почати тестування?")) {
    const sites = [
        {
            companyName: "WebTech",
            owner: "Andrii Shevchenko",
            sponsors: [
                { lastName: "Koval", firstName: "Ivan", investment: 50000 },
                { lastName: "Petrenko", firstName: "Olena", investment: 30000 },
            ],
            releaseYear: 2005,
            siteCost: 12000,
        },
        {
            companyName: "SoftLine",
            owner: "Olga Bondarenko",
            sponsors: [
                { lastName: "Bondar", firstName: "Serhii", investment: 80000 },
                { lastName: "Tkachenko", firstName: "Iryna", investment: 25000 },
            ],
            releaseYear: 2012,
            siteCost: 18000,
        },
        {
            companyName: "ITFuture",
            owner: "Dmytro Ivanov",
            sponsors: [
                { lastName: "Melnyk", firstName: "Oksana", investment: 120000 },
            ],
            releaseYear: 2008,
            siteCost: 9500,
        },
        {
            companyName: "NextGen",
            owner: "Kateryna Poliakova",
            sponsors: [
                { lastName: "Kravchenko", firstName: "Viktor", investment: 40000 },
                { lastName: "Sydorenko", firstName: "Anna", investment: 70000 },
            ],
            releaseYear: 2003,
            siteCost: 15000,
        },
        {
            companyName: "DevPro",
            owner: "Oleksii Hrytsenko",
            sponsors: [{ lastName: "Shvets", firstName: "Yurii", investment: 60000 }],
            releaseYear: 2010,
            siteCost: 11000,
        },
    ];
    document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);
    document.write(`
    <li class="list__item">
      <span>Масив сайтів розроблених компанією: дивіться консоль.</span>
    </li>
  `);
    console.log("Масив сайтів розроблених компанією :>> ", sites);
    document.write("<br>");
    // 1) загальну вартість усіх сайтів;
    const sitesTotalPrice = sites.reduce((previousSum, site) => previousSum + site.siteCost, 0);
    document.write(`
    <li class="list__item">
      <span>1) загальна вартість усіх сайтів: ${sitesTotalPrice};</span>
    </li>
  `);
    // 2) кількість сайтів, що було зроблено між 2000 та 2009 роками;
    const sitesAmountReleased = sites.reduce((previousSitesAmount, site) => site.releaseYear >= 2000 && site.releaseYear <= 2009
        ? previousSitesAmount + 1
        : previousSitesAmount, 0);
    document.write(`
    <li class="list__item">
      <span>2) кількість сайтів, що були зроблені між 2000 та 2009 роками: ${sitesAmountReleased};</span>
    </li>
  `);
    // 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000;
    const sitesAmountInvestmentBigger100000 = sites.reduce((previousSitesAmount, site) => {
        const sponsorsTotalInvestment = site.sponsors.reduce((previousSum, sponsor) => previousSum + sponsor.investment, 0);
        return sponsorsTotalInvestment > 100000
            ? previousSitesAmount + 1
            : previousSitesAmount;
    }, 0);
    document.write(`
    <li class="list__item">
      <span>3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${sitesAmountInvestmentBigger100000};</span>
    </li>
  `);
    // 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив);
    function getAllSponsorsList(sites) {
        let allSponsorsList = [];
        for (const site of sites) {
            for (const sponsor of site.sponsors) {
                allSponsorsList.push(sponsor);
            }
        }
        return allSponsorsList;
    }
    console.log("4) список усіх спонсорів :>> ", getAllSponsorsList(sites));
    document.write(`
    <li class="list__item">
      <span>4) загальний список усіх спонсорів: дивіться консоль;</span>
    </li>
  `);
    // 5) знайти рік, коли прибуток був найбільшим;
    function getYearWasBiggestCost(sites) {
        let yearWasBiggestCost = 0;
        const biggestCost = sites
            .map((site) => site.siteCost)
            .reduce((previousCost, cost) => previousCost > cost ? previousCost : cost);
        sites.forEach((site) => {
            if (site.siteCost === biggestCost)
                yearWasBiggestCost = site.releaseYear;
        });
        return yearWasBiggestCost;
    }
    document.write(`
    <li class="list__item">
      <span>5) рік, коли прибуток був найбільшим: ${getYearWasBiggestCost(sites)};</span>
    </li>
  `);
    // 6) упорядкувати список за спаданням прибутку;
    let sitesCopy = [...sites];
    sitesCopy.sort((site1, site2) => site2.siteCost - site1.siteCost);
    console.log("6) упорядкований список за спаданням прибутку :>> ", sitesCopy);
    document.write(`
    <li class="list__item">
      <span>6) упорядкований список за спаданням прибутку: дивіться консоль;</span>
    </li>
  `);
    // 7) створити 2 окремих списки з копіями об'єктів, що містять сайти з вартість до 10000 і більше 10000.
    const sitesLessCost10000 = sites.filter((site) => site.siteCost <= 10000);
    console.log("7) список сайтів з вартістю до 10000 :>> ", sitesLessCost10000);
    const sitesBiggerCost10000 = sites.filter((site) => site.siteCost >= 10000);
    console.log("7) список сайтів з вартістю більше 10000 :>> ", sitesBiggerCost10000);
    document.write(`
    <li class="list__item">
      <span>7) створено 2 окремих списки (дивіться консоль) з копіями об'єктів, що містять сайти з вартість до 10000 і більше 10000.</span>
    </li>
  `);
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
