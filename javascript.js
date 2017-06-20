$(document).ready(function() {

    var activePanel;
    $(activePanel).addClass('active');
    $("#accordion .panel").css({
        width: "33%"
    });

    $("#about").attr("")

    // Accordian
    $("#accordion .panel").on('click', function() {
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
            $('#accordion .panel').removeClass('active');
            $(this).addClass('active');
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
        };

    });
})

// Dropwdown menu
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
});


// Color Rotation
var colorPallete = ['#f28423', '#685b4b', '#487271', '#e3d982', "#ac573a", "#80a57c", "#907558", "#9ea874"]

var dark = ['#872729', '#d45f33', '#b1200f']

var light = ['dacd43', '5b9f90', 'd45f33', 'white']

// $.cssHooks.backgroundColor = {
//     get: function(elem) {
//         if (elem.currentStyle)
//             var bg = elem.currentStyle["backgroundColor"];
//         else if (window.getComputedStyle)
//             var bg = document.defaultView.getComputedStyle(elem,
//                 null).getPropertyValue("background-color");
//         if (bg.search("rgb") == -1)
//             return bg;
//         else {
//             bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
//
//             function hex(x) {
//                 return ("0" + parseInt(x).toString(16)).slice(-2);
//             }
//             return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
//         }
//     }
// }

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
