let inputs = document.querySelectorAll('input');
let form = document.querySelector(".form");
let inputTel = document.querySelectorAll(".form__input--tel");
let inputMail = document.querySelectorAll(".form__input--email");
let modalNotification = document.querySelector(".success");

const checkTypeValue = (data) => {
  console.log(data.type)
  let value;
  if (data.type === "tel") {
    value = /^\d+$/.test(data.value);
  } else if (data.type === "email") {
    value = /^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(data.value);
  }

  // let errorText = getSiblingElements(data);
  // if (data.value.length < 1 || value) {
  //   errorText.style.display = "none";
  // } else if (!value) {
  //   errorText.style.display = "block";
  // }
}

const getSiblingElements = (currentInput) => {
  let element = currentInput;
  while (element) {
    element = element.previousElementSibling;
    if (element.className === "form__alert") {
      return element;
      break;
    }
  }
}

// inputs.forEach(input => {
//   input.addEventListener("input", function () {
//     checkTypeValue(input);
//   })
// });

  // form.addEventListener("submit", function (evt) {
  //   if (inputTel.value.length < 1 || inputMail.value.length < 1) {
  //     evt.preventDefault();
  //   } else {
  //     console.log('see')
  //     localStorage.setItem("tel", inputTel.value);
  //     localStorage.setItem("email", inputMail.value);
  //   }
  // });

  // this code is correct!

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  let statuses = [];

  inputs.forEach(input => {
      let check = checkTypeValue(input);

      switch (input.type) {
          case 'tel':
              if (input.value.length !== 10) {
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
  }
})


let buttonTour = document.querySelectorAll(".button-buy");
// let formBuy = document.querySelector(".buy");
// let closeButton = document.querySelectorAll(".close-button");

for(let i = 0; i < buttonTour.length; i++) {
buttonTour[i].addEventListener("click", function (evt) {
  console.log(buttonTour[i]);
  evt.preventDefault();
  formBuy.classList.add("buy--opened");
  // inputTel[i].focus();
});
}

let sendButton = document.querySelectorAll(".form__button");

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

// for(let i = 0; i < closeButton.length; i++) {
//   closeButton[i].addEventListener("click", function () {
//     formBuy.classList.remove("buy--opened");
//     formSuccess.classList.remove("success--opened");
//   });
// }
