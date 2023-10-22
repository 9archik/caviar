import {
  authModalClicks,
  cardClick,
  headerClickFunc,
  mainClicks,
  popupProductClick,
  regModalClicks,
  resizePopupFilterwindow,
  windowClick,
} from './modules/main';

const popupWindow = document.querySelector('.popup');
const menuDesk = document.querySelector('.menu-desk');

headerClickFunc();
authModalClicks();
cardClick();

const resizeWIndow = () => {
  resizePopupFilterwindow();
};

popupWindow.addEventListener('click', windowClick);
menuDesk.addEventListener('click', windowClick);
