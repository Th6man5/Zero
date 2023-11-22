let isDown = false;
let startX;
let scrollLeft;

const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.classList.add("active");
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;

    // Kecepatan scroll carousel
    const walk = (x - startX) * 4;
    carousel.scrollLeft = scrollLeft - walk;
  });
});
