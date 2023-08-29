/**
*	mateCard (HTML)
*	Copyright © mateCard by beshleyua. All Rights Reserved.
**/

$(function () {
	'use strict';
	
	var width = $(window).width();
	var height = $(window).height();
	

	/*** 
	**** Preloader
	***/
	$(window).on('load', function() {
		$(".preloader .spinner").fadeOut(function(){
			$('.preloader').fadeOut();
			$('body').addClass('ready');
		});
	});


	/*** 
	**** Portfolio Filter
	***/
	$('.filter').on('click', 'a', function(){
		var filter = $(this).attr('data-filter');

		$('.work-item').hide();
		$(filter).fadeIn();
		
		return false;
	});


	/***
	**** Initialize collapse button
	***/
	$('.menu-btn').sideNav();
	if(width < 1080){
		$('.side-nav').css({'transform':'translateX(-100%)'});
	}


	/*** 
	**** SideNav Menu Scroll
	***/
	if($('#home-section').length) {
		$(window).on('scroll', function(){
			var scrollPos = $(window).scrollTop();
			$('.side-nav li > a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.offset().top - 30 <= scrollPos) {
					$('.side-nav li').removeClass("active");
					currLink.closest('li').addClass("active");
				}
			});
		});
	}

	$('.scrollspy').scrollSpy({
		scrollOffset: 0
	});

});


let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}