import { clickBtnPrev, clickBtnNext } from '../docGallery';

export const removeGallery = () => {
  const popupWindow = document.querySelector('.popup');
  const nextBtn = document.querySelector('.document-gallery__next');
  const prevBtn = document.querySelector('.document-gallery__prev');
  const galleryCont = document.querySelector('.document-gallery');

  const closeBtn = document.querySelector('.document-gallery__close-btn');

  if (nextBtn) {
    nextBtn.removeEventListener('click', clickBtnNext);
  }

  if (prevBtn) {
    prevBtn.removeEventListener('click', clickBtnPrev);
  }

  if (closeBtn) {
    closeBtn.removeEventListener('click', removeGallery);
  }

  if (galleryCont) {
    popupWindow?.classList?.remove('active');
    galleryCont.remove();
  }
};
