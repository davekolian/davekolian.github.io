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
  if ($(window).scrollTop() >= vh(12)) {
    $("nav").addClass("fixed-header");
    $("nav").removeClass("nav_on_top");
  } else {
    $("nav").removeClass("fixed-header");
    $("nav").addClass("nav_on_top");
  }

  if ($(window).scrollTop() < vh(95)) {
    console.log("welcome");
    $(".code_works").removeClass("active");
    $(".galleria").removeClass("active");
    $(".contact_me").removeClass("active");
  } else if (
    $(window).scrollTop() >= vh(95) &&
    $(window).scrollTop() < vh(95) + 910
  ) {
    console.log("code_works");
    $(".code_works").addClass("active");
    $(".galleria").removeClass("active");
    $(".contact_me").removeClass("active");
  } else if (
    $(window).scrollTop() >= vh(95) + 910 &&
    $(window).scrollTop() + $(window).height() < $(document).height() - 100
  ) {
    console.log("galleria");
    $(".code_works").removeClass("active");
    $(".galleria").addClass("active");
    $(".contact_me").removeClass("active");
  } else if (
    $(window).scrollTop() + $(window).height() >=
    $(document).height() - 100
  ) {
    console.log("contact_me");
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
