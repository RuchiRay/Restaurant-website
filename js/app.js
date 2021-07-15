// slick carousel

$('.banner-area').slick({
  autoplay: true,
  speed: 800,
  arrows: false,
  dots: true,
  fade: true,

});
// swiper slider
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
})
// for navbar
const hamburger = document.querySelector(".hamburger");
const ham = document.getElementById('ham')
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const nav = document.querySelector(".nav-wrapper");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
for(let link of links){
  link.addEventListener('click',()=>{
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
    console.log(ham);
    ham.classList.toggle('opened')
  })
}
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

// for contacts

