$(function(){
	var skin=$("#skin li");
	$(skin).click(function(){
		switchSkin(this.id);
	});
});
function switchSkin(skinName){
	$("#"+skinName).addClass("selected")
					.siblings().removeClass("selected");
	$("#cssfile").attr("href","styles/skin/"+skinName+".css");
}