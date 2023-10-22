import { minusFunc, plusFunc } from './counter';
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const authBtn = document.querySelector('button.header__auth-btn');
const basketBtn = document.querySelector('.header__basket-btn');
const burgerMenuBtn = document.querySelector('.header__burger-btn');
const popupWindow = document.querySelector('.popup');
const authModal = document.querySelector('.popup-form.auth');
const regModal = document.querySelector('.popup-form.registration');
const reccPassModal = document.querySelector('.popup-form.rec-pass');
const menuDesk = document.querySelector('.menu-desk');
const menuDeskCloseBtn = document.querySelector('.menu-desk__close-btn');
const burgerMenu = document.querySelector('.burger');
const burgerCloseBtn = document.querySelector('.burger__close-btn');
const popupFilterWindow = document.querySelector('.popup__filter');
const popupProductWindow = document.querySelector('.popup-product');
const burgerAuthBtn = document.querySelector('button.burger__auth-btn');

const counterState = {
  el: document.querySelector('.popup-product.active .popup-product__counter'),
  value: 1,
};

const stopPropagation = (e) => {
  e.stopPropagation();
};

const openAuthModal = (e) => {
  e.stopPropagation();
  popupWindow?.classList?.add('active');
  authModal?.classList?.add('active');
};

const burgerMenuBtnClick = (e) => {
  e.stopPropagation();
  if (window.innerWidth > 1024) {
    menuDesk?.classList?.add('active');
  } else {
    burgerMenu?.classList?.add('active');
    document.body.style.overflow = 'hidden';
    if (burgerAuthBtn) burgerAuthBtn.addEventListener('click', openAuthModal);
  }
};

const burgerMenuCloseBtn = () => {
  burgerMenu?.classList?.remove('active');
  document.body.style.overflow = 'auto';

  if (burgerAuthBtn) burgerAuthBtn.removeEventListener('click', openAuthModal);

  if (burgerCloseBtn) burgerCloseBtn.removeEventListener('click', burgerMenuCloseBtn);
};

const menuDeskClick = (e) => {
  menuDesk?.classList?.remove('active');
};

const clickPlusBtn = () => {
  plusFunc(counterState);
};

const clickMinusBtn = () => {
  minusFunc(counterState);
};

const closeBtnPopupWindowProd = () => {
  const popupWindowProduct = document.querySelector('.popup-product.active');
  const closeBtn = document.querySelector('.popup-product.active > .popup__close-btn');
  const plusBtn = document.querySelector('.popup-product.active .popup-product__num-prod-plus');
  const minusBtn = document.querySelector('.popup-product.active .popup-product__num-prod-minus');

  if (minusBtn) minusBtn.removeEventListener('click', clickMinusBtn);

  if (plusBtn) plusBtn.removeEventListener('click', clickPlusBtn);
  if (closeBtn) closeBtn.removeEventListener('click', closeBtnPopupWindowProd);

  if (popupWindowProduct) popupWindowProduct?.classList?.remove('active');

  if (popupWindow) popupWindow?.classList?.remove('active');
};

export const headerClickFunc = () => {
  if (authBtn) authBtn.onclick = openAuthModal;

  if (burgerMenuBtn) burgerMenuBtn.onclick = burgerMenuBtnClick;

  if (menuDeskCloseBtn) menuDeskCloseBtn.onclick = menuDeskClick;

  if (burgerCloseBtn) burgerCloseBtn.onclick = burgerMenuCloseBtn;
};

export function resizePopupFilterwindow() {
  if (popupFilterWindow) popupFilterWindow.setAttribute(`style`, `height: ${window.innerHeight}px`);
}

const authModalClick = (e) => {
  e.stopPropagation();
  if (
    e.target.parentNode.getAttribute('class') === 'popup__close-btn' ||
    e.target.parentNode.parentNode.getAttribute('class') === 'popup__close-btn'
  ) {
    authModal?.classList?.remove('active');
    popupWindow?.classList?.remove('active');
  }

  if (e.target.getAttribute('class') === 'popup-form__reg-link') {
    regModal?.classList?.add('active');
    authModal?.classList?.remove('active');
  }

  if (e.target.getAttribute('class') === 'popup-form__forget-pass') {
    reccPassModal?.classList?.add('active');
    authModal?.classList?.remove('active');
  }

  if (e.target.getAttribute('id') === 'auth-checkbox') {
    const checkboxInput = document.getElementById('auth-checkbox');
    const checkboxInputMask = document.getElementById('auth-mask-checkbox');

    if (checkboxInput && checkboxInputMask)
      checkboxInput.onchange = () => {
        checkboxInputMask.innerHTML = checkboxInput.checked
          ? `<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'>
        <rect width='26' height='26' rx='5' fill='white' />
        <path d='M6 12.5L11.5 18L20.5 9' stroke='#003366' stroke-width='4' stroke-linecap='round' />
      </svg>`
          : ``;
      };
  }
};

const regModalClick = (e) => {
  e.stopPropagation();
  if (
    e.target.parentNode.getAttribute('class') === 'popup__close-btn' ||
    e.target.parentNode.parentNode.getAttribute('class') === 'popup__close-btn'
  ) {
    regModal?.classList?.remove('active');
    popupWindow?.classList?.remove('active');
  }

  if (e.target.getAttribute('id') === 'register-checkbox') {
    const checkboxInput = document.getElementById('register-checkbox');
    const checkboxInputMask = document.getElementById('register-mask-checkbox');

    if (checkboxInput && checkboxInputMask)
      checkboxInput.onchange = () => {
        checkboxInputMask.innerHTML = checkboxInput.checked
          ? `<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'>
        <rect width='26' height='26' rx='5' fill='white' />
        <path d='M6 12.5L11.5 18L20.5 9' stroke='#003366' stroke-width='4' stroke-linecap='round' />
      </svg>`
          : ``;
      };
  }
};

const recPassClick = (e) => {
  e.stopPropagation();
  if (
    e.target.parentNode.getAttribute('class') === 'popup__close-btn' ||
    e.target.parentNode.parentNode.getAttribute('class') === 'popup__close-btn'
  ) {
    reccPassModal?.classList.remove('active');
    popupWindow?.classList?.remove('active');
  }
};

export const authModalClicks = () => {
  if (authModal) authModal.addEventListener('click', authModalClick);
  if (regModal) regModal.addEventListener('click', regModalClick);

  if (reccPassModal) reccPassModal.addEventListener('click', recPassClick);
};

export const mainClicks = () => {
  const ourProductsBtn = document.querySelector('.caviar__products-btn');


  window.addEventListener('resize', resizePopupFilterwindow);
  window.addEventListener('load', resizePopupFilterwindow);

  if (ourProductsBtn) {
    ourProductsBtn.onclick = (e) => {
      const popupFilterWindow = document.querySelector('.popup-filter');
      console.log(popupFilterWindow);
      popupFilterWindow?.classList?.add('active');
      popupWindow?.classList?.add('active');
      document.body.style.overflow = 'hidden';
      const ourProductsCloseBtnClick = document.querySelector('.popup-filter__header > .popup__close-btn');
      ourProductsCloseBtnClick.onclick = () => {
        popupFilterWindow?.classList?.remove('active');
        popupWindow?.classList?.remove('active');
        document.body.style.overflow = 'auto';
      };
      e.stopPropagation();
    };
  }

  popupFilterWindow.addEventListener('click', stopPropagation);
};

export function windowClick() {
  popupWindow?.classList?.remove('active');
  authModal?.classList?.remove('active');
  regModal?.classList?.remove('active');
  reccPassModal?.classList?.remove('active');
  menuDesk?.classList?.remove('active');
  popupFilterWindow?.classList?.remove('active');
  popupProductWindow?.classList?.remove('active');
  document.body.style.overflow = 'auto';

  if (regModal) regModal.removeEventListener('click', regModalClick);

  if (authModal) authModal.removeEventListener('click', authModalClick);

  if (reccPassModal) reccPassModal.removeEventListener('click', recPassClick);
}

export const cardClick = () => {
  const card = document.querySelectorAll('.card');

  for (let i = 0; i < card.length; i++) {
    card[i].onclick = () => {
      console.log('click');
      popupProductClick();
    };
  }
};

export const popupProductClick = () => {
  const popupWindowProduct = document.querySelector('.popup-product');
  const popupWindow = document.querySelector('.popup');
  popupWindow?.classList?.add('active');

  popupWindowProduct?.classList?.add('active');

  const closeBtn = document.querySelector('.popup-product.active > .popup__close-btn');

  const plusBtn = document.querySelector('.popup-product.active .popup-product__num-prod-plus');

  const counterEl = document.querySelector('.popup-product.active .popup-product__counter');

  const minusBtn = document.querySelector('.popup-product.active .popup-product__num-prod-minus');

  counterState.el = document.querySelector('.popup-product.active .popup-product__counter');

  new Swiper('.popup-product__swiper', {
    pagination: {
      el: '.swiper-pagination',
      renderBullet: function (index, className) {
        return `<span class="swiper-pagination-bullet"></span>`;
      },
    },
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  if (plusBtn) {
    plusBtn.addEventListener('click', clickPlusBtn);
  }

  if (minusBtn) {
    minusBtn.addEventListener('click', clickMinusBtn);
  }

  popupWindowProduct.onclick = (e) => {
    e.stopPropagation();
  };

  closeBtn.addEventListener('click', closeBtnPopupWindowProd);
};
