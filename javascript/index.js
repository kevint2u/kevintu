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
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
        });
    });

    // Setup type.js
    $(function(){
        $("#title-type").typed({
            strings: ["investment banker.", "engineer.", "designer.", "entrepreneur."],
            typeSpeed: 30,
            callback: function() {}
        });
    });

});