// Loading Page
$(window).load(function() {
    window.setTimeout(hideLanding,1000)
  });
function hideLanding(){
    $(this).scrollTop(0);
    $('#loading').fadeOut(300);
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
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});


// Create HTML5 elements for IE
  
document.createElement("article");
document.createElement("section");