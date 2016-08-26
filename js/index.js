function click_jmp()
{
	$(".a_X").click(function (){screen('second');});
	$(".a_D").click(function (){screen('third');});
	$(".a_S").click(function (){screen('forth');});
	$(".a_E").click(function (){screen('fifth');});
	$(".a_C").click(function (){screen('sixth');});
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
			'bottom':'400px',
			'opacity':'1',
			'z-index':'100'
		});
		$('#list_guide_d').delay(500).css({
			'bottom':'340px',
			'opacity':'1',
			'z-index':'100'
		});
		$('#list_guide_s').delay(500).css({
			'bottom':'280px',
			'opacity':'1',
			'z-index':'100'
		});
		$('#list_guide_e').delay(500).css({
			'bottom':'220px',
			'opacity':'1',
			'z-index':'100'
		});
		$('#list_guide_c').delay(500).css({
			'bottom':'160px',
			'opacity':'1',
			'z-index':'100'
		});
		list_guide_flag = 1;
	}
	else 
	{
		$('#list_guide_x').css({
			'bottom':'100px',
			'opacity':'0',
			'z-index':'-1'
		});
		$('#list_guide_d').delay(500).css({
			'bottom':'100px',
			'opacity':'0',
			'z-index':'-1'
		});
		$('#list_guide_s').delay(500).css({
			'bottom':'100px',
			'opacity':'0',
			'z-index':'-1'
		});
		$('#list_guide_e').delay(500).css({
			'bottom':'100px',
			'opacity':'0',
			'z-index':'-1'
		});
		$('#list_guide_c').delay(500).css({
			'bottom':'100px',
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
	var e = new sHover("head","info");
	e.set({
	speed:7,
	opacity:100,						
	opacityChange:true
	});
}
function new_div()
{
	var n = new sHover("new","new_hover");
	e.set({
	speed:7,
	opacity:80,						
	opacityChange:true
	});
}
var now_position;
var last_position;
var scroll;
var list_guide_flag = 0;

$(document).ready(function ()
{
	now_position = $(window).scrollTop();
	scroll = 0;

	//alert(navigator.userAgent);
	list_guide_show();
	click_jmp();
	members();

	$('#list_guide_top p').text(scroll);
	
	$(window).scroll(function (){
		list_guide_show();
		screen_lock(5);
	});
	
	console.log("Have you found me? Submit flag to admin in the QQ group or fill it in the hire table: xd53c{1nd3x_Is_saiGao}. Wait for more interestring things at *.*.141.85 later.");

});
