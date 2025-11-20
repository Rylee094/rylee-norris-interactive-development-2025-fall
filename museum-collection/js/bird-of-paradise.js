$(document).ready(function() {
  $("#Button1").click(function() {
    $("#Line1").fadeIn(); 
    $("#Button2").show();
  });
});

$(document).ready(function() {
  $("#Button2").click(function() {
    $("#Line2").fadeIn(); 
    $("#Button3").show();
  });
});