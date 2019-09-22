$(function(){

$('.slider-inner, .news-slider-inner').slick({

nextArrow:'<button type="button" class="slick-btn slick-next">></button>',
prevArrow:'<button type="button" class="slick-btn slick-prev"><</button>',
});

$('.header-btn-menu').on('click', function(){


	$('.menu .menu-list').slideToggle();
});

});