const home_link = document.querySelector(".home");
const form_link = document.querySelector(".form");
const page = document.querySelector(".content");
const form = document.querySelector(".form");
form_link.addEventListener("click", () => {
  page.innerHTML = form.innerHTML;
});
function myFunction(e) {
  var elems = document.querySelectorAll(".active");
  [].forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
  e.target.className = "header__topnavbar__item active";
}
