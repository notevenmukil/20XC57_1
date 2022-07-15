function submit()
{
	document.getElementById("frm1").submit();
}

function display(){
	var x = document.getElementById("frm1");
	var text = "";
	var i;
	for(i = 0;i < x.length ; i++){
		text += x.elements[i].value + "<br>";
	}
	document.getElementById("demo").innerHTML = text;
}

function setCookie(cname,cvalue, exdays){
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname+"="+cvalue+";"+ expires +";path=/";
	//document.cookie = "username=John Doe"; 
	console.log("here");
}
