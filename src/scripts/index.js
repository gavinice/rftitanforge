import "../styles/index.scss";

let menuBtnOpen = document.querySelector(".hamburger");
let menuBtnClose = document.querySelector(".menu .close");
let main = document.querySelector(".main");

function closeMenu() {
  document.querySelector("body").classList.remove("is-menu-open");
}

menuBtnOpen.addEventListener("click", function (e) {
  document.querySelector("body").classList.add("is-menu-open");
  e.stopPropagation();
});
menuBtnClose.addEventListener("click", closeMenu);

main.addEventListener("click", function () {
  const isOpen = document
    .querySelector("body")
    .classList.contains("is-menu-open");
  if (isOpen) {
    closeMenu();
  }
});

function toggle(e) {
  const answer = e.target.nextElementSibling;
  answer.classList.toggle("hide");
}

const hideShowToggle = document.querySelectorAll(".question-container");

hideShowToggle.forEach((bar) => {
  bar.addEventListener("click", toggle);
});
