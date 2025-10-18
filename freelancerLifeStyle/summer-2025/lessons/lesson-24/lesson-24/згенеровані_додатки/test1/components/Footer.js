export class Footer {
  render() {
    const el = document.createElement('footer')
    el.className = 'site-footer'
    const year = new Date().getFullYear()
    el.innerHTML = `
      <div class="container">
        <p class="muted">© ${year} DogGallery · Images from Dog CEO API</p>
      </div>`
    return el
  }
}
