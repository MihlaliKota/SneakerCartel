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

function showSlide(index) {
  const slideWidth = slides[0].offsetWidth + 10; 
  const maxIndex = slides.length - 1;

  if (index < 0) {
    index = maxIndex; // Loop to the last slide if reachin
  } else if (index > maxIndex) {
    index = 0; // Loop to the first slide if reaching the end
  }

  carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);

// Show the first slide initially
showSlide(currentIndex);
