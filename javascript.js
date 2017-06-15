$(document).ready(function() {

  activePanel = $("#accordion div.panel:first");
  $(activePanel).addClass('active');

  $("#about").attr("")


  $("#accordion .panel").hover(function() {
    if (($(this)[0].id != "about")) {
      console.log(true)
    }
    else {
      console.log(false)
    }

    if (!$(this).is('.active')) {

      $(activePanel).animate({
        width: "25%"
      }, {
        duration: 300,
        queue: false
      });

      if (($(this)[0].id != "about")) {
        $(".about-text").animate({
          opacity: 0,
        }, {
          duration: 300,
          queue: false
        });
      }

      $(this).animate({
        width: "50%"
      }, {
        duration: 300,
        queue: false
      });

      $('#accordion .panel').removeClass('active');
      $(this).addClass('active');
      activePanel = this;
    };
  });
});

// Dropwdown menu
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});
