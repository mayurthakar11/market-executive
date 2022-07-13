//back to top

/* Back to Top Scroll S */
$(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
        $('#back-top').show();
    } else {
        $('#back-top').hide();
    }
});
$('#back-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
/* Back to Top Scroll E */



//scroll header

$(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
        $('header').addClass('fixed animated fadeInDown slow');
    } else {
        $('header').removeClass('fixed animated fadeInDown slow');
    }
});

/* Bootstrap Select S */

$(window).on("load resize", function() {
    var owl1 = $('.testimonial-slider.owl-carousel');
    owl1.owlCarousel({
        margin: 10,
        loop: true,
        nav: false,
        dots: true,
        lazyLoad: true,
        autoplay: false,
        smartSpeed: 1000,
        autoHeight: true,
        mouseDrag: false,
        // navText: ["<i class='icon-left-arrow' title='Previous'></i>", "<i class='icon-right-arrow' title='Next'></i>"],
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            1024: {
                items: 1,
                margin: 20,
            },
            1200: {
                items: 1,
            }
        }
    });

});
$(window).on("load resize", function() {
    var owl2 = $('.blog-slider.owl-carousel');
    owl2.owlCarousel({
        margin: 30,
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        mouseDrag: true,
        navText: ["<i class='icon-left-arrow' title='Previous'></i>", "<i class='icon-right-arrow' title='Next'></i>"],
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
                margin: 20,
            },
            660: {
                items: 2,
            },
            1024: {
                items: 2,
                margin: 20,
            },
            1200: {
                items: 3,
            }
        }
    });
});



// scroll S
// $(".tab_scroll").mCustomScrollbar({
//     axis: "x",
//     theme: "dark-3",
//     setLeft: 0,
//     advanced: { autoExpandHorizontalScroll: true },
//     scrollButtons: {
//         enable: true
//     }
// });
// scroll E


// isotop S
$(window).on('load', function() {
    setTimeout(function() {
        $('.grid').isotope();
    }, 1000);
});
$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid-sizer'
    }
});
// isotop E