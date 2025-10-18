export class Container {
  constructor(children = []) { this.children = children; }
  render() {
    const el = document.createElement('div');
    el.className = 'container';
    for (const child of this.children) {
      if (child instanceof HTMLElement) el.appendChild(child);
      else if (child && typeof child.render === 'function') el.appendChild(child.render());
      else if (typeof child === 'string') el.insertAdjacentHTML('beforeend', child);
    }
    return el;
  }
}

