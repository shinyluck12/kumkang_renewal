// var swiper = new Swiper(".mySwiper", {
//     direction: "vertical",
//     slidesPerView: 1,
//     spaceBetween: 30,
//     mousewheel: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

$("html").hide();
$(document).ready(function () {
  $("html").fadeIn(300);
  $(".sec1_txt > span").hide();
  $(".sec1_txt > h3").hide();
  $(".sec1_txt > p").hide();
  $(".sec1_txt > span").delay(400).fadeIn(1000);
  $(".sec1_txt > h3").delay(900).fadeIn(1000);
  $(".sec1_txt > p").delay(1300).fadeIn(1000);

  $(".s2_bar_left").click(function () {
    window.open("employ.html");
  });
  $(".s2_bar_right").click(function () {
    window.open("store_search.html");
  });
  $(".p_box pbox1").click(function () {
    window.open("store_search.html");
  });
  $(".s4_r_top").click(function () {
    window.open("big_small.html");
  });
  $(".s4_r_bot").click(function () {
    window.open("service_center.html");
  });
});
// 검색버튼 나오는거
//   $(".r_search").click(function(){
//     $('.search_box').animate({width:"toggle"},400);
//   })
// })
