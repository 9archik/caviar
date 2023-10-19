const authBtn = document.querySelector('.header__auth-btn');
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
const popupProductWindow = document.querySelector('.popup__product');

export const headerClickFunc = () => {
  authBtn.onclick = (e) => {
    e.stopPropagation();
    popupWindow?.classList?.add('active');
    authModal?.classList?.add('active');
  };

  burgerMenuBtn.onclick = (e) => {
    e.stopPropagation();
    if (window.innerWidth > 1024) {
      menuDesk?.classList?.add('active');
    } else {
      burgerMenu?.classList?.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  menuDeskCloseBtn.onclick = () => {
    menuDesk?.classList?.remove('active');
  };

  burgerCloseBtn.onclick = () => {
    burgerMenu?.classList?.remove('active');
    document.body.style.overflow = 'auto';
  };
};

export const authModalClicks = () => {
  const closeBtn = document.querySelector('.popup-form.auth > .popup__close-btn');
  const regLinkBtn = document.querySelector('.popup-form__reg-link');
  const forgetPassBtn = document.querySelector('.popup-form__forget-pass');

  authModal.onclick = (e) => {
    e.stopPropagation();
  };
  closeBtn.onclick = () => {
    authModal?.classList?.remove('active');
    popupWindow?.classList?.remove('active');
  };

  regLinkBtn.onclick = () => {
    regModal?.classList?.add('active');
    authModal?.classList?.remove('active');
  };

  forgetPassBtn.onclick = () => {
    reccPassModal?.classList?.add('active');
    authModal?.classList?.remove('active');
  };

  const checkboxInput = document.getElementById('auth-checkbox');
  const checkboxInputMask = document.getElementById('auth-mask-checkbox');

  checkboxInput.onchange = () => {
    checkboxInputMask.innerHTML = checkboxInput.checked
      ? `<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'>
        <rect width='26' height='26' rx='5' fill='white' />
        <path d='M6 12.5L11.5 18L20.5 9' stroke='#003366' stroke-width='4' stroke-linecap='round' />
      </svg>`
      : ``;
  };
};

export const regModalClicks = () => {
  regModal.onclick = (e) => {
    e.stopPropagation();
  };

  const closeBtn = document.querySelector('.popup-form.registration > .popup__close-btn');

  closeBtn.onclick = () => {
    regModal?.classList?.remove('active');
    popupWindow?.classList?.remove('active');
  };

  const checkboxInput = document.getElementById('register-checkbox');
  const checkboxInputMask = document.getElementById('register-mask-checkbox');

  checkboxInput.onchange = () => {
    checkboxInputMask.innerHTML = checkboxInput.checked
      ? `<svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'>
        <rect width='26' height='26' rx='5' fill='white' />
        <path d='M6 12.5L11.5 18L20.5 9' stroke='#003366' stroke-width='4' stroke-linecap='round' />
      </svg>`
      : ``;
  };
};

export const mainClicks = () => {
  const ourProductsBtn = document.querySelector('.caviar__products-btn');
  const ourProductsCloseBtnClick = document.querySelector('.popup-filter__header > .popup__close-btn');

  window.addEventListener('resize', resizePopupFilterwindow);
  window.addEventListener('load', resizePopupFilterwindow);

  ourProductsBtn.onclick = (e) => {
    popupFilterWindow?.classList?.add('active');
    popupWindow?.classList?.add('active');
    document.body.style.overflow = 'hidden';
    e.stopPropagation();
  };

  ourProductsCloseBtnClick.onclick = () => {
    popupFilterWindow?.classList?.remove('active');
    popupWindow?.classList?.remove('active');
    document.body.style.overflow = 'auto';
  };

  popupFilterWindow.onclick = (e) => {
    e.stopPropagation();
    console.log('click');
  };
};

export function resizePopupFilterwindow() {
  popupFilterWindow.setAttribute(`style`, `height: ${window.innerHeight}px`);
}

export function windowClick() {
  popupWindow?.classList?.remove('active');
  authModal?.classList?.remove('active');
  regModal?.classList?.remove('active');
  reccPassModal?.classList?.remove('active');
  menuDesk?.classList?.remove('active');
  popupFilterWindow?.classList?.remove('active');
  popupProductWindow?.classList?.remove('active');
  document.body.style.overflow = 'auto';
}

export const cardClick = () => {
  const card = document.querySelectorAll('.card');

  for (let i = 0; i < card.length; i++) {
    card[i].onclick = () => {
      popupWindow?.classList?.add('active');
      popupProductWindow?.classList?.add('active');
      popupProductClick();
    };
  }
};

export const popupProductClick = () => {
  const popupWindowProduct = document.querySelector('.popup-product.active');
  const closeBtn = document.querySelector('.popup-product.active > .popup__close-btn');

  popupWindowProduct.onclick = (e) => {
    e.stopPropagation();
  };

  closeBtn.onclick = () => {
    popupWindowProduct?.classList?.remove('active');
    popupWindow?.classList?.remove('active');
  };
};
