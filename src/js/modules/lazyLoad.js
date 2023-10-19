const caviarDesk = document.querySelector('.caviar__caviar-bg.desk');

export const loadBgImage = () => {
  if (window.innerWidth > 1024) {
    if (!caviarDesk.getAttribute('src')) caviarDesk.setAttribute('src', caviarDesk.getAttribute('data-src'));
  }
};
