var slideIndex = 0;
var logoIndex = 0;
carousel();

function carousel() {
  var slides = document.querySelectorAll(".slide");
  var logoSlides = document.querySelectorAll(".logo-slide");

  if (slides.length > 0) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (var i = 0; i < logoSlides.length; i++) {
      logoSlides[i].style.display = "none";
    }

    logoIndex++;
    if (logoIndex > logoSlides.length) {
      logoIndex = 1;
    }

    logoSlides[logoIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.display = "block";

    setTimeout(carousel, 3000); // Change slide every 3 seconds
  } else {
    console.error("No element with class 'slide' found.");
  }
}