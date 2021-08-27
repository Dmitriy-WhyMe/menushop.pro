(function ($) {
	$(document).ready(function () {
		//Popup
		$('#pop_1').magnificPopup({
			type: 'inline'
		});
		$('#pop_2').magnificPopup({
			type: 'inline'
		});
		$('#pop_3').magnificPopup({
			type: 'inline'
		});
		$('#pop_4').magnificPopup({
			type: 'inline'
		});
		$('#pop_5').magnificPopup({
			type: 'inline'
		});
		$('#pop_6').magnificPopup({
			type: 'inline'
		});
		$('#pop_7').magnificPopup({
			type: 'inline'
		});
		$('#pop_8').magnificPopup({
			type: 'inline'
		});
		$('#pop_9').magnificPopup({
			type: 'inline'
		});
		$('#pop_10').magnificPopup({
			type: 'inline'
		});
		$(function(){
			$("a[href^='#shema_raboti']").click(function(){
				var _href = $(this).attr("href");
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
				return false;
			});
			$("a[href^='#stoimost']").click(function(){
				var _href = $(this).attr("href");
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
				return false;
			});
			$("a[href^='#otziv']").click(function(){
				var _href = $(this).attr("href");
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
				return false;
			});
			$("a[href^='#contact']").click(function(){
				var _href = $(this).attr("href");
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
				return false;
			});
			$("a[href^='#services']").click(function(){
				var _href = $(this).attr("href");
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
				return false;
			});
			$("a[href^='#top']").click(function(){
				var _href = $(this).attr("href");
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
				return false;
			});
		});
		var mySlider_3 = $('.mobile-slider');
		mySlider_3.slick({
			dots: false,
			arrows: true,
			slidesToScroll: 1,
			slidesToShow: 1,
			infinite: true,
			autoplay: true,
  			autoplaySpeed: 2000,
			prevArrow: $('.arrow_prev--3'),
			nextArrow: $('.arrow_next--3')
		});
		var mySlider_1 = $('.slick-one');
		mySlider_1.slick({
			dots: false,
			arrows: true,
			slidesToScroll: 1,
			slidesToShow: 1,
			infinite: true,
			autoplay: true,
  			autoplaySpeed: 2000,
			prevArrow: $('.arrow_prev--1'),
			nextArrow: $('.arrow_next--1')
		});
		$(".slick-one").on('afterChange', function(event, slick, currentSlide){
			$(".index-slider").html(currentSlide + 1);
	   	});
		var allCurrentSlide = $(".slick-one").slick("getSlick").slideCount
		$( ".all-slider" ).html(allCurrentSlide);

		var mySlider_2 = $('.slick-two');
		mySlider_2.slick({
			dots: false,
			arrows: true,
			slidesToScroll: 1,
			slidesToShow: 1,
			infinite: true,
			autoplay: true,
  			autoplaySpeed: 2000,
			prevArrow: $('.arrow_prev--2'),
			nextArrow: $('.arrow_next--2')
		});
		$(".slick-two").on('afterChange', function(event, slick, currentSlide){
			$(".index-slider__1").html(currentSlide + 1);
	   	});
		var allCurrentSlide = $(".slick-two").slick("getSlick").slideCount
		$( ".all-slider__1" ).html(allCurrentSlide);

		$(document).ready(function () {
	        $('form').submit(function () {
	            var formID = $(this).attr('id'); // Получение ID формы
	            var formNm = $('#' + formID);
	            $.ajax({
	                type: 'POST',
	                url: './mail/check.php', // Обработчик формы отправки
	                data: formNm.serialize(),
	            });
	            return false;
	        });
	    });

		var ZCallbackWidgetLinkId  = '27ce4a8b3bfd08265bd6767ebd53386c';
		var ZCallbackWidgetDomain  = 'my.zadarma.com';
		(function(){
			var lt = document.createElement('script');
			lt.type ='text/javascript';
			lt.charset = 'utf-8';
			lt.async = true;
			lt.src = 'https://' + ZCallbackWidgetDomain + '/callbackWidget/js/main.min.js?unq='+Math.floor(Math.random(0,1000)*1000);
			var sc = document.getElementsByTagName('script')[0];
			if (sc) sc.parentNode.insertBefore(lt, sc);
			else document.documentElement.firstChild.appendChild(lt);
		})();

		//Begin Me-Talk
		(function(d, w, m) {
			window.supportAPIMethod = m;
			var s = d.createElement('script');
			s.type ='text/javascript'; s.id = 'supportScript'; s.charset = 'utf-8';
			s.async = true;
			var id = '5e72db55cb9047623930e0dc357cac73';
			s.src = '//me-talk.ru/support/support.js?h='+id;
			var sc = d.getElementsByTagName('script')[0];
			w[m] = w[m] || function() { (w[m].q = w[m].q || []).push(arguments); };
			if (sc) sc.parentNode.insertBefore(s, sc); 
			else d.documentElement.firstChild.appendChild(s);
		})(document, window, 'MeTalk');
		//End Me-Talk
	});
})(jQuery);