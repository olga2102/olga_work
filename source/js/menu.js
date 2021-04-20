let menu = document.querySelector('.main-nav__list');
let openMenu = document.querySelector('.toggle');
let openButton = document.querySelector('.toggle');

openButton.classList.add('toggle--close');
menu.classList.remove('main-nav__list--open');

openMenu.addEventListener('click', function () {
  menu.classList.toggle('main-nav__list--open');
  openButton.classList.toggle('toggle--close');
  openButton.classList.toggle('toggle--open');
});

// let buttonTour = document.querySelectorAll('.button-buy');
// let formBuy = document.querySelector('.buy');
// let closeButton = document.querySelector('.close-button');
// let inputTel = document.querySelector('.form-buy__input--tel');
// let inputMail = document.querySelector('.form-buy__input--email');

// for(let i = 0; i < buttonTour.length; i++) {
// buttonTour[i].addEventListener('click', function () {
//   formBuy.classList.add('buy--opened');
//   inputTel.focus();
// });
// }

// closeButton.addEventListener('click', function () {
//   formBuy.classList.remove('buy--opened');
// });

// formBuy.addEventListener("submit", function (evt) {
//   if (!inputTel.value || !inputMail.value) {
//     evt.preventDefault();
//   } else {
//     localStorage.setItem("tel", inputTel.value);
//     localStorage.setItem("email", inputMail.value);
//   }
// });

// window.addEventListener("keydown", function (evt) {
//   if (evt.key === 'Escape' || evt.key === 'Esc') {
//     if (formBuy.classList.contains("buy--opened")) {
//       formBuy.classList.remove("buy--opened");
//     }
//   }
// });

// let buyButton = document.querySelector('.form-buy__button');
// let formSuccess = document.querySelector('.success');
// let closeButtonSuccess = document.querySelector('.close-button--success');

// buyButton.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   formBuy.classList.remove("buy--opened");
//   formSuccess.classList.add('success--opened');
// });

// closeButtonSuccess.addEventListener('click', function () {
//   formSuccess.classList.remove('success--opened');
// });

// window.addEventListener("keydown", function (evt) {
//   if (evt.key === 'Escape' || evt.key === 'Esc') {
//     if (formSuccess.classList.contains("success--opened")) {
//       formSuccess.classList.remove("success--opened");
//     }
//   }
// });
