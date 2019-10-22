// Source: https://codepen.io/karisabinemalmin/pen/yZojOy
// Lazy load: Fade in and load images when scroll into viewport

// Images that needs to be formatted like this:
// <img class="lazy-load__image" data-src="image.png">

// Find all images
let images = document.querySelectorAll(".lazy-load__image");

function checkScroll(e) {
  images.forEach((image, i) => {
    const top = Math.round(image.getBoundingClientRect().top);
    const height = Math.round(image.getBoundingClientRect().height);
    const windowHeight = window.innerHeight;

    // If image is scrolled into viewport
    if (top + height / 2 < windowHeight) {
      // If image has no src
      if (image.src.length < 1) {
        // Find url in data-img (<img data-src="image.png">) and set it as "src"
        // (<img src="image.png">) when it is in viewport and should be loaded.
        if (image.dataset.src) {
          image.src = image.dataset.src;
        }
      }

      // Add active class to add animation
      image.classList.add("lazy-load__image--active");
    } else {
      image.classList.remove("lazy-load__image--active");
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
