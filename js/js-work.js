function work() {
	var width = $(window).innerWidth(),
		height = $(window).innerHeight(),
		padding = 5*width/100;

	gsap.defaults({ease: "none",duration: 2});


	gsap.to('.section1 .play-text .head.p', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.5,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .play-text .head.l', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.8,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .play-text .head.a', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2.1,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .play-text .head.y', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.9,
			markers: false,
		},
		x: () => "+=" + width
	})
	gsap.to('.section1 .ground .head.g', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2.25,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.r', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2.1,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.o', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.9,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.u', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.75,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.n', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 1.9,
			markers: false,
		},
		x: () => "+=" + -width
	})
	gsap.to('.section1 .ground .head.d', {
		scrollTrigger: {
			trigger: ".section1",
			start: "top top",
			end: "115% bottom",
			scrub: 2.1,
			markers: false,
		},
		x: () => "+=" + -width
	})

	var sc1sc2 = ({
		trigger: ".section2",
		start: "top 75%",
		end: () => "+=" + 50,
		scrub: 1,
		markers: false
	})

	gsap.fromTo("body", {
		background: "#151515"
	}, {
		scrollTrigger: sc1sc2,
		background: "#FFF4E6"
	})
	gsap.to(".section1 .text", {
		scrollTrigger: sc1sc2,
		color: "#151515"
	})

	gsap.from('.section2 .sticky-container', {
		scrollTrigger: {
			trigger: ' .section2',
			start: 'top bottom',
			end: '200px center',
			scrub: true,
			markers: false
		},
		y: -200,
		ease: "power1.out",
	})

	const 	sc2head = 180,
			sc2time = sc2head/2,
			sc2mq = document.querySelectorAll(".section2 .sticky-container .marquee-container"),
			sc2start = "top 45%",
			sc2end = "bottom 70%",
			sc2scrub = .8,
			sc2maker = false;

	gsap.fromTo(sc2mq, {
		y: 0
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .content1 span",
			start: sc2start,
			end: sc2end,
			scrub: sc2scrub,
			markers: sc2maker
		},
		y: () => -(sc2head),
	})
	gsap.fromTo(sc2mq, {
		y: () => -(sc2head),
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .content2 span",
			start: sc2start,
			end: sc2end,
			scrub: sc2scrub,
			markers: sc2maker
		},
		y: () => -(sc2head)*2,
	})
	// gsap.fromTo(sc2mq, {
	// 	y: () => -(sc2head)*2,
	// }, {
	// 	scrollTrigger: {
	// 		trigger: ".section2 .thumb-container .content3 span",
	// 		start: sc2start,
	// 		end: sc2end,
	// 		scrub: sc2scrub,
	// 		markers: sc2maker
	// 	},
	// 	y: () => -(sc2head)*3,
	// })
	// gsap.fromTo(sc2mq, {
	// 	y: () => -(sc2head)*3,
	// }, {
	// 	scrollTrigger: {
	// 		trigger: ".section2 .thumb-container .content4 span",
	// 		start: sc2start,
	// 		end: sc2end,
	// 		scrub: sc2scrub,
	// 		markers: sc2maker
	// 	},
	// 	y: () => -(sc2head)*4,
	// })

	gsap.set(sc2mq, {
		y: 0
	})

	var sc2textin = .5,
		sc2textout = .1,
		sc2textinEase = "power4.out",
		sc2text1 = $(".section2 .sticky-container .content-container .text1"),
		sc2text1p = sc2text1.children("p"),
		sc2text2 = $(".section2 .sticky-container .content-container .text2"),
		sc2text2p = sc2text2.children("p"),
		sc2text3 = $(".section2 .sticky-container .content-container .text3"),
		sc2text3p = sc2text3.children("p"),
		// sc2text4 = $(".section2 .sticky-container .content-container .text4"),
		// sc2text4p = sc2text4.children("p"),
		sc2textmove = sc2text1.width() + padding,
		sc2textstart = "bottom 55%",
		sc2textend = () => "+=" + 20;
		// console.log(sc2text1.width() + padding)

	gsap.fromTo(sc2text1p, {
		yPercent: 0
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .content1 span",
			start: sc2textstart,
			end: sc2textend,
			scrub: true,
			// toggleActions: 'play none none reverse',
			markers: false,
		},
		yPercent: () => 100,
		duration: sc2textout,
	}) // Text1 In-Out

	gsap.fromTo(sc2text2p, {
		yPercent: () => -100,
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .content1 span",
			start: sc2textstart,
			// end: sc2textend,
			scrub: true,
			markers: false
		},
		yPercent: 0,
		duration: sc2textin,
		ease: sc2textinEase,
	}) // Text2 In
	gsap.fromTo(sc2text2p, {
		yPercent: () => 0,
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .content2 span",
			start: sc2textstart,
			// end: sc2textend,
			scrub: true, 
			markers: false
		},
		yPercent: () => 100,
		duration: sc2textin,
		ease: sc2textinEase,
	}) // Text2 Out
	gsap.set(sc2text2p, {
		yPercent: () => -100,
	})

	gsap.fromTo(sc2text3p, {
		yPercent: () => -100,
	}, {
		scrollTrigger: {
			trigger: ".section2 .thumb-container .content2 span",
			start: sc2textstart,
			// end: sc2textend,
			scrub: true, 
			markers: false
		},
		yPercent: 0,
		duration: sc2textin,
		ease: sc2textinEase,
	}) // Text3 In
	// gsap.fromTo(sc2text3p, {
	// 	yPercent: () => 0,
	// }, {
	// 	scrollTrigger: {
	// 		trigger: ".section2 .thumb-container .content3 span",
	// 		start: sc2textstart,
	// 		// end: sc2textend,
	// 		scrub: true, 
	// 		markers: false
	// 	},
	// 	yPercent: () => 100,
	// 	duration: sc2textin,
	// 	ease: sc2textinEase,
	// }) // Text3 Out
	// gsap.set(sc2text3p, {
	// 	yPercent: () => -100,
	// })

	// gsap.fromTo(sc2text4p, {
	// 	yPercent: () => -100,
	// }, {
	// 	scrollTrigger: {
	// 		trigger: ".section2 .thumb-container .content3 span",
	// 		start: sc2textstart,
	// 		// end: sc2textend,
	// 		scrub: true, 
	// 		markers: false
	// 	},
	// 	yPercent: 0,
	// 	duration: sc2textin,
	// 	ease: sc2textinEase,
	// }) // Text4 In
	// gsap.fromTo(sc2text4p, {
	// 	yPercent: () => 0,
	// }, {
	// 	scrollTrigger: {
	// 		trigger: ".section2 .thumb-container .content4 span",
	// 		start: sc2textstart,
	// 		// end: sc2textend,
	// 		scrub: true, 
	// 		markers: false
	// 	},
	// 	yPercent: () => 100,
	// 	duration: sc2textin,
	// 	ease: sc2textinEase,
	// }) // Text3 Out
	// gsap.set(sc2text4p, {
	// 	yPercent: () => -100,
	// })
}

function marquee() {
	gsap.defaults({ease: "none",duration: 2});
	var mqgap = 180,
		mqless = mqgap*2/3,
		width = $(window).innerWidth(),
		height = $(window).innerHeight();

	var sf1 = $(".section2 .marquee1 .marquee-content").width()+mqless,
		sf2 = $(".section2 .marquee2 .marquee-content").width()+mqless,
		sf3 = $(".section2 .marquee3 .marquee-content").width()+mqless,
		sf4 = $(".section2 .marquee4 .marquee-content").width()+mqless,
		sst1 = $(".section2 .stkmarquee1 .marquee-content").width()+mqless,
		sst2 = $(".section2 .stkmarquee2 .marquee-content").width()+mqless,
		sst3 = $(".section2 .stkmarquee3 .marquee-content").width()+mqless,
		sst4 = $(".section2 .stkmarquee4 .marquee-content").width()+mqless,


		tst1 = 10,

		tf1 = (sf1*tst1)/sst1,
		tf2 = (sf2*tst1)/sst1,
		tf3 = (sf3*tst1)/sst1,
		tf4 = (sf4*tst1)/sst1,
		tst2 = (sst2*tst1)/sst1,
		tst3 = (sst3*tst1)/sst1,
		tst4 = (sst4*tst1)/sst1;

	$('.section2 .sticky-container .sticky-text .stroke-text .marquee-container').css('right', ' ' + sst1*1.5 + 'px');

	gsap.to(".section2 .marquee1 .marquee-content", {
		x: () => "+=" + -(sf1),
		repeat: -1,
		duration: tf1,
	})
	gsap.to(".section2 .marquee2 .marquee-content", {
		x: () => "+=" + -(sf2),
		repeat: -1,
		duration: tf2,
	})
	gsap.to(".section2 .marquee3 .marquee-content", {
		x: () => "+=" + -(sf3),
		repeat: -1,
		duration: tf3,
	})
	gsap.to(".section2 .marquee4 .marquee-content", {
		x: () => "+=" + -(sf4),
		repeat: -1,
		duration: tf4,
	})
	gsap.to(".section2 .stkmarquee1 .marquee-content", {
		x: () => "+=" + (sst1),
		repeat: -1,
		duration: tst1,
	})
	gsap.to(".section2 .stkmarquee2 .marquee-content", {
		x: () => "+=" + (sst2),
		repeat: -1,
		duration: tst2,
	})
	gsap.to(".section2 .stkmarquee3 .marquee-content", {
		x: () => "+=" + (sst3),
		repeat: -1,
		duration: tst3,
	})
	gsap.to(".section2 .stkmarquee4 .marquee-content", {
		x: () => "+=" + (sst4),
		repeat: -1,
		duration: tst4,
	})
}

window.addEventListener('load', function(){
	work();
	marquee();

	window.addEventListener('resize', function() {
		work();
		marquee();
	})
})