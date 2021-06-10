$(document).ready(function() {
    // /scroll from header-link
    $(".header__menu").on("click", "a", function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    // /scroll from header-link
    // burger
    $('.burger').click(() => {
        $('.header__bottom').toggleClass('menu-open');
    });
    $('.header__menu-link').click(() => {
        $('.header__bottom').removeClass('menu-open');
    });
    // /burger

    $('.testimonials__slider').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        speed: 700,
        dots: false,
        swipe: true,
        arrows: true
    });

    $('.blog__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        dots: false,
        swipe: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true
            }
        }]
    });

    $('.cooperation__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 700,
        dots: false,
        swipe: true,
        arrows: false,
        responsive: [{
                breakpoint: 1439,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    initialSlide: 2,
                    variableWidth: true
                }
            }
        ]
    });

    $('.coffee-face__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 700,
        dots: false,
        swipe: true,
        arrows: true,
        responsive: [{
            breakpoint: 1439,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        }]
    });



});