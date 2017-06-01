$(document).ready(function() {

  $(".navigation a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
        window.location.hash = hash;
      });
    }
  });
  $(".nav1").click(function() {
    $(".nav1").css("text-decoration", "none")
    $(".nav1").css("color", "grey")
    $(".nav1").css("font-weight", "normal")
    $(".nav1").css("text-shadow", "none")
    $(this).css("color", "black")
    $(this).css("text-decoration", "line-through")
    $(this).css("text-decoration-color", "#00CCFF")
    $(this).css("font-weight", "bolder")
    $(this).css("text-shadow", "1px 1px 2px rgba(0, 0, 0, 0.5)")
  })
});
