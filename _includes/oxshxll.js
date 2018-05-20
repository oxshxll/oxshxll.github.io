function oxshxllBanner() {
  var div = "<div class='header-lozenge'></div>";
  $("header.site-header").append(div);


  // $(".site-title").hide();
  // $(".header-lozenge").show();

  // rotateLozenge(true);
  oxshxllScrambler();
};

function rotateLozenge(rotated) {
  var rotated = false,
      lozenge = document.getElementsByClassName('header-lozenge')[0],
      degrees = rotated ? 45 : 0;

  lozenge.style.webkitTransform = 'rotate('+degrees+'deg)';
  lozenge.style.mozTransform    = 'rotate('+degrees+'deg)';
  lozenge.style.msTransform     = 'rotate('+degrees+'deg)';
  lozenge.style.oTransform      = 'rotate('+degrees+'deg)';
  lozenge.style.transform       = 'rotate('+degrees+'deg)';
};

function oxshxllScrambler() {
  var title = $('.site-title');
  letterRandomizer(title);
};

function letterRandomizer(element) {
  var alphabeticPals = $(element).split('');
  var randomPals = ['#', '!', '&'];
  var startElelment = alphabeticPals.length / 2
  for (var i = alphabeticPals.length; i < 0; i++) {

  }
};


function init() {
  oxshxllBanner();
};

init();
