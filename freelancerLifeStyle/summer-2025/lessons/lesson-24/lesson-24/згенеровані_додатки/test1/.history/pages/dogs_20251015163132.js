import { Header } from '/components/Header.js';
import { Footer } from '/components/Footer.js';
import { DogCard } from '/components/DogCard.js';
import { mount, qs } from '/utils/dom.js';
import { fetchRandomImages, parseBreedFromImageUrl } from '/services/dogService.js';

const app = document.getElementById('app');

const header = new Header('dogs');
const main = document.createElement('main');
main.className = 'main';
main.innerHTML = `<div class="container"><h1>Dogs</h1><p class="muted">Клікніть на картку для деталей.</p><div id="grid" class="grid"></div></div>`;
const footer = new Footer();

mount(app, header, main, footer);

const grid = qs('#grid', main);

async function load() {
  grid.innerHTML = '';
  const placeholderCount = 12;
  for (let i = 0; i < placeholderCount; i++) {
    const ph = document.createElement('div');
    ph.className = 'card skeleton';
    ph.style.height = '280px';
    grid.appendChild(ph);
  }
  try {
    const images = await fetchRandomImages(12);
    grid.innerHTML = '';
    for (const url of images) {
      const { breed, subBreed } = parseBreedFromImageUrl(url);
      const title = subBreed ? `${subBreed} ${breed}` : breed;
      const link = `/pages/dog.html?img=${encodeURIComponent(url)}&breed=${encodeURIComponent(breed)}${subBreed ? `&sub=${encodeURIComponent(subBreed)}` : ''}`;
      const card = new DogCard({ imageUrl: url, title: title, subtitle: 'Tap for details', link });
      grid.appendChild(card.render());
    }
  } catch (e) {
    grid.innerHTML = `<p class="muted">Не вдалося завантажити дані. Спробуйте ще раз.</p>`;
  }
}

load();

