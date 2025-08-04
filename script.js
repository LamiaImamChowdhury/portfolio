document.addEventListener("DOMContentLoaded", function() {
    let carouselIndex = 0;
    const images = document.querySelectorAll('.carousel-img');
    function showCarouselImage() {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === carouselIndex);
        });
        carouselIndex = (carouselIndex + 1) % images.length;
    }
    showCarouselImage(); // Show first image immediately
    setInterval(showCarouselImage, 2200); // Change every 2.2 seconds
});

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
