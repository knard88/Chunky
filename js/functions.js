var ch_delay = (function(){
	var ch_timer = 0;
	return function(callback, ms){
		clearTimeout (ch_timer);
		ch_timer = setTimeout(callback, ms);
	};
})();

$(function() {

	/****SHOW/HIDE USER BOX****/
	var ch_pause = 20; 

    $(window).resize(function() {

        ch_delay(function() {

        	// console.log($(window).width());

            if( $(".ch-header .ch-btn-user-hide").css("display") == "none") {

            	$('.ch-user-box').removeClass('ch-user-drop');
            	
            	$('.ch-user-box').show();
            	$('.ch-btn-user-panel').removeClass('ch-selected');
            	$('.ch-user-drop') .hide();   

            	if(!$('.ch-user-box').hasClass('ch-span5')) {
	            		$('.ch-user-box').addClass('ch-user-fixed');
	            		$('.ch-user-box').addClass('ch-span5');            		
            	}       	

            }else{
            	$('.ch-user-box').addClass('ch-user-drop');
            	$('.ch-user-box').show();
            	$('.ch-user-box').removeClass('ch-span5');
            	$('.ch-user-box').removeClass('ch-user-fixed');
            	$('.ch-btn-user-panel').removeClass('ch-selected');
            	$('.ch-user-drop').hide(); 
            }

        }, ch_pause );

    });

    $(window).resize();

	//
	$('.ch-user-drop').hide();
	$('.ch-user-box').addClass('ch-user-fixed');

	$('.ch-btn-user-panel').on('click', function(evt){
		evt.preventDefault();

		if($('.ch-user-drop').is(':hidden')){
			$('.ch-user-drop').show();
			$('.ch-btn-user-panel').addClass('ch-selected');
		}else{
			$('.ch-user-drop').hide();
			$('.ch-btn-user-panel').removeClass('ch-selected');
		}
	}) 


	// Old
	var buttonUser = $('.ch-btn-user-panel');
	var boxUser = $('.ch-user-drop');
	var areaUser = $('.drop-area');
	buttonUser.removeAttr('href');
	buttonUser.removeClass("ch-selected");



	/*Ver mas*/
	var buttonShowMore = $('.ch-show-more-btn');
	var boxShowMore= $('.ch-show-more-box');
	boxShowMore.css('display','none');
	buttonShowMore.removeAttr('href');
	buttonShowMore.click(function(login) {
		login.stopPropagation();

		if ($(this).hasClass("ch-selected")) {
			$(this).removeClass("ch-selected");
			boxShowMore.css('display','none');
		}else{			
			$(this).addClass("ch-selected");
			boxShowMore.css('display','block');
			
			boxUser.css('display','none');
			buttonUser.removeClass("ch-selected");
			boxSuper1.css('display','none');
			buttonSuper1.removeClass('ch-selected');
			boxSuper2.css('display','none');
			buttonSuper2.removeClass('ch-selected');
			boxSuper3.css('display','none');
			buttonSuper3.removeClass('ch-selected');
			boxSuper4.css('display','none');
			buttonSuper4.removeClass('ch-selected');
			boxSuper5.css('display','none');
			buttonSuper5.removeClass('ch-selected');
			boxSuper6.css('display','none');
			buttonSuper6.removeClass('ch-selected');
		}
	});

	/*Virtual keyboard*/
	var buttonKeyboard = $('.ch-keyboard-btn');
	var boxKeyboard = $('.ch-keyboard-box');
	var areaKeyboard = $('.ch-keyboard-area');
	boxKeyboard.css('display','none');
	buttonKeyboard.removeAttr('href');	
	buttonKeyboard.click(function(login) {
		login.stopPropagation();

		if ($(this).hasClass("ch-selected")) {
			$(this).removeClass("ch-selected");
			boxKeyboard.css('display','none');
		}else{			
			$(this).addClass("ch-selected");
			boxKeyboard.css('display','block');
		}
	});
	areaKeyboard.mouseup(function() { 
		return false;
	});

	/*SAPERMENIU*/
	var buttonSuper1 = $('.ch-megamenu-btn1');
	var boxSuper1= $('.ch-megamenu-box1');
	var areaSuper1 = $('.ch-megamenu-box-area');
	
	// boxSuper1.css('display','none');
	boxSuper1.css("display","none");

	buttonSuper1.removeAttr('href');
	buttonSuper1.click(function(login) {
		login.stopPropagation();

		if ($(this).hasClass("ch-selected")) {
			$(this).removeClass("ch-selected");
			boxSuper1.css("display","none");
		}else{	
			boxSuper1.css("display","block");		
			$(this).addClass("ch-selected");

			boxUser.css('display','none');
			buttonUser.removeClass("ch-selected");
			boxShowMore.css('display','none');
			buttonShowMore.removeClass('ch-selected');
			boxSuper2.css("display","none");
			buttonSuper2.removeClass('ch-selected');
			boxSuper3.css('display','none');
			buttonSuper3.removeClass('ch-selected');
			boxSuper4.css('display','none');
			buttonSuper4.removeClass('ch-selected');
			boxSuper5.css('display','none');
			buttonSuper5.removeClass('ch-selected');
			boxSuper6.css('display','none');
			buttonSuper6.removeClass('ch-selected');
		}
	});
	areaSuper1.mouseup(function() { 
		return false;
	});

	/**/
	var buttonSuper2 = $('.ch-megamenu-btn2');
	var boxSuper2= $('.ch-megamenu-box2');
	boxSuper2.css("display","none");

	buttonSuper2.removeAttr('href');
	buttonSuper2.click(function(login) {
		login.stopPropagation();

		if ($(this).hasClass("ch-selected")) {
			$(this).removeClass("ch-selected");
			boxSuper2.css("display","none");
		}else{			
			boxSuper2.css("display","block");
			$(this).addClass("ch-selected");

			boxUser.css('display','none');
			buttonUser.removeClass("ch-selected");
			boxShowMore.css('display','none');
			buttonShowMore.removeClass('ch-selected');
			boxSuper1.css("display","none");
			buttonSuper1.removeClass('ch-selected');
			boxSuper3.css('display','none');
			buttonSuper3.removeClass('ch-selected');
			boxSuper4.css('display','none');
			buttonSuper4.removeClass('ch-selected');
			boxSuper5.css('display','none');
			buttonSuper5.removeClass('ch-selected');
			boxSuper6.css('display','none');
			buttonSuper6.removeClass('ch-selected');
		}
	});

	/**/
	var buttonSuper3 = $('.ch-megamenu-btn3');
	var boxSuper3= $('.ch-megamenu-box3');
	boxSuper3.css('display','none');
	buttonSuper3.removeAttr('href');
	buttonSuper3.click(function(login) {
		login.stopPropagation();

		if ($(this).hasClass("ch-selected")) {
			$(this).removeClass("ch-selected");
			boxSuper3.css('display','none');
		}else{			
			$(this).addClass("ch-selected");
			boxSuper3.css('display','block');

			boxUser.css('display','none');
			buttonUser.removeClass("ch-selected");
			boxShowMore.css('display','none');
			buttonShowMore.removeClass('ch-selected');
			boxSuper1.css('display','none');
			buttonSuper1.removeClass('ch-selected');
			boxSuper2.css('display','none');
			buttonSuper2.removeClass('ch-selected');
			boxSuper4.css('display','none');
			buttonSuper4.removeClass('ch-selected');
			boxSuper5.css('display','none');
			buttonSuper5.removeClass('ch-selected');
			boxSuper6.css('display','none');
			buttonSuper6.removeClass('ch-selected');
		}
	});
	/**/
	var buttonSuper4 = $('.ch-megamenu-btn4');
	var boxSuper4= $('.ch-megamenu-box4');
	boxSuper4.css('display','none');
	buttonSuper4.removeAttr('href');
	buttonSuper4.click(function(login) {
		login.stopPropagation();

		if ($(this).hasClass("ch-selected")) {
			$(this).removeClass("ch-selected");
			boxSuper4.css('display','none');
		}else{			
			$(this).addClass("ch-selected");
			boxSuper4.css('display','block');

			boxUser.css('display','none');
			buttonUser.removeClass("ch-selected");
			boxShowMore.css('display','none');
			buttonShowMore.removeClass('ch-selected');
			boxSuper1.css('display','none');
			buttonSuper1.removeClass('ch-selected');
			boxSuper2.css('display','none');
			buttonSuper2.removeClass('ch-selected');
			boxSuper3.css('display','none');
			buttonSuper3.removeClass('ch-selected');
			boxSuper5.css('display','none');
			buttonSuper5.removeClass('ch-selected');
			boxSuper6.css('display','none');
			buttonSuper6.removeClass('ch-selected');
		}
	});
	/**/
	var buttonSuper5 = $('.ch-megamenu-btn5');
	var boxSuper5= $('.ch-megamenu-box5');
	boxSuper5.css('display','none');
	buttonSuper5.removeAttr('href');
	buttonSuper5.click(function(login) {		
		login.stopPropagation();

		if ($(this).hasClass("ch-selected")) {
			$(this).removeClass("ch-selected");
			boxSuper5.css('display','none');
			console.log("estaba activo");
		}else{			
			$(this).addClass("ch-selected");
			boxSuper5.css('display','block');
			console.log("estaba inact");

			boxUser.css('display','none');
			buttonUser.removeClass("ch-selected");
			boxShowMore.css('display','none');
			buttonShowMore.removeClass('ch-selected');
			boxSuper1.css('display','none');
			buttonSuper1.removeClass('ch-selected');
			boxSuper2.css('display','none');
			buttonSuper2.removeClass('ch-selected');
			boxSuper3.css('display','none');
			buttonSuper3.removeClass('ch-selected');
			boxSuper4.css('display','none');
			buttonSuper4.removeClass('ch-selected');
			boxSuper6.css('display','none');
			buttonSuper6.removeClass('ch-selected');
		}
	});

	/**/

	var buttonSuper6 = $('.ch-megamenu-btn6');
	var boxSuper6= $('.ch-megamenu-box6');
	boxSuper6.css('display','none');
	buttonSuper6.removeAttr('href');
	buttonSuper6.click(function(login) {		
		login.stopPropagation();

		if ($(this).hasClass("ch-selected")) {
			$(this).removeClass("ch-selected");
			boxSuper6.css('display','none');
			console.log("estaba activo");
		}else{			
			$(this).addClass("ch-selected");
			boxSuper6.css('display','block');
			console.log("estaba inact");

			boxUser.css('display','none');
			buttonUser.removeClass("ch-selected");
			boxShowMore.css('display','none');
			buttonShowMore.removeClass('ch-selected');
			boxSuper1.css('display','none');
			buttonSuper1.removeClass('ch-selected');
			boxSuper2.css('display','none');
			buttonSuper2.removeClass('ch-selected');
			boxSuper3.css('display','none');
			buttonSuper3.removeClass('ch-selected');
			boxSuper4.css('display','none');
			buttonSuper4.removeClass('ch-selected');
			boxSuper5.css('display','none');
			buttonSuper5.removeClass('ch-selected');
		}
	});
	// 

	$('.ch-megamenu-accordion').click(function(ev) {
		$(this).find('>ul').slideToggle().css('display','block').end().siblings().find('ul').slideUp();
		$(this).toggleClass('ch-megamenu-accordion-less');
		$(this).siblings().removeClass('ch-megamenu-accordion-less');
		ev.stopPropagation();		
	});

	
	!function ($) {
		$(document)
		.on('click.dropdown.data-api touchstart.dropdown.data-api', clearBoxes)
		.on('click.dropdown touchstart.dropdown.data-api', '.ch-btn-user-panel', function (e) { 
			e.stopPropagation()			
		})	
		.on('click.dropdown touchstart.dropdown.data-api', '.ch-user-area', function (e) { 
			e.stopPropagation()			
		})	

		.on('click.dropdown touchstart.dropdown.data-api', '.ch-show-more-btn', function (e) { 
			e.stopPropagation() 
		})
		.on('click.dropdown touchstart.dropdown.data-api', '.ch-keyboard-area', function (e) { e.stopPropagation() })
		
		.on('click.dropdown touchstart.dropdown.data-api', '.ch-show-more-box', function (e) { e.stopPropagation() })

		.on('click.dropdown touchstart.dropdown.data-api', '.ch-megamenu-box-area', function (e) { e.stopPropagation() })


		function clearBoxes (){
			$('.ch-user-drop').css('display','none');
			buttonUser.removeClass("ch-selected");

			boxShowMore.css('display','none');
			buttonShowMore.removeClass("ch-selected");

			boxKeyboard.css('display','none');
			buttonKeyboard.removeClass("ch-selected");

			boxSuper1.css('display','none');
			buttonSuper1.removeClass("ch-selected");

			boxSuper2.css('display','none');
			buttonSuper2.removeClass("ch-selected");

			boxSuper3.css('display','none');
			buttonSuper3.removeClass("ch-selected");

			boxSuper4.css('display','none');
			buttonSuper4.removeClass("ch-selected");

			boxSuper5.css('display','none');
			buttonSuper5.removeClass("ch-selected");

			boxSuper6.css('display','none');
			buttonSuper6.removeClass("ch-selected");

		}
	}(window.jQuery);

});

/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-tooltip.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,this.options.trigger=="click"?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):this.options.trigger!="manual"&&(e=this.options.trigger=="hover"?"mouseenter":"focus",f=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this))),this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,b,this.$element.data()),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)return c.show();clearTimeout(this.timeout),c.hoverState="in",this.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,b=/in/.test(f),a.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),c=this.getPosition(b),d=a[0].offsetWidth,e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.offset(g).addClass(f).addClass("in")}},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).detach()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.detach()})}var b=this,c=this.tip();return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d():c.detach(),this},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);c[c.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1}}(window.jQuery)

$(document).ready(function(){
	//random logo
	var ch_posY = [7, -53, -114, -173, -233];

	$('.ch-link-logo').css('background-position', '0 ' + ch_posY[Math.floor(Math.random() * ch_posY.length)] + 'px');

	//
	$('[data-tip]').tooltip()

	$(".ch-show-more").click(function(){
		$(this).children("ul").toggle();
	});

	// Facu´s code ;)
	if(!Modernizr.input.placeholder){

		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('ch-placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('ch-placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});
	}
	// 


});