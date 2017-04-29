$(document).ready(function() {
  for (var x = 0; x < 16; x++) {
    for (var y = 0; y < 16; y++) {
    $("<div class='square'></div>").appendTo("#container");
    }
  }
  $("div.square").hover(function() {
    $(this).css("background-color", "gray");
  });
  $("button").text("Clear");
  $("button").on("click", function() {
    $("div.square").css("background-color", "none");
  });
});
