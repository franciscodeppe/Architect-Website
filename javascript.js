$(document).ready(function() {

  var activePanel;
  $(activePanel).addClass('active');
  $("#accordion .panel").css({width: "33%"});

  $("#about").attr("")

// Accordian
  $("#accordion .panel").hover(function() {
    if ($(this).is('.active') !== true) {

      $('#accordion .panel').animate({
        width: "20%",
      }, {
        duration: 300,
        queue: false
      }).animate({ alignItems: "flex-start"},{duration:300 });

      $('#accordion .panel').removeClass('active');

      $(this).addClass('active');

      $(this).animate({
        width: "60%"
      }, {
        duration: 300,
        queue: false
      }).animate({ alignItems: "flex-start"},{duration:300 });
    } else {
      $('#accordion .panel').removeClass('active');
      $("#accordion .panel").animate({
        width: "33%"
      }, {
        duration: 300,
        queue: false
      });
    }
  });
});


// Dropwdown menu
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});


// Color Rotation
var colorPallete = ['#f28423', 'white', '#685b4b', '#487271', '#e3d982', "#ac573a", "#80a57c", "#907558", "#9ea874"]

var dark = ['#872729', '#d45f33', '#b1200f']

var light = ['dacd43', '5b9f90', 'd45f33', 'white']

var intervalId1;
var intervalId2;
var intervalId3;

var color1;
var color2;
var color3;


$.cssHooks.backgroundColor = {
  get: function(elem) {
    if (elem.currentStyle)
      var bg = elem.currentStyle["backgroundColor"];
    else if (window.getComputedStyle)
      var bg = document.defaultView.getComputedStyle(elem,
        null).getPropertyValue("background-color");
    if (bg.search("rgb") == -1)
      return bg;
    else {
      bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

      function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
    }
  }
}

function changeColorArmet() {
  color1 = Math.floor(colorPallete.length * Math.random());
  if (color1 === color1 || color1 === color2) {
    color1 = Math.floor(colorPallete.length * Math.random());
  }
  console.log(1, color1)
  $("#armet").css({
    "background-color": colorPallete[color1]
  })
  intervalId2 = setInterval(changeColorDavis, 2000)
  clearInterval(intervalId1)
}

function changeColorDavis() {
  color2 = Math.floor(colorPallete.length * Math.random());

  if (color2 === color1 || color2 === color2) {
    color2 = Math.floor(colorPallete.length * Math.random());
  }
  console.log(2, color2)
  $("#davis").css({
    "background-color": colorPallete[color2]
  })
  clearInterval(intervalId2)
  intervalId3 = setInterval(changeColorNewlove, 2000)
}

function changeColorNewlove() {
  var color3 = Math.floor(colorPallete.length * Math.random());

  if (color3 === color2 || color3 === color3) {
    color3 = Math.floor(colorPallete.length * Math.random());
  }
  console.log(3, color3)
  $("#newlove").css({
    "background-color": colorPallete[color3]
  })
  clearInterval(intervalId3)
  run()
}
function run() {
  intervalId1 = setInterval(changeColorArmet, 2000)
}
run()
