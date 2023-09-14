
// shop by category
$(document).ready(function () {
    $('.owl-slide').owlCarousel({
        items: 6, // Number of items to show
        loop: true, // Infinite loop
        autoplay: true, // Autoplay the carousel
        autoplayTimeout: 3000, // Autoplay interval in milliseconds
        autoplayHoverPause: true, // Pause autoplay on hover

        // nav: true, // Enable custom navigation
    

    });
});



// trending products
$(document).ready(function () {
    $('.owl-one').owlCarousel({
        items: 4, // Number of items to show
        loop: true, // Infinite loop
        autoplay: true, // Autoplay the carousel
        autoplayTimeout: 3000, // Autoplay interval in milliseconds
        autoplayHoverPause: true, // Pause autoplay on hover
    });
});


// our product

$(document).ready(function () {
    $('.owl-grid').owlCarousel({
        items: 4, // Number of items to show
        // nav: true,
       
    });
});



// customer review
$(document).ready(function () {
    $('.owl-three').owlCarousel({
        items: 2, // Number of items to show
        loop: true, // Infinite loop
        autoplay: true, // Autoplay the carousel
        autoplayTimeout: 3000, // Autoplay interval in milliseconds
        autoplayHoverPause: true, // Pause autoplay on hover
    });
});



function updateCountdown() {
    const targetDate = new Date('2024-12-31 23:59:59').getTime(); // target date and time
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Call it once to initialize the countdown






