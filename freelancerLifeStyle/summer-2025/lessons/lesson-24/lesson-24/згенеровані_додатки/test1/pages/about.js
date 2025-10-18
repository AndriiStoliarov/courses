import { Header } from '/components/Header.js'
import { Footer } from '/components/Footer.js'
import { mount } from '/utils/dom.js'

const app = document.getElementById('app')

const header = new Header('about')
const main = document.createElement('main')
main.className = 'main'
main.innerHTML = `
  <div class="container">
    <h1>About</h1>
    <p class="muted">Цей застосунок демонструє багатосторінкову структуру без фреймворків: спільні компоненти, модулі ES, роздільні стилі. Джерело зображень — Dog CEO API.</p>
  </div>`
const footer = new Footer()

mount(app, header, main, footer)
