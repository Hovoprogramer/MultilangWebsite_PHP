/*--------------------------------------------------
Website by Websolute
--------------------------------------------------*/jQuery(document).ready(function ($) {
    function isotopeFilter() {
        $('.recent-works--items').isotope({
            itemSelector: '.recent-works--items__item',
            layoutMode: 'fitRows'
        });
        $('.recent-works--nav ul li').on('click', function () {
            $('.recent-works--nav ul li').removeClass('active');
            $(this).addClass('active');



            var selector = $(this).attr('data-filter');
            // $(selector).addClass("zoom-gallery");

            $('.recent-works--items').isotope({
                filter: selector
            });
            return false;
        });
    }

    // $('#nav-toggle').on('click', function () {
    //     this.classList.toggle('active');
    // });

    function scrollDown() {
        $('.home-slider--anchor span').click(function () {
            var y = $(window).scrollTop();
            var x = $(window).height();
            $('html, body').animate({ scrollTop: y + x })
        });
    }

    function sliders() {
        $('.home-slider--wrapper').slick({
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '.home-slider--nav .prev',
            nextArrow: '.home-slider--nav .next',
        });

        $('.single-portfolio--slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: '.single-portfolio--slider__dots',
        });

        $('.our-services--slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: '.our-services--dots',
        });

        $('.case-study--left__textslider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: '.case-study--left__dots',
            asNavFor: '.case-study--right__imageslider',
        });

        $('.case-study--right__imageslider').slick({
            arrows: false,
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.case-study--left__textslider',
        });
    }

    function stickyMenu() {
        var scroll = $(window).scrollTop();

        if (scroll >= 400) {
            $(".navigation").addClass("sticky-header ");

            $(".nav-dropdown").addClass("bgcolor ");
        } else {
            $(".navigation").removeClass("sticky-header");
            $(".nav-dropdown").removeClass("bgcolor");
        }
    }

    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    function menuMobile() {
        $('.mobile-menu').click(function () {
            $('.menu').toggleClass('slide-menu');
            if ($(this).find('i').hasClass('fa-bars')) {
                $(this).find('i').removeClass('fa-bars');
                $(this).find('i').addClass('fa-times');
            } else {
                $(this).find('i').addClass('fa-bars');
                $(this).find('i').removeClass('fa-times');
            }
        });
    }

    /*--------------------------------------------------
    DOC READY
    --------------------------------------------------*/
    $(function () {
        isotopeFilter();
        scrollDown();
        sliders();
        menuMobile();
    });
    // =================Menu=====================    
    $('nav ul li a:not(:only-child)').click(function (e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
        $('.nav-dropdown').hide();
        $(".fa-chevron-right").removeClass("transform")
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
        $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function () {
        this.classList.toggle('active');
    });
    $("#nav_a").on('click', function () {
        $(".fa-chevron-right").toggleClass("transform");

    })
    //==================EndMenu==================            
    /*--------------------------------------------------
    WIN LOAD
    --------------------------------------------------*/
    $(window).on('load', function () {

    });

    /*--------------------------------------------------
    WIN SCROLL
    --------------------------------------------------*/
    $(window).on('resize scroll', function () {
        stickyMenu();

        $('.odometer').each(function () {
            if ($(this).isInViewport()) {

                setTimeout(function () {
                    $('.odometer.first').html(10);
                    $('.odometer.second').html(50);
                    $('.odometer.third').html(1200);
                    $('.odometer.fourth').html(1140);
                    $('.odometer.fifth').html(517000);
                }, 0);
            } else {
            }
        });
    });
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,

        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });

    $( "#mywork" ).on('click', function () {
        $("[data-filter*='*']").addClass('active');               

    })

    // contact form

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


    // $("li[data-filter|='.print']").on('click', function () {
    //     $(".print").adddClass("zoom-gallery");
    // });

});
