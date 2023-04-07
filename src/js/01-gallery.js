import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
let markup = ``;

for (const image of galleryItems) {
  markup += `<li> <a href=${image.original} class='gallery__item'> <img class='gallery__image' src=${image.preview} alt=${image.description}></a>
  </li>`;
}
galleryEl.innerHTML = markup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
});
