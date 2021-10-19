define(['jquery', 'jquery/ui', 'slick'], function ($) {
    $(document).ready(function () {
        $(".banner-slider").slick({
            dots: true,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });
});
