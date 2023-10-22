export const plusFunc = (obj) => {
  if (obj.value && obj.el) {
    obj.value += 1;
    obj.el.textContent = obj.value;
  }
};

export const minusFunc = (obj) => {
  if (obj.value && obj.el && obj.value > 1) {
    obj.value -= 1;
    obj.el.textContent = obj.value;
  }
};
