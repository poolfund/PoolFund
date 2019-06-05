var user = document.getElementById("username");
var clicks = 0;

function Invite(){
	email = document.getElementById("email").value;
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
    	clicks += 1;
		document.getElementById("clicks").innerHTML = clicks;
		document.getElementById("email").value = "";
    }
    else{
    	window.alert("Enter valid email");
    }
    return;
}