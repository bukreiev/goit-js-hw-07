import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)
galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
`
    })
.join('')
}
function onGalleryContainerClick(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== 'IMG') {
    return;
    }
    modalShow(e.target.dataset.source);    
}

function modalShow(src) {
     const instance = basicLightbox.create(`<img src="${src}" width="800" height="600">`)

    instance.show()
}