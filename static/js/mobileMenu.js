$(window).ready(function(){
    
    $('.slideOutBackground p').click(function(){
        $('.mobileNvigationMenu').removeClass('showing');
        $('.slideOutBackground').removeClass('visable');
    });

    $('.mobileNavigationToggler>img').click(function(){
        $('.mobileNvigationMenu').addClass('showing');
        $('.slideOutBackground').addClass('visable');
    });

});