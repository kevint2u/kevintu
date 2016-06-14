$(window).load(function() {
    $(this).scrollTop(0);

    // Setup Scrollify
    $(function() {
        $.scrollify({
            section : ".panel",
            sectionName : "section-name",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
        });
    });

});