$(document).ready(function() {

  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('header').addClass('sticky'); // shows navbar when scrolled down
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

  $('header li a').click(function() {
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
    // var panorama;
    var center = {lat: 37.5185, lng: -77.3518};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 17
    });
    var marker = new google.maps.Marker({
      position: center,
      map: map,
      title: 'SiStar Seafood',
      icon: ''
    })
    var panorama = map.getStreetView();
    panorama.setPosition(center);
    panorama.setPov(/** @type {google.maps.StreetViewPov} */({
      heading: 70,
      pitch: 0
    }));

    function toggleStreetView() {
      var toggle = panorama.getVisible();
      if (toggle == false) {
        panorama.setVisible(true);
      } else {
        panorama.setVisible(false);
      }
    }
    $('#floating-panel').click(function(e) {
      toggleStreetView();
    })
  }

  initMap();

})
