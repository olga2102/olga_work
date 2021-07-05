let buttonTour = document.querySelectorAll(".button-buy");
let buy = document.querySelector(".buy");
let inputTel = document.querySelector(".form__input--tel");

for(let i = 0; i < buttonTour.length; i++) {
  buttonTour[i].addEventListener("click", function (evt) {
    console.log(buttonTour[i]);
    evt.preventDefault();
    buy.classList.add("buy--opened");
    inputTel.focus();
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

let closeButton = document.querySelectorAll(".close-button");
// let formBuy = document.querySelector(".buy");
let formSuccess = document.querySelector(".modal-success");
for(let i = 0; i < closeButton.length; i++) {

  closeButton[i].addEventListener("click", function () {
    console.log('hi');
    buy.classList.remove("buy--opened");
    formSuccess.style.display = "none";
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape" || evt.key === "Esc") {
    if (buy.classList.contains("buy--opened")) {
      buy.classList.remove("buy--opened");
    }
  }
});

const inputs = document.querySelectorAll('input');
const forms = document.querySelectorAll('.form');
const modalNotification = document.querySelector('.modal-success');

const checkValue = (data) => { // проверка значения, смена класса у блока form__alert
  let value = checkTypeValue(data);
  let errorText = getSiblingElements(data);

  if (data.value.length < 1 || value) {
    errorText.style.display = 'none';
  } else if (!value) {
    errorText.style.display = 'block';
  }
}

const checkTypeValue = (element) => { // проверка типа inputa и выбор соотвествующего типу регулярного выражения
    let value;

    if (element.type === 'tel') {
        value = /^\d+$/.test(element.value);
    } else if (element.type === "email") {
        value = /^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(element.value);
    }
    return value;
}

const getSiblingElements = (currentInput) => { // поиск соседнего элемента с классом form__alert
  let element = currentInput;

  while (element) {
    element = element.previousElementSibling;
    if (element.className === 'form__alert') {
      return element;
      break;
    }
  }
}

inputs.forEach(input => {
  input.addEventListener('input', function () {
    checkValue(input);
  })
});

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let statuses = [];
        let inputs = form.querySelectorAll('input');

        inputs.forEach(input => {
            let check = checkTypeValue(input);
            switch (input.type) {
                case 'tel':
                    if (input.value.length !== 10) {
                      console.log(check);
                        let alert = getSiblingElements(input);
                        alert.style.display = 'block';
                        statuses.push(false);
                    } else {
                        statuses.push(true);
                    }
                break;
                case 'email':
                    if (!check) {
                        let alert = getSiblingElements(input);
                        alert.style.display = 'block';
                        statuses.push(false);
                    } else {
                        statuses.push(true);
                    }
                break;
            }
        });

        let result = statuses.includes(false);

        if (result === false) {
            form.reset();
            modalNotification.style.display = "block";
            buy.style.display = "none";
        }
    })
})

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


