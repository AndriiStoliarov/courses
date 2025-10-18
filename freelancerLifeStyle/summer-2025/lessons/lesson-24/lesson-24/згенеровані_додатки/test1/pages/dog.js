import { Header } from '/components/Header.js'
import { Footer } from '/components/Footer.js'
import { mount, getParam } from '/utils/dom.js'

const app = document.getElementById('app')
const header = new Header('dogs')
const main = document.createElement('main')
main.className = 'main'
main.innerHTML = `<div class="container"><div class="detail-hero"><div id="imgWrap"></div><div class="meta"><h1 id="title">Dog</h1><p class="muted">Фото з Dog CEO API</p><p><a class="button" href="/pages/dogs.html">⬅ Назад до списку</a></p></div></div></div>`
const footer = new Footer()

mount(app, header, main, footer)

const imageUrl = getParam('img')
const breed = getParam('breed')
const sub = getParam('sub')

const imgWrap = document.getElementById('imgWrap')
const title = document.getElementById('title')

if (imageUrl) {
  const img = document.createElement('img')
  img.src = imageUrl
  img.alt = breed ? (sub ? `${sub} ${breed}` : breed) : 'Dog'
  imgWrap.appendChild(img)
}
if (breed) {
  title.textContent = sub ? `${sub} ${breed}` : breed
}
