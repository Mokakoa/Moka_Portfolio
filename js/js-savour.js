function workSavour() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight();

	gsap.defaults({ease: "none",duration: 2});

	s1h = $('.section1 .big-logo').innerHeight() + $('.section1 .under-logo').innerHeight();
	pad = (height-s1h)/2;

	$('.section1').css('paddingTop', ' ' + pad + 'px');
	$('.section1').css('paddingBottom', ' ' + pad + 'px');

	gsap.from('.section1 .big-logo', {
		y: -10,
		scale: 1.1,
		opacity: 0,
		ease: Power3.easeOut,
		duration: 2,
		delay: 1.5,
	})
	gsap.from('.section1 .under-logo p', {
		x: 50,
		opacity: 0,
		ease: Power3.easeOut,
		duration: 2,
		stagger: .1,
		delay: 2,
	})
	gsap.to('.section1', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: 300,
	})
	gsap.to('.section2 .image1', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			endTrigger: '.section2',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: 200,
	})
	gsap.to('.section2 .image3', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			endTrigger: '.section2',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: -100,
	})
	gsap.to('.section2 .image4', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			endTrigger: '.section2',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: 50,
	})
	gsap.to('.section2 .image5', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			endTrigger: '.section2',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: -100,
	})
	gsap.from('.section2 .text p', {
		scrollTrigger: {
			trigger: '.section2 .text',
			start: 'top 80%',
			toggleActions: "play none none none",
			markers: false
		},
		y: 100,
		opacity: 0,
		ease: Power4.easeOut,
		duration: 3
	})
	gsap.to('.section2 .text', {
		scrollTrigger: {
			trigger: '.section1',
			start: 'top top',
			endTrigger: '.section2',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: 50,
	})
	gsap.from('.section3', {
		scrollTrigger: {
			trigger: '.section3',
			start: '-400px top',
			// scrub: true,
			toggleActions: "play none none reverse",
			markers: false
		},
		scale: .9,
		ease: Power2.easeInOut,
		duration: 1,
	})
	gsap.to('.section3 video', {
		scrollTrigger: {
			trigger: '.section3',
			start: 'top center',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: 300,
	})
	gsap.to('.section4 img', {
		scrollTrigger: {
			trigger: '.section4',
			start: 'top bottom',
			endTrigger: '.section5',
			end: 'top top',
			scrub: true,
			markers: false
		},
		y: 500,
	})
	gsap.to('.section5 .phone-clipping', {
		scrollTrigger : {
			trigger: '.section5',
			start: 'top bottom',
			end: 'bottom top',
			scrub: .5,
			markers: false
		},
		y: 120
	})
	gsap.to('.section6 video', {
		scrollTrigger: {
			trigger: '.section6',
			start: 'top center',
			end: 'bottom top',
			scrub: true,
			markers: false
		},
		y: 300,
	})
	gsap.from('.section7 p', {
		scrollTrigger: {
			trigger: '.section7',
			start: 'top 80%',
			toggleActions: "play none none none",
			markers: false
		},
		x: 50,
		opacity: 0,
		ease: Power2.easeOut,
		duration: 3
	})
	gsap.to('.section7 p', {
		scrollTrigger: {
			trigger: '.section7',
			start: 'top bottom',
			end: '500px top',
			scrub: true,
			markers: false
		},
		y: -150,
	})
	gsap.to('.section8 .img-container', {
		scrollTrigger: {
			trigger: '.section8',
			start: 'top bottom',
			end: 'bottom top',
			scrub: .5,
			markers: false
		},
		yPercent: 15,
	})
	gsap.to('.section8 .desktop-frame', {
		scrollTrigger : {
			trigger: '.section8',
			start: 'top bottom',
			end: 'bottom top',
			scrub: .5,
			markers: false
		},
		y: 200
	})
	// gsap.from('.section9 .container', {
	// 	scrollTrigger: {
	// 		trigger: '.section9',
	// 		start: '200px bottom',
	// 		toggleActions: "play none none none",
	// 		markers: false
	// 	},
	// 	x: 50,
	// 	ease: Power2.easeOut,
	// 	duration: 2
	// })
	gsap.to('.section9 .container', {
		scrollTrigger : {
			trigger: '.section9',
			start: 'top bottom',
			end: 'bottom top',
			scrub: .5,
			markers: false
		},
		y: 400
	})
}


window.addEventListener('load', function() {
	workSavour();

	var sec2img1 = document.getElementById('image1');
	var sec2img1Parallax = new Parallax(sec2img1, {
		relativeInput: true
	});
	var sec2img2 = document.getElementById('image2');
	var sec2img2Parallax = new Parallax(sec2img2, {
		relativeInput: true
	});
	var sec2img3 = document.getElementById('image3');
	var sec2img3Parallax = new Parallax(sec2img3, {
		relativeInput: true
	});
	var sec2img4 = document.getElementById('image4');
	var sec2img4Parallax = new Parallax(sec2img4, {
		relativeInput: true
	});
	var sec2img5 = document.getElementById('image5');
	var sec2img5Parallax = new Parallax(sec2img5, {
		relativeInput: true
	});
	var sec5img = document.getElementById('s5img');
	var sec5imgParallax = new Parallax(sec5img, {
		relativeInput: true
	});
	
	sec2img1Parallax.friction(0.2, 0.2);
	sec2img2Parallax.friction(0.2, 0.2);
	sec2img3Parallax.friction(0.2, 0.2);
	sec2img4Parallax.friction(0.2, 0.2);
	sec2img5Parallax.friction(0.2, 0.2);
	sec5imgParallax.friction(0.2, 0.2);

	var vid = document.getElementById('video');
	vid.playbackRate = 5;
	vid.load();
})