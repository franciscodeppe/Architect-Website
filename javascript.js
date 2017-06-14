$(document).ready(function() {

  activePanel = $("#accordion div.panel:first");
  $(activePanel).addClass('active');

  $("#accordion").delegate('.panel', 'click', function(e) {
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
