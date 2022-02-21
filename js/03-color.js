import { colors } from './colorPalette.js';

const colorContainer = document.querySelector('.js-palette');
const colorMarkup = createColorPick(colors);

colorContainer.insertAdjacentHTML('beforeend', colorMarkup);
colorContainer.addEventListener('click', onColorClick);

function createColorPick(colors) {
  return colors.map(({ hex, rgb }) => {
    return `
    <div class="palette__item">
        <div 
        class="palette__color"
        id="pick"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}"
        ></div>
        <div class="palette__meta">
        <p class="palette__hex">HEX: ${hex}</p>
        <p class="palette__rgb">RGB: ${rgb}</p>
        </div>
    </div>
    `;
  })
    .join('');
}

function onColorClick(e) {
    modalShow(e.target.dataset.source);    
}

function modalShow(src) {
        const instance = basicLightbox.create(
            `<div class = "modal">
              <p>
              Your first lightbox with just a few lines of code.
              Yes, it's really that simple.
              </p>
            </div>`,
            {
                onShow: () => {
                window.addEventListener("keydown", onEscClick);
              },
              onClose: () => window.removeEventListener("keydown",  onEscClick),
            }

        );
        function onEscClick(e) {
  if (e.code === 'Escape') {
    instance.close();
    }  
}
instance.show()
};

