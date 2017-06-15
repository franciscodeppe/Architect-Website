$(document).ready(function() {

  activePanel = $("#accordion div.panel:first");
  $(activePanel).addClass('active');

  $("#about").attr("")


  $("#accordion .panel").hover(function() {
    if (!$(this).is('.active')) {

      $(activePanel).animate({
        width: "25%"
      }, {
        duration: 300,
        queue: false
      });

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

// Color Rotation
var colorPallete = ['9d9d9d','f28423','b1200f','5b9f90','white','black','dacd43','d45f33','872729',]

var colorMatch = {
  dark: ['872729', '032042', '613b24', 'black'],
  light: ['dacd43', '5b9f90', 'd45f33', 'white'],
}

function changeColor() {
  for (var i = 0; i < colorPallete.length; i++) {
    $("#armet").css("background-color:" + [i])
    $("#davis").css("background-color:" + [i+1])
    $("#newlove").css("background-color:" + [i+2])
  }
}
setInterval(changeColor(), 1000)
