$(function(){
	var winT;

	var pageN=0;
	var winH;

	var timer=0;
	var categoryFlag=false;

	$(window).resize(function(){
		winH=$(window).height();
	});
	$(window).trigger("resize");

	$(window).scroll(function(){

		winT=$(window).scrollTop();
		
		clearTimeout(timer);

		timer=setTimeout(function(){
			winT=$(window).scrollTop();

			if(winT < $(".sub1").offset().top - winH/2){      //offset().top >> 선택한 영역의 상단 좌표 얻기
				pageN=0;
			}
			else if(winT < $(".sub2").offset().top - winH/2){
				pageN=1;
			}
			else if(winT < $(".sub3").offset().top - winH/2){
				pageN=2;
			}
			else if(winT < $(".sub4").offset().top - winH/2){
				pageN=3;
			}
			else if(winT < $(".sub5").offset().top - winH/2){
				pageN=4;
			}
			else{
				pageN=5;
			}
			if(pageN == 0){
				$(".slider").addClass("active");
			}
			else{
				$(".sub"+pageN).addClass("active");
			}
			$("#gnb li").removeClass("active");
			$("#gnb li").eq(pageN).addClass("active");
		}, 50);
		
		if(categoryFlag){
			return;
		}
		else{
			if(pageN == 0){
				$(".slider").addClass("active");
			}
			else{
				$(".sub"+pageN).addClass("active");

				if(pageN == 5){
					categoryFlag=true;
				}
			}
		}

		if(winT > 100){
			if($(".top_button").hasClass("scrolled") == false)
			$(".top_button").addClass("scrolled");
		}
		else{
			$(".top_button").removeClass("scrolled");
		}
		if(winT > 630){
			if($("#header").hasClass("scrolled") == false) {
			$("#header").addClass("scrolled");
			firstTop=false;
			}
		}
		else{
			if($("#header").hasClass("scrolled") == true) 
			$("#header").removeClass("scrolled");
			firstTop=true;
		}
		console.log(winT);

		
	});

	$(".top_button").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop : 0}, 300);
	});

	$("#header .tab").click(function(e){
		e.preventDefault();
		$("#mobile").addClass("active");
		$(".dim").addClass("active");
		$("body").addClass("fixed");
	})

	$("#mobile .close").click(function(e){
		e.preventDefault();
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
		$("body").removeClass("fixed");
	});
	$(".dim").click(function(e){
		e.preventDefault();
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
		$("body").removeClass("fixed");
	});

	var winW;

	$(window).resize(function(){

		winW=$(window).width();

		if(winW > 720){
			if($("#mobile").hasClass("active") == true){
				$("#mobile").removeClass("active");
				$(".dim").removeClass("active");
				$("body").removeClass("fixed");
			}
		}
	});

	$(window).trigger("resize");
	$(window).trigger("scroll");


	var topPos=0;

	$("#gnb li").click(function(e){
		e.preventDefault();
		topPos=$(this).find("a").attr("href");
		topPos=$(topPos).offset().top;
		$("html").animate({scrollTop:topPos}, 400);
	});
	$("#mobile li").click(function(e){
		e.preventDefault();
		$(".dim").trigger("click");
		topPos=$(this).find("a").attr("href");
		topPos=$(topPos).offset().top;
		$("html").delay(400).animate({scrollTop:topPos}, 400);
	});
});