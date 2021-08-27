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
	                url: 'check.php', // Обработчик формы отправки
	                data: formNm.serialize(),
	            });
	            return false;
	        });
	    });

	    /* Article FructCode.com */
		$( document ).ready(function() {
		    $("#pop_6").click(
				function(){
					sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
					return false; 
				}
			);
		});
		 
		function sendAjaxForm(result_form, ajax_form, url) {
		    $.ajax({
		        url:     'check.php', //url страницы (action_ajax_form.php)
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

		function just_YouTube_embed(u,t){"use strict";const c="url(https://i.ytimg.com/vi/REPLACE-ID/sddefault.jpg)",b="https://www.youtube.com/watch?v=REPLACE-ID&amp;feature=emb_imp_woyt",p="https://www.youtube.com/embed/REPLACE-ID?enablejsapi=1&amp;autohide=1",f="https://www.youtube.com/iframe_api",g=function(){let t=navigator.userAgent;return-1<t.indexOf("MSIE ")||-1<t.indexOf("Trident/")}();if(1==t){let t;return u.style.opacity="1",setTimeout(function(){u.parentElement.firstChild.outerHTML=""},1e3),t=new YT.Player(u,{events:{onStateChange:onPlayerStateChange}}),void u.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}if(2!=t){!function(){if(null===document.querySelector("style#"+u+"-css")){let t=document.createElement("style"),e=document.querySelector("body"),o="animation: 1s linear 0s normal none infinite "+u+"_load_wheel;",n="keyframes "+u+"_load_wheel{0%{transform:rotate(0deg);}100%{transform:rotate(360deg)}}";g&&(n=n.split("0%")[0]+"0%{}100%{opacity:0.33}");let r="."+u+" iframe{transition: all 1s;opacity:0;position: relative;z-index:1;height:100%;width:100%}."+u+"-absolute {position: absolute}."+u+"-font {font: 500 16px/16px Roboto,Arial,Helvetica,sans-serif}."+u+"{width: 100%;height: 100%;position: relative;display: inline-block;background-repeat: no-repeat;background-size: cover;background-position: center;background-color: #434343}."+u+"-button{width: 68px;height: 51px;background: rgba(23,23,23,0.7);border-radius: 12px;cursor: pointer;transition: background .1s;left: calc(50% - 34px);top: calc(50% - 25px)}."+u+"-button:hover{background: #cc181e}."+u+"-button-in{border: 11px solid transparent;border-left: 22px solid #fff;margin: 15px 26px}."+u+"-line{width: 100%;overflow: hidden;height:47px}."+u+" a{padding-right: 10px;white-space: nowrap;background: rgba(23,23,23,0.7);left: 0;height:47px}."+u+"-cont{margin-top: 16px;display: inline-block}."+u+"-txt{color: #fff;float: left;margin-left:12px}."+u+"-logo{border-radius: 50%;float: left;height: 36px;width: 36px;background-color: #fff;background-size: contain;background-repeat: no-repeat;background-position: center;margin: 6px 0 0 10px}."+u+"-img-cont{margin: 0 0 0 29px;letter-spacing: -1px;display: inline-block;height:16px}."+u+"-span{color: #fff;float: left}."+u+"_load_wheel{"+o+"-webkit-"+o+"-moz-"+o+"width: 50px;height: 50px;border-radius: 50%;border: 6px solid #fff;border-right: 6px solid transparent;position: absolute;left: calc(50% - 31px);background-position: center;top: calc(50% - 31px)}@"+n+"@-webkit-"+n+"@-moz-"+n;g&&(r=r.replace("border-right: 6px solid transparent;","")),t.id=u+"-css",t.innerHTML=r,e.insertBefore(t,e.firstChild)}}();let t,e,d;g||(t={root:document.window,rootMargin:"5px",threshold:.1},e=function(t,n){t.forEach(function(o){if(o.isIntersecting){let t=o.target,e="background-image:"+t.getAttribute("data-style");t.setAttribute("style",e),t.removeAttribute("data-style"),n.unobserve(t)}})},d=new IntersectionObserver(e,t));for(let t=0,e=document.querySelectorAll("."+u);t<e.length;t++)e[t].hasAttribute("data-yotube-formed")||function(e){let t=e.getAttribute("id"),o=c.replace("REPLACE-ID",t),n=b.replace("REPLACE-ID",t),r=m("bottom")+h(n)+y()+v("Посмотреть на")+function(t){return'<div class="'+t+'-img-cont"><div class="'+t+"-button "+t+'-absolute" style="left:106px;top:-2px;transform:scale(0.27);background: #fff"><div class="'+t+"-button-in "+t+'-absolute" style="border-left: 22px solid #000;"></div></div><span class="'+t+"-span "+t+'-font">YouTube</span></div>'}(u)+"</div></a></div>",i='<iframe class="'+u+'-player" src="'+p.replace("REPLACE-ID",t)+'" frameborder="0" allowfullscreen="" onload="just_YouTube_embed(this,1)" allow="autoplay"></iframe>',a="",l="";if(e.hasAttribute("title")&&(e.hasAttribute("data-logo")&&(l=function(t){let e='data-style="';g&&(e='style="background-image:');return'<div class="'+u+'-logo" '+e+"url("+t+')"></div>'}(e.getAttribute("data-logo"))),a=m("top")+h(n)+l+y()+v(e.getAttribute("title"))+"</div></a></div>",e.removeAttribute("title")),e.setAttribute("data-yotube-formed",""),e.innerHTML=a+'<div class="'+u+"-button "+u+'-absolute"><div class="'+u+'-button-in"></div></div>'+r,g?e.style.backgroundImage=o:e.setAttribute("data-style",o),!g){var s=e.parentElement.querySelectorAll("div[data-style]");for(let t=0;t<s.length;t++)d.observe(s[t])}e.querySelector("."+u+"-button").onclick=function(){var t='<div class="'+u+'_load_wheel"></div>';e.setAttribute("style","background:#000;transition:background 1s"),this.outerHTML="",e.innerHTML='<div style="opacity: 0.7">'+e.innerHTML+t+"</div>"+i,function(){if(null===document.querySelector("script#"+u+"-js")){let t=document.createElement("script"),e=document.querySelector("body");t.src=f,t.id=u+"-js",e.insertBefore(t,e.firstChild)}}(),just_YouTube_embed(e.lastChild,2)}}(e[t])}else for(let t=0,e=document.querySelectorAll("iframe");t<e.length;t++)u!=e[t]&&-1!=e[t].src.indexOf("www.youtube.com/embed/")&&e[t].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");function m(t){return'<div class="'+u+"-line "+u+'-absolute" style="'+t+':0">'}function h(t){return'<a class="'+u+'-absolute" target="_blank" href="'+t+'">'}function y(){return'<div class="'+u+'-cont">'}function v(t){return'<div class="'+u+"-txt "+u+'-font">'+t+"</div>"}}function onPlayerStateChange(t){t.data==YT.PlayerState.PLAYING&&just_YouTube_embed(t.target.h,2)}document.addEventListener("DOMContentLoaded",function(){just_YouTube_embed("youtube")});
	});
})(jQuery);