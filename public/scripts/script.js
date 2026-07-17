"Use Strict";

const html = document.querySelector("html");
const themeBtns = document.querySelectorAll(".theme-btn");
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtns = document.querySelectorAll(".close-menu-btn");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const cart = document.querySelector(".cart");
const cartOpenBtn = document.querySelector(".cart-open");
const overlay = document.querySelector(".overlay");

const changeTheme = () => {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "light") {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

const openMenu = () => {
  menu.classList.add("menu--active");
  overlay.classList.add("overlay--active");
};

const closeMenu = () => {
  menu.classList.remove("menu--active");
  overlay.classList.remove("overlay--active");
  submenu.classList.remove("submenu--active");
};

const openSubmenu = (event) => {
  submenu.classList.toggle("submenu--active");
  submenuOpenBtn.classList.toggle("submenu-open-btn--active");
};

themeBtns.forEach((btn) => {
  btn.addEventListener("click", changeTheme);
});

const closeCart = () => {
  cart.classList.remove("cart--active");
  overlay.classList.remove("overlay--active");
};

closeMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (menu.classList.contains("menu--active")) {
      menu.classList.remove("menu--active");
      overlay.classList.remove("overlay--active");
    }
    if (cart.classList.contains("cart--active")) {
      cart.classList.remove("cart--active");
      overlay.classList.remove("overlay--active");
    }
  });
});

const openCart = () => {
  cart.classList.add("cart--active");
  overlay.classList.add("overlay--active");
};

openMenuBtn.addEventListener("click", openMenu);
submenuOpenBtn.addEventListener("click", openSubmenu);
cartOpenBtn.addEventListener("click", openCart);
overlay.addEventListener("click", () => {
  closeMenu();
  closeCart();
});
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    html.classList.add(`${savedTheme}`);
  } else {
    localStorage.setItem("theme", "light");
  }
});
