console.log("Script is laoded!");
var slideIndex = 1;
showSlides(slideIndex);

function next(n) {
  console.log("Next...");
  showSlides((slideIndex += n));
}

function prev(n) {
  console.log("Previous");
  showSlides((slideIndex -= n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("food-slider-item");
  console.log(slides);
  console.log(n);
  if (n > slides.length) {
    slideIndex = 1;
    n = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
    n = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");

    if (n - 1 == i) {
      slides[i].classList.add("active");
    }
  }
  console.log(slides);
}
