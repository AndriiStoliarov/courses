export function mount(target, ...nodes) {
  const container = typeof target === 'string' ? document.querySelector(target) : target;
  if (!container) return;
  for (const node of nodes) {
    if (!node) continue;
    if (node instanceof HTMLElement) container.appendChild(node);
    else if (node && typeof node.render === 'function') container.appendChild(node.render());
    else if (typeof node === 'string') container.insertAdjacentHTML('beforeend', node);
  }
}

export function qs(selector, root = document) { return root.querySelector(selector); }
export function qsa(selector, root = document) { return Array.from(root.querySelectorAll(selector)); }

export function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

