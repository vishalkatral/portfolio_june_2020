$(".main-carousel").flickity({
  // options
  cellAlign: "left",
  contain: true,
});

var scene = document.getElementsByClass("scene");
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
});
