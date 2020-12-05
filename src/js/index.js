
/*=== Public Functions for Modal ===*/

let modal_close = (_this) => {
    _this.parentElement.style.display = 'none';
    $('.modal_overlay').removeClass('active');
};

let number = () => {
    if (event.keyCode < 48 || event.keyCode > 57)
        event.returnValue = false;
};

let modal_open = (modal) => {
    $('.modal_overlay').addClass('active');
    $(modal).css('display', 'block');
}



/*=== Form Reset ===*/

(function() { $('input[type=checkbox]').prop('checked', false); })();



/*=============================================================
        Account Page
=========================================================================*/

/*=== Multi order button activates ===*/

function multi_order() {
    let button = $('.button-multi');
    $('.checkbox_input').is(':checked') ? button.attr('disabled', false) : button.attr('disabled', true);

}multi_order();



/*=== Select form ===*/

(function() {

    $('.button, .param_load').click((e)=> { e.stopPropagation(); })

    $('.checkbox_input').on('change', function(){
        $(this).parents('.tr').toggleClass('active');
        multi_order();
    });


    $('.tr').on('click', function(e){
        let checkbox = $(this).find('.checkbox_input');

        !$(checkbox).is(':checked')
            ? $(checkbox).prop('checked', true)
            : $(checkbox).prop('checked', false);

        $(checkbox).trigger('change');
    });
})();





/*=== Mobile menu of account ===*/

(function() {

    $('.sidebarMenu_button').on('click', function(){
        let sidebar = $('.sidebar_menu');

        $(this).is(':visible')
            ? $(this).toggleClass('active')
            : false;

        $(this).hasClass('active') ? sidebar.addClass('active') : sidebar.removeClass('active');
    })
})();



/*=== Account navigation ===*/

(function() {

    $('.sidebar_link').on('click', function(e){
        e.preventDefault();

        let name_table = $(this).attr('href');

        $('.sidebar_link, .main_content').removeClass('active');    // Reset

        $(`${name_table}`).addClass('active');
        $(this).addClass('active');                                 // Active link

        $('.sidebarMenu_button').trigger('click');

    });


    /*Avatar click*/

    $('.mainHead_account').on('click', function(e) {
        e.preventDefault();

        $('.link-settings').click();
    });
})();



/*=== Range output ===*/

(function () {

    let output_value = function () {
        let output_percent = this.value + '%' || 1;
        $(this).parents('.range_block').find('.percent_uniq_output span').text(output_percent);
        $(this).css('background', 'linear-gradient(to right, #00b9ff 0%, #00b9ff ' + output_percent + ', #f3f6fc ' + output_percent + ', #f3f6fc 100%)');
    };

    $('#percent_uniq_rewrite').on('input', output_value).trigger('input');
    $('#percent_uniq_top').on('input', output_value).trigger('input');
})();


/*=== Tabs of Multi order modal ===*/

(function () {

    $('.tabs_button:eq(0)').addClass('active');
    $('.tabs_show_block:eq(0)').addClass('active');

    $('.tabs_button').on('click', function (e) {
        e.preventDefault();
        let show_block = $(this).attr('href');

        $('.tabs_button').removeClass('active');
        $('.tabs_show_block').removeClass('active');

        $(this).addClass('active');
        $('#' + show_block).addClass('active');
    });
})();



/*=== Mobile tabs of Multi order modal ===*/

(function () {

    $('.tabs_block-mobile').on('click', function (e) {
        e.preventDefault();

        let drop_menu = $('.tabsBlock_drop-mobile');

        if (!$(drop_menu).hasClass('active')) {
            $(drop_menu).slideDown(300).addClass('active');
            $('.tab_arrow').css('transform', 'rotate(180deg)')
        } else {
            $(drop_menu).slideUp(300).removeClass('active');
            $('.tab_arrow').css('transform', 'rotate(0deg)')
        }
    });
})();


/*=== Tabs mobile select ===*/

(function () {

    $('.tabsButton_wrapper-mobile').on('click', function (e) {
        e.preventDefault();

        let wrapper_enter = $('.wrapper_enter');
        let block_html_cur = $(wrapper_enter)[0].innerHTML;     //current active block
        let block_html = $(this)[0].innerHTML;                  //block clicking
        let show_block = $(this).children().attr('href');

        $('.tabs_show_block').removeClass('active');

        $(wrapper_enter).children().remove();
        $(wrapper_enter).append(block_html);

        $(this).children().remove();
        $(this).append(block_html_cur);

        $('#' + show_block).addClass('active');
    });
})();























