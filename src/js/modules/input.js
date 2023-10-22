const selectInputLabel = document.querySelector('.profile-input.select');
const selectList = document.querySelector('.select__list');
const selectInput = document.querySelector('.profile-input.select > input');

export const selectClick = () => {
  if (selectInputLabel)
    selectInputLabel.addEventListener('click', () => {
      selectList?.classList?.toggle('active');
    });

  if (selectList) {
    selectList.addEventListener('click', (e) => {
      selectInput.setAttribute('value', e.target.getAttribute('data-value'));
      selectList?.classList?.toggle('active');
    });
  }
};

export const profileFormClick = () => {
  const profileForm = document.querySelector('.profile__form');
  if (profileForm) {
    profileForm.addEventListener('click', (e) => {
      if (e.target.getAttribute('class') === 'profile-input__edit-btn') {
        const input = document.querySelector(`input[name=${e.target.getAttribute('id')}]`);

        if (input) {
          input.removeAttribute('readonly');
          input.focus();
        }
      }
    });
  }
};
