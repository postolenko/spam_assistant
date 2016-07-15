$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;


    getNavigationHeight();

    getScrollToTopBtn();


    $(document).scroll(function() {

        getScrollToTopBtn();

    });

    $(window).resize(function() {

        // getNavigationHeight();

    });

    var navBlock;
    var parentNavBlock;
    var heightParentNavBlock;


    // Height Nav-side  = Height Content

    // $(".nav-section-bg").outerHeight( $(".main-content").height() - 70);
    // console.log($(".content").height());

    // Show or hide ".scroll-to-top" button


    // Border Height

    var countSections = 0;
    // var countBorders = 0;

    // for(countSections = 0; countSections <= ( $(".content-section").length - 1); countSections++ ) {

    //     // $(".border:eq("+ countSections +")").css({"height" : $(".content-section:eq("+ countSections +")").outerHeight(true) + "px"});

    //     // if ( $(".border:eq("+ countSections +")").hasClass("none") ) {
            
    //     //     $(".border:eq("+ countSections +")").css({"height" : 0 + "px"});

    //     // }

    //     console.log( $(".border:eq("+ countSections +")").offset().top );

    // }


    // $(".border.first-coor").height( $(".last-coor").offset().top - $(".first-coor").offset().top );



// -----------------

    function getNavigationHeight() {

        // navBlock = document.getElementsByClassName("nav-section-bg")[0];
        // parentNavBlock = document.getElementsByClassName("nav-section")[0];

        // heightParentNavBlock = parentNavBlock.innerHeight || parentNavBlock.clientHeight || parentNavBlock.clientHeight;

        // navBlock.style.height = heightParentNavBlock - 70 + "px";

        // console.log(heightParentNavBlock);

    }


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