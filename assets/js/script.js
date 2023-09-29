"use strict";

/* const nombreBarbero = document.querySelector("#nombreBarbero");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#correo"); */
const logo1 = document.querySelector("#logo1");
const logo2 = document.querySelector("#logo2");
const logo3 = document.querySelector("#logo3");

const datosBarberia = {
  nombreBarbero: "Anthony Salas",
  telefono: "8513-3445 ", //85133445
  correo: "akiba@gmail.com",
  dir1: "25m Oeste Diagonal al BCR ",
  dir2: "Sabanilla de Montes de Oca, San José",
};
const enlaces = {
  instagram: "https://instagram.com/akiba.barberiacr?igshid=MzRlODBiNWFlZA==",
  instagram2: "https://instagram.com/akiba.barberiacr?igshid=MzRlODBiNWFlZA==",
  facebook: "https://www.facebook.com/profile.php?id=100063828533871",
  facebook2: "https://www.facebook.com/profile.php?id=100063828533871",
  whatsapp: "https://api.whatsapp.com/send?phone=50685133445",
  whatsapp2: "https://api.whatsapp.com/send?phone=50685133445",
  mailto: `mailto:andres@mainlydigitalworks.com`,
  telto: `tel:50685133445`,
  waze: `https://ul.waze.com/ul?place=ChIJLb2Y__vloI8R0aLRH_97yZg&ll=9.94437100%2C-84.03628320&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location`,
  googlemaps: "https://maps.app.goo.gl/x8CAC7P3RT3d6joA6",
  googlemaps2: "https://maps.app.goo.gl/x8CAC7P3RT3d6joA6",
};
const ruta_logo = "./assets/images/akiba-logo.svg";

/**
 * Cambiar title
 * cambiar meta title
 * Preload images
 * backround'image in preloader css
 */

for (const dato in datosBarberia) {
  const elemento = document.querySelector(`#${dato}`);
  elemento.textContent = datosBarberia[dato];
}

for (const link in enlaces) {
  const elemento = document.querySelector(`#${link}`);
  elemento.setAttribute("href", enlaces[link]);
}

logo1.setAttribute("src", ruta_logo);
logo2.setAttribute("src", ruta_logo);
logo3.setAttribute("src", ruta_logo);

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * PRELOADER
 *
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * MOBILE NAVBAR
 *
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNav);

/**
 * HEADER & BACK TOP BTN
 *
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

window.addEventListener("scroll", activeElementOnScroll);

/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.15
    ) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);
