jQuery(document).ready(function($) {

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
});



TweenLite.defaultEase = Linear.easeNone;
var ctrl = new ScrollMagic.Controller();


$(".content").each(function(i) {
  let target1 = $(this).find(".header");
  let target2 = $(this).find(".copy");
  var tl = new TimelineMax();
  tl.from(target1, 0.5, { opacity: 0, x: 30, delay: 0.4 });
  tl.from(target2, 0.5, { opacity: 0 }, "-=0.2");

  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5
  })
    .setTween(tl)
    .addTo(ctrl)
});


$('#one').addClass("active");

$(document).scroll(function () {
  

  // add class active to nav a on scroll
  var scrollPos = $(document).scrollTop() + 100;
  $('nav ul li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('nav ul li a').removeClass("active");
      currLink.addClass("active");
    }
  });
  
});




