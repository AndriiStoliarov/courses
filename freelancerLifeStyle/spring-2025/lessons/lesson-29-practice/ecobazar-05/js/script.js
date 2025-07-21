// Строгий режим
"use strict"

window.addEventListener('load', windowLoad)

let isMobile

function windowLoad() {
	isMobile = window.navigator.userAgentData.mobile
	isMobile ? document.body.setAttribute('data-touch', '') : null

	document.addEventListener('click', documentActions)

	dynamicAdaptHeader();
}

function dynamicAdaptHeader() {
	const topHeader = document.querySelector('.top-header')
	const header = document.querySelector('.header')
	const menu = document.querySelector('.menu')

	const phoneHeader = document.querySelector('.bottom-header__phone')
	const searchHeader = document.querySelector('.search-header')

	const bottomContainer = document.querySelector('.bottom-header__container')
	const actionsHeader = document.querySelector('.actions-header')
	const placeSearch = document.querySelector('.body-header__place-search')

	const media = window.matchMedia("(max-width: 767.98px)")

	media.addEventListener("change", (e) => {
		dynamicAdaptHeaderInit(media)
	})
	dynamicAdaptHeaderInit(media)

	function dynamicAdaptHeaderInit(media) {
		if (media.matches) {
			bottomContainer.insertAdjacentElement('beforeend', searchHeader)
			actionsHeader.insertAdjacentElement('beforeend', phoneHeader)
			menu.insertAdjacentElement('beforeend', topHeader)
		} else {
			bottomContainer.insertAdjacentElement('beforeend', phoneHeader)
			placeSearch.insertAdjacentElement('beforeend', searchHeader)

			header.insertAdjacentElement("afterbegin", topHeader)
		}
		searchHeader.classList.toggle('--dynamic', media.matches)
		phoneHeader.classList.toggle('--dynamic', media.matches)
	}
}

function documentActions(e) {
	const targetElement = e.target
	if (isMobile) {
		if (targetElement.closest('.menu__button')) {
			const subMenu = targetElement.closest('.menu__button').nextElementSibling
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
	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('scroll-lock')
		document.documentElement.classList.toggle('open-menu')
	}
}