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
	
	var scene = new ScrollScene({triggerElement: "#header_trigger", triggerHook: 1, offset: 90, duration: 0})
					.setTween(TweenMax.to(".sticky_header", 0.5, {opacity: 1}))
					.addTo(controller);
									
	var scene = new ScrollScene({triggerElement: "#header_trigger", triggerHook: 0, offset: 0, duration: 0})
					.setPin(".sticky_header")
					.addTo(controller);
});