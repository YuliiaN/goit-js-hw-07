import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryLinks = createGalleryItems(galleryItems);
galleryList.innerHTML = galleryLinks;

function createGalleryItems(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li>
      <a 
    class="gallery__item" 
    href="${original}">
<img 
  class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
</li>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
