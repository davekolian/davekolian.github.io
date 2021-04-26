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
});

function clickSingleA(a) {
  items = document.querySelectorAll(".active"); //should be ".single.active"

  if (items.length) {
    items[0].className = "single";
  }

  a.className = "single active";
}

function openProject(link) {
  window.open(link, "mywindow");
}
