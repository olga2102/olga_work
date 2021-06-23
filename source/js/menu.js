'use strict';

let menu = document.querySelector(".main-nav__list");
let openMenu = document.querySelector(".toggle");

openMenu.classList.add("toggle--close");
menu.classList.remove("main-nav__list--open");

openMenu.addEventListener("click", function () {
  menu.classList.toggle("main-nav__list--open");
  openMenu.classList.toggle("toggle--close");
  openMenu.classList.toggle("toggle--open");
});


