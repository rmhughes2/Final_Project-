function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let intervalId;

function startSlideShow() {
  intervalId = setInterval(() => {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
      currentIndex = 0;
    }
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 2000);
}

function stopSlideShow() {
  clearInterval(intervalId);
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
});

carouselContainer.addEventListener('mouseover', stopSlideShow);
carouselContainer.addEventListener('mouseleave', startSlideShow);

startSlideShow();