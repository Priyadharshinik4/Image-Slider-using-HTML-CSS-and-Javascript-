let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-100 * slideIndex}%)`;
        });
    }

function moveSlide(n) {
    slideIndex += n;
        showSlides();
    }

showSlides(); 