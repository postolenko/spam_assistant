$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    var navBlock = document.getElementsByClassName("nav-section")[0];

    // getNavigationHeight();

    getNavMenuFixedPosition();


    if(bodyWidth <= 768) {

        getScrollToTopBtn();

    }

    getNavMenuFixedPosition();


    $(document).scroll(function() {

        if(bodyWidth <= 768) {
        
            getScrollToTopBtn();
        
        }

        getNavMenuFixedPosition();


    });

    $(window).resize(function() {

        // getNavigationHeight();

        getNavMenuFixedPosition();

    });

// -----------------

    function getNavigationHeight() {

        // navBlock.style.height = $(".main-content").height() + "px";
        

    }


    function getNavMenuFixedPosition() {

            bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

            if ($(window).scrollTop() > $(".logo-box").height() && bodyWidth > 768) {


                $(".logo-box").fadeOut(300);
                

            } else {


                $(".logo-box").fadeIn(300);


            }
    }


// -----------------

$(document).ready(function() {

    $(".respmenubtn").click(function() {

        $(".nav-list").toggleClass("respnavleftcoor");
        $(".respmenubtn").toggleClass("respmenubtn-active");

    });

});


// -----------------

// Navigation scroll

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 900);
                    return false;
                }
            }
        });
    });


// -----------------

    $(".scroll-to-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


    function getScrollToTopBtn() {


        if ($(window).scrollTop() > $(".header-bg").height() ) {

            $(".scroll-to-top").fadeIn();

        } else {

            $(".scroll-to-top").fadeOut();

        }

    }



});