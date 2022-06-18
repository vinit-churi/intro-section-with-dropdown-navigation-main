const sidebarClose = document.querySelector(".hamburger-close");
const mobileNav = document.querySelector(".mobile-nav");
const darkOverlay = document.querySelector("[data-dark-overlay]");
const hamburgerOpen = document.querySelector(".hamburger-open");

const featureButton = document.querySelector(
  "[data-desktop-feature-menu-button]"
);
const companyButton = document.querySelector(
  "[data-desktop-company-menu-button]"
);

const featureDrop = document.querySelector(".menu-item-subMenu-feature");
const companyDrop = document.querySelector(".menu-item-subMenu-company");

featureButton.addEventListener("click", () => {
  featureDrop.classList.toggle("hide");
});
companyButton.addEventListener("click", () => {
  companyDrop.classList.toggle("hide");
});

sidebarClose.addEventListener("click", () => {
  mobileNav.classList.toggle("hide");
  darkOverlay.classList.toggle("dark-overlay");
});

hamburgerOpen.addEventListener("click", () => {
  mobileNav.classList.toggle("hide");
  darkOverlay.classList.toggle("dark-overlay");
});
