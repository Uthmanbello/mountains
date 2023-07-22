$(document).ready(function () {
  const slides = $('.slides img');
  const dots = $('.dot');
  let slideIndex = 0;

  function showSlide(index) {
    slides.removeClass('active').eq(index).addClass('active');
    dots.removeClass('active').eq(index).addClass('active');
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  dots.on('click', function () {
    slideIndex = $(this).index();
    showSlide(slideIndex);
  });

  setInterval(nextSlide, 3000);
  showSlide(slideIndex);
});
