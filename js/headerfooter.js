$(document).ready(function () {
  $("html").hide();
  $("h2").hide();
  $("html").fadeIn(300);
  $("h2").delay(400).fadeIn(400);
  $(".h_slide").css({ height: "0px" });
  $(".h_left_btn").mouseenter(function () {
    $("header").css({ height: "180px" });
    $(".h_slide").css({ height: "120px" });
  });
  $(".h_left_btn").mouseleave(function () {
    $(".h_slide").css({ height: "0px" });
    $("header").css({ height: "90px" });
  });
  $(".r_left").click(function () {
    window.open("login.html");
  });
});
