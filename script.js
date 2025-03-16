let slideIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function updateSlide() {
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;

    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === slideIndex);
    });
}

// Auto-slide every 3 seconds
function autoSlides() {
    slideIndex = (slideIndex + 1) % dots.length;
    updateSlide();
    setTimeout(autoSlides, 6000);
}

// Jump to specific slide when dot is clicked
function setSlide(index) {
    slideIndex = index;
    updateSlide();
}

// Start the slideshow
updateSlide();
setTimeout(autoSlides, 3000);
