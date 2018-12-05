$(window).on('load', function() {
    $(".loader").fadeOut("slow");
});

$('body').scrollspy({ target: '.navbar', offset: 100 })

// Navbar on scroll
$(document).scroll(function () {
  
    var $top = $(window).scrollTop();
    if ($top > 50) {
        $(".scrolling-navbar").addClass("top-nav-collapse");
    } else {
        $(".scrolling-navbar").removeClass("top-nav-collapse");
    }

});

// Smooth Scroll on clicking nav items
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -45
    }, 1000);
});

// back to top
// $('.to-top').click(function () {
//   $('body').animate({
//     scrollTop: 0
//   }, 1000);
//   return false;
// });

// Parallaxing on scroll
$(document).scroll(function () {
  
    $top = $(window).scrollTop();
    // var $resume = $('#resume');
    // var $contact = $('#contact');
    $('.parallax').css('background-positionY', ($top * -0.4) + 'px');
    // $resume.css('background-positionY', ($top - $resume.offset().top) * -0.4 + 'px');
    // $contact.css('background-positionY', ($top - $contact.offset().top) * -0.4 + 'px');

});

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