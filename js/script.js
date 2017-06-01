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
  $("#project1-container").hover(function() {
    $('#project-1').html('Front-end drag n’drop puzzle game.')
    $('#project-1').css('margin-top', '50px')
    $('#demo-1').html('Demo')
    $('#repo-1').html('Code Repo')
  }, function() {
    $('#project-1').css('margin-top', '100px')
    $('#project-1').html('Tower of Hanoi')
    $('#demo-1').html('')
    $('#repo-1').html('')
  })
  $("#project2-container").hover(function() {
    $("#project-2").html('Full-stack 2017 calendar application.')
    $('#project-2').css('margin-top', '50px')
    $('#demo-2').html('Demo')
    $('#repo-2').html('Code Repo')
  }, function() {
    $("#project-2").html('2017 Calendar')
    $('#project-2').css('margin-top', '100px')
    $('#demo-2').html('')
    $('#repo-2').html('')
  })
  $("#project3-container").hover(function() {
    $("#project-3").html('Team collaborated Full-stack space application.')
    $('#project-3').css('margin-top', '50px')
    $('#demo-3').html('Demo')
    $('#repo-3').html('Code Repo')
  }, function() {
    $("#project-3").html('GoldieNauts')
    $('#project-3').css('margin-top', '100px')
    $('#demo-3').html('')
    $('#repo-3').html('')
  })
  $("#project4-container").hover(function() {
    $("#project-4").html('This is a placeholder for my project 4.')
    $('#project-4').css('margin-top', '50px')
    $('#demo-4').html('Demo')
    $('#repo-4').html('Code Repo')
  }, function() {
    $("#project-4").html('Placeholder')
    $('#project-4').css('margin-top', '100px')
    $('#demo-4').html('')
    $('#repo-4').html('')
  })
});
