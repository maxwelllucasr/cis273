jQuery(document).ready(function($){

    $('.loggedintopright').hover(function(){
        $(this).children('.loggedinsubmenu').toggleClass('loggedinisactive');
    })

    $('.hamburger-menu').click(function(){

        if ($(this).hasClass('hamburger')){
                $('.hamburger-menu').attr('src','svg/times.svg')
                $('.hamburger-menu').removeClass('hamburger')

                $('.popout-menu').addClass('popout-menu-is-open')
                $('.popout-background').addClass('popout-background-is-active')
        }
        else{
            $('.hamburger-menu').attr('src','svg/bars.svg')
            $('.hamburger-menu').addClass('hamburger')

            $('.popout-menu').removeClass('popout-menu-is-open')
            $('.popout-background').removeClass('popout-background-is-active')

        }
    })

    // $('#playButton').trigger('click');
    
})