const cursorO = document.querySelector('.cursor-outer');
// const cursorI = document.querySelector('.cursor-inner');
// console.log(cursorO);
// console.log(cursorI);

$(document).ready(function() {
	$('.contentcursor').hover(function(){
		$(cursorO).addClass('onhovercontent');
		// $(cursorI).addClass('onhovercontent');
	}, function() {
		$(cursorO).removeClass('onhovercontent');
		// $(cursorI).removeClass('onhovercontent');
	});
	$('.videocursor').hover(function(){
		$(cursorO).addClass('onhovervideo');
		// $(cursorI).addClass('onhovervideo');
	}, function() {
		$(cursorO).removeClass('onhovervideo');
		// $(cursorI).removeClass('onhovervideo');
	});
	$('.linkcursor').hover(function(){
		$(cursorO).addClass('onhoverlink');
		// $(cursorI).addClass('onhoverlink');
	}, function() {
		$(cursorO).removeClass('onhoverlink');
		// $(cursorI).removeClass('onhoverlink');
	});
});


$(window).mousestop(function(e){
	$(".cursor-outer").not('.onhovercontent').not('.onhoverlink').not('.onhovervideo').css({
		scale : '1'
	});
});

createWheelStopListener(window, function(e) {
	$(".cursor-outer").not('.onhovercontent').not('.onhoverlink').not('.onhovervideo').css({
		scale : '1'
	});
}, 100);

document.addEventListener("mousewheel", function(e) {
	$(".cursor-outer p").css({
		scale: '0',
	});
	$(".cursor-outer.onhovervideo .pvideo").css({
		scale: '1',
	});
	$(".cursor-outer.onhoverlink .vlink").css({
		scale: '1',
	});
	$(".cursor-outer").not('.onhovercontent').not('.onhoverlink').not('.onhovervideo').css({
		scale : '.5'
	});
	$(".cursor-outer.onhovercontent").css({
		scale : '2',
	});
	$(".cursor-outer.onhovervideo").css({
		scale : '3',
	});
});

document.addEventListener("mousemove", function(e) {
	var scroll = $(window).scrollTop();
	// circle move
	cursorO.style.top = e.pageY-scroll + "px";
	cursorO.style.left = e.pageX + "px";
	
	// cursorI.style.top = e.pageY-scroll + "px";
	// cursorI.style.left = e.pageX + "px";

	$(".cursor-outer p").css({
		scale: '0',
	});
	$(".cursor-outer.onhovervideo .pvideo").css({
		scale: '1',
	});
	$(".cursor-outer.onhoverlink .vlink").css({
		scale: '1',
	});
	$(".cursor-outer").not('.onhovercontent').not('.onhoverlink').not('.onhovervideo').css({
		scale : '.5'
	});
	$(".cursor-outer.onhovercontent").css({
		scale : '2',
	});
	$(".cursor-outer.onhovervideo").css({
		scale : '3',
	});
});






var contentcursor = document.querySelectorAll('.contentcursor');
var onhovervideo = document.querySelectorAll(".onhovervideo");
var onhoverlink = document.querySelectorAll(".onhoverlink");
// console.log(contentcursor.length, onhovervideo.length, onhoverlink.length);

