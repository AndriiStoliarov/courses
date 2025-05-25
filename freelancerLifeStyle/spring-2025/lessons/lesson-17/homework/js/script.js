document.addEventListener('click', documentActions);

function documentActions(event) {
	const targetElement = event.target;
	// код для відкриття підменю при кліку на елемент з класом menu__arrow
	if (targetElement.closest('.menu__link')) {
		targetElement.closest('.menu__item').classList.toggle('active');
	}
	// код, який додає клас для тега body і по якому стилізується меню бургер
	if (targetElement.closest('.header__icon-menu')) {
		document.body.classList.toggle('menu-open');
	}
}