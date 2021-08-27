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
		
		$('#pop_12').magnificPopup({
			type: 'inline'
		});
		$('.test-popup-link-1').magnificPopup({
		  type: 'image'
		});
		$('.test-popup-link-2').magnificPopup({
		  type: 'image'
		});
		$('.test-popup-link-3').magnificPopup({
		  type: 'image'
		});
		$('.test-popup-link-4').magnificPopup({
		  type: 'image'
		});
		$('.test-popup-img-1').magnificPopup({
		  type: 'image'
		});
		$('.test-popup-img-2').magnificPopup({
		  type: 'image'
		});
		$('.test-popup-img-3').magnificPopup({
		  type: 'image'
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
			infinite: false,
			autoplay: true,
  			autoplaySpeed: 6000,
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
  			autoplaySpeed: 6000,
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
			infinite: false,
			autoplay: false,
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
	                url: 'check.php', // Обработчик формы отправки
	                data: formNm.serialize(),
	            });
	            return false;
	        });
	    });
	    
		$( document ).ready(function() {
		    $("#pop_6").click(
				function(){
					sendAjaxForm('result_form', 'ajax_form', 'check.php');
					return false; 
				}
			);
		});
		$( document ).ready(function() {
		    $("#pop_11").click(
				function(){
					sendAjaxForm('result_form', 'ajax_forms', 'check.php');
					return false; 
				}
			);
		});
		$( document ).ready(function() {
		    $("#pop_12").click(
				function(){
					sendAjaxForm('result_form', 'ajax_formss', 'check.php');
					return false; 
				}
			);
		});
		 
		function sendAjaxForm(result_form, ajax_form, url) {
		    $.ajax({
		        url:     "check.php", //url страницы (action_ajax_form.php)
		        type:     "POST", //метод отправки
		        dataType: "html", //формат данных
		        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
		        success: function(response) { //Данные отправлены успешно
		        	result = $.parseJSON(response);
		        	$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.tell+'<br>Почта: '+result.email);
		    	},
		    	error: function(response) { // Данные не отправлены
		            $('#result_form').html('Ошибка. Данные не отправлены.');
		    	}
		 	});
		}
		function sendAjaxForm(result_form, ajax_formss, url) {
		    $.ajax({
		        url:     "check.php", //url страницы (action_ajax_form.php)
		        type:     "POST", //метод отправки
		        dataType: "html", //формат данных
		        data: $("#"+ajax_formss).serialize(),  // Сеарилизуем объект
		        success: function(response) { //Данные отправлены успешно
		        	result = $.parseJSON(response);
		        	$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.tell+'<br>Почта: '+result.email);
		    	},
		    	error: function(response) { // Данные не отправлены
		            $('#result_form').html('Ошибка. Данные не отправлены.');
		    	}
		 	});
		}
		function sendAjaxForm(result_form, ajax_forms, url) {
		    $.ajax({
		        url:     "check.php", //url страницы (action_ajax_form.php)
		        type:     "POST", //метод отправки
		        dataType: "html", //формат данных
		        data: $("#"+ajax_forms).serialize(),  // Сеарилизуем объект
		        success: function(response) { //Данные отправлены успешно
		        	result = $.parseJSON(response);
		        	$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.tell+'<br>Почта: '+result.email+'<br>Вопрос: '+result.que);
		    	},
		    	error: function(response) { // Данные не отправлены
		            $('#result_form').html('Ошибка. Данные не отправлены.');
		    	}
		 	});
		}
	});
})(jQuery);