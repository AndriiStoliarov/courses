// Строгий режим
"use strict"

window.addEventListener('load', windowLoad);

let isMobile;

function isMobileDevice() {
	const regex = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

	return regex.test(navigator.userAgent);
}

function windowLoad() {
	isMobile = isMobileDevice();

	isMobile ? document.body.setAttribute('data-touch', '') : null;

	document.addEventListener('click', documentActions);
}

function documentActions(e) {
	const targetElement = e.target;

	if (isMobile) {
		if (targetElement.closest('.menu__button')) {
			const subMenu = targetElement.closest('.menu__button').nextElementSibling;

			if (subMenu) {
				subMenu.closest('.menu__item').classList.toggle('--active')
			}
		} else {
			const menuItemActive = document.querySelectorAll('.menu__item.--active')
			if (menuItemActive.length) {
				menuItemActive.forEach(menuItemActiveItem => {
					menuItemActiveItem.classList.remove('--active')
				});

			}
		}
	}
}