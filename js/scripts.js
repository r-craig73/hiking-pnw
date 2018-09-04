$(document).ready(function() {
  $(".click1").click(function() {
    $(".hide-craterlake1").fadeIn();
  });
});

$(document).ready(function() {
  $(".click2").click(function() {
    $(".hide-craterlake2").fadeIn();
  });
});

$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("blackBkg");
  });
});

$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("whiteBkg");
  });
});
