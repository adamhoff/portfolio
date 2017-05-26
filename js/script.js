$(document).ready(function() {
  $("#intro, .navbar").fadeIn(1300);

  $(".navbar a, .bg-0 a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() < 200) {
      $(".navbar-brand").fadeOut(1200);
    }
    if ($(document).scrollTop() > 200 && $(document).scrollTop() < 1600) {
      $(".about-container, .navbar-brand").fadeIn(1200);
    }
    if ($(document).scrollTop() > 1000 && $(document).scrollTop() < 2400)  {
      $(".project1-container, .navbar-brand").fadeIn(1200);
    }
    if ($(document).scrollTop() > 1800 && $(document).scrollTop() < 3200) {
      $(".project2-container, .navbar-brand").fadeIn(1200);
    }
    if ($(document).scrollTop() > 2600 && $(document).scrollTop() < 4000) {
      $(".project3-container, .navbar-brand").fadeIn(1200)
    }
  });
});
