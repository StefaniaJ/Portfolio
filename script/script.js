// Source: https://codepen.io/karisabinemalmin/pen/yZojOy
// Lazy load: Fade in and load images when scroll into viewport

// Elements that needs to be formatted like this:
// <element class="lazy-load__image" >

// Find all images
let images = document.querySelectorAll(".lazy-load__image");
let card = document.querySelectorAll(".flip-card");

function checkScroll(e) {
  images.forEach((card, i) => {
    const top = Math.round(card.getBoundingClientRect().top);
    const height = Math.round(card.getBoundingClientRect().height);
    const windowHeight = window.innerHeight;

    // If image is scrolled into viewport
    if (top + height / 2 < windowHeight) {
      // If image has no src
      //   if (card.src.length < 1) {
      //     // Find url in data-img (<img data-src="image.png">) and set it as "src"
      //     // (<img src="image.png">) when it is in viewport and should be loaded.
      //     if (card.dataset.src) {
      //       card.src = card.dataset.src;
      //     }
      //   }

      // Add active class to add animation
      card.classList.add("lazy-load__image--active");
    } else {
      card.classList.remove("lazy-load__image--active");
    }
  });
}

// Run function one time when first loaded to check if there are any images
// above the fold that needs to be loaded before scroll
checkScroll();

// Run function when scroll
window.addEventListener("scroll", function(e) {
  checkScroll();
});

// ////////////// NAVIGATION
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
}

// Scroll down more then 25px - see the button
window.onscroll = function() {
  scroll();
};

function scroll() {
  if (document.documentElement.scrollTop > 25) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// Click the button - come back on the top of the page
function btnTopFunction() {
  document.documentElement.scrollTop = 0;
}
