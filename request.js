/** Author Wellington Soares da Luz */

function $_GET(parameter){
	try{
		var parameters = window.location.toString().split("?")[1].split("&");
		for(var i=0; i<parameters.length;i++){
			if(parameters[i].split("=")[0]==parameter){
				return  decodeURIComponent(parameters[i].split("=")[1].replace(/\+/g, " "));
			}
		}
		return null;
	}catch (e) {
		alert(e.message);
	}
};

 function $_setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
};

function $_getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};



function $_rmvCookie(cname) {
	$_setCookie(cname, "", -1)
};


