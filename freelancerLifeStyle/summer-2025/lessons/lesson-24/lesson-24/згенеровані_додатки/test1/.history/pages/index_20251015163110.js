import { Header } from '/components/Header.js';
import { Footer } from '/components/Footer.js';
import { Container } from '/components/Container.js';
import { mount } from '/utils/dom.js';

const app = document.getElementById('app');

const header = new Header('home');
const hero = (() => {
  const wrap = document.createElement('section');
  wrap.className = 'hero';
  wrap.innerHTML = `
    <div class="container">
      <h1>DogGallery</h1>
      <p class="muted">Невеликий навчальний проєкт на чистому JS з модульною структурою: декілька сторінок, спільні компоненти та зображення собак з Dog CEO API.</p>
      <p><a class="button" href="/pages/dogs.html">Переглянути собак</a></p>
    </div>`;
  return wrap;
})();
const footer = new Footer();

mount(app, header, hero, new Container(), footer);

