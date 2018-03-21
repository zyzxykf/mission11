$(document).ready(function(){
	$(".header nav li").hover(function(){
		$(this).children(".slide-submeu").show();
	}, function() {
		$(this).children(".slide-submeu").hide();
	})

	$(".header .userinfo-login").hover(function(){
		$(this).children(".user-slide").show();
	}, function() {
		$(this).children(".user-slide").hide();
	});

	/*把第一张图clone,如何添加为最后一张图；*/
	var cloneFirshpic = $(".swiper-wrapper>a").first().clone();
	$(".swiper-wrapper").append(cloneFirshpic);
	/*获取设备宽高*/
	var deviceWidth = $(window).width();
	/*获取轮播图数量*/
	var picSum = $(".swiper-wrapper>a").length;
	/*轮播图的位置*/
	var i = 0;
	/*设置轮播图wrapper宽度；*/
	$(".swiper-wrapper").css("width", deviceWidth*picSum+"px");
	$(".swiper-wrapper>a").css("width", deviceWidth+"px");

	var t = setInterval(function(){
		carousel();
	}, 5000);

	function carousel() {
		i++;
		if(i == picSum) {
			$(".swiper-wrapper").css({"left": "0px"});
			i = 1;
		}
		$(".swiper-wrapper").stop().animate({"left": -deviceWidth*i+"px"}, 1000);
		/*if(i == picSum-1) {
			$(".carousel-nav-item").eq(0).addClass("selected").siblings().removeClass("selected");
		} else {
			$(".carousel-nav-item").eq(i).addClass("selected").siblings().removeClass("selected");
		}*/
	};
});