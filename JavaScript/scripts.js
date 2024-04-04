const buttons = document.querySelectorAll('.animated-button');

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

const carouselContainer = document.querySelector('.carousel-container');
const carouselTrack = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const slideWidth = slides[0].offsetWidth + 10;

const duplicateSlides = Array.from(slides).map(slide => slide.cloneNode(true));
carouselTrack.append(...duplicateSlides);
const totalSlides = slides.length * 2;

function showSlide(index) {
  carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
});

setInterval(() => { showSlide(currentIndex + 1); }, 3000);

showSlide(currentIndex);