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

window.addEventListener('resize', resizePopupFilterwindow);
popupWindow.addEventListener('click', windowClick);
