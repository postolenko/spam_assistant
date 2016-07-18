$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    var navBlock = document.getElementsByClassName("nav-section")[0];

    var navList = document.getElementsByClassName("nav-list")[0];

    var footer = document.getElementsByClassName("footer")[0];

    var navBlockCoor = navBlock.getBoundingClientRect();
    var navListCoor = navList.getBoundingClientRect();
    var footerCoor = footer.getBoundingClientRect();

    var countOperation = 0;
    var countScroll = 0;


    getNavigationHeight();


    if(bodyWidth <= 768) {

        getScrollToTopBtn();

    }

     if(bodyWidth > 768) {

        getNavMenuFixedPosition();

    }
    


    $(document).scroll(function() {

        if(bodyWidth <= 768) {
        
            getScrollToTopBtn();
        
        }

        if(bodyWidth > 768) {

            getNavMenuFixedPosition();

        }

        console.log(bodyWidth);


    });

    $(window).resize(function() {

        getNavigationHeight();

        getNavMenuFixedPosition();

    });

// -----------------

    function getNavigationHeight() {

        navBlock.style.height = $(".main-content").height() - 70 + "px";

    }


    function getNavMenuFixedPosition() {

            bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

            if ($(window).scrollTop() > $(".logo-box").height() && bodyWidth > 768) {


                $(".logo-box").fadeOut(300);
                

            } else {


                $(".logo-box").fadeIn(300);


            }

            console.log(countOperation);

            // if( $(".footer").offset().top <=  ( $(".nav-list").offset().top + $(".nav-list-ul").height() ) ) {

            //     ++countScroll;

            //     // if(countScroll == 1) {

            //         $(".nav-list").css({
            //                     // "bottom" : $(".footer").outerHeight(true) + 70 + "px"
            //                     "position":"relative",
            //                     "top" : $(".nav-section").height() - $(".logo-box").height() - $(".nav-list").height() + "px"
            //                     // "top" : 0 + "px"
            //                 });

            //         countOperation = 1;

            //         console.log(countOperation +"   "+ countScroll);

            //     // }
                
            //     $(".nav-list-ul").offset().top = $(".footer").offset().top - $(".nav-list-ul").height();

            // } else {

            //     // countScroll = 0;

            //     // // if( countOperation == 1 ) {

            //     //     $(".nav-list").css({
            //     //                     "bottom" : 0 + "px"
            //     //                 });

            //     //     // countOperation = 0;

            //     //     console.log(countOperation);
                    

            //     // // }

            //     $(".nav-list-ul").offset().top = 0;

            // }
 

        console.log($(".footer").offset().top + "   " +  ( $(".nav-list-ul").offset().top + $(window).height() ));

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