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
