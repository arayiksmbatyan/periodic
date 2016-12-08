$(function() {

var $elems = $('.elem-resize-btn'),
		$elemClass,
		$elemId,
		timer;

	$elems.on('click', function () {
		var that = this;

		event.preventDefault();

		if (timer && clearTimeout(timer));

		timer = setTimeout(function () {
			$elemId = $(that).attr('id');

			if ($elemClass && ($elemClass != $elemId)) {
				$(`.${$elemClass}`)
					.removeClass('toggle-zoomin');
				$(`.element:not(.${$elemClass})`)
					.removeClass('toggle-zoomout');
			}

			$(`.${$elemId}`).toggleClass('toggle-zoomin');
			$(`.element:not(.${$elemId})`).toggleClass('toggle-zoomout');
			console.log('aaa');
			$elemClass = $elemId;

		}, 250);

	});

	$elems.on('dblclick', function () {
		clearTimeout(timer);
		location.assign($(this).find('a').attr('href'));
	});

});	