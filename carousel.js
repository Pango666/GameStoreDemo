//CARRUSEL 1

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    const totalItems = items.length;

    const showItem = (index) => {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.remove('active');
            if (i === index) {
                indicator.classList.add('active');
            }
        });
    };

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', function() {
            currentIndex = i;
            showItem(currentIndex);
        });
    });

    // Auto slide every 5 seconds
    setInterval(function() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }, 5000); // 5000ms = 5 seconds
});

//CARRUSEL 2???

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    
    let currentIndex = 0;
    const itemWidth = items[0].clientWidth;
    const visibleItems = Math.floor(track.clientWidth / itemWidth);
    
    function updateCarousel() {
        const totalItems = items.length;
        const maxIndex = Math.max(0, totalItems - visibleItems);
        const offset = -currentIndex * itemWidth;
        
        // Limitar el índice actual
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
        
        track.style.transform = `translateX(${offset}px)`;
        
        // Deshabilitar los botones si no hay más elementos para mostrar
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === maxIndex;
    }

    nextButton.addEventListener('click', () => {
        const totalItems = items.length;
        const maxIndex = Math.max(0, totalItems - visibleItems);
        if (currentIndex < maxIndex) {
            currentIndex += 1;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            updateCarousel();
        }
    });

    // Inicializar el carrusel
    updateCarousel();
});