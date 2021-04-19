var menu = document.querySelector('.main-nav__list');
var openMenu = document.querySelector('.toggle');
var openButton = document.querySelector('.toggle');

openButton.classList.add('toggle--close');
menu.classList.remove('main-nav__list--open');

openMenu.addEventListener('click', function () {
  menu.classList.toggle('main-nav__list--open');
  openButton.classList.toggle('toggle--close');
  openButton.classList.toggle('toggle--open');
});

var buttonTour = document.querySelectorAll('.button-buy');
var formBuy = document.querySelector('.buy');
var closeButton = document.querySelector('.close-button');
var inputTel = document.querySelector('.form-buy__input--tel');
var inputMail = document.querySelector('.form-buy__input--email');

for(var i = 0; i < buttonTour.length; i++) {
buttonTour[i].addEventListener('click', function () {
  formBuy.classList.add('buy--opened');
  inputTel.focus();
});
}

closeButton.addEventListener('click', function () {
  formBuy.classList.remove('buy--opened');
});

formBuy.addEventListener("submit", function (evt) {
  if (!inputTel.value || !inputMail.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("tel", inputTel.value);
    localStorage.setItem("email", inputMail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (formBuy.classList.contains("buy--opened")) {
      formBuy.classList.remove("buy--opened");
    }
  }
});
