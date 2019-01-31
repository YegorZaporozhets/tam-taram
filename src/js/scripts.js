$('.slick-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<span class="arrow-prev"><</span>',
    nextArrow: '<span class="arrow-next">></span>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: 'unslick'
        }
    ]
});

const $hamburger = $('[data-toggle-menu]');
const $toggleMenu =$('[data-top-nav]');

$hamburger.on('click', function () {
    if ($hamburger.attr('data-toggle-menu')) {
        $toggleMenu.css('margin-left', '-100%');
        $hamburger.attr('data-toggle-menu', '');
    } else {
        $toggleMenu.css('margin-left', '0');
        $hamburger.attr('data-toggle-menu', 'toggled');
    }
})
