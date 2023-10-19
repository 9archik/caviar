const caviarDesk = document.querySelector('.caviar__caviar-bg.desk');
const caviarMob = document.querySelector('.caviar__caviar-bg.mob');

export const loadBgImage = () => {
  if (window.innerWidth > 1024) {
    caviarDesk.setAttribute('src', caviarDesk.getAttribute('data-src'));
  } else {
    caviarMob.setAttribute('src', caviarMob.getAttribute('data-src'));
  }
};

