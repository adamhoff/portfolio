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
    $(".nav1").css("color", "black")
    $(this).css("text-decoration", "line-through")
    $(this).css("text-decoration-color", "#00CCFF")
    $(this).css("color", "black")
  })
});
