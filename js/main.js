(function ($) {

    'use strict';
    let fullpage_init = () => {
        $('#fullpage').fullpage({
            //options here
            navigation: true,
            licenseKey: 'YOUR_KEY_HERE',
            recordHistory: true,
            autoScrolling: true,
            navigationPosition: 'right',
            slidesNavigation: true,
            slidesNavPosition: 'top',
            verticalCentered: true,

            onLeave: function (origin, destination, direction) {
                if (origin.index == 0 && direction == 'down') {
                    $('#fp-nav').delay(400).fadeIn(500);
                    $('#arrowDown').fadeOut(200);
                    $('#arrowLeft').fadeOut(200);
                    $('#arrowRight').fadeOut(200);
                    jQuery("#mainLogo span").animate({color: "#000000"}, 600);
                    jQuery("#about a").animate({color: "#000000"}, 600);
                    jQuery("#social i").animate({color: "#000000"}, 600);
                } else if (destination.index == 0 && direction == 'up') {
                    $('#fp-nav').fadeOut(200);
                    $('#arrowDown').delay(400).fadeIn(500);
                    $('#arrowLeft').delay(400).fadeIn(500);
                    $('#arrowRight').delay(400).fadeIn(500);
                    jQuery("#mainLogo span").animate({color: "#ffffff"}, 600);
                    jQuery("#about a").animate({color: "#ffffff"}, 600);
                    jQuery("#social i").animate({color: "#ffffff"}, 600);
                }
            }
        });
    };

    $(document).ready(function () {

        fullpage_init();

        // Init here.
        var $body = $('body'),
            $main = $('#main'),
            $site = $('html, body'),
            transition = 'fade',
            smoothState;

        smoothState = $main.smoothState({
            onBefore: function($anchor, $container) {
                var current = $('[data-viewport]').first().data('viewport'),
                    target = $anchor.data('target');
                if (current != null && target != null) {
                    if (current < target) {
                        transition = 'moveright';
                    } else if (current > target) {
                        transition = 'moveleft';
                    }
                } else {
                    transition = 'fade';
                }
            },
            onStart: {
                duration: 400,
                render: function (url, $container) {
                    $main.attr('data-transition', transition);
                    $main.addClass('is-exiting');
                    $site.animate({scrollTop: 0});
                    $('#arrowDown').fadeOut(200);
                    $('#arrowLeft').fadeOut(200);
                    $('#arrowRight').fadeOut(200);
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $container.html($newContent);
                    $container.removeClass('is-exiting');
                    $.fn.fullpage.destroy('all');
                    fullpage_init();
                }
            }
        }).data('smoothState');
    });

}(jQuery));