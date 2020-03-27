jQuery(document).ready(function($){

    $('.loggedintopright').hover(function(){
        $(this).children('.loggedinsubmenu').toggleClass('loggedinisactive');
    })

    // $('#playButton').trigger('click');
    let audio = document.getElementById('musicplayer');
    $('#pad').click(function(){
        audio.play();

    });
})