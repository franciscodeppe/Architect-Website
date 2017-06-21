$(document).ready(function() {

    var activePanel;
    $(activePanel).addClass('active');

// Accordian ----------------------------------------------------
    $("#accordion .panel").on('click', function(event) {
      event.preventDefault()
        if ($(this).is('.active') !== true) {
// inactive panels---------------------------------------

            $('#accordion .panel').animate({
                width: "20%",
            }, 300);
            $(".panel-title").animate({
              top: "50vh",
              left: "0",
            });
            $('#accordion .panel').removeClass('active');

// For active panel --------------------------------------

            $(this).addClass('active');
            $(this).find(".panel-title").animate({
              top: "25vh",
              left: "-30vh",
            });
            $(this).animate({
                width: "60%"
            }, 300);
        } else {
            $('#accordion .panel').removeClass('active');
            $("#accordion .panel").animate({
                width: "33%"
            });
            $(".panel-title").animate({
              top: "50vh",
              left: "0",
            });
        };

    });
})
// OurWork show ------------------------------------------------------
$('.our-work-div').mouseenter(function() {
  $(this).find(".our-work-div-info").show();
  $(this).find("img").animate({
    opacity: ".2",
  }, 1)
  $(this).animate({
      backgroundColor: "#f28423",
      opacity: ".9",
    }, 200)
}).mouseleave(function() {
  $( ".our-work-div").find("img").animate({
    opacity: "1",
  }, 1)
  $( ".our-work-div-info" ).hide();
  $(this).animate({
      backgroundColor: "#fff",
    }, 200)
})


// Dropwdown menu ----------------------------------------------------
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});


// Color Rotation ----------------------------------------------------
var colorPallete = ['#f28423', '#685b4b', '#e3d982', "#872729", "#80a57c",'#487271']

function changeColorArmet() {
    if (colorPallete.length === 0) {
        colorPallete = ['#f28423', '#685b4b', '#e3d982', "#872729", "#80a57c",'#487271']
    }
    var n = Math.floor(Math.random() * colorPallete.length)
	$("#armet").animate({
    backgroundColor: colorPallete[n],
}, 'slow');

    colorPallete.splice(n, 1)
	// console.log(colorPallete[n])
	setTimeout(changeColorDavis, 5000)
}

function changeColorDavis() {
    if (colorPallete.length === 0) {
        colorPallete = ['#f28423', '#685b4b', '#e3d982', "#872729", "#80a57c",'#487271']
    }
    var n = Math.floor(Math.random() * colorPallete.length)
	$("#davis").animate({
    backgroundColor: colorPallete[n],
}, 'slow');
    colorPallete.splice(n, 1)
	// console.log(colorPallete[n])
	setTimeout(changeColorNewlove, 5000)
}

function changeColorNewlove() {
    if (colorPallete.length === 0) {
        colorPallete = ['#f28423', '#685b4b', '#e3d982', "#872729", "#80a57c",'#487271']
    }
    var n = Math.floor(Math.random() * colorPallete.length)
	$("#newlove").animate({
    backgroundColor: colorPallete[n],
}, 'slow');
    colorPallete.splice(n, 1)
	// console.log(colorPallete[n])
	setTimeout(changeColorArmet, 5000)

}
function run() {
	setTimeout(changeColorArmet, 5000)
}
run()

// Contact
let apiKeyMaps = "AIzaSyB0d-uvMal6AdDaqdbwBBHEBkz989Gu-ZQ"


let queryURL = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382,10.013988&heading=151.78&pitch=-0.76&" + "key=AIzaSyCgAvO7wm6LXIOeZM3kHtGcJXsynEZSWhU"
