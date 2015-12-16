
function onTextFocused(){
	this.style.color = "#666666";
}

function onTextUnfoucsed(){
	this.style.color = "#FFFFFF";
}

function switchNavigator(){
	this.className="active_border";
	this.getElementsByTagName("a").className="active_navigator";
	var arrNavigators = document.getElementById("navigator").getElementsByTagName("div");
	if(arrNavigators.length > 0){
		alert(arrNavigators.length);
		for(int i=0; i<arrNavigators.length; i++){
			if(arrNavigators[i] != this){
				arrNavigators[i].className = "";
				arrNavigators[i].getElementsByTagName("a").className="";
			}else{
				this.className="active_border";
				this.getElementsByTagName("a").className="active_navigator";
			}
		}
	}
}