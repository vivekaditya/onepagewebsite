/*
Author       : Syed Ekram.
Template Name: Sobnom - Personal Resume Template.
Version      : 1.0
*/

(function($) {
	"use strict";
	
		jQuery(document).ready(function(){
		
				/*preloader js*/
				$(window).load(function() { 
					$('.status').fadeOut();
					$('.preloader').delay(350).fadeOut('slow'); 
				}); 
				/*End preloader js*/

				/* START MENU TAB JS */
				jQuery('.tab-buttons li a').click(function(){

					var handler = jQuery(this);
					var rel = handler.data('rel');
					var parent = handler.parent();

					if(parent.hasClass('selected')){
					}else{
						
						jQuery('.tab-buttons li').removeClass('selected');
						parent.addClass('selected');

						jQuery('.tab-container > div').hide();
						jQuery('.tab-container #'+rel).show();
					}

					return false;

				});	
			/* END MENU TAB JS */
				
			/* START COUNTER JS*/
			$('#counter_feature').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.timer').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 2000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
			/* END COUNTER JS */
		
			/* START PORTFOLIO JS */
			jQuery('.grid').mixitup({
			targetSelector: '.mix',
			});
			
			$('.image-popup').magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				mainClass: 'mfp-img-mobile',
				image: {
					verticalFit: true
				}
			
			});
			/* END PORTFOLIO JS */
			
			/*START PROGRESS BAR JS*/
			$('.progress-bar > span').each(function(){
				var $this = $(this);
				var width = $(this).data('percent');
				$this.css({
					'transition' : 'width 2s'
				});
				
				setTimeout(function() {
					$this.appear(function() {
							$this.css('width', width + '%');
					});
				}, 500);
			});
			/*END PROGRESS BAR JS*/	
			
			/*START TESTIMONIAL CAROUSEL JS*/
			$('.carousel').carousel({
				interval:6000,
				pause:"false",
			});
			/*END TESTIMONIAL CAROUSEL JS*/
			
	   
		});

	    /*START WOW ANIMATION JS*/
	    	new WOW().init();	
	    /*END WOW ANIMATION JS*/
		
})(jQuery);

