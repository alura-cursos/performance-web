window.addEventListener('load', function() {
	var titulo = doc.querySelector('.header-menu-titulo');
	var menu = doc.querySelector('.header-menu');

	if (titulo) {
		titulo.onclick = function() {
			if (menu.hasAttribute('data-ativo')) {
				menu.removeAttribute('data-ativo');
			} else {
				menu.setAttribute('data-ativo', '');
			}
		};
	}

});

