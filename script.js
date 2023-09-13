// toggle (kalo tdi nya ada jdi gada, tdi nya gada jdi ada)
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hambur = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hambur.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
