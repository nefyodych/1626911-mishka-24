var navMain = document.querySelector(".main-nav__wrapper")
var navToggle = document.querySelector(".main-nav__toggle")

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav__wrapper--hidden")) {
    navMain.classList.remove("main-nav__wrapper--hidden")
    navToggle.classList.remove("main-nav__toggle--closed")
    navToggle.classList.add("main-nav__toggle--open")
  } else {
    navMain.classList.add("main-nav__wrapper--hidden")
    navToggle.classList.remove("main-nav__toggle--open")
    navToggle.classList.add("main-nav__toggle--closed")
  }
})
