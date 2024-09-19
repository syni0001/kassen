let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100; // Flyt slideren 100% af containerens bredde
  document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

// Automatiske skift hver 3. sekund
setInterval(() => {
  moveSlide(1);
}, 3000);

function moveSlide(step) {
  showSlide(currentSlide + step);
}

// Swipe funktionalitet til mobile enheder
let touchStartX = 0;
let touchEndX = 0;

document.querySelector(".slider-container").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.querySelector(".slider-container").addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX) {
    moveSlide(1);
  }
  if (touchEndX > touchStartX) {
    moveSlide(-1);
  }
}
