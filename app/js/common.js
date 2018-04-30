$(function() {

	var owl = $(".header-slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		center: true,
		navText: ""
	});
	$(".next").click(function () {
		owl.trigger('next.owl.carousel');
	});
	$(".prev").click(function () {
		owl.trigger('prev.owl.carousel');
	});

	var owlSliderMenu = $(".slider-menu");
	owlSliderMenu.owlCarousel({
		loop: true,
		items: 4,
		margin: 30,
		nav: true,
		navText: ""
	});

	var owlSliderCategories= $(".categories-slider");
	owlSliderCategories.owlCarousel({
		loop: true,
		items: 8,
		margin: 14,
		nav: true,
		navText: ""
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
