import { Component, DOMUtils } from './BaseComponent.js';

export class Header extends Component {
    constructor(container) {
        super(container);
        this.currentPage = this.getCurrentPage();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('dogs.html')) return 'dogs';
        if (path.includes('about.html')) return 'about';
        return 'home';
    }

    render() {
        const header = DOMUtils.createElement('header', 'header');
        const headerContent = DOMUtils.createElement('div', 'header-content');
        
        const logo = DOMUtils.createElement('a', 'logo', '🐕 Dog Gallery');
        logo.href = '/index.html';
        
        const nav = DOMUtils.createElement('nav', 'nav');
        const navItems = [
            { href: '/index.html', text: 'Головна', page: 'home' },
            { href: '/dogs.html', text: 'Собаки', page: 'dogs' },
            { href: '/about.html', text: 'Про нас', page: 'about' }
        ];

        navItems.forEach(item => {
            const link = DOMUtils.createElement('a', '', item.text);
            link.href = item.href;
            if (item.page === this.currentPage) {
                link.classList.add('active');
            }
            nav.appendChild(link);
        });

        DOMUtils.appendChild(headerContent, [logo, nav]);
        header.appendChild(headerContent);
        
        this.element.appendChild(header);
        return header;
    }
}
