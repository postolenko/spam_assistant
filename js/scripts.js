$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    var navBlock;


    getNavigationHeight();

    if(bodyWidth <= 768) {

        getScrollToTopBtn();

    }
    


    $(document).scroll(function() {

        if(bodyWidth <= 768) {
        
            getScrollToTopBtn();
        
        }

    });

    $(window).resize(function() {

        getNavigationHeight();

    });

// -----------------

    function getNavigationHeight() {

        navBlock = document.getElementsByClassName("nav-section-bg")[0];

        navBlock.style.height = $(".main-content").height() - 70 + "px";

    }


// -----------------

$(document).ready(function() {

    $(".respmenubtn").click(function() {

        $(".nav-list").toggleClass("respnavleftcoor");
        $(".respmenubtn").toggleClass("respmenubtn-active");

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