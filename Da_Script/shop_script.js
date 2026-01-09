document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-carousel-button]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const carousel = button.closest("[data-carousel]");
      const slides = carousel.querySelector("[data-slides]");

      const activeSlide = slides.querySelector("[data-active]");
      const slidesArray = [...slides.children];
      let newIndex = slidesArray.indexOf(activeSlide) + offset;

      if (newIndex < 0) newIndex = slidesArray.length - 1;
      if (newIndex >= slidesArray.length) newIndex = 0;

      slidesArray[newIndex].dataset.active = "";
      delete activeSlide.dataset.active;
    });
  });
});
