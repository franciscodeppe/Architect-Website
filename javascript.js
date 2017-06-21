$(document).ready(function() {

    var activePanel;
    $(activePanel).addClass('active');
    $("#accordion .panel").css({
        width: "33%"
    });

    $("#about").attr("")

// Accordian ----------------------------------------------------
    $("#accordion .panel").on('click', function(event) {
      event.preventDefault()
        if ($(this).is('.active') !== true) {
            $('#accordion .panel').animate({
                width: "20%",
            }, {
                duration: 300,
                queue: false
            }).animate({
                alignItems: "flex-start"
            }, {
                duration: 300
            });
            $(this).find(".panel-title").animate({
              top: "50vh",
              left: "-30vh",
            });
            $('#accordion .panel').removeClass('active');
            $(this).addClass('active');
            $(this).find(".panel-title").animate({
              top: "25vh",
              left: "-30vh",
            });
            $(this).animate({
                width: "60%"
            }, {
                duration: 300,
                queue: false
            }).animate({
                alignItems: "flex-start"
            }, {
                duration: 300
            });
        } else {
            $('#accordion .panel').removeClass('active');
            $("#accordion .panel").animate({
                width: "33%"
            });
            $(this).find(".panel-title").animate({
              top: "50vh",
              left: "0",
            });
        };

    });
})
// OurWork flip ------------------------------------------------------
$('.our-work-div').hover(function() {
  console.log("pass")
    $(this).animate({
      backgroundColor: "#f28423",
      opacity: ".9",
    })

})



// Dropwdown menu ----------------------------------------------------
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});


// Color Rotation ----------------------------------------------------
var colorPallete = ['#f28423', '#685b4b', '#487271', '#e3d982', "#ac573a", "#80a57c", "#907558", "#9ea874"]

var dark = ['#872729', '#d45f33', '#b1200f']

var light = ['dacd43', '5b9f90', 'd45f33', 'white']


function changeColorArmet() {
    if (colorPallete.length === 0) {
        colorPallete = ['#f28423', '#685b4b', '#487271', '#e3d982', "#ac573a", "#80a57c", "#907558", "#9ea874"]
    }
    var n = Math.floor(Math.random() * colorPallete.length)
	$("#armet").animate({
    backgroundColor: colorPallete[n],
}, 1000);

    colorPallete.splice(n, 1)
	console.log(colorPallete[n])
	setTimeout(changeColorDavis, 5000)
}

function changeColorDavis() {
    if (colorPallete.length === 0) {
        colorPallete = ['#f28423', '#685b4b', '#487271', '#e3d982', "#ac573a", "#80a57c", "#907558", "#9ea874"]
    }
    var n = Math.floor(Math.random() * colorPallete.length)
	$("#davis").animate({
    backgroundColor: colorPallete[n],
}, 1000);
    colorPallete.splice(n, 1)
	console.log(colorPallete[n])
	setTimeout(changeColorNewlove, 5000)
}

function changeColorNewlove() {
    if (colorPallete.length === 0) {
        colorPallete = ['#f28423', '#685b4b', '#487271', '#e3d982', "#ac573a", "#80a57c", "#907558", "#9ea874"]
    }
    var n = Math.floor(Math.random() * colorPallete.length)
	$("#newlove").animate({
    backgroundColor: colorPallete[n],
}, 1000);
    colorPallete.splice(n, 1)
	console.log(colorPallete[n])
	setTimeout(changeColorArmet, 5000)

}
function run() {
	setTimeout(changeColorArmet, 5000)
}
run()

// Contact
let apiKeyMaps = "AIzaSyB0d-uvMal6AdDaqdbwBBHEBkz989Gu-ZQ"


let queryURL = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382,10.013988&heading=151.78&pitch=-0.76&" + "key=AIzaSyCgAvO7wm6LXIOeZM3kHtGcJXsynEZSWhU"
