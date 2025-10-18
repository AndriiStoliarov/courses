import { Component, DOMUtils } from './BaseComponent.js'

export class DogCard extends Component {
  constructor(dogData, container) {
    super(container)
    this.dogData = dogData
  }

  render() {
    const card = DOMUtils.createElement('div', 'dog-card')

    const image = DOMUtils.createElement('img', 'dog-card-image')
    image.src = this.dogData.message
    image.alt = `Собака породи ${this.dogData.breed || 'невідома'}`
    image.loading = 'lazy'

    const content = DOMUtils.createElement('div', 'dog-card-content')

    const title = DOMUtils.createElement('h3', 'dog-card-title', 'Чудовий пес')

    const breed = DOMUtils.createElement(
      'p',
      'dog-card-breed',
      this.dogData.breed ? `Порода: ${this.dogData.breed}` : 'Порода: змішана'
    )

    const button = DOMUtils.createElement(
      'button',
      'dog-card-button',
      'Переглянути детальніше'
    )
    button.addEventListener('click', () => this.handleClick())

    DOMUtils.appendChild(content, [title, breed, button])
    DOMUtils.appendChild(card, [image, content])

    this.element.appendChild(card)
    return card
  }

  handleClick() {
    // Переходимо на сторінку деталей собаки
    const breed = this.dogData.breed || 'mixed'
    const imageUrl = encodeURIComponent(this.dogData.message)
    window.location.href = `/dog-detail.html?breed=${breed}&image=${imageUrl}`
  }
}
