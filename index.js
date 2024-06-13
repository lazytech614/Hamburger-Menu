const hamburgerMenuIcon = document.querySelector("#hamburger-menu-icon");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector("#close-icon");
const nav = document.querySelector("nav");

hamburgerMenuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.add("menu-open");
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});

window.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});
