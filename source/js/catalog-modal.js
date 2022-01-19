var Modal = document.querySelector(".modal")
var Toggle = document.querySelector(".catalog__button")
var ModalContent = document.querySelector(".modal__content")

Toggle.addEventListener("click", function () {
  if (Modal.classList.contains("modal-close")) {
    Modal.classList.remove("modal-close")
  }
})

ModalContent.addEventListener("click", function () {
  if (Modal.classList.contains("modal-close")) {
  } else {
    Modal.classList.add("modal-close")
  }
})
