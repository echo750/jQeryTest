var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;
		}
	},
	getEvent:function(event){
		return event?event:window.event;
	},
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,flase);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	}
}
EventUtil.addHandler(window,"load",changeSkin);
EventUtil.addHandler(window,"load",search);
EventUtil.addHandler(window,"load",nav);


//换肤
function changeSkin(){
	var oSkin=document.getElementById("skin");
	var aLi=oSkin.getElementsByTagName("li");
	var oLink=document.getElementById("cssfile");
	var event=EventUtil.getEvent(event);
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		EventUtil.addHandler(aLi[i],"click",function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className="";
			}
			this.className="selected";
			oLink.setAttribute("href","styles/skin/skin_"+this.index+".css");
		});
	}
}
//搜索框文字效果
function search(){
	var oSearch=document.getElementById("inp_search");
	EventUtil.addHandler(oSearch,"focus",function(){
		oSearch.value="";
		oSearch.className="focus";
	});
	EventUtil.addHandler(oSearch,"blur",function(){
		oSearch.value="请输入文本框内容";
		oSearch.className="";
	});
	EventUtil.addHandler(oSearch,"keyup",function(event){
		if(event.keyCode==13){
			alert("回车提交结果");
		}
	});
}

//导航栏二级菜单显示
function nav(){
	var oNav=document.getElementById("nav");
	var aLi=oNav.getElementsByTagName("li");
	var a_jnNav=oNav.getElementsByClassName("jnNav");
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		EventUtil.addHandler(aLi[i],"mouseover",function(){
			a_jnNav[this.index-1].style.display="block";
		});
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		EventUtil.addHandler(aLi[i],"mouseout",function(){
			a_jnNav[this.index-1].style.display="none";
		});
	}
}
//广告图片文字淡出显示
function ad(){
	var aList=document.getElementsByClassName("imgOpacity");
	var oImgRoll=document.getElementById("jnImageRoll");
	var oImg=oImgRoll.getElementsByTagName("img");
	for(var i=0;i<aList.length;i++){
		aList[i].index=i;
		aList[i].style.opacity="0.7";
		EventUtil.addHandler(aList[i],"mouseover",function(){
			for(var i=0;i<aList.length;i++){
				oImg[i].style.display="none";
			}
			oImg[this.index].style.display="block";
		})
	}
}
EventUtil.addHandler(window,"load",ad);

