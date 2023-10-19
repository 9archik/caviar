import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
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
import { loadBgImage } from './modules/lazyLoad';

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

const popupWindow = document.querySelector('.popup');

headerClickFunc();
authModalClicks();
regModalClicks();
mainClicks();
cardClick();
loadBgImage();

const resizeWIndow = () => {
  resizePopupFilterwindow();
  loadBgImage();
};

window.addEventListener('resize', loadBgImage);
popupWindow.addEventListener('click', windowClick);
