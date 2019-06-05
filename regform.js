console.log("HERE")

function CheckM(){
    console.log("HERE1")
	if(document.getElementById("i").checked){
        document.getElementById("i").checked = false;
    }
}

function CheckI(){
    console.log("HERE2")
    if(document.getElementById("m").checked){
        document.getElementById("m").checked = false;
    }
}


function CheckOk(){
    console.log("HERE3")
    if(document.getElementById("m").checked){
        document.getElementById("m").checked = true;
        document.getElementById("i").checked = true;
    }
    else if(document.getElementById("i").checked){
        document.regAction.action = "indexInvestor.html";
        document.getElementById("m").checked = true;
        document.getElementById("i").checked = true;
    }
}