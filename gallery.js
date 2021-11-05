$("#myCarousel").carousel();

$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});

$("#myCarousel").carousel('pause');


window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 500px)").matches) {
    console.log("Screen width is at least 500px")
  } else {
    console.log("Screen less than 500px")
  }
})