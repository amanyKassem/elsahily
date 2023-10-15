$(document).ready(function () {



    function checkScroll() {
        if ($(window).scrollTop() > 50) {
            $(".mainNav").addClass("changeBg");
        } else {
            //remove the background property so it comes transparent again
            $(".mainNav").removeClass("changeBg");
        }
    }
    checkScroll();

    $(window).on("scroll", function () {
       checkScroll();
    });


    // toggle menu
    $("header .toggle").click(function () {
        $(".overlay").css({
            "transform": "scaleX(1)"
        });

        $(".menu").addClass('ulDir');

    });

    $("header .overlay").click(function () {
        $(this).removeAttr("style");
        $(".menu").removeClass("ulDir");
    });

    function initiateAnimation() {
        AOS.init({
            delay: 500, // values from 0 to 3000, with step 50ms
            duration: 900, // values from 0 to 3000, with step 50ms
            easing: "ease-out-back" // default easing for AOS animations
        });

        if ($(window).width() < 560) {
            AOS.init({
                once: true
            });
        }
    }
    initiateAnimation();

    //scroll top
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.css('display','flex').fadeIn(1000);
        } else {
            scrollButton.fadeOut(1000);
        }
    });

    //click to scroll top
    scrollButton.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600);
    });

});
