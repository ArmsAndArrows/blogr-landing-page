///DESKTOP

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownName = dropdown.querySelector(".dropdown__name");
  const dropdownList = dropdown.querySelector(".dropdown__list");
  const dropdownIcon = dropdown.querySelector(".dropdown__icon");

  dropdownName.addEventListener("click", () => {
    // Close all other dropdowns
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown
          .querySelector(".dropdown__list")
          .classList.remove("active");
        otherDropdown
          .querySelector(".dropdown__icon")
          .classList.remove("rotate");
      }
    });

    // Toggle the clicked dropdown
    dropdownList.classList.toggle("active");
    dropdownIcon.classList.toggle("rotate");
  });
});
function closeDropdowns(e) {
  if (!e.target.closest(".header__menu")) {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
      dropdown.querySelector(".dropdown__list").classList.remove("active");
    });
  }
}
document.addEventListener("click", closeDropdowns);

///MOBILE
const mobile = document.querySelector(".mobile");
const hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", function () {
  mobile.classList.toggle("mobile__active");
  if (mobile.classList.contains("mobile__active")) {
    hamburger.src = "./images/icon-close.svg";
  } else {
    hamburger.src = "./images/icon-hamburger.svg";
  }
});

///ACCORDION
const accordionMenus = document.querySelectorAll(".mobile__menu");

accordionMenus.forEach((menu) => {
  const menuDrop = menu.querySelector(".mobile__drop");
  const menuList = menu.querySelector(".mobile__list");
  const menuIcon = menu.querySelector(".mobile__icon");
  

  menuDrop.addEventListener("click", () => {
    // close all other menus
    accordionMenus.forEach((otherMenu) => {
      if (
        otherMenu !== menu &&
        otherMenu
          .querySelector(".mobile__list")
          .classList.contains("mobile__list--active")
      ) {
        otherMenu
          .querySelector(".mobile__list")
          .classList.remove("mobile__list--active");
        otherMenu.querySelector(".mobile__icon").classList.remove("rotate");
      }
    });

    // toggle menu open/close
    menuList.classList.toggle("mobile__list--active");
    menuIcon.classList.toggle("rotate");
  });
});
