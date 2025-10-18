import { Component, DOMUtils } from './BaseComponent.js';

export class Footer extends Component {
    constructor(container) {
        super(container);
    }

    render() {
        const footer = DOMUtils.createElement('footer', 'footer');
        const footerContent = DOMUtils.createElement('div', 'footer-content');
        
        const copyright = DOMUtils.createElement('p', '', `© ${new Date().getFullYear()} Dog Gallery. Всі права захищені.`);
        
        const footerLinks = DOMUtils.createElement('ul', 'footer-links');
        const links = [
            { href: '/index.html', text: 'Головна' },
            { href: '/dogs.html', text: 'Собаки' },
            { href: '/about.html', text: 'Про нас' }
        ];

        links.forEach(link => {
            const li = DOMUtils.createElement('li');
            const a = DOMUtils.createElement('a', '', link.text);
            a.href = link.href;
            li.appendChild(a);
            footerLinks.appendChild(li);
        });

        DOMUtils.appendChild(footerContent, [copyright, footerLinks]);
        footer.appendChild(footerContent);
        
        this.element.appendChild(footer);
        return footer;
    }
}
