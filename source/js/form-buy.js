let buttonTour = document.querySelectorAll('.button-buy');
let formBuy = document.querySelector('.buy');
let closeButton = document.querySelector('.close-button');
let inputTel = document.querySelector('.form-buy__input--tel');
let inputMail = document.querySelector('.form-buy__input--email');

for(let i = 0; i < buttonTour.length; i++) {
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
