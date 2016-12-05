// JavaScript Document
$(function(){
	
	$('.con .page1').removeClass('no');
	//ol li导航的切换和切换屏幕
	$('.gps li').click(function(e) {
		var xh=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.con').stop().animate({'top':-xh*100+'%'},500);
		$('.con>div').eq(xh).removeClass('no').siblings().addClass('no');	

		s_mun=xh;
	});
	//鼠标滚轮事件，滚动的时候切换屏幕和切换ol li；
	var s_num=0;
	var timer=null;
	$(document).mousewheel(function(e,d){
		clearTimeout(timer)	
		timer=setTimeout(jlfn,300)
		function jlfn(){
			s_num-=d
			if(s_num>4){s_num=4;}
			if(s_num<0){s_num=0;}
			$('.gps li').eq(s_num).addClass('current').siblings().removeClass('current');
			$('.con').stop().animate({'top':-s_num*100+'%'},300)
			$('.con>div').eq(s_num).removeClass('no').siblings().addClass('no');	
			//console.log(s_num);
		}
	})

	//音乐的暂停和播放
	$('.ms').toggle(function(e) {
		$('.audio01').get(0).pause();
		$(this).css('background-position','0 -14px')
    },function(){	
		$('.audio01').get(0).play();
		$(this).css('background-position','0 0')
	});

})