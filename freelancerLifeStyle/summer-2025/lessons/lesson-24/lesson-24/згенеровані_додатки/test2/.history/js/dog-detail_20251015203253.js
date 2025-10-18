import { Header } from '/js/components/Header.js';
import { Footer } from '/js/components/Footer.js';
import { DOMUtils } from '/js/components/BaseComponent.js';

// Ініціалізація сторінки деталей собаки
document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const loading = document.getElementById('loading');
    const dogDetail = document.getElementById('dog-detail');
    
    // Додаємо header
    const headerContainer = DOMUtils.createElement('div');
    const header = new Header(headerContainer);
    header.render();
    
    // Додаємо footer
    const footerContainer = DOMUtils.createElement('div');
    const footer = new Footer(footerContainer);
    footer.render();
    
    app.appendChild(headerContainer);
    app.appendChild(footerContainer);
    
    // Отримуємо параметри з URL
    const urlParams = new URLSearchParams(window.location.search);
    const breed = urlParams.get('breed') || 'невідома';
    const imageUrl = urlParams.get('image') || '';
    
    // Приховуємо індикатор завантаження
    loading.style.display = 'none';
    
    // Створюємо детальну картку собаки
    const image = DOMUtils.createElement('img', 'dog-detail-image');
    image.src = decodeURIComponent(imageUrl);
    image.alt = `Собака породи ${breed}`;
    
    const content = DOMUtils.createElement('div', 'dog-detail-content');
    
    const title = DOMUtils.createElement('h1', 'dog-detail-title', 'Чудовий пес');
    
    const breedInfo = DOMUtils.createElement('p', 'dog-detail-breed', `Порода: ${breed}`);
    
    const info = DOMUtils.createElement('div', 'dog-detail-info');
    
    const description = DOMUtils.createElement('h3', '', 'Опис');
    const descriptionText = DOMUtils.createElement('p', '', 
        'Цей чудовий пес є представником своєї породи. Собаки - це найкращі друзі людини, які приносять радість та любов у наші домівки.'
    );
    
    const characteristics = DOMUtils.createElement('h3', '', 'Характеристики');
    const characteristicsText = DOMUtils.createElement('p', '', 
        'Собаки відомі своєю вірністю, розумом та здатністю до навчання. Вони можуть бути відмінними компаньйонами та захисниками.'
    );
    
    DOMUtils.appendChild(info, [description, descriptionText, characteristics, characteristicsText]);
    DOMUtils.appendChild(content, [title, breedInfo, info]);
    DOMUtils.appendChild(dogDetail, [image, content]);
});
