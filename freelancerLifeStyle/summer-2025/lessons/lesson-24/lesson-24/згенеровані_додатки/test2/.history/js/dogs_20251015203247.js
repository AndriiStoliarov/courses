import { Header } from '/js/components/Header.js';
import { Footer } from '/js/components/Footer.js';
import { DogCard } from '/js/components/DogCard.js';
import { APIUtils } from '/js/components/BaseComponent.js';

// Ініціалізація сторінки собак
document.addEventListener('DOMContentLoaded', async () => {
    const app = document.getElementById('app');
    const loading = document.getElementById('loading');
    const dogsGrid = document.getElementById('dogs-grid');
    
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
    
    try {
        // Завантажуємо собак
        const dogsData = await APIUtils.fetchMultipleDogs(20);
        
        // Приховуємо індикатор завантаження
        loading.style.display = 'none';
        
        // Створюємо картки собак
        dogsData.forEach(dogData => {
            const cardContainer = DOMUtils.createElement('div');
            const dogCard = new DogCard(dogData, cardContainer);
            dogCard.render();
            dogsGrid.appendChild(cardContainer);
        });
        
    } catch (error) {
        console.error('Помилка завантаження собак:', error);
        loading.innerHTML = 'Помилка завантаження. Спробуйте пізніше.';
    }
});

// Утиліти для роботи з DOM
class DOMUtils {
    static createElement(tag, className = '', content = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (content) element.innerHTML = content;
        return element;
    }
}
