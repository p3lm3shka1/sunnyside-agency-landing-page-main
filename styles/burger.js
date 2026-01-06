const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");

function setOpen(open) {
  menu.dataset.open = open ? "true" : "false";
  burger.setAttribute("aria-expanded", open ? "true" : "false");
}

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  setOpen(menu.dataset.open !== "true");
});
