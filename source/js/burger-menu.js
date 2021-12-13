var navMain = document.querySelector(".main-nav__wrapper")
var navToggle = document.querySelector(".main-nav__button-nav")
navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav__wrapper--hidden")) {
    navMain.classList.remove("main-nav__wrapper--hidden")
  } else {
    navMain.classList.add("main-nav__wrapper--hidden")
  }
})
