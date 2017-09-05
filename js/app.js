$(document).ready(function() {

  $(window).scroll(function() {
      var scrollPos = $(document).scrollTop();

      // nav bar changes on scroll
      if (scrollPos > 100) {
          $('header').addClass('sticky');
          $('header img').addClass('move');
          $('nav span').removeClass('movetext');
      } else {
          $('header').removeClass('sticky');
          $('header img').removeClass('move');
          $('nav span').addClass('movetext');
      }

      // Parallaxing on scroll
      var $movebg = $(window).scrollTop() * -0.5;
      $('.hero').css('background-positionY', ($movebg) + 'px');


      // add class active to nav a on scroll
      // $('nav a').each(function () {
      //   console.log('scroll');
      //     var currLink = $(this);
      //     var refElement = $(currLink.attr("href")).position().top;
      //     if (refElement <= (scrollPos+100)) {
      //         $('nav a').removeClass("active");
      //         currLink.addClass("active");
      //     }
      //     // remove active class when at header
      //     if (scrollPos < 650) {
      //         $('nav a').removeClass('active')
      //     }
      // });

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
  $('nav a').click(function () {
      var $href = $(this).attr('href');
      var offset = $($href).offset().top - 65;
      $('body').stop().animate({
          scrollTop: offset
      }, 500);
      return false;
  });

  // back to top
  $('.logo, #toTop').click(function () {
      $('body').animate({
          scrollTop: 0
      }, 1000);
      return false;
  });

  // header mouse anim click
  $('.mouse').click(function(event) {
      $('html, body').animate({scrollTop: 730}, 500);
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
