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
function list_guide_toggle()
{
	if(list_guide_flag == 0)
	{
		$('#list_guide').css('opacity',1);
		$('#list_guide_top').css('opacity',1);
		$('#list_guide_x').css({
			'bottom':'62%',
			'opacity':'1',
			'z-index':'5'
		});
		$('#list_guide_d').delay(500).css({
			'bottom':'52%',
			'opacity':'1',
			'z-index':'5'
		});
		$('#list_guide_s').delay(500).css({
			'bottom':'42%',
			'opacity':'1',
			'z-index':'5'
		});
		$('#list_guide_e').delay(500).css({
			'bottom':'32%',
			'opacity':'',
			'z-index':'5'
		});
		$('#list_guide_c').delay(500).css({
			'bottom':'22%',
			'opacity':'1',
			'z-index':'5'
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
function screen(num)
{
	jmp_flag = 1;
	$("html,body").animate({scrollTop: $("#"+num+"screen").offset().top}, 500);
	setTimeout('jmp_flag = 0;now_position = $("#'+num+'screen").offset().top + 1;last_position = $("#'+num+'screen").offset().top - 1;',500)
}
function xdsec_information_title_move()
{
	if(parseInt($(window).scrollTop()) <= parseInt($('.xdsec_information_title').position().top)+parseInt($(window).height())+parseInt($('.xdsec_information_title').css('height')))
		{
			//$('.xdsec_information_title').css('left',$(window).width()*0.25*($(window).scrollTop()/$(window).height())+'px');
		}
}
function xdsec_information_content_show()
{
	if(parseInt($(window).scrollTop()) <= parseInt($('.xdsec_information_content').position().top)+parseInt($(window).height())+parseInt($('.xdsec_information_content').css('height')))
	{
		//$('.xdsec_information_content').css('left',$(window).width()*0.20*($(window).scrollTop()/$(window).height())+'px');
	}
}
function xdsec_history_line_show(num)
{
	var screen = 3;
	if ($(window).scrollTop() <= $('#xdsec_history_line_'+1).position().top+$(window).height()*(screen-0.2)) 
		{
			$('#xdsec_history_line_'+num).css('width',$(window).width()*0.4*($(window).scrollTop()/($('#xdsec_history_line_'+1).position().top+($(window).height()*(screen-0.2))))+'px');
		}
}
function xdsec_history_icon_line_css(num)
{
	var icon_left = 0.05*$(window).width()+'px';
	var icon_height = $(window).height()*0.1;
	var icon_width = icon_height;
	var icon_radius = icon_width * 0.5;
	$('#xdsec_history_icon_'+num).css({
		'position':'absolute',
		'width':icon_width+'px',
		'height':icon_height+'px',
		'border-radius':icon_radius+"px",
		'background-color':"black",
		'z-index': '2',
		/*'border-bottom': icon_height*0.08+'px solid red',*/
		'top':($(window).height()*0.05*num)+(icon_height*(num-1))+'px',
		'left':icon_left
	});
	$('#xdsec_history_line_'+num).css({
		'position':'absolute',
		'height':icon_height-icon_height*0.08+'px',
		'width':'0px',
		'border-top-left-radius':icon_radius+'px',
		'border-bottom-left-radius':icon_radius+'px',
		'background-color':'white',
		'overflow':'hidden',
		'border-bottom': icon_height*0.08+'px solid black',
		'top':($(window).height()*0.05*num)+(icon_height*(num-1))+'px',
		'left':icon_left

	});
	$('#xdsec_history_content_'+num).css('margin-left',icon_radius);
	$('#xdsec_history_content_'+num).css('line-height',icon_height+'px');
}
function screen_lock(difficult)
{
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
	//$('#debug h3').text(last_position +'<'+ $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())) +' '+ now_position +'>='+ $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())) +' '+ scroll+'!=10');
	//alert(last_position +'<'+ $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())) +' '+ now_position +'>='+ $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())) +' '+ scroll+'!=10');
	if (last_position < $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())) && now_position >= $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())) && scroll != difficult) 
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
		xdsec_history_line_show(5);
		xdsec_history_line_show(6);
		if (scroll == difficult) 
		{
			scroll = 0;
			//now_position = $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())+1)+1;
		}
	}

}
function members()
{
	var left =($(window).width()-1200)/2;
	var top =($(window).height()-480)/2;
	$('#member_background').css({
		'position':'absolute',
		'left':left,
		'top':top,
		'height':'480px',
		'width':'1200px',
	});
}
function group_icon()
{
	var left=($(window).width()*0.16-100)/2;
	for(var i=1;i<=6;i++)
	{
		$('#group_icon_'+i).css({
			'position':'absolute',
			'top':$(window).height()*0.05+'px',
			'left':left+'px',
			'width':'100px',
			'height':'100px',
			'border-radius':'50px',
			'background-color':'black',
			'z-index':'5',
		});
	}
}
function enroll()
{
	var left = ($(window).width()-1000)/2;
	for(var i =1;i<=4;i++)
	{
		$('#collections_'+i).css({
			'position':'absolute',
			'height':'200px',
			'width':'200px',
			'margin':'25px',
			'left':left+250*(i-1)+'px',
			'top':$(window).height()*0.2+'px',
			'background-color':'black'
		});
	}
}
var now_position;
var scroll;
var last_position;
var jmp_flag = 0;
var list_guide_flag = 0;
$(document).ready(function ()
{
	members();
	group_icon();
	enroll();
	var e = new sHover("head","info");
	e.set({
	speed:7,
	opacity:100,						
	opacityChange:false
	});
	now_position = $(window).scrollTop();
	scroll = 0;
	list_guide_show();
	$('#list_guide_top p').text(scroll);
	xdsec_history_icon_line_css(1);
	xdsec_history_icon_line_css(2);
	xdsec_history_icon_line_css(3);
	xdsec_history_icon_line_css(4);
	xdsec_history_icon_line_css(5);
	xdsec_history_icon_line_css(6);
	xdsec_history_icon_line_css(7);
	xdsec_history_icon_line_css(8);
	var history_height = $(window).height()*0.5;
	var history_width = history_height;
	var history_radius = history_height*0.5;

	$("#a_X").click(function (){screen('second');});
	$("#a_D").click(function (){screen('third');});
	$("#a_S").click(function (){screen('forth');});
	$("#a_E").click(function (){screen('fifth');});
	$("#a_C").click(function (){screen('sixth');});
	$('#list_guide_x').click(function (){screen('second');});
	$('#list_guide_d').click(function (){screen('third');});
	$('#list_guide_s').click(function (){screen('forth');});
	$('#list_guide_e').click(function (){screen('fifth');});
	$('#list_guide_c').click(function (){screen('sixth');});
	$('#list_guide_top').click(function (){
		jmp_flag =1;
		$("html,body").animate({scrollTop: 0}, 500);
		setTimeout('now_position = 0;last_position = 0;jmp_flag = 0;',500);
	});
	$(window).scroll(function (){
		$('#list_guide_top p').text(scroll);
		if (jmp_flag == 0) 
		{
			screen_lock(10);
		}
		else
		{
			list_guide_show();
			/*xdsec_information_title_move();
			xdsec_information_content_show();*/
			xdsec_history_line_show(1);
			xdsec_history_line_show(2);
			xdsec_history_line_show(3);
			xdsec_history_line_show(4);
			xdsec_history_line_show(5);
			xdsec_history_line_show(6);
		}
	});
	$("#list_guide").click(function (){
		list_guide_toggle();
	});
});