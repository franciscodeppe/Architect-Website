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
var colorPallete = ['#5b9f90','white','#dacd43','#d45f33','#872729','#f28423']

var dark = ['#872729', '#d45f33', '#b1200f']

var light = ['dacd43', '5b9f90', 'd45f33', 'white']

var intervalId;


function run () {
	intervalId = setInterval(changeColor, 4000)

}
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

function changeColor(event) {
	var color1 = Math.floor(colorPallete.length * Math.random());
	var color2 = Math.floor(colorPallete.length * Math.random());
	var color3 = Math.floor(colorPallete.length * Math.random());
	console.log(color1, color2, color3)
	if (color2 === color1 || color2 === color3) {
		color2 = Math.floor(colorPallete.length * Math.random());
	}

    $("#armet").css({"background-color": colorPallete[color1]})
	$("#davis").css({"background-color": colorPallete[color2]})
	$("#newlove").css({"background-color": colorPallete[color3]})
	// console.log("pass")


}
run()
