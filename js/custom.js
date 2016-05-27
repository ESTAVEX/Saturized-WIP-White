
var swiper = new Swiper('.swiper-container', {

    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (index, className) {
        return '<span class="' + className + '"><span class="pagination-number">' + (index + 1) + '</span></span>';
    },
    direction: 'vertical',
    slidesPerView: 1,
    mousewheelControl: true,
    height: $(window).height(),
    autoHeight: true

});
