
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img');
// buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
//counter
let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translate X(' + (-size * counter) + 'px)';
// Button listeners
nextBtn.addEventListener('click', () => {
  if (counter >= carouselImage.length - 1) return;
  carouselSlide.style.transition = "transform 0,45 ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});
prevBtn.addEventListener('click', () => {
  if (counter <= 0) return
  carouselSlide.style.transition = "transform 0,45 ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});
carouselSlide.addEventListener('transitioned', () => {
  if (carouselImage[counter].id === 'lastclone') {
    carouselSlide.style.transition = "none";
    counter = carouselImage.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
  }
  if (carouselImage[counter].id === 'firstclone') {
    carouselSlide.style.transition = "none";
    counter = carouselImage.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
  }
});