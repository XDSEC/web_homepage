function click_jmp()
{
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
		$("html,body").animate({scrollTop: 0}, 500);
		setTimeout('now_position = 0;last_position = 0;jmp_flag = 0;',500);
	});
	$("#list_guide").click(function (){
		list_guide_toggle();
	});
}

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
				$('#list_guide').css('z-index',100);
				$('#list_guide_alphabet').css('opacity',($(window).scrollTop()/$(window).height()));
				$('#list_guide_top').css('opacity',($(window).scrollTop()/$(window).height()));
				$('#list_guide_top').css('z-index',100);
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
			'z-index':'100'
		});
		$('#list_guide_d').delay(500).css({
			'bottom':'52%',
			'opacity':'1',
			'z-index':'100'
		});
		$('#list_guide_s').delay(500).css({
			'bottom':'42%',
			'opacity':'1',
			'z-index':'100'
		});
		$('#list_guide_e').delay(500).css({
			'bottom':'32%',
			'opacity':'',
			'z-index':'100'
		});
		$('#list_guide_c').delay(500).css({
			'bottom':'22%',
			'opacity':'1',
			'z-index':'100'
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
	$("html,body").animate({scrollTop: $("#"+num+"screen").offset().top}, 500);
	setTimeout('jmp_flag = 0;now_position = $("#'+num+'screen").offset().top + 1;last_position = $("#'+num+'screen").offset().top - 1;',500)
}
function screen_lock(difficult)
{
	/*记住当前位置跟下一个位置*/
	if (scroll == 0) 
	{
		last_position = now_position;
		now_position = $(window).scrollTop();
	}
	else
	{
		/*若当触发lock时上滑，lock清零*/
		if ($(window).scrollTop() < Math.ceil(last_position/$(window).height()) * $(window).height()) 
		{
			scroll = 0;
		}
	}
	/*若上一位置和下一位置被屏幕交界分割，判断到达lock点，进入lock*/
	if (last_position < $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())) && now_position >= $(window).height()*Math.floor(($(window).scrollTop()/$(window).height())) && scroll < difficult) 
	{
		scroll = scroll + 1;
		/*lock点内的滚动都会跳转至相应的屏所对应的lock点*/
		$(document).scrollTop(Math.floor(now_position/$(window).height()) * $(window).height() );
	}
	else
	{
		/*直到滚动次数达到difficult 跳出lock*/
		scroll = 0;
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

	var e = new sHover("head","info");
	e.set({
	speed:7,
	opacity:80,						
	opacityChange:true
	});
}
function group_icon()
{
	var left=($('.group').width()-100)/2;
	for(var i=1;i<=6;i++)
	{
		$('#group_icon_'+i).css({
			'position':'absolute',
			'top':$(window).height()*0.05+'px',
			'left':left+'px',
			'width':'100px',
			'height':'100px',
			'border-radius':'50px',
			'background-size':'100%',
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
var last_position;
var scroll;
var list_guide_flag = 0;

$(document).ready(function ()
{
	now_position = $(window).scrollTop();
	scroll = 0;

	list_guide_show();
	click_jmp();
	members();
	group_icon();
	enroll();

	$('#list_guide_top p').text(scroll);
	
	$(window).scroll(function (){
		list_guide_show();
	});
	
});
