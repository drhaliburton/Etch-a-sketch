$(document).ready(function() {
  for (var x = 0; x < 100; x++) {
    for (var y = 0; y < 100; y++) {
    var $square = $("<div class='square'></div>");
    $square.appendTo("#container");
    }
  }
  $("div.square").hover(function() {
    $(this).css("background-color", "gray");
  });
  $("#clear").text("Clear");
  $("#clear").on("click", function() {
    $("div.square").css("background-color", "none");
  });
  $("#gridsize").text("Grid Size");
  $("#gridsize").on("click", function() {
    var gridinput = prompt("What grid size? (100-1000)");
    $("#container").css("height", gridinput);
    $("#container").css("width", gridinput);
    $("div.square").css("background-color", "none");
    $("div.square").hover(function() {
      $(this).css("background-color", "gray");
    });
  });
  $("#pencolour").text("Pen Colour");
  $("#pencolour").on("click", function() {
    var colourinput = prompt("What pen colour? (eg. red, blue, #666666)");
    $("div.square").hover(function() {
      $(this).css("background-color", colourinput);
    });
  });

});
