
$(document).ready(function() {

    var swiper = new Swiper('.swiper-container', {

        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '"><span class="pagination-number">' + (index + 1) + '</span></span>';
        },
        direction: 'vertical',
        slidesPerView: 1,
        mousewheelControl: true,
        keyboardControl: true,
        height: $(window).height(),
        calculateHeight: true,
        autoHeight: true

    });

    var open = true;
    $("#navigation-wrapper i.toggle-btn").click(function(){
        if (open)
            $('#navigation-wrapper .menu-list').css('padding', '40px');
        else
            $('#navigation-wrapper .menu-list').css('padding', '0px');

        open = !open;
    });

    $('.imgLiquidFill').imgLiquid();

});
