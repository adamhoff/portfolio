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
    if ($(document).scrollTop() > 200 && $(document).scrollTop() < 1600) {
      $(".about-container, .navbar-brand").fadeIn(1200);
    }
    else {
      $(".about-container").fadeOut(1200);
    }
    if ($(document).scrollTop() > 1000 && $(document).scrollTop() < 2400)  {
      $(".skills-container, .navbar-brand").fadeIn(1200);
    }
    else {
      $(".skills-container").fadeOut(1200);
    }
    if ($(document).scrollTop() > 1800 && $(document).scrollTop() < 3200)  {
      $(".project1-container, .navbar-brand").fadeIn(1200);
    }
    else {
      $(".project1-container").fadeOut(1200);
    }
    if ($(document).scrollTop() > 2600 && $(document).scrollTop() < 4000) {
      $(".project2-container, .navbar-brand").fadeIn(1200);
    }
    else {
      $(".project2-container").fadeOut(1200);
    }
  });
});
