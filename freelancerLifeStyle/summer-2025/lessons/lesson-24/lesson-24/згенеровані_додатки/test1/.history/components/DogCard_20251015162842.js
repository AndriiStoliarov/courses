export class DogCard {
  constructor({ imageUrl, title, subtitle, link }) {
    this.imageUrl = imageUrl;
    this.title = title || 'Dog';
    this.subtitle = subtitle || '';
    this.link = link || '#';
  }
  render() {
    const card = document.createElement('article');
    card.className = 'card dog-card';
    card.innerHTML = `
      <a href="${this.link}">
        <img src="${this.imageUrl}" alt="${this.title}">
      </a>
      <div class="dog-card__body">
        <h3 class="dog-card__title"><a href="${this.link}">${this.title}</a></h3>
        <p class="dog-card__subtitle">${this.subtitle}</p>
      </div>`;
    return card;
  }
}

