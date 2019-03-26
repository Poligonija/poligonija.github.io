$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        navigation: true,
        recordHistory: true,
        autoScrolling: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        slidesNavPosition: 'top',
        verticalCentered:true,

        onLeave: function (origin, destination, direction) {
            if(origin.index == 0 && direction == 'down'){
                $('#fp-nav').delay(400).fadeIn(500);
                $('#arrowDown').fadeOut(200);
                jQuery("#mainLogo span").animate({color:"#000000"},600);
                jQuery("#about a").animate({color:"#000000"},600);
                jQuery("#social i").animate({color:"#000000"},600);
            }
            else if(origin.index == 1 && direction == 'up'){
                $('#fp-nav').fadeOut(200);
                $('#arrowDown').delay(400).fadeIn(500);
                jQuery("#mainLogo span").animate({color:"#ffffff"},600);
                jQuery("#about a").animate({color:"#ffffff"},600);
                jQuery("#social i").animate({color:"#ffffff"},600);
            }
        }
    });
    $('#fp-nav').fadeOut(100);

    $('#arrowDown').click(function(){
        $.fn.fullpage.moveSectionDown();
    });
    $('#mainLogo').click(function () {
        $.fn.fullpage.moveTo(1);
    })
});