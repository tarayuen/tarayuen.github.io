// $(window).load(function() {
//     $(".loader").fadeOut("slow");
// });

// $('body').scrollspy({ target: '.navbar' })

// Smooth Scroll on clicking nav items
$('nav a').click(function () {
    var $href = $(this).attr('href');
    $('body').stop().animate({
        scrollTop: $($href).offset().top
    }, 1000);
    return false;
});

// back to top
// $('.to-top').click(function () {
//   $('body').animate({
//     scrollTop: 0
//   }, 1000);
//   return false;
// });

var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.pauseFor(1000)
    .typeString(", I'm Tara!")
    // .pauseFor(2500)
    // .deleteAll()
    // .typeString('Strings can be removed')
    // .pauseFor(2500)
    // .deleteChars(7)
    // .typeString('altered!')
    .start();

// Parallaxing on scroll
$(document).scroll(function () {
  
  var $top = $(window).scrollTop();
  var $resume = $('#resume');
  var $contact = $('#contact');
  $('.parallax').css('background-positionY', ($top * -0.3) + 'px');
  $resume.css('background-positionY', ($top - $resume.offset().top) * -0.3 + 'px');
  $contact.css('background-positionY', ($top - $contact.offset().top) * -0.2 + 'px');

});