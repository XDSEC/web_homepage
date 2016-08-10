function list_guide_show()
		{
			if (list_guide_flag == 1) 
			{
				list_guide_toggle();
			}
			else if ($(window).scrollTop() < $(window).height()*0.3) 
			{
				$('#list_guide').css('opacity',($(window).scrollTop()/$(window).height()));
				$('#list_guide').css('z-index',-1);
				$('#list_guide_alphabet').css('opacity',($(window).scrollTop()/$(window).height()));
				$('#list_guide_top').css('opacity',($(window).scrollTop()/$(window).height()));
				$('#list_guide_top').css('z-index',-1);
			}
			else if ($(window).scrollTop() >= $(window).height()*0.3) 
			{
				$('#list_guide').css('opacity',($(window).scrollTop()/$(window).height()));
				$('#list_guide').css('z-index',3);
				$('#list_guide_alphabet').css('opacity',($(window).scrollTop()/$(window).height()));
				$('#list_guide_top').css('opacity',($(window).scrollTop()/$(window).height()));
				$('#list_guide_top').css('z-index',3);
			}
		}

		var list_guide_flag = 0;
		function list_guide_toggle()
		{
			if(list_guide_flag == 0)
			{
				$('#list_guide').css('opacity',1);
				$('#list_guide_top').css('opacity',1);
				$('#list_guide_x').css({
					'bottom':'62%',
					'opacity':'1',
					'z-index':'1'
				});
				$('#list_guide_d').delay(500).css({
					'bottom':'52%',
					'opacity':'1',
					'z-index':'1'
				});
				$('#list_guide_s').delay(500).css({
					'bottom':'42%',
					'opacity':'1',
					'z-index':'1'
				});
				$('#list_guide_e').delay(500).css({
					'bottom':'32%',
					'opacity':'1',
					'z-index':'1'
				});
				$('#list_guide_c').delay(500).css({
					'bottom':'22%',
					'opacity':'1',
					'z-index':'1'
				});

				list_guide_flag = 1;
			}
			else 
			{
				$('#list_guide_x').css({
					'bottom':'12%',
					'opacity':'0',
					'z-index':'-1'
				});
				$('#list_guide_d').delay(500).css({
					'bottom':'12%',
					'opacity':'0',
					'z-index':'-1'
				});
				$('#list_guide_s').delay(500).css({
					'bottom':'12%',
					'opacity':'0',
					'z-index':'-1'
				});
				$('#list_guide_e').delay(500).css({
					'bottom':'12%',
					'opacity':'0',
					'z-index':'-1'
				});
				$('#list_guide_c').delay(500).css({
					'bottom':'12%',
					'opacity':'0',
					'z-index':'-1'
				});
				list_guide_flag = 0;
			}
		}
		function secondscreen()
		{
			$("html,body").animate({scrollTop: $("#secondscreen").offset().top}, 500);
		}
		function forthscreen()
		{
			$("html,body").animate({scrollTop: $("#forthscreen").offset().top}, 500);
		}
		function thirdscreen()
		{
			$("html,body").animate({scrollTop: $("#thirdscreen").offset().top}, 500);
		}
		function fifthscreen()
		{
			$("html,body").animate({scrollTop: $("#fifthscreen").offset().top}, 500);
		}
		function sixthscreen()
		{
			$("html,body").animate({scrollTop: $("#sixthscreen").offset().top}, 500);
		}
		function xdsec_information_title_move()
		{
			if(parseInt($(window).scrollTop()) <= parseInt($('.xdsec_information_title').position().top)+parseInt($(window).height())+parseInt($('.xdsec_information_title').css('height')))
				{
					$('.xdsec_information_title').css('left',$(window).width()*0.25*($(window).scrollTop()/$(window).height())+'px');
				}
		}
		function xdsec_information_content_show()
		{
			if(parseInt($(window).scrollTop()) <= parseInt($('.xdsec_information_content').position().top)+parseInt($(window).height())+parseInt($('.xdsec_information_content').css('height')))
			{
				$('.xdsec_information_content').css('left',$(window).width()*0.20*($(window).scrollTop()/$(window).height())+'px');
			}
		}
		function xdsec_history_line_show(num)
		{
			var screen = 2;
			if ($(window).scrollTop() <= $('#xdsec_history_line_'+num).position().top+$(window).height()*(screen-0.2)) 
				{
					$('#xdsec_history_line_'+num).css('width',$(window).width()*0.5*($(window).scrollTop()/($('#xdsec_history_line_'+num).position().top+($(window).height()*(screen-0.2))))+'px');
				}
		}
		function xdsec_history_icon_line_css(num)
		{
			var icon_left;
			if (num <= 4) 
			{
				icon_left = num*0.10*$(window).width()+'px';
			}
			else
			{
				icon_left = (9-num)*0.10*$(window).width()+'px';
			}
			var icon_height = $(window).height()*0.2;
			var icon_width = icon_height;
			var icon_radius = icon_width * 0.5;
			$('#xdsec_history_icon_'+num).css({
				'position':'absolute',
				'width':icon_width+'px',
				'height':icon_height+'px',
				'border-radius':icon_radius+"px",
				'background-color':"black",
				'z-index': '2',
				'border-bottom': '5px solid black',
				'top':($(window).height()*0.04*num)+(icon_height*(num-1))+'px',
				'left':icon_left
			});
			$('#xdsec_history_line_'+num).css({
				'position':'absolute',
				'height':icon_height+'px',
				'width':'0px',
				'border-top-left-radius':icon_radius+'px',
				'border-bottom-left-radius':icon_radius+'px',
				'background-color':'white',
				'overflow':'hidden',
				'border-bottom': '5px solid black',
				'top':($(window).height()*0.04*num)+(icon_height*(num-1))+'px',
				'left':icon_left

			});
			$('#xdsec_history_content_'+num).css('margin-left',icon_radius);
			$('#xdsec_history_content_'+num).css('line-height',icon_height+'px');
		}
		function screen_lock(difficult)
		{
			$('#list_guide_top p').text(scroll);
			if (scroll == 0) 
			{
				last_position = now_position;
				now_position = $(window).scrollTop();
			}
			else
			{
				if ($(window).scrollTop() < Math.ceil(last_position/$(window).height()) * $(window).height()) 
				{
					scroll = 0;
				}
			}
			if (last_position < $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())) && now_position > $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())) && scroll != difficult) 
			{
				scroll = scroll + 1;
				$(document).scrollTop(Math.floor(now_position/$(window).height()) * $(window).height() );
			}
			else
			{
				list_guide_show();
				xdsec_information_title_move();
				xdsec_information_content_show();
				xdsec_history_line_show(1);
				xdsec_history_line_show(2);
				xdsec_history_line_show(3);
				xdsec_history_line_show(4);
				/*xdsec_history_line_show(5);
				xdsec_history_line_show(6);
				xdsec_history_line_show(7);
				xdsec_history_line_show(8);*/
				if (scroll == difficult) 
				{
					scroll = 0;
					//now_position = $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())+1)+1;
				}
			}

		}
		var now_position = $(window).scrollTop();
		var scroll = 0;
		var last_position;
		$(document).ready(function ()
		{
			list_guide_show();
			xdsec_history_icon_line_css(1);
			xdsec_history_icon_line_css(2);
			xdsec_history_icon_line_css(3);
			xdsec_history_icon_line_css(4);
			/*xdsec_history_icon_line_css(5);
			xdsec_history_icon_line_css(6);
			xdsec_history_icon_line_css(7);
			xdsec_history_icon_line_css(8);*/
			var history_height = $(window).height()*0.5;
			var history_width = history_height;
			var history_radius = history_height*0.5;
			$('#xdsec_history').css({
				'position':'absolute',
				'top':'40%',
				'height':history_height+'px',
				'width':history_width+'px',
				'background-color':'black',
				'left':'4%',
				'border-radius':history_radius+'px',
			});
			$(window).scroll(function (){
				screen_lock(10);
			});
			$("#list_guide").click(function (){
				list_guide_toggle();
			});
			$("#a_X").click(function (){secondscreen();});
			$("#a_D").click(function (){thirdscreen();});
			$("#a_S").click(function (){forthscreen();});
			$("#a_E").click(function (){fifthscreen();});
			$("#a_C").click(function (){sixthscreen();});
			$('#list_guide_x').click(function (){secondscreen();});
			$('#list_guide_d').click(function (){thirdscreen();});
			$('#list_guide_s').click(function (){forthscreen();});
			$('#list_guide_e').click(function (){fifthscreen();});
			$('#list_guide_c').click(function (){sixthscreen();});
			$('#list_guide_top').click(function top(){
				$("html,body").animate({scrollTop: 0}, 500);
			})
		});