document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach(container => {
    const track = container.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    const prevButton = container.querySelector(".carousel-btn.prev");
    const nextButton = container.querySelector(".carousel-btn.next");

    let currentIndex = 0;
    let autoSlide;

    function updateSlide(index) {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide(currentIndex);
    }

    // Botões
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    // Autoplay
    function startAutoSlide() {
      autoSlide = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
      clearInterval(autoSlide);
    }

    container.addEventListener("mouseenter", stopAutoSlide);
    container.addEventListener("mouseleave", startAutoSlide);

    // Teclado
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    });

    startAutoSlide();
  });
});
