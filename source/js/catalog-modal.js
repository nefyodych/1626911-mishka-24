const modal = document.querySelector(".modal")
const toggle = document.querySelectorAll(".catalog__button")
const toggle2 = document.querySelectorAll(".promo__button")

const articleInput = document.querySelector(".article_number")
const modalContent = document.querySelector(".modal__content")

toggle.forEach((btn) => {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault()

    if (modal.classList.contains("modal-close")) {
      modal.classList.remove("modal-close")
      console.log("### data: ", btn.dataset.id)
      articleInput.value = btn.dataset.id
    }
  })
})

toggle2.forEach((btn) => {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault()

    if (modal.classList.contains("modal-close")) {
      modal.classList.remove("modal-close")
      console.log("### data: ", btn.dataset.id)
      articleInput.value = btn.dataset.id
    }
  })
})

modal.addEventListener("click", function (evt) {
  console.log(evt.target)

  if (!evt.target.closest(".modal__content")) {
    console.log("## im outside!!!")

    if (modal.classList.contains("modal-close")) {
    } else {
      modal.classList.add("modal-close")
    }
  }
})
