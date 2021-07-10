// for navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const nav = document.querySelector(".nav-wrapper");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

window.onscroll = () => {
  this.scrollY > 20
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");
};

// mixitup
const mixer = mixitup(".menu-container", {
  selectors: {
    target: ".menu-content",
  },
  
  animation: {
    easing: 'ease-in-out',
    duration: 400,
    effectsIn: 'fade translateY(-100%)'
}
});
