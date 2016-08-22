members_list=[
{imgname:"le4f.jpg",name:"Le4F", intro:"冷夜", blog:"http://le4f.net", blogname:"SwordSoul"},
{imgname:"zing.jpg",name:"Zing", intro:"", blog:"http://nevercease.co/", blogname:"Nevercease"},
{imgname:"phithon.jpg",name:"Phithon", intro:"帅气的文艺青年<br>喜欢一切关于代码的事物。", blog:"http://www.leavesongs.com", blogname:""},
{imgname:"dm_.jpg",name:"DM_", intro:"think as a hacker", blog:"http://x0day.me", blogname:"DM_'s Blog"},
{imgname:"anonymous.jpg",name:"Dawnray", intro:"达生", blog:"", blogname:""},
{imgname:"hkhide.jpg",name:"HKHide", intro:"比较能吃<br>能睡<br>时而欢乐<br>时而深沉", blog:"", blogname:""},
{imgname:"anonymous.jpg",name:"韩光 - 刺客", intro:"寒风暗月树影斜<br>光华已然昨日花<br>次年春暖花开日<br>客来寒舍品浊茶", blog:"", blogname:""},
{imgname:"d_m.jpg",name:"D_M", intro:"派大星，陪我去抓水母吧？", blog:"http://lidawei.me/", blogname:"断电的小晓城"},
{imgname:"bigtang.jpg",name:"Bigtang", intro:"", blog:"http://www.bigtang.org", blogname:"Bigtang's Blog"},
{imgname:"chuhades.jpg",name:"Chu", intro:"Talk is cheap<br>show me the shell.", blog:"http://sh3ll.me", blogname:"Chu's Blog"},
{imgname:"izy.jpg",name:"Izy", intro:"", blog:"http://1zy.pw", blogname:"Izy's Blog"},
{imgname:"netfairy.jpg",name:"NetFairy", intro:"关注网络安全技术", blog:"http://www.netfairy.net", blogname:"Netfairy's Blog"},
{imgname:"M.jpg", type:"SPECIAL"},
{imgname:"E.jpg", type:"SPECIAL"},
{imgname:"M.jpg", type:"SPECIAL"},
{imgname:"B.jpg", type:"SPECIAL"},
{imgname:"E.jpg", type:"SPECIAL"},
{imgname:"R.jpg", type:"SPECIAL"},
{imgname:"S.jpg", type:"SPECIAL"},
{imgname:"th1nk.jpg",name:"Th1nk", intro:"", blog:"", blogname:""}, {imgname:"ashitaka.jpg",name:"Ashitaka", intro:"祖传IDA<br>专治F5", blog:"", blogname:"Blog"},
{imgname:"larryxi.jpg",name:"Larry", intro:"Nothing but gold can stay", blog:"", blogname:""},
{imgname:"damnull.jpg",name:"damNull", intro:"开发一枚", blog:"", blogname:""},
{imgname:"mathias.jpg",name:"Math1as", intro:"没有观剧者的真实<br>不过等同于幻想", blog:"http://www.math1as.com", blogname:"Math1as' Blog"},
{imgname:"rj1ng.jpg",name:"Rj1ng", intro:"Ring of fortune.", blog:"http://rj1ng.com", blogname:"Rj1ng's Blog"},
{imgname:"rickyhao.jpg",name:"Ricky", intro:"滴水成珠", blog:"http://www.rickyhao.com", blogname:"Ricky's Blog"},
{imgname:"ulin.jpg",name:"Ulin", intro:"XDSEC打杂程序员", blog:"http://www.u1in.cn", blogname:"Ulin's Blog"},
{imgname:"silver.jpg",name:"Silver", intro:"高级IDA启动工程师", blog:"http://www.iret.xyz", blogname:"Silver's Blog"},
{imgname:"sudalover.jpg",name:"Sud0", intro:"不懂算法的前端狗", blog:"http://blog.sudalover.com", blogname:"Sud0's Blog"},
{imgname:"songfeng.jpg",name:"松风", intro:"游离在边缘的、未找到状态的学习者", blog:"", blogname:""},
{imgname:"heimao.jpg",name:"黑猫", intro:"喵", blog:"", blogname:""},
{imgname:"icemakr.jpg",name:"Icemakr", intro:"", blog:"http://0byjwzsf.me", blogname:"Icemakr's Blog"},
{imgname:"klaus.png",name:"Klaus", intro:"", blog:"http://blog.klaus.link/", blogname:""},
{imgname:"drimtuer.jpg",name:"Drimtuer", intro:"二进制渣渣一只<br>拖延型强迫症", blog:"", blogname:""},
{imgname:"iphan.jpg",name:"1Phan", intro:"", blog:"http://iphan.net", blogname:""},
{imgname:"watcher.jpg",name:"watcher", intro:"一无所有<br>无所不能", blog:"http://www.w1tcher.com", blogname:""},
{imgname:"halo.jpg",name:"Halo", intro:"我爱学习", blog:"http://firmianay.github.io/", blogname:""},
{imgname:"liuil.jpg",name:"liuil", intro:"Stay hungry<br>Stay foolish", blog:"https://liuil.top", blogname:""},
{imgname:"jianwutianxia.jpg",name:"剑舞天下", intro:"希望成为一个专注于硬件的软件工程师", blog:"http://wsdlhlc.blog.163.com/", blogname:""},
{imgname:"U.jpg", type:"SPECIAL"},
];
domtempalte=$("#t_member")[0].innerHTML;
t_noblog=$("#t_member_noblog")[0].innerHTML;
blankspace=$("#t_blank")[0].innerHTML;
fragment='';
len=members_list.length;
i=0;
for (; i<len; i++){
	if (members_list[i].type==="SPECIAL"){
		fragment += blankspace.replace(/\{seq\}/, i )
					.replace(/\{imgname\}/, members_list[i].imgname )
	}else if (members_list[i].blog===""){
	fragment += t_noblog
		.replace(/\{seq\}/, i )
		.replace(/\{name\}/, members_list[i].name )
		.replace(/\{imgname\}/, members_list[i].imgname )
		.replace(/\{intro\}/, members_list[i].intro )
	}else{
	fragment += domtempalte
		.replace(/\{seq\}/, i )
		.replace(/\{name\}/, members_list[i].name )
		.replace(/\{imgname\}/, members_list[i].imgname )
		.replace(/\{intro\}/, members_list[i].intro )
		.replace(/\{blog\}/, members_list[i].blog )
		.replace(/\{blogname\}/, members_list[i].blogname)
	}
};
$('.member_list')[0].innerHTML=fragment;
