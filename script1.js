const containers = document.querySelectorAll('.stars');

containers.forEach(container => {
    // Get stars within each container
    const stars = container.querySelectorAll('span');

    // Get rating display within each container
    const ratingDisplay = container.nextElementSibling;

    let currentRating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            currentRating = parseInt(this.getAttribute('data-rating'));
            highlightStars(stars, currentRating);
            displayRating(ratingDisplay, currentRating);
        });
    });
});

function highlightStars(stars, index) {
    stars.forEach((star, i) => {
        const icon = star.querySelector('i');
        if (i < index) {
            icon.style.color = 'orange';
        } else {
            icon.style.color = 'black';
        }
    });
}
