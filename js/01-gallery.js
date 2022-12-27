import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryWrapper = document.querySelector(".gallery");

const gallery = createPreviewGallery(galleryItems);
galleryWrapper.insertAdjacentHTML("beforeend", gallery);
galleryWrapper.addEventListener("click", onClickOpen);

function createPreviewGallery(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function onClickOpen(event) {
  event.preventDefault();
  const elem = event.target;

  if (elem.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${elem.dataset.source}">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onClickClose);
      },
      onClose: (instance) => {
        document.addEventListener("keydown", onClickClose);
      },
    }
  );

  instance.show();

  function onClickClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
