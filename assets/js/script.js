let navToggle = document.querySelector(".nav-toggle");
let navUl = document.querySelector(".nav-ul");

navToggle.addEventListener("click", () => {
  navUl.classList.toggle("display-ul");
});
