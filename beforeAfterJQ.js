(function($){
	$.fn.initBeforeAfter = function(){
    	$(this).html('<div class="BA_before"></div>'+
    	'<div class="BA_after"></div>'+
    	'<div class="BA_slider">');
    	$(".BA_slider").initSlider({range: {min:0, max: 100}, flag: "beforeAfter"});
	}
})(jQuery);