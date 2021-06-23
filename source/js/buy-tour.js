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
