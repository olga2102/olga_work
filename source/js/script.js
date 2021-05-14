'use strict';

let menu = document.querySelector(".main-nav__list");
let openMenu = document.querySelector(".toggle");
// let openButton = document.querySelector("toggle");

openMenu.classList.add("toggle--close");
menu.classList.remove("main-nav__list--open");

openMenu.addEventListener("click", function () {
  menu.classList.toggle("main-nav__list--open");
  openMenu.classList.toggle("toggle--close");
  openMenu.classList.toggle("toggle--open");
});

let buttonTour = document.querySelectorAll(".button-buy");
let formBuy = document.querySelector(".buy");
let closeButton = document.querySelector(".close-button");
let inputTel = document.querySelector(".form-buy__input--tel");
let inputMail = document.querySelector(".form-buy__input--email");

for(let i = 0; i < buttonTour.length; i++) {
buttonTour[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  formBuy.classList.add("buy--opened");
  inputTel.focus();
});
}

closeButton.addEventListener("click", function () {
  formBuy.classList.remove("buy--opened");
  formBuyWrapper.classList.remove("buy__wrapper--sended");
  formBuy.classList.remove("buy--sended");
  textSuccess.classList.remove("success__text--sended");
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
  if (evt.key === "Escape" || evt.key === "Esc") {
    if (formBuy.classList.contains("buy--opened")) {
      formBuy.classList.remove("buy--opened");
    }
  }
});

let buyButton = document.querySelector(".form-buy__button");
let formSuccess = document.querySelector(".success");
let closeButtonSuccess = document.querySelector(".close-button--success");
let formBuyWrapper = document.querySelector(".buy__wrapper");
let textSuccess = document.querySelector(".success__text");

buyButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  // formBuy.classList.remove("buy--opened");
  formBuyWrapper.classList.add("buy__wrapper--sended");
  formBuy.classList.add("buy--sended");
  textSuccess.classList.add("success__text--sended");
  // formSuccess.classList.add("success--opened");
});

// closeButtonSuccess.addEventListener("click", function () {
//   formSuccess.classList.remove("success--opened");
// });

// window.addEventListener("keydown", function (evt) {
//   if (evt.key === "Escape" || evt.key === "Esc") {
//     if (formSuccess.classList.contains("success--opened")) {
//       formSuccess.classList.remove("success--opened");
//     }
//   }
// });

let telForm = document.querySelector("#phone");
let numberLength = 10;

telForm.addEventListener('input', () => {
  const valueTelLength = telForm.value.length;

  if (valueTelLength > numberLength) {
    telForm.setCustomValidity(`Удалите лишние ${valueTelLength - numberLength} симв.`);
  } else if (valueTelLength < numberLength) {
    telForm.setCustomValidity(`Еще ${numberLength - valueTelLength} симв.`);
  } else {
    telForm.setCustomValidity('');
  }
  telForm.reportValidity();
});

// telForm.addEventListener('keyup', () => {
//   const valueTel = telForm.value;

//   console.log(valueTel);
//   const valueTelLength = telForm.value.length;
//   for (let i = 0; i < valueTelLength; i++) {
//   if (typeof valueTel !== 'number') {
//     console.log(1)
//   }
// }
// })

let places = document.querySelectorAll(".places__link");
let country = document.querySelectorAll(".country");
let tour = document.querySelectorAll(".tour__link");

const clearCurrent = () => {
  for(let i = 0; i < country.length; i++) {
    if (country[i].classList.contains("country--current")) {
      country[i].classList.remove("country--current");
    }
  }

  for(let i = 0; i < tour.length; i++) {
    if (tour[i].classList.contains("tour__link--current")) {
      tour[i].classList.remove("tour__link--current");
    }
  }
}

const addCurrent = (param) => {
  for(let i = 0; i < country.length; i++) {
    console.log(country[i].dataset.country);
    if (country[i].dataset.country === param) {
       country[i].classList.add("country--current");
    }
  }

  for(let i = 0; i < tour.length; i++) {
    console.log(param);
    if (tour[i].dataset.country === param) {
       tour[i].classList.add("tour__link--current");
    }
  }
}

const updateCurrentCountry = () => {
  for(let i = 0; i < places.length; i++) {
    places[i].addEventListener("click", () => {
      clearCurrent();
      addCurrent(places[i].dataset.country);
    })
  }

  for(let i = 0; i < tour.length; i++) {
    tour[i].addEventListener("click", (evt) => {
      evt.preventDefault();
      clearCurrent();
      addCurrent(tour[i].dataset.country);
    })
  }
}

updateCurrentCountry();
