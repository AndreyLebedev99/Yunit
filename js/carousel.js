$(document).ready(function () {
	const owl = $('#slider');
	owl.owlCarousel({
		items: 1,
		loop: true
	});

	// Прокрутка вперед
	$('.slider__arrow--next').click(function () {
		owl.trigger('next.owl.carousel');
	})
	// Прокрутка назад
	$('.slider__arrow--prev').click(function () {
		owl.trigger('prev.owl.carousel', [300]);
	})

});