$("a[href^='#']").click(function (e) {
  e.preventDefault();

  var position = $($(this).attr("href")).offset().top;

  $("body, html").animate({
    scrollTop: position
  }, 600);
});



$("#nav-open").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $("#nav-opened").slideToggle("slow");
  $("#nav-opened").click(function (el) {
    el.preventDefault();
    $("#nav-opened").slideUp("slow");
    $("#nav-opened").hide("slow", "linear");
  });
});



$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass('bg-white transition ease-linear duration-150 text-gray-900 shadow-xs', $(this).scrollTop() > $nav.height());
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 16,
    lazyLoad: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});

$(document.body).click(function () {
  $("#nav-opened").slideUp("slow");
  $("#nav-opened").hide("slow", "linear");
});