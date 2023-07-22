// const slideshow = document.querySelector('.slideshow');
// const slides = document.querySelectorAll('.slideshow img');
// const dots = document.querySelectorAll('.dot1');
// let slideIndex = 0;

// function showSlide(index) {
//   slideshow.style.transform = `translateX(-${index * 100}%)`;
//   dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
// }

// function nextSlide() {
//   slideIndex = (slideIndex + 1) % slides.length;
//   showSlide(slideIndex);
// }

// function prevSlide() {
//   slideIndex = (slideIndex - 1 + slides.length) % slides.length;
//   showSlide(slideIndex);
// }

// dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

// setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
// showSlide(slideIndex); // Show the first slide on page load


const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slideshow img');
const dots = document.querySelectorAll('.dot1');
let slideIndex = 0;

function showSlide(index) {
  slideshow.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
showSlide(slideIndex); // Show the first slide on page load
