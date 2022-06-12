/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line react/jsx-no-comment-textnodes
<script>
$(document).ready(function)()
  // Activate Carousel
  $("#myCarousel").carousel();
    
  {/* // Enable Carousel Indicators */}
  $(".item1").click(function()
    $("#myCarousel").carousel(0);
  {"}"});
  $(".item2").click(function()
    $("#myCarousel").carousel(1);
  {"}"});
  $(".item3").click(function()
    $("#myCarousel").carousel(2);
  {"}"});
  $(".item4").click(function()
    $("#myCarousel").carousel(3);
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  {"}"});
    
  {/* // Enable Carousel Controls */}
  $(".left").click(function()
    $("#myCarousel").carousel("prev");
  {"}"});
  $(".right").click(function()
    $("#myCarousel").carousel("next");
  {"}"});
{"}"};
</script>