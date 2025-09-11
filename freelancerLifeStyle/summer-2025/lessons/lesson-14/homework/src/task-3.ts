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
              <p><span class="tasks__title">Задача 3.</span> Ось приклад відповіді з одного з сайтів (масив об'єктів з інформацією про товари):
              </p>
              <img class="tasks__image" src="../images/example-object.jpg" alt="example object screenshot">
              <ul class="list">
                <li class="list__item">
                  <span>1) Знайти загальну вартість (нові ціни - price).</span>
                </li>
                <li class="list__item">
                  <span>2) Знайти кількість товарів, у яких ціна зменшилась (price < old_price).</span>
                </li>
                <li class="list__item">
                  <span>3) Знайти товари, які доступні (sell_status:"available").</span>
                </li>
                <li class="list__item">
                  <span>4) Сформувати новий список об'єктів тільки доступних для продажу товарів, які міститимуть тільки ідентифікатор товару
                    (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price).</span>
                </li>
              </ul>
            </li>
`);

if (confirm("Почати тестування?")) {
  type ProductIdPrice = {
    id: number;
    price: number;
    old_price: number;
    usd_price: string;
  };

  type ShowInSite = {
    id: number;
    discount_price: number;
    title: string;
    price_show_in_site_id: number;
    show_in_details: number;
    show_in_catalog: number;
    is_description: number;
    description: string;
    promo_code: string;
    url_for_image: string;
    images: string;
    images_mobile: string;
    hide_price: number;
  };

  type Product = {
    id: number;
    old_price: number;
    old_usd_price: string;
    price: number;
    min_month_price: number;
    sell_status: string;
    status: string;
    usd_price: string;
    pl_charge_pcs: number;
    pl_use_instant_bonus: boolean;
    pl_premium_bonus_charge_pcs: number;
    rests: number;
    min_price: number;
    max_price: number;
    has_shops: boolean;
    info: null;
    show_in_site: ShowInSite | null;
  };

  let dataList = [
    {
      id: 344277463,
      old_price: 1395,
      old_usd_price: "37.70",
      price: 1099,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "29.70",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 363766641,
      old_price: 0,
      old_usd_price: "0.00",
      price: 90,
      min_month_price: 0,
      sell_status: "unavailable",
      status: "active",
      usd_price: "2.43",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 339273715,
      old_price: 38,
      old_usd_price: "1.03",
      price: 25,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "0.68",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 330746665,
      old_price: 3087,
      old_usd_price: "83.43",
      price: 2548,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "68.86",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 344972806,
      old_price: 699,
      old_usd_price: "18.89",
      price: 549,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "14.84",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 318302299,
      old_price: 0,
      old_usd_price: "0.00",
      price: 8500,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "229.73",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 361430565,
      old_price: 3500,
      old_usd_price: "94.59",
      price: 1999,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "54.03",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 14429030,
      old_price: 3339,
      old_usd_price: "90.24",
      price: 2999,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "81.05",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 56340912,
      old_price: 2094,
      old_usd_price: "56.59",
      price: 1776,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "48.00",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 315292225,
      old_price: 1799,
      old_usd_price: "48.62",
      price: 1499,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "40.51",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 28437961,
      old_price: 42999,
      old_usd_price: "1162.14",
      price: 33999,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "918.89",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 339896833,
      old_price: 6399,
      old_usd_price: "172.95",
      price: 5899,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "159.43",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 364354149,
      old_price: 1600,
      old_usd_price: "43.24",
      price: 1500,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "40.54",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: {
        id: 106,
        discount_price: 1300,
        title: "ціна по промокоду діє з 22.03 по 28.03",
        price_show_in_site_id: 5151,
        show_in_details: 1,
        show_in_catalog: 1,
        is_description: 1,
        description: "test",
        promo_code: "",
        url_for_image: "https://rozetka.com.ua/ua/promo/allgalaxies/",
        images: "",
        images_mobile: "",
        hide_price: 0,
      },
    },
    {
      id: 363184995,
      old_price: 0,
      old_usd_price: "0.00",
      price: 4499,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "121.59",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 98077846,
      old_price: 0,
      old_usd_price: "0.00",
      price: 3113,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "84.14",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 310694668,
      old_price: 0,
      old_usd_price: "0.00",
      price: 3000,
      min_month_price: 0,
      sell_status: "unavailable",
      status: "active",
      usd_price: "81.08",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 362812029,
      old_price: 0,
      old_usd_price: "0.00",
      price: 21700,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "586.49",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 361422708,
      old_price: 4100,
      old_usd_price: "110.81",
      price: 2699,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "72.95",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 318302257,
      old_price: 0,
      old_usd_price: "0.00",
      price: 8500,
      min_month_price: 0,
      sell_status: "unavailable",
      status: "active",
      usd_price: "229.73",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 310694498,
      old_price: 0,
      old_usd_price: "0.00",
      price: 2963,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "80.08",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 363651273,
      old_price: 5199,
      old_usd_price: "140.51",
      price: 4890,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "132.16",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 330747022,
      old_price: 3087,
      old_usd_price: "83.43",
      price: 2606,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "70.43",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 362617635,
      old_price: 4872,
      old_usd_price: "131.68",
      price: 2436,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "65.84",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
    {
      id: 363614439,
      old_price: 5199,
      old_usd_price: "140.51",
      price: 4890,
      min_month_price: 0,
      sell_status: "available",
      status: "active",
      usd_price: "132.16",
      pl_charge_pcs: 0,
      pl_use_instant_bonus: false,
      pl_premium_bonus_charge_pcs: 0,
      rests: -1,
      min_price: 0,
      max_price: 0,
      has_shops: false,
      info: null,
      show_in_site: null,
    },
  ];

  document.write(`
    <li>
      <p>
        <span class="tasks__title">Відповідь:</span>
        <ul class="list">
  `);

  console.log("Масив об'єктів з інформацією про товари :>> ", dataList);

  document.write(`
    <li class="list__item">
      <span>Масив об'єктів з інформацією про товари: дивіться консоль.</span>
    </li>
  `);

  document.write("<br>");

  // 1) Знайти загальну вартість (нові ціни - price).
  const productTotalPrice: number = dataList.reduce(
    (previousSum, product) => previousSum + product.price,
    0
  );

  document.write(`
    <li class="list__item">
      <span>1) Загальна вартість (нові ціни - price): ${productTotalPrice}.</span>
    </li>
  `);

  // 2) Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
  const productAmountPriceDecreased: number = dataList.reduce(
    (previousProductAmount, product) =>
      product.price < product.old_price
        ? previousProductAmount + 1
        : previousProductAmount,
    0
  );

  document.write(`
    <li class="list__item">
      <span>2) Кількість товарів, у яких ціна зменшилась (price < old_price): ${productAmountPriceDecreased}.</span>
    </li>
  `);

  // 3) Знайти товари, які доступні (sell_status:"available").
  const productsAvailable: Product[] = dataList.filter(
    (product) => product.sell_status === "available"
  );

  console.log(
    '3) Товари, які доступні (sell_status:"available") :>> ',
    productsAvailable
  );

  document.write(`
    <li class="list__item">
      <span>3) Товари, які доступні (sell_status:"available"): дивіться консоль.</span>
    </li>
  `);

  // 4) Сформувати новий список об'єктів тільки доступних для продажу товарів, які міститимуть тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price).
  const productsAvailableShortFormat: ProductIdPrice[] = dataList
    .filter((product) => product.sell_status === "available")
    .map((product) => ({
      id: product.id,
      price: product.price,
      old_price: product.old_price,
      usd_price: product.usd_price,
    }));

  console.log(
    "4) Новий список об'єктів тільки доступних для продажу товарів :>> ",
    productsAvailableShortFormat
  );

  document.write(`
    <li class="list__item">
      <span>4) Новий список об'єктів тільки доступних для продажу товарів (дивіться консоль), які міститимуть тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price).</span>
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
