jQuery(document).ready(function () {
    initialStockSlider();
});

window.addEventListener('resize', function () {
    if ($('.special-list').hasClass('slick-slider')) {
        $('.special-list').slick('unslick');
    }
    initialStockSlider();
})

function initialStockSlider () {
    const widthWindow = window.innerWidth;

    if (widthWindow < 768) {
        $('.special-list').slick({
            dots: true,
            infinite: false,
            arrows: false,
            dotsClass: 'slick-dots-custom'
        })
    }
}