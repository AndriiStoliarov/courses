import { Header } from '/js/components/Header.js'
import { Footer } from '/js/components/Footer.js'

// Ініціалізація сторінки про нас
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')

  // Додаємо header
  const headerContainer = DOMUtils.createElement('div')
  const header = new Header(headerContainer)
  header.render()

  // Додаємо footer
  const footerContainer = DOMUtils.createElement('div')
  const footer = new Footer(footerContainer)
  footer.render()

  app.appendChild(headerContainer)
  app.appendChild(footerContainer)
})

// Утиліти для роботи з DOM
class DOMUtils {
  static createElement(tag, className = '', content = '') {
    const element = document.createElement(tag)
    if (className) element.className = className
    if (content) element.innerHTML = content
    return element
  }
}
