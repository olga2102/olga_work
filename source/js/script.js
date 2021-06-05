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

let buttonTour = document.querySelectorAll(".button-buy");
let formBuy = document.querySelector(".buy");
let closeButton = document.querySelectorAll(".close-button");
let inputTel = document.querySelectorAll(".form__input--tel");
let inputMail = document.querySelectorAll(".form__input--email");
let forms = document.querySelectorAll(".form");
// let errorText = document.querySelector(".form__alert");

for(let i = 0; i < buttonTour.length; i++) {
buttonTour[i].addEventListener("click", function (evt) {
  console.log(buttonTour[i]);
  evt.preventDefault();
  formBuy.classList.add("buy--opened");
  inputTel[0].focus();
});
}

forms.forEach((form) => {
  form.addEventListener("submit", function (evt) {
    if (!inputTel.value || !inputMail.value) {
      evt.preventDefault();
    } else {
      localStorage.setItem("tel", inputTel.value);
      localStorage.setItem("email", inputMail.value);
    }
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    if (formBuy.classList.contains("buy--opened")) {
      formBuy.classList.remove("buy--opened");
    }
  }
});

let sendButton = document.querySelectorAll(".form__button");
let formSuccess = document.querySelector(".success");
let closeButtonSuccess = document.querySelector(".close-button--success");
let formBuyWrapper = document.querySelector(".buy__wrapper");
let formFeedbackWrapper = document.querySelector(".feedback__wrapper");


// for(let i = 0; i < sendButton.length; i++) {
//   sendButton[i].addEventListener("click", function () {
//     console.log(sendButton[i])
//     formBuy.classList.remove("buy--opened");
//     formBuyWrapper.classList.add("buy__wrapper--sended");
//     formSuccess.classList.add("success--opened");
//   });
// }

for(let i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener("click", function () {
    formBuy.classList.remove("buy--opened");
    formSuccess.classList.remove("success--opened");
  });
}

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
