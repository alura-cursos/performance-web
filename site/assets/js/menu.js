$(window).on('load', function() {
	var menu = $('.header-menu');

	$('.header-menu-titulo').on('click', function() {
		if (menu.is('[data-ativo]')) {
			menu.removeAttr('data-ativo');
		} else {
			menu.attr('data-ativo', '');
		}
	});

});
