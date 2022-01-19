var navMain = document.querySelector(".main-nav")
var navToggle = document.querySelector(".main-nav__toggle")

navMain.classList.remove("no.js")

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--mobile-closed")) {
    navMain.classList.remove("main-nav--mobile-closed")
    navToggle.classList.remove("main-nav__toggle--closed")
    navToggle.classList.add("main-nav__toggle--open")
  } else {
    navMain.classList.add("main-nav--mobile-closed")
    navToggle.classList.remove("main-nav__toggle--open")
    navToggle.classList.add("main-nav__toggle--closed")
  }
})
