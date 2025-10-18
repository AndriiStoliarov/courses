const API = 'https://dog.ceo/api';

async function httpGet(path) {
  const res = await fetch(`${API}${path}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.status !== 'success') throw new Error('API error');
  return data.message;
}

export async function fetchRandomImages(count = 12) {
  return await httpGet(`/breeds/image/random/${count}`);
}

export async function fetchBreedsList() {
  return await httpGet('/breeds/list/all');
}

export async function fetchBreedImages(breed, count = 12) {
  return await httpGet(`/breed/${breed}/images/random/${count}`);
}

export async function fetchSubBreedImages(breed, subBreed, count = 12) {
  return await httpGet(`/breed/${breed}/${subBreed}/images/random/${count}`);
}

export function parseBreedFromImageUrl(imageUrl) {
  // image URL format example: https://images.dog.ceo/breeds/hound-afghan/n02088094_1234.jpg
  try {
    const parts = new URL(imageUrl).pathname.split('/');
    const breedPart = parts.find((p) => p.includes('-')) || parts[parts.indexOf('breeds') + 1];
    if (!breedPart) return { breed: 'unknown', subBreed: null };
    const [breed, subBreed] = breedPart.split('-').reverse();
    // If two words, format breed/subbreed properly
    return { breed: subBreed || breed, subBreed: subBreed ? breed : null };
  } catch {
    return { breed: 'unknown', subBreed: null };
  }
}

