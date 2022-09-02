const btn = document.querySelector("#header__menu");
const navbar = document.querySelector(".header__navbar");

btn.onclick = () => {
  btn.classList.toggle("bx-x");
  navbar.classList.toggle("show");
};

window.onscroll = () => {
  btn.classList.remove("bx-x");
  navbar.classList.remove("show");
};

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

const sr = ScrollReveal({
  distance: "25px",
  duration: "1500",
  reset: true,
});

sr.reveal(".header", { delay: 190, origin: "bottom" });
sr.reveal(".home,.about,.menu,.team,.blog,.contact,.letter", {
  delay: 200,
  origin: "bottom",
});
