$(window).load(function() {
    $(this).scrollTop(0);

    // Setup scrollify.js
    $(function() {
        $.scrollify({
            section : ".panel",
            sectionName : "section-name",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: false,
            standardScrollElements: "",
            setHeights: true,
            before:function(i,panels) {
                var ref = panels[i].attr("data-section-name");
                $(".pagination a.active").removeClass("active");
                $(".pagination a[href=#" + ref + "]").addClass("active");
            },
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
        });
    });

    $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
    });

    // Setup type.js
    $(function(){
        $("#title-type").typed({
            strings: ["", "", "engineer.", "investment banker.", "designer.", "entrepreneur."],
            typeSpeed: 30,
            callback: function() {}
        });
    });
    $(function(){
        $("#contact-text").typed({
            strings: ["","contact me:"],
            typeSpeed: 30,
            callback: function() {}
        });
    });

});