let buyButton = document.querySelector('.form-buy__button');
let formSuccess = document.querySelector('.success');
let closeButtonSuccess = document.querySelector('.close-button--success');

buyButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  formBuy.classList.remove("buy--opened");
  formSuccess.classList.add('success--opened');
});

closeButtonSuccess.addEventListener('click', function () {
  formSuccess.classList.remove('success--opened');
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (formSuccess.classList.contains("success--opened")) {
      formSuccess.classList.remove("success--opened");
    }
  }
});
