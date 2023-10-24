w3.slideshow('.mySliderItem', 4000);
w3.slideshow('.quoteItem', 4000);

var slideIndex = 1;

function showDivs() {
  var i;
  var dots = document.getElementsByClassName("indicator");
  var quotedots = document.getElementsByClassName("quote-indicator");
  if (slideIndex > dots.length) {
    slideIndex = 1
  }
  if (slideIndex < 1) {
    slideIndex = dots.length
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
    quotedots[i].className = quotedots[i].className.replace(" w3-white", "");
  }
  dots[slideIndex - 1].className += " w3-white";
  quotedots[slideIndex - 1].className += " w3-white";
  slideIndex++;
  setTimeout(showDivs, 4000);
}
showDivs();

$(document).ready(function() {
  var windowWidth = $(window).width();
  $(window).scroll(function(event) {
    var topOffset = $('#logo-menu').offset().top;
    if (windowWidth > 600) {
      if (topOffset != 0) {
        $('#logo-menu').addClass('w3-white');
        $('#logo-menu').addClass('w3-card-2');
        $('#logo-menu #navbar-lg a').css('color', '#000');
      } else {
        $('#logo-menu').removeClass('w3-white');
        $('#logo-menu').removeClass('w3-card-2');
        $('#logo-menu #navbar-lg a').css('color', '#fff');
      }
    }
  });


  // Counter Animation Effect


  // Check if Counter in View Port or Not..
  $.fn.inView = function() {
    var counter_top = $(this).offset().top;
    var counter_bottom = $(this).outerHeight() + counter_top;

    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();

    return counter_bottom > windowTop && counter_top < windowBottom;
  }

  $(window).on('resize scroll', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('.counter').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  });
  // About Us Video Clicked
  $('#video_click').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('#about_us_video_click').fadeIn('slow');
  });


  //PortFolio Gallery
  var mixer = mixitup('#gallery_container', {
    selectors: {
      target: '#gallery_container>div'
    },
    animation: {
      duration: 500
    }
  });
  $('.links').click(function(event) {
    mixer.filter('.' + $(this).attr('id'));
  });

  $('.all').on('click', '.fa.fa-plus', function(event) {
    var imgSrc = $(this).parents('.all>div').children('img').attr('src');
    $('#gallery_img_preview').children('img').attr('src', imgSrc);
    $('#preview-gallery-img').show('slow');
  });

  // Animation Effect on Scroll
  $('.navbar a').animateScroll({
    speed:1000
  });
});
// Google Map
  function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
myMap();
