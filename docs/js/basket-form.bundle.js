!function(){"use strict";const t=document.querySelector(".profile-input.select"),e=document.querySelector(".select__list"),c=document.querySelector(".profile-input.select > input");t&&t.addEventListener("click",(()=>{e?.classList?.toggle("active")})),e&&e.addEventListener("click",(t=>{c.setAttribute("value",t.target.getAttribute("data-value")),e?.classList?.toggle("active")})),(()=>{const t=document.querySelector(".profile__form");t&&t.addEventListener("click",(t=>{if("profile-input__edit-btn"===t.target.getAttribute("class")){const e=document.querySelector(`input[name=${t.target.getAttribute("id")}]`);e&&(e.removeAttribute("readonly"),e.focus())}}))})()}();