$(document).ready(function () {
  $("#signUp").click(function (e) {
    e.preventDefault();
    $(".container").addClass("right-panel-active");
  });
  $("#signIn").click(function (e) {
    e.preventDefault();
    $(".container").removeClass("right-panel-active");
  });
});
