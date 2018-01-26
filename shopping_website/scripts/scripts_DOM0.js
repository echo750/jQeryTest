function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
function changeSkin(){
	var oSkin=document.getElementById("skin");
	var aLi=oSkin.getElementsByTagName("li");
	var oLink=document.getElementById("cssfile");
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className="";
			}
			this.className="selected";
			oLink.setAttribute("href","styles/skin/skin_"+this.index+".css");
		}
	}
}
function inputSearch(){
	var oSearch=document.getElementById("inp_search");
	oSearch.onfocus=function(){
		this.value="";
		this.className="focus";
	};
	oSearch.onblur=function(){
		this.value="请输入商品名称";
		this.className="";
	};
	oSearch.onkeyup=function(e){
		if(e.keyCode==13){
			alert("回车提交表单");
		}
	};
}
function nav(){
	var oNav=document.getElementById("nav");
	var aLi=oNav.getElementsByTagName("li");
	var a_jnNav=oNav.getElementsByClassName("jnNav");
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			a_jnNav[this.index-1].style.display="block";
		};
		aLi[i].onmouseout=function(){
			a_jnNav[this.index-1].style.display="none";
		};
	}
}
function ad(){
	var oImgRoll=document.getElementById("jnImageRoll");
	var aList=document.getElementsByClassName("imgOpacity");
	var oImg=oImgRoll.getElementsByTagName("img");
	for(var i=0;i<aList.length;i++){
		aList[i].index=i;
		aList[i].style.opacity="0.7";
		aList[i].onmouseover=function(){
			for(var i=0;i<oImg.length;i++){
				oImg[i].style.display="none";
			}
			oImg[this.index].style.display="block";
		};
	}
}
addLoadEvent(changeSkin);
addLoadEvent(inputSearch);
addLoadEvent(nav);
addLoadEvent(ad);