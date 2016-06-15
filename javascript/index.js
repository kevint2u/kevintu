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
            before:function(i, panels) {
                var ref = panels[i].attr("data-section-name");
                $(".pagination a.active").removeClass("active");
                $(".pagination a[href=#" + ref + "]").addClass("active");

                // trigger any function calls relevant to the new panel scrolled to
                if (ref == "home") {
                    homeSetup();
                    resetPanels(false, true, true, true, true, true, true);
                }
                if (ref == "profile") {
                    resetPanels(true, false, true, true, true, true, true);
                }
                if (ref == "education") {
                    resetPanels(true, true, false, true, true, true, true);
                }
                if (ref == "finance") {
                    resetPanels(true, true, true, false, true, true, true);
                }
                if (ref == "engineering") {
                    resetPanels(true, true, true, true, false, true, true);
                }   
                if (ref == "misc") {
                    resetPanels(true, true, true, true, true, false, true);
                }
                if (ref == "contact") {
                    contactSetup();
                    resetPanels(true, true, true, true, true, true, false);
                }
            },
            after:function(i, panels) {
                // var ref = panels[i].attr("data-section-name");
            },
            afterResize:function() {},
            afterRender:function() {}
        });
    });

    $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
    });

    function resetPanels(home, profile, education, finance, engineering, misc, contact) {
        if (home == true) {
            $(".home .title-wrapper").removeClass("fadein-2");
        }
        if (profile == true) {

        }
        if (education == true) {

        }
        if (finance == true) {

        }
        if (engineering == true) {

        }
        if (misc == true) {

        }
        if (contact == true) {
            $(".contact-image").removeClass("fadein-2");
            $(".contact-image").removeClass("slideUp");
            $("#contact-image-4").removeClass("slideLeft");
            $("#contact-image-1").removeClass("slideRight");
        }
    }

    function homeSetup() {
        $(".home .title-wrapper").addClass("fadein-2");
        $("#title-type").typed({
            strings: ["", "", "engineer.", "investment banker.", "designer.", "entrepreneur."],
            typeSpeed: 30,
            callback: function() {}
        });     
    }

    function contactSetup() {
        $(".contact-image").addClass("fadein-2");
        $(".contact-image").addClass("slideUp");
        $("#contact-image-1").addClass("slideRight");
        $("#contact-image-4").addClass("slideLeft");

        $("#contact-text").typed({
            strings: ["", "contact me:"],
            typeSpeed: 30,
            callback: function() {}
        });
    }

});

function contactHover(element, icon) {
    var newURL = "resources/social-media-icons/PNG/Circle Color/" + icon + ".png"
    element.setAttribute('src', newURL);
    element.classList.add("pulse");
}
function contactUnhover(element, icon) {
    var newURL = "resources/social-media-icons/PNG/Circle Grey/" + icon + ".png"
    element.setAttribute('src', newURL);
    element.classList.remove("pulse");
    element.classList.remove("slideUp");
    element.classList.remove("slideLeft");
    element.classList.remove("slideRight");
    element.classList.remove("fadein-2");
}
function contactClick(url) {
    var win = window.open(url, '_blank');
    win.focus();
}