let inputs = document.querySelectorAll('input');

const checkValue = (data) => {
  console.log(data.type)
  let value;
  if (data.type === "tel") {
    value = /^\d+$/.test(data.value);
  } else if (data.type === "email") {
    value = /^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(data.value);
  }

  let errorText = getSiblingElements(data);
  if (data.value.length < 1 || value) {
    errorText.style.display = "none";
  } else if (!value) {
    errorText.style.display = "block";
  }
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

inputs.forEach(input => {
  input.addEventListener("input", function () {
    checkValue(input);
  })
});


// let numberLength = 10;

// for(let i = 0; i < inputTel.length; i++) {

//   inputTel[i].addEventListener('input', () => {
//     const valueTelLength = inputTel[i].value.length;
//     if (valueTelLength > numberLength) {
//       inputTel[i].setCustomValidity(`Удалите лишние ${valueTelLength - numberLength} симв.`);
//     } else if (valueTelLength < numberLength) {
//       inputTel[i].setCustomValidity(`Еще ${numberLength - valueTelLength} симв.`);
//     } else {
//       inputTel[i].setCustomValidity('');
//     }
//     inputTel[i].reportValidity();
//   });
// }

// let checkValue = (data) => {
//   let val = /^\d+$/.test(data);
//   let numberLength = 10;
//   const valueTelLength = data.value.length;
//   let value = /^[a-zA-Z-.]+@[a-z]+\.[a-z]{2,3}$/.test(data);
//   if (!val) {
//     data.setCustomValidity('Данные неверны');
//   } else if (valueTelLength > numberLength) {
//     data.setCustomValidity(`Удалите лишние ${valueTelLength - numberLength} симв.`);
//   } else if (valueTelLength < numberLength) {
//     data.setCustomValidity(`Еще ${numberLength - valueTelLength} симв.`);
//   } else {
//     data.setCustomValidity('');
//   }
//   data.reportValidity();
// }

