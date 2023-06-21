// Generate random values for v and f within a specified range
const v = getRandomNumber(10, 20); // Adjust the range as needed
const f = getRandomNumber(1, 10); // Adjust the range as needed

// Calculate the wavelength (lambda) based on v and f
const lambda = v / f;

// Apply the wave effect to the wave div
const wave = document.querySelector('.wave');
wave.style.animationDuration = lambda + 's';

// Helper function to generate a random number within a given range
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;
  
    function showSlide(slideIndex) {
      slides.forEach(function(slide) {
        slide.classList.remove('active');
      });
  
      slides[slideIndex].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
  
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
  
      showSlide(currentSlide);
    }
  
    document.querySelector('.next-slide-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-slide-btn').addEventListener('click', prevSlide);
  
    // Show the initial slide
    showSlide(currentSlide);
  });
  function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return [red, green, blue];
  }
  
  const waveBefore = document.querySelector('.wave-border::before');
  const randomColor = generateRandomColor();
  waveBefore.style.setProperty('--random-red', randomColor[0]);
  waveBefore.style.setProperty('--random-green', randomColor[1]);
  waveBefore.style.setProperty('--random-blue', randomColor[2]);
  
  