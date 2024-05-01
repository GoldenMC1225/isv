const swiper = new Swiper('.js-testimonials-slider', {
    grabCrusor: true,
    spaceBetween: 30,
    pagination: {
        el: '.js-testimonials-pagination',
        clikable: true
    },
    breakpoints: {
        767: {
            slidesPerView: 2
        }
    }
});