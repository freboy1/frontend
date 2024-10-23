document.querySelectorAll('.star-rating').forEach(rating => {
    const stars = rating.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                s.style.color = i <= index ? 'gold' : 'gray';
            });
        });
    });
    });