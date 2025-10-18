export class Header {
  constructor(active = 'home') {
    this.active = active
  }
  render() {
    const nav = document.createElement('header')
    nav.className = 'site-header'
    nav.innerHTML = `
      <div class="container nav">
        <a class="brand" href="/index.html">DogGallery</a>
        <nav>
          <a href="/index.html" class="${
            this.active === 'home' ? 'active' : ''
          }">Home</a>
          <a href="/pages/dogs.html" class="${
            this.active === 'dogs' ? 'active' : ''
          }">Dogs</a>
          <a href="/pages/about.html" class="${
            this.active === 'about' ? 'active' : ''
          }">About</a>
        </nav>
      </div>`
    return nav
  }
}
