// carrega videos assincronamente
setTimeout(function(){

	var containers = document.querySelectorAll('.elasticMedia-container[data-src]');
	for (var i = 0; i < containers.length; i++) {
		var src = containers[i].getAttribute('data-src');
		containers[i].innerHTML = '<iframe class="elasticMedia" src="' + src + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	}

}, 500);