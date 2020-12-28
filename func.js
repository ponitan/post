$(document).ready(function() {
	$.fn.lh_menu = function(){
		this.addClass('menu_w');
		return this.each(function(){
			var _this = $(this);
			var wParent = 100;
			var wcount = _this.find('>li').length;
			_this.find('>li').each(function(){
				$(this).width(Math.floor(wParent/wcount)+'%');
			});
		});
	};
	//раскомментить, если надо чтобы в горизонтальном меню все пункты были одной ширины
	//$('.lh_menu > ul').lh_menu();
	//$('.lf_menu > ul').lh_menu();

	$('.lh_menu>ul>li, .lf_menu>ul>li').hover(
		function(){$(this).addClass('selected'); $(this).find('a:first').addClass('selected');},
		function(){$(this).removeClass('selected'); $(this).find('a:first').removeClass('selected');}
	);

	$('.add_to_cart').wrapInner('<span class="cart_ico"></span>');

	$('.block > ul > li > a').prepend('<div class="ll_menu_l"></div><div class="ll_menu_r"></div>');

	$('.header_layout4 .mp_news .news_block_item').append('<div class="l_cleaner"></div>');

	$('.slider').nivoSlider({
		effect: 'fade',
		controlNav: false,
		prevText: '',
		nextText: ''
	});
});
