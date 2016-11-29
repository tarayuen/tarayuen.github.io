(function() {

    $(window).load(function() {
        setInterval(function() {
            $(".loader").fadeOut("slow")
        }, 250);
    });

    var screenWidth = $(window).width();

    if (screenWidth > 768) {
        $('body').scrollspy({ 
            target: '.spy-active' 
        });
    }

    $('div').scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > 0) {
            $("#navbar-custom").removeClass("navbar-transparent");
            $("#navbar-custom").addClass("navbar-custom");
        } else {
            $('.nav li').removeClass('active');
            $("#navbar-custom").removeClass("navbar-custom");
            $("#navbar-custom").addClass("navbar-transparent");
        }
    });

    $('a').click(function() {
        
        if (screenWidth < 768) {
            var container = $('html, body');
            if ($.attr(this, 'href') != '#mountains') {
                $('.navbar-toggle').click();
            }
        }
        else {
            var container = $('.parallax');
        }
        
        var target = $($.attr(this, 'href'));
        var parent = $($(this).parent());
        container.animate({
            scrollTop: container.scrollTop() + target.offset().top
        }, {
            duration: 600,
            start: function() {
                $('.nav li').removeClass('spy-active');
            },
            complete: function() {
                parent.addClass('spy-active');
                $('.nav li').removeClass('active');
                parent.addClass('active');
            }
        });

        return false;

    });

}());

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    
    $scope.showInfo = function(info) {
        $scope.contactInfo = info;
    };

});