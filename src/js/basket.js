const { plusFunc, minusFunc } = require('./modules/counter');

const counters = document.querySelectorAll('.basket-edit__count-block');
const startState = [];
function startFunc() {
  for (let i = 0; i < counters.length; i++) {
    counters[i].setAttribute('data-index', i);
    startState.push({ value: 1, el: counters[i].children[1] ? counters[i].children[1] : null });
  }
}

startFunc();

const basketBlock = document.querySelector('.basket-edit');

const clickMainBlock = (e) => {
  if (e.target.getAttribute('class') === 'basket-edit__plus-btn') {
    plusFunc(startState[e.target.parentNode.getAttribute('data-index')]);
  }

  if (e.target.getAttribute('class') === 'basket-edit__minus-btn') {
    minusFunc(startState[e.target.parentNode.getAttribute('data-index')]);
  }
};

basketBlock.addEventListener('click', clickMainBlock);
