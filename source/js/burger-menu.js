var navMain = document.querySelector(".main-nav")
var navToggle = document.querySelector(".main-nav__toggle")

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav__mobile-closed")) {
    navMain.classList.remove("main-nav__mobile-closed")
    navToggle.classList.remove("main-nav__toggle--closed")
    navToggle.classList.add("main-nav__toggle--open")
  } else {
    navMain.classList.add("main-nav__mobile-closed")
    navToggle.classList.remove("main-nav__toggle--open")
    navToggle.classList.add("main-nav__toggle--closed")
  }
})
