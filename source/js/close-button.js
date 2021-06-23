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
