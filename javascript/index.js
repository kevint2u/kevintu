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
    // Fading of logo
    var fadeStart=000 // 100px scroll or less will equiv to 1 opacity
        ,fadeUntil=500 // 200px scroll or more will equiv to 0 opacity
        ,fading = $('#article-name')
        ,fading2 = $('#article-triangles')
    ;

    $(window).bind('scroll', function(){
        var offset = $(document).scrollTop()
            ,opacity=0
        ;
        if( offset<=fadeStart ){
            opacity=1;
        }else if( offset<=fadeUntil ){
            opacity=1-offset/fadeUntil;
        }
        fading.css('opacity',opacity);
        fading2.css('opacity',opacity);
    });
});


// Create HTML5 elements for IE
  
document.createElement("article");
document.createElement("section");