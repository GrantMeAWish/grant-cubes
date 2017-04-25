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

		var index = 0;

		$("#carousel-next").click(function() {
			if (index == 3) {
				return false;
			} else if (index == 0) {
				$("#profile").fadeOut(470);
				$("#group").fadeIn(470);
				index += 1;
			} else if (index == 1) {
				$("#group").fadeOut(470);
				$("#solving").fadeIn(470);
				index += 1;
			} else {
				$("#solving").fadeOut(470);
				$("#small").fadeIn(470);
				index += 1;
			}
		});

		$("#carousel-prev").click(function() {
			if (index == 0) {
				return false;
			} else if (index == 1) {
				$("#group").fadeOut(470);
				$("#profile").fadeIn(470);
				index -= 1;
			} else if (index == 2) {
				$("#solving").fadeOut(470);
				$("#group").fadeIn(470);
				index -= 1;
			} else {
				$("#small").fadeOut(470);
				$("#solving").fadeIn(470);
				index -= 1;
			}
		});

		$("#carousel-next").hover(function() {
			$(this).css("opacity", ".5");
			}, function() {
				$(this).css("opacity", 1);
			}
		);

		$("#carousel-prev").hover(function() {
			$(this).css("opacity", ".5");
			}, function() {
				$(this).css("opacity", 1);
			}
		);
});
