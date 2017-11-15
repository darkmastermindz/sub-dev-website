//Sidebar Navigation Animations
$(document).ready(function() {
  $('#sidebar-btn').click(function() {
    $('#sidebar').toggleClass('visible');
  });
});

$("#chest").click( function() {
    var value = parseInt($('#increment').text(), 10) + 1;
    $("#increment").text(value);
});
