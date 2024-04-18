document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');

  let currentIndex = 0;

  function updateSlide(index) {
    slides[currentIndex].classList.remove('active');
    slides[index].classList.add('active');
    currentIndex = index;
  }

  prevBtn.addEventListener('click', function () {
    const prevIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlide(prevIndex);
  });

  nextBtn.addEventListener('click', function () {
    const nextIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlide(nextIndex);
  });
});