var user = document.getElementById("username");
var pw = document.getElementById("password");

var incuser = "Jon25";
var incpw = "Password123!";

var form = document.getElementById("form");
var pu = document.getElementById("popup");

function Incorrect(){
	if (user.value == incuser){
		form.action = "login.html";
		pu.innerHTML = "Please enter in valid credentials.";

	}
	if (pw.value == incpw){
		form.action = "login.html";
	 	pu.innerHTML = "Please enter in valid credentials.";
	}
}