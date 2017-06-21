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
    $(".nav1").css("font-weight", "normal")
    $(".nav1").css("text-shadow", "none")
    $(this).css("color", "black")
    $(this).css("text-decoration", "line-through")
    $(this).css("text-decoration-color", "#dc4c46")
    $(this).css("font-weight", "bolder")
    $(this).css("text-shadow", "1px 1px 2px rgba(0, 0, 0, 0.5)")
  })
  $("#project1-container").hover(function() {
    $('#project-1').html('My very first front-end drag and drop puzzle game using HTML, CSS, and vanilla JavaScript.')
    $('#demo-1').html('Demo')
    $('#repo-1').html('Code Repo')
  }, function() {
    $('#project-1').html('Tower of Hanoi')
    $('#demo-1').html('')
    $('#repo-1').html('')
  })
  $("#project3-container").hover(function() {
    $("#project-3").html('Team collaborated Full-stack space application using HTML, CSS, JavaScript, jQuery, and Ruby on Rails.')
    $('#demo-3').html('Demo')
    $('#repo-3').html('Code Repo')
  }, function() {
    $("#project-3").html('GoldieNauts')
    $('#demo-3').html('')
    $('#repo-3').html('')
  })
  $("#project4-container").hover(function() {
    $("#project-4").html('Full-stack voting application with user authentication using Meteor.js and React.')
    $('#demo-4').html('Demo')
    $('#repo-4').html('Code Repo')
  }, function() {
    $("#project-4").html('CounterFight')
    $('#demo-4').html('')
    $('#repo-4').html('')
  })
});
