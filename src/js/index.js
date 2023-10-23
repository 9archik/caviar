import {
  authModalClicks,
  cardClick,
  headerClickFunc,
  mainClicks,
  popupProductClick,
  regModalClicks,
  windowClick,
} from './modules/main';

const popupWindow = document.querySelector('.popup');
const menuDesk = document.querySelector('.menu-desk');

headerClickFunc();
authModalClicks();
mainClicks();
cardClick();

if (popupWindow) 
popupWindow.addEventListener('click', windowClick);

if (menuDesk) 
menuDesk.addEventListener('click', windowClick);
