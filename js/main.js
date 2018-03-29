$(document).ready(function($) {

	var controller = new ScrollMagic();

	// build scene
	var scene = new ScrollScene({triggerElement: "#trigger_logo", offset: 130, duration: 200})
					.setTween(TweenMax.to("#green_logo", 0.5, {opacity: 1}))
					.setPin("#green_logo")
					.addTo(controller);

	var scene = new ScrollScene({triggerElement: "#trigger_intro", offset: -30, duration: 50})
					.setTween(TweenMax.to(".intro", 0.5, {opacity: 1}))
					.addTo(controller);

	//var scene = new ScrollScene({triggerElement: "#header_trigger", triggerHook: 0, offset: 0, duration: 0})
					//.setTween(TweenMax.to(".sticky_header", 0.5, {opacity: 1}))
					//.addTo(controller);

	var scene = new ScrollScene({triggerElement: "#nav_trigger", triggerHook: 0, offset: 300, duration: 0})
					.setTween(TweenMax.to("#sticky_header", 0.2, {opacity: 1}))
					//.setPin("#sticky_header")
					.addTo(controller);

	var scene = new ScrollScene({triggerElement: "#nav_trigger", triggerHook: 0, offset: -100, duration: 0})
					.setTween(TweenMax.to("#nav", 0.2, {opacity: 0}))
					.addTo(controller);

	// var scene = new ScrollScene({triggerElement: "#header_trigger", triggerHook: 0, offset: 0, duration: 0})
	// 				.setTween(TweenMax.to("#sticky_header", 0.2, {opacity: 1}))
	// 				.addTo(controller);

	// parallax scroll
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#intro').parallax("50%", 0.1);
	$('#parallax_upper_left').parallax("0%", .5);
	$('#parallax_lower_left').parallax("0%", 1);
	$('#parallax_upper_right').parallax("0%", .25);
	$('#parallax_middle').parallax("0%", 0.5);



});
