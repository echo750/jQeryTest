//换肤
$(function(){
	var skin=$("#skin li");
	skin.click(function(){
		$("#"+this.id).addClass("selected")
					.siblings().removeClass("selected");
		$("#cssfile").attr("href","styles/skin/"+this.id+".css");
	});
});
//搜索框文字效果
$(function(){
	$("#inp_search").focus(function(){
		$(this).addClass("focus");
		if($(this).val()==this.defaultValue){
			$(this).val("");
		}
	}).blur(function(){
		$(this).removeClass("focus");
		if($(this).val()==""){
			$(this).val(this.defaultValue);
		}
	}).keyup(function(e){
		if(e.which==13){
			alert("回车提交表单");
		}
	})
})

//导航栏显示二级菜单
$(function(){
	$("#nav li").hover(function(){
		$(this).find(".jnNav").show();
	},function(){
		$(this).find(".jnNav").hide();
	})
})

//广告效果
$(function(){
	var $imgrolls=$("#jnImageRoll div a");
	$imgrolls.css("opacity","0.7");
	var len=$imgrolls.length;
	var index=0;
	var adTimer=null;
	$imgrolls.mouseover(function(){
		index=$imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();
	$("#jnImageRoll").hover(function(){
		if(adTimer){
			clearInterval(adTimer);
		}
	},function(){
		adTimer=setInterval(function(){
			showImg(index);
			index++;
			if(index==len){
				index=0;
			}
		},5000);
	}).trigger("mouseleave");
})
function showImg(index){
	var $rollobj=$("#jnImageRoll");
	var $rolllist=$rollobj.find("div a");
	var newhref=$rolllist.eq(index).attr("href");
	$("#JS_imgWrap").attr("href",newhref)
					.find("img").eq(index).stop(true,true).fadeIn()
					.siblings().fadeOut();
	$rolllist.removeClass("chos").css("opacity","0.7")
			.eq(index).addClass("chos").css("opacity","1");
}

//超链接显示
$(function(){
	var x=10;
	var y=20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle=this.title;
		this.title="";
		var tooltip="<div id='tooltip'>"+this.myTitle+"</div>";
		$("body").append(tooltip);
		$("#tooltip").css({
			"top":(e.pageY+y)+"px",
			"left":(e.pageX+x)+"px"
		}).show("fast");
	}).mouseout(function(){
		this.title=this.myTitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip").css({
			"top":(e.pageY+y)+"px",
			"left":(e.pageX+x)+"px"
		});
	});
})

// 横向滚动效果
$(function(){
	$("#jnBrandTab li a").click(function(){
		$(this).parent().addClass("chos")
				.siblings().removeClass("chos");
		var idx=$("#jnBrandTab li a").index(this);
		showBrandList(idx);
		return false;
	}).eq(0).click();
});
function showBrandList(index){
	var $rollobj=$("#jnBrandList");
	var rollWidth=$rollobj.find("li").outerWidth();
	rollWidth=rollWidth*4;
	$rollobj.stop(true,false).animate({left:-rollWidth*index},1000);
}


