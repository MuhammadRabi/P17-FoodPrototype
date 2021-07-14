// scroll to top functionality

const scrollToTop = document.querySelector(".scroll-to-top");
// Eventlistener when scrolling
window.addEventListener("scroll", showScrollTop);

// function to show the btn
function showScrollTop() {
  if (window.pageYOffset > 150) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
}

// Eventlistener when click the button
scrollToTop.addEventListener("click", goToTop);

//function to got to top of page
function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// navigation functionality

let navLinks = document.querySelectorAll(".navigation li a");

function scrollToSection(element) {
  element.forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault();
      element.forEach((ele) => {
        ele.classList.remove("active");
      });
      link.classList.add("active");
      let section = document.querySelector(e.target.dataset.link).offsetTop;
      window.scrollTo({
        top: section,
        left: 0,
        behavior: "smooth",
      });
    })
  );
}
// calling the navigation function
scrollToSection(navLinks);

// mini-navigatin on mobile screens

const menuToggle = document.querySelector("nav .menu-toggle");
const navigation = document.querySelector("nav .navigation");

menuToggle.addEventListener("click", showNavigation);

function showNavigation() {
  navigation.classList.toggle("active");
  menuToggle.classList.toggle("active");
}
