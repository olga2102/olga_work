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
