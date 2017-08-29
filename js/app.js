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
      $('html, body').animate({scrollTop: 826}, 500);
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
        map: map,
        title: '4844 S Laburnum Ave Richmond, VA 23231',
        icon: '',
        url: 'https://www.google.com/maps/place/SiStar+Seafood/@37.5184916,-77.3539561,17z/data=!3m1!4b1!4m5!3m4!1s0x89b11a4347a9b19b:0x94e548f1ff7c604e!8m2!3d37.5184916!4d-77.3517621'
    })
    google.maps.event.addListener(marker, 'click', function() {
        window.open(this.url)
    });
    var panorama = map.getStreetView();
    panorama.setPosition(center);
    panorama.setPov(/** @type {google.maps.StreetViewPov} */({
        heading: 70, // orientation for street cam view
        pitch: 0
    }));

    $('#floating-panel').click(function(e) {
        var toggle = panorama.getVisible();
        if (toggle == false) {
            panorama.setVisible(true);
            $('#floating-panel').attr('src', 'images/map.png')
        } else {
            panorama.setVisible(false);
            $('#floating-panel').attr('src', 'images/street.png')
        }
    })
  }

  initMap();

})
