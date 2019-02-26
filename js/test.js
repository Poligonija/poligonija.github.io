$(function() {
    $.scrollify({
        section : ".slide",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function(i,panels) {

            var ref = panels[i].attr("data-section-name");

            $(".paginate .active").removeClass("active");

            $(".paginate").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender:function() {
            var pagination = "<ul class=\"paginate\">";
            var activeClass = "";
            $(".slide").each(function(i) {
                activeClass = "";
                if(i===0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".home").append(pagination);
            /*

            Tip: The two click events below are the same:

            $(".pagination a").on("click",function() {
              $.scrollify.move($(this).attr("href"));
            });

            */
            $(".paginate a").on("click",$.scrollify.move);

        }
    });
});