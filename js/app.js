$(document).ready(function() {

  $(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
  });

  // Mobile Navigation
  $('.mobile-toggle').click(function() {
      if ($('header').hasClass('open-nav')) {
          $('header').removeClass('open-nav');
      } else {
          $('header').addClass('open-nav');
      }
  });

  $('.main_h li a').click(function() {
      if ($('header').hasClass('open-nav')) {
          $('.navigation').removeClass('open-nav');
          $('header').removeClass('open-nav');
      }
  });

  // navigation scroll
  $('nav a').click(function(event) {
      var id = '#'+$(this).attr("href");
      var offset = 70;
      var target = $(id).offset().top - offset;
      $('html, body').animate({
          scrollTop: target
      }, 500);
      event.preventDefault();
  });

  // header mouse anim click
  $('.mouse').click(function(event) {
      $('html, body').animate({
          scrollTop: 826
      }, 500);
      event.preventDefault();
  });

  function initMap() {
    var center = {lat: 37.5185, lng: -77.3518};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 17
    });
    var marker = new google.maps.Marker({
      position: center,
      map: map
    })
    var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('street'), {
        position: center,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
    map.setStreetView(panorama);
  }

  initMap();

})
