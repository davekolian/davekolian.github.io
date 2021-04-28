function vh(v) {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (v * w) / 100;
}

$(window).scroll(function () {
  var galleria_height = $("#galleria").height();
  var code_works_height = $("#code_works").height();
  var welcome_height = $("#welcome_page").height();
  if ($(window).scrollTop() >= welcome_height) {
    $("nav").addClass("fixed-header");
    $("nav").removeClass("nav_on_top");
  } else {
    $("nav").removeClass("fixed-header");
    $("nav").addClass("nav_on_top");
  }

  if ($(window).scrollTop() < code_works_height) {
    $(".code_works").removeClass("active");
    $(".galleria").removeClass("active");
    $(".contact_me").removeClass("active");
  } else if (
    $(window).scrollTop() >= code_works_height &&
    $(window).scrollTop() < welcome_height + code_works_height
  ) {
    $(".code_works").addClass("active");
    $(".galleria").removeClass("active");
    $(".contact_me").removeClass("active");
  } else if (
    $(window).scrollTop() >= vh(95) + code_works_height &&
    $(window).scrollTop() + $(window).height() < $(document).height() - 100
  ) {
    $(".code_works").removeClass("active");
    $(".galleria").addClass("active");
    $(".contact_me").removeClass("active");
  } else if (
    $(window).scrollTop() + $(window).height() >=
    $(document).height() - 100
  ) {
    $(".code_works").removeClass("active");
    $(".galleria").removeClass("active");
    $(".contact_me").addClass("active");
  }
});

function clickSingleA(a) {
  // items = document.querySelectorAll(".active"); //should be ".single.active"

  // if (items.length) {
  //   items[0].className = "single";
  // }

  a.addClass("active");
}

function openProject(link) {
  window.open(link, "mywindow");
}
