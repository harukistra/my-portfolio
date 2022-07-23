const items = document.querySelectorAll(".sub");
const me = document.getElementById("me");

window.onload = function () {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.add("show");
  }
};
