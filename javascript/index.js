// Loading Page

$(window).load(function() {
    // progress bar animation
    var bar = document.getElementById('progress-bar'),
        fallback = document.getElementById('download-progress'),
        loaded = 10;
    var load = function() {
        loaded += Math.floor((Math.random() * 2) + 3);
        bar.value = loaded;
        $(fallback).empty().append("HTML5 progress tag not supported: ");
        if (loaded == 100) {
            clearInterval(beginLoad);
            console.log('Load was performed.');
        }
    };

    var beginLoad = setInterval(function() {
        load();
    }, 10);
    // Set extra timeout for loading page
    window.setTimeout(hideLanding,1750);
  });
function hideLanding(){
    $(this).scrollTop(0);
    $('#loading').fadeOut(500);
}

// Parallax Scrolling
$(document).ready(function(){
	$window = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = '50% ' + yPos + 'px';


            // var xPos = ($window.scrollTop() / $bgobj.data('speed')); 
             
            // // Put together our final background position
            // var coords = xPos + 'px' + ' 50%';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});


// Create HTML5 elements for IE
  
document.createElement("article");
document.createElement("section");