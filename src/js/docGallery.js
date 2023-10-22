import { removeGallery } from './modules/gallery';
const documentBlock = document.querySelector('.products__documents');
const popupWindow = document.querySelector('.popup');
const documentList = document.querySelectorAll('.documents__list-item > img');

const state = { activeIndex: 0 };

const documentsInit = () => {
  for (let i = 0; i < documentList.length; i++) {
    documentList[i].setAttribute('data-index', i);
  }
};

documentsInit();

export const clickBtnNext = (e) => {
  e.stopPropagation();

  let documents = Array.from(documentList);

  const image = document.querySelector('.document-gallery__images > img');

  if (image && documents[state.activeIndex] && state.activeIndex !== documents.length - 1) {
    state.activeIndex = Number(state.activeIndex) + 1;
    image.setAttribute('src', `${documents[state.activeIndex].getAttribute('src')}`);
  }
};

export const clickBtnPrev = (e) => {
  e.stopPropagation();

  let documents = Array.from(documentList);
  const image = document.querySelector('.document-gallery__images > img');

  if (documents[state.activeIndex] && state.activeIndex !== 0) {
    state.activeIndex = Number(state.activeIndex) - 1;
    image.setAttribute('src', `${documents[state.activeIndex].getAttribute('src')}`);
  }
};

if (documentBlock) {
  documentBlock.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      state.activeIndex = e.target.getAttribute('data-index');

      let documents = Array.from(documentList);

      let images;

      if (Array.isArray(documents)) {
        images = documents.reduce((acc, el, index, array) => {
          if (state.activeIndex == index) {
            return `<img src="${el.getAttribute('src')}" data-index=${el.getAttribute('data-index')} alt="document ${
              Number(el.getAttribute('data-index')) + 1
            }"/>`;
          }
          return acc;
        }, '');
      }

      popupWindow.innerHTML += `<div class="popup__documents document-gallery">
    <button class="document-gallery__close-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 2L18 18" stroke="#003366" stroke-width="4" stroke-linecap="round" />
        <path d="M18 2L2 18" stroke="#003366" stroke-width="4" stroke-linecap="round" />
      </svg>
    </button>

    <div class="document-gallery__container">
      <button class="document-gallery__prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 24C9.54625 20.588 8.09942 16.3914 8.09942 11.8539C8.09942 7.4451 9.46536 3.35812 11.7937 1.88931e-06L-8.49178e-07 11.8959L12 24Z"
            fill="black"
          />
        </svg>
      </button>
      <div class="document-gallery__images">
      
      ${images}
        
      </div>

      <button class="document-gallery__next">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0C2.45375 3.41199 3.90058 7.6086 3.90058 12.1461C3.90058 16.5549 2.53464 20.6419 0.206319 24L12 12.1041L0 0Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
      </div>`;

      popupWindow?.classList?.add('active');

      const nextBtn = document.querySelector('.document-gallery__next');
      const prevBtn = document.querySelector('.document-gallery__prev');

      const closeBtn = document.querySelector('.document-gallery__close-btn');

      const image = document.querySelector('.document-gallery__images > img');

      nextBtn.addEventListener('click', clickBtnNext);

      prevBtn.addEventListener('click', clickBtnPrev);

      closeBtn.addEventListener('click', removeGallery);

      popupWindow.addEventListener('click', removeGallery);
    }
  });
}
