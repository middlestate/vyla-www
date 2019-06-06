function initParallax() {
	
    $(document).on("scroll", function(t) {
        if ($(document).scrollTop() < $(".hero").height()) {
            var e = $(document).scrollTop() / -6 + "px",
                i = 1 - $(document).scrollTop() / 800;
            e < 1 && (factor = 0), $(".parallax").css({
                "-webkit-transform": "translateY(" + e + ")",
                "-moz-transform": "translateY(" + e + ")",
                "-ms-transform": "translateY(" + e + ")",
                "-o-transform": "translateY(" + e + ")",
                transform: "translateY(" + e + ")"
            })
        }
    })
}
function initNav() {
    $(".js-toggleNav").click(function() {
        $("body").toggleClass("is-showNav");
    })
}
function closeNav() {
    $("body").removeClass("is-showNav");
}
function initMisc() {
	$("body").addClass("is-loaded");
}

$(document).ready(function() {
	
	initMisc(),initParallax(),initNav();
	
});




var winScrollTop=0;

$.fn.is_on_screen = function(){    
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

function parallax() { 
  var scrolled = $(window).scrollTop();
  $('.parallax-section').each(function(){ 
  	 if ($(this).is_on_screen()) {	
  	 	var firstTop = $(this).offset().top; 
        var $element = $(this).find(".particle-bg");
        var moveTop = (firstTop-winScrollTop)*0.08 //speed;
        $element.css("transform","translateY("+moveTop+"px)");
     }
     
  });
}

$(window).on("scroll", function(e) {
  winScrollTop = $(this).scrollTop();
  parallax();
});