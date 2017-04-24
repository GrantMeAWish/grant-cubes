$(document).ready(function() {

		$(".about-me").click(function() {
				$("#modal-container5").fadeIn(470);
		});

		$(".cube-icon").click(function() {
				if ($(this).hasClass("icon1")) {
					$("#modal-container1").fadeIn(470);
				} else if ($(this).hasClass("icon2")) {
					$("#modal-container2").fadeIn(470);
				} else if ($(this).hasClass("icon3")) {
					$("#modal-container3").fadeIn(470);
				} else {
					$("#modal-container4").fadeIn(470);
				}
		});

		$(".modal-overlay").click(function() {
			if ($(this).hasClass("icon1")) {
				$("#modal-container1").fadeOut(470);
			} else if ($(this).hasClass("icon2")) {
				$("#modal-container2").fadeOut(470);
			} else if ($(this).hasClass("icon3")) {
				$("#modal-container3").fadeOut(470);
			} else if ($(this).hasClass("icon4"))  {
				$("#modal-container4").fadeOut(470);
			} else {
				$("#modal-container5").fadeOut(470);
			}
		});

		$(".ok-button").click(function() {
			if ($(this).hasClass("icon1")) {
				$("#modal-container1").fadeOut(470);
			} else if ($(this).hasClass("icon2")) {
				$("#modal-container2").fadeOut(470);
			} else if ($(this).hasClass("icon3")) {
				$("#modal-container3").fadeOut(470);
			} else if ($(this).hasClass("icon4")){
				$("#modal-container4").fadeOut(470);
			} else {
				$("#modal-container5").fadeOut(470);
			}
		});

		$(".cube-icon").hover(function() {
			$(this).removeClass("cube-icon");
			$(this).addClass("cube-icon-hover");
			}, function() {
				$(this).removeClass("cube-icon-hover");
				$(this).addClass("cube-icon");
			}
		);


});
