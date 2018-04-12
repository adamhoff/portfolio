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

function lineAnimate(line) {
  var elem = document.getElementById('line');
  var size = elem.style.width;
  var count = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (count == 10) {
      clearInterval(id);
    } else {
      count ++;
      elem.style.width = size
    }
  }
}


  $(".AH").click(function() {
    $(".nav1").css("text-decoration", "none")
    $(".nav1").css("color", "#04202C")
    $(".nav1").css("font-weight", "normal")
    $(".nav1").css("text-shadow", "none")
  })
  $(".nav1").click(function() {
    $(".nav1").css("text-decoration", "none")
    $(".nav1").css("color", " #04202C")
    $(".nav1").css("font-weight", "normal")
    $(".nav1").css("text-shadow", "none")
    $(this).css("color", "black")
    $(this).css("text-decoration", "line-through")
    $(this).css("text-decoration-color", "#FF8D3F")
    $(this).css("font-weight", "bolder")
    $(this).css("text-shadow", "1px 1px 2px rgba(0, 0, 0, 0.5)")
  })

  $("#project1-container").hover(function() {
    $('#project-1 p').html('A simple front-end drag and drop puzzle game using HTML, CSS, and  vanilla JavaScript.')
    $('#demo-1').html('Demo')
    $('#repo-1').html('Code Repo')
  }, function() {
    $('#project-1 p').html('')
    $('#demo-1').html('')
    $('#repo-1').html('')
  })

  $("#project2-container").hover(function() {
    $('#project-2 p').html('A website for local breweries in Virginia using Angular and TypeScript.')
    $('#repo-2').html('Code Repo')
  }, function() {
    $('#project-2 p').html('')
    $('#repo-2').html('')
  })

  $("#project3-container").hover(function() {
    $("#project-3 p").html('A redesign project from scratch for ACE Mentor Program\'s Washington DC website.')
    $('#repo-3').html('Live Site')
  }, function() {
    $("#project-3 p").html('')
    $('#repo-3').html('')
  })

  $("#project4-container").hover(function() {
    $("#project-4 p").html('Full-stack voting application with user authentication using Meteor.js and React.')
    $('#demo-4').html('Live Site')
    $('#repo-4').html('Code Repo')
  }, function() {
    $("#project-4 p").html('')
    $('#demo-4').html('')
    $('#repo-4').html('')
  })
});
