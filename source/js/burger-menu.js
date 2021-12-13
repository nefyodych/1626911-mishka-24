var navMain = document.querySelector(".main-nav__wrapper")
var navIconOpen = document.querySelector(".main-nav__button-icon-open")
var navIconClose = document.querySelector(".main-nav__button-icon-close")
var navToggle = document.querySelector(".main-nav__button-nav")

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav__wrapper--hidden")) {
    navMain.classList.remove("main-nav__wrapper--hidden")
    navIconClose.classList.remove("main-nav__button-icon-hidden")
    navIconOpen.classList.add("main-nav__button-icon-hidden")
  } else {
    navMain.classList.add("main-nav__wrapper--hidden")
    navIconOpen.classList.remove("main-nav__button-icon-hidden")
    navIconClose.classList.add("main-nav__button-icon-hidden")
    navIconOpen.classList.remove("main-nav__button-icon-hidden")
  }
})
