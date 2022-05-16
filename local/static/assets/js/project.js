'use strict';
$(document).ready(function($) {
    $('.mobile-burger').click(function (){
        $('.navigation').addClass('open');
    })
    $('.close-button').click(function (){
        $('.navigation').removeClass('open');
    })

    $(document).on('scroll', function() {
        stickyHeader();
    });

    const stickyHeader = () => {
        const header = $('header'),
            body = $('body');

        if (window.pageYOffset >= 152) {
            header.addClass('isSticky');
            body.addClass('stickyActive');
        } else {
            header.removeClass('isSticky');
            body.removeClass('stickyActive');
        }
    }

    $(document).mouseup( function(e){ // событие клика по веб-документу
        const div = $( ".navigation" ); // тут указываем ID элемента
        if ( !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
            div.removeClass('open'); // скрываем его
        }
    });

    $(document).on('keyup', function(e) {
        if ( e.key == "Escape" ) {
            $( ".navigation" ).removeClass('open');
        }
    });

});
