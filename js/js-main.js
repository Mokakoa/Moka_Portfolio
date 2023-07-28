function pageInTransition() {
	gsap.to('ul#curtain li', {
		scaleY: 0,
		duration: 1,
		ease: Power2.Out,
		stagger: {
			from: "random",
			amount: .2
		}
	})
}

function pageOutTransition() {
	gsap.to('ul#curtain li', {
		scaleY: 2,
		duration: .8,
		ease: Power4.Out,
		stagger: {
			from: "random",
			amount: .2
		}
	})
	gsap.from('*', {
		background: "#FFF4E6 !important",
		duration: .5
	})
}

function reSize() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight();
	console.log(width, height);
	if (width >= height) {
		$("#horizontal-screen").css("display", "block");
		$("#vertical-screen").css("display", "none");
		console.log("horizontal-screen");
	} else {
		$("#horizontal-screen").css("display", "none");
		$("#vertical-screen").css("display", "flex");
		console.log("vertical-screen");
	}
}



window.addEventListener("resize", () => {
	reSize()
});

$(document).ready(function(e) {
	pageInTransition();
	reSize();
	// Select all a tags
	const links = document.querySelectorAll("a[prefetch]");

	// Loop through each a tag
	links.forEach((link) => {
		// Add click event listener
		link.addEventListener("click", function (e) {
			pageOutTransition()
			// Prevent default behavior
			e.preventDefault();
			// Get the href attribute value
			const href = this.getAttribute("href");
			const prefetchLink = document.createElement('link');
			prefetchLink.rel = 'prefetch';
			prefetchLink.href = href;
			document.head.appendChild(prefetchLink);
			// Delay for 500ms
			setTimeout(() => {
				// Redirect to the href value
				window.location.href = href;
			}, 1000);
		});
	});

	var prevScrollpos = window.pageYOffset;

	window.onscroll = function() {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			$("#nav-container").addClass('scroll-up');
			$("#nav-container").removeClass('scroll-down');
		} else {
			$("#nav-container").removeClass('scroll-up');
			$("#nav-container").addClass('scroll-down');
		}
		prevScrollpos = currentScrollPos;
	}


	fragp = $(".nav-container .nav-logo #point p");
	fragoka = $(".nav-container .nav-logo #oka p");

	$(".nav-container .nav-logo").hover(function() {
		$(this).addClass('hovered');
		// fragoka.css('translate', '0px');
		// fragp.css('translate', '-65px');
	}, function() {
		$(this).removeClass('hovered');
		// fragoka.css('translate', '-65px');
		// fragp.css('translate', '0px');
	});

	const cursor = document.querySelector('#cursor'),
		cursorOut = document.querySelector('#cursor .cursor');

	document.addEventListener('mousemove', function(event) {
		var scroll = $(window).scrollTop();
	// circle move
		cursor.style.top = event.pageY - scroll + "px";
		cursor.style.left = event.pageX + "px";

		hoverItems = document.querySelectorAll('a');
		hoverLogo = document.getElementById('logo');

		$(hoverItems).hover(function() {
			cursor.style.setProperty('--w', '100px');
		}, function() {
			cursor.style.setProperty('--w', '50px');
		})
		$(hoverLogo).hover(function() {
			cursor.style.setProperty('--w', '170px');
		},function() {
			cursor.style.setProperty('--w', '50px');
		})
	})





})






// document.querySelectorAll('a').forEach(link => {
//   link.addEventListener('click', () => {
//   	pageOutTransition();
//     const href = link.getAttribute('href');
//     const prefetchLink = document.createElement('link');
//     prefetchLink.rel = 'prefetch';
//     prefetchLink.href = href;
//     document.head.appendChild(prefetchLink);
//   });
// });
