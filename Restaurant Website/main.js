const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header_tag", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header_content .section_description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header_btns", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".service_card", {
  ...scrollRevealOption,
  interval: 500,
});

// Slider Element

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
});
